import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-descubre-los-mejores-cuidados-para-tus-perritos',
  templateUrl: './descubre-los-mejores-cuidados-para-tus-perritos.component.html',
  styleUrls: ['./descubre-los-mejores-cuidados-para-tus-perritos.component.scss']
})
export class DescubreLosMejoresCuidadosParaTusPerritosComponent {

  title = 'Descubre los mejores cuidados para tus perritos'
  description = '¿Buscas el mejor cuidado para tus perritos? Descubre nuestra selección de cuidadores de confianza. ¡Conócelos ahora!'

  get titleList() {
    if (isPlatformBrowser(this.platformId)) {
      return Array.from(this.document.getElementsByTagName('h2'))
    }
    return [];
  }

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.meta.setMetaTags(this.title, this.description)
    this.navigationService.navigationBg.set('dog');
  }

}
