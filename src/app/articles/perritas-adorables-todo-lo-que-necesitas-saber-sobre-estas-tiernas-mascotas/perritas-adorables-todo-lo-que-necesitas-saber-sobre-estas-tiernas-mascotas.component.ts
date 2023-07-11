import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ARTICLES_IMPORTS } from '../articles-imports';

@Component({
  selector: 'app-perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas',
  templateUrl: './perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas.component.html',
  styleUrls: ['./perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class PerritasAdorablesTodoLoQueNecesitasSaberSobreEstasTiernasMascotasComponent {

  title = 'Todo lo que necesitas saber sobre las tiernas perritas adorables! 🐶'
  description = '¡Bienvenido al artículo "Perritas adorables" de EsferaMascota! Aquí hay consejos para cuidar un nuevo perro, razas, alimentación, mascota pequeña y más ¡Descúbrelo!'
  keywords = "perritas adorables, cuidado de perros, razas de perros, alimentación de perros, mascota pequeña, pomerania, shar pei, bichón maltés, samoyedo, chow chow, pug, nombres para perras, consejos para cuidar a un nuevo perro, alimentación canina, ejercicio para perros, personalidades de perros, mascotas pequeñas, personalidades juguetonas, mascotas para apartamentos, perros y niños, seguridad con mascotas, carlinos, salud de los carlinos, entrenamiento de carlinos, compromiso con las mascotas"

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
    this.navigationService.navigationBg.set('dog');
  }

}
