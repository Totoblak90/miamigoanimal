import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-aprende-todo-sobre-el-caniche-caracteristicas-cuidados-ycuriosidades',
  templateUrl: './aprende-todo-sobre-el-caniche-caracteristicas-cuidados-ycuriosidades.component.html',
  styleUrls: ['./aprende-todo-sobre-el-caniche-caracteristicas-cuidados-ycuriosidades.component.scss']
})
export class AprendeTodoSobreElCanicheCaracteristicasCuidadosYCuriosidadesComponent {

  title = '¡Aprende todo sobre el Caniche!: Características, Cuidados y Curiosidades 🐶'
  description = '¡Descubre los cuidados, características, curiosidades y mucho más sobre el perro Caniche con Esfera Mascota! 🤩'
  keywords = 'Caniche, historia de Caniche, características de Caniche, cuidados de Caniche, curiosidades de Caniche, perro Caniche, Caniche como mascota, raza Caniche, comportamiento de Caniche, nutrición de Caniche, salud de Caniche, aseo de Caniche, adiestramiento de Caniche, socialización de Caniche, ejercicios para Caniche, problemas de salud en Caniches, Caniche estándar, Caniche miniatura, Caniche toy, Caniche en Alemania, Caniche en Francia, características físicas de Caniche, nutrición de Caniche, requisitos de salud del Caniche, enfermedades comunes en Caniche, aseo del Caniche, adiestramiento del Caniche, socialización del Caniche'

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags( this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
    this.navigationService.navigationBg.set('dog');
  }
}
