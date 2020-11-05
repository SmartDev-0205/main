import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewPage } from './view/view.page';
import { AssignPage } from './assign/assign.page';

const routes: Routes = [
  {
    path: 'view',
    loadChildren: () => import('./view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'assign',
    loadChildren: () => import('./assign/assign.module').then( m => m.AssignPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobPageRoutingModule {}
