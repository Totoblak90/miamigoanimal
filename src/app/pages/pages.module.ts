import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { DirectivesModule } from '../directives/directives.module';
import { PagesRoutingModule } from './pages-routing.module';

import { TerminosComponent } from './terminos/terminos.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { CookiesComponent } from './cookies/cookies.component';
import { HeaderComponent } from '../components/header/header.component';
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
    RouterModule,
    DirectivesModule,
    ReactiveFormsModule,
    HeaderComponent
  ]
})
export class PagesModule { }
