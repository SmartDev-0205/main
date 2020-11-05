import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClinetsPageRoutingModule } from './clinets-routing.module';

import { ClinetsPage } from './clinets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClinetsPageRoutingModule
  ],
  declarations: [ClinetsPage]
})
export class ClinetsPageModule {}
