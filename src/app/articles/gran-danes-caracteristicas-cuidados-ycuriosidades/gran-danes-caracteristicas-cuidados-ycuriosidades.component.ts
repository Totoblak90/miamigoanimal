import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-gran-danes-caracteristicas-cuidados-ycuriosidades',
  templateUrl: './gran-danes-caracteristicas-cuidados-ycuriosidades.component.html',
  styleUrls: ['./gran-danes-caracteristicas-cuidados-ycuriosidades.component.scss']
})
export class GranDanesCaracteristicasCuidadosYCuriosidadesComponent {

  title = 'Gran Danés: Características, Cuidados y Curiosidades 🐶'
  description = 'Descubre todo lo que hay que saber sobre el Gran Danés: sus características, cuidados y curiosidades. ¡Aprende más sobre esta majestuosa raza de perros! 🐕'

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description);
    this.navigationService.navigationBg.set('dog');
  }

}
