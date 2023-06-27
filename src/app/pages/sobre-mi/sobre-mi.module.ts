import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreMiRoutingModule } from './sobre-mi-routing.module';
import { SobreMiComponent } from './sobre-mi.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { BgImageCardComponent } from 'src/app/components/bg-image-card/bg-image-card.component';


@NgModule({
  declarations: [SobreMiComponent],
  imports: [
    CommonModule,
    SobreMiRoutingModule,
    HeaderComponent,
    BgImageCardComponent,
    
  ]
})
export class SobreMiModule { }
