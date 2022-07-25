import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPinPageRoutingModule } from './add-pin-routing.module';

import { AddPinPage } from './add-pin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPinPageRoutingModule
  ],
  declarations: [AddPinPage]
})
export class AddPinPageModule {}
