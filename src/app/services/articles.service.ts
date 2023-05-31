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
      sections: ['Como elegir la raza adecuada', 'Salud', 'Adiestramiento', 'Consejos para viajes', 'Longitud: +1500 palabras'],
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
  ])

  constructor() {
    let date = new Date();
    let dateString = date.toLocaleString();
    console.log(dateString);
  }
}
