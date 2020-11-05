import { Component, OnInit ,ElementRef,ViewChild } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ProjectService } from 'src/app/services/project.service';
import { isNull, isUndefined } from 'util';
import { JobService } from 'src/app/services/job.service';
import { DataService } from 'src/app/services/data.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ClientService } from 'src/app/services/client.service';
import { MatDialog } from '@angular/material';
import { WorkflowDialogComponent } from 'src/app/shared/dialogs/workflow-dialog/workflow-dialog.component';
import { CreatingJobTableComponent } from 'src/app/components/creating-job-table/creating-job-table.component';
import { TransMemoryService } from 'src/app/services/trans-memory.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  @ViewChild("xliffInput", {static: false}) newFileElement: ElementRef;  
  @ViewChild(CreatingJobTableComponent, { static: true}) jobTableComponent: CreatingJobTableComponent;
  
  myControl = new FormControl();
  filteredOptions: Observable<any[]>;
  constructor(
    private loading:LoadingService,
    private router: Router,
    private matDialog: MatDialog,
    private user:UserService,
    private projectService:ProjectService,
    private jobService:JobService,
    private dataService:DataService,
    private clientService:ClientService,
    private transMemoryService:TransMemoryService
  ) { }
  public waitingJobs = [];
  private projectName = "";
  private projectType = [];
  private sourceLanguage = "";
  private targetLanguage = [];
  private projectDueDate= "";
  private projectStatus = "";
  private projectCode = "";
  private projectDescription = "";
  private userName = "" ;
  private projetTypes = [];
  private projectStatuses = [];
  private allClients = [];
  private allLanguage = [];
  private managerId = "";
  private transMemory = [];
  private currentMemeory = [];
  ngOnInit() { 
    this.allLanguage = this.dataService.allLanguages;
    this.projetTypes = this.dataService.projectType;
    this.projectStatuses = this.dataService.projectStatus;
    this.user.id.subscribe(id=>{
      if(id){
        this.managerId = id;
        this.transMemoryService.getManagerTransMemory(this.managerId).then(transMemory => this.transMemory = transMemory); 
      }
    });
    this.user.profile$.subscribe(async newProfile =>{
      if(!isUndefined(newProfile))
        this.userName = newProfile.familyName + " " + newProfile.givenName;
    })
    this.getClients();
  }
  init(){
    if(this.managerId){
      this.transMemoryService.getManagerTransMemory(this.managerId).then(transMemory => this.transMemory = transMemory); 
    }
    this.waitingJobs = [];
    this.projectName = "";
    this.projectType = [];
    this.sourceLanguage = "";
    this.targetLanguage = [];
    this.projectDueDate= "";
    this.projectStatus = "";
    this.projectCode = "";
    this.projectDescription = "";
    this.userName = "" ;
    this.jobTableComponent.updateJob(this.waitingJobs);
  }
  ionViewWillEnter() {
    this.init();
  }
  async getClients(){
    this.user.id.subscribe(managerId=>{
      this.clientService.getManagerClients(managerId).then(clients=>{
        if(clients)                                                                                                                                           
      this.allClients = clients;
    this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.profile.email),
          map(email => email ? this._filter(email) : this.allClients.slice())
        );  
      })
    })
  }
  private _filter(value): any[] {
    const filterValue = value.toLowerCase();
    return this.allClients.filter(option => option.profile.email.toLowerCase().includes(filterValue));
  }
  displayFn(value): string {
    return value && value.profile ? value.profile.email : '';
  } 
  onFileChanged(){
    let files = this.newFileElement.nativeElement.files;
    for(let i = 0 ; i < files.length;i++){
      let job = {
        id:this.waitingJobs.length,
        filename:files[i].name,
        file:files[i]
      }
      this.waitingJobs.push(job)
    }
    this.jobTableComponent.updateJob(this.waitingJobs);
  }
  newJob(){
    console.log(this.newFileElement);
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
        this.waitingJobs.splice(i, 1)
      }
      console.log(this.waitingJobs);
      this.jobTableComponent.updateJob(this.waitingJobs);
      loadingDialog.dismiss();
    }
  }
  
  async create(){
    let loadingDialog = await this.loading.create({
      message: "Creating project..."
    })
    await this.user.awaitId();
    let pmId = "Empty";
    let clientId = "Empty"
    let clientName = ""
    let managerName = ""
    pmId = this.user.id$.getValue();
    managerName = this.userName;
    let client  = this.myControl.value;
    if(client)
      clientId = client.id;
    let trans =  [];
    let transNames = [];
    this.currentMemeory.forEach(transElement =>{
      trans.push(transElement.id);
      transNames.push(transElement.name);
    })
    let project = {
      clientId: clientId,
      pmId:pmId,
      name:this.projectName,
      description: this.projectDescription,
      sourceLanguage: this.sourceLanguage,
      targetLanguage: this.targetLanguage,
      serviceType: this.projectType,
      dueDate: this.projectDueDate,
      status: this.projectStatus,
      projectCode:this.projectCode,
      transMemory:trans,
      transMemoryNames:transNames
    }
    let createdProject =  await this.projectService.createProject(project);
    console.log("this is creted project",createdProject);
    if (isNull(createdProject)){
      return;
    }
    let projectId = createdProject.id;
    let rows = this.jobTableComponent.dataSource.data;
    let projectServices = this.projectType.slice(0);
    await this.jobService.addFiles(projectId,rows,projectServices,this.targetLanguage,this.sourceLanguage);
    loadingDialog.dismiss();
    this.router.navigateByUrl("/project/list");
  }
  cancel(){
    console.log(this.projectType)
    this.router.navigateByUrl("/project/list");
  }
  check(){
    console.log(this.currentMemeory);
  }
  workflow(){
    console.log(this.projectType);
    const dialogRef = this.matDialog.open(WorkflowDialogComponent, {
      width: '600px',
      data:{services:this.projectType},
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(servies => {
      if(servies){
        console.log(servies);
        this.projectType = servies;
        console.log(this.projectType);
      }
    })
  }
}
