import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas',
  templateUrl: './perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas.component.html',
  styleUrls: ['./perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas.component.scss']
})
export class PerritasAdorablesTodoLoQueNecesitasSaberSobreEstasTiernasMascotasComponent {

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
      'Perritas adorables: Todo lo que necesitas saber sobre estas tiernas mascotas',
      '¿Amas a las perritas adorables? Aquí encontrarás todo lo que necesitas saber sobre estas tiernas mascotas: desde su cuidado y alimentación hasta consejos para su entrenamiento. ¡Descubre más ahora!',
    )
  }

}
