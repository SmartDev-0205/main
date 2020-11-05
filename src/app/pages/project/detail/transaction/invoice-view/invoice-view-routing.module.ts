import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceViewPage } from './invoice-view.page';

const routes: Routes = [
  {
    path: '',
    component: InvoiceViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceViewPageRoutingModule {}
