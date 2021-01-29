import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginpatientPage } from './loginpatient.page';

const routes: Routes = [
  {
    path: '',
    component: LoginpatientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginpatientPageRoutingModule {}
