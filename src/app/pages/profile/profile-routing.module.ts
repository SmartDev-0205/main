import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
    children:[
      {
        path: 'general-information',
        loadChildren: () => import('./general-information/general-information.module').then( m => m.GeneralInformationPageModule)
      },
      {
        path: 'contact-information',
        loadChildren: () => import('./contact-information/contact-information.module').then( m => m.ContactInformationPageModule)
      },
      {
        path: 'login-information',
        loadChildren: () => import('./login-information/login-information.module').then( m => m.LoginInformationPageModule)
      },
      {
        path: 'invoicing',
        loadChildren: () => import('./invoicing/invoicing.module').then( m => m.InvoicingPageModule)
      },
      {
        path: 'rate',
        loadChildren: () => import('./rate/rate.module').then( m => m.RatePageModule)
      },
      {
        path: 'new-rate',
        loadChildren: () => import('./new-rate/new-rate.module').then( m => m.NewRatePageModule)
      },
      {
        path: '',
        redirectTo: '/profile/general-information',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: ':id',
    component: ProfilePage,
    children:[
      {
        path: 'general-information',
        loadChildren: () => import('./general-information/general-information.module').then( m => m.GeneralInformationPageModule)
      },
      {
        path: 'contact-information',
        loadChildren: () => import('./contact-information/contact-information.module').then( m => m.ContactInformationPageModule)
      },
      {
        path: 'login-information',
        loadChildren: () => import('./login-information/login-information.module').then( m => m.LoginInformationPageModule)
      },
      {
        path: 'invoicing',
        loadChildren: () => import('./invoicing/invoicing.module').then( m => m.InvoicingPageModule)
      },
      {
        path: 'rate',
        loadChildren: () => import('./rate/rate.module').then( m => m.RatePageModule)
      },
      {
        path: 'new-rate',
        loadChildren: () => import('./new-rate/new-rate.module').then( m => m.NewRatePageModule)
      },
      {
        path: 'net-rate',
        loadChildren: () => import('./net-rate/net-rate.module').then( m => m.NetRatePageModule)
      },
      {
        path: '',
        redirectTo: 'general-information',
        pathMatch: 'full'
      },
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
