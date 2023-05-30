import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateTempPipe } from './translate-temp.pipe';



@NgModule({
  declarations: [
    TranslateTempPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TranslateTempPipe
  ]
})
export class PipesModule { }
