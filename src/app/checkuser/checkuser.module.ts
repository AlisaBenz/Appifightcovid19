import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckuserPageRoutingModule } from './checkuser-routing.module';

import { CheckuserPage } from './checkuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckuserPageRoutingModule
  ],
  declarations: [CheckuserPage]
})
export class CheckuserPageModule {}
