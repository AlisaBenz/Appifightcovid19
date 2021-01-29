import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddformQPage } from './addform-q.page';

const routes: Routes = [
  {
    path: '',
    component: AddformQPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddformQPageRoutingModule {}
