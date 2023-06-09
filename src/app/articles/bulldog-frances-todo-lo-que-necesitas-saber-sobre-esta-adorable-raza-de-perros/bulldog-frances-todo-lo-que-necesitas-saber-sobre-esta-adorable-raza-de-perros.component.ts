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

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags( this.title, this.description)
    this.navigationService.navigationBg.set('dog');
  }

}
