import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslatorPageRoutingModule } from './translator-routing.module';

import { TranslatorPage } from './translator.page';
import { MaterialModule } from 'src/app/shared/material-modules';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslatorPageRoutingModule,
    MaterialModule,
    ComponentsModule
  ],
  declarations: [TranslatorPage]
})
export class TranslatorPageModule {}
