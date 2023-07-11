import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ARTICLES_IMPORTS } from '../articles-imports';

@Component({
  selector: 'app-descubre-las-mejores-razas-de-perros-pequenios-guia-completa',
  templateUrl: './descubre-las-mejores-razas-de-perros-pequenios-guia-completa.component.html',
  styleUrls: ['./descubre-las-mejores-razas-de-perros-pequenios-guia-completa.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class DescubreLasMejoresRazasDePerrosPequeniosGuiaCompletaComponent {

  title = '¡Descubre las Mejores Razas de Perros Pequeños! 🐶 - Guía Completa'
  description = '¡Descubre las Mejores Razas de Perros Pequeños! 🐶 Disfruta de la guía completa de razas de perros pequeños en EsferaMascota.com ¡Ahora! 💻'
  keywords = "Razas de perros pequeños, Guía completa, Adopción de perros, Cuidado de perros, Elegir una raza de perro, Estilo de vida, Adiestramiento de perros, Aseo de perros, Temperamento de perros, Razas populares de perros pequeños, Chihuahua, Caniche, Shih Tzu, Consejos para cuidar de un perro pequeño, Beneficios de tener un perro pequeño, Requisitos de adiestramiento y ejercicio, Salud y bienestar, Ansiedad por separación, Perros de compañía, Perros y viajes, Raza de perro y salud, Jack Russell Terrier, Disciplina de perros pequeños, Actividad física para perros, Compañeros caninos";

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
    this.navigationService.navigationBg.set('dog');
  }

}
