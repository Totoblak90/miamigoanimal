import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ARTICLES_IMPORTS } from '../articles-imports';

@Component({
  selector: 'app-conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada',
  templateUrl: './conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada.component.html',
  styleUrls: ['./conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class ConoceLasMejoresRazasDePerrosGuiaCompletaYActualizadaComponent {

  title = '¡Descubre las mejores razas de perro! 🐶 Guía Completa en EsferaMascota.com'
  description = '¿Buscas conocer las mejores razas para familias, adiestramiento, protección y mucho más? 🐶 Descubre todo en EsferaMascota.com'
  keywords = "mejores razas de perro, guía completa de razas de perros, perros para familias, razas de perros para adiestramiento, razas de perros para protección, razas de perros para terapia, razas de perros para compañía, razas de perros para apartamentos, razas de perros para caza, perros guía, temperamento de perros, tamaño de perros, salud de perros, antecedentes genéticos de perros, tipos de razas de perros, razas de perros para niños, razas de perros para discapacitados, razas de perros para vivir en pisos, razas de perros para caza, adiestramiento de obediencia, razas de perros para protección, Labrador Retriever, Golden Retriever, Pastor Alemán, Caniche, Border Collie, Cavalier King Charles Spaniel, Bichon Frise, Bulldog Francés, Shih Tzu, Chihuahua, Pointer Alemán de pelo corto, Beagle, Ganadero Australiano, Teckel, Pinscher Miniatura, Rottweiler."

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
    this.navigationService.navigationBg.set('dog');
  }

}
