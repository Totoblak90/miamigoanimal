import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ARTICLES_IMPORTS } from '../articles-imports';

@Component({
   selector: 'app-gato-kawaii-descubre-los-secretos-de-la-ternura-felina',
   templateUrl:
      './gato-kawaii-descubre-los-secretos-de-la-ternura-felina.component.html',
   styleUrls: [
      './gato-kawaii-descubre-los-secretos-de-la-ternura-felina.component.scss',
   ],
   standalone: true,
   imports: ARTICLES_IMPORTS,
})
export class GatoKawaiiDescubreLosSecretosDeLaTernuraFelinaComponent {
   title = 'Gato Kawaii: Descubre los secretos de la ternura felina 🐱';
   description = 'Estos gatos son los más tiernos del mundo, descubre por qué';
   keywords =
      'gatos kawaii, características de los gatos kawaii, historia de los gatos kawaii, cuidados de los gatos kawaii, salud de los gatos kawaii, personalidad de los gatos kawaii, gatos kawaii famosos, problemas de salud en gatos kawaii, tamaño de los gatos kawaii, temperamento de los gatos kawaii, enfermedades de los gatos kawaii, origen de los gatos kawaii, alimentación de los gatos kawaii, gatos kawaii y niños, pelaje de los gatos kawaii';

   constructor(
      private meta: MetaService,
      private navigationService: NavigationService
   ) {
      this.meta.setMetaTags(
         this.title,
         this.description,
         '',
         true,
         'Tobias Blaksley',
         this.keywords
      );
      this.navigationService.navigationBg.set('cat');
   }
}
