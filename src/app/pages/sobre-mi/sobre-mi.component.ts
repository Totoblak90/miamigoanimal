import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent {

  constructor(private meta: MetaService, private navigationSrv: NavigationService) {
    this.meta.setMetaTags('', '');
    this.navigationSrv.navigationBg.set('extra')
  }

}
