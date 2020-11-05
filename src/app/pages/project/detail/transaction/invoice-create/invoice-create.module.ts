import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoiceCreatePageRoutingModule } from './invoice-create-routing.module';

import { InvoiceCreatePage } from './invoice-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoiceCreatePageRoutingModule
  ],
  declarations: [InvoiceCreatePage]
})
export class InvoiceCreatePageModule {}
