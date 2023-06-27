import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerrosRazaRoutingModule } from './perros-raza-routing.module';
import { PerrosRazaComponent } from './perros-raza.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { ExpandableTextComponent } from 'src/app/components/expandable-text/expandable-text.component';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { SimpleBoxComponent } from 'src/app/components/simple-box/simple-box.component';
import { RecentArticlesSectionComponent } from 'src/app/components/recent-articles-section/recent-articles-section.component';
import { HighlitedArticlesSectionComponent } from 'src/app/components/highlited-articles-section/highlited-articles-section.component';
import { HeaderComponent } from 'src/app/components/header/header.component';


@NgModule({
  declarations: [
    PerrosRazaComponent,
  ],
  imports: [
    CommonModule,
    PerrosRazaRoutingModule,
    DirectivesModule,
    ExpandableTextComponent,
    CarouselComponent,
    SimpleBoxComponent,
    RecentArticlesSectionComponent,
    HighlitedArticlesSectionComponent,
    HeaderComponent
  ]
})
export class PerrosRazaModule { }
