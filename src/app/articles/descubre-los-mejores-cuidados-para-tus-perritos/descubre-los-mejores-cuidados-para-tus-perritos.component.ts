import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-descubre-los-mejores-cuidados-para-tus-perritos',
  templateUrl: './descubre-los-mejores-cuidados-para-tus-perritos.component.html',
  styleUrls: ['./descubre-los-mejores-cuidados-para-tus-perritos.component.scss']
})
export class DescubreLosMejoresCuidadosParaTusPerritosComponent {

  get titleList() {
    // @ts-ignore
    return [...this.document.getElementsByTagName('h2')]
  }

  constructor(private meta: MetaService, private navigationService: NavigationService, @Inject(DOCUMENT) private document: Document) {
    this._setMetaTags();
    this.navigationService.navigationBg.set('dog');
  }

  private _setMetaTags() {
    this.meta.setMetaTags(
      'Descubre los mejores cuidados para tus perritos',
      '¿Buscas el mejor cuidado para tus perritos? Descubre nuestra selección de cuidadores de confianza, capacitados para brindarle a tu mascota el amor y atención que se merece. ¡Conócelos ahora!',
    )
  }

}
