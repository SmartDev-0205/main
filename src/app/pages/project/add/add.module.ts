import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPageRoutingModule } from './add-routing.module';

import { AddPage } from './add.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/shared/material-modules';
import { WorkflowDialogComponent } from 'src/app/shared/dialogs/workflow-dialog/workflow-dialog.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPageRoutingModule,
    ComponentsModule,
    MaterialModule
  ],
  declarations: [AddPage],
  entryComponents: [WorkflowDialogComponent],
})
export class AddPageModule {}
