import { Component, Input } from '@angular/core';

@Component({
  selector: 'bg-image-card',
  templateUrl: './bg-image-card.component.html',
  styleUrls: ['./bg-image-card.component.scss']
})
export class BgImageCardComponent {
  @Input() imageUrl = 'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/destacados-perros.webp?raw=true'

}
