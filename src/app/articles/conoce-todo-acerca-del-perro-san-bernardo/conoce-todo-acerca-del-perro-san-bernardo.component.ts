import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-conoce-todo-acerca-del-perro-san-bernardo',
  templateUrl: './conoce-todo-acerca-del-perro-san-bernardo.component.html',
  styleUrls: ['./conoce-todo-acerca-del-perro-san-bernardo.component.scss']
})
export class ConoceTodoAcercaDelPerroSanBernardoComponent {

  title = '🐶 Conoce Todo Acerca del Perro San Bernardo - MiAmigoAnimal.com'
  description = '¡Descubre todo lo que necesitas saber sobre el San Bernardo! Historiá, características y cuidados. ¡Conoce más aquí en MiAmigoAnimal.com!'

  get titleList() {
    if (isPlatformBrowser(this.platformId)) {
      return Array.from(this.document.getElementsByTagName('h2'))
    }
    return [];
  }

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.meta.setMetaTags(this.title, this.description)
    this.navigationService.navigationBg.set('dog');
  }

}
