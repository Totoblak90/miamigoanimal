import { Component } from '@angular/core';
import { ARTICLES_IMPORTS } from '../articles-imports';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-pastor-australiano-caracteristicas-cuidados-y-curiosidades',
  templateUrl: './pastor-australiano-caracteristicas-cuidados-y-curiosidades.component.html',
  styleUrls: ['./pastor-australiano-caracteristicas-cuidados-y-curiosidades.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class PastorAustralianoCaracteristicasCuidadosYCuriosidadesComponent {

   title = 'Pastor Australiano: Características, Cuidados y Curiosidades 🐶 - esferamascota.com'
   description = 'Conoce todo sobre el Pastor Australiano: sus características, cuidados esenciales y curiosidades. Desde la historia hasta los cuidados necesarios. ¡Descúbrelo! 🐶'
   keywords = "Pastor Australiano, características Pastor Australiano, cuidados Pastor Australiano, curiosidades Pastor Australiano, historia Pastor Australiano, rasgos físicos Pastor Australiano, personalidad Pastor Australiano, cuidado Pastor Australiano, alimentación Pastor Australiano, adiestramiento Pastor Australiano, problemas de salud Pastor Australiano, actividades con Pastor Australiano, mascotas, razas de perros, perros, australia, australiano, características de los perros, cuidado de los perros, historia de los perros, adiestramiento de perros, salud de los perros, actividades con perros"

   constructor(
     private meta: MetaService,
     private navigationService: NavigationService
   ) {
     this.meta.setMetaTags(this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
     this.navigationService.navigationBg.set('dog');
   }

}
