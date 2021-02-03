import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeryriskystatusPage } from './veryriskystatus.page';

const routes: Routes = [
  {
    path: '',
    component: VeryriskystatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeryriskystatusPageRoutingModule {}
