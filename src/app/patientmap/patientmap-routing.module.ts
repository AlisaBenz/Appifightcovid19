import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientmapPage } from './patientmap.page';

const routes: Routes = [
  {
    path: '',
    component: PatientmapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientmapPageRoutingModule {}
