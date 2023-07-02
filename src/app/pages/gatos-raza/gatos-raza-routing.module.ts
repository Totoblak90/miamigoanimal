import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatosRazaComponent } from './gatos-raza.component';
import { razaGatosResolver } from 'src/app/resolvers/raza-gatos.resolver';

const routes: Routes = [{
  path: '',
  component: GatosRazaComponent,
  resolve: {
    raza: razaGatosResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatosRazaRoutingModule { }
