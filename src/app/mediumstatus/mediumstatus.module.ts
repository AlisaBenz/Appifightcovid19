import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MediumstatusPageRoutingModule } from './mediumstatus-routing.module';

import { MediumstatusPage } from './mediumstatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MediumstatusPageRoutingModule
  ],
  declarations: [MediumstatusPage]
})
export class MediumstatusPageModule {}
