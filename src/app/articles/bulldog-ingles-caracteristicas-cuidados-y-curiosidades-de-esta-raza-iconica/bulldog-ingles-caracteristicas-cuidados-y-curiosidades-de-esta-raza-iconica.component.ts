import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-bulldog-ingles-caracteristicas-cuidados-y-curiosidades-de-esta-raza-iconica',
  templateUrl: './bulldog-ingles-caracteristicas-cuidados-y-curiosidades-de-esta-raza-iconica.component.html',
  styleUrls: ['./bulldog-ingles-caracteristicas-cuidados-y-curiosidades-de-esta-raza-iconica.component.scss']
})
export class BulldogInglesCaracteristicasCuidadosYCuriosidadesDeEstaRazaIconicaComponent {

  title = 'Bulldog Inglés - ¡Características, Cuidados y Curiosidades! 😍'
  description = 'Descubre todo lo que necesitas para conocer mejor el Bulldog Inglés: Conoce sus características, cuidados y curiosidades. ¡Esferamascota te lo cuenta todo!'

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
