import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvitePage } from './invite.page';
import { GuardUnauthorizedToSignin } from 'src/app/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: InvitePage
  },
  {
    path: 'team-invite/:id',
    loadChildren: () => import('./team-invite/team-invite.module').then( m => m.TeamInvitePageModule),
    canActivate: [GuardUnauthorizedToSignin]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitePageRoutingModule {}
