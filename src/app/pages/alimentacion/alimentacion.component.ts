import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-alimentacion',
  templateUrl: './alimentacion.component.html',
  styleUrls: ['./alimentacion.component.scss']
})
export class AlimentacionComponent {

  constructor(private metaSrv: MetaService, private navigationService: NavigationService) {
    this._setMetaTags();
    this.navigationService.navigationBg.set('food');
  }

  private _setMetaTags() {
    this.metaSrv.setMetaTags(
      'Alimentación - Guía de Alimentación para Perros y Gatos',
      'Encuentra todo sobre la alimentación de mascotas y aprende a nutrir a tu perro o gato de la mejor manera. ¡Mejora la dieta de tu mascota hoy!',
      'Tobias Blaksley',
      true,
      'alimentación para mascotas, alimento para perros, alimento para gatos, alimentación de mascotas, barf, BARF'
    );
  }

}
