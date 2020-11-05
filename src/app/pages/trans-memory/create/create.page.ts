import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ClientService } from 'src/app/services/client.service';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { TransMemoryService } from 'src/app/services/trans-memory.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  @ViewChild("file", {static: false}) fileInput: ElementRef<HTMLInputElement>;
  private allLanguages = [];
  private filename = "";
  private source = "";
  private target = "";
  private name = "";
  private managerId = "";
  private clientId = "";
  private clientName = "";
  private managerClients = [];
  private client;
  private file;
  private uploadUrl = "";
  filteredOptions: Observable<any[]>;
  myControl = new FormControl();
  constructor(
    private alertService:AlertService,
    private dataService:DataService,
    private router:Router,
    private userService:UserService,
    private clientService:ClientService,
    private transMemeoryService:TransMemoryService
  ) { }

  ngOnInit() {
    this.allLanguages = this.dataService.allLanguages;
    this.userService.id.subscribe(id=>{
      if(!id)
        return
      this.managerId = id;
      this.clientService.getManagerClients(this.managerId).then(clients =>{
        if(clients){
          this.managerClients = clients;
          this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(""),
            map(value => typeof value === 'string' ? value : value.profile.email),
            map(email => email ? this._filter(email) : this.managerClients.slice())
          );    
        }
      })
    })
  }
  private _filter(value): any[] {
    const filterValue = value.toLowerCase();
    return this.managerClients.filter(option => option.profile.email.toLowerCase().includes(filterValue));
  }
  displayFn(value): string {
    return value && value.profile ? value.profile.email : '';
  } 
  cancel(){
    this.router.navigate(['/trans-Memory/list']); 
  }
  create(){
    if(this.client){
      this.clientId = this.client.id;
      if(this.client.profile){
        this.clientName = this.client.profile.givenName + this.client.profile.familyName;
      }  
    }
    if(this.filename ==""){
      this.alertService.show("Please select translation memory file.")
      return;
    }
    if(this.name == ""){
      this.alertService.show("Please fill translation memory name.");
      return;
    }
    if(this.source == ""){
      this.alertService.show("Please select source language.");
      return;
    }
    if(this.target == ""){
      this.alertService.show("Please select target language.")
      return;
    }
    let newTranslationMemory  = {
      managerId:this.managerId,
      filename:this.filename,
      name:this.name,
      source:this.source,
      target:this.target,
      clientId:this.clientId,
      clientName:this.clientName
    }
    this.transMemeoryService.createTransMemory(newTranslationMemory).then(createdTranslationMemory =>{
      if(createdTranslationMemory){
        
        let transId = createdTranslationMemory.id;
        this.transMemeoryService.uploadFile(transId,this.file).then(result=>{
          if (result)
            this.router.navigate(['/trans-Memory/list']); 
          else
            this.alertService.show("There was issue on upload translation Memory file.Please try again.");
        })        
      }
      
    })
  }
  onFileChanged(event){
    let files = event.target.files;
    if(files.length > 0){
      this.file = files[0];
      this.filename = this.file.name;
    }
      
  }

}
