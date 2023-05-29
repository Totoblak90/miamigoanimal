import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerrosComponent } from './perros.component';

const routes: Routes = [{
  path: '',
  component: PerrosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerrosRoutingModule { }
