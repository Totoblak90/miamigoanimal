import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ARTICLES_IMPORTS } from '../articles-imports';

@Component({
  selector: 'app-como-elegir-la-mascota-adecuada-para-tu-hogar',
  templateUrl: './como-elegir-la-mascota-adecuada-para-tu-hogar.component.html',
  styleUrls: ['./como-elegir-la-mascota-adecuada-para-tu-hogar.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class ComoElegirLaMascotaAdecuadaParaTuHogarComponent {

   title = 'Cómo elegir la mascota adecuada para tu hogar 🐶'
   description = 'Tener una mascota en casa es una experiencia maravillosa y enriquecedora. Pero, ¿sabías que también viene con una serie de responsabilidades? ¡Enterate de todo acá!'
   keywords = 'mascotas, hogar, responsabilidades, casa grande, departamento, Argentina, ambiente adecuado, perros, gatos, razas grandes, seguridad en el hogar, objetos peligrosos, sustancias peligrosas, aire libre, ejercicio, paseos diarios, juguetes interactivos, consejos prácticos, dueño de mascota, preparar hogar, llegada de mascota, espacio seguro, alimentación, juguetes, entretenimiento, accidentes, razas de perros para departamentos, Shih Tzu, Chihuahua, Bulldog Francés, Bichón Frisé, entrenar mascota, paciencia, constancia, acostumbramiento, respeto por los espacios, actividad física, control de ruidos, problemas comunes, comportamiento destructivo, problemas de salud, visitas al veterinario, vacunas, desparasitación, falta de espacio, ruido y ladridos, adiestramiento positivo, beneficios de tener mascota, beneficios físicos, beneficios psicológicos, beneficios sociales, cuidado de mascotas, juguetes para mascotas, juguetes interactivos, masticables, huesos, juguetes para buscar y recuperar, juguetes de cuerda'

   constructor(
     private meta: MetaService,
     private navigationService: NavigationService
   ) {
     this.meta.setMetaTags( this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
     this.navigationService.navigationBg.set('dog');
   }

}
