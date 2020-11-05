import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuotePageRoutingModule } from './quote-routing.module';

import { QuotePage } from './quote.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { TooltipsModule } from 'ionic-tooltips';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuotePageRoutingModule,
    ComponentsModule,
    TooltipsModule.forRoot(),  
  ],
  declarations: [QuotePage]
})
export class QuotePageModule {}
