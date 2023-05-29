import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdiestramientoComponent } from './adiestramiento.component';

const routes: Routes = [{
  path: '',
  component: AdiestramientoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdiestramientoRoutingModule { }
