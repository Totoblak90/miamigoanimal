import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';

// Search
import { AaaArticleSearchComponent } from './aaa-article-search/aaa-article-search';

// Posts
import { AdoptaALosGatitosMasTiernosYJuguetonesEncuentraTuCompaneroFelinoIdealComponent } from './adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal/adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal.component';
import { ConoceLasMejoresRazasDePerrosGuiaCompletaYActualizadaComponent } from './conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada/conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada.component';
import { DescubreLosMejoresCuidadosParaTusPerritosComponent } from './descubre-los-mejores-cuidados-para-tus-perritos/descubre-los-mejores-cuidados-para-tus-perritos.component';
import { PerritasAdorablesTodoLoQueNecesitasSaberSobreEstasTiernasMascotasComponent } from './perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas/perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas.component';
import { TodoSobrePerrosInformacionCuriosidadesYConsejosUtilesParaCuidarATuMejorAmigoComponent } from './todo-sobre-perros-informacion-curiosidades-y-consejos-utiles/todo-sobre-perros-informacion-curiosidades-y-consejos-utiles-para-cuidar-a-tu-mejor-amigo.component';
import { TodoLoQueNecesitasSaberSobreGatosRazasCuidadosYCuriosidadesComponent } from './todo-lo-que-necesitas-saber-sobre-gatos-razas-cuidados-y-curiosidades/todo-lo-que-necesitas-saber-sobre-gatos-razas-cuidados-y-curiosidades.component';
import { BulldogFrancesTodoLoQueNecesitasSaberSobreEstaAdorableRazaDePerrosComponent } from './bulldog-frances-todo-lo-que-necesitas-saber-sobre-esta-adorable-raza-de-perros/bulldog-frances-todo-lo-que-necesitas-saber-sobre-esta-adorable-raza-de-perros.component';
import { BulldogInglesCaracteristicasCuidadosYCuriosidadesDeEstaRazaIconicaComponent } from './bulldog-ingles-caracteristicas-cuidados-y-curiosidades-de-esta-raza-iconica/bulldog-ingles-caracteristicas-cuidados-y-curiosidades-de-esta-raza-iconica.component';
import { ElBulldogInglesCaracteristicasCuidadosYCuriosidadesComponent } from './el-bulldog-ingles-caracteristicas-cuidados-y-curiosidades/el-bulldog-ingles-caracteristicas-cuidados-y-curiosidades.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConoceTodoAcercaDelPerroSanBernardoComponent } from './conoce-todo-acerca-del-perro-san-bernardo/conoce-todo-acerca-del-perro-san-bernardo.component';
import { DescubreElBoyeroDeBernaComponent } from './descubre-el-boyero-de-berna/descubre-el-boyero-de-berna.component';
import { PastorAlemanCaracteristicasCuidadosYCuriosidadesComponent } from './pastor-aleman-caracteristicas-cuidados-y-curiosidades/pastor-aleman-caracteristicas-cuidados-y-curiosidades.component';
import { PerroSalchichaCaracteristicasCuidadosYCuriosidadesComponent } from './perro-salchicha-caracteristicas-cuidados-y-curiosidades/perro-salchicha-caracteristicas-cuidados-y-curiosidades.component';
import { DescubreTodoSobreLosGatosPersaLaRazaMasPopularComponent } from './descubre-todo-sobre-los-gatos-persa-la-raza-mas-popular/descubre-todo-sobre-los-gatos-persa-la-raza-mas-popular.component';
import { DescubreLasMejoresRazasDePerrosPequeniosGuiaCompletaComponent } from './descubre-las-mejores-razas-de-perros-pequenios-guia-completa/descubre-las-mejores-razas-de-perros-pequenios-guia-completa.component';
import { GranDanesCaracteristicasCuidadosYCuriosidadesComponent } from './gran-danes-caracteristicas-cuidados-ycuriosidades/gran-danes-caracteristicas-cuidados-ycuriosidades.component';
import { GatoSiamesCaracteristicasCuidadosYCuriosidadesComponent } from './gato-siames-caracteristicas-cuidados-ycuriosidades/gato-siames-caracteristicas-cuidados-ycuriosidades.component';
import { TodoLoQueDebesSaberSobreElPomeraniaComponent } from './todo-lo-que-debes-saber-sobre-el-pomerania/todo-lo-que-debes-saber-sobre-el-pomerania.component';
import { AprendeTodoSobreElCanicheCaracteristicasCuidadosYCuriosidadesComponent } from './aprende-todo-sobre-el-caniche-caracteristicas-cuidados-ycuriosidades/aprende-todo-sobre-el-caniche-caracteristicas-cuidados-ycuriosidades.component';
import { DescubreLosMejoresAlimentosParaPerrosEnNuestraGuiaCompletaComponent } from './descubre-los-mejores-alimentos-para-perros-en-nuestra-guia-completa/descubre-los-mejores-alimentos-para-perros-en-nuestra-guia-completa.component';
import { HeaderComponent } from '../components/header/header.component';
import { IndexComponent } from '../components/index/index.component';
import { FlippingCardComponent } from '../components/flipping-card/flipping-card.component';
import { IframeCardComponent } from '../components/iframe-card/iframe-card.component';
import { ArticleSkeletonComponent } from '../components/article-skeleton/article-skeleton.component';
import { LasMejoresRazasDePerrosGrandesParaTenerEnCasaComponent } from './las-mejores-razas-de-perros-grandes-para-tener-en-casa/las-mejores-razas-de-perros-grandes-para-tener-en-casa.component';
import { TodoSobreLosGatosNegrosDescubreSuPersonalidadYCaracteristicasComponent } from './todo-sobre-los-gatos-negros-descubre-su-personalidad-ycaracteristicas/todo-sobre-los-gatos-negros-descubre-su-personalidad-ycaracteristicas.component';
import { MejoresAlimentosParaPerrosGuiaDeNutricionCaninaComponent } from './mejores-alimentos-para-perros-guia-de-nutricion-canina/mejores-alimentos-para-perros-guia-de-nutricion-canina.component';
import { TodoSobreElPastorBelgaMalinoisCaracteristicasCuidadosYAdiestramientoComponent } from './todo-sobre-el-pastor-belga-malinois-caracteristicas-cuidados-yadiestramiento/todo-sobre-el-pastor-belga-malinois-caracteristicas-cuidados-yadiestramiento.component';
import { BeagleEnEspanaComponent } from './beagle-en-espana/beagle-en-espana.component';
import { CanicheToyCaracteristicasCuidadosYMasDescubreloTodoAquiComponent } from './caniche-toy-caracteristicas-cuidados-y-mas-descubrelo-todo-aqui/caniche-toy-caracteristicas-cuidados-y-mas-descubrelo-todo-aqui.component';
import { ConoceAlPugCarlinoLaRazaDePerroMasAdorableComponent } from './conoce-al-pug-carlino-la-raza-de-perro-mas-adorable/conoce-al-pug-carlino-la-raza-de-perro-mas-adorable.component';
import { PerroChihuahuaCaracteristicasYCuidadosComponent } from './perro-chihuahua-caracteristicas-y-cuidados/perro-chihuahua-caracteristicas-y-cuidados.component';
import { PerrosBoxerCaracteristicasCuidadosYMasComponent } from './perros-boxer-caracteristicas-cuidados-y-mas/perros-boxer-caracteristicas-cuidados-y-mas.component';
import { LosMejoresAlimentosParaPerrosGuiaDeAlimentacionSaludableComponent } from './los-mejores-alimentos-para-perros-guia-de-alimentacion-saludable/los-mejores-alimentos-para-perros-guia-de-alimentacion-saludable.component';
import { ElGatoEgipcioUnAnalisisCompletoDeSuHistoriaCaracteristicasYCuriosidadesComponent } from './el-gato-egipcio-historia-caracteristicas-y-curiosidades/el-gato-egipcio-historia-caracteristicas-y-curiosidades.component';
import { ComoElegirLaMascotaAdecuadaParaTuHogarComponent } from './como-elegir-la-mascota-adecuada-para-tu-hogar/como-elegir-la-mascota-adecuada-para-tu-hogar.component';


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
    GatoSiamesCaracteristicasCuidadosYCuriosidadesComponent,
    TodoLoQueDebesSaberSobreElPomeraniaComponent,
    AprendeTodoSobreElCanicheCaracteristicasCuidadosYCuriosidadesComponent,
    DescubreLosMejoresAlimentosParaPerrosEnNuestraGuiaCompletaComponent,
    LasMejoresRazasDePerrosGrandesParaTenerEnCasaComponent,
    TodoSobreLosGatosNegrosDescubreSuPersonalidadYCaracteristicasComponent,
    MejoresAlimentosParaPerrosGuiaDeNutricionCaninaComponent,
    TodoSobreElPastorBelgaMalinoisCaracteristicasCuidadosYAdiestramientoComponent,
    BeagleEnEspanaComponent,
    CanicheToyCaracteristicasCuidadosYMasDescubreloTodoAquiComponent,
    ConoceAlPugCarlinoLaRazaDePerroMasAdorableComponent,
    PerroChihuahuaCaracteristicasYCuidadosComponent,
    PerrosBoxerCaracteristicasCuidadosYMasComponent,
    LosMejoresAlimentosParaPerrosGuiaDeAlimentacionSaludableComponent,
    ElGatoEgipcioUnAnalisisCompletoDeSuHistoriaCaracteristicasYCuriosidadesComponent,
    ComoElegirLaMascotaAdecuadaParaTuHogarComponent,
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    ReactiveFormsModule,
    HeaderComponent,
    IndexComponent,
    FlippingCardComponent,
    IframeCardComponent,
    ArticleSkeletonComponent,
    IndexComponent
  ],
})
export class ArticlesModule { }
