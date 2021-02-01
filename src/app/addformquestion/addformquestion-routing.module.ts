import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddformquestionPage } from './addformquestion.page';

const routes: Routes = [
  {
    path: '',
    component: AddformquestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddformquestionPageRoutingModule {}
