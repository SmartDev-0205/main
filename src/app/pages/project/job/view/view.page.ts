import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { JobService } from 'src/app/services/job.service';
import { UserService } from 'src/app/services/user.service';
import { computeStackId } from '@ionic/angular/dist/directives/navigation/stack-utils';
import { ProjectService } from 'src/app/services/project.service';
import { AlertService } from 'src/app/services/alert.service';
import { LoadingService } from 'src/app/services/loading.service';
import { CatService } from 'src/app/services/cat.service';
import { TransMemoryService } from 'src/app/services/trans-memory.service';
import { DataService } from 'src/app/services/data.service';
export class Progress{
  sum:number;
  count:number;
  progress:number;
  constructor(){
    this.sum = 0;
    this.count = 0;
    this.progress = 0;
  }
}
@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  //  variables for concordance search
  private currentTransMemoryId = "";
  // this is the search reult
  private source = "";
  private target = "";
  private rate = "";
  private searchInformation = "No matches found"
  // //////////////////
  private services = [];
  private segments = [];
  private segmentItems = [];
  public currentRow;
  public selectedIndexd = -1;
  private currentUserId = "";
  private jobManagerId = "";
  private loadingDialog;
  constructor(
    private loading:LoadingService,
    private catService:CatService,
    private menuCtrl: MenuController,
    private jobService:JobService,
    private userService:UserService,
    private projectService:ProjectService,
    private dataService:DataService,
    private transMemoryService:TransMemoryService
  ) 
  {
     this.menuCtrl.enable(false);
  }
  public currentJobId;
  async ngOnInit() {
    this.loadingDialog = await this.loading.create({
      message: "Loading  ..."
    })
    let url = window.location.href;
    let temp = url.match('job/([^/]*)/');
    if (temp.length < 1)
      this.currentJobId = "";
    else
      this.currentJobId = temp[1];
    await this.userService.awaitId();
    this.currentUserId = this.userService.id$.getValue();
    this.updateJob();
  }
  async updateJob(){
    let job = await this.jobService.getJob(this.currentJobId);
    console.log("this is current job",job);
    if(this.loadingDialog)
      this.loadingDialog.dismiss();
    let projectId = job.projectId;
    let project = await this.projectService.getProjectById(projectId);
    // select translation memory
    let translationMemory = project.transMemory;
    for (let i = 0 ; i < translationMemory.length;i++){
      let transId = translationMemory[i];
      let transMemory = await this.transMemoryService.getTranslationMemory(transId);
      let source = this.dataService.getLanguageCodeFromLanguage(transMemory.source);
      let target = this.dataService.getLanguageCodeFromLanguage(transMemory.target);
      if(job.source == source && job.target == target){
        this.currentTransMemoryId = transMemory.id;
        break;
      }
    }
    // 
    // Get job manager
    this.services = project.serviceType;
    if(project){
      this.jobManagerId = project.pmId;
    }
    // ////////////////////
    let segments = job.segments.items;
    for (let i = 0 ; i < segments.length ; i ++){
      let segmentItem = segments[i];
      if(segmentItem.status == "" && this.services.length > 0)
        segmentItem.status = this.services[0]
      let segmentService = segmentItem.segmentService;
      segmentService.forEach(service =>{
        delete (service).__typename;
      })
      let segment = {
        id:segmentItem.id,
        source:segmentItem.source,
        target:segmentItem.target,
        status:segmentItem.status,
        segmentService:segmentService
      }
      this.segments.push(segment);
    }
  }
  onTableRowClick(i){
    this.selectedIndexd = i;
    if(this.currentTransMemoryId == ""){
      this.searchInformation = "No matches found";
      return;
    }
    this.source = "";
    this.searchInformation = "Searching..."
    let content = this.segments[i].source;
    this.catService.concordenceSearch(this.currentTransMemoryId,content).then(response=>{
      if (response && response.match_rate > 0){
        console.log(response);
        this.source =  response.source;
        this.target = response.target;
        this.rate = response.match_rate;
      }
      else{
        this.searchInformation = "No matches found"
      }
    })
  }
  getStatus(i){
  //   let segment = this.segments[i]
  //   if(segment.conf == "Translate")
  //     return false;
  //   else
  //    return true;
  }
  async toggleConform(i){
    let segment = this.segments[i];
    let segmentStatus = segment.status;
    let statusIndex =  this.services.indexOf(segmentStatus)
    if(statusIndex ==  this.services.length - 1)
      segment.status = "Done";
    else
      segment.status = this.services[statusIndex + 1];
    let segmentService = segment.segmentService;
    segmentService[statusIndex].target = segment.target;
    await this.jobService.updateSegment(this.segments[i])
    this.calcuateProgress();
  }
  calcuateProgress(){
    let progresses = [];
    this.services.forEach((service)=>{
      let progress = new Progress;
      progresses.push(progress);
    })
    let segments = this.segments;
    segments.forEach(segment=>{
      let status = segment.status;
      let segmentService = segment.segmentService;
      segmentService.forEach((individualService,index) => {
        let sumIndex = this.services.indexOf(status);
        if(sumIndex > -1)
        sumIndex -= 1;
        else 
          index = this.services.length - 1;
        for (let i = 0 ; i < sumIndex; i ++){
          progresses[i].sum += 1;
        }
        progresses[index].count += 1;
      });
    })
  }
  updateTarget(i,segmentTarget){
    this.segments[i].target = segmentTarget;
    this.jobService.updateSegment(this.segments[i]);
  }
  isLock(segment){
    // if(this.jobManagerId == this.currentUserId){
    //   return false;
    // }
    // if(segment){
    //   if(segment.freelancerId == this.currentUserId )
    //     return false;
    // }
    // return true;
  }
}
