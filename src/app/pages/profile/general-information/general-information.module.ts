import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralInformationPageRoutingModule } from './general-information-routing.module';

import { GeneralInformationPage } from './general-information.page';
import { MaterialModule } from 'src/app/shared/material-modules';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralInformationPageRoutingModule,
    MaterialModule
  ],
  declarations: [GeneralInformationPage]
})
export class GeneralInformationPageModule {}
