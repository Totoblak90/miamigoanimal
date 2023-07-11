import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ARTICLES_IMPORTS } from '../articles-imports';

@Component({
  selector: 'app-gran-danes-caracteristicas-cuidados-ycuriosidades',
  templateUrl: './gran-danes-caracteristicas-cuidados-ycuriosidades.component.html',
  styleUrls: ['./gran-danes-caracteristicas-cuidados-ycuriosidades.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class GranDanesCaracteristicasCuidadosYCuriosidadesComponent {

  title = 'Gran Danés: Características, Cuidados y Curiosidades 🐶'
  description = 'Descubre todo lo que hay que saber sobre el Gran Danés: sus características, cuidados y curiosidades. ¡Aprende más sobre esta majestuosa raza de perros! 🐕'
  keywords = "Gran Danés, características del Gran Danés, cuidados del Gran Danés, curiosidades del Gran Danés, Mastín Alemán, perros grandes, raza de perros, perros de exposición, mascotas familiares, aspecto del Gran Danés, colores del Gran Danés, problemas de salud del Gran Danés, displasia de cadera, hinchazón, enfermedades cardiacas, cáncer de huesos, ejercicio rutinario, dieta sana, aspecto físico, rasgos de personalidad, comportamiento del Gran Danés, problemas de salud comunes, torsión gástrica, cardiomiopatía dilatada, cuidados diarios, aseo del Gran Danés, alimentación y nutrición, entrenamiento y ejercicio del Gran Danés, razas caninas, perros majestuosos, perros tranquilos"

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description, '', true, 'Tobias Blaksley', this.keywords);
    this.navigationService.navigationBg.set('dog');
  }

}
