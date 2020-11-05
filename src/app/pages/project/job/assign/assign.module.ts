import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignPageRoutingModule } from './assign-routing.module';

import { AssignPage } from './assign.page';
import { ComponentsModule } from 'src/app/components/components.module';
import {MatTableModule} from "@angular/material/table"
import {MatInputModule} from "@angular/material/input"
import {MatSortModule} from "@angular/material/sort"
import {MatCardModule} from "@angular/material/card"
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select'
import { TooltipsModule } from 'ionic-tooltips';
import { MaterialModule } from 'src/app/shared/material-modules';
import { DialogsPageModule } from 'src/app/shared/dialogs/dialogs.module';
import { AssignDialogComponent } from 'src/app/shared/dialogs/assign-dialog/assign-dialog.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignPageRoutingModule,
    ComponentsModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MaterialModule,
    TooltipsModule.forRoot(),
    DialogsPageModule
  ],
  declarations: [
    AssignPage,
  ],
  exports:[
  ],
  entryComponents: [AssignDialogComponent],
})
export class AssignPageModule {}
