import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerrosRazaComponent } from './perros-raza.component';

const routes: Routes = [{
  path: '',
  component: PerrosRazaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerrosRazaRoutingModule { }
