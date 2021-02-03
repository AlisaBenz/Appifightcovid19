import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeryriskystatusPageRoutingModule } from './veryriskystatus-routing.module';

import { VeryriskystatusPage } from './veryriskystatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeryriskystatusPageRoutingModule
  ],
  declarations: [VeryriskystatusPage]
})
export class VeryriskystatusPageModule {}
