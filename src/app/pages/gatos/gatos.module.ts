import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatosRoutingModule } from './gatos-routing.module';
import { GatosComponent } from './gatos.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { InfoComponent } from './info/info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { RecentArticlesSectionComponent } from 'src/app/components/recent-articles-section/recent-articles-section.component';
import { HighlitedArticlesSectionComponent } from 'src/app/components/highlited-articles-section/highlited-articles-section.component';
import { FlippingCardComponent } from 'src/app/components/flipping-card/flipping-card.component';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';


@NgModule({
  declarations: [
    GatosComponent,
    CatListComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    GatosRoutingModule,
    ReactiveFormsModule,
    HeaderComponent,
    RecentArticlesSectionComponent,
    HighlitedArticlesSectionComponent,
    FlippingCardComponent,
    SpinnerComponent
  ],
})
export class GatosModule { }
