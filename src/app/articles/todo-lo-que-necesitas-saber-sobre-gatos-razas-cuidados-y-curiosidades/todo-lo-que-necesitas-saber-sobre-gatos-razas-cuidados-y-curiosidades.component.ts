import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-todo-lo-que-necesitas-saber-sobre-gatos-razas-cuidados-y-curiosidades',
  templateUrl: './todo-lo-que-necesitas-saber-sobre-gatos-razas-cuidados-y-curiosidades.component.html',
  styleUrls: ['./todo-lo-que-necesitas-saber-sobre-gatos-razas-cuidados-y-curiosidades.component.scss']
})
export class TodoLoQueNecesitasSaberSobreGatosRazasCuidadosYCuriosidadesComponent {

  get titleList() {
    // @ts-ignore
    return [...this.document.getElementsByTagName('h2')]
  }

  constructor(private meta: MetaService, private navigationService: NavigationService, @Inject(DOCUMENT) private document: Document) {
    this._setMetaTags();
    this.navigationService.navigationBg.set('cat');
  }

  private _setMetaTags() {
    this.meta.setMetaTags(
      'Gatos: Razas, cuidados, curiosidades y más',
      'Descubre todo sobre los gatos: razas, cuidados esenciales y curiosidades fascinantes. ¡Conviértete en el dueño perfecto para tu felino!',
    )
  }

}
