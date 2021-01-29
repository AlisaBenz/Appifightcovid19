import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientgraphPageRoutingModule } from './patientgraph-routing.module';

import { PatientgraphPage } from './patientgraph.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientgraphPageRoutingModule
  ],
  declarations: [PatientgraphPage]
})
export class PatientgraphPageModule {}
