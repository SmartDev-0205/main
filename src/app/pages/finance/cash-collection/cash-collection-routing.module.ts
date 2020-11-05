import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashCollectionPage } from './cash-collection.page';

const routes: Routes = [
  {
    path: '',
    component: CashCollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashCollectionPageRoutingModule {}
