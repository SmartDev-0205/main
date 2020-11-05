import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransMemoryPage } from './trans-memory.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: "list",
    pathMatch: "full"
  },
  {
    path: 'create',
    loadChildren: () => import('../trans-memory/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('../trans-memory/list/list.module').then( m => m.ListPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransMemoryPageRoutingModule {}
