import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectsTableComponent } from 'src/app/components/projects-table/projects-table.component';
import { LoadingService } from 'src/app/services/loading.service';
import { ProjectService } from 'src/app/services/project.service';
import { APIService } from 'src/app/API.service';
import { API, graphqlOperation } from "aws-amplify";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild(ProjectsTableComponent, { static: true}) tableComponent: ProjectsTableComponent;
  private isManager = true;
  constructor(
    private loading: LoadingService,
    private api :APIService,
    private projectService: ProjectService,
    private userService:UserService
  ) { }

  ngOnInit() {
    this.userService.awaitRole().then(()=>{
      let role = this.userService.role$.getValue();
      if(role == "vendor")
        this.isManager = false;
    });
    
  }
  async onDeleteProjects(){
    let projects = this.tableComponent.dataSource.data;
    let rows = this.tableComponent.selection.selected;
    let length = rows.length;
    const loadingDialog = await this.loading.create({
      message: "Deleting Project..."
    })
    for (let i = 0 ; i < length ; i ++){
      let row = rows.pop();
      this.projectService.deleteProject(row.id);
      let index = projects.indexOf(row);
      console.log(index,projects);
      let deletedProject;
      if(index > -1)
        deletedProject = projects.splice(index,1);
      console.log("after ",deletedProject,projects);
    }
    this.tableComponent.dataSource.data = projects;
    // this.tableComponent.updateProjects();
    this.tableComponent.masterToggle();
    loadingDialog.dismiss();
  }

}
