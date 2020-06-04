import {Component, Inject, OnInit, ElementRef, ViewChild} from "@angular/core";
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from "@angular/material";
import {FormControl, FormGroup} from "@angular/forms";

import {UserService} from "src/app/services/user.service";
import {AlertService} from "src/app/services/alert.service";
import {ProjectService} from "../../../services/project.service";
import {AllotTranslatorDialog} from "../allot-translator/allot-translator-dialog";
// import {SubmitProjectDialog} from "../submit-project-dialog/submit-project-dialog";
import {Project} from 'src/app/interfaces/project.interface';

@Component({
  selector: "project-details-dialog",
  templateUrl: "project-details-dialog.html",
  styleUrls: ["./project-details-dialog.scss"]
})
export class ProjectDetailsDialog implements OnInit {
  translatorForm = new FormGroup({
    translators: new FormControl(""),
    notes: new FormControl("")
  });

  constructor(
    public dialogRef: MatDialogRef<ProjectDetailsDialog>,
    public dialog: MatDialog,
    public alert: AlertService,
    public user: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private projectService: ProjectService,
  ) { }

  selectedValue: any;
  project: Project;
  public async ngOnInit() {
    console.log("data from project list", this.data);
    await this.user.awaitId();
    await this.updateProject();
  }

  requirementFiles: Array<any>;
  quotationFiles: Array<any>;
  deliveredFiles: Array<any>;
  updatingProject: boolean = false;
  private async updateProject() {
    this.updatingProject = true;
    this.project = await this.projectService.getProject(this.data.projectId);
    [
      this.requirementFiles, 
      this.quotationFiles, 
      this.deliveredFiles
    ] = await Promise.all([
      this.projectService.listProjectRequirementFiles(this.project.id),
      this.projectService.listProjectQuotationFiles(this.project.id),
      this.projectService.listProjectDeliveredFiles(this.project.id)
    ]);
    this.updatingProject = false;
  }

  public downloadFile(fileKey: string) {
    this.projectService.downloadProjectFile(fileKey);
  }

  public async deleteFile(fileKey: string) {
    await this.projectService.deleteProjectFile(fileKey);
    this.updateProject();
  }

  public async deleteProject() {
    await this.projectService.deleteProject(this.project.id);
    this.dialogRef.close();
  }

  @ViewChild("requirementFilesInput", {static: false}) requirementFilesInput: ElementRef;
  public async uploadRequirementFiles() {
    if (this.requirementFilesInput && this.requirementFilesInput.nativeElement.files) {
      for (let file of this.requirementFilesInput.nativeElement.files) {
        await this.projectService.uploadProjectRequirementFile(this.project.id, file)
      }
    }
    this.updateProject();
  }

  @ViewChild("quotationFilesInput", {static: false}) quotationFilesInput: ElementRef;
  public async uploadQuotationFiles() {
    if (this.quotationFilesInput && this.quotationFilesInput.nativeElement.files) {
      for (let file of this.quotationFilesInput.nativeElement.files) {
        await this.projectService.uploadProjectQuotationFile(this.project.id, file)
      }
    }
    this.updateProject();
  }

  @ViewChild("deliveredFilesInput", {static: false}) deliveredFilesInput: ElementRef;
  public async uploadDeliveredFiles() {
    if (this.deliveredFilesInput && this.deliveredFilesInput.nativeElement.files) {
      for (let file of this.deliveredFilesInput.nativeElement.files) {
        await this.projectService.uploadProjectDeliveredFile(this.project.id, file)
      }
    }
    this.updateProject();
  }

  public allotTranslatorDialog() {
    const allotDialogRef = this.dialog.open(AllotTranslatorDialog, {
      maxWidth: "85vw",
      minWidth: "80vw",
      data: {
        project: this.project
      }
    });
    allotDialogRef.afterClosed().subscribe(async (result: any) => {
      this.updatingProject = true;
      if(result) {
        for (let item of this.project.vendors.items) {
          await this.projectService.deleteProjectVendor(item.id);
        }
        for (let item of result.assignedVendors) {
          await this.projectService.assignProjectVendor(this.project.id, item.vendor.id);
        }
      }
      await this.updateProject();
      this.updatingProject = false;
    });
  }

  public async updateProjectStatuses() {
    this.updatingProject = true;
    await this.projectService.updateProject(this.project);
    this.updatingProject = false;
  }

}
