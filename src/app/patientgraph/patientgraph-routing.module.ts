import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientgraphPage } from './patientgraph.page';

const routes: Routes = [
  {
    path: '',
    component: PatientgraphPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientgraphPageRoutingModule {}
