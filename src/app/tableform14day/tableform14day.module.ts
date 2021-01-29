import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tableform14dayPageRoutingModule } from './tableform14day-routing.module';

import { Tableform14dayPage } from './tableform14day.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tableform14dayPageRoutingModule
  ],
  declarations: [Tableform14dayPage]
})
export class Tableform14dayPageModule {}
