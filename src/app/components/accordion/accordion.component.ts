import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { Faqs } from 'src/app/interfaces/accordion.interface';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AccordionComponent {
  activeIndex: number = -1;

  @Input() faq: Faqs[] = [
    { question: 'Pregunta 1', answer: 'Respuesta 1' },
    { question: 'Pregunta 2', answer: 'Respuesta 2' },
  ];

  toggleAccordion(index: number) {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }
}
