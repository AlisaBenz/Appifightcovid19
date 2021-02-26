import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NameriskstatusPageRoutingModule } from './nameriskstatus-routing.module';

import { NameriskstatusPage } from './nameriskstatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NameriskstatusPageRoutingModule
  ],
  declarations: [NameriskstatusPage]
})
export class NameriskstatusPageModule {}
