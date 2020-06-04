import {Component, OnInit, ViewChild} from "@angular/core";
import {ProjectsTableComponent} from "src/app/components/projects-table/projects-table.component"
import {ProjectService} from "../../../services/project.service";
@Component({
  selector: "app-list-projects",
  templateUrl: "./list-projects.page.html",
  styleUrls: ["./list-projects.page.scss"]
})
export class ListProjectsPage implements OnInit {
  @ViewChild(ProjectsTableComponent, { static: true}) tableComponent: ProjectsTableComponent;
  constructor(private projectService: ProjectService) {}
  public serchText="";
  ngOnInit() {
    console.log("ngOnInit", this.tableComponent);
  }
  onSearch(event){
    this.tableComponent.applyFilter(this.serchText);
  }
  async onDeleteProjects(){
    let rows = this.tableComponent.selection.selected;
    let length = rows.length;
    for (let i = 0 ; i < length ; i ++){
      let row = rows.pop();
      console.log(row.id);
      await this.projectService.deleteProject(row.id);
    }
    this.tableComponent.updateProjects();
    this.tableComponent.masterToggle();
  }
}
