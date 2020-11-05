import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuoteViewPage } from './quote-view.page';

const routes: Routes = [
  {
    path: '',
    component: QuoteViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuoteViewPageRoutingModule {}
