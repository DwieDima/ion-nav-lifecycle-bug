import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicSlides, ModalController } from '@ionic/angular';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([Pagination, IonicSlides]);

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.page.html',
  styleUrls: ['./add-card.page.scss']
})
export class AddCardPage implements OnInit, OnDestroy {
  swiperConfig: SwiperOptions = {
    pagination: {
      enabled: true,
      clickable: true,
      el: '.swiper-pagination-dots'
    }
  };

  constructor(private modalController: ModalController) {}

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewDidLeave(): void {
    console.log('ionViewDidLeave');
  }

  public close() {
    return this.modalController.dismiss();
  }
}
