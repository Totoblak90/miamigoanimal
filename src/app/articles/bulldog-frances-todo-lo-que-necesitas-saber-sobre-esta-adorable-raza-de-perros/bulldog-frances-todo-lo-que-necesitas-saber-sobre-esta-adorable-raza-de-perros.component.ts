import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-bulldog-frances-todo-lo-que-necesitas-saber-sobre-esta-adorable-raza-de-perros',
  templateUrl: './bulldog-frances-todo-lo-que-necesitas-saber-sobre-esta-adorable-raza-de-perros.component.html',
  styleUrls: ['./bulldog-frances-todo-lo-que-necesitas-saber-sobre-esta-adorable-raza-de-perros.component.scss']
})
export class BulldogFrancesTodoLoQueNecesitasSaberSobreEstaAdorableRazaDePerrosComponent {

  title = 'Bulldog Francés: Características, cuidado y más 🐶 | Esfera Mascota'
  description = 'Descubre todo sobre el bulldog francés, una adorada raza de perro con orejotas de Batman. Características, cuidado y más en Mi Amigo Animal.'
  keywords = 'Bulldog Francés, cuidado de Bulldogs Franceses, historia del Bulldog Francés, características del Bulldog Francés, temperamento del Bulldog Francés, problemas de salud en Bulldogs Franceses, necesidades de aseo de Bulldogs Franceses, ejercicio para Bulldogs Franceses, adiestramiento de Bulldogs Franceses, cómo encontrar un Bulldog Francés, salud del Bulldog Francés, raza de perro, mascotas, perros, orejotas de Batman, crianza de Bulldogs Franceses, personalidad del Bulldog Francés, cachorros, personalidad juguetona y cariñosa, afecciones oculares, dificultades espinales, necesidades de ejercicio, adiestramiento en jaulas, socialización de Bulldogs Franceses'

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags( this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
    this.navigationService.navigationBg.set('dog');
  }

}
