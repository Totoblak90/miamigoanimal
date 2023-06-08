import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerrosRazaComponent } from './perros-raza.component';
import { razaPerrosResolver } from 'src/app/resolvers/raza-perros.resolver';

const routes: Routes = [{
  path: '',
  component: PerrosRazaComponent,
  resolve: {
    raza: razaPerrosResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerrosRazaRoutingModule { }
