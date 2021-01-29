import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreeningresultPage } from './screeningresult.page';

const routes: Routes = [
  {
    path: '',
    component: ScreeningresultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreeningresultPageRoutingModule {}
