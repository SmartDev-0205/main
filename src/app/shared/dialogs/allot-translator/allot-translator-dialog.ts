import {Component, Inject, OnInit} from "@angular/core";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
// import {FormControl, FormGroup, Validators} from "@angular/forms";

// import {ProlocalizeDB} from "../../../services/prolocalize-database.service";
// import {Project} from "../../../interfaces/project";
// import {ProjectService} from "../../../services/project.service";
import {UserManagementService} from 'src/app/services/user-management.service';
import {Project} from 'src/app/interfaces/project.interface';

import * as cloneDeep from "lodash/cloneDeep";

@Component({
  selector: "allot-translator-dialog",
  templateUrl: "./allot-translator-dialog.html",
  styleUrls: ["./allot-translator-dialog.scss"]
})
export class AllotTranslatorDialog implements OnInit {
  translators: Array<any>;
  translatorsCheckedMap: Object = {};
  alloted: Array<string> = [];

  constructor(
    public dialogRef: MatDialogRef<AllotTranslatorDialog>,
    private userManagement: UserManagementService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}


  vendors: Array<any>;
  assignedVendors: Array<any>;
  project: Project;
  public async ngOnInit() {
    this.vendors = await this.userManagement.listUsersWithRole('vendor');
    this.project = cloneDeep(this.data.project);
    this.assignedVendors = this.project.vendors.items;
  }

  public filterVendors(event: any) {
    const items = Array.from(document.querySelector('#ion-list-vendors').children);
    const query = event.target.value.toLowerCase();
    requestAnimationFrame(() => {
      items.forEach(item => {
        const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
        (item as any).style.display = shouldShow ? 'block' : 'none';
      });
    });
  }

  public checkIfVendorAssgined(vendor: any) {
    const foundIndex: number = this.assignedVendors.findIndex(
      element => element.vendor.id === vendor.id
    );
    const found = foundIndex !== -1;
    return found;
  }

  private removeVendor(vendor: any) {
    let foundIndex: number;
    do {
      foundIndex = this.assignedVendors.findIndex(
        element => element.vendor.id === vendor.id
      );
      if (foundIndex !== -1) {
        this.assignedVendors.splice(foundIndex,1);
      }
    } while (foundIndex !== -1)
  }

  public onVendorClicked(vendor: any) {
    const foundIndex: number = this.assignedVendors.findIndex(
      element => element.vendor.id === vendor.id
    );
    if (foundIndex === -1) {
      this.assignedVendors.push({vendor: vendor});
    } else {
      this.removeVendor(vendor);
    }
  }

  onSubmit(): void {
    this.dialogRef.close({ 
      assignedVendors: this.assignedVendors
    });
  }

}
