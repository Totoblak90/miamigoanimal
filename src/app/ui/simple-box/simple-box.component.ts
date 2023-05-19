import { Component, Input } from '@angular/core';

@Component({
  selector: 'simple-box',
  templateUrl: './simple-box.component.html',
  styleUrls: ['./simple-box.component.scss']
})
export class SimpleBoxComponent {
  @Input() link?: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
