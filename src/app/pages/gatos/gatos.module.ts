import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatosRoutingModule } from './gatos-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { GatosComponent } from './gatos.component';


@NgModule({
  declarations: [
    GatosComponent
  ],
  imports: [
    CommonModule,
    GatosRoutingModule,
    ComponentsModule
  ]
})
export class GatosModule { }
