import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatosRoutingModule } from './gatos-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { GatosComponent } from './gatos.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { InfoComponent } from './info/info.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GatosComponent,
    CatListComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    GatosRoutingModule,
    ComponentsModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
})
export class GatosModule { }
