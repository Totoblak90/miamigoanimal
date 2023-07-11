import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ARTICLES_IMPORTS } from '../articles-imports';

@Component({
  selector: 'app-caniche-toy-caracteristicas-cuidados-y-mas-descubrelo-todo-aqui',
  templateUrl: './caniche-toy-caracteristicas-cuidados-y-mas-descubrelo-todo-aqui.component.html',
  styleUrls: ['./caniche-toy-caracteristicas-cuidados-y-mas-descubrelo-todo-aqui.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class CanicheToyCaracteristicasCuidadosYMasDescubreloTodoAquiComponent {

   title = 'Caniche Toy: Características, Cuidados y Más - ¡Descúbrelo todo en Esfera Mascota!'
   description = 'Conoce todo sobre el Caniche Toy: características, cuidados y mucho más. ¡Entra aquí para conocerlo todo sobre esta preciosa raza de perros! ❤️'
   keywords = 'Caniche Toy, características del Caniche Toy, cuidados del Caniche Toy, raza de perros, perros adorables, perros inteligentes, pelaje hipoalergénico, personalidad juguetona, salud del Caniche Toy, requisitos de cuidados, necesidades de ejercicio, requisitos de acicalamiento, alimentación del Caniche Toy, adiestramiento y socialización, perros de juguete, tamaño pequeño, energía alta, pelaje rizado, perros leales, mascotas familiares, perros adiestrables, actividades caninas, pelaje sedoso, colores variados, corte de cachorro, perros erguidos, origen aristocrático, perros para familias, personalidad encantadora, perros para principiantes, perros cariñosos, perros sociales, perros no agresivos, perros falderos, problemas de salud del Caniche Toy, problemas dentales, alergias cutáneas, enfermedades genéticas, dieta del Caniche Toy, sobrepeso en perros, aseo del Caniche Toy, cepillado del pelaje, ejercicio físico para perros, adiestramiento de perros.'

   constructor(
     private meta: MetaService,
     private navigationService: NavigationService
   ) {
     this.meta.setMetaTags( this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
     this.navigationService.navigationBg.set('dog');
   }

}
