import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetRatePage } from './net-rate.page';

const routes: Routes = [
  {
    path: '',
    component: NetRatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetRatePageRoutingModule {}
