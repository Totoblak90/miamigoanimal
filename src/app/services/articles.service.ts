import { Injectable, signal } from '@angular/core';
import { Article } from '../interfaces/articles.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  articlesDB = signal<Article[]>([
    {
      url: 'adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal',
      categories: ['Gatos'],
      'card-heading': 'Adopción',
      sections: ['Beneficios', '¿Cómo?', 'Pasos', 'Requisitos', 'Longitud: +1500 palabras'],
      destacado: true,
      creation: '31/5/2023, 14:53:18',
      title: 'Adopta a los gatitos más tiernos y juguetones. Encuentra tu compañero felino ideal',
    },
    {
      url: 'conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada',
      categories: ['Perros'],
      'card-heading': 'Razas populares',
      sections: ['Para compañía', 'Para familias', 'Para pisos', 'De obediencia', 'Longitud: +1500 palabras'],
      destacado: true,
      creation: '31/5/2023, 16:21:18',
      title: 'Conoce las mejores razas de perros. Guía completa y actualizada',
    }
  ])

  constructor() {
    let date = new Date();
    let dateString = date.toLocaleString();
    console.log(dateString);
  }
}
