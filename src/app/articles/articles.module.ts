import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { AdoptaALosGatitosMasTiernosYJuguetonesEncuentraTuCompaneroFelinoIdealComponent } from './adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal/adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal.component';
import { ComponentsModule } from '../components/components.module';
import { HighlitedArticlesComponent } from './__highlited-articles/highlited-articles.component';
import { LastArticlesComponent } from './__last-articles/last-articles.component';
import { ConoceLasMejoresRazasDePerrosGuiaCompletaYActualizadaComponent } from './conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada/conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada.component';
import { IndexComponent } from './__index/index.component';


@NgModule({
  declarations: [
    AdoptaALosGatitosMasTiernosYJuguetonesEncuentraTuCompaneroFelinoIdealComponent,
    HighlitedArticlesComponent,
    LastArticlesComponent,
    ConoceLasMejoresRazasDePerrosGuiaCompletaYActualizadaComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    ComponentsModule
  ]
})
export class ArticlesModule { }
