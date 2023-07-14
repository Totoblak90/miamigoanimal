import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ARTICLES_IMPORTS } from '../articles-imports';

@Component({
  selector: 'app-descubre-los-mejores-cuidados-para-tus-perritos',
  templateUrl: './descubre-los-mejores-cuidados-para-tus-perritos.component.html',
  styleUrls: ['./descubre-los-mejores-cuidados-para-tus-perritos.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class DescubreLosMejoresCuidadosParaTusPerritosComponent {

  title = '🐶 Descubre los mejores cuidados para tus cachorros | esferaMascota.com'
  description = 'Todos los consejos y trucos para ofrecer un cuidado adecuado a tus cachorros. Alimentación, juegos, educación y mucho más ☀️ ¡Visítanos!'
  keywords = "cuidado de cachorros, alimentación de cachorros, juegos para cachorros, educación de cachorros, salud de cachorros, crecimiento de cachorros, ambiente para cachorros, socialización de cachorros, rutina de higiene para cachorros, aseo de cachorros, consejos para cuidado de mascotas, ejercicios para cachorros, cachorros saludables, dietas para cachorros, higiene de cachorros, productos para cachorros, elección de mascotas, cuidado de mascotas, peluquería para cachorros, revisiones veterinarias para cachorros, cuidados básicos para cachorros, amor y atención para cachorros, aseo y ejercicio para cachorros, compra de productos para mascotas"

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
    this.navigationService.navigationBg.set('dog');
  }

}
