import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiskystatusPageRoutingModule } from './riskystatus-routing.module';

import { RiskystatusPage } from './riskystatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiskystatusPageRoutingModule
  ],
  declarations: [RiskystatusPage]
})
export class RiskystatusPageModule {}
