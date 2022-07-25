import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-outlet',
  templateUrl: './modal-outlet.page.html',
  styleUrls: ['./modal-outlet.page.scss']
})
export class ModalOutletPage {
  @Input() public component: HTMLElement;
  @Input() public componentProps: unknown;

  constructor() {}
}
