import { isPlatformBrowser } from '@angular/common';
import { Component, Input, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'expandable-text',
  templateUrl: './expandable-text.component.html',
  styleUrls: ['./expandable-text.component.scss']
})
export class ExpandableTextComponent {


  @ViewChild('textoContainer') textoContainer!: ElementRef;


  @Input() title: HTMLHeadElement | undefined;
  @Input() textoCompleto: string = '';

  estaExpandido: boolean = false;
  maxHeight: string = '250px';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  toggleTexto() {
    this.estaExpandido = !this.estaExpandido;

    if (this.estaExpandido) {
      this.maxHeight = `${this.textoContainer.nativeElement.scrollHeight + 60}px`;
    } else {
      this.maxHeight = '250px';
    }

    if (!this.estaExpandido && this.title && isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: this.title?.offsetTop - 20,
        behavior: 'smooth'
      })
    }

  }

}
