import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewRatePage } from './new-rate.page';

const routes: Routes = [
  {
    path: '',
    component: NewRatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewRatePageRoutingModule {}
