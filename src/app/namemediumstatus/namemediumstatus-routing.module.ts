import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NamemediumstatusPage } from './namemediumstatus.page';

const routes: Routes = [
  {
    path: '',
    component: NamemediumstatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NamemediumstatusPageRoutingModule {}
