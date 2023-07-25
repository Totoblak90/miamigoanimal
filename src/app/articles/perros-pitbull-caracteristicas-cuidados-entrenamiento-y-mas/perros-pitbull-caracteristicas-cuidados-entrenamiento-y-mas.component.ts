import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ARTICLES_IMPORTS } from '../articles-imports';

@Component({
  selector: 'app-perros-pitbull-caracteristicas-cuidados-entrenamiento-y-mas',
  templateUrl: './perros-pitbull-caracteristicas-cuidados-entrenamiento-y-mas.component.html',
  styleUrls: ['./perros-pitbull-caracteristicas-cuidados-entrenamiento-y-mas.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class PerrosPitbullCaracteristicasCuidadosEntrenamientoYMasComponent {

   title = '🐶 Perros pitbull: Características, cuidados, entrenamiento, curiosidades y más'
   description = '¿Estás pensando en adoptar un Pitbull? ¡Enhorabuena! En este artículo te contamos todo lo que necesitas saber sobre esta raza de perros.'
   keywords = 'pitbull, perro, raza, perros, razas, perros pitbull, entrenamiento pitbull, alimentación pitbull, adiestramiento canino, adiestramiento pitbull, agresividad pitbull, socialización pitbull'

   constructor(
     private meta: MetaService,
     private navigationService: NavigationService
   ) {
     this.meta.setMetaTags( this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
     this.navigationService.navigationBg.set('dog');
   }

}
