import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
      path: 'adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal',
      loadComponent: () =>
         import(
            './adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal/adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal.component'
         ).then(
            (sc) =>
               sc.AdoptaALosGatitosMasTiernosYJuguetonesEncuentraTuCompaneroFelinoIdealComponent
         ),
   },
   {
      path: 'conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada',
      loadComponent: () =>
         import(
            './conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada/conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada.component'
         ).then(
            (sc) =>
               sc.ConoceLasMejoresRazasDePerrosGuiaCompletaYActualizadaComponent
         ),
   },
   {
      path: 'descubre-los-mejores-cuidados-para-tus-perritos',
      loadComponent: () =>
         import(
            './descubre-los-mejores-cuidados-para-tus-perritos/descubre-los-mejores-cuidados-para-tus-perritos.component'
         ).then((sc) => sc.DescubreLosMejoresCuidadosParaTusPerritosComponent),
   },
   {
      path: 'perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas',
      loadComponent: () =>
         import(
            './perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas/perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas.component'
         ).then(
            (sc) =>
               sc.PerritasAdorablesTodoLoQueNecesitasSaberSobreEstasTiernasMascotasComponent
         ),
   },
   {
      path: 'todo-sobre-perros-informacion-curiosidades-y-consejos-utiles-para-cuidar-a-tu-mejor-amigo',
      loadComponent: () =>
         import(
            './todo-sobre-perros-informacion-curiosidades-y-consejos-utiles/todo-sobre-perros-informacion-curiosidades-y-consejos-utiles-para-cuidar-a-tu-mejor-amigo.component'
         ).then(
            (sc) =>
               sc.TodoSobrePerrosInformacionCuriosidadesYConsejosUtilesParaCuidarATuMejorAmigoComponent
         ),
   },
   {
      path: 'todo-lo-que-necesitas-saber-sobre-gatos-razas-cuidados-y-curiosidades',
      loadComponent: () =>
         import(
            './todo-lo-que-necesitas-saber-sobre-gatos-razas-cuidados-y-curiosidades/todo-lo-que-necesitas-saber-sobre-gatos-razas-cuidados-y-curiosidades.component'
         ).then(
            (sc) =>
               sc.TodoLoQueNecesitasSaberSobreGatosRazasCuidadosYCuriosidadesComponent
         ),
   },
   {
      path: 'bulldog-frances-todo-lo-que-necesitas-saber-sobre-esta-adorable-raza-de-perros',
      loadComponent: () =>
         import(
            './bulldog-frances-todo-lo-que-necesitas-saber-sobre-esta-adorable-raza-de-perros/bulldog-frances-todo-lo-que-necesitas-saber-sobre-esta-adorable-raza-de-perros.component'
         ).then(
            (sc) =>
               sc.BulldogFrancesTodoLoQueNecesitasSaberSobreEstaAdorableRazaDePerrosComponent
         ),
   },
   {
      path: 'bulldog-ingles-caracteristicas-cuidados-y-curiosidades-de-esta-raza-iconica',
      loadComponent: () =>
         import(
            './bulldog-ingles-caracteristicas-cuidados-y-curiosidades-de-esta-raza-iconica/bulldog-ingles-caracteristicas-cuidados-y-curiosidades-de-esta-raza-iconica.component'
         ).then(
            (sc) =>
               sc.BulldogInglesCaracteristicasCuidadosYCuriosidadesDeEstaRazaIconicaComponent
         ),
   },
   {
      path: 'el-bulldog-ingles-caracteristicas-cuidados-y-curiosidades',
      loadComponent: () =>
         import(
            './el-bulldog-ingles-caracteristicas-cuidados-y-curiosidades/el-bulldog-ingles-caracteristicas-cuidados-y-curiosidades.component'
         ).then(
            (sc) =>
               sc.ElBulldogInglesCaracteristicasCuidadosYCuriosidadesComponent
         ),
   },
   {
      path: 'conoce-todo-acerca-del-perro-san-bernardo',
      loadComponent: () =>
         import(
            './conoce-todo-acerca-del-perro-san-bernardo/conoce-todo-acerca-del-perro-san-bernardo.component'
         ).then((sc) => sc.ConoceTodoAcercaDelPerroSanBernardoComponent),
   },
   {
      path: 'descubre-el-boyero-de-berna',
      loadComponent: () =>
         import(
            './descubre-el-boyero-de-berna/descubre-el-boyero-de-berna.component'
         ).then((sc) => sc.DescubreElBoyeroDeBernaComponent),
   },
   {
      path: 'pastor-aleman-caracteristicas-cuidados-y-curiosidades',
      loadComponent: () =>
         import(
            './pastor-aleman-caracteristicas-cuidados-y-curiosidades/pastor-aleman-caracteristicas-cuidados-y-curiosidades.component'
         ).then(
            (sc) => sc.PastorAlemanCaracteristicasCuidadosYCuriosidadesComponent
         ),
   },
   {
      path: 'perro-salchicha-caracteristicas-cuidados-y-curiosidades',
      loadComponent: () =>
         import(
            './perro-salchicha-caracteristicas-cuidados-y-curiosidades/perro-salchicha-caracteristicas-cuidados-y-curiosidades.component'
         ).then(
            (sc) =>
               sc.PerroSalchichaCaracteristicasCuidadosYCuriosidadesComponent
         ),
   },
   {
      path: 'descubre-todo-sobre-los-gatos-persa-la-raza-mas-popular',
      loadComponent: () =>
         import(
            './descubre-todo-sobre-los-gatos-persa-la-raza-mas-popular/descubre-todo-sobre-los-gatos-persa-la-raza-mas-popular.component'
         ).then(
            (sc) => sc.DescubreTodoSobreLosGatosPersaLaRazaMasPopularComponent
         ),
   },
   {
      path: 'descubre-las-mejores-razas-de-perros-pequenos-guia-completa',
      loadComponent: () =>
         import(
            './descubre-las-mejores-razas-de-perros-pequenios-guia-completa/descubre-las-mejores-razas-de-perros-pequenios-guia-completa.component'
         ).then(
            (sc) =>
               sc.DescubreLasMejoresRazasDePerrosPequeniosGuiaCompletaComponent
         ),
   },
   {
      path: 'gran-danes-caracteroisticas-cuidados-y-curiosidades',
      loadComponent: () =>
         import(
            './gran-danes-caracteristicas-cuidados-ycuriosidades/gran-danes-caracteristicas-cuidados-ycuriosidades.component'
         ).then(
            (sc) => sc.GranDanesCaracteristicasCuidadosYCuriosidadesComponent
         ),
   },
   {
      path: 'gato-siames-caracteristicas-cuidados-y-curiosidades',
      loadComponent: () =>
         import(
            './gato-siames-caracteristicas-cuidados-ycuriosidades/gato-siames-caracteristicas-cuidados-ycuriosidades.component'
         ).then(
            (sc) => sc.GatoSiamesCaracteristicasCuidadosYCuriosidadesComponent
         ),
   },
   {
      path: 'todo-lo-que-debes-saber-sobre-el-pomerania',
      loadComponent: () =>
         import(
            './todo-lo-que-debes-saber-sobre-el-pomerania/todo-lo-que-debes-saber-sobre-el-pomerania.component'
         ).then((sc) => sc.TodoLoQueDebesSaberSobreElPomeraniaComponent),
   },
   {
      path: 'aprende-todo-sobre-el-caniche-caracteristicas-cuidados-ycuriosidades',
      loadComponent: () =>
         import(
            './aprende-todo-sobre-el-caniche-caracteristicas-cuidados-ycuriosidades/aprende-todo-sobre-el-caniche-caracteristicas-cuidados-ycuriosidades.component'
         ).then(
            (sc) =>
               sc.AprendeTodoSobreElCanicheCaracteristicasCuidadosYCuriosidadesComponent
         ),
   },
   {
      path: 'descubre-los-mejores-alimentos-para-perros-en-nuestra-guia-completa',
      loadComponent: () =>
         import(
            './descubre-los-mejores-alimentos-para-perros-en-nuestra-guia-completa/descubre-los-mejores-alimentos-para-perros-en-nuestra-guia-completa.component'
         ).then(
            (sc) =>
               sc.DescubreLosMejoresAlimentosParaPerrosEnNuestraGuiaCompletaComponent
         ),
   },
   {
      path: 'las-mejores-razas-de-perros-grandes-para-tener-de-mascota-en-casa',
      loadComponent: () =>
         import(
            './las-mejores-razas-de-perros-grandes-para-tener-en-casa/las-mejores-razas-de-perros-grandes-para-tener-en-casa.component'
         ).then(
            (sc) => sc.LasMejoresRazasDePerrosGrandesParaTenerEnCasaComponent
         ),
   },
   {
      path: 'todo-sobre-los-gatos-negros-descubre-su-personalidad-ycaracteristicas',
      loadComponent: () =>
         import(
            './todo-sobre-los-gatos-negros-descubre-su-personalidad-ycaracteristicas/todo-sobre-los-gatos-negros-descubre-su-personalidad-ycaracteristicas.component'
         ).then(
            (sc) =>
               sc.TodoSobreLosGatosNegrosDescubreSuPersonalidadYCaracteristicasComponent
         ),
   },
   {
      path: 'mejores-alimentos-para-perros-guia-de-nutricion-canina',
      loadComponent: () =>
         import(
            './mejores-alimentos-para-perros-guia-de-nutricion-canina/mejores-alimentos-para-perros-guia-de-nutricion-canina.component'
         ).then(
            (sc) => sc.MejoresAlimentosParaPerrosGuiaDeNutricionCaninaComponent
         ),
   },
   {
      path: 'todo-sobre-el-pastor-belga-malinois-caracteristicas-cuidados-yadiestramiento',
      loadComponent: () =>
         import(
            './todo-sobre-el-pastor-belga-malinois-caracteristicas-cuidados-yadiestramiento/todo-sobre-el-pastor-belga-malinois-caracteristicas-cuidados-yadiestramiento.component'
         ).then(
            (sc) =>
               sc.TodoSobreElPastorBelgaMalinoisCaracteristicasCuidadosYAdiestramientoComponent
         ),
   },
   {
      path: 'beagle-en-espana',
      loadComponent: () =>
         import('./beagle-en-espana/beagle-en-espana.component').then(
            (sc) => sc.BeagleEnEspanaComponent
         ),
   },
   {
      path: 'caniche-toy-caracteristicas-cuidados-y-mas-descubrelo-todo-aqui',
      loadComponent: () =>
         import(
            './caniche-toy-caracteristicas-cuidados-y-mas-descubrelo-todo-aqui/caniche-toy-caracteristicas-cuidados-y-mas-descubrelo-todo-aqui.component'
         ).then(
            (sc) =>
               sc.CanicheToyCaracteristicasCuidadosYMasDescubreloTodoAquiComponent
         ),
   },
   {
      path: 'conoce-al-pug-carlino-la-raza-de-perro-mas-adorable',
      loadComponent: () =>
         import(
            './conoce-al-pug-carlino-la-raza-de-perro-mas-adorable/conoce-al-pug-carlino-la-raza-de-perro-mas-adorable.component'
         ).then((sc) => sc.ConoceAlPugCarlinoLaRazaDePerroMasAdorableComponent),
   },
   {
      path: 'perro-chihuahua-caracteristicas-y-cuidados',
      loadComponent: () =>
         import(
            './perro-chihuahua-caracteristicas-y-cuidados/perro-chihuahua-caracteristicas-y-cuidados.component'
         ).then((sc) => sc.PerroChihuahuaCaracteristicasYCuidadosComponent),
   },
   {
      path: 'perros-boxer-caracteristicas-cuidados-y-mas',
      loadComponent: () =>
         import(
            './perros-boxer-caracteristicas-cuidados-y-mas/perros-boxer-caracteristicas-cuidados-y-mas.component'
         ).then((sc) => sc.PerrosBoxerCaracteristicasCuidadosYMasComponent),
   },
   {
      path: 'los-mejores-alimentos-para-perros-guia-de-alimentacion-saludable',
      loadComponent: () =>
         import(
            './los-mejores-alimentos-para-perros-guia-de-alimentacion-saludable/los-mejores-alimentos-para-perros-guia-de-alimentacion-saludable.component'
         ).then(
            (sc) =>
               sc.LosMejoresAlimentosParaPerrosGuiaDeAlimentacionSaludableComponent
         ),
   },
   {
      path: 'el-gato-egipcio-un-analisis-completo-de-su-historia-caracteristicas-y-curiosidades',
      loadComponent: () =>
         import(
            './el-gato-egipcio-historia-caracteristicas-y-curiosidades/el-gato-egipcio-historia-caracteristicas-y-curiosidades.component'
         ).then(
            (sc) =>
               sc.ElGatoEgipcioUnAnalisisCompletoDeSuHistoriaCaracteristicasYCuriosidadesComponent
         ),
   },
   {
      path: 'como-elegir-la-mascota-adecuada-para-tu-hogar',
      loadComponent: () =>
         import(
            './como-elegir-la-mascota-adecuada-para-tu-hogar/como-elegir-la-mascota-adecuada-para-tu-hogar.component'
         ).then((sc) => sc.ComoElegirLaMascotaAdecuadaParaTuHogarComponent),
   },
   {
      path: 'golden-retriever-la-raza-mas-adorable-fiel-y-juguetona',
      loadComponent: () =>
         import(
            './golder-retriever-la-raza-mas-adorable-fiel-y-juguetona/golder-retriever-la-raza-mas-adorable-fiel-y-juguetona.component'
         ).then(
            (sc) => sc.GolderRetrieverLaRazaMasAdorableFielYJuguetonaComponent
         ),
   },
   {
      path: 'bichon-maltes-conoce-todo-sobre-esta-raza-de-pelo-blanco',
      loadComponent: () =>
         import(
            './bichon-maltes-conoce-todo-sobre-esta-raza-de-pelo-blanco/bichon-maltes-conoce-todo-sobre-esta-raza-de-pelo-blanco.component'
         ).then(
            (sc) => sc.BichonMaltesConoceTodoSobreEstaRazaDePeloBlancoComponent
         ),
   },
   {
      path: 'pastor-australiano-caracteristicas-cuidados-y-curiosidades',
      loadComponent: () =>
         import(
            './pastor-australiano-caracteristicas-cuidados-y-curiosidades/pastor-australiano-caracteristicas-cuidados-y-curiosidades.component'
         ).then(
            (sc) =>
               sc.PastorAustralianoCaracteristicasCuidadosYCuriosidadesComponent
         ),
   },
   {
      path: 'pitbull-blue-todo-lo-que-necesitas-saber-sobre-esta-raza-de-perros',
      loadComponent: () =>
         import(
            './pitbull-blue-todo-lo-que-necesitas-saber-sobre-esta-raza-de-perros/pitbull-blue-todo-lo-que-necesitas-saber-sobre-esta-raza-de-perros.component'
         ).then(
            (sc) =>
               sc.PitbullBlueTodoLoQueNecesitasSaberSobreEstaRazaDePerrosComponent
         ),
   },
   {
      path: 'es-el-pitbull-la-raza-de-perro-adecuada-para-ti',
      loadComponent: () =>
         import(
            './es-el-pitbull-la-raza-de-perro-adecuada-para-ti/es-el-pitbull-la-raza-de-perro-adecuada-para-ti.component'
         ).then((sc) => sc.EsElPitbullLaRazaDePerroAdecuadaParaTiComponent),
   },
   {
      path: 'mascotas-consejos-cuidados-y-curiosidades-guia-completa',
      loadComponent: () =>
         import(
            './mascotas-consejos-cuidados-y-curiosidades-guia-completa/mascotas-consejos-cuidados-y-curiosidades-guia-completa.component'
         ).then(
            (sc) =>
               sc.MascotasConsejosCuidadosYCuriosidadesGuiaCompletaComponent
         ),
   },
   {
      path: 'fila-brasilero-conoce-todo-sobre-esta-raza-de-perros-de-guarda',
      loadComponent: () =>
         import(
            './fila-brasilero-conoce-todo-sobre-esta-raza-de-perros-de-guarda/fila-brasilero-conoce-todo-sobre-esta-raza-de-perros-de-guarda.component'
         ).then(
            (sc) =>
               sc.FilaBrasileroConoceTodoSobreEstaRazaDePerrosDeGuardaComponent
         ),
   },
   {
      path: 'schnauzer-miniatura-caracteristicas-cuidados-y-curiosidades',
      loadComponent: () =>
         import(
            './schnauzer-miniatura-caracteristicas-cuidados-y-curiosidades/schnauzer-miniatura-caracteristicas-cuidados-y-curiosidades.component'
         ).then(
            (sc) =>
               sc.SchnauzerMiniaturaCaracteristicasCuidadosYCuriosidadesComponent
         ),
   },
   {
      path: 'perros-pitbull-caracteristicas-cuidados-entrenamiento-y-mas',
      loadComponent: () =>
         import(
            './perros-pitbull-caracteristicas-cuidados-entrenamiento-y-mas/perros-pitbull-caracteristicas-cuidados-entrenamiento-y-mas.component'
         ).then(
            (sc) =>
               sc.PerrosPitbullCaracteristicasCuidadosEntrenamientoYMasComponent
         ),
   },
   {
      path: 'fila-brasilero-caracteristicas-cuidados-y-curiosidades',
      loadComponent: () =>
         import(
            './fila-brasilero-caracteristicas-cuidados-y-curiosidades/fila-brasilero-caracteristicas-cuidados-y-curiosidades.component'
         ).then(
            (sc) =>
               sc.FilaBrasileroCaracteristicasCuidadosYCuriosidadesComponent
         ),
   },
   {
      path: 'gato-kawaii-descubre-los-secretos-de-la-ternura-felina',
      loadComponent: () =>
         import(
            './gato-kawaii-descubre-los-secretos-de-la-ternura-felina/gato-kawaii-descubre-los-secretos-de-la-ternura-felina.component'
         ).then(
            (sc) => sc.GatoKawaiiDescubreLosSecretosDeLaTernuraFelinaComponent
         ),
   },
   {
      path: 'los-gatitos-mas-adorables-descubre-el-encanto-de-los-gatitos-kawaii',
      loadComponent: () =>
         import(
            './los-gatitos-mas-adorables-descubre-el-encanto-de-los-gatitos-kawaii/los-gatitos-mas-adorables-descubre-el-encanto-de-los-gatitos-kawaii.component'
         ).then(
            (sc) => sc.LosGatitosMasAdorablesDescubreElEncantoDeLosGatitosKawaiiComponent
         ),
   },
   {
      path: 'gatitos-bebes-adorables-companieros-de-vida-para-tu-hogar',
      loadComponent: () =>
         import(
            './gatitos-bebes-adorables-companieros-de-vida-para-tu-hogar/gatitos-bebes-adorables-companieros-de-vida-para-tu-hogar.component'
         ).then(
            (sc) => sc.GatitosBebesAdorablesCompanierosDeVidaParaTuHogarComponent
         ),
   },


   {
      path: 'search-post',
      loadComponent: () =>
         import('./aaa-article-search/aaa-article-search').then(
            (sc) => sc.AaaArticleSearchComponent
         ),
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class ArticlesRoutingModule {}
