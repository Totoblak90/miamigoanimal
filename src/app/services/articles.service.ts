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
      sections: ['Beneficios', '¿Cómo?', 'Pasos', 'Requisitos', 'Longitud: >1500 palabras'],
      destacado: true,
      creation: '31/5/2023, 14:53:18',
      title: 'Adopta a los gatitos más tiernos y juguetones. Encuentra tu compañero felino ideal',
    },
    {
      url: 'conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada',
      categories: ['Perros'],
      'card-heading': 'Razas populares',
      sections: ['Para compañía', 'Para familias', 'Para pisos', 'De obediencia', 'Longitud: >1500 palabras'],
      destacado: true,
      creation: '31/5/2023, 16:21:18',
      title: 'Conoce las mejores razas de perros. Guía completa y actualizada',
    },
    {
      url: 'descubre-los-mejores-cuidados-para-tus-perritos',
      categories: ['Perros', 'Salud', 'Adiestramiento'],
      'card-heading': 'Cachorros, Variedad',
      sections: ['Alimentación', 'Ejercicio', 'Salud', 'Higiene', 'Longitud: >1500 palabras'],
      destacado: true,
      creation: '31/5/2023, 15:31:18',
      title: 'Cachorros: Descubre los mejores cuidados para tus perritos',
    },
    {
      url: 'perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas',
      categories: ['Perros'],
      'card-heading': 'Variedad',
      sections: ['Razas populares', 'Consejos perro nuevo', 'Pug Carlino', 'Longitud: >1500 palabras'],
      destacado: true,
      creation: '31/5/2023, 18:00:00',
      title: 'Conoce las mejores razas de perros. Guía completa y actualizada',
    },
    {
      url: 'todo-sobre-perros-informacion-curiosidades-y-consejos-utiles-para-cuidar-a-tu-mejor-amigo',
      categories: ['Perros', 'Salud', 'Adiestramiento'],
      'card-heading': 'Consejos útiles',
      sections: ['Raza adecuada', 'Salud', 'Adiestramiento', 'Viajes', 'Longitud: >1500 palabras'],
      destacado: true,
      creation: '31/5/2023, 18:23:00',
      title: 'Perros: Información curiosidades y consejos útiles para cuidar a tu mejor amigo',
    },
    {
      url: 'todo-lo-que-necesitas-saber-sobre-gatos-razas-cuidados-y-curiosidades',
      categories: ['Gatos', 'Salud', 'Alimentacion'],
      'card-heading': 'Historia, Salud',
      sections: ['Historia', 'Razas', 'Salud', 'Alimentación', 'Longitud: >1500 palabras'],
      destacado: true,
      creation: '31/5/2023, 18:40:18',
      title: 'Gatos: Razas, cuidados, curiosidades y más',
    },
    {
      url: 'bulldog-frances-todo-lo-que-necesitas-saber-sobre-esta-adorable-raza-de-perros',
      categories: ['Perros', 'Salud'],
      'card-heading': 'Bulldog francés',
      sections: ['Mantenimiento', 'Personalidad', 'Salud', 'Longitud: >1500 palabras'],
      destacado: false,
      creation: '31/5/2023, 21:17:00',
      title: 'Bulldog Francés: Todo sobre esta adorable raza de perros',
    },
    {
      url: 'bulldog-ingles-caracteristicas-cuidados-y-curiosidades-de-esta-raza-iconica',
      categories: ['Perros', 'Salud', 'Adiestramiento'],
      'card-heading': 'Bulldog Inglés',
      sections: ['Historia', 'Higiene', 'Salud', 'Curiosidades', 'Longitud: <1500 palabras'],
      destacado: false,
      creation: '31/5/2023, 23:06:00',
      title: 'Bulldog Inglés: Características y curiosidades de esta raza icónica',
    },
    {
      url: 'el-bulldog-ingles-caracteristicas-cuidados-y-curiosidades',
      categories: ['Perros', 'Salud', 'Adiestramiento'],
      'card-heading': 'Bulldog Inglés',
      sections: ['Características', 'Cuidados', 'Curiosidades', 'Costo', 'Longitud: >1500 palabras'],
      destacado: false,
      creation: '31/5/2023, 23:22:00',
      title: 'Bulldog Inglés: Características, cuidados y curiosidades',
    },
    {
      url: 'conoce-todo-acerca-del-perro-san-bernardo',
      categories: ['Perros', 'Salud'],
      'card-heading': 'San Bernardo',
      sections: ['Características', 'Historia', 'Cuidados', 'Longitud: <1000 palabras'],
      destacado: false,
      creation: '05/06/2023, 10:20:00',
      title: '🐶 Conoce Todo Acerca del Perro San Bernardo',
    },
    {
      url: 'descubre-el-boyero-de-berna',
      categories: ['Perros', 'Alimentacion'],
      'card-heading': 'Boyero de Berna',
      sections: ['Características', 'Historia', 'Alimentación', 'Temperamento', 'Longitud: <1000 palabras'],
      destacado: false,
      creation: '05/06/2023, 10:39:00',
      title: '¡Descubre el Boyero de Berna! 🐕',
    },
    {
      url: 'pastor-aleman-caracteristicas-cuidados-y-curiosidades',
      categories: ['Perros', 'Salud', 'Adiestramiento', 'Alimentacion'],
      'card-heading': 'Pastor Alemán',
      sections: ['Salud', 'Alimentación', 'Adiestramiento', 'Personalidad', 'Longitud: >1500 palabras'],
      destacado: false,
      creation: '05/06/2023, 10:55:00',
      title: 'Pastor Alemán: Características, Cuidados y Curiosidades 🐶 ',
    },
  ])

  constructor() {}

  filterArticleList(article: Article, term: string) {
    return  article.title.toLowerCase().includes(term.toLowerCase()) ||
            article.sections.join(' ').toLowerCase().includes(term.toLowerCase()) ||
            article.categories.join(' ').toLowerCase().includes(term.toLowerCase()) ||
            article['card-heading'].toLowerCase().includes(term.toLowerCase())
  }
}
