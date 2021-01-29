import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientmapPageRoutingModule } from './patientmap-routing.module';

import { PatientmapPage } from './patientmap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientmapPageRoutingModule
  ],
  declarations: [PatientmapPage]
})
export class PatientmapPageModule {}
