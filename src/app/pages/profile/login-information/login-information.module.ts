import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginInformationPageRoutingModule } from './login-information-routing.module';

import { LoginInformationPage } from './login-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginInformationPageRoutingModule
  ],
  declarations: [LoginInformationPage]
})
export class LoginInformationPageModule {}
