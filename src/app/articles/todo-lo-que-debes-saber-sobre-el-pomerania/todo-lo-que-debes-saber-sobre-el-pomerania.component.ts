import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-todo-lo-que-debes-saber-sobre-el-pomerania',
  templateUrl: './todo-lo-que-debes-saber-sobre-el-pomerania.component.html',
  styleUrls: ['./todo-lo-que-debes-saber-sobre-el-pomerania.component.scss']
})
export class TodoLoQueDebesSaberSobreElPomeraniaComponent {

  title = '¡Todo lo que debes saber sobre el Pomerania! 🐶 | Esfera Mascota'
  description = 'Aprende todo sobre la raza de perro Pomerania, sus características, alimentación, aseo, higiene, salud y mucho más aquí en Esfera Mascota. ¡No te lo pierdas! 📚'

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description);
    this.navigationService.navigationBg.set('dog');
  }


}
