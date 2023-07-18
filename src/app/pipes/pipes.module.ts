import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './safe-url.pipe';
import { CleanImageUrlPipe } from './clean-image-url.pipe';



@NgModule({
  declarations: [
    SafeUrlPipe,
    CleanImageUrlPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SafeUrlPipe,
    CleanImageUrlPipe
  ]
})
export class PipesModule { }
