import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientPageRoutingModule } from './client-routing.module';

import { ClientPage } from './client.page';
import { DialogsPageModule } from 'src/app/shared/dialogs/dialogs.module';
import { AddClientComponent } from 'src/app/shared/dialogs/add-client/add-client.component';
import { MaterialModule } from 'src/app/shared/material-modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    ClientPageRoutingModule,
    DialogsPageModule
  ],
  declarations: [ClientPage],
  entryComponents: [AddClientComponent],
})
export class ClientPageModule {}
