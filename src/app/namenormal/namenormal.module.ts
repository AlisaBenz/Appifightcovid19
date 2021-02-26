import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NamenormalPageRoutingModule } from './namenormal-routing.module';

import { NamenormalPage } from './namenormal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NamenormalPageRoutingModule
  ],
  declarations: [NamenormalPage]
})
export class NamenormalPageModule {}
