import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.page.html',
  styleUrls: ['./add-card.page.scss'],
})
export class AddCardPage implements OnInit, OnDestroy {
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
