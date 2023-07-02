import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TerminosComponent } from './terminos/terminos.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { CookiesComponent } from './cookies/cookies.component';
import { GestionarCookiesComponent } from './gestionar-cookies/gestionar-cookies.component';

const routes: Routes = [
  {
    path: 'adiestramiento',
    loadChildren: () => import('./adiestramiento/adiestramiento.module').then(m => m.AdiestramientoModule)
  },
  {
    path: 'alimentacion',
    loadChildren: () => import('./alimentacion/alimentacion.module').then(m => m.AlimentacionModule)
  },
  {
    path: 'cookies',
    component: CookiesComponent
  },
  {
    path: 'gatos/:gatoId',
    loadChildren: () => import('./gatos-raza/gatos-raza.module').then(m => m.GatosRazaModule)
  },
  {
    path: 'gatos',
    loadChildren: () => import('./gatos/gatos.module').then(m => m.GatosModule)
  },
  {
    path: 'gestionar-cookies',
    component: GestionarCookiesComponent
  },
  {
    path: 'perros/:id',
    loadChildren: () => import('./perros-raza/perros-raza.module').then(m => m.PerrosRazaModule)
  },
  {
    path: 'perros',
    loadChildren: () => import('./perros/perros.module').then(m => m.PerrosModule)
  },
  {
    path: 'politicas',
    component: PoliticasComponent
  },
  {
    path: 'salud',
    loadChildren: () => import('./salud/salud.module').then(m => m.SaludModule)
  },
  {
    path: 'sobre-mi',
    loadChildren: () => import('./sobre-mi/sobre-mi.module').then(m => m.SobreMiModule)
  },
  {
    path: 'terminos',
    component: TerminosComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
