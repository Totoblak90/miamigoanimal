import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ARTICLES_IMPORTS } from '../articles-imports';

@Component({
  selector: 'app-adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal',
  templateUrl: './adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal.component.html',
  styleUrls: ['./adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class AdoptaALosGatitosMasTiernosYJuguetonesEncuentraTuCompaneroFelinoIdealComponent{

  title = 'Adopta los Gatitos más Tiernos y Juguetones | esferaMascota 🐱'
  description = '¡Conoce a los gatitos más tiernos y juguetones! Visita EsferaMascota para encontrar a tu compañero felino ideal✨.'
  keywords = 'Adopción de gatos, Gatitos tiernos y juguetones, Cuidado de gatos, EsferaMascota, Refugios para gatos, Proceso de adopción de gatos, Costes de adopción de gatos, Requisitos para adoptar gatos, Beneficios de tener gatos, Asociaciones de protección de felinos, Gatos en Madrid, Gatos y salud, Razas de gatos, SOS Felinos Madrid, Vínculo con gatos'

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService,
  ) {
    this.meta.setMetaTags(this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
    this.navigationService.navigationBg.set('cat');
  }
}
