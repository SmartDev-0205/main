import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";

import {AppSharedModule} from "src/app/shared/app-shared-module";
import {MaterialModule} from "src/app/shared/material-modules";
import {ProjectsTableModule} from "src/app/components/projects-table/projects-table.module"

import {ListProjectsPageRoutingModule} from './list-projects-routing.module';
import {ListProjectsPage} from './list-projects.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ListProjectsPageRoutingModule,
    AppSharedModule,
    MaterialModule,
    ProjectsTableModule
  ],
  declarations: [ListProjectsPage]
})
export class ListProjectsPageModule {}
