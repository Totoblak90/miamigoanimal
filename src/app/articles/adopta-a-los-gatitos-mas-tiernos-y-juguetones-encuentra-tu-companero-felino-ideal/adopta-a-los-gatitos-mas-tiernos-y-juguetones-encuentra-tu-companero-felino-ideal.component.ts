import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal',
  templateUrl: './adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal.component.html',
  styleUrls: ['./adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal.component.scss']
})
export class AdoptaALosGatitosMasTiernosYJuguetonesEncuentraTuCompaneroFelinoIdealComponent{

  title = 'Adopta a los gatitos más tiernos y juguetones. Encuentra tu compañero felino ideal'
  description = 'Adopta a los gatitos más tiernos y juguetones con nuestra guía. Encuentra tu compañero felino ideal y conoce sus personalidades. ¡Descúbrelo ya!'

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService,
  ) {
    this.meta.setMetaTags(this.title, this.description)
    this.navigationService.navigationBg.set('cat');
  }
}
