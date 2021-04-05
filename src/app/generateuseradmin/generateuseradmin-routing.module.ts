import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerateuseradminPage } from './generateuseradmin.page';

const routes: Routes = [
  {
    path: '',
    component: GenerateuseradminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerateuseradminPageRoutingModule {}
