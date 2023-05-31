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
  ],
  imports: [
    CommonModule,
    PipesModule
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
  ]
})
export class ComponentsModule { }
