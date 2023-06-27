import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Faqs } from 'src/app/interfaces/accordion.interface';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'preguntas-frecuentes-section',
  templateUrl: './preguntas-frecuentes-section.component.html',
  styleUrls: ['./preguntas-frecuentes-section.component.scss'],
  standalone: true,
  imports: [CommonModule, AccordionComponent]
})
export class PreguntasFrecuentesSectionComponent {

  @ViewChild('elFaqs1') elFaqs1: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('elFaqs2') elFaqs2: ElementRef<HTMLDivElement> | undefined;

  @Input() faqs1: Faqs[] = []
  @Input() faqs1Title: string = ''

  @Input() faqs2: Faqs[] = []
  @Input() faqs2Title: string = ''

  mostrarFaqs1 = false;
  mostrarFaqs2 = false;

  startFadeOutAnimation1 = false;
  startFadeOutAnimation2 = false;


  toggleAnimation(colID: 'faqs1'| 'faqs2') {
    if (colID === 'faqs1')
    {

      if (!this.mostrarFaqs1) { this.mostrarFaqs1 = true; }

      else
      {

        this.startFadeOutAnimation1 = true;

        this.elFaqs1!.nativeElement.onanimationend = () => {
        this.startFadeOutAnimation1 = false;
          this.mostrarFaqs1 = false;
        }

      }

    }

    else
    {

      if (!this.mostrarFaqs2) { this.mostrarFaqs2 = true; }

      else
      {

        this.startFadeOutAnimation2 = true;

        this.elFaqs2!.nativeElement.onanimationend = () => {
        this.startFadeOutAnimation2 = false;
          this.mostrarFaqs2 = false;
        }

      }

    }
  }

}
