import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-perro-chihuahua-caracteristicas-y-cuidados',
  templateUrl: './perro-chihuahua-caracteristicas-y-cuidados.component.html',
  styleUrls: ['./perro-chihuahua-caracteristicas-y-cuidados.component.scss']
})
export class PerroChihuahuaCaracteristicasYCuidadosComponent {

   title = 'Perro Chihuahua: Características y Cuidados 🐕 🐶'
   description = '¡Descubre todas las características físicas y de carácter, origen y esperanza de vida del Chihuahua! Además, descubre todos los cuidados especiales que este pequeño amigo necesita.'
   keywords = 'Perro Chihuahua, características Chihuahua, cuidados Chihuahua, origen Chihuahua, esperanza de vida Chihuahua, adiestramiento Chihuahua, salud Chihuahua, acicalamiento Chihuahua, alimentación Chihuahua, personalidad Chihuahua, temperamento Chihuahua, consejos cuidados Chihuahua, raza de perro Chihuahua, Chihuahua tamaño pequeño, raza de perro pequeña, guía Chihuahua, dueño de Chihuahua, historia Chihuahua, características físicas Chihuahua, necesidades de cuidado Chihuahua, pelaje Chihuahua, enfermedades oculares Chihuahua, historia perro Chihuahua, bienestar Chihuahua, necesidades diarias Chihuahua, Chihuahua ciudad, Chihuahua apartamento, cuidados diarios Chihuahua, ejercicio Chihuahua, dieta Chihuahua, higiene Chihuahua, adiestramiento Chihuahua, socialización Chihuahua, adiestramiento en jaulas Chihuahua'

   constructor(
     private meta: MetaService,
     private navigationService: NavigationService
   ) {
     this.meta.setMetaTags( this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
     this.navigationService.navigationBg.set('dog');
   }

}
