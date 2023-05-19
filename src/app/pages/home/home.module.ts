import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { HighlitedArticlesComponent } from './highlited-articles/highlited-articles.component';
import { UiModule } from 'src/app/ui/ui.module';
import { CatsAndDogsPresentationComponent } from './cats-and-dogs-presentation/cats-and-dogs-presentation.component';
import { OtherCategoriesComponent } from './other-categories/other-categories.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


@NgModule({
  declarations: [HomeComponent, HighlitedArticlesComponent, CatsAndDogsPresentationComponent, OtherCategoriesComponent, TestimonialsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    UiModule
  ]
})
export class HomeModule { }
