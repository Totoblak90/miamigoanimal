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

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description)
    this.navigationService.navigationBg.set('cat');
  }

}
