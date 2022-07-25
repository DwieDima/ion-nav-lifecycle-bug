import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCardManuallyPageRoutingModule } from './add-card-manually-routing.module';

import { AddCardManuallyPage } from './add-card-manually.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCardManuallyPageRoutingModule
  ],
  declarations: [AddCardManuallyPage]
})
export class AddCardManuallyPageModule {}
