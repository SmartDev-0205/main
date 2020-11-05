import {Component, OnInit, ViewChild,Input} from "@angular/core";
import {MatDialog} from "@angular/material";
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Project} from "src/app/interfaces/project.interface";
import {UserService} from "src/app/services/user.service";
import {BehaviorSubject} from 'rxjs';
import {SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { DataService } from "src/app/services/data.service";
import { ProjectService } from 'src/app/services/project.service';
@Component({
  selector: "projects-table",
  templateUrl: "./projects-table.component.html",
  styleUrls: ["./projects-table.component.scss"]
})
export class ProjectsTableComponent implements OnInit {
  projects$: BehaviorSubject<Array<Project>> = new BehaviorSubject(undefined);
  dataSource = new MatTableDataSource<Project>();
  displayedColumns: string[] = [
    'select',
    'ID',
    'name', 
    'status', 
    'type', 
    'client',
    'manage',
    'dueDate',
  ];
  public selection:any;
  @ViewChild(MatPaginator, {static: false})
  set paginator(p: MatPaginator) {;
    this.dataSource.paginator = p;
  }
  @ViewChild(MatSort, {static: false}) 
  set sort(s: MatSort) {;
    this.dataSource.sort = s;
  }
  constructor(
    private dataService:DataService,
    public dialog: MatDialog,
    private user: UserService,
    private router: Router,
    private projectService:ProjectService
  ) {
    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<Project>(allowMultiSelect, initialSelection);
    
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
    this.selection.clear() :
    this.dataSource.data.forEach(row => this.selection.select(row));
  }
  async ngOnInit() {
    this.updateProjects();
  }

  public async updateProjects() {
    await this.user.awaitRole();
    await this.user.awaitId();
    let projects: any;
    if ( this.user.role$.getValue() === "client" ) {
      projects = await this.projectService.getClientProject(this.user.id$.getValue());
    } else if (
      this.user.role$.getValue() === "manager" ||
      this.user.role$.getValue() === "sales"
    ) {
      console.log("current user Id",this.user.id$.getValue());
      projects = await this.projectService.getPmProject(this.user.id$.getValue());
      console.log("current project",projects);
    } else if (
      this.user.role$.getValue() === "vendor"
    ) {
      projects = await this.projectService.getFreelancerProject(this.user.id$.getValue());
    }
    this.projects$.next(projects);
    this.dataSource.data = projects;
    console.log("current project",this.dataSource);
    
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter);
    };
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  public openDialog(project: any): void {
    this.dataService.changeCurrentProject(project);
    this.router.navigate(['/project', project.id]);
  }

}
