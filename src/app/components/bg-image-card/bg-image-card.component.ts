import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DirectivesModule } from 'src/app/directives/directives.module';

@Component({
  selector: 'bg-image-card',
  templateUrl: './bg-image-card.component.html',
  styleUrls: ['./bg-image-card.component.scss'],
  standalone: true,
  imports: [
    DirectivesModule
  ]
})
export class BgImageCardComponent {
  @Input() imageUrl = 'https://esferamascota.b-cdn.net/destacados-perro.webp'

}
