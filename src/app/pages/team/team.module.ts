import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamPageRoutingModule } from './team-routing.module';

import { TeamPage } from './team.page';
import { MaterialModule } from 'src/app/shared/material-modules';
import { DialogsPageModule } from 'src/app/shared/dialogs/dialogs.module';
import { AddTeamDialogComponent } from 'src/app/shared/dialogs/add-team-dialog/add-team-dialog.component';
import { AddFreelancerComponent } from 'src/app/shared/dialogs/add-freelancer/add-freelancer.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamPageRoutingModule,
    MaterialModule,
    DialogsPageModule,
    ComponentsModule
  ],
  declarations: [TeamPage],
  entryComponents: [AddTeamDialogComponent,AddFreelancerComponent],
})
export class TeamPageModule {}
