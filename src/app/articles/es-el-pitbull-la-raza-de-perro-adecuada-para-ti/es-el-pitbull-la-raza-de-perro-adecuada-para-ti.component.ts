import { Component } from '@angular/core';
import { ARTICLES_IMPORTS } from '../articles-imports';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-es-el-pitbull-la-raza-de-perro-adecuada-para-ti',
  templateUrl: './es-el-pitbull-la-raza-de-perro-adecuada-para-ti.component.html',
  styleUrls: ['./es-el-pitbull-la-raza-de-perro-adecuada-para-ti.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class EsElPitbullLaRazaDePerroAdecuadaParaTiComponent {

   title = '🐶 Pitbull, ¿Es la raza de perro adecuada para tí?'
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
