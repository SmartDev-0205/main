import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionPage } from './transaction.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionPage,
    children:[
      {
        path: 'quote',
        loadChildren: () => import('./quote/quote.module').then( m => m.QuotePageModule)
      },
      {
        path: 'invoice',
        loadChildren: () => import('./invoice/invoice.module').then( m => m.InvoicePageModule)
      },
      {
        path: 'invoice/invoice-create',
        loadChildren: () => import('./invoice-create/invoice-create.module').then( m => m.InvoiceCreatePageModule)
      },
      {
        path: 'invoice/invoice-view',
        loadChildren: () => import('./invoice-view/invoice-view.module').then( m => m.InvoiceViewPageModule)
      },
      {
        path: 'quote/quote-view',
        loadChildren: () => import('./quote-view/quote-view.module').then( m => m.QuoteViewPageModule)
      },
      {
        path: 'quote/quote-create',
        loadChildren: () => import('./quote-create/quote-create.module').then( m => m.QuoteCreatePageModule)
      },
      {
        path: 'payments',
        loadChildren: () => import('./payments/payments.module').then( m => m.PaymentsPageModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionPageRoutingModule {}
