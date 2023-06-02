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

  title = 'Gatos: Razas, cuidados, curiosidades y más'
  description = 'Descubre todo sobre los gatos: razas, cuidados esenciales y curiosidades fascinantes. ¡Conviértete en el dueño perfecto para tu felino!'

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
