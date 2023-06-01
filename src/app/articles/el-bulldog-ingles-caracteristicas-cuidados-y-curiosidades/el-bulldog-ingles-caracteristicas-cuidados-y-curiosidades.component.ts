import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-el-bulldog-ingles-caracteristicas-cuidados-y-curiosidades',
  templateUrl: './el-bulldog-ingles-caracteristicas-cuidados-y-curiosidades.component.html',
  styleUrls: ['./el-bulldog-ingles-caracteristicas-cuidados-y-curiosidades.component.scss']
})
export class ElBulldogInglesCaracteristicasCuidadosYCuriosidadesComponent {

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
      'Bulldog inglés: Características, cuidados y curiosidades',
      'Descubre todo sobre el Bulldog inglés. Aprende sobre su historia, personalidad, cuidados y por qué son tan amados. ¡Conviértete en el dueño perfecto!',
    )
  }

}
