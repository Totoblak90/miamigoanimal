import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentacionComponent } from './alimentacion/alimentacion.component';
import { GatosComponent } from './gatos/gatos.component';
import { AdiestramientoComponent } from './adiestramiento/adiestramiento.component';
import { PerrosComponent } from './perros/perros.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { SaludComponent } from './salud/salud.component';

const routes: Routes = [
  {
    path: 'adiestramiento',
    component: AdiestramientoComponent
  },
  {
    path: 'alimentacion',
    component: AlimentacionComponent
  },
  {
    path: 'gatos',
    component: GatosComponent
  },
  {
    path: 'perros',
    component: PerrosComponent
  },
  {
    path: 'salud',
    component: SaludComponent
  },
  {
    path: 'sobre-mi',
    component: SobreMiComponent
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
