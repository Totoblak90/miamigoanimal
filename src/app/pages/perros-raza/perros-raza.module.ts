import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerrosRazaRoutingModule } from './perros-raza-routing.module';
import { PerrosRazaComponent } from './perros-raza.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { DirectivesModule } from 'src/app/directives/directives.module';


@NgModule({
  declarations: [
    PerrosRazaComponent,
  ],
  imports: [
    CommonModule,
    PerrosRazaRoutingModule,
    ComponentsModule,
    DirectivesModule
  ]
})
export class PerrosRazaModule { }
