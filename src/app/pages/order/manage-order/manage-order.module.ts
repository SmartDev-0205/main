import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageOrderPageRoutingModule } from './manage-order-routing.module';

import { ManageOrderPage } from './manage-order.page';
import { MaterialModule } from 'src/app/shared/material-modules';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageOrderPageRoutingModule,
    MaterialModule,
    ComponentsModule
  ],
  declarations: [ManageOrderPage]
})
export class ManageOrderPageModule {}
