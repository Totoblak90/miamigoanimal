import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellRenderDirective } from './app-shell-render.directive';

@NgModule({
  declarations: [AppShellRenderDirective],
  imports: [CommonModule],
  exports: [AppShellRenderDirective],
})
export class DirectivesModule {}
