import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestregisterPage } from './testregister.page';

const routes: Routes = [
  {
    path: '',
    component: TestregisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestregisterPageRoutingModule {}
