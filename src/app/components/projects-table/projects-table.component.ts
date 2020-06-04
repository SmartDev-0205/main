import {Component, OnInit, ViewChild,Input} from "@angular/core";
import {ProjectDetailsDialog} from "src/app/shared/dialogs/project-details-dialog/project-details-dialog";
import {MatDialog} from "@angular/material";
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSort} from '@angular/material/sort';

import {Project} from "src/app/interfaces/project.interface";
import {ProjectService} from "src/app/services/project.service";
import {UserService} from "src/app/services/user.service";
import {BehaviorSubject} from 'rxjs';
import {SelectionModel } from '@angular/cdk/collections';

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
    'createdBy', 
    'budget', 
    'quoteStatus',
    'paymentStatus',
    'developmentStatus',
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
    public dialog: MatDialog,
    private projectService: ProjectService,
    private user: UserService
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
    if (
      this.user.role$.getValue() === "client"
    ) {
      await this.user.awaitId();
      projects = await this.projectService.getProjectsByUserId(this.user.id$.getValue());
    } else if (
      this.user.role$.getValue() === "manager" ||
      this.user.role$.getValue() === "sales"
    ) {
      projects = await this.projectService.getProjects();
    } else if (
      this.user.role$.getValue() === "vendor"
    ) {
      projects = await this.projectService.getProjectsAssignedToUser(this.user.id$.getValue());
    }
    this.projects$.next(projects);
    this.dataSource.data = projects;
    
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
    const openedDialog = this.dialog.open(ProjectDetailsDialog, {
      maxWidth: "95vw", minWidth: "90vw",
      data: {
        projectId: project.id,
      }
    });
    openedDialog.afterClosed().toPromise().then(() => {
      this.updateProjects();
    });

  }

}
