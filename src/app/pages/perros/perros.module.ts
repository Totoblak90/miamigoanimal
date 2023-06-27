import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerrosRoutingModule } from './perros-routing.module';
import { InfoComponent } from './info/info.component';
import { PerrosComponent } from './perros.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IndexComponent } from 'src/app/components/index/index.component';
import { HighlitedArticlesSectionComponent } from 'src/app/components/highlited-articles-section/highlited-articles-section.component';
import { RecentArticlesSectionComponent } from 'src/app/components/recent-articles-section/recent-articles-section.component';
import { FlippingCardComponent } from 'src/app/components/flipping-card/flipping-card.component';


@NgModule({
  declarations: [
    InfoComponent,
    PerrosComponent,
    DogListComponent
  ],
  imports: [
    CommonModule,
    PerrosRoutingModule,
    ReactiveFormsModule,
    HeaderComponent,
    IndexComponent,
    HighlitedArticlesSectionComponent,
    RecentArticlesSectionComponent,
    FlippingCardComponent,
  ],
  exports: [
    InfoComponent,
  ]
})
export class PerrosModule { }
