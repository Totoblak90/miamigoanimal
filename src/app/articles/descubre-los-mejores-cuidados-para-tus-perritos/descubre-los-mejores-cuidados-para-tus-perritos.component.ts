import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-descubre-los-mejores-cuidados-para-tus-perritos',
  templateUrl: './descubre-los-mejores-cuidados-para-tus-perritos.component.html',
  styleUrls: ['./descubre-los-mejores-cuidados-para-tus-perritos.component.scss']
})
export class DescubreLosMejoresCuidadosParaTusPerritosComponent {

  title = '🐶Descubre los mejores cuidados para tus cachorros | esferaMascota.com'
  description = 'Todos los consejos y trucos para ofrecer un cuidado adecuado a tus cachorros. Alimentación, juegos, educación y mucho más ☀️ ¡Visítanos!'

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description)
    this.navigationService.navigationBg.set('dog');
  }

}
