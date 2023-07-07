import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-los-mejores-alimentos-para-perros-guia-de-alimentacion-saludable',
  templateUrl: './los-mejores-alimentos-para-perros-guia-de-alimentacion-saludable.component.html',
  styleUrls: ['./los-mejores-alimentos-para-perros-guia-de-alimentacion-saludable.component.scss']
})
export class LosMejoresAlimentosParaPerrosGuiaDeAlimentacionSaludableComponent {

   title = '🐶 Descubre los Mejores Alimentos para Perros en nuestra Guía Completa 🐕'
   description = '¡Navega por el mundo de la comida para perros con esta guía completa!🦴 Ofrecemos entradas útiles que ayudan a decidir alimentos de calidad para tu mascota. ¡Consulta y compra ahora! 🐾'
   keywords = 'mejores alimentos para perros, guía de alimentación para perros, nutrición canina, tipos de alimentos para perros, pienso para perros, ingredientes de alimentos para perros, alérgenos en comida para perros, comida canina sin alérgenos, dieta barf para perros, necesidades dietéticas de perros, alimento sin cereales para perros, comida húmeda para perros, comida seca para perros, alimentación para cachorros, alimentación para perros adultos, alimentación para perros mayores, comida para perros ecológica, comida natural para perros, comida para perros de raza grande, comida para perros de raza pequeña, comida para perros con alta energía, salud y bienestar canino'

   constructor(
     private meta: MetaService,
     private navigationService: NavigationService
   ) {
     this.meta.setMetaTags( this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
     this.navigationService.navigationBg.set('food');
   }

}
