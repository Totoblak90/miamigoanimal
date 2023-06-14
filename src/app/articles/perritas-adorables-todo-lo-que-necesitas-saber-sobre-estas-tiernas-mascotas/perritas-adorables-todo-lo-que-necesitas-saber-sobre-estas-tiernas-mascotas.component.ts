import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas',
  templateUrl: './perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas.component.html',
  styleUrls: ['./perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas.component.scss']
})
export class PerritasAdorablesTodoLoQueNecesitasSaberSobreEstasTiernasMascotasComponent {

  title = ' Todo lo que necesitas saber sobre las tiernas perritas adorables! 🐶'
  description = '¡Bienvenido al artículo "Perritas adorables" de EsferaMascota! Aquí hay consejos para cuidar un nuevo perro, razas, alimentación, mascota pequeña y más ¡Descúbrelo!'

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description)
    this.navigationService.navigationBg.set('dog');
  }

}
