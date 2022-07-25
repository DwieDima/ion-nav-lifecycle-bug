import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalOutletPage } from './modal-outlet.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [ModalOutletPage],
  exports: [ModalOutletPage],
})
export class ModalOutletPageModule {}
