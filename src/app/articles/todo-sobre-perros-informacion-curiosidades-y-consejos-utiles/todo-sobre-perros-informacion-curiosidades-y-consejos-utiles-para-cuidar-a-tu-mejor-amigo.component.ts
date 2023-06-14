import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-todo-sobre-perros-informacion-curiosidades-y-consejos-utiles-para-cuidar-a-tu-mejor-amigo',
  templateUrl: './todo-sobre-perros-informacion-curiosidades-y-consejos-utiles-para-cuidar-a-tu-mejor-amigo.component.html',
  styleUrls: ['./todo-sobre-perros-informacion-curiosidades-y-consejos-utiles-para-cuidar-a-tu-mejor-amigo.component.scss']
})
export class TodoSobrePerrosInformacionCuriosidadesYConsejosUtilesParaCuidarATuMejorAmigoComponent {

  title = 'Perros: información curiosidades y consejos útiles para cuidar a tu mejor amigo'
  description = '¡Somos expertos en perros! ¡Nuestra guía te contará curiosidades, consejos útiles y toda la información que necesitas para cuidar a tu mejor amigo!'

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description)
    this.navigationService.navigationBg.set('dog');
  }

}
