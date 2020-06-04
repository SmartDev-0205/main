import {Component, Inject, OnInit} from "@angular/core";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

import {AlertService} from "../../../services/alert.service";
import {ProjectService} from "../../../services/project.service";
import {UserService} from "../../../services/user.service";

import {Storage} from "aws-amplify";

@Component({
  selector: "submit-project-dialog",
  templateUrl: "./submit-project-dialog.html",
  styleUrls: ["./submit-project-dialog.scss"]
})
export class SubmitProjectDialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SubmitProjectDialog>,
    private alert: AlertService,
    private project: ProjectService,
    private user: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  onSubmit(): void {
    const fileUploadInput: any = document.querySelector("#fileUpload") as any;

    if (fileUploadInput.files && fileUploadInput.files[0]) {
      Storage.put(
        `${this.data.projectDetails.name}_work_${this.user.id$.getValue()}.zip`,
        fileUploadInput.files[0]
      )
        .then((file: any) => {
          this.alert.show("File uploaded. Now updating project...");
          console.log("File", file);
          this.project
            .updateProject({
              ...this.data.projectDetails,
              workUrls: [file.key]
            })
            .then(updatedProject => {
              console.log(updatedProject);
              this.dialogRef.close();
            });
        })
        .catch(e => {
          console.log(e);
          this.alert.show("There was some error in uploading the file.");
        });
    } else {
      this.alert.show("There is no file to upload!");
    }
  }
}
