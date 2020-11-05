import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewServicePage } from './new-service.page';

const routes: Routes = [
  {
    path: '',
    component: NewServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewServicePageRoutingModule {}
