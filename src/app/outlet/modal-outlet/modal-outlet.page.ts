import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-modal-outlet',
  templateUrl: './modal-outlet.page.html',
  styleUrls: ['./modal-outlet.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalOutletPage implements OnInit {
  @Input() public component: HTMLElement;
  @Input() public componentProps: unknown;

  constructor() {}

  ngOnInit() {}
}
