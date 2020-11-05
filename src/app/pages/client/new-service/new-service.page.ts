import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.page.html',
  styleUrls: ['./new-service.page.scss'],
})
export class NewServicePage implements OnInit {
  private workflow = [];
  private allServices = [];
  private managerId;
  private serviceName = "";
  private serviceDescription = "";
  constructor(
    private serviceService:ServiceService,
    private userService:UserService,
    private router:Router,
    private dataService:DataService
  ) { }

  ngOnInit() {
    this.userService.id.subscribe(userId=>{
    this.managerId = userId;
    this.allServices = this.dataService.services;
    })
  }
  ionViewWillEnter(){
    this.workflow = [];
    this.serviceName = "";
    this.serviceDescription = "";
  }
  cancel(){
    this.router.navigateByUrl('client/services');
  }
  save(){
    let service = {
      managerId:this.managerId,
      name:this.serviceName,
      description:this.serviceDescription,
      workflow:this.workflow
    }
    this.serviceService.createService(service).then(service=>{
      this.router.navigateByUrl('client/services');
    })
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
