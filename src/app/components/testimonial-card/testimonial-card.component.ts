import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class TestimonialCardComponent {

  @Input() name = '';
  @Input() title = '';
  @Input() description = '';
  @Input() image = '';

}
