import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-todo-lo-que-necesitas-saber-sobre-gatos-razas-cuidados-y-curiosidades',
  templateUrl: './todo-lo-que-necesitas-saber-sobre-gatos-razas-cuidados-y-curiosidades.component.html',
  styleUrls: ['./todo-lo-que-necesitas-saber-sobre-gatos-razas-cuidados-y-curiosidades.component.scss']
})
export class TodoLoQueNecesitasSaberSobreGatosRazasCuidadosYCuriosidadesComponent {

  title = 'Guía completa sobre gatos: Razas, Cuidados, Curiosidades 🐈'
  description = 'Aprende todo sobre los gatos: sus razas, cuidados, curiosidades y más. ¡Descubre toda la información de nuestra guía aquí en EsferaMascota ❤️✔️'

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
    this.navigationService.navigationBg.set('cat');
  }

}
