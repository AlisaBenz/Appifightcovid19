import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestregisterPageRoutingModule } from './testregister-routing.module';

import { TestregisterPage } from './testregister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestregisterPageRoutingModule
  ],
  declarations: [TestregisterPage]
})
export class TestregisterPageModule {}
