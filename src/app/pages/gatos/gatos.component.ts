import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
  styleUrls: ['./gatos.component.scss']
})
export class GatosComponent {

  constructor(private metaSrv: MetaService) {
    this._setMetaTags()
  }

  private _setMetaTags() {
    this.metaSrv.setMetaTags(
      'Descubre el mundo felino',
      '¿Amante de los gatos? Navega por nuestra extensa biblioteca de artículos y recursos. Conviértete en el dueño que tu gato necesita.'
    );
  }
}
