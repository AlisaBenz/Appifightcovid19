import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerateuseradminPageRoutingModule } from './generateuseradmin-routing.module';

import { GenerateuseradminPage } from './generateuseradmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerateuseradminPageRoutingModule
  ],
  declarations: [GenerateuseradminPage]
})
export class GenerateuseradminPageModule {}
