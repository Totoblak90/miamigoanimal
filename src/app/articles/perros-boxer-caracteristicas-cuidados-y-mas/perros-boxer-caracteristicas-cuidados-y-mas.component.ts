import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-perros-boxer-caracteristicas-cuidados-y-mas',
  templateUrl: './perros-boxer-caracteristicas-cuidados-y-mas.component.html',
  styleUrls: ['./perros-boxer-caracteristicas-cuidados-y-mas.component.scss']
})
export class PerrosBoxerCaracteristicasCuidadosYMasComponent {

   title = '🐶 Perros Bóxer: Características, Cuidados y Más'
   description = '🐶 Descubre todo lo que necesitas saber sobre el perro bóxer: sus características, su historia, cómo hay que criarlo y los cuidados especiales que necesita. ¡Todo aquí! ¡Conoce la raza!'
   keywords = 'Perros Bóxer, características de Bóxer, cuidados de Bóxer, origen de los perros Bóxer, rasgos físicos de los Bóxer, personalidad del Bóxer, temperamento de los Bóxer, problemas de salud en los Bóxer, displasia de cadera en Bóxer, cardiomiopatía en Bóxer, alergias cutáneas en Bóxer, nutrición de los perros Bóxer, alimentación de los perros Bóxer, raza canina, perros de servicio, perros de terapia, perros policía, perros guardianes, perros vigilantes, perros activos, perros juguetones, historia de los perros Bóxer, raza de perros Alemana, Bullenbeisser, Bulldog Inglés, American Kennel Club, perros musculosos, perros robustos, perros vigorosos, raza de perros con pelo corto, raza de perros leonado, raza de perros atigrado, raza de perros blanco, perros con cola amputada, perros con mandíbula prognatismo inferior, perros con cabeza cuadrada, perros con pelaje brillante, perros con energía, perros inteligentes, perros leales, perros valientes, perros con personalidad divertida, perros cariñosos, perros con problemas de salud, perros con displasia de cadera, perros con cardiomiopatía, perros con alergias cutáneas, perros con linfoma, perros con tumores de mastocitos, nutrición de los perros, dieta de los perros, alimentación de los cachorros, comida para perros, comida para cachorros, cuidado de los perros, cuidado de los cachorros'

   constructor(
     private meta: MetaService,
     private navigationService: NavigationService
   ) {
     this.meta.setMetaTags( this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
     this.navigationService.navigationBg.set('dog');
   }

}
