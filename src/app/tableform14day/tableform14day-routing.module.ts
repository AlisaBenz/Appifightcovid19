import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tableform14dayPage } from './tableform14day.page';

const routes: Routes = [
  {
    path: '',
    component: Tableform14dayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tableform14dayPageRoutingModule {}
