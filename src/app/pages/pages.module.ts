import { Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { ComponentsModule } from '../components/components.module';

import { TerminosComponent } from './terminos/terminos.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { CookiesComponent } from './cookies/cookies.component';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../directives/directives.module';
import { GestionarCookiesComponent } from './gestionar-cookies/gestionar-cookies.component';


@NgModule({
  declarations: [
    TerminosComponent,
    PoliticasComponent,
    CookiesComponent,
    GestionarCookiesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    RouterModule,
    DirectivesModule
  ]
})
export class PagesModule { }
