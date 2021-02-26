import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NameveryriskstatusPageRoutingModule } from './nameveryriskstatus-routing.module';

import { NameveryriskstatusPage } from './nameveryriskstatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NameveryriskstatusPageRoutingModule
  ],
  declarations: [NameveryriskstatusPage]
})
export class NameveryriskstatusPageModule {}
