import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediumstatusPage } from './mediumstatus.page';

const routes: Routes = [
  {
    path: '',
    component: MediumstatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediumstatusPageRoutingModule {}
