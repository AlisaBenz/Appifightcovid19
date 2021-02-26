import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NamemediumstatusPageRoutingModule } from './namemediumstatus-routing.module';

import { NamemediumstatusPage } from './namemediumstatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NamemediumstatusPageRoutingModule
  ],
  declarations: [NamemediumstatusPage]
})
export class NamemediumstatusPageModule {}
