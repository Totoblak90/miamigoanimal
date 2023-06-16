import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-descubre-todo-sobre-los-gatos-persa-la-raza-mas-popular',
  templateUrl: './descubre-todo-sobre-los-gatos-persa-la-raza-mas-popular.component.html',
  styleUrls: ['./descubre-todo-sobre-los-gatos-persa-la-raza-mas-popular.component.scss']
})
export class DescubreTodoSobreLosGatosPersaLaRazaMasPopularComponent {

  title = 'Descubre Todo Sobre Los Gatos Persas, ¡La Raza Más Popular! 🐱'
  description = '¡Averigua tudo sobre los gatos persas! Esta maravillosa raza de gato es la más popular en el mundo. ¡Explora sus características, historia y más en esferaMascota.com! 🐱'
  keywords = "gatos persas, características de los gatos persas, historia de los gatos persas, cuidados de los gatos persas, salud de los gatos persas, personalidad de los gatos persas, gatos persas famosos, problemas de salud en gatos persas, tamaño de los gatos persas, temperamento de los gatos persas, enfermedades de los gatos persas, origen de los gatos persas, alimentación de los gatos persas, gatos persas y niños, pelaje de los gatos persas"

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
    this.navigationService.navigationBg.set('cat');
  }

}
