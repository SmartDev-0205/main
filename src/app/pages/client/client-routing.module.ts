import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientPage } from './client.page';

const routes: Routes = [
  {
    path: '',
    component: ClientPage,
    children:[
      {
        path: 'clients',
        loadChildren: () => import('./clinets/clinets.module').then( m => m.ClinetsPageModule)
      },
      {
        path: 'services',
        loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
      },
      {
        path: 'net-rate',
        loadChildren: () => import('./net-rate/net-rate.module').then( m => m.NetRatePageModule)
      },
      {
        path: 'rates',
        loadChildren: () => import('./rates/rates.module').then( m => m.RatesPageModule)
      },
      {
        path: 'new-service',
        loadChildren: () => import('./new-service/new-service.module').then( m => m.NewServicePageModule)
      },
      {
        path: '',
        redirectTo: 'clients',
        pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPageRoutingModule {}
