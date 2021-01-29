import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Form14dayPageRoutingModule } from './form14day-routing.module';

import { Form14dayPage } from './form14day.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Form14dayPageRoutingModule
  ],
  declarations: [Form14dayPage]
})
export class Form14dayPageModule {}
