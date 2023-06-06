import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlimentacionRoutingModule } from './alimentacion-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { AlimentacionComponent } from './alimentacion.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AlimentacionComponent],
  imports: [
    CommonModule,
    AlimentacionRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class AlimentacionModule { }
