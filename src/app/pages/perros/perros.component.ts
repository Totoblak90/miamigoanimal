import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.scss']
})
export class PerrosComponent {

  constructor(private metaSrv: MetaService, private navigationService: NavigationService) {
    this._setMetaTags();
    this.navigationService.navigationBg.set('dog');
  }

  private _setMetaTags() {
    this.metaSrv.setMetaTags(
      'Tu guía completa sobre perros',
      'Encuentra toda la información que necesitas sobre perros, desde cómo elegir la raza perfecta hasta consejos de salud y comportamiento.',
      'Tobias Blaksley',
      true,
      'Perros, guía de perros, razas de perros'
    );
  }



}
