import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancePage } from './finance.page';

const routes: Routes = [
  {
    path: 'manager',
    component: FinancePage,
    children:[
      {
        path: 'quotation',
        loadChildren: () => import('./quotation/quotation.module').then( m => m.QuotationPageModule)
      },
      {
        path: 'invoice',
        loadChildren: () => import('./invoice/invoice.module').then( m => m.InvoicePageModule)
      },
      {
        path: 'cash-collection',
        loadChildren: () => import('./cash-collection/cash-collection.module').then( m => m.CashCollectionPageModule)
      },
      {
        path: '',
        redirectTo: '/finance/manager/quotation',
        pathMatch: 'full'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancePageRoutingModule {}
