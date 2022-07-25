import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCardManuallyPage } from './add-card-manually.page';

const routes: Routes = [
  {
    path: '',
    component: AddCardManuallyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCardManuallyPageRoutingModule {}
