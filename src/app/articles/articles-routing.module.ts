import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptaALosGatitosMasTiernosYJuguetonesEncuentraTuCompaneroFelinoIdealComponent } from './adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal/adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal.component';
import { ConoceLasMejoresRazasDePerrosGuiaCompletaYActualizadaComponent } from './conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada/conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada.component';
import { DescubreLosMejoresCuidadosParaTusPerritosComponent } from './descubre-los-mejores-cuidados-para-tus-perritos/descubre-los-mejores-cuidados-para-tus-perritos.component';
import { PerritasAdorablesTodoLoQueNecesitasSaberSobreEstasTiernasMascotasComponent } from './perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas/perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas.component';
import { TodoSobrePerrosInformacionCuriosidadesYConsejosUtilesParaCuidarATuMejorAmigoComponent } from './todo-sobre-perros-informacion-curiosidades-y-consejos-utiles/todo-sobre-perros-informacion-curiosidades-y-consejos-utiles-para-cuidar-a-tu-mejor-amigo.component';
import { TodoLoQueNecesitasSaberSobreGatosRazasCuidadosYCuriosidadesComponent } from './todo-lo-que-necesitas-saber-sobre-gatos-razas-cuidados-y-curiosidades/todo-lo-que-necesitas-saber-sobre-gatos-razas-cuidados-y-curiosidades.component';
import { BulldogFrancesTodoLoQueNecesitasSaberSobreEstaAdorableRazaDePerrosComponent } from './bulldog-frances-todo-lo-que-necesitas-saber-sobre-esta-adorable-raza-de-perros/bulldog-frances-todo-lo-que-necesitas-saber-sobre-esta-adorable-raza-de-perros.component';
import { BulldogInglesCaracteristicasCuidadosYCuriosidadesDeEstaRazaIconicaComponent } from './bulldog-ingles-caracteristicas-cuidados-y-curiosidades-de-esta-raza-iconica/bulldog-ingles-caracteristicas-cuidados-y-curiosidades-de-esta-raza-iconica.component';
import { ElBulldogInglesCaracteristicasCuidadosYCuriosidadesComponent } from './el-bulldog-ingles-caracteristicas-cuidados-y-curiosidades/el-bulldog-ingles-caracteristicas-cuidados-y-curiosidades.component';
import { AaaArticleSearchComponent } from './aaa-article-search/aaa-article-search';

const routes: Routes = [
  {
    path: 'adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal',
    component: AdoptaALosGatitosMasTiernosYJuguetonesEncuentraTuCompaneroFelinoIdealComponent
  },
  {
    path: 'conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada',
    component: ConoceLasMejoresRazasDePerrosGuiaCompletaYActualizadaComponent
  },
  {
    path: 'descubre-los-mejores-cuidados-para-tus-perritos',
    component: DescubreLosMejoresCuidadosParaTusPerritosComponent
  },
  {
    path: 'perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas',
    component: PerritasAdorablesTodoLoQueNecesitasSaberSobreEstasTiernasMascotasComponent
  },
  {
    path: 'todo-sobre-perros-informacion-curiosidades-y-consejos-utiles-para-cuidar-a-tu-mejor-amigo',
    component: TodoSobrePerrosInformacionCuriosidadesYConsejosUtilesParaCuidarATuMejorAmigoComponent
  },
  {
    path: 'todo-lo-que-necesitas-saber-sobre-gatos-razas-cuidados-y-curiosidades',
    component: TodoLoQueNecesitasSaberSobreGatosRazasCuidadosYCuriosidadesComponent
  },
  {
    path: 'bulldog-frances-todo-lo-que-necesitas-saber-sobre-esta-adorable-raza-de-perros',
    component: BulldogFrancesTodoLoQueNecesitasSaberSobreEstaAdorableRazaDePerrosComponent
  },
  {
    path: 'bulldog-ingles-caracteristicas-cuidados-y-curiosidades-de-esta-raza-iconica',
    component: BulldogInglesCaracteristicasCuidadosYCuriosidadesDeEstaRazaIconicaComponent
  },
  {
    path: 'el-bulldog-ingles-caracteristicas-cuidados-y-curiosidades',
    component: ElBulldogInglesCaracteristicasCuidadosYCuriosidadesComponent
  },
  {
    path: 'search-post',
    component: AaaArticleSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
