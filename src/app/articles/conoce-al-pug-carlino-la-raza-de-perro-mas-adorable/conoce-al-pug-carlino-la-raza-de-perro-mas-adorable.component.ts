import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ARTICLES_IMPORTS } from '../articles-imports';

@Component({
  selector: 'app-conoce-al-pug-carlino-la-raza-de-perro-mas-adorable',
  templateUrl: './conoce-al-pug-carlino-la-raza-de-perro-mas-adorable.component.html',
  styleUrls: ['./conoce-al-pug-carlino-la-raza-de-perro-mas-adorable.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class ConoceAlPugCarlinoLaRazaDePerroMasAdorableComponent {

   title = '¡Conoce al Carlino, la Raza de Perro Más Adorable! 🐶'
   description = 'Descubre todo lo que necesitas saber sobre el Carlino, la raza de perro más adorable. ¡Echa un vistazo a las características y con qué cuidados cuenta esta hermosa raza de perro! 🐩'
   keywords = 'Caniche Toy, características del Caniche Toy, cuidados del Caniche Toy, raza de perros, perros adorables, perros inteligentes, pelaje hipoalergénico, personalidad juguetona, salud del Caniche Toy, requisitos de cuidados, necesidades de ejercicio, requisitos de acicalamiento, alimentación del Caniche Toy, adiestramiento y socialización, perros de juguete, tamaño pequeño, energía alta, pelaje rizado, perros leales, mascotas familiares, perros adiestrables, actividades caninas, pelaje sedoso, colores variados, corte de cachorro, perros erguidos, origen aristocrático, perros para familias, personalidad encantadora, perros para principiantes, perros cariñosos, perros sociales, perros no agresivos, perros falderos, problemas de salud del Caniche Toy, problemas dentales, alergias cutáneas, enfermedades genéticas, dieta del Caniche Toy, sobrepeso en perros, aseo del Caniche Toy, cepillado del pelaje, ejercicio físico para perros, adiestramiento de perros.'

   constructor(
     private meta: MetaService,
     private navigationService: NavigationService
   ) {
     this.meta.setMetaTags( this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
     this.navigationService.navigationBg.set('dog');
   }

}
