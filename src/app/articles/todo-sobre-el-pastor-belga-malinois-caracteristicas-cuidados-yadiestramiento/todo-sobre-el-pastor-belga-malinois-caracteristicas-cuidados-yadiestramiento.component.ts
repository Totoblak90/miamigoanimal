import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ARTICLES_IMPORTS } from '../articles-imports';

@Component({
  selector: 'app-todo-sobre-el-pastor-belga-malinois-caracteristicas-cuidados-yadiestramiento',
  templateUrl: './todo-sobre-el-pastor-belga-malinois-caracteristicas-cuidados-yadiestramiento.component.html',
  styleUrls: ['./todo-sobre-el-pastor-belga-malinois-caracteristicas-cuidados-yadiestramiento.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class TodoSobreElPastorBelgaMalinoisCaracteristicasCuidadosYAdiestramientoComponent {

  title = '¡Todo sobre el Pastor Belga Malinois! 🐾 Características, Cuidados y Adiestramiento'
  description = 'Descubre todo sobre el Pastor Belga Malinois: sus características, cuidados y adiestramiento ¡Aprende con nosotros! ➡️ esferamascota.com'
  keywords = "Pastor Belga Malinois, características, cuidados, adiestramiento, Origen del Pastor Belga Malinois, raza heredada, Chien de Berger Belge, Pastor Belga, Tervuren Belga, Perro Pastor Belga, Laekenois Belga, perro de trabajo, perro mensajero, perro ambulancia, perro guardián, perro policía, perro militar, perro de búsqueda y rescate, perro activo, perro devoto, perro inteligente, perro protector, perro guardián, ejercicio diario, estimulación mental, displasia de cadera, problemas oculares, alimentación y aseo, alimentación nutritiva, proteínas, vitaminas, minerales, higiene dental, enfermedades dentales, alergias, alimentación saludable, salud canina, pelaje doble, muda estacional, cepillado de pelo, corte de uñas, baño canino, adiestramiento, agilidad, obediencia, socialización, enseñanza, rastreo, búsqueda y rescate"


  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description, '', true, 'Tobias Blaksley', this.keywords);
    this.navigationService.navigationBg.set('dog');
  }

}
