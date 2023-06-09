import { Injectable, signal } from '@angular/core';
import { Article } from '../interfaces/articles.interface';

/**
 De este artículo que te estoy pasando creame una lista en formato de array de javascript de 5 palabras que puedas extraer sobre lo más importante del texto
 pensá que esta lista va incluída en una card que tiene como fin llamar la atención del usuario para que lea el artículo completo, en esta lista
 no pueden incluírse las palabras "Gato", "Gatos", "Perro", "Perros", "Salud", "Alimentación", "Adiestramiento" y cualquier otra de esas familias de palabra.
 También dame otro array de palabras que se puedan poner como términos de búsqueda de un buscador.
 Por otro lado, de las 5 categorías siguientes ("Gatos" | "Perros" | "Salud" | "Adiestramiento" | "Alimentacion"),
 armame otro array con las categorías en las que lo englobarías, podés elegir más de una.
 El artículo es el siguiente:
 -----------------------------
 */

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  articlesDB = signal<Article[]>([
    // Se solicitó indexación
    {
      url: 'adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal',
      categories: ['Gatos', 'Adiestramiento'],
      'card-heading': 'Adopción',
      sections: ['Adopción', 'Beneficios', '¿Cómo?', 'Pasos', 'Requisitos'],
      destacado: true,
      creation: '31/5/2023, 14:53:18',
      title:
        'Adopta a los gatitos más tiernos y juguetones. Encuentra tu compañero felino ideal',
      buscador: [
        'Adoptar',
        'Gatito',
        'Protectora',
        'Madrid',
        'Refugio',
        'Beneficios',
        'Costos',
      ],
    },
    // Se solicitó indexación
    {
      url: 'conoce-las-mejores-razas-de-perros-guia-completa-y-actualizada',
      categories: ['Perros'],
      'card-heading': 'Razas populares',
      sections: [
        'Razas',
        'Para compañía',
        'Para familias',
        'Para pisos',
        'De obediencia',
      ],
      destacado: true,
      creation: '31/5/2023, 16:21:18',
      title: 'Conoce las mejores razas de perros. Guía completa y actualizada',
      buscador: [
        'Raza ideal',
        'Elección de perro',
        'Perros guía',
        'Tamaño de perro',
        'Perros para niños',
      ],
    },
    // Se solicitó indexación
    {
      url: 'descubre-los-mejores-cuidados-para-tus-perritos',
      categories: ['Perros', 'Salud', 'Adiestramiento'],
      'card-heading': 'Cachorros, Variedad',
      sections: ['cachorros', 'dieta equilibrada', 'higiene', 'socialización'],
      destacado: true,
      creation: '31/5/2023, 15:31:18',
      title: 'Cachorros: Descubre los mejores cuidados para tus perritos',
      buscador: [
        'cuidado de cachorros',
        'alimentación de cachorros',
        'rutina de higiene para cachorros',
        'ejercicio para cachorros',
        'socialización de cachorros',
        'revisiones veterinarias para cachorros',
        'amor y atención para cachorros',
        'productos para cachorros',
        'aseo de cachorros',
        'entorno adecuado para cachorros',
      ],
    },
    // Se solicitó indexación
    {
      url: 'perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas',
      categories: ['Perros', 'Adiestramiento', 'Alimentacion'],
      'card-heading': 'Variedad',
      sections: ['Pug', 'Chow Chow', 'Samoyedo', 'Shar Pei', 'Pomerania'],
      destacado: true,
      creation: '31/5/2023, 18:00:00',
      title:
        'Perritas adorables: Todo lo que necesitas saber sobre estas tiernas mascotas',
      buscador: [
        'Cachorros adorables',
        'Razas de perros',
        'Cuidado de perros',
        'Pug',
        'Chow Chow',
        'Samoyedo',
        'Shar Pei',
        'Bichón Maltés',
        'Pomerania',
        'Alimentación de perros',
      ],
    },
    // Se solicitó indexación
    {
      url: 'todo-sobre-perros-informacion-curiosidades-y-consejos-utiles-para-cuidar-a-tu-mejor-amigo',
      categories: ['Perros', 'Salud', 'Adiestramiento'],
      'card-heading': 'Consejos útiles',
      sections: ['Raza', 'Ejercicio', 'Higiene', 'Viajar', 'Enfermedades'],
      destacado: true,
      creation: '31/5/2023, 18:23:00',
      title:
        'Perros: Información curiosidades y consejos útiles para cuidar a tu mejor amigo',
      buscador: [
        'Raza canina',
        'Ejercicio canino',
        'Higiene canino',
        'Viaje con perro',
        'Enfermedades caninas',
        'Socialización de perros',
        'Tiempo de juego para perros',
        'Cuidados básicos del perro',
        'Adiestramiento canino',
        'Salud canina',
      ],
    },
    // Se solicitó indexación
    {
      url: 'todo-lo-que-necesitas-saber-sobre-gatos-razas-cuidados-y-curiosidades',
      categories: ['Gatos'],
      'card-heading': 'Historia, Salud',
      sections: [
        'Historia',
        'Razas',
        'Características',
        'Interacción',
        'Cuidado',
      ],
      destacado: true,
      creation: '31/5/2023, 18:40:18',
      title: 'Gatos: Razas, cuidados, curiosidades y más',
      buscador: [
        'Razas gato',
        'Cuidado gato',
        'Historia felina',
        'Interacción gato',
        'Características gato',
      ],
    },
    {
      url: 'bulldog-frances-todo-lo-que-necesitas-saber-sobre-esta-adorable-raza-de-perros',
      categories: ['Perros', 'Salud', 'Adiestramiento'],
      'card-heading': 'Bulldog francés',
      sections: [
        'Salud',
        'Historia',
        'Cuidados',
        'Personalidad',
        'Adiestramiento',
      ],
      destacado: false,
      creation: '31/5/2023, 21:17:00',
      title: 'Bulldog Francés: Todo sobre esta adorable raza de perros',
      buscador: ['Raza', 'Características', 'Cachorros', 'Ejercicio', 'Aseo'],
    },
    {
      url: 'bulldog-ingles-caracteristicas-cuidados-y-curiosidades-de-esta-raza-iconica',
      categories: ['Perros', 'Salud', 'Adiestramiento'],
      'card-heading': 'Bulldog Inglés',
      sections: [
        'Historia',
        'Temperamento',
        'Curiosidades',
        'Cuidados',
        'Salud',
      ],
      destacado: false,
      creation: '31/5/2023, 23:06:00',
      title:
        'Bulldog Inglés: Características y curiosidades de esta raza icónica',
      buscador: [
        'Bulldog Inglés',
        'Raza',
        'Características',
        'Cuidados Bulldog',
        'Historia Bulldog',
        'Curiosidades Bulldog',
        'Temperamento Bulldog',
        'Bulldog Físico',
        'Salud Bulldog',
      ],
    },
    {
      url: 'el-bulldog-ingles-caracteristicas-cuidados-y-curiosidades',
      categories: ['Perros', 'Salud', 'Adiestramiento'],
      'card-heading': 'Bulldog Inglés',
      sections: [
        'Características',
        'Cuidados',
        'Curiosidades',
        'Costo',
        'Consejos al propietario',
      ],
      destacado: false,
      creation: '31/5/2023, 23:22:00',
      title: 'Bulldog Inglés: Características, cuidados y curiosidades',
      buscador: [
        'Bulldog Inglés',
        'Raza',
        'Ejercicio',
        'Nutrición',
        'Problemas de salud',
        'Aseo',
        'Personalidad',
        'Cuidados especiales',
        'Costos',
      ],
    },
    // Se solicitó indexación
    {
      url: 'conoce-todo-acerca-del-perro-san-bernardo',
      categories: ['Perros', 'Salud'],
      'card-heading': 'San Bernardo',
      sections: [
        'Características',
        'Cuidados',
        'Compromiso',
        'Gigante Amable',
        'Historia',
      ],
      destacado: false,
      creation: '05/06/2023, 10:20:00',
      title: '🐶 Conoce Todo Acerca del Perro San Bernardo',
      buscador: [
        'Raza',
        'San Bernardo',
        'Cuidados',
        'Características',
        'Historia',
        'Tamaño',
        'Peso',
        'Temperamento',
        'Mascota',
        'Familiar',
        'Pelo',
        'Sociable',
      ],
    },
    // Se solicitó indexación
    {
      url: 'descubre-el-boyero-de-berna',
      categories: ['Perros', 'Alimentacion'],
      'card-heading': 'Boyero de Berna',
      sections: [
        'Características',
        'Alimentación',
        'Historia',
        'Cuidados',
        'Temperamento',
      ],
      destacado: false,
      creation: '05/06/2023, 10:39:00',
      title: '¡Descubre el Boyero de Berna! 🐕',
      buscador: [
        'Raza',
        'Historia',
        'Cuidado',
        'Temperamento',
        'Ejercicio',
        'Boyero de Berna',
      ],
    },
    {
      url: 'pastor-aleman-caracteristicas-cuidados-y-curiosidades',
      categories: ['Perros', 'Salud', 'Adiestramiento', 'Alimentacion'],
      'card-heading': 'Pastor Alemán',
      sections: [
        'Personalidad',
        'Historia',
        'Características',
        'Cuidados',
        'Curiosidades',
      ],
      destacado: false,
      creation: '05/06/2023, 10:55:00',
      title: 'Pastor Alemán: Características, Cuidados y Curiosidades 🐶 ',
      buscador: [
        'Pastor Alemán',
        'Raza canina',
        'Características físicas',
        'Personalidad',
        'Cuidados',
        'Adiestramiento',
        'Salud',
      ],
    },
    {
      url: 'perro-salchicha-caracteristicas-cuidados-y-curiosidades',
      categories: ['Perros', 'Salud', 'Alimentacion'],
      'card-heading': 'Perro Salchicha',
      sections: [
        'Historia',
        'Cuidados',
        'Personalidad',
        'Enfermedades',
        'Famosos',
      ],
      destacado: false,
      creation: '05/06/2023, 16:35:00',
      title: 'Perro Salchicha: Características, Cuidados y Curiosidades 🐶',
      buscador: [
        'dachsund',
        'teckel',
        'Raza',
        'Pelo liso',
        'Pelo duro',
        'Pelo largo',
        'Obesidad',
        'Ejercicio',
        'Nutrición',
        'Rasgos',
        'Caza de tejones',
        'Guerras mundiales',
        'Enfermedades comunes',
      ],
    },
    {
      url: 'descubre-todo-sobre-los-gatos-persa-la-raza-mas-popular',
      categories: ['Gatos', 'Salud'],
      'card-heading': 'Gato Persa',
      sections: [
        'Salud',
        'Historia',
        'Características',
        'Cuidados',
        'Problemas comunes',
      ],
      destacado: true,
      creation: '05/06/2023, 18:27:00',
      title: 'Descubre Todo Sobre Los Gatos Persas, ¡La Raza Más Popular! 🐱',
      buscador: [
        'Raza persa',
        'Origen persa',
        'Características físicas persas',
        'Cuidado gato persa',
        'Salud gato persa',
        'Gatos persas famosos',
      ],
    },
  ]);

  constructor() {}

  filterArticleList(article: Article, term: string) {
    return (
      article.title.toLowerCase().includes(term.toLowerCase()) ||
      article.sections.join(' ').toLowerCase().includes(term.toLowerCase()) ||
      article.categories.join(' ').toLowerCase().includes(term.toLowerCase()) ||
      article['card-heading'].toLowerCase().includes(term.toLowerCase()) ||
      article.buscador.join(' ').toLowerCase().includes(term.toLowerCase())
    );
  }
}
