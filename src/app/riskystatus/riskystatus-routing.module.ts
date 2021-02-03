import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiskystatusPage } from './riskystatus.page';

const routes: Routes = [
  {
    path: '',
    component: RiskystatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiskystatusPageRoutingModule {}
