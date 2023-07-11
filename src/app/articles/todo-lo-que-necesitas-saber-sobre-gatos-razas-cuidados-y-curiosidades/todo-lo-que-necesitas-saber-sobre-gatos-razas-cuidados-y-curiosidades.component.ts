import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ARTICLES_IMPORTS } from '../articles-imports';

@Component({
  selector: 'app-todo-lo-que-necesitas-saber-sobre-gatos-razas-cuidados-y-curiosidades',
  templateUrl: './todo-lo-que-necesitas-saber-sobre-gatos-razas-cuidados-y-curiosidades.component.html',
  styleUrls: ['./todo-lo-que-necesitas-saber-sobre-gatos-razas-cuidados-y-curiosidades.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class TodoLoQueNecesitasSaberSobreGatosRazasCuidadosYCuriosidadesComponent {

  title = 'Guía completa sobre gatos: Razas, Cuidados, Curiosidades 🐈'
  description = 'Aprende todo sobre los gatos: sus razas, cuidados, curiosidades y más. ¡Descubre toda la información de nuestra guía aquí en EsferaMascota ❤️✔️'
  keywords = "gatos, razas de gatos, cuidado de gatos, historia de los gatos, gatos domésticos, salud de los gatos, adopción de gatos, gatos y humanos, tipos de gatos, características de los gatos, gato Siamés, gato Persa, gato Maine Coon, gato Doméstico de Pelo Corto, gato American Shorthair, gato de Bengala, gato Mau Egipcio, gato Burmés, nutrición de los gatos, comportamiento de los gatos, hábitos de los gatos, gatos y juego, acicalamiento de gatos, adiestramiento de gatos, interacción humana-gato, ambiente para gatos, aseo de gatos, juguetes para gatos, dieta para gatos, salud felina, obesidad en gatos, ejercicio para gatos, veterinario, gatos y caza, comportamiento felino, gatos y agua, gatos y proteínas, alimento para gatos, gatos y lácteos, enfermedades en gatos, gatos y uñas, gatos y estrés, esperanza de vida de los gatos domésticos, esperanza de vida"

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
    this.navigationService.navigationBg.set('cat');
  }

}
