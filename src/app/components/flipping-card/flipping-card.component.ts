import { Component, Input } from '@angular/core';

@Component({
  selector: 'flipping-card',
  templateUrl: './flipping-card.component.html',
  styleUrls: ['./flipping-card.component.scss']
})
export class FlippingCardComponent {
  @Input() cardTitle = '';
  @Input() topics: string[] = [];
  @Input() type: 'cat' | 'dog' | 'extra' = 'extra';
}
