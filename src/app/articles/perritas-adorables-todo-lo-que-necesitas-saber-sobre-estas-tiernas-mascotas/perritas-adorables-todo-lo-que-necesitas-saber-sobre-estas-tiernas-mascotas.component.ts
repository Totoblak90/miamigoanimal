import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas',
  templateUrl: './perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas.component.html',
  styleUrls: ['./perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas.component.scss']
})
export class PerritasAdorablesTodoLoQueNecesitasSaberSobreEstasTiernasMascotasComponent {

  title = 'Perritas adorables: Todo lo que necesitas saber sobre estas tiernas mascotas'
  description = '¿Amas a las perritas adorables? Aquí encontrarás todo lo que necesitas saber sobre estas tiernas mascotas. ¡Descubre más ahora!'

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
