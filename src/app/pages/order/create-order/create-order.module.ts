import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateOrderPageRoutingModule } from './create-order-routing.module';

import { CreateOrderPage } from './create-order.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/shared/material-modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateOrderPageRoutingModule,
    MaterialModule,
    ComponentsModule
  ],
  declarations: [CreateOrderPage]
})
export class CreateOrderPageModule {}
