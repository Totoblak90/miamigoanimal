import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-el-bulldog-ingles-caracteristicas-cuidados-y-curiosidades',
  templateUrl: './el-bulldog-ingles-caracteristicas-cuidados-y-curiosidades.component.html',
  styleUrls: ['./el-bulldog-ingles-caracteristicas-cuidados-y-curiosidades.component.scss']
})
export class ElBulldogInglesCaracteristicasCuidadosYCuriosidadesComponent {

  title = 'Bulldog Inglés: Características, Cuidados y Curiosidades 🐶 esferamascota.com'
  description = '¡Aprende todo sobre el Bulldog Inglés! Características, personalidad, cuidados y curiosidades con esferamascota.com. ¡Una mascota perfecta para niños! 🐕💝'

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
    this.meta.setMetaTags(this.title, this.description);
    this.navigationService.navigationBg.set('dog');
  }

}
