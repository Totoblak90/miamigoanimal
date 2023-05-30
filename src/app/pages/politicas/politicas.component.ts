import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.component.html',
  styleUrls: ['./politicas.component.scss']
})
export class PoliticasComponent {

  constructor(private meta: MetaService) {
    this.meta.setMetaTags('', '', '', false);
  }

}
