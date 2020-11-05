import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NetRatePageRoutingModule } from './net-rate-routing.module';

import { NetRatePage } from './net-rate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NetRatePageRoutingModule
  ],
  declarations: [NetRatePage]
})
export class NetRatePageModule {}
