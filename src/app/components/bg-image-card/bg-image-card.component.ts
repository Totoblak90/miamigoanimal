import { Component, Input } from '@angular/core';

@Component({
  selector: 'bg-image-card',
  templateUrl: './bg-image-card.component.html',
  styleUrls: ['./bg-image-card.component.scss']
})
export class BgImageCardComponent {
  @Input() imageUrl = 'https://34.36.144.117/destacados-perros.webp'

}
