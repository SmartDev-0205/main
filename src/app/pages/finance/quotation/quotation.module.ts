import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuotationPageRoutingModule } from './quotation-routing.module';

import { QuotationPage } from './quotation.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuotationPageRoutingModule,
    ComponentsModule
  ],
  declarations: [QuotationPage]
})
export class QuotationPageModule {}
