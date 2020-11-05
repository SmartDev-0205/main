import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatesPage } from './rates.page';

const routes: Routes = [
  {
    path: '',
    component: RatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatesPageRoutingModule {}
