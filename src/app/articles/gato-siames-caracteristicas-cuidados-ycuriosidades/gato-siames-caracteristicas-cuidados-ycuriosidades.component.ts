import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ARTICLES_IMPORTS } from '../articles-imports';

@Component({
  selector: 'app-gato-siames-caracteristicas-cuidados-ycuriosidades',
  templateUrl: './gato-siames-caracteristicas-cuidados-ycuriosidades.component.html',
  styleUrls: ['./gato-siames-caracteristicas-cuidados-ycuriosidades.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class GatoSiamesCaracteristicasCuidadosYCuriosidadesComponent {

  title = 'Gato Siamés: Características, Cuidados y Curiosidades 🐈 | EsferaMascota.com'
  description = 'Descubre las características, cuidados y curiosidades de esta majestuosa raza felina ⭐ Encuentra toda la información en Esferamascota.com ♥️'
  keywords = "gato siamés, características gato siamés, cuidados gato siamés, curiosidades gato siamés, raza felina, raza siamés, Rey Siam, características físicas gato siamés, cuidados salud gato siamés, historia gato siamés, personalidad gato siamés, gato siamés en la cultura pop, gato siamés famoso, gato siamés en películas, gato siamés en Tailandia, pelaje gato siamés, ojos azules gato siamés, temperamento gato siamés, gato siamés y niños, gato siamés y salud, gato siamés y juego, interacción gato siamés, maullido gato siamés, lealtad gato siamés, gato siamés y familia"

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService,
  ) {
    this.meta.setMetaTags(this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
    this.navigationService.navigationBg.set('cat');
  }

}
