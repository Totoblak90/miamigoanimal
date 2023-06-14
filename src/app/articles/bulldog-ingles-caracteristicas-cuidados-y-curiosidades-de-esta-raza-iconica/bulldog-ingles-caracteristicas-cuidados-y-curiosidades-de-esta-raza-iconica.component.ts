import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-bulldog-ingles-caracteristicas-cuidados-y-curiosidades-de-esta-raza-iconica',
  templateUrl: './bulldog-ingles-caracteristicas-cuidados-y-curiosidades-de-esta-raza-iconica.component.html',
  styleUrls: ['./bulldog-ingles-caracteristicas-cuidados-y-curiosidades-de-esta-raza-iconica.component.scss']
})
export class BulldogInglesCaracteristicasCuidadosYCuriosidadesDeEstaRazaIconicaComponent {

  title = 'Bulldog Inglés - ¡Características, Cuidados y Curiosidades! 😍'
  description = 'Descubre todo lo que necesitas para conocer mejor el Bulldog Inglés: Conoce sus características, cuidados y curiosidades. ¡Esferamascota te lo cuenta todo!'

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService,
  ) {
    this.meta.setMetaTags(this.title, this.description)
    this.navigationService.navigationBg.set('dog');
  }

}
