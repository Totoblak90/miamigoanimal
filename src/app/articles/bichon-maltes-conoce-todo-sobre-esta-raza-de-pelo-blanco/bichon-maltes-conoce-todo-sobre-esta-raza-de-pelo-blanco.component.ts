import { Component } from '@angular/core';
import { ARTICLES_IMPORTS } from '../articles-imports';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-bichon-maltes-conoce-todo-sobre-esta-raza-de-pelo-blanco',
  templateUrl: './bichon-maltes-conoce-todo-sobre-esta-raza-de-pelo-blanco.component.html',
  styleUrls: ['./bichon-maltes-conoce-todo-sobre-esta-raza-de-pelo-blanco.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class BichonMaltesConoceTodoSobreEstaRazaDePeloBlancoComponent {

   title = 'Bichón Maltés: Conoce todo sobre esta raza de pelo blanco'
   description = 'Prepara tu taza de café, acomoda a tu peludo amigo al lado (si ya tienes uno), y prepárate para sumergirte en el fascinante mundo del Bichón Maltés.'
   keywords = 'Bichón Maltés, raza de perros, pelo blanco, caninos, mascotas, cariñosas, pelaje sedoso, tamaño pequeño, apartamentos, compañeros para niños, historia del Bichón Maltés, origen del Bichón Maltés, cuidado de la salud, alimentación para Bichón Maltés, adiestramiento de raza, comportamiento de raza, perro individuo, Mediterráneo, antigua civilización romana, nobleza, alta sociedad, obras de arte, literatura, filósofo Aristóteles, perros de Malta, cría selectiva, pelaje largo y liso, temperamento amigable, salud óptima, características físicas, pelaje distintivo, tamaño y peso, rostro y ojos, cola, perros pequeños, temperamento alegre y juguetón, naturaleza gentil, personalidad, perros amigables, sociables, cariñosos, ansiedad por separación, perros de alerta, perros de vigilancia, ejercicio regular, alimentación balanceada, proteínas, grasas, fibras, obesidad, control de porciones, alimentos humanos, visitas al veterinario, salud dental, problemas dentales, cepillado diario, limpiezas dentales profesionales, actividad física, cuidado del pelo, nudos, peluquería canina'

   constructor(
     private meta: MetaService,
     private navigationService: NavigationService
   ) {
     this.meta.setMetaTags( this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
     this.navigationService.navigationBg.set('dog');
   }

}
