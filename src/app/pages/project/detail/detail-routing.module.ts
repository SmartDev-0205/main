import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPage } from './detail.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPage,
    children:[
      {
        path: 'file',
        loadChildren: () => import('./file/file.module').then( m => m.FilePageModule)
      },
      {
        path: 'workflow',
        loadChildren: () => import('./workflow/workflow.module').then( m => m.WorkflowPageModule)
      },
      {
        path: 'team',
        loadChildren: () => import('./team/team.module').then( m => m.TeamPageModule)
      },
      {
        path: 'transaction',
        loadChildren: () => import('./transaction/transaction.module').then( m => m.TransactionPageModule)
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPageRoutingModule {}
