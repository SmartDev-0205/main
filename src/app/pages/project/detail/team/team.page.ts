import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  private projectId;
  private client;
  private manager;
  constructor(
    private projectService:ProjectService
  ) { }

  ngOnInit() {
    this.getProjectId();
  }
  getProjectId(){
    let url = window.location.href;
    console.log("this is url",url)
    let temp = url.match('project/([^/]*)/team');
    if (temp.length < 1)
      this.projectId = "";
    else
      this.projectId = temp[1];
    this.projectService.getProjectById(this.projectId).then((project)=>{
      this.client = project.client;
      this.manager = project.manager;
    });
          
  }

  getProjectManager(){

  }
}
