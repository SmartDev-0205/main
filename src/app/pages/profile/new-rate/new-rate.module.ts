import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewRatePageRoutingModule } from './new-rate-routing.module';

import { NewRatePage } from './new-rate.page';
import { MaterialModule } from 'src/app/shared/material-modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewRatePageRoutingModule,
    MaterialModule
  ],
  declarations: [NewRatePage]
})
export class NewRatePageModule {}
