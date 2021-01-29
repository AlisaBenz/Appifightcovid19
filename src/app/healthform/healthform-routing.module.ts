import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthformPage } from './healthform.page';

const routes: Routes = [
  {
    path: '',
    component: HealthformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthformPageRoutingModule {}
