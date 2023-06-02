import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-bulldog-frances-todo-lo-que-necesitas-saber-sobre-esta-adorable-raza-de-perros',
  templateUrl: './bulldog-frances-todo-lo-que-necesitas-saber-sobre-esta-adorable-raza-de-perros.component.html',
  styleUrls: ['./bulldog-frances-todo-lo-que-necesitas-saber-sobre-esta-adorable-raza-de-perros.component.scss']
})
export class BulldogFrancesTodoLoQueNecesitasSaberSobreEstaAdorableRazaDePerrosComponent {

  title = 'Bulldog francés: Todo lo que necesitas saber sobre esta adorable raza de perros'
  description = 'Descubre todo sobre el Bulldog francés. Aprende sobre su personalidad, cuidados y salud. ¡Ideal para futuros dueños de esta adorable raza!'

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
    this.meta.setMetaTags( this.title, this.description)
    this.navigationService.navigationBg.set('dog');
  }

}
