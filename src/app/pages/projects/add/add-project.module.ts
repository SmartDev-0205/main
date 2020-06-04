import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";

import {AppSharedModule} from "src/app/shared/app-shared-module";
import {MaterialModule} from "src/app/shared/material-modules";

import {AddProjectPage} from "src/app/pages/projects/add/add-project.page";

import {AddProjectPageRoutingModule} from "./add-project-routing.module";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AddProjectPageRoutingModule,
    AppSharedModule,
    MaterialModule,
  ],
  declarations: [
    AddProjectPage
  ]
})
export class AddProjectPageModule {}
