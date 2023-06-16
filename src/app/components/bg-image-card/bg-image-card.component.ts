import { Component, Input } from '@angular/core';

@Component({
  selector: 'bg-image-card',
  templateUrl: './bg-image-card.component.html',
  styleUrls: ['./bg-image-card.component.scss']
})
export class BgImageCardComponent {
  @Input() imageUrl = 'https://esferamascota.b-cdn.net/destacados-perro.webp'

}
