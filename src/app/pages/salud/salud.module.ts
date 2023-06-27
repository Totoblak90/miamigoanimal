import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaludRoutingModule } from './salud-routing.module';
import { SaludComponent } from './salud.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IndexComponent } from 'src/app/components/index/index.component';
import { ClippedSectionWithBgImgComponent } from 'src/app/components/clipped-section-with-bg-img/clipped-section-with-bg-img.component';
import { PreguntasFrecuentesSectionComponent } from 'src/app/components/preguntas-frecuentes-section/preguntas-frecuentes-section.component';
import { IframeCardComponent } from 'src/app/components/iframe-card/iframe-card.component';
import { BgImageCardComponent } from 'src/app/components/bg-image-card/bg-image-card.component';
import { HighlitedArticlesSectionComponent } from 'src/app/components/highlited-articles-section/highlited-articles-section.component';
import { RecentArticlesSectionComponent } from 'src/app/components/recent-articles-section/recent-articles-section.component';


@NgModule({
  declarations: [
    SaludComponent,
  ],
  imports: [
    CommonModule,
    SaludRoutingModule,
    HeaderComponent,
    IndexComponent,
    ClippedSectionWithBgImgComponent,
    PreguntasFrecuentesSectionComponent,
    IframeCardComponent,
    BgImageCardComponent,
    HighlitedArticlesSectionComponent,
    RecentArticlesSectionComponent
  ]
})
export class SaludModule { }
