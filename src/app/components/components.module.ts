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
import { CalculadoraDeRacionesComponent } from './calculadora-de-raciones/calculadora-de-raciones.component';
import { PopupFoodRationsComponent } from './popup-food-rations/popup-food-rations.component';
import { RouterModule } from '@angular/router';
import { GoUpComponent } from './go-up/go-up.component';
import { ExpandableTextComponent } from './expandable-text/expandable-text.component';
import { DirectivesModule } from '../directives/directives.module';



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
    ContactFormComponent,
    CalculadoraDeRacionesComponent,
    PopupFoodRationsComponent,
    GoUpComponent,
    ExpandableTextComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    ReactiveFormsModule,
    RouterModule,
    DirectivesModule
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
    ContactFormComponent,
    CalculadoraDeRacionesComponent,
    PopupFoodRationsComponent,
    GoUpComponent,
    ExpandableTextComponent
  ]
})
export class ComponentsModule { }
