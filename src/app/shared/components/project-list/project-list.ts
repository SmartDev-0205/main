import {Component, OnInit} from "@angular/core";
import {ProjectDetailsDialog} from "../../dialogs/project-details-dialog/project-details-dialog";
import {MatDialog} from "@angular/material";

import {Project} from "src/app/interfaces/project.interface";
import {ProjectService} from "../../../services/project.service";
import {UserService} from "../../../services/user.service";
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: "project-list",
  templateUrl: "./project-list.html",
  styleUrls: ["./project-list.css"]
})
export class ProjectList implements OnInit {
  userRole: string = "Manager";
  projects$: BehaviorSubject<Array<Project>> = new BehaviorSubject(undefined);
  isManager: boolean = false;
  filters: any = {};

  constructor(
    public dialog: MatDialog,
    private projectService: ProjectService,
    private user: UserService
  ) {}

  async ngOnInit() {

    // Checking the user's role
    await this.user.refreshUser();

    if (this.user.role$.getValue() === "client") {
      this.filters.clientID = { eq: this.user.id$.getValue() };
    } else if (this.user.role$.getValue() === "translator") {
      this.filters.translators = { contains: this.user.id$.getValue() };
    } else {
      this.isManager = true;
    }

    this.updateProjects()
  }

  private updateProjects() {
    // // Fetch projects from the server
    // this.projectService
    //   .listProjects(this.isManager ? null : this.filters)
    //   .then((data: any) => {
    //     console.log("projects list", data);
    //     this.projects$.next(data.items);
    //   })
    //   .catch(e => console.log(e));
  }

  public openDialog(data): void {
    const dialogRef = this.dialog.open(ProjectDetailsDialog, {
      maxWidth: "95vw",
      minWidth: "90vw",
      data: {
        projectDetails: data,
        userRole: this.userRole
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.projects$.next(this.projectService.getCurrentProjects());
    });
  }

}
