import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoicingPage } from './invoicing.page';

const routes: Routes = [
  {
    path: '',
    component: InvoicingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoicingPageRoutingModule {}
