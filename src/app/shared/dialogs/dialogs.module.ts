import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MaterialModule } from '../material-modules';
import { AddTeamDialogComponent } from './add-team-dialog/add-team-dialog.component';
import { SplitDialogComponent } from './split-dialog/split-dialog.component';
import { AddFreelancerComponent } from './add-freelancer/add-freelancer.component';
import { WordDialogComponent } from './word-dialog/word-dialog.component';
import { AssignDialogComponent } from './assign-dialog/assign-dialog.component';
import { WorkflowDialogComponent } from './workflow-dialog/workflow-dialog.component';
import { AddClientComponent } from './add-client/add-client.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PaymentDialogComponent } from './payment-dialog/payment-dialog.component';
import { NgxPayPalModule } from 'ngx-paypal';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MaterialModule,
    DragDropModule,
    NgxPayPalModule
  ],
  declarations: [
    AddTeamDialogComponent,
    SplitDialogComponent,
    AddFreelancerComponent,
    AddClientComponent,
    WordDialogComponent,
    AssignDialogComponent,
    WorkflowDialogComponent,
    PaymentDialogComponent
  ],
  exports:[
    AddTeamDialogComponent,
    SplitDialogComponent,
    AddFreelancerComponent,
    AddClientComponent,
    WordDialogComponent,
    AssignDialogComponent,
    WorkflowDialogComponent,
    PaymentDialogComponent
  ]
})
export class DialogsPageModule {}
