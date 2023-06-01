import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent {

  constructor(private meta: MetaService) {
    this.meta.setMetaTags('', '', '', false, 'Tobias Blaksley');
  }

}
