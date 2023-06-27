import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdiestramientoRoutingModule } from './adiestramiento-routing.module';
import { AdiestramientoComponent } from './adiestramiento.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IndexComponent } from 'src/app/components/index/index.component';
import { ClippedSectionWithBgImgComponent } from 'src/app/components/clipped-section-with-bg-img/clipped-section-with-bg-img.component';
import { PreguntasFrecuentesSectionComponent } from 'src/app/components/preguntas-frecuentes-section/preguntas-frecuentes-section.component';
import { IframeCardComponent } from 'src/app/components/iframe-card/iframe-card.component';
import { HighlitedArticlesSectionComponent } from 'src/app/components/highlited-articles-section/highlited-articles-section.component';
import { RecentArticlesSectionComponent } from 'src/app/components/recent-articles-section/recent-articles-section.component';


@NgModule({
  declarations: [
    AdiestramientoComponent,
  ],
  imports: [
    CommonModule,
    AdiestramientoRoutingModule,
    HeaderComponent,
    IndexComponent,
    ClippedSectionWithBgImgComponent,
    PreguntasFrecuentesSectionComponent,
    IframeCardComponent,
    HighlitedArticlesSectionComponent,
    RecentArticlesSectionComponent
  ]
})
export class AdiestramientoModule { }
