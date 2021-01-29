import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginpatientPageRoutingModule } from './loginpatient-routing.module';

import { LoginpatientPage } from './loginpatient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginpatientPageRoutingModule
  ],
  declarations: [LoginpatientPage]
})
export class LoginpatientPageModule {}
