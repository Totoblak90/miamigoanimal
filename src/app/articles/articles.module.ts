import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { AdoptaALosGatitosMasTiernosYJuguetonesEncuentraTuCompaneroFelinoIdealComponent } from './adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal/adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal.component';
import { ComponentsModule } from '../components/components.module';
import { HighlitedArticlesComponent } from './1-components/highlited-articles/highlited-articles.component';
import { ConoceLasMejoresRazasDePerrosGuiaCompletaYActualizadaComponent } from './conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada/conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada.component';
import { IndexComponent } from './1-components/index/index.component';
import { DescubreLosMejoresCuidadosParaTusPerritosComponent } from './descubre-los-mejores-cuidados-para-tus-perritos/descubre-los-mejores-cuidados-para-tus-perritos.component';
import { PerritasAdorablesTodoLoQueNecesitasSaberSobreEstasTiernasMascotasComponent } from './perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas/perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas.component';
import { TodoSobrePerrosInformacionCuriosidadesYConsejosUtilesParaCuidarATuMejorAmigoComponent } from './todo-sobre-perros-informacion-curiosidades-y-consejos-utiles/todo-sobre-perros-informacion-curiosidades-y-consejos-utiles-para-cuidar-a-tu-mejor-amigo.component';
import { TodoLoQueNecesitasSaberSobreGatosRazasCuidadosYCuriosidadesComponent } from './todo-lo-que-necesitas-saber-sobre-gatos-razas-cuidados-y-curiosidades/todo-lo-que-necesitas-saber-sobre-gatos-razas-cuidados-y-curiosidades.component';
import { LastArticlesComponent } from './1-components/last-articles/last-articles.component';
import { ArticleSkeletonComponent } from './1-components/article-skeleton/article-skeleton.component';
import { BulldogFrancesTodoLoQueNecesitasSaberSobreEstaAdorableRazaDePerrosComponent } from './bulldog-frances-todo-lo-que-necesitas-saber-sobre-esta-adorable-raza-de-perros/bulldog-frances-todo-lo-que-necesitas-saber-sobre-esta-adorable-raza-de-perros.component';
import { BulldogInglesCaracteristicasCuidadosYCuriosidadesDeEstaRazaIconicaComponent } from './bulldog-ingles-caracteristicas-cuidados-y-curiosidades-de-esta-raza-iconica/bulldog-ingles-caracteristicas-cuidados-y-curiosidades-de-esta-raza-iconica.component';
import { ElBulldogInglesCaracteristicasCuidadosYCuriosidadesComponent } from './el-bulldog-ingles-caracteristicas-cuidados-y-curiosidades/el-bulldog-ingles-caracteristicas-cuidados-y-curiosidades.component';
import { AaaAllComponent } from './aaa-all/aaa-all.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdoptaALosGatitosMasTiernosYJuguetonesEncuentraTuCompaneroFelinoIdealComponent,
    ConoceLasMejoresRazasDePerrosGuiaCompletaYActualizadaComponent,
    DescubreLosMejoresCuidadosParaTusPerritosComponent,
    PerritasAdorablesTodoLoQueNecesitasSaberSobreEstasTiernasMascotasComponent,
    TodoSobrePerrosInformacionCuriosidadesYConsejosUtilesParaCuidarATuMejorAmigoComponent,
    TodoLoQueNecesitasSaberSobreGatosRazasCuidadosYCuriosidadesComponent,
    HighlitedArticlesComponent,
    LastArticlesComponent,
    IndexComponent,
    ArticleSkeletonComponent,
    BulldogFrancesTodoLoQueNecesitasSaberSobreEstaAdorableRazaDePerrosComponent,
    BulldogInglesCaracteristicasCuidadosYCuriosidadesDeEstaRazaIconicaComponent,
    ElBulldogInglesCaracteristicasCuidadosYCuriosidadesComponent,
    AaaAllComponent,
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class ArticlesModule { }
