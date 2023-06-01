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
      'Bulldog inglés: Todo lo que necesitas saber sobre esta raza icónica',
      'Descubre todo sobre el Bulldog inglés. Aprende sobre su historia, personalidad, cuidados y por qué son tan amados. ¡Conviértete en el dueño perfecto!',
    )
  }

}
