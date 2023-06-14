import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-el-bulldog-ingles-caracteristicas-cuidados-y-curiosidades',
  templateUrl: './el-bulldog-ingles-caracteristicas-cuidados-y-curiosidades.component.html',
  styleUrls: ['./el-bulldog-ingles-caracteristicas-cuidados-y-curiosidades.component.scss']
})
export class ElBulldogInglesCaracteristicasCuidadosYCuriosidadesComponent {

  title = 'Bulldog Inglés: Características, Cuidados y Curiosidades 🐶 esferamascota.com'
  description = '¡Aprende todo sobre el Bulldog Inglés! Características, personalidad, cuidados y curiosidades con esferamascota.com. ¡Una mascota perfecta para niños! 🐕💝'

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description);
    this.navigationService.navigationBg.set('dog');
  }

}
