import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AlimentacionComponent } from './alimentacion/alimentacion.component';
import { SaludComponent } from './salud/salud.component';
import { AdiestramientoComponent } from './adiestramiento/adiestramiento.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { PerrosComponent } from './perros/perros.component';
import { GatosComponent } from './gatos/gatos.component';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AlimentacionComponent,
    SaludComponent,
    AdiestramientoComponent,
    SobreMiComponent,
    PerrosComponent,
    GatosComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
