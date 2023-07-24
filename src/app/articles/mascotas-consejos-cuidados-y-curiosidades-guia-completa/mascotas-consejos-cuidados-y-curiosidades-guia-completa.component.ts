import { Component } from '@angular/core';
import { ARTICLES_IMPORTS } from '../articles-imports';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-mascotas-consejos-cuidados-y-curiosidades-guia-completa',
  templateUrl: './mascotas-consejos-cuidados-y-curiosidades-guia-completa.component.html',
  styleUrls: ['./mascotas-consejos-cuidados-y-curiosidades-guia-completa.component.scss'],
  standalone: true,
  imports: ARTICLES_IMPORTS
})
export class MascotasConsejosCuidadosYCuriosidadesGuiaCompletaComponent {

   title = 'Mascotas: Consejos, cuidados y curiosidades - Guía completa'
   description = '¿Quieres saber todo sobre las mascotas? En esta guía completa encontrarás consejos, cuidados y curiosidades sobre las mascotas. ¡Entra ahora!'
   keywords = 'perros, gatos, pájaros, peces, roedores, reptiles, anfibios, insectos, arácnidos, mascotas, consejos, cuidados, curiosidades, guía, completa'

   constructor(
     private meta: MetaService,
     private navigationService: NavigationService
   ) {
     this.meta.setMetaTags( this.title, this.description, '', true, 'Tobias Blaksley', this.keywords)
     this.navigationService.navigationBg.set('extra');
   }

}
