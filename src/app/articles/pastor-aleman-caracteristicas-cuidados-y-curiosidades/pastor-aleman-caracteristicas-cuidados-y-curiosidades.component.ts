import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ARTICLES_IMPORTS } from '../articles-imports';

@Component({
  selector: 'app-pastor-aleman-caracteristicas-cuidados-y-curiosidades',
  templateUrl: './pastor-aleman-caracteristicas-cuidados-y-curiosidades.component.html',
  styleUrls: ['./pastor-aleman-caracteristicas-cuidados-y-curiosidades.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class PastorAlemanCaracteristicasCuidadosYCuriosidadesComponent {

  title = 'Pastor Alemán: Características, Cuidados y Curiosidades 🐶 - esferamascota.com'
  description = 'Conoce todo sobre el Pastor Alemán: sus características, cuidados esenciales y curiosidades. Desde la historia hasta los cuidados necesarios. ¡Descúbrelo! 🐶'
  keywords = "Pastor Alemán, características Pastor Alemán, cuidados Pastor Alemán, curiosidades Pastor Alemán, historia Pastor Alemán, rasgos físicos Pastor Alemán, personalidad Pastor Alemán, cuidado Pastor Alemán, alimentación Pastor Alemán, adiestramiento Pastor Alemán, problemas de salud Pastor Alemán, actividades con Pastor Alemán, mascotas, razas de perros, perros, alemanes, características de los perros, cuidado de los perros, historia de los perros, adiestramiento de perros, salud de los perros, actividades con perros"

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
    this.navigationService.navigationBg.set('dog');
  }

}
