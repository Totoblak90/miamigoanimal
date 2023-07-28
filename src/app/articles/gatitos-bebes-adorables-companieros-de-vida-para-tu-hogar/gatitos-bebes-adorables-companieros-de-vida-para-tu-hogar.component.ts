import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ARTICLES_IMPORTS } from '../articles-imports';

@Component({
  selector: 'app-gatitos-bebes-adorables-companieros-de-vida-para-tu-hogar',
  templateUrl: './gatitos-bebes-adorables-companieros-de-vida-para-tu-hogar.component.html',
  styleUrls: ['./gatitos-bebes-adorables-companieros-de-vida-para-tu-hogar.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class GatitosBebesAdorablesCompanierosDeVidaParaTuHogarComponent {

   title = 'Gatitos bebes: Adorables compañeros de vida para tu hogar 🐱';
   // Descripción para SEO del título del artículo
   description = 'Los gatitos bebes son adorables compañeros de vida para tu hogar. Conoce todo lo que necesitas saber para cuidarlos y mantenerlos felices.';
   // Keywords para seo del artículo
   keywords = 'gatitos bebes, gatitos, gatos, gatos bebes, gatitos adorables, gatitos compañeros de vida, gatitos para tu hogar, gatitos para tu casa, gatitos para tu familia.';

   constructor(
      private meta: MetaService,
      private navigationService: NavigationService
   ) {
      this.meta.setMetaTags( this.title, this.description, '', true, 'Tobias Blaksley', this.keywords );
      this.navigationService.navigationBg.set('cat');
   }

}
