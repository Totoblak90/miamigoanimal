import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ARTICLES_IMPORTS } from '../articles-imports';

@Component({
  selector: 'app-schnauzer-miniatura-caracteristicas-cuidados-y-curiosidades',
  templateUrl: './schnauzer-miniatura-caracteristicas-cuidados-y-curiosidades.component.html',
  styleUrls: ['./schnauzer-miniatura-caracteristicas-cuidados-y-curiosidades.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class SchnauzerMiniaturaCaracteristicasCuidadosYCuriosidadesComponent {

   title = '🐶 Schnauzer miniatura - Características, cuidados y curiosidades'
   description = '¿Quieres saber más sobre el Schnauzer miniatura? En este artículo encontrarás todo lo que necesitas saber sobre esta raza de perro.'
   keywords = 'Schnauzer miniatura, alimentación, cuidados, curiosidades, características, perros, mascotas, razas de perros, razas de mascotas, razas pequeñas, razas de perros pequeños, razas de mascotas pequeñas, temperamento del schnauzer, entrenamiento de perros, adiestramiento de perros, salud canina, salud, salud de perros.'

   constructor(
     private meta: MetaService,
     private navigationService: NavigationService
   ) {
     this.meta.setMetaTags( this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
     this.navigationService.navigationBg.set('dog');
   }

}
