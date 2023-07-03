import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-mejores-alimentos-para-perros-guia-de-nutricion-canina',
  templateUrl: './mejores-alimentos-para-perros-guia-de-nutricion-canina.component.html',
  styleUrls: ['./mejores-alimentos-para-perros-guia-de-nutricion-canina.component.scss']
})
export class MejoresAlimentosParaPerrosGuiaDeNutricionCaninaComponent {

  title = '🐶 Mejores Alimentos para Perros: Guía de Nutrición Canina | EsferaMascota'
  description = 'Descubre nuestra guía para alimentar correctamente a tu perro con los mejores alimentos, ingredientes y características. ¡Incluimos 10 consejos para una nutrición óptima! 🍗 🐶'
  keywords = 'nutrición canina, alimentación para perros, mejores alimentos para perros, dieta equilibrada para perros, alergias alimentarias en perros, intolerancias alimentarias en perros, comida casera para perros, consejos para alimentar a tu perro, ingredientes de alta calidad para perros, alimentación de cachorros, pienso para perros, conservantes naturales en comida para perros, proteínas animales, proteínas vegetales, grasa en el pienso para perros, valor nutricional del pienso, normas de la AAFCO, consulta veterinaria para la alimentación de perros, ácidos grasos omega-3 y omega-6, ingredientes integrales en comida para perros, dieta especializada para perros, comida húmeda para perros, recetas caseras de comida para perros, sobrealimentación de perros, agua fresca para perros, salud y bienestar canino, sistema inmunológico del perro, prevención de enfermedades en perros'

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags( this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
    this.navigationService.navigationBg.set('food');
  }

}
