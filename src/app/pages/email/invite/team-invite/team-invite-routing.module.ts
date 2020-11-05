import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamInvitePage } from './team-invite.page';

const routes: Routes = [
  {
    path: '',
    component: TeamInvitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamInvitePageRoutingModule {}
