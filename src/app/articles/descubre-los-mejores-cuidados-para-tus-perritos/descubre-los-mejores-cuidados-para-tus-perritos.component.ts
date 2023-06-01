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
    this._setMetaTags();
    this.navigationService.navigationBg.set('dog');
  }

  private _setMetaTags() {
    this.meta.setMetaTags(
      'Descubre los mejores cuidados para tus perritos',
      '¿Buscas el mejor cuidado para tus perritos? Descubre nuestra selección de cuidadores de confianza. ¡Conócelos ahora!',
    )
  }

}
