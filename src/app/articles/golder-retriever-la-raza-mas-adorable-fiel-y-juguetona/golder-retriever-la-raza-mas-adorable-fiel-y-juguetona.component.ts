import { Component } from '@angular/core';
import { ARTICLES_IMPORTS } from '../articles-imports';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-golder-retriever-la-raza-mas-adorable-fiel-y-juguetona',
  templateUrl: './golder-retriever-la-raza-mas-adorable-fiel-y-juguetona.component.html',
  styleUrls: ['./golder-retriever-la-raza-mas-adorable-fiel-y-juguetona.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class GolderRetrieverLaRazaMasAdorableFielYJuguetonaComponent {

   title = 'Golden Retriever: La raza más adorable, fiel y juguetona 🐶'
   description = 'Conocido por su carácter amigable, este perro es uno de los más queridos y populares del mundo. Pero, ¿qué hace a los Golden tan especiales? ¡Vamos a descubrirlo juntos! 🐕'
   keywords = "Golden Retriever, raza de perro, perro amigable, perro popular, perro leal, perro juguetón, perro sociable, perro de trabajo, perro guía, perros de terapia, perros de búsqueda y rescate, pelaje dorado, personalidad de Golden Retriever, historia de Golden Retriever, Lord Tweedmouth, crianza de perros, características de Golden Retriever, tamaño de Golden Retriever, cuidado de Golden Retriever, alimentación de Golden Retriever, ejercicio para Golden Retriever, salud de Golden Retriever, entrenamiento de Golden Retriever, socialización de Golden Retriever, adopción de perros, Golden Retriever en películas, Golden Retriever en televisión"

   constructor(
     private meta: MetaService,
     private navigationService: NavigationService
   ) {
     this.meta.setMetaTags(this.title, this.description, '', true, 'Tobias Blaksley', this.keywords);
     this.navigationService.navigationBg.set('dog');
   }

}
