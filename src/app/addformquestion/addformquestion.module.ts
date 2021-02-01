import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddformquestionPageRoutingModule } from './addformquestion-routing.module';

import { AddformquestionPage } from './addformquestion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddformquestionPageRoutingModule
  ],
  declarations: [AddformquestionPage]
})
export class AddformquestionPageModule {}
