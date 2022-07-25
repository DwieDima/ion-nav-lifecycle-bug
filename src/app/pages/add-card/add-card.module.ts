import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { AddCardPage } from './add-card.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SwiperModule],
  declarations: [AddCardPage]
})
export class AddCardPageModule {}
