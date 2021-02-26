import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NormalstatusPageRoutingModule } from './normalstatus-routing.module';

import { NormalstatusPage } from './normalstatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NormalstatusPageRoutingModule
  ],
  declarations: [NormalstatusPage]
})
export class NormalstatusPageModule {}
