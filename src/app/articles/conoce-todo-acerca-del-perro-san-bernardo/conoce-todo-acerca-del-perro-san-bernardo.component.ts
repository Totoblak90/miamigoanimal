import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-conoce-todo-acerca-del-perro-san-bernardo',
  templateUrl: './conoce-todo-acerca-del-perro-san-bernardo.component.html',
  styleUrls: ['./conoce-todo-acerca-del-perro-san-bernardo.component.scss']
})
export class ConoceTodoAcercaDelPerroSanBernardoComponent {

  title = '🐶 Conoce Todo Acerca del Perro San Bernardo - esferamascota.com'
  description = '¡Descubre todo lo que necesitas saber sobre el San Bernardo! Historiá, características y cuidados. ¡Conoce más aquí en esferamascota.com!'

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description)
    this.navigationService.navigationBg.set('dog');
  }

}
