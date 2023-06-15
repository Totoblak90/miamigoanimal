import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-gato-siames-caracteristicas-cuidados-ycuriosidades',
  templateUrl: './gato-siames-caracteristicas-cuidados-ycuriosidades.component.html',
  styleUrls: ['./gato-siames-caracteristicas-cuidados-ycuriosidades.component.scss']
})
export class GatoSiamesCaracteristicasCuidadosYCuriosidadesComponent {

  title = 'Gato Siamés: Características, Cuidados y Curiosidades 🐈 | EsferaMascota.com'
  description = 'Descubre las características, cuidados y curiosidades de esta majestuosa raza felina ⭐ Encuentra toda la información en Esferamascota.com ♥️'

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService,
  ) {
    this.meta.setMetaTags(this.title, this.description)
    this.navigationService.navigationBg.set('cat');
  }

}
