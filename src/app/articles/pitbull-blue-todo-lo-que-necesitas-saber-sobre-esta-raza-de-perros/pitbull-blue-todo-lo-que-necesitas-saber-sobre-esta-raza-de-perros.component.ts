import { Component } from '@angular/core';
import { ARTICLES_IMPORTS } from '../articles-imports';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-pitbull-blue-todo-lo-que-necesitas-saber-sobre-esta-raza-de-perros',
  templateUrl: './pitbull-blue-todo-lo-que-necesitas-saber-sobre-esta-raza-de-perros.component.html',
  styleUrls: ['./pitbull-blue-todo-lo-que-necesitas-saber-sobre-esta-raza-de-perros.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class PitbullBlueTodoLoQueNecesitasSaberSobreEstaRazaDePerrosComponent {

   title = '🐶 Pitbull blue: Todo lo que necesitas saber sobre esta raza de perros'
   description = 'Descubre todo sobre el Pitbull Blue, desde su historia y características físicas hasta su temperamento y cuidado. Aprende cómo esta raza puede ser una adición maravillosa a tu familia con el entrenamiento y socialización adecuados.'
   keywords = 'Pitbull Blue, raza de perros, historia del Pitbull Blue, características físicas Pitbull Blue, temperamento Pitbull Blue, cuidado del Pitbull Blue, entrenamiento de Pitbull Blue, socialización de Pitbull Blue, Pitbull Blue como mascota, salud del Pitbull Blue, alimentación del Pitbull Blue, enfermedades comunes en Pitbull Blue, entrenamiento de Pitbull Blue, características Pitbull Blue, consejos para el cuidado del Pitbull Blue, Pitbull Blue en la familia, características únicas del Pitbull Blue, personalidad Pitbull Blue, Pitbull Blue en casa, American Pitbull Terrier, Pitbull Blue saludable, Pitbull Blue activo, Pitbull Blue inteligente, Pitbull Blue cariñoso, entrenamiento positivo para Pitbull Blue'

   constructor(
     private meta: MetaService,
     private navigationService: NavigationService
   ) {
     this.meta.setMetaTags( this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
     this.navigationService.navigationBg.set('dog');
   }

}
