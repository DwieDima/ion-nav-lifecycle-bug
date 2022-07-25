import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalOutletPage } from '../outlet/modal-outlet/modal-outlet.page';
import { AddCardPage } from '../pages/add-card/add-card.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private modalController: ModalController) {}

  public async openModal() {
    const modal = await this.modalController.create({
      component: ModalOutletPage,
      componentProps: { component: AddCardPage }
    });

    await modal.present();
  }

  public async openModalDefault() {
    const modal = await this.modalController.create({
      component: AddCardPage
    });

    await modal.present();
  }
}
