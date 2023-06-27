import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlimentacionRoutingModule } from './alimentacion-routing.module';
import { AlimentacionComponent } from './alimentacion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IndexComponent } from 'src/app/components/index/index.component';
import { CalculadoraDeRacionesComponent } from 'src/app/components/calculadora-de-raciones/calculadora-de-raciones.component';
import { IframeCardComponent } from 'src/app/components/iframe-card/iframe-card.component';
import { BgVideoComponent } from 'src/app/components/bg-video/bg-video.component';
import { BgImageCardComponent } from 'src/app/components/bg-image-card/bg-image-card.component';
import { HighlitedArticlesSectionComponent } from '../../components/highlited-articles-section/highlited-articles-section.component';
import { RecentArticlesSectionComponent } from 'src/app/components/recent-articles-section/recent-articles-section.component';


@NgModule({
  declarations: [AlimentacionComponent],
  imports: [
    CommonModule,
    AlimentacionRoutingModule,
    ReactiveFormsModule,
    HeaderComponent,
    IndexComponent,
    CalculadoraDeRacionesComponent,
    IframeCardComponent,
    BgVideoComponent,
    BgImageCardComponent,
    HighlitedArticlesSectionComponent,
    RecentArticlesSectionComponent
  ]
})
export class AlimentacionModule { }
