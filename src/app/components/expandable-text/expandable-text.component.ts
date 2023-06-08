import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'expandable-text',
  templateUrl: './expandable-text.component.html',
  styleUrls: ['./expandable-text.component.scss']
})
export class ExpandableTextComponent implements AfterViewInit {

  @Input() textoCompleto: string = '';
  @ViewChild('textoContainer') textoContainer!: ElementRef;
  estaExpandido: boolean = false;
  maxHeight: string = '250px';

  ngAfterViewInit() {
    // Calcula la altura del contenido después de que Angular haya renderizado el componente
    this.maxHeight = `250px`;
  }

  toggleTexto() {
    this.estaExpandido = !this.estaExpandido;
    if (this.estaExpandido) {
      this.maxHeight = `${this.textoContainer.nativeElement.scrollHeight + 45}px`;
    } else {
      this.maxHeight = '250px';
    }
  }

}
