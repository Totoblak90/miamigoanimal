import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal',
  templateUrl: './adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal.component.html',
  styleUrls: ['./adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal.component.scss']
})
export class AdoptaALosGatitosMasTiernosYJuguetonesEncuentraTuCompaneroFelinoIdealComponent{

  title = 'Adopta los Gatitos más Tiernos y Juguetones | esferaMascota 🐱'
  description = '¡Conoce a los gatitos más tiernos y juguetones! Visita EsferaMascota para encontrar a tu compañero felino ideal✨.'

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService,
  ) {
    this.meta.setMetaTags(this.title, this.description)
    this.navigationService.navigationBg.set('cat');
  }
}
