import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private metaSrv: MetaService, private navigationService: NavigationService) {
    this._setMetaTags();
    this.navigationService.navigationBg.set('extra');
  }

  private _setMetaTags() {
    this.metaSrv.setMetaTags(
      'Consejos y Guías Detalladas para tus Mascotas - Mi amigo animal',
      'Ya sea que seas un nuevo dueño de mascota o un experto, aquí encontrarás todo lo que necesitas saber sobre el perros y gatos. Descubre nuestros recursos y únete a nuestra comunidad de amantes de las mascotas.'
    );
  }
}
