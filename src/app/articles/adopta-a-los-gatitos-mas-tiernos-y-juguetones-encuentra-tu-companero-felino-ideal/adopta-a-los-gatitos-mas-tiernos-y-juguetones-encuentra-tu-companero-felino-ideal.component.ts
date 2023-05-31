import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, QueryList, ViewChildren } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal',
  templateUrl: './adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal.component.html',
  styleUrls: ['./adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal.component.scss']
})
export class AdoptaALosGatitosMasTiernosYJuguetonesEncuentraTuCompaneroFelinoIdealComponent{

  get titleList() {
    // @ts-ignore
    return [...this.document.getElementsByTagName('h2')]
  }

  constructor(private meta: MetaService, private navigationService: NavigationService, @Inject(DOCUMENT) private document: Document) {
    this._setMetaTags();
    this.navigationService.navigationBg.set('cat');
  }

  private _setMetaTags() {
    this.meta.setMetaTags(
      'Adopta a los gatitos más tiernos y juguetones. Encuentra tu compañero felino ideal',
      'Adopta a los gatitos más tiernos y juguetones con nuestra guía. Encuentra tu compañero felino ideal y conoce sus personalidades. ¡Descúbrelo ya!',
    )
  }
}
