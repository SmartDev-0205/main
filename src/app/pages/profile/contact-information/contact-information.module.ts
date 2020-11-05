import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactInformationPageRoutingModule } from './contact-information-routing.module';

import { ContactInformationPage } from './contact-information.page';
import { MaterialModule } from 'src/app/shared/material-modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactInformationPageRoutingModule,
    MaterialModule
  ],
  declarations: [ContactInformationPage]
})
export class ContactInformationPageModule {}
