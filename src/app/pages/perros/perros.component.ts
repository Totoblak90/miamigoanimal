import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.scss']
})
export class PerrosComponent {

  constructor(private metaSrv: MetaService) {
    this._setMetaTags();
  }

  private _setMetaTags() {
    this.metaSrv.setMetaTags(
      'Tu guía completa sobre perros',
      'Encuentra toda la información que necesitas sobre perros, desde cómo elegir la raza perfecta hasta consejos de salud y comportamiento.'
    );
  }



}
