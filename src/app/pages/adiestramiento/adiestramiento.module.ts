import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdiestramientoRoutingModule } from './adiestramiento-routing.module';
import { AdiestramientoComponent } from './adiestramiento.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    AdiestramientoComponent,
  ],
  imports: [
    CommonModule,
    AdiestramientoRoutingModule,
    ComponentsModule
  ]
})
export class AdiestramientoModule { }
