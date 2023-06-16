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
  keywords = "Bulldog Inglés, características Bulldog Inglés, cuidados Bulldog Inglés, curiosidades Bulldog Inglés, personalidad Bulldog Inglés, salud Bulldog Inglés, ejercicio Bulldog Inglés, nutrición Bulldog Inglés, aseo Bulldog Inglés, perros, raza de perros, Bulldog Británico, raza Bulldog, Bulldog como mascota, temperamento Bulldog, características físicas del Bulldog, perros adultos, cuidado de la raza Bulldog, raza de perro mediano, Bulldog leonado, Bulldog atigrado, problemas de salud en Bulldogs, coste de tener un Bulldog Inglés, perros para niños, perros amistosos, perros compañía, perros familia"

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description, '', true, 'Tobias Blaksley', this.keywords);
    this.navigationService.navigationBg.set('dog');
  }

}
