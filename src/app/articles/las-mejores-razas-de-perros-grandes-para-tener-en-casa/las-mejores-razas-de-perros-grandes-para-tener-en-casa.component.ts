import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-las-mejores-razas-de-perros-grandes-para-tener-en-casa',
  templateUrl: './las-mejores-razas-de-perros-grandes-para-tener-en-casa.component.html',
  styleUrls: ['./las-mejores-razas-de-perros-grandes-para-tener-en-casa.component.scss']
})
export class LasMejoresRazasDePerrosGrandesParaTenerEnCasaComponent {

  title = '🐕 Las Mejores Razas de Perros Grandes para Tener de Mascota en Casa'
  description = '¿Buscas razas de perros grandes para tener de mascota en casa? Descubre nuestra lista con las mejores opciones para momentos especiales. ¡Entra ya!'
  keywords = "razas de perros grandes, mascota en casa, razas grandes, lealtad, afecto, instintos protectores, características de perros grandes, problemas de salud en perros grandes, adiestramiento de perros grandes, casa con patio, apartamento pequeño, pastor alemán, gran danés, Labrador Retriever, Husky Siberiano, Doberman Pinscher, cualidades de razas de perros, atributos de razas de perros, Bullmastiff, Boxer, necesidades de ejercicio, necesidades de aseo, temperamento, problemas de salud comunes en perros, displasia de cadera, hinchazón, cuidado de perros, Golden Retriever, energía en perros, pelaje de perros, aseo de perros, problemas cardiacos en perros, adiestramiento de perros, socialización de perros, pastores alemanes, rottweilers, obesidad en perros, dolor articular, enfermedades cardiacas, control de peso en perros, gran danés, San Bernardo, infecciones en perros, enfermedades en perros, veterinario, adiestramiento de perros grandes, arneses para perros, correas para perros, motivación en perros, actividades físicas para perros, constancia en adiestramiento, adiestramiento positivo, Perro de Montaña de Berna, perros guardián, perros para familias, perros para niños, perros para vivir en piso, galgo, necesidades de ejercicio en perros, Bulldog, San Bernardo, Basset Hound, Mastín, sabueso afgano, perro de montaña de Berna, Bóxer, Doberman Pinscher, elección de raza de perro, responsabilidad de tener perro."

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description, '', true, 'Tobias Blaksley', this.keywords);
    this.navigationService.navigationBg.set('dog');
  }
}
