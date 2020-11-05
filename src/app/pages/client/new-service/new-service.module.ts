import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewServicePageRoutingModule } from './new-service-routing.module';

import { NewServicePage } from './new-service.page';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewServicePageRoutingModule,
    DragDropModule
  ],
  declarations: [NewServicePage]
})
export class NewServicePageModule {}
