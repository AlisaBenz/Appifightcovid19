import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestmapPageRoutingModule } from './testmap-routing.module';

import { TestmapPage } from './testmap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestmapPageRoutingModule
  ],
  declarations: [TestmapPage]
})
export class TestmapPageModule {}
