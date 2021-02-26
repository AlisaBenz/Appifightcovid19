import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NamenormalPage } from './namenormal.page';

const routes: Routes = [
  {
    path: '',
    component: NamenormalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NamenormalPageRoutingModule {}
