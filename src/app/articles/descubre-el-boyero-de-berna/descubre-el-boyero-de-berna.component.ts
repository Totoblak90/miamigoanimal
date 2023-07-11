import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ARTICLES_IMPORTS } from '../articles-imports';

@Component({
  selector: 'app-descubre-el-boyero-de-berna',
  templateUrl: './descubre-el-boyero-de-berna.component.html',
  styleUrls: ['./descubre-el-boyero-de-berna.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class DescubreElBoyeroDeBernaComponent {

  title = '¡Descubre el Boyero de Berna! 🐕'
  description = 'Conoce todo sobre el boyero de Berna: tamaño, peso, características y personalidad. ¡Aprende aquí! 🐶'
  keywords = "Boyero de Berna, raza de perro, historia del Boyero de Berna, aspecto del Boyero de Berna, personalidad del Boyero de Berna, temperamento del Boyero de Berna, cuidados del Boyero de Berna, necesidades de ejercicio del Boyero de Berna, alimentación del Boyero de Berna, Boyero de Montaña, salud del Boyero de Berna, adiestramiento del Boyero de Berna, perro de pastoreo, perro de guardia, American Kennel Club, perros de rescate, perros de búsqueda, perros de salvamento, mascota familiar, perros de terapia"

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
    this.navigationService.navigationBg.set('dog');
  }

}
