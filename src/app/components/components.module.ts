import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PopupComponent } from './popup/popup.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PopupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PopupComponent
  ]
})
export class ComponentsModule { }
