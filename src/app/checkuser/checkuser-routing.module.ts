import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckuserPage } from './checkuser.page';

const routes: Routes = [
  {
    path: '',
    component: CheckuserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckuserPageRoutingModule {}
