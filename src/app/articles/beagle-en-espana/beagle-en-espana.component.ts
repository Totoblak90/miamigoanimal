import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-beagle-en-espana',
  templateUrl: './beagle-en-espana.component.html',
  styleUrls: ['./beagle-en-espana.component.scss']
})
export class BeagleEnEspanaComponent {

   title = '¡Conoce al Beagle: la popular raza de perro en España! 🐕'
   description = 'La raza Beagle es popular en España. Descubre sus características, su tamaño, cuidado y comportamiento, ¡todo lo que necesitas saber! 🐶'
   keywords = 'Beagle, raza de perro, popular en España, características del Beagle, tamaño del Beagle, cuidado del Beagle, comportamiento del Beagle, historia del Beagle en España, Beagle como perro de caza, Beagle como perro de compañía, Beagle en la cultura española, características físicas del Beagle, olfato del Beagle, temperamento del Beagle, adiestramiento del Beagle, ejercicios para Beagle, aseo de Beagle, salud del Beagle, problemas de salud en Beagle, obesidad en Beagle, enfermedades hereditarias del Beagle, cuidados y aseo del Beagle, higiene bucal en Beagles, instinto de caza en Beagles'

   constructor(
     private meta: MetaService,
     private navigationService: NavigationService
   ) {
     this.meta.setMetaTags( this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
     this.navigationService.navigationBg.set('dog');
   }

}
