import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuoteCreatePage } from './quote-create.page';

const routes: Routes = [
  {
    path: '',
    component: QuoteCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuoteCreatePageRoutingModule {}
