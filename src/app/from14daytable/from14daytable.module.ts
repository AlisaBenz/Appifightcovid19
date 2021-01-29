import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { From14daytablePageRoutingModule } from './from14daytable-routing.module';

import { From14daytablePage } from './from14daytable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    From14daytablePageRoutingModule
  ],
  declarations: [From14daytablePage]
})
export class From14daytablePageModule {}
