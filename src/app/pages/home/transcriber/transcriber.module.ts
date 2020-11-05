import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranscriberPageRoutingModule } from './transcriber-routing.module';

import { TranscriberPage } from './transcriber.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranscriberPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TranscriberPage]
})
export class TranscriberPageModule {}
