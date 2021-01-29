import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthformPageRoutingModule } from './healthform-routing.module';

import { HealthformPage } from './healthform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthformPageRoutingModule
  ],
  declarations: [HealthformPage]
})
export class HealthformPageModule {}
