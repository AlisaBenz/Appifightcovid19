import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddformQPageRoutingModule } from './addform-q-routing.module';

import { AddformQPage } from './addform-q.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddformQPageRoutingModule
  ],
  declarations: [AddformQPage]
})
export class AddformQPageModule {}
