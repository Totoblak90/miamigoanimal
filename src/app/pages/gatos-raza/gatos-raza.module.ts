import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatosRazaRoutingModule } from './gatos-raza-routing.module';
import { GatosRazaComponent } from './gatos-raza.component';
import { HighlitedArticlesSectionComponent } from 'src/app/components/highlited-articles-section/highlited-articles-section.component';
import { RecentArticlesSectionComponent } from 'src/app/components/recent-articles-section/recent-articles-section.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ExpandableTextComponent } from 'src/app/components/expandable-text/expandable-text.component';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';


@NgModule({
  declarations: [GatosRazaComponent],
  imports: [
    CommonModule,
    GatosRazaRoutingModule,
    HighlitedArticlesSectionComponent,
    RecentArticlesSectionComponent,
    HeaderComponent,
    ExpandableTextComponent,
    CarouselComponent
  ]
})
export class GatosRazaModule { }
