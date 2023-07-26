import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ARTICLES_IMPORTS } from '../articles-imports';

@Component({
  selector: 'app-fila-brasilero-caracteristicas-cuidados-y-curiosidades',
  templateUrl: './fila-brasilero-caracteristicas-cuidados-y-curiosidades.component.html',
  styleUrls: ['./fila-brasilero-caracteristicas-cuidados-y-curiosidades.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class FilaBrasileroCaracteristicasCuidadosYCuriosidadesComponent {

   title = '🐶 Fila Brasileño: Características, cuidados y curiosidades'
   description = 'El Fila Brasileño es un perro de guarda de gran tamaño, con un carácter fuerte y un temperamento muy marcado. Conoce todo sobre esta raza de perro.'
   keywords = 'fila brasilero, perro de guarda, perro grande, esfera mascota, esferamascota, perros, razas de perro, alimentacion, cuidados, curiosidades, higiene, salud, temperamento, guía, completa'

   constructor(
     private meta: MetaService,
     private navigationService: NavigationService
   ) {
     this.meta.setMetaTags( this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
     this.navigationService.navigationBg.set('dog');
   }

}
