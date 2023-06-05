import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SimpleBoxComponent } from './simple-box/simple-box.component';
import { BgVideoComponent } from './bg-video/bg-video.component';
import { ClippedSectionWithBgImgComponent } from './clipped-section-with-bg-img/clipped-section-with-bg-img.component';
import { FlippingCardComponent } from './flipping-card/flipping-card.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { PetCardComponent } from './pet-card/pet-card.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PipesModule } from '../pipes/pipes.module';
import { BgImageCardComponent } from './bg-image-card/bg-image-card.component';
import { PopupDisclaimerComponent } from './popup-disclaimer/popup-disclaimer.component';
import { AccordionComponent } from './accordion/accordion.component';
import { IframeCardComponent } from './iframe-card/iframe-card.component';
import { RecentArticleCardComponent } from './recent-article-card/recent-article-card.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { LastArticlesComponent } from './recent-articles-list/recent-articles-list.component';
import { IndexComponent } from './index/index.component';
import { ArticleSkeletonComponent } from './article-skeleton/article-skeleton.component';
import { RecentArticlesSectionComponent } from './recent-articles-section/recent-articles-section.component';
import { HighlitedArticlesSectionComponent } from './highlited-articles-section/highlited-articles-section.component';
import { HighlitedArticlesPostsComponent } from './highlited-articles-posts/highlited-articles-posts.component';
import { PreguntasFrecuentesSectionComponent } from './preguntas-frecuentes-section/preguntas-frecuentes-section.component';
import { ContactFormComponent } from './contact-form/contact-form.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PopupDisclaimerComponent,
    NavigationComponent,
    SimpleBoxComponent,
    BgVideoComponent,
    ClippedSectionWithBgImgComponent,
    FlippingCardComponent,
    TestimonialCardComponent,
    PetCardComponent,
    SpinnerComponent,
    BgImageCardComponent,
    AccordionComponent,
    IframeCardComponent,
    RecentArticleCardComponent,
    BuscadorComponent,
    SocialIconsComponent,
    HighlitedArticlesPostsComponent,
    LastArticlesComponent,
    IndexComponent,
    ArticleSkeletonComponent,
    RecentArticlesSectionComponent,
    HighlitedArticlesSectionComponent,
    PreguntasFrecuentesSectionComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PopupDisclaimerComponent,
    NavigationComponent,
    SimpleBoxComponent,
    BgVideoComponent,
    ClippedSectionWithBgImgComponent,
    FlippingCardComponent,
    TestimonialCardComponent,
    PetCardComponent,
    SpinnerComponent,
    BgImageCardComponent,
    AccordionComponent,
    IframeCardComponent,
    RecentArticleCardComponent,
    BuscadorComponent,
    SocialIconsComponent,
    HighlitedArticlesPostsComponent,
    LastArticlesComponent,
    IndexComponent,
    ArticleSkeletonComponent,
    RecentArticlesSectionComponent,
    HighlitedArticlesSectionComponent,
    PreguntasFrecuentesSectionComponent,
    ContactFormComponent
  ]
})
export class ComponentsModule { }
