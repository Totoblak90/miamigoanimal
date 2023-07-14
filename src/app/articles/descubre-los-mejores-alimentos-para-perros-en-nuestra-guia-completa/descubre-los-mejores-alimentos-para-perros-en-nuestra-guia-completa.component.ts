import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ARTICLES_IMPORTS } from '../articles-imports';

@Component({
  selector: 'app-descubre-los-mejores-alimentos-para-perros-en-nuestra-guia-completa',
  templateUrl: './descubre-los-mejores-alimentos-para-perros-en-nuestra-guia-completa.component.html',
  styleUrls: ['./descubre-los-mejores-alimentos-para-perros-en-nuestra-guia-completa.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class DescubreLosMejoresAlimentosParaPerrosEnNuestraGuiaCompletaComponent {

  title = '🐶 Descubre los Mejores Alimentos para Perros en nuestra Guía Completa 🐕'
  description = 'Encontrar el alimento adecuado para tu mascota puede ser una tarea dificil pero no te preocupes, ¡con esta guía te resolvemos el problema!.🐾'
  keywords = 'mejores alimentos para perros, guía de alimentación para perros, nutrición canina, tipos de alimentos para perros, pienso para perros, ingredientes de alimentos para perros, alérgenos en comida para perros, comida canina sin alérgenos, dieta barf para perros, necesidades dietéticas de perros, alimento sin cereales para perros, comida húmeda para perros, comida seca para perros, alimentación para cachorros, alimentación para perros adultos, alimentación para perros mayores, comida para perros ecológica, comida natural para perros, comida para perros de raza grande, comida para perros de raza pequeña, comida para perros con alta energía, salud y bienestar canino'

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags( this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
    this.navigationService.navigationBg.set('food');
  }

}
