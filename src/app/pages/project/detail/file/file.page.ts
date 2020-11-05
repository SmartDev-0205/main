import { Component, OnInit ,ElementRef,ViewChild, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from 'src/app/services/project.service';
import { APIService } from 'src/app/API.service';
import { isNull } from 'util';
import { PmjobTableComponent } from 'src/app/components/pmjob-table/pmjob-table.component';
import { AlertService } from 'src/app/services/alert.service';
import { DataService } from 'src/app/services/data.service';
import { JobService } from 'src/app/services/job.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ClientService } from 'src/app/services/client.service';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { TaskService } from 'src/app/services/task.service';
import { SegmentService } from 'src/app/services/segment.service';
import { MatDialog } from '@angular/material';
import { WorkflowDialogComponent } from 'src/app/shared/dialogs/workflow-dialog/workflow-dialog.component';
@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {
  @ViewChild("xliffInput", {static: false}) newFileElement: ElementRef; 
  private projectId;
  private project;
  private oldProject;
  private isLoaded = false;
  private isEditable = false;
  private projetTypes = [];
  private projectStatuses = [];
  private jobs=[];
  private clientEmail = "";
  private managerEmail = ""; 
  private allClients = [];
  private allManagers = [];
  private isManager = true;
  private isPending = false;
  private smallTasks = [];
  private currentService="";
  private vendorServices = [];
  private allLanguage = [];
  private allLanguageCode = [];
  // public dateControl = new FormControl(new Date(2021,9,4,5,6,7));
  filteredOptions: Observable<any[]>;
  myControl = new FormControl();
  managerFilteredOptions: Observable<any[]>;
  managerControler = new FormControl();
  @ViewChild(PmjobTableComponent, { static: true}) jobTableComponent: PmjobTableComponent;
  constructor(
    private projectService:ProjectService,
    private alertMsg: AlertService,
    private api:APIService,
    private router:Router,
    private dataService:DataService,
    private jobService:JobService,
    private loading:LoadingService,
    private clientService:ClientService,
    private userService:UserService,
    private taskService : TaskService,
    private location: Location,
    private segmentService:SegmentService,
    private matDialog: MatDialog,
    ) { }

  ngOnInit() {
    this.allLanguage = this.dataService.allLanguages;
    this.allLanguageCode = this.dataService.allLanguageCode;
    this.userService.awaitRole().then(()=>{
      let role = this.userService.role$.getValue();
      if(role == "vendor")
        this.isManager = false;
      else
        this.isManager = true;
    })
    this.projetTypes = this.dataService.projectType;
    this.projectStatuses = this.dataService.projectStatus;
    this.getProjectId();
    this.getManagers();
    this.getClients();
  }
  async getManagers(){
    let managers = await this.clientService.getAllMangers();
    if(managers)
      this.allManagers = managers;
    this.managerFilteredOptions = this.managerControler.valueChanges
      .pipe(
        startWith(this.managerEmail),
        map(value => typeof value === 'string' ? value : value.profile.email),
        map(email => email ? this._filterManager(email) : this.allManagers.slice())
      );

  }
  async getClients(){
    this.userService.id.subscribe(managerId=>{
      this.clientService.getManagerClients(managerId).then(clients=>{
        if(clients)                                                                                                                                           
        this.allClients = clients;
        this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(this.clientEmail),
            map(value => typeof value === 'string' ? value : value.profile.email),
            map(email => email ? this._filter(email) : this.allClients.slice())
          );    
      })
    })
  }

  private onSelectSourceLanaguage(i){
    this.project.sourceLanguageCode = this.allLanguageCode[i];
  }
  private onSelectTargetLanaguage(i){
    this.project.targetLanguageCode = this.allLanguageCode[i];
  }


  private _filterManager(value): any[] {
    const filterValue = value.toLowerCase();
    return this.allClients.filter(option => option.profile.email.toLowerCase().includes(filterValue));
  }
  private _filter(value): any[] {
    const filterValue = value.toLowerCase();
    return this.allClients.filter(option => option.profile.email.toLowerCase().includes(filterValue));
  }

  displayFn(value): string {
    return value && value.profile ? value.profile.email : '';
  } 

  async getProjectId(){
    let url = window.location.href;
    let temp = url.match('project/([^/]*)/file');
    if (temp.length < 1)
      this.projectId = "";
    else
      this.projectId = temp[1];
    console.log("current project Id", this.projectId);
    let project = await this.api.GetProject(this.projectId);
    console.log("current project",project);
    this.project = project;
    if(this.project.client)
      this.clientEmail = this.project.client.profile.email;
    if(project)
      this.isLoaded = true;
    if(project.client)
      this.clientEmail = project.client.profile.email;
    if(project.manager)
      this.managerEmail = project.manager.profile.email;
    let jobs = project.jobs.items;
    this.jobs = jobs;
    if(project.serviceType)
      this.currentService = project.serviceType[0];
    await this.getProjectStatus();
    this.onServiceChanged();
  }
  async getProjectStatus(){
    if(!this.userService.id$.getValue()){
      await this.userService.awaitId();
    }
    if(this.isManager)
      return;
    let userId = this.userService.id$.getValue();
    let task = await this.taskService.getProjectTasks(userId,this.jobs);
    this.smallTasks = task;
    this.smallTasks.forEach(smallTask=>{
      if(smallTask){
        if(this.vendorServices.indexOf(smallTask.serviceName) < 0)
          this.vendorServices.push(smallTask.serviceName)
        if(smallTask.status == "Pending"){
          this.isPending = true;
        }
      }
    })
    console.log("pending status",this.isPending);
  }
  accept(){
    this.smallTasks.forEach(smallTask=>{
      let firstSmallTask  = smallTask;
      if(firstSmallTask.status == "Pending"){
        this.isPending = true;
        delete (firstSmallTask as any).__typename;
        delete (firstSmallTask as any).freelancer;
        delete (firstSmallTask as any).job;
        delete (firstSmallTask as any).createdAt;
        delete (firstSmallTask as any).updatedAt;
        let tasks = firstSmallTask.tasks;
        if(!tasks)
          tasks = [];
        console.log("this is the first task",firstSmallTask);
        for(let i = 0 ; i < tasks.length ; i ++){
          delete (firstSmallTask.tasks[i] as any).__typename;
        }
        firstSmallTask.status = "Accept";
        console.log(firstSmallTask);
        this.taskService.updateTask(firstSmallTask);          
      }
    })
    this.isPending = false;
  }
  async reject(){
    for (let i = 0 ; i < this.smallTasks.length ; i++){
      let smallTask = this.smallTasks[i][0];
      let deletedEvent = await this.taskService.deleteTask(smallTask.id);          
      let job = smallTask.job;
      let segments = job.segments.items;
      console.log(segments);
      for(let j = 0 ; j < segments.length ; j ++){
        let segment = segments[j];
        delete (segment as any).__typename;
        delete (segment as any).createdAt;
        delete (segment as any).freelancer;
        delete (segment as any).updatedAt;
        segment.freelancerId = "Empty";
        console.log(segment);
        this.segmentService.updateSegment(segment);
      }
      console.log("deleted Event",deletedEvent);
    }
    setTimeout(() => {
    this.location.replaceState('/project/list');
    window.location.reload();  
    }, 300);
    
  }
  editProject(){
    console.log(this.project);
    this.oldProject = this.project;
    this.isEditable = true;
    this.jobTableComponent.isEditable = true;
  }
  cancel(){
    this.getProjectId().then(()=>{
      this.isEditable = false;
      this.jobTableComponent.isEditable = false;
    });
  }
  editApply(){
    let jobs = this.jobTableComponent.dataSource.data;
    if(jobs && jobs.length > 0){
      jobs.forEach(job=>{
        let progress = job.process;
        let newProgress = [];
        let currentServices = progress.map(a=>a.serviceName);
        for(let i = 0 ; i < this.project.serviceType.length;i++){
          let service = this.project.serviceType[0];
          let index = this.currentService.indexOf(service)
          if(index < 0){
            let tempProgress = {
              serviceName:service,
              progress:"0%"
            }
            newProgress.push(tempProgress)
          }
          else{
            let individualProgress = progress[index]
            delete (individualProgress as any).__typename;
            newProgress.push(individualProgress);
          }
        }
        let currentJob = {
          id: job.id,
          projectId:job.projectId,
          filename:job.filename,
          wordCount:job.wordCount,
          due:job.due,
          target:job.target,
          process:newProgress
        }
        this.jobService.updateJob(currentJob);
      })
    }
    
    this.isEditable=false;
    this.jobTableComponent.isEditable = false;
    let currentProject = this.project;
    delete (currentProject as any).__typename;
    delete (currentProject as any).invoices;
    delete (currentProject as any).client;
    delete (currentProject as any).manager;
    delete (currentProject as any).jobs;
    delete (currentProject as any).quotes;
    delete (currentProject as any).quotes;
    delete (currentProject as any).updatedAt;
    delete (currentProject as any).createdAt;
    let clientId = "Empty";
    let managerId = "Empty";
    if(this.myControl.value){
      this.clientEmail = this.myControl.value.profile.email;
      clientId = this.myControl.value.id;
    }
    else 
      this.clientEmail = "";
    if(this.managerControler.value){
      this.managerEmail = this.managerControler.value.profile.email;
      managerId = this.managerControler.value.id;
    }
    else 
      this.managerEmail = "";
    currentProject.clientId = clientId;
    currentProject.pmId = managerId;
    console.log(currentProject)
    this.projectService.updateProject(currentProject).then(project=>this.project = project);    
    // update job services
  }
  viewJob(){
    let rows = this.jobTableComponent.selection.selected;
    console.log(rows);
    if (rows.length != 1){
      this.alertMsg.show("Please select one job");
      return;
    }
    let jobId = rows[0].id;
    console.log("selected job Id",jobId);
    // this.router.navigate(['/job', jobId]);
    // this.router.navigateByUrl("job/" + jobId + "/view");
    let currentLink = window.location.href;
    let tempLinks = currentLink.match("http([^\/]*)\/\/([^\/]*)");
    let newLink = "http" + tempLinks[1] + "//" + tempLinks[2] + "/" + "job/" + jobId + "/view";
    window.open(newLink,"_blank");
  }
  assignJob(){
    let rows = this.jobTableComponent.selection.selected;
    if (rows.length > 1){
      this.alertMsg.show("Please select one job");
    }
    else{
      let jobId = rows[0].id;
      console.log("selected job Id",jobId);
      
      let currentLink = window.location.href;
      let tempLinks = currentLink.match("http([^\/]*)\/\/([^\/]*)");
      let newLink = "http" + tempLinks[1] + "//" + tempLinks[2] + "/" + "job/" + jobId + "/assign" + "?service=" + this.currentService;
      window.open(newLink,"_blank");
    }
  }
  async onFileChanged(){
    let services = this.project.serviceType.slice(0);
    let files = this.newFileElement.nativeElement.files;
    let loadingDialog = await this.loading.create({
      message: "Adding job..."
    })
    for(let i = 0 ; i < files.length;i++){
      let job = [{
        id:this.jobs.length,
        filename:files[i].name,
        file:files[i],
        due:this.project.dueDate,
        target:this.project.targetLanguage,
      }]
      console.log("before job creation",job);
      let realJob = await this.jobService.addFiles(this.projectId,job,services,this.project.targetLanguage,this.project.sourceLanguage);
      console.log("createdJob",realJob);
      realJob.forEach(job => this.jobs.push(job))
      this.jobTableComponent.updateJob(this.jobs,this.currentService);
    }
    loadingDialog.dismiss();    
    // this.onServiceChanged();
  }
  newJob(){
    this.newFileElement.nativeElement.click();
  }
  async deleteJob(){
    let rows = this.jobTableComponent.selection.selected;
    console.log("rows",rows);
    rows.sort((a, b) => (Number(a.id) > Number(b.id)) ? -1 : 1)
    if (rows.length > 0){
      const loadingDialog = await this.loading.create({
        message: "Deleting Project..."
      })
      for (let i = rows.length - 1 ; i > -1  ; i --){
        this.jobs.splice(i, 1)
        this.jobService.deleteJob(rows[i].id);
      }
      this.jobTableComponent.updateJob(this.jobs,this.currentService);
      loadingDialog.dismiss();
    }
  }
  workflow(){
    const dialogRef = this.matDialog.open(WorkflowDialogComponent, {
      width: '800px',
      data:{services:this.project.serviceType}
    });
    dialogRef.afterClosed().subscribe(servies => {
      if(servies){
        console.log(servies);
        this.project.serviceType = servies;
        console.log(this.project.serviceType);
      }
    })
  }

  onServiceChanged(){
    if(this.isManager){
      this.jobs.sort((a, b) => (Number(a.id) > Number(b.id)) ? -1 : 1)
      this.jobTableComponent.updateJob(this.jobs,this.currentService);
    }
    else{
      let jobs = [];
      this.smallTasks.forEach(smallTask=>{
        if(smallTask.serviceName == this.currentService)
          jobs.push(smallTask.job.items[0]);
      })
      this.jobTableComponent.updateJob(jobs,this.currentService);
    }
    
  }
}
