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



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PopupComponent,
    NavigationComponent,
    SimpleBoxComponent,
    BgVideoComponent,
    ClippedSectionWithBgImgComponent,
    FlippingCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PopupComponent,
    NavigationComponent,
    SimpleBoxComponent,
    BgVideoComponent,
    ClippedSectionWithBgImgComponent,
    FlippingCardComponent
  ]
})
export class ComponentsModule { }
