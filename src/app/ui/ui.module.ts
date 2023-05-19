import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { SimpleBoxComponent } from './simple-box/simple-box.component';
import { BgVideoComponent } from './bg-video/bg-video.component';
import { ClippedSectionWithBgImgComponent } from './clipped-section-with-bg-img/clipped-section-with-bg-img.component';



@NgModule({
  declarations: [
    NavigationComponent,
    SimpleBoxComponent,
    BgVideoComponent,
    ClippedSectionWithBgImgComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ NavigationComponent, SimpleBoxComponent, BgVideoComponent, ClippedSectionWithBgImgComponent ]
})
export class UiModule { }
