import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateTempPipe } from './translate-temp.pipe';
import { SafeUrlPipe } from './safe-url.pipe';



@NgModule({
  declarations: [
    TranslateTempPipe,
    SafeUrlPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TranslateTempPipe,
    SafeUrlPipe
  ]
})
export class PipesModule { }
