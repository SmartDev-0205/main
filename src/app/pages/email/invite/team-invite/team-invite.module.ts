import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamInvitePageRoutingModule } from './team-invite-routing.module';

import { TeamInvitePage } from './team-invite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamInvitePageRoutingModule
  ],
  declarations: [TeamInvitePage]
})
export class TeamInvitePageModule {}
