import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-pastor-aleman-caracteristicas-cuidados-y-curiosidades',
  templateUrl: './pastor-aleman-caracteristicas-cuidados-y-curiosidades.component.html',
  styleUrls: ['./pastor-aleman-caracteristicas-cuidados-y-curiosidades.component.scss']
})
export class PastorAlemanCaracteristicasCuidadosYCuriosidadesComponent {

  title = 'Pastor Alemán: Características, Cuidados y Curiosidades 🐶 - esferamascota.com'
  description = 'Conoce todo sobre el Pastor Alemán: sus características, cuidados esenciales y curiosidades. Desde la historia hasta los cuidados necesarios. ¡Descúbrelo! 🐶'

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
