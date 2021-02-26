import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NameriskstatusPage } from './nameriskstatus.page';

const routes: Routes = [
  {
    path: '',
    component: NameriskstatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NameriskstatusPageRoutingModule {}
