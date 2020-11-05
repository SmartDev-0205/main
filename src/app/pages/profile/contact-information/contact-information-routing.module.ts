import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactInformationPage } from './contact-information.page';

const routes: Routes = [
  {
    path: '',
    component: ContactInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactInformationPageRoutingModule {}
