import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NormalstatusPage } from './normalstatus.page';

const routes: Routes = [
  {
    path: '',
    component: NormalstatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NormalstatusPageRoutingModule {}
