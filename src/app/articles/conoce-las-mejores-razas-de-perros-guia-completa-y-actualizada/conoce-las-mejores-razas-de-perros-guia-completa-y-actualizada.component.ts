import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada',
  templateUrl: './conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada.component.html',
  styleUrls: ['./conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada.component.scss']
})
export class ConoceLasMejoresRazasDePerrosGuiaCompletaYActualizadaComponent {

  get titleList() {
    // @ts-ignore
    return [...this.document.getElementsByTagName('h2')]
  }

  constructor(private meta: MetaService, private articlesService: ArticlesService, private navigationService: NavigationService, @Inject(DOCUMENT) private document: Document) {
    this._setMetaTags();
    this.navigationService.navigationBg.set('dog');
  }

  private _setMetaTags() {
    this.meta.setMetaTags(
      'Conoce las mejores razas de perros : guía completa y actualizada',
      'Descubre nuestra guía completa y actualizada sobre las mejores razas de perros. Aprende sobre sus características, temperamentos y cuidados para encontrar tu compañero perfecto.',
    )
  }

}
