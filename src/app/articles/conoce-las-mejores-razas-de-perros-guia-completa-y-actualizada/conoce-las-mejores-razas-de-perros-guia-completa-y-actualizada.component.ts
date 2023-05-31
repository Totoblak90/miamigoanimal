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
      'Adopta a los gatitos más tiernos y juguetones Encuentra tu compañero felino ideal',
      '¿Estás buscando a tu compañero felino perfecto, a tu mascota ideal? No busques más, ¡adopta un gatito! No sólo es una experiencia gratificante, sino que también proporciona un hogar cariñoso a un amigo peludo necesitado. En este artículo, te guiaremos por el proceso de encontrar una protectora de confianza, explorar una selección de gatitos monos y juguetones, prepararte para los gastos de adopción y cumplir los requisitos necesarios para adoptar en Madrid. ¡Prepárate para conocer a tu nuevo mejor amigo peludo!',
    )
  }

}
