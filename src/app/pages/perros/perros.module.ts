import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerrosRoutingModule } from './perros-routing.module';
import { InfoComponent } from './info/info.component';
import { PerrosComponent } from './perros.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { DogListComponent } from './dog-list/dog-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InfoComponent,
    PerrosComponent,
    DogListComponent
  ],
  imports: [
    CommonModule,
    PerrosRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
  exports: [
    InfoComponent,
  ]
})
export class PerrosModule { }
