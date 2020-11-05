import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.page.html',
  styleUrls: ['./finance.page.scss'],
})
export class FinancePage implements OnInit {

  constructor(
    private  projectService:ProjectService,
    private dataService:DataService,
    private userService:UserService
  ) { }

  ngOnInit() {
    this.userService.id.subscribe(async (id)=>{
      let userId = id;
      console.log("current user Id on finiance",userId);
      await this.getPorjects(userId);
    })
  }
  async getPorjects(userId){
    let projectItems  = await this.projectService.GetProjectsByPmIdForFinance(userId)
    let projects = projectItems.items
    this.dataService.changeProjectsForFinance(projects);
  }
}
