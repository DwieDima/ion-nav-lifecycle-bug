import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1Page } from './tab1.page';

import { ModalOutletPageModule } from '../outlet/modal-outlet/modal-outlet.module';
import { AddCardPageModule } from '../pages/add-card/add-card.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    ModalOutletPageModule,
    AddCardPageModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
