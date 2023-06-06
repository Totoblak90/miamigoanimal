import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerrosRazaRoutingModule } from './perros-raza-routing.module';
import { PerrosRazaComponent } from './perros-raza.component';


@NgModule({
  declarations: [
    PerrosRazaComponent
  ],
  imports: [
    CommonModule,
    PerrosRazaRoutingModule
  ]
})
export class PerrosRazaModule { }
