import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-el-gato-egipcio-historia-caracteristicas-y-curiosidades',
  templateUrl: './el-gato-egipcio-historia-caracteristicas-y-curiosidades.component.html',
  styleUrls: ['./el-gato-egipcio-historia-caracteristicas-y-curiosidades.component.scss']
})
export class ElGatoEgipcioUnAnalisisCompletoDeSuHistoriaCaracteristicasYCuriosidadesComponent {

   title = 'El Gato Egipcio: su Historia, Características y Curiosidades'
   description = 'En este artículo, exploraremos la historia, características y curiosidades de esta impresionante raza. Aprenderás sobre su papel en la antigua cultura egipcia, su personalidad única, sus necesidades de cuidado y mucho más.'
   keywords = "Gato Egipcio, Historia, Características, Curiosidades, raza, cultura egipcia, personalidad única, necesidades de cuidado, Mau Egipcio, antigua cultura egipcia, deidades, diosa Bastet, hogar, fertilidad, faraones, amuleto de buena suerte, importación a Europa y América, mitología egipcia, cualidades mágicas, seres superiores, protectora del faraón, representaciones terrenales, espíritus malignos, guardiantes del inframundo, guiar almas, protección en el más allá, características físicas, cuerpo musculoso, pelaje corto, color crema, rostro alargado, ojos grandes, orejas grandes, personalidad, inteligentes, juguetones, leales, interacción con humanos, exploración del entorno, cuidado de gatos, alimentación balanceada, dieta rica en proteínas, condiciones genéticas, higiene y aseo, ejercicio y actividad física, entorno seguro, dieta para gatos, alimentos secos y húmedos, dieta cruda, suplementos"

   constructor(
     private meta: MetaService,
     private navigationService: NavigationService
   ) {
     this.meta.setMetaTags(this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
     this.navigationService.navigationBg.set('cat');
   }

}
