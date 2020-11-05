import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuoteViewPageRoutingModule } from './quote-view-routing.module';

import { QuoteViewPage } from './quote-view.page';
import { MaterialModule } from 'src/app/shared/material-modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuoteViewPageRoutingModule,
    MaterialModule
  ],
  declarations: [QuoteViewPage]
})
export class QuoteViewPageModule {}
