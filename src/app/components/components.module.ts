import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PopupComponent } from './popup/popup.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SimpleBoxComponent } from './simple-box/simple-box.component';
import { BgVideoComponent } from './bg-video/bg-video.component';
import { ClippedSectionWithBgImgComponent } from './clipped-section-with-bg-img/clipped-section-with-bg-img.component';
import { FlippingCardComponent } from './flipping-card/flipping-card.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { PetCardComponent } from './pet-card/pet-card.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PopupComponent,
    NavigationComponent,
    SimpleBoxComponent,
    BgVideoComponent,
    ClippedSectionWithBgImgComponent,
    FlippingCardComponent,
    TestimonialCardComponent,
    PetCardComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PopupComponent,
    NavigationComponent,
    SimpleBoxComponent,
    BgVideoComponent,
    ClippedSectionWithBgImgComponent,
    FlippingCardComponent,
    TestimonialCardComponent,
    PetCardComponent,
    SpinnerComponent
  ]
})
export class ComponentsModule { }
