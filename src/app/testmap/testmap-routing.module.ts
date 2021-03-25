import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestmapPage } from './testmap.page';

const routes: Routes = [
  {
    path: '',
    component: TestmapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestmapPageRoutingModule {}
