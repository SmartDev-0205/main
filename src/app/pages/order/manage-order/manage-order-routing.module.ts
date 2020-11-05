import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageOrderPage } from './manage-order.page';

const routes: Routes = [
  {
    path: '',
    component: ManageOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageOrderPageRoutingModule {}
