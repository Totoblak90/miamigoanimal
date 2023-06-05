import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-perro-salchicha-caracteristicas-cuidados-y-curiosidades',
  templateUrl: './perro-salchicha-caracteristicas-cuidados-y-curiosidades.component.html',
  styleUrls: ['./perro-salchicha-caracteristicas-cuidados-y-curiosidades.component.scss']
})
export class PerroSalchichaCaracteristicasCuidadosYCuriosidadesComponent {

  title = 'Perro Salchicha: Características y Cuidado | Esfera Mascota 🐶'
  description = 'Descubre los secretos de la raza perro salchicha para conocer sus características y tener un cuidado óptimo: ¡todo para adquirir una mascota feliz! 🐶'

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
