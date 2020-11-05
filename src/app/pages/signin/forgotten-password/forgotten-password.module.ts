import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ForgottenPasswordPageRoutingModule} from './forgotten-password-routing.module';

import {ForgottenPasswordPage} from './forgotten-password.page';
import { AmplifyAngularModule, AmplifyIonicModule, AmplifyService } from 'aws-amplify-angular'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgottenPasswordPageRoutingModule,
    AmplifyAngularModule,
    AmplifyIonicModule,
  ],
  declarations: [ForgottenPasswordPage],
  providers: [AmplifyService]
})
export class ForgottenPasswordPageModule {}
