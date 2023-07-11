import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ARTICLES_IMPORTS } from '../articles-imports';

@Component({
  selector: 'app-conoce-todo-acerca-del-perro-san-bernardo',
  templateUrl: './conoce-todo-acerca-del-perro-san-bernardo.component.html',
  styleUrls: ['./conoce-todo-acerca-del-perro-san-bernardo.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class ConoceTodoAcercaDelPerroSanBernardoComponent {

  title = '🐶 Conoce Todo Acerca del Perro San Bernardo - esferamascota.com'
  description = '¡Descubre todo lo que necesitas saber sobre el San Bernardo! Historiá, características y cuidados. ¡Conoce más aquí en esferamascota.com!'
  keywords = "San Bernardo, perros San Bernardo, características San Bernardo, cuidados San Bernardo, historia San Bernardo, raza San Bernardo, perros gigantes, perros de rescate, perros de trineo, mascota familiar, perro guardián, aseo perros, socialización perros, adiestramiento perros, ejercicio perros, dieta perros, salud perros, amor perros"

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
    this.navigationService.navigationBg.set('dog');
  }

}
