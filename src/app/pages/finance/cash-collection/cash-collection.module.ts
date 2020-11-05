import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashCollectionPageRoutingModule } from './cash-collection-routing.module';

import { CashCollectionPage } from './cash-collection.page';
import { MaterialModule } from 'src/app/shared/material-modules';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashCollectionPageRoutingModule,
    MaterialModule,
    ComponentsModule
  ],
  declarations: [CashCollectionPage]
})
export class CashCollectionPageModule {}
