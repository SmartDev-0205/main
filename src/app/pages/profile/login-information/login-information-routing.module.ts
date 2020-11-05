import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginInformationPage } from './login-information.page';

const routes: Routes = [
  {
    path: '',
    component: LoginInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginInformationPageRoutingModule {}
