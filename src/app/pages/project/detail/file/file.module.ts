import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilePageRoutingModule } from './file-routing.module';

import { FilePage } from './file.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/shared/material-modules';
import { WorkflowDialogComponent } from 'src/app/shared/dialogs/workflow-dialog/workflow-dialog.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilePageRoutingModule,
    ComponentsModule,
    MaterialModule
  ],
  declarations: [FilePage],
  entryComponents: [WorkflowDialogComponent],
})
export class FilePageModule {}
