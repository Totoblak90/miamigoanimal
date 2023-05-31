import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaludRoutingModule } from './salud-routing.module';
import { SaludComponent } from './salud.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    SaludComponent,
  ],
  imports: [
    CommonModule,
    SaludRoutingModule,
    ComponentsModule
  ]
})
export class SaludModule { }
