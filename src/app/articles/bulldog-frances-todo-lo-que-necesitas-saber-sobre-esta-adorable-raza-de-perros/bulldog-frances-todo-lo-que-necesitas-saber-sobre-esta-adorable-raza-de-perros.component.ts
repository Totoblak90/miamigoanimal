import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-bulldog-frances-todo-lo-que-necesitas-saber-sobre-esta-adorable-raza-de-perros',
  templateUrl: './bulldog-frances-todo-lo-que-necesitas-saber-sobre-esta-adorable-raza-de-perros.component.html',
  styleUrls: ['./bulldog-frances-todo-lo-que-necesitas-saber-sobre-esta-adorable-raza-de-perros.component.scss']
})
export class BulldogFrancesTodoLoQueNecesitasSaberSobreEstaAdorableRazaDePerrosComponent {

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
      'Bulldog francés: Todo lo que necesitas saber sobre esta adorable raza de perros',
      'Descubre todo sobre el Bulldog francés. Aprende sobre su personalidad, cuidados y salud. ¡Ideal para futuros dueños de esta adorable raza!',
    )
  }

}
