import { Component } from '@angular/core';
import { ARTICLES_IMPORTS } from '../articles-imports';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-fila-brasilero-conoce-todo-sobre-esta-raza-de-perros-de-guarda',
  templateUrl: './fila-brasilero-conoce-todo-sobre-esta-raza-de-perros-de-guarda.component.html',
  styleUrls: ['./fila-brasilero-conoce-todo-sobre-esta-raza-de-perros-de-guarda.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class FilaBrasileroConoceTodoSobreEstaRazaDePerrosDeGuardaComponent {

   title = '🐶 Fila Brasileño: Conocé todo sobre esta raza de perros de guarda y su temperamento'
   description = '¿Querés saber todo sobre el Fila Brasileño? En esta guía completa encontrarás todo sobre esta raza de perros de guarda y su temperamento. ¡Entra ahora!'
   keywords = 'fila brasilero, perro de guarda, perro grande, esfera mascota, esferamascota, perros, razas de perro, alimentacion, cuidados, curiosidades, higiene, salud, temperamento, guía, completa'

   constructor(
     private meta: MetaService,
     private navigationService: NavigationService
   ) {
     this.meta.setMetaTags( this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
     this.navigationService.navigationBg.set('dog');
   }

}
