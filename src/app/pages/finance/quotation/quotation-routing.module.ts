import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuotationPage } from './quotation.page';

const routes: Routes = [
  {
    path: '',
    component: QuotationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuotationPageRoutingModule {}
