import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ARTICLES_IMPORTS } from '../articles-imports';

@Component({
  selector: 'app-bulldog-ingles-caracteristicas-cuidados-y-curiosidades-de-esta-raza-iconica',
  templateUrl: './bulldog-ingles-caracteristicas-cuidados-y-curiosidades-de-esta-raza-iconica.component.html',
  styleUrls: ['./bulldog-ingles-caracteristicas-cuidados-y-curiosidades-de-esta-raza-iconica.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class BulldogInglesCaracteristicasCuidadosYCuriosidadesDeEstaRazaIconicaComponent {

  title = 'Bulldog Inglés - ¡Características, Cuidados y Curiosidades! 😍'
  description = 'Descubre todo lo que necesitas para conocer mejor el Bulldog Inglés: Conoce sus características, cuidados y curiosidades. ¡Esferamascota te lo cuenta todo!'
  keywords = "Bulldog Inglés, características Bulldog Inglés, cuidados Bulldog Inglés, curiosidades Bulldog Inglés, historia Bulldog Inglés, origen Bulldog Inglés, aspecto Bulldog Inglés, temperamento Bulldog Inglés, inteligencia Bulldog Inglés, socialización Bulldog Inglés, adiestramiento Bulldog Inglés, cuidados básicos Bulldog Inglés, aseo Bulldog Inglés, salud Bulldog Inglés, esperanza de vida Bulldog Inglés, raza de perros, guía de razas de perros, Esferamascota"

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService,
  ) {
    this.meta.setMetaTags(this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
    this.navigationService.navigationBg.set('dog');
  }

}
