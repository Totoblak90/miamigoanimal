import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellRenderDirective } from './app-shell-render.directive';
import { LazyLoadBgImageDirective } from './lazy-load-bg-image.directive';
import { LazyLoadCssClassDirective } from './lazy-load-css-class.directive';
import { LazyLoadVideoDirective } from './lazy-load-video.directive';

@NgModule({
  declarations: [AppShellRenderDirective, LazyLoadBgImageDirective, LazyLoadCssClassDirective, LazyLoadVideoDirective],
  imports: [CommonModule],
  exports: [AppShellRenderDirective, LazyLoadBgImageDirective, LazyLoadCssClassDirective, LazyLoadVideoDirective],
})
export class DirectivesModule {}
