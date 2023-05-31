import { Component, Input } from '@angular/core';
import { Faqs } from 'src/app/interfaces/accordion.interface';

@Component({
  selector: 'faqs-health',
  templateUrl: './faqs-health.component.html',
  styleUrls: ['./faqs-health.component.scss']
})
export class FaqsHealthComponent {

  @Input() faqs: Faqs[] = [];

}
