import { Component, Input } from '@angular/core';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'flipping-card',
  templateUrl: './flipping-card.component.html',
  styleUrls: ['./flipping-card.component.scss']
})
export class FlippingCardComponent {
  @Input() cardTitle = '';
  @Input() topics: string[] = [];
  @Input() type: 'cat' | 'dog' | 'extra' = 'extra';
  @Input() href = '';

  constructor(private utilitiesSrv: UtilitiesService) { }

  get cardPicture() {
    return this.utilitiesSrv.selectImage(this.type);
  }
}
