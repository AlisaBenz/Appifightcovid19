import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Form14dayPage } from './form14day.page';

const routes: Routes = [
  {
    path: '',
    component: Form14dayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Form14dayPageRoutingModule {}
