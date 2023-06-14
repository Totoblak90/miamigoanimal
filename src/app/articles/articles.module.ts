import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { AdoptaALosGatitosMasTiernosYJuguetonesEncuentraTuCompaneroFelinoIdealComponent } from './adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal/adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal.component';
import { ComponentsModule } from '../components/components.module';
import { ConoceLasMejoresRazasDePerrosGuiaCompletaYActualizadaComponent } from './conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada/conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada.component';
import { DescubreLosMejoresCuidadosParaTusPerritosComponent } from './descubre-los-mejores-cuidados-para-tus-perritos/descubre-los-mejores-cuidados-para-tus-perritos.component';
import { PerritasAdorablesTodoLoQueNecesitasSaberSobreEstasTiernasMascotasComponent } from './perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas/perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas.component';
import { TodoSobrePerrosInformacionCuriosidadesYConsejosUtilesParaCuidarATuMejorAmigoComponent } from './todo-sobre-perros-informacion-curiosidades-y-consejos-utiles/todo-sobre-perros-informacion-curiosidades-y-consejos-utiles-para-cuidar-a-tu-mejor-amigo.component';
import { TodoLoQueNecesitasSaberSobreGatosRazasCuidadosYCuriosidadesComponent } from './todo-lo-que-necesitas-saber-sobre-gatos-razas-cuidados-y-curiosidades/todo-lo-que-necesitas-saber-sobre-gatos-razas-cuidados-y-curiosidades.component';
import { BulldogFrancesTodoLoQueNecesitasSaberSobreEstaAdorableRazaDePerrosComponent } from './bulldog-frances-todo-lo-que-necesitas-saber-sobre-esta-adorable-raza-de-perros/bulldog-frances-todo-lo-que-necesitas-saber-sobre-esta-adorable-raza-de-perros.component';
import { BulldogInglesCaracteristicasCuidadosYCuriosidadesDeEstaRazaIconicaComponent } from './bulldog-ingles-caracteristicas-cuidados-y-curiosidades-de-esta-raza-iconica/bulldog-ingles-caracteristicas-cuidados-y-curiosidades-de-esta-raza-iconica.component';
import { ElBulldogInglesCaracteristicasCuidadosYCuriosidadesComponent } from './el-bulldog-ingles-caracteristicas-cuidados-y-curiosidades/el-bulldog-ingles-caracteristicas-cuidados-y-curiosidades.component';
import { AaaArticleSearchComponent } from './aaa-article-search/aaa-article-search';
import { ReactiveFormsModule } from '@angular/forms';
import { ConoceTodoAcercaDelPerroSanBernardoComponent } from './conoce-todo-acerca-del-perro-san-bernardo/conoce-todo-acerca-del-perro-san-bernardo.component';
import { DescubreElBoyeroDeBernaComponent } from './descubre-el-boyero-de-berna/descubre-el-boyero-de-berna.component';
import { PastorAlemanCaracteristicasCuidadosYCuriosidadesComponent } from './pastor-aleman-caracteristicas-cuidados-y-curiosidades/pastor-aleman-caracteristicas-cuidados-y-curiosidades.component';
import { PerroSalchichaCaracteristicasCuidadosYCuriosidadesComponent } from './perro-salchicha-caracteristicas-cuidados-y-curiosidades/perro-salchicha-caracteristicas-cuidados-y-curiosidades.component';
import { DescubreTodoSobreLosGatosPersaLaRazaMasPopularComponent } from './descubre-todo-sobre-los-gatos-persa-la-raza-mas-popular/descubre-todo-sobre-los-gatos-persa-la-raza-mas-popular.component';
import { DescubreLasMejoresRazasDePerrosPequeniosGuiaCompletaComponent } from './descubre-las-mejores-razas-de-perros-pequenios-guia-completa/descubre-las-mejores-razas-de-perros-pequenios-guia-completa.component';
import { GranDanesCaracteristicasCuidadosYCuriosidadesComponent } from './gran-danes-caracteristicas-cuidados-ycuriosidades/gran-danes-caracteristicas-cuidados-ycuriosidades.component';


@NgModule({
  declarations: [
    AdoptaALosGatitosMasTiernosYJuguetonesEncuentraTuCompaneroFelinoIdealComponent,
    ConoceLasMejoresRazasDePerrosGuiaCompletaYActualizadaComponent,
    DescubreLosMejoresCuidadosParaTusPerritosComponent,
    PerritasAdorablesTodoLoQueNecesitasSaberSobreEstasTiernasMascotasComponent,
    TodoSobrePerrosInformacionCuriosidadesYConsejosUtilesParaCuidarATuMejorAmigoComponent,
    TodoLoQueNecesitasSaberSobreGatosRazasCuidadosYCuriosidadesComponent,
    BulldogFrancesTodoLoQueNecesitasSaberSobreEstaAdorableRazaDePerrosComponent,
    BulldogInglesCaracteristicasCuidadosYCuriosidadesDeEstaRazaIconicaComponent,
    ElBulldogInglesCaracteristicasCuidadosYCuriosidadesComponent,
    AaaArticleSearchComponent,
    ConoceTodoAcercaDelPerroSanBernardoComponent,
    DescubreElBoyeroDeBernaComponent,
    PastorAlemanCaracteristicasCuidadosYCuriosidadesComponent,
    PerroSalchichaCaracteristicasCuidadosYCuriosidadesComponent,
    DescubreTodoSobreLosGatosPersaLaRazaMasPopularComponent,
    DescubreLasMejoresRazasDePerrosPequeniosGuiaCompletaComponent,
    GranDanesCaracteristicasCuidadosYCuriosidadesComponent,
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
})
export class ArticlesModule { }
