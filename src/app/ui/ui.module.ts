import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { SimpleBoxComponent } from './simple-box/simple-box.component';



@NgModule({
  declarations: [
    NavigationComponent,
    SimpleBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ NavigationComponent, SimpleBoxComponent ]
})
export class UiModule { }
