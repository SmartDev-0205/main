import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranscriberPage } from './transcriber.page';

const routes: Routes = [
  {
    path: '',
    component: TranscriberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranscriberPageRoutingModule {}
