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
    },
    {
      url: 'descubre-los-mejores-cuidados-para-tus-perritos',
      categories: ['Perros'],
      'card-heading': 'Cachorros, Variedad',
      sections: ['Alimentación', 'Ejercicio', 'Salud', 'Higiene', 'Longitud: +1500 palabras'],
      destacado: true,
      creation: '31/5/2023, 15:31:18',
      title: 'Cachorros: Descubre los mejores cuidados para tus perritos',
    },
    {
      url: 'perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas',
      categories: ['Perros'],
      'card-heading': 'Variedad',
      sections: ['Razas populares', 'Consejos perro nuevo', 'Pug Carlino', 'Longitud: +1500 palabras'],
      destacado: true,
      creation: '31/5/2023, 18:00:00',
      title: 'Conoce las mejores razas de perros. Guía completa y actualizada',
    },
    {
      url: 'todo-sobre-perros-informacion-curiosidades-y-consejos-utiles-para-cuidar-a-tu-mejor-amigo',
      categories: ['Perros'],
      'card-heading': 'Consejos útiles',
      sections: ['Raza adecuada', 'Salud', 'Adiestramiento', 'Viajes', 'Longitud: +1500 palabras'],
      destacado: true,
      creation: '31/5/2023, 18:23:00',
      title: 'Perros: Información curiosidades y consejos útiles para cuidar a tu mejor amigo',
    },
    {
      url: 'todo-lo-que-necesitas-saber-sobre-gatos-razas-cuidados-y-curiosidades',
      categories: ['Gatos'],
      'card-heading': 'Historia, Salud',
      sections: ['Historia', 'Razas', 'Salud', 'Alimentación', 'Longitud: +1500 palabras'],
      destacado: true,
      creation: '31/5/2023, 18:40:18',
      title: 'Gatos: Razas, cuidados, curiosidades y más',
    },
    {
      url: 'bulldog-frances-todo-lo-que-necesitas-saber-sobre-esta-adorable-raza-de-perros',
      categories: ['Perros'],
      'card-heading': 'Bulldog francés',
      sections: ['Mantenimiento', 'Personalidad', 'Salud', 'Longitud: +1500 palabras'],
      destacado: false,
      creation: '31/5/2023, 21:17:00',
      title: 'Bulldog Francés: Todo sobre esta adorable raza de perros',
    },
    {
      url: 'bulldog-ingles-caracteristicas-cuidados-y-curiosidades-de-esta-raza-iconica',
      categories: ['Perros'],
      'card-heading': 'Bulldog Inglés',
      sections: ['Historia', 'Higiene', 'Salud', 'Curiosidades', 'Longitud: -1500 palabras'],
      destacado: false,
      creation: '31/5/2023, 23:06:00',
      title: 'Bulldog Inglés: Características y curiosidades de esta raza icónica',
    },
    {
      url: 'el-bulldog-ingles-caracteristicas-cuidados-y-curiosidades',
      categories: ['Perros'],
      'card-heading': 'Bulldog Inglés',
      sections: ['Características', 'Cuidados', 'Curiosidades', 'Costo', 'Longitud: -1500 palabras'],
      destacado: false,
      creation: '31/5/2023, 23:22:00',
      title: 'Bulldog Inglés: Características, cuidados y curiosidades',
    },
  ])

  constructor() {
    let date = new Date();
    let dateString = date.toLocaleString();
    console.log(dateString);
  }

  filterArticleList(article: Article, term: string) {
    return  article.title.toLowerCase().includes(term.toLowerCase()) ||
            article.sections.join(' ').toLowerCase().includes(term.toLowerCase()) ||
            article.categories.join(' ').toLowerCase().includes(term.toLowerCase()) ||
            article['card-heading'].toLowerCase().includes(term.toLowerCase())
  }
}
