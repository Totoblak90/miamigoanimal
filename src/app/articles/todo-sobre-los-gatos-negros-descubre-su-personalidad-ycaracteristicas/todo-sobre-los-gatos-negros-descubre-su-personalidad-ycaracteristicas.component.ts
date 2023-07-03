import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-todo-sobre-los-gatos-negros-descubre-su-personalidad-ycaracteristicas',
  templateUrl: './todo-sobre-los-gatos-negros-descubre-su-personalidad-ycaracteristicas.component.html',
  styleUrls: ['./todo-sobre-los-gatos-negros-descubre-su-personalidad-ycaracteristicas.component.scss']
})
export class TodoSobreLosGatosNegrosDescubreSuPersonalidadYCaracteristicasComponent {

  title = 'Todo sobre los gatos negros 🐈: Descubre su personalidad y características - EsferaMascota 🐾'
  description = 'Descubre las particularidades físicas y de personalidad de los gatos negros: Desde su apariencia única hasta sus cualidades místicas. ¡EsferaMascota te lo cuenta! 🐾'
  keywords = 'Gatos negros, personalidad de los gatos negros, características de los gatos negros, historia de los gatos negros, adopción de gatos negros, cuidado de gatos negros, salud y nutrición para gatos negros, gatos como mascotas, supersticiones sobre gatos negros, apariencia de gatos negros, características físicas de los gatos negros, personalidades de los gatos negros, alimentación de gatos negros, cuidado de gatos negros, beneficios de adoptar gatos negros, EsferaMascota, gatos como compañeros, folklore de gatos negros, belleza de gatos negros, criaturas fascinantes, animales de compañía, gatos y folclore, pelaje de gatos negros, adoptar un gato, consejos de salud para gatos negros, nutrición de gatos negros, hechos curiosos sobre gatos negros'

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService,
  ) {
    this.meta.setMetaTags(this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
    this.navigationService.navigationBg.set('cat');
  }

}
