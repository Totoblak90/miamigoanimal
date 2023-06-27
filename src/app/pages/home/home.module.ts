import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CatsAndDogsPresentationComponent } from './cats-and-dogs-presentation/cats-and-dogs-presentation.component';
import { OtherCategoriesComponent } from './other-categories/other-categories.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { CalculadoraDeRacionesComponent } from 'src/app/components/calculadora-de-raciones/calculadora-de-raciones.component';
import { ClippedSectionWithBgImgComponent } from 'src/app/components/clipped-section-with-bg-img/clipped-section-with-bg-img.component';
import { SimpleBoxComponent } from 'src/app/components/simple-box/simple-box.component';
import { HighlitedArticlesSectionComponent } from 'src/app/components/highlited-articles-section/highlited-articles-section.component';
import { RecentArticlesSectionComponent } from 'src/app/components/recent-articles-section/recent-articles-section.component';
import { TestimonialCardComponent } from 'src/app/components/testimonial-card/testimonial-card.component';
import { BgVideoComponent } from 'src/app/components/bg-video/bg-video.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [
    HomeComponent,
    CatsAndDogsPresentationComponent,
    OtherCategoriesComponent,
    TestimonialsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DirectivesModule,
    HeaderComponent,
    CalculadoraDeRacionesComponent,
    ClippedSectionWithBgImgComponent,
    SimpleBoxComponent,
    HighlitedArticlesSectionComponent,
    RecentArticlesSectionComponent,
    TestimonialCardComponent,
    BgVideoComponent
  ],
})
export class HomeModule {}
