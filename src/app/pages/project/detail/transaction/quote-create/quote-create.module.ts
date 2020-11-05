import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuoteCreatePageRoutingModule } from './quote-create-routing.module';

import { QuoteCreatePage } from './quote-create.page';
import { MaterialModule } from 'src/app/shared/material-modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuoteCreatePageRoutingModule,
    MaterialModule
  ],
  declarations: [QuoteCreatePage]
})
export class QuoteCreatePageModule {}
