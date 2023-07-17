import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ARTICLES_IMPORTS } from '../articles-imports';

@Component({
  selector: 'app-todo-sobre-perros-informacion-curiosidades-y-consejos-utiles-para-cuidar-a-tu-mejor-amigo',
  templateUrl: './todo-sobre-perros-informacion-curiosidades-y-consejos-utiles-para-cuidar-a-tu-mejor-amigo.component.html',
  styleUrls: ['./todo-sobre-perros-informacion-curiosidades-y-consejos-utiles-para-cuidar-a-tu-mejor-amigo.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class TodoSobrePerrosInformacionCuriosidadesYConsejosUtilesParaCuidarATuMejorAmigoComponent {

  title = 'Perros: Información, curiosidades y consejos útiles para cuidar a tu mejor amigo'
  description = '¡Somos expertos en perros! ¡Nuestra guía te contará curiosidades, consejos útiles y toda la información que necesitas para cuidar a tu mejor amigo!'
  keywords = "perros, cuidado de perros, información sobre perros, consejos para perros, elegir raza de perro, salud del perro, nutrición del perro, adiestramiento de perros, socialización de perros, consejos para el cuidado del perro, ejercicio para perros, tiempo de juego para perros, problemas médicos comunes en perros, tratamientos para perros, viajar con perros"

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
    this.navigationService.navigationBg.set('dog');
  }

}
