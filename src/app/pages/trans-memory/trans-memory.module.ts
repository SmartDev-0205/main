import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransMemoryPageRoutingModule } from './trans-memory-routing.module';

import { TransMemoryPage } from './trans-memory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransMemoryPageRoutingModule
  ],
  declarations: [TransMemoryPage]
})
export class TransMemoryPageModule {}
