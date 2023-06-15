import { Injectable, signal } from '@angular/core';
import { Article } from '../interfaces/articles.interface';

/**
-----------------------------------------------------------------------------------------------------------------------------------------------------------
PROMPT PARA ARTÍCULOS

Hola! Quiero que me ayudes a recapitular información importante de los diferentes artículos de mi blog!
Esto es lo que hay que considerar para todos los artículos que te pase:

De este artículo que te estoy pasando creame una lista en formato de array de javascript de palabras que puedas extraer sobre lo más importante del texto
pensá que esta lista va incluída en una card que tiene como fin llamar la atención del usuario para que lea el artículo completo, en esta lista
no pueden incluírse las palabras "Gato", "Gatos", "Perro", "Perros", "Salud", "Alimentación", "Adiestramiento" y cualquier otra de esas familias de palabra.
Pueden ser máximo 10 palabras.

También dame otro array de palabras que se puedan poner como términos de búsqueda de un buscador.

Por otro lado, de las 5 categorías siguientes ("Gatos" | "Perros" | "Salud" | "Adiestramiento" | "Alimentacion"),
armame otro array con las categorías en las que lo englobarías, podés elegir más de una.

NO ME DES UN RESÚMEN DEL ARTÍCULO SIMPLEMENTE CUMPLÍ CON LO QUE TE PIDO ARRIBA. RETORNAME LOS ARRAYS QUE TE PIDO Y LISTO.

El artículo es el siguiente:

-----------------------------------------------------------------------------------------------------------------------------------------------------------
 */

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  articlesDB = signal<Article[]>([
    {
      url: 'adopta-a-los-gatitos-mas-tiernos-y-juguetones-encuentra-tu-companero-felino-ideal',
      categories: ['Gatos', 'Adiestramiento'],
      'card-heading': 'Adopción',
      sections: ['Adopción', 'Beneficios', '¿Cómo?', 'Pasos', 'Requisitos'],
      destacado: true,
      creation: '5/31/2023, 14:53:18',
      recent_card_title:
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
      creation: '5/31/2023, 16:21:18',
      recent_card_title: '¡Descubre las mejores razas de perro! 🐶',
      buscador: [
        'Raza ideal',
        'Elección de perro',
        'Perros guía',
        'Tamaño de perro',
        'Perros para niños',
      ],
    },

    {
      url: 'descubre-los-mejores-cuidados-para-tus-perritos',
      categories: ['Perros', 'Salud', 'Adiestramiento'],
      'card-heading': 'Cachorros, Variedad',
      sections: ['cachorros', 'dieta equilibrada', 'higiene', 'socialización'],
      destacado: true,
      creation: '5/31/2023, 15:31:18',
      recent_card_title: 'Cachorros: Descubre los mejores cuidados para tus perritos',
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

    {
      url: 'perritas-adorables-todo-lo-que-necesitas-saber-sobre-estas-tiernas-mascotas',
      categories: ['Perros', 'Adiestramiento', 'Alimentacion'],
      'card-heading': 'Variedad',
      sections: ['Pug', 'Chow Chow', 'Samoyedo', 'Shar Pei', 'Pomerania'],
      destacado: true,
      creation: '5/31/2023, 18:00:00',
      recent_card_title:
        'Todo lo que necesitas saber sobre las tiernas perritas adorables! 🐶',
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

    {
      url: 'todo-sobre-perros-informacion-curiosidades-y-consejos-utiles-para-cuidar-a-tu-mejor-amigo',
      categories: ['Perros', 'Salud', 'Adiestramiento'],
      'card-heading': 'Consejos útiles',
      sections: ['Raza', 'Ejercicio', 'Higiene', 'Viajar', 'Enfermedades'],
      destacado: true,
      creation: '5/31/2023, 18:23:00',
      recent_card_title:
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
      creation: '5/31/2023, 18:40:18',
      recent_card_title: 'Guía completa sobre gatos: Razas, Cuidados, Curiosidades 🐈',
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
      creation: '5/31/2023, 21:17:00',
      recent_card_title: 'Bulldog Francés: Todo sobre esta adorable raza de perros',
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
      creation: '5/31/2023, 23:06:00',
      recent_card_title: 'Bulldog Inglés - ¡Características, Cuidados y Curiosidades! 😍',
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
      creation: '5/31/2023, 23:22:00',
      recent_card_title: 'Bulldog Inglés: Características, Cuidados y Curiosidades 🐶',
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
      creation: '6/5/2023, 10:20:00',
      recent_card_title: '🐶 Conoce Todo Acerca del Perro San Bernardo',
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
      creation: '6/5/2023, 10:39:00',
      recent_card_title: '¡Descubre el Boyero de Berna! 🐕',
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
      creation: '6/5/2023, 10:55:00',
      recent_card_title: 'Pastor Alemán: Características, Cuidados y Curiosidades 🐶 ',
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
      creation: '6/5/2023, 16:35:00',
      recent_card_title: 'Perro Salchicha: Características, Cuidados y Curiosidades 🐶',
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
      creation: '6/5/2023, 18:27:00',
      recent_card_title: 'Descubre Todo Sobre Los Gatos Persas, ¡La Raza Más Popular! 🐱',
      buscador: [
        'Raza persa',
        'Origen persa',
        'Características físicas persas',
        'Cuidado gato persa',
        'Salud gato persa',
        'Gatos persas famosos',
      ],
    },

    {
      url: 'descubre-las-mejores-razas-de-perros-pequenos-guia-completa',
      categories: ['Perros'],
      'card-heading': 'Perros pequeños',
      sections: [
        'Razas',
        'Chihuahua',
        'Caniche',
        'Shih Tzu',
        'Pequeño',
        'Adopción',
        'Estilo de vida',
        'Temperamento',
        'Cuidados',
        'Beneficios',
      ],
      destacado: false,
      creation: '6/14/2023, 11:05:00',
      recent_card_title:
        '¡Descubre las Mejores Razas de Perros Pequeños! 🐶 - Guía Completa',
      buscador: [
        'Razas de perros pequeños',
        'Adoptar perro pequeño',
        'Guía de razas de perros pequeños',
        'Chihuahua',
        'Caniche',
        'Shih Tzu',
        'Cuidados para perros pequeños',
        'Ventajas de tener un perro pequeño',
        'Raza de perro para apartamento',
        'Razas de perros para niños',
      ],
    },

    {
      url: 'gran-danes-caracteroisticas-cuidados-y-curiosidades',
      categories: ['Perros'],
      'card-heading': 'Gran Danés',
      sections: [
        'Aspecto físico',
        'Personalidad',
        'Problemas de salud',
        'Alimentación y nutrición',
        'Pelaje variado',
        'Entrenamiento',
        'Expectativa de vida',
      ],
      destacado: false,
      creation: '6/14/2023, 11:25:00',
      recent_card_title: 'Gran Danés: Características, Cuidados y Curiosidades 🐶',
      buscador: [
        'Gran Danés',
        'Raza de perro',
        'Tamaño grande',
        'Cuidados del Gran Danés',
        'Aspecto físico del Gran Danés',
        'Personalidad del Gran Danés',
        'Problemas de salud comunes del Gran Danés',
        'Necesidades de alimentación y nutrición del Gran Danés',
        'Necesidades de entrenamiento y ejercicio del Gran Danés',
        'Expectativa de vida del Gran Danés',
      ],
    },

    {
      url: 'gato-siames-caracteristicas-cuidados-y-curiosidades',
      categories: ['Gatos'],
      'card-heading': 'Gato Siamés',
      sections: ["Características", "Curiosidades", "Personalidad", "Físico", "Pelaje", "Inteligencia", "Cuidado", "Historia"],
      destacado: false,
      creation: '6/15/2023, 10:05:00',
      recent_card_title: 'Gato Siamés: Características, Cuidados y Curiosidades 🐈',
      buscador: ["Gato siamés", "Raza siamés", "Cuidado gato siamés", "Historia gato siamés", "Personalidad gato siamés", "Características físicas gato siamés", "Curiosidades gato siamés", "Gatos famosos", "Cultura popular", "Pelaje gato siamés"],
    },

    {
      url: 'todo-lo-que-debes-saber-sobre-el-pomerania',
      categories: ['Perros'],
      'card-heading': 'Pomerania',
      sections: ["Personalidad", "Temperamento", "Adopción", "Problemas genéticos", "Aseo", "Historia", "Características", "Ejercicio", "Cuidado"],
      destacado: false,
      creation: '6/15/2023, 10:22:00',
      recent_card_title: '¡Todo lo que debes saber sobre el Pomerania! 🐶',
      buscador: ["Pomerania", "Cuidado pomerania", "Historia pomerania", "Características pomerania", "Salud pomerania", "Aseo pomerania", "Ejercicio pomerania", "Adopción pomerania", "Personalidad pomerania", "Raza pomerania"],
    },

  ]);

  constructor() {}

  filterArticleList(article: Article, term: string) {
    return (
      article.recent_card_title.toLowerCase().includes(term.toLowerCase()) ||
      article.sections.join(' ').toLowerCase().includes(term.toLowerCase()) ||
      article.categories.join(' ').toLowerCase().includes(term.toLowerCase()) ||
      article['card-heading'].toLowerCase().includes(term.toLowerCase()) ||
      article.buscador.join(' ').toLowerCase().includes(term.toLowerCase())
    );
  }
}
