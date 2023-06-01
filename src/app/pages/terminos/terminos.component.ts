import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.scss']
})
export class TerminosComponent {

  constructor(private meta: MetaService) {
    this.meta.setMetaTags('', '', '', false, 'Tobias Blaksley');
  }
}
