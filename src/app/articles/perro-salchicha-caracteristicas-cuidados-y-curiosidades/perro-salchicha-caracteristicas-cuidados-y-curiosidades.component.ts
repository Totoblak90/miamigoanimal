import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-perro-salchicha-caracteristicas-cuidados-y-curiosidades',
  templateUrl: './perro-salchicha-caracteristicas-cuidados-y-curiosidades.component.html',
  styleUrls: ['./perro-salchicha-caracteristicas-cuidados-y-curiosidades.component.scss']
})
export class PerroSalchichaCaracteristicasCuidadosYCuriosidadesComponent {

  title = 'Perro Salchicha: Características y Cuidado | Esfera Mascota 🐶'
  description = 'Descubre los secretos de la raza perro salchicha para conocer sus características y tener un cuidado óptimo: ¡todo para adquirir una mascota feliz! 🐶'
  keywords = "perro salchicha, características perro salchicha, cuidados perro salchicha, historia perro salchicha, perro salchicha alemania, características físicas perro salchicha, personalidad perro salchicha, salud perro salchicha, perros teckel, cuidados perros teckel, alimentación perro salchicha, aseo perro salchicha, adiestramiento perro salchicha, teckel pelo corto, teckel pelo duro, teckel pelo largo, ejercicios perros salchicha, enfermedades comunes perros salchicha, adopción perro salchicha, perros de compañía, perros familiares, perros pequeños, razas de perros, mascotas felices, perros salicha famosos, afecciones hereditarias de los perros salchicha"

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
    this.navigationService.navigationBg.set('dog');
  }

}
