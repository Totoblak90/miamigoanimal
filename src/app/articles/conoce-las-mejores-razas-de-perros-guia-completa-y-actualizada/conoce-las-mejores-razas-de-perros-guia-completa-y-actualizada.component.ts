import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada',
  templateUrl: './conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada.component.html',
  styleUrls: ['./conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada.component.scss']
})
export class ConoceLasMejoresRazasDePerrosGuiaCompletaYActualizadaComponent {

  title = '¡Descubre las mejores razas de perro! 🐶 Guía Completa en EsferaMascota.com'
  description = '¿Buscas conocer las mejores razas para familias, adiestramiento, protección y mucho más? 🐶 Descubre todo en EsferaMascota.com'

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService
  ) {
    this.meta.setMetaTags(this.title, this.description)
    this.navigationService.navigationBg.set('dog');
  }

}
