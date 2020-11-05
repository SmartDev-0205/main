import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  private managerId = "";
  services$: BehaviorSubject<Array<any>> = new BehaviorSubject(undefined);
  constructor(
    private serviceService:ServiceService,
    private userService:UserService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.userService.id.subscribe(userId=>{
      if(!userId)
        return;
      this.managerId = userId;
      this.serviceService.getManagerServices(userId).then(services=>{
        services.sort((first,second)=>first.updatedAt.localeCompare(second.updatedAt))
        this.services$.next(services);
      })
    })
  }
  createNewService(){
    this.router.navigateByUrl('/client/new-service')
  }
  getServiceText(service){
    let serviceText = "";
    if(service.name)
      serviceText += service.name + " :" ;
    let workflow = service.workflow;
    let servicesString = ""
    workflow.forEach(individualService => {
      servicesString += individualService + " + "      
    });
    servicesString = servicesString.substring(0, servicesString.length-3)
    serviceText += servicesString;
    return serviceText;
  }
}
