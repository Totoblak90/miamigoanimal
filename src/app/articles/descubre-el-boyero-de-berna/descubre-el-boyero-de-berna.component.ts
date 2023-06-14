import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-descubre-el-boyero-de-berna',
  templateUrl: './descubre-el-boyero-de-berna.component.html',
  styleUrls: ['./descubre-el-boyero-de-berna.component.scss']
})
export class DescubreElBoyeroDeBernaComponent {

  title = '¡Descubre el Boyero de Berna! 🐕'
  description = 'Conoce todo sobre el boyero de Berna: tamaño, peso, características y personalidad. ¡Aprende aquí! 🐶'

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description)
    this.navigationService.navigationBg.set('dog');
  }

}
