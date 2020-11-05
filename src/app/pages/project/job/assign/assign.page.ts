// infact this we shoud collect all array to small task structure
import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { JobService } from 'src/app/services/job.service';
import {MatDialog } from '@angular/material/dialog';
import { PmtaskTableComponent } from 'src/app/components/pmtask-table/pmtask-table.component';
import { AlertService } from 'src/app/services/alert.service';
import { DataService } from 'src/app/services/data.service';
import { TeamService } from 'src/app/services/team.service';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { WordDialogComponent } from 'src/app/shared/dialogs/word-dialog/word-dialog.component';
import { AssignDialogComponent } from 'src/app/shared/dialogs/assign-dialog/assign-dialog.component';
import { toSegments } from '@ionic/angular/dist/directives/navigation/stack-utils';
import { IfStmt, SafeMethodCall } from '@angular/compiler';
import { SegmentService } from 'src/app/services/segment.service';
import { TaskService } from 'src/app/services/task.service';
import { async } from '@angular/core/testing';
import { UserService } from 'src/app/services/user.service';
import { EmailService } from 'src/app/services/email.service';
import { EventService } from 'src/app/services/event.service';
@Component({
  selector: 'app-assign',
  templateUrl: './assign.page.html',
  styleUrls: ['./assign.page.scss'],
})
export class AssignPage implements OnInit {
  @ViewChild(PmtaskTableComponent, { static: true}) pmTaskTableComponent: PmtaskTableComponent;
  private job;
  private currentService = "Translating";
  private ids = [];
  private rates = [];
  private words = [];
  private status = [];
  private allTeamFreelancers = [];
  private allProjectFreelancers=[];
  private isLoaded = false;
  public currentRow;
  public selectedIndexd = -1;
  filteredOptions: Observable<any[]>[] = [];
  myControl = [];
  constructor(
    private matDialog: MatDialog,
    private menuCtrl: MenuController,
    private jobService:JobService,
    private teamService:TeamService,
    private segmentService:SegmentService,
    private taskService:TaskService,
    private dataService:DataService,
    private userService:UserService,
    private emailService:EmailService,
    private eventService:EventService
  ) {
      this.menuCtrl.enable(false);
   }
  public currentJobId;
  ngOnInit() {
    let url = window.location.href;
    let temp = url.match('job/([^/]*)/');
    if (temp.length < 1)
      this.currentJobId = "";
    else
      this.currentJobId = temp[1];
    temp = url.match('service=([^/]*)');
    if (temp.length > 1 )
      this.currentService = temp[1];
    this.updateJob();
  }
  async updateJob(){
    let job = await this.jobService.getJob(this.currentJobId);
    this.job = job;
    this.isLoaded = true;
    this.pmTaskTableComponent.updateJob(job);
    let smallTasks = job.tasks.items;
    this.allTeamFreelancers = [];
    let allTeamFreelancers = await this.teamService.getManagerTeamMembers();
    this.allTeamFreelancers = allTeamFreelancers;
    this.allProjectFreelancers = [];
    for(let i = 0 ; i < smallTasks.length ; i ++){
      console.log("small task",smallTasks);
      if(smallTasks[i].freelancer && smallTasks[i].serviceName == this.currentService){
        let id = smallTasks[i].id;
        let freelancer = smallTasks[i].freelancer;
        let rate = smallTasks[i].rate;
        let status = smallTasks[i].status;
        let wordsCount = smallTasks[i].wordsCount;
        this.addFreelancer(freelancer,id,rate,wordsCount,status);
      }
    }
  }
  addFreelancer(newFreelancer = null,id = "Empty",rate = "" ,wordCount = 0,status = "New"){
    let newControler = new FormControl;
    let filteredoption:Observable<any[]>;
    filteredoption = newControler.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.profile.email),
        map(email => email ? this._filter(email) : this.allTeamFreelancers.slice())
      ); 
    this.filteredOptions.push(filteredoption);
    this.myControl.push(newControler);
    if(newFreelancer){
      this.allProjectFreelancers.push(newFreelancer);  
    }
    else{
      let freelancer = {
        id:"Empty",
        profile:{
          email:"",
        }
      }
      this.allProjectFreelancers.push(freelancer);
      console.log("allprojectFreelancers",this.allProjectFreelancers);
      
    }
    this.ids.push(id);
    this.rates.push(rate)
    this.words.push(wordCount);
    this.status.push(status);
  }

  remove(i){
    let deletedFreelancer = this.allProjectFreelancers.splice(i,1);
    this.filteredOptions.splice(i,1);
    this.myControl.splice(i,1);
    this.rates.splice(i,1);
    this.words.splice(i,1);
    this.status.splice(i,1);
    this.ids.splice(i,1);
    let segments = this.pmTaskTableComponent.dataSource.data;
    segments.forEach((segment,index)=>{
      if(segment.freelancerId == deletedFreelancer[0].id){
        segments[index].freelancerId = "Empty";
        segments[index].freelancer = null
      }
    })
    this.pmTaskTableComponent.dataSource.data = segments;
  }
  private _filter(value): any[] {
    const filterValue = value.toLowerCase();
    return this.allTeamFreelancers.filter(option => option.profile.email.toLowerCase().includes(filterValue));
  }

  displayFn(value): string {
    return value && value.profile ? value.profile.email : '';
  } 
  getSegments(){
    let segments = this.pmTaskTableComponent.dataSource.data;
    return segments
  }
  apply(){
    const EMPTY = "Empty";
    let segments = this.getSegments();
    let currentFreelancerId = EMPTY;
    let newTaskStart = 0;
    let taskMap = new Map;
    for (let i = 0 ; i < segments.length ; i ++){
      let segment = segments[i];
      let segmentService = segment.segmentService;
      segmentService.forEach((service,index) => {
        delete (segmentService[index] as any).__typename;
      });
      let newSegment = {
        id:segment.id,
        jobId:segment.jobId,
        source:segment.source,
        target:segment.target,
        status:segment.status,
        segmentService:segmentService
      }
      this.segmentService.updateSegment(newSegment).then(segment => {});
      let freelancerId = "Empty";
      for (let j  = 0 ; j < segment.segmentService.length ; j ++){
        if(segment.segmentService[j].serviceName == this.currentService){
          freelancerId = segment.segmentService[j].freelancerId
          break;
        }
      }
      if(currentFreelancerId != freelancerId ){
        let task = {
          start:newTaskStart,
          end:i - 1,
          stringOfTask:newTaskStart.toString() + "-" + (i - 1).toString()  
        }
        let freelancerTasks = taskMap.get(currentFreelancerId);
        if(!freelancerTasks)
          freelancerTasks = [];
        if(i > 0)
          freelancerTasks.push(task)
        taskMap.set(currentFreelancerId,freelancerTasks);
        newTaskStart = i;
        currentFreelancerId = freelancerId;
      }
    }
    let task = {
      start:newTaskStart,
      end:segments.length - 1,
      stringOfTask:newTaskStart.toString() + "-" + (segments.length - 1).toString()  
    }
    let freelancerTasks = taskMap.get(currentFreelancerId);
    if(!freelancerTasks)
      freelancerTasks = [];
    freelancerTasks.push(task)
    taskMap.set(currentFreelancerId,freelancerTasks);
    //delet deleted smalltask
    let smallTasks = this.job.tasks.items;
    smallTasks.forEach(smallTask => {
      if(this.allProjectFreelancers.indexOf(smallTask.freelancer) < 0){
        this.taskService.deleteTask(smallTask.id);
      }
    });
    this.allProjectFreelancers.forEach((freelancer,index)=>{
      let id = this.ids[index];
      let rate = this.rates[index];
      let wordsCount = this.words[index];
      if(this.status[index] == "New")
        this.status[index] = "Pending"
      let taskStatus = this.status[index];
      let tasks = taskMap.get(freelancer.id);
      let task = {
        id:id,
        projectId:this.job.projectId,
        jobId:this.currentJobId,
        wordsCount:wordsCount,
        freelancerId:freelancer.id,
        tasks:tasks,
        rate:rate,
        status:taskStatus,
        serviceName:this.currentService,

      };
      if(id == "Empty"){
        delete (task as any).id;
        this.taskService.createTask(task);
        this.invite(freelancer,rate).then((returntask)=>{
        });
      }
      else{
        this.taskService.updateTask(task);
      }
    })
  }
  async invite(freelancer,rate=""){
    if(!freelancer)
      return;
    let email = freelancer.profile.email;
    let hostingUrl = this.dataService.projectUrl + this.job.projectId;
    let userName = freelancer.profile.givenName + freelancer.profile.familyName;
    userName = userName.toUpperCase();
    let currentProfile = this.userService.profile$.getValue();
    let managerId = this.userService.id$.getValue();
    let managerName = currentProfile.givenName + currentProfile.familyName;
    managerName = managerName.toUpperCase();
    let emailConttent = "Hi " + userName + "\n";
    emailConttent += managerName + " ";
    emailConttent += "invite you to his project";
    let rateText = "";
    if(rate = "")
      rateText = ".But rate was not setted";
    else
      rateText = "with " + rate + " per word";
    this.emailService.email(email,"ProjectInvite",emailConttent,hostingUrl);
    let newEvent = {
      userId:freelancer.id,
      managerId:managerId,
      textContent:emailConttent,
      link:hostingUrl,
      type:"ProjectInvite",
      flagShowHide:"UnShown"
    }
    let createdEvent = await this.eventService.creatEvent(newEvent);
  }
  assign(){
    let rows = this.pmTaskTableComponent.selection.selected;
    if(rows.length < 0)
      return;
    let allData = this.pmTaskTableComponent.dataSource.data;
    let start = allData.indexOf(rows[0]);
    let end = allData.indexOf(rows[rows.length - 1]);
    const dialogRef = this.matDialog.open(AssignDialogComponent, {
      width: '500px',
      data:{freelancers:this.allProjectFreelancers}
    });
    dialogRef.afterClosed().subscribe(freelancer => {
      let freelancerEmail = freelancer.profile.email;
      let segments = this.pmTaskTableComponent.dataSource.data;
      for (let i = start ; i <= end ; i ++){
        let segmentService = segments[i].segmentService;
        let newSegmentService = [];
        segmentService.forEach(individualService => {
          if(individualService.serviceName == this.currentService){
            individualService.freelancerId = freelancer.id;
            individualService.freelancerEmail = freelancerEmail;
          }
          newSegmentService.push(individualService);
        });
        segments[i].segmentService = newSegmentService;
      }
      this.pmTaskTableComponent.dataSource.data = segments;
      this.pmTaskTableComponent.selection.clear();
      this.calculateWords(segments)
    })
  }
  calculateWords(segments){
    for(let i = 0 ; i < this.words.length; i ++){
      this.words[i] = 0;
    }
    let freelancerIdArray = this.allProjectFreelancers.map(a => a.id);
    if(segments.length < 1)
      return;
    let segmentService = segments[0].segmentService;
    let serviceIndex = 0;
    for(let i = 0 ; i < segmentService.length ; i ++){
      if(segmentService[i].serviceName == this.currentService)
        serviceIndex = i
    }
    for(let i = 0 ; i < segments.length; i ++){
      if(segments[i].freelancerId !="Empty"){
        let freelancerId = segments[i].segmentService[serviceIndex].freelancerId;
        let index = freelancerIdArray.indexOf(freelancerId);
        let wordcount = segments[i].source.split(' ').length;
        this.words[index] += wordcount;
      }
    }
  }
}
