import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { From14daytablePage } from './from14daytable.page';

const routes: Routes = [
  {
    path: '',
    component: From14daytablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class From14daytablePageRoutingModule {}
