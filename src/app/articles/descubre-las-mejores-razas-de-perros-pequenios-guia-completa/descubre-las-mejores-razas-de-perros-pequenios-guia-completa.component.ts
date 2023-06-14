import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-descubre-las-mejores-razas-de-perros-pequenios-guia-completa',
  templateUrl: './descubre-las-mejores-razas-de-perros-pequenios-guia-completa.component.html',
  styleUrls: ['./descubre-las-mejores-razas-de-perros-pequenios-guia-completa.component.scss']
})
export class DescubreLasMejoresRazasDePerrosPequeniosGuiaCompletaComponent {

  title = '¡Descubre las Mejores Razas de Perros Pequeños! 🐶 - Guía Completa'
  description = '¡Descubre las Mejores Razas de Perros Pequeños! 🐶 Disfruta de la guía completa de razas de perros pequeños en EsferaMascota.com ¡Ahora! 💻'

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description)
    this.navigationService.navigationBg.set('dog');
  }

}
