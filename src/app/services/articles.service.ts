/**
-----------------------------------------------------------------------------------------------------------------------------------------------------------
PROMPT PARA ESCRIBIR UN ARTÍCULO ENTERO

El objetivo del artículo es darle a los lectores información relevante sobre
- El estilo del artículo debe ser informal pero académico.
- Mis lectores son amantes de mascotas y/o futuros dueños de las mismas.
- Hacer buen uso de las palabras clave del título para optimización de SEO.
- Priorizar el uso de tablas, listas ordenadas y listas desordenadas para mostrar información importante sin abusar de las mismas.
-----------------------------------------------------------------------------------------------------------------------------------------------------------
PROMPT PARA ARTÍCULOS

Hola! Quiero que me ayudes a recapitular información importante de los diferentes artículos de mi blog!
Esto es lo que hay que considerar para todos los artículos que te pase:

Dame un array de palabras que se puedan poner como términos de búsqueda de un buscador.

Por otro lado, de las 5 categorías siguientes ("Gatos" | "Perros" | "Salud" | "Adiestramiento" | "Alimentacion"),
armame otro array con las categorías en las que lo englobarías, podés elegir más de una.

NO ME DES UN RESÚMEN DEL ARTÍCULO SIMPLEMENTE CUMPLÍ CON LO QUE TE PIDO ARRIBA. RETORNAME LOS ARRAYS QUE TE PIDO Y LISTO.

El artículo es el siguiente:

-----------------------------------------------------------------------------------------------------------------------------------------------------------

PROMPT PARA KEYWWORDS

Hola!

Tengo un blog de perros y gatos, quiero agregar la meta etiqueta de keywords para SEO de cada artículo y quiero que me ayudes con eso.
Mi blog lo estoy desarrollando con angular universal. Yo te voy a pasar el meta title del artículo, la meta descripción del mismo y el artículo en sí.
Quiero que me des un listado de keywords para armar la meta tag.

Para las keywords quiero que me retornes un string con todas las palabras dentro, separadas por coma.

Puede ser?

Los datos son los siguientes:

-----------------------------------------------------------------------------------------------------------------------------------------------------------

PROMT PARA CALIDAD DE CONTENIDO Y SEO:

Estoy haciendo un blog sobre perros y gatos.  Te voy a dar una meta descripción, un meta título y el contenido de un artículo de blog y quiero que me hagas análisis de SEO de los mismos, a tener en cuenta:

- quiero que me digas si el contenido es relevante o no o si es simplemente un relleno de palabras clave
- si las palabras claves estan siendo bien utilizadas en el texto o no,
- si se podría considerar que el artículo cataloga como palabras clave de cola larga y cualquier
- quiero que me hagas un analisis de la calidad del contenido, si te parece que el texto es atractivo o no para la experiencia de usuario
- Están la meta descripción, el mata título y el contenido bien relacionados entre si?
- Es el contenido lo suficientemente largo para SEO?
- Cualquier otra información que consideres relevante para el posicionamiento y experiencia de usuario es bienvenida

Los datos son los siguientes:

-----------------------------------------------------------------------------------------------------------------------------------------------------------

 */

import { Injectable, signal } from '@angular/core';
import { Article } from '../interfaces/articles.interface';

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
         sections: [
            'cachorros',
            'dieta equilibrada',
            'higiene',
            'socialización',
         ],
         destacado: true,
         creation: '5/31/2023, 15:31:18',
         recent_card_title:
            'Cachorros: Descubre los mejores cuidados para tus perritos',
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
         recent_card_title:
            'Guía completa sobre gatos: Razas, Cuidados, Curiosidades 🐈',
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
         recent_card_title:
            'Bulldog Francés: Todo sobre esta adorable raza de perros',
         buscador: [
            'Raza',
            'Características',
            'Cachorros',
            'Ejercicio',
            'Aseo',
         ],
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
         recent_card_title:
            'Bulldog Inglés - ¡Características, Cuidados y Curiosidades! 😍',
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
         recent_card_title:
            'Bulldog Inglés: Características, Cuidados y Curiosidades 🐶',
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
         recent_card_title:
            'Pastor Alemán: Características, Cuidados y Curiosidades 🐶 ',
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
         recent_card_title:
            'Perro Salchicha: Características, Cuidados y Curiosidades 🐶',
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
         recent_card_title:
            'Descubre Todo Sobre Los Gatos Persas, ¡La Raza Más Popular! 🐱',
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
         recent_card_title:
            'Gran Danés: Características, Cuidados y Curiosidades 🐶',
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
         sections: [
            'Características',
            'Curiosidades',
            'Personalidad',
            'Físico',
            'Pelaje',
            'Inteligencia',
            'Cuidado',
            'Historia',
         ],
         destacado: false,
         creation: '6/15/2023, 10:05:00',
         recent_card_title:
            'Gato Siamés: Características, Cuidados y Curiosidades 🐈',
         buscador: [
            'Gato siamés',
            'Raza siamés',
            'Cuidado gato siamés',
            'Historia gato siamés',
            'Personalidad gato siamés',
            'Características físicas gato siamés',
            'Curiosidades gato siamés',
            'Gatos famosos',
            'Cultura popular',
            'Pelaje gato siamés',
         ],
      },

      {
         url: 'todo-lo-que-debes-saber-sobre-el-pomerania',
         categories: ['Perros'],
         'card-heading': 'Pomerania',
         sections: [
            'Personalidad',
            'Temperamento',
            'Adopción',
            'Problemas genéticos',
            'Aseo',
            'Historia',
            'Características',
            'Ejercicio',
            'Cuidado',
         ],
         destacado: false,
         creation: '6/15/2023, 10:22:00',
         recent_card_title: '¡Todo lo que debes saber sobre el Pomerania! 🐶',
         buscador: [
            'Pomerania',
            'Cuidado pomerania',
            'Historia pomerania',
            'Características pomerania',
            'Salud pomerania',
            'Aseo pomerania',
            'Ejercicio pomerania',
            'Adopción pomerania',
            'Personalidad pomerania',
            'Raza pomerania',
         ],
      },

      {
         url: 'aprende-todo-sobre-el-caniche-caracteristicas-cuidados-ycuriosidades',
         categories: ['Perros'],
         'card-heading': 'Caniche',
         sections: [
            'Historia',
            'Características',
            'Nutrición',
            'Aseo',
            'Adiestramiento',
            'Socialización',
            'Ejercicio',
            'Salud',
            'Cuidado',
         ],
         destacado: false,
         creation: '6/21/2023, 15:52:00',
         recent_card_title:
            '¡Aprende todo sobre el Caniche!: Características, Cuidados y Curiosidades 🐶',
         buscador: [
            'Raza Caniche',
            'Historia Caniche',
            'Características Caniche',
            'Nutrición Caniche',
            'Aseo Caniche',
            'Adiestramiento Caniche',
            'Socialización Caniche',
            'Ejercicio Caniche',
            'Salud Caniche',
            'Cuidado Caniche',
         ],
      },

      {
         url: 'descubre-los-mejores-alimentos-para-perros-en-nuestra-guia-completa',
         categories: ['Perros', 'Alimentacion'],
         'card-heading': 'Mejores alimentos',
         sections: [
            'Comida',
            'Pienso',
            'Nutrición',
            'Ingredientes',
            'Alergias',
            'Razas',
            'Cachorros',
            'Necesidades',
            'Consejos',
            'Guía',
         ],
         destacado: true,
         creation: '6/21/2023, 16:05:00',
         recent_card_title:
            '🐶 Descubre los Mejores Alimentos para Perros en nuestra Guía Completa 🐕',
         buscador: [
            'Comida para perros',
            'Pienso',
            'Dieta Canina',
            'Ingredientes saludables',
            'Evitar alérgenos',
            'Comida para razas específicas',
            'Nutrición perros',
            'Alergias caninas',
            'Alimentación cachorros',
            'Necesidades nutricionales',
         ],
      },

      {
         url: 'las-mejores-razas-de-perros-grandes-para-tener-de-mascota-en-casa',
         categories: ['Perros'],
         'card-heading': 'Mascotas grandes en casa',
         sections: [
            'Razas grandes',
            'Labrador Retriever',
            'Husky Siberiano',
            'Doberman Pinscher',
            'Bullmastiff',
            'Boxer',
            'Protección',
            'Características',
            'Hogar',
            'Patio',
            'Apartamento',
         ],
         destacado: false,
         creation: '7/03/2023, 12:00:00',
         recent_card_title:
            '🐕 Las Mejores Razas de Perros Grandes para Tener de Mascota en Casa',
         buscador: [
            'Razas de perros grandes',
            'Mejores razas grandes',
            'Cuidados perros grandes',
            'Ejercicio perros grandes',
            'Comportamiento perros grandes',
            'Aseo perros grandes',
            'Problemas salud perros grandes',
            'Adiestramiento perros grandes',
            'Razas grandes para familias',
            'Razas grandes para pisos',
         ],
      },

      {
         url: 'todo-sobre-los-gatos-negros-descubre-su-personalidad-ycaracteristicas',
         categories: ['Gatos'],
         'card-heading': 'Gatos negros',
         sections: [
            'Historia',
            'Características',
            'Personalidad',
            'Adopción',
            'Curiosidades',
            'Belleza',
            'Inteligencia',
            'Misterio',
            'Amistad',
            'Supersticiones',
         ],
         destacado: false,
         creation: '7/03/2023, 12:37:00',
         recent_card_title:
            'Todo sobre los gatos negros 🐈: Descubre su personalidad y características - EsferaMascota 🐾',
         buscador: [
            'Gato negro',
            'Rasgos gato negro',
            'Historia gato negro',
            'Adoptar gato negro',
            'Salud gato negro',
            'Gato negro personalidad',
            'Cuidados gato negro',
            'Curiosidades gato negro',
            'Físico gato negro',
            'Características gato negro',
         ],
      },

      {
         url: 'mejores-alimentos-para-perros-guia-de-nutricion-canina',
         categories: ['Alimentacion', 'Perros'],
         'card-heading': 'Nutrición canina',
         sections: [
            'Nutrición canina',
            'Dieta equilibrada',
            'Ingredientes de calidad',
            'Proteínas',
            'Vitaminas',
            'Intolerancias',
            'AAFCO',
            'Omega-3',
            'Omega-6',
            'Etiqueta de ingredientes',
         ],
         destacado: true,
         creation: '7/03/2023, 12:54:00',
         recent_card_title:
            '🐶 Mejores Alimentos para Perros: Guía de Nutrición Canina',
         buscador: [
            'Guía nutrición canina',
            'Ingredientes de calidad para perros',
            'Dieta equilibrada perros',
            'AAFCO',
            'Alergias alimentarias perros',
            'Proteínas animales y vegetales perros',
            'Evitar aditivos artificiales perros',
            'Omega-3 y Omega-6 para perros',
            'Leer etiqueta de ingredientes alimento perros',
            'Beneficios comida casera perros',
         ],
      },

      {
         url: 'todo-sobre-el-pastor-belga-malinois-caracteristicas-cuidados-yadiestramiento',
         categories: ['Perros'],
         'card-heading': 'Pastor Belga Malinois',
         sections: [
            'Pastor Belga Malinois',
            'inteligencia',
            'versátilidad',
            'popularidad',
            'Bélgica',
            'trabajo',
            'guardián',
            'ejercicio',
         ],
         destacado: false,
         creation: '7/03/2023, 14:13:00',
         recent_card_title:
            '¡Todo sobre el Pastor Belga Malinois! 🐾 Características, Cuidados y Adiestramiento',
         buscador: [
            'Pastor Belga',
            'Malinois',
            'Origen',
            'Temperamento',
            'Cuidados',
            'Higiene',
            'Dieta',
            'Adiestramiento',
            'Ejercicio',
            'Historia',
         ],
      },

      {
         url: 'beagle-en-espana',
         categories: ['Perros'],
         'card-heading': 'Beagle en España',
         sections: [
            'Historia',
            'Olfato',
            'Cuidados',
            'Personalidad',
            'Compañía',
         ],
         destacado: false,
         creation: '7/05/2023, 14:45:00',
         recent_card_title:
            '¡Conoce al Beagle: la popular raza de perro en España! 🐕',
         buscador: [
            'Beagle',
            'historia Beagle',
            'Beagle España',
            'olfato Beagle',
            'Beagle caza',
            'cuidados Beagle',
            'Beagle compañía',
            'Beagle personalidad',
            'raza Beagle',
            'Beagle ejercicios',
         ],
      },

      {
         url: 'caniche-toy-caracteristicas-cuidados-y-mas-descubrelo-todo-aqui',
         categories: ['Perros'],
         'card-heading': 'Caniche Juguete (Toy)',
         sections: [
            'Inteligencia',
            'Juguetón',
            'Socialización',
            'Cachorro',
            'Familia',
            'Ejercicio',
         ],
         destacado: false,
         creation: '7/05/2023, 15:20:00',
         recent_card_title:
            'Caniche Toy: Características, Cuidados y Más - ¡Descúbrelo todo aquí!',
         buscador: [
            'Caniche Toy',
            'Raza de perro',
            'Guía de caniches',
            'Cuidado de caniches',
            'Salud de caniches',
            'Personalidad de caniche',
            'Aspecto de caniche',
            'Cuidado de caniche',
            'Vida con caniche',
            'Caniche en familia',
         ],
      },

      {
         url: 'conoce-al-pug-carlino-la-raza-de-perro-mas-adorable',
         categories: ['Perros'],
         'card-heading': 'Pug Carlino',
         sections: [
            'Problemas comunes',
            'Aseo',
            'Cuidados',
            'Entrenamiento',
            'Historia',
            'Características físicas',
            'Personalidad',
            'Lealtad',
            'Cariño',
         ],
         destacado: false,
         creation: '7/05/2023, 15:43:00',
         recent_card_title:
            '¡Conoce al Pug Carlino, la Raza de Perro Más Adorable! 🐶',
         buscador: [
            'Carlino',
            'Raza de perro',
            'Historia del Carlino',
            'Problemas comunes del Carlino',
            'Cuidado del Carlino',
            'Características del Carlino',
            'Personalidad del Carlino',
            'Aseo del Carlino',
            'Entrenamiento del Carlino',
            'Carlino y niños',
            'Tamaño del Carlino',
         ],
      },

      {
         url: 'perro-chihuahua-caracteristicas-y-cuidados',
         categories: ['Perros'],
         'card-heading': 'Chihuahua',
         sections: [
            'Historia',
            'Origen',
            'Características',
            'Personalidad',
            'Cuidados',
            'Acicalamiento',
            'Personalidad',
            'Temperamento',
            'Rutina',
         ],
         destacado: false,
         creation: '7/05/2023, 16:43:00',
         recent_card_title: 'Perro Chihuahua: Características y Cuidados 🐕 🐶',
         buscador: [
            'Chihuahua',
            'Raza',
            'Historia',
            'Características',
            'Físicas',
            'Personalidad',
            'Cuidados',
            'Diarios',
            'Temperamento',
            'Adiestramiento',
         ],
      },

      {
         url: 'perros-boxer-caracteristicas-cuidados-y-mas',
         categories: ['Perros'],
         'card-heading': 'Boxer',
         sections: [
            'Características',
            'Historia',
            'Origen',
            'Físico',
            'Personalidad',
            'Problemas comunes',
            'Alergias',
            'Actividad',
            'Nutrición',
         ],
         destacado: false,
         creation: '7/05/2023, 17:21:00',
         recent_card_title: '🐶 Perros Bóxer: Características, Cuidados y Más',
         buscador: [
            'Bóxer',
            'Origen bóxer',
            'Características bóxer',
            'Personalidad bóxer',
            'Salud bóxer',
            'Cuidado bóxer',
            'Nutrición bóxer',
            'Problemas de salud bóxer',
            'Crianza bóxer',
            'Historia bóxer',
         ],
      },

      {
         url: 'los-mejores-alimentos-para-perros-guia-de-alimentacion-saludable',
         categories: ['Alimentacion', 'Perros'],
         'card-heading': 'Alimentación saludable',
         sections: [
            'Ingredientes clave',
            'Consejos para elegir',
            'Comida casera',
            'Comida comprada',
            'BARF',
            'Dieta vegetariana',
            'Recomendación productos',
         ],
         destacado: false,
         creation: '7/07/2023, 10:21:00',
         recent_card_title:
            '🐶 Mejores Alimentos para Perros: Guía de Alimentación Saludable 🍗',
         buscador: [
            'Ingredientes clave',
            'Consejos para elegir',
            'Comida casera',
            'Comida comprada',
            'BARF',
            'Dieta vegetariana',
            'Alimentación saludable',
            'Alimentación perros',
            'Alimentación canina',
            'Alimentación mascotas',
         ],
      },

      {
         url: 'el-gato-egipcio-un-analisis-completo-de-su-historia-caracteristicas-y-curiosidades',
         categories: ['Gatos'],
         'card-heading': 'Mau Egipcio',
         sections: [
            'Historia',
            'Curiosidades',
            'Dieta',
            'Consejos de salud',
            'Adiestramiento',
            'Rasgos distintivos',
            'Personalidad',
         ],
         destacado: false,
         creation: '7/10/2023, 12:38:00',
         recent_card_title:
            'Mau Egipcio: Historia, Características y Curiosidades',
         buscador: [
            'Mau Egipcio',
            'Gato egipcio',
            'Raza felina',
            'Antiguo Egipto',
            'Cultura egipcia',
            'Características físicas',
            'Personalidad',
            'Cuidados',
            'Dieta',
            'Historia',
            'Leyendas',
         ],
      },

      {
         url: 'como-elegir-la-mascota-adecuada-para-tu-hogar',
         categories: ['Perros', 'Gatos', 'Adiestramiento'],
         'card-heading': 'Mascotas en casa',
         sections: [
            'Hogar',
            'Mascota',
            'Responsabilidades',
            'Espacio',
            'Seguridad',
            'Ejercicio',
            'Departamento',
            'Entrenamiento',
            'Juguetes',
         ],
         destacado: false,
         creation: '7/10/2023, 14:32:00',
         recent_card_title: 'Cómo elegir la mascota adecuada para tu hogar 🐶',
         buscador: [
            'Mascotas en casa',
            'Espacio para mascotas',
            'Seguridad mascotas',
            'Ejercicio mascotas',
            'Razas perros departamento',
            'Entrenamiento mascotas departamento',
            'Juguetes mascotas',
            'Problemas mascotas en casa',
            'Beneficios mascotas',
            'Juguetes interactivos mascotas',
         ],
      },

      {
         url: 'golden-retriever-la-raza-mas-adorable-fiel-y-juguetona',
         categories: ['Perros', 'Salud', 'Adiestramiento', 'Alimentacion'],
         'card-heading': 'Golden Retriever',
         sections: [
            'Historia',
            'Personalidad',
            'Cuidados',
            'Entrenamiento',
            'Socialización',
            '¿Es la raza para tí?',
            'Golden Retriever y niños',
            'Salud',
            'Nutrición',
            'Ideas de actividades',
            'Ejercicio',
            'Genética',
            'Aseo',
            'Beneficios terapéuticos',
         ],
         destacado: false,
         creation: '7/11/2023, 13:00:00',
         recent_card_title:
            'Golden Retriever: La raza más adorable, fiel y juguetona 🐶',
         buscador: [
            'Golden Retriever',
            'historia del Golden Retriever',
            'cuidado del Golden Retriever',
            'características físicas del Golden Retriever',
            'personalidad del Golden Retriever',
            'adiestramiento del Golden Retriever',
            'socialización del Golden Retriever',
            'perros',
            'razas de perros',
            'perros de trabajo',
            'perros guía',
            'terapias asistidas con animales',
            'Lord Tweedmouth',
            'American Kennel Club',
            'pelaje dorado',
            'cuidado de la salud del perro',
            'ejercicio para perros',
            'alimentación de perros',
            'cuidado del pelaje de perros',
         ],
      },

      {
         url: 'bichon-maltes-conoce-todo-sobre-esta-raza-de-pelo-blanco',
         categories: ['Perros', 'Salud', 'Adiestramiento', 'Alimentacion'],
         'card-heading': 'Bichón Maltés',
         sections: [
            'Histora',
            'Pelaje',
            'Alimentación',
            'Salud',
            'Características',
            'Temperamento',
         ],
         destacado: false,
         creation: '7/18/2023, 10:27:00',
         recent_card_title:
            '🐶 Bichón Maltés: Conoce todo sobre esta raza de pelo blanco',
         buscador: [
            'Bichón Maltés',
            'Historia del Bichón Maltés',
            'Cuidado del Bichón Maltés',
            'Características del Bichón Maltés',
            'Comportamiento del Bichón Maltés',
            'Alimentación del Bichón Maltés',
            'Salud del Bichón Maltés',
            'Ejercicio para Bichón Maltés',
            'Cuidado del pelaje del Bichón Maltés',
         ],
      },

      {
         url: 'pastor-australiano-caracteristicas-cuidados-y-curiosidades',
         categories: ['Perros', 'Salud', 'Adiestramiento', 'Alimentacion'],
         'card-heading': 'Pastor Australiano',
         sections: [
            'Histora',
            'Deportes',
            'Relación con otros perros',
            'Cuidados',
            'Personalidad',
            'Mucho más',
         ],
         destacado: false,
         creation: '7/18/2023, 10:51:00',
         recent_card_title:
            '🐶 Pastor Australiano: Características, cuidados y curiosidades',
         buscador: [
            'Pastor Australiano',
            'Raza canina',
            'Características físicas',
            'Personalidad',
            'Cuidados',
            'Adiestramiento',
            'Salud',
            'Ejercicio',
            'Deportes',
            'Aussie',
            'Toy',
            'Miniatura',
         ],
      },

      {
         url: 'pitbull-blue-todo-lo-que-necesitas-saber-sobre-esta-raza-de-perros',
         categories: ['Perros', 'Salud', 'Adiestramiento', 'Alimentacion'],
         'card-heading': 'Pitbull Blue',
         sections: [
            'Historia',
            'Actividades',
            'Relación con otros perros',
            'Pitbull y niños',
            'Personalidad',
            'Temperamento',
            'Mucho más',
         ],
         destacado: false,
         creation: '7/24/2023, 10:18:00',
         recent_card_title: '🐶 Pitbull Blue: Todo lo que necesitas saber',
         buscador: [
            'Pitbull',
            'Pit bull',
            'Pitbull Blue',
            'Personalidad',
            'Cuidados',
            'Adiestramiento',
            'Salud',
            'Ejercicio',
            'Deportes',
            'Variedad',
         ],
      },

      {
         url: 'es-el-pitbull-la-raza-de-perro-adecuada-para-ti',
         categories: ['Perros', 'Salud', 'Adiestramiento', 'Alimentacion'],
         'card-heading': 'Pitbull',
         sections: [
            'Historia',
            'Mitos y verdades',
            'Alimentación',
            'Salud',
            'Adiestramiento',
            'Ejercicio',
            'Adopción',
            'Esterilización',
            'Mucho más',
         ],
         destacado: false,
         creation: '7/24/2023, 11:04:00',
         recent_card_title: '🐶 Pitbull, ¿Es la raza adecuada para ti?',
         buscador: [
            'Pitbull',
            'Pit bull',
            'Pitbull',
            'Personalidad',
            'Cuidados',
            'Adiestramiento',
            'Salud',
            'Ejercicio',
            'Deportes',
            'Variedad',
         ],
      },

      {
         url: 'mascotas-consejos-cuidados-y-curiosidades-guia-completa',
         categories: ['Perros', 'Gatos'],
         'card-heading': 'Mascotas en general',
         sections: [
            'Mascota indicada',
            'Consejos',
            'Cuidados',
            'Curiosidades',
            'Más',
         ],
         destacado: false,
         creation: '7/24/2023, 11:58:00',
         recent_card_title:
            'Mascotas: Consejos, cuidados y curiosidades - Guía completa',
         buscador: ['Mascotas', 'Perros', 'Gatos', 'Variedad'],
      },

      {
         url: 'fila-brasilero-conoce-todo-sobre-esta-raza-de-perros-de-guarda',
         categories: ['Perros'],
         'card-heading': 'Fila Brasileño',
         sections: [
            'Historia',
            'Relación con otros perros',
            'Relación con niños',
            'Perro de guarda',
            'Temperamento',
            'Características',
            'Cuidados',
            'Personalidad',
            'Mucho más',
         ],
         destacado: false,
         creation: '7/24/2023, 12:34:00',
         recent_card_title:
            '🐶 Fila Brasileño: Conocé todo sobre esta raza de perros de guarda y su temperamento',
         buscador: ['Fila Brasileño', 'Fila', 'Perro de guarda'],
      },

      {
         url: 'schnauzer-miniatura-caracteristicas-cuidados-y-curiosidades',
         categories: ['Perros'],
         'card-heading': 'Schnauzer Miniatura',
         sections: [
            'Relación con otros perros',
            'Relación con niños',
            'Ejecricio',
            '¿Es apto para departamento?',
            'Temperamento',
            'Historia',
            'Cuidados del pelo',
            'Artículos de moda',
            'Personalidad',
            'Mucho más',
         ],
         destacado: false,
         creation: '7/25/2023, 12:05:00',
         recent_card_title:
            '🐶 Schnauzer Miniatura: Características, cuidados y curiosidades',
         buscador: ['Schnauzer', 'Schnauzer miniatura'],
      },

      {
         url: 'perros-pitbull-caracteristicas-cuidados-entrenamiento-y-mas',
         categories: ['Perros', 'Salud', 'Adiestramiento', 'Alimentacion'],
         'card-heading': 'Pitbull',
         sections: [
            '¿Qué  hace un Pitbull tan especial?',
            'Papel del entrenamiento',
            'Curiosidades',
            'Mitología y realidad',
            'Socialización',
            'Alimentación',
            'Salud',
            '¿Pitbull o American Staffordshire Terrier?',
            'Mucho más',
         ],
         destacado: false,
         creation: '7/25/2023, 12:25:00',
         recent_card_title:
            '🐶 Perros Pitbull: Características, cuidados, entrenamiento, curiosidades y más',
         buscador: [
            'Pitbull',
            'Pit bull',
            'Pitbull',
            'Personalidad',
            'Cuidados',
            'Adiestramiento',
            'Salud',
            'Ejercicio',
            'Deportes',
            'Variedad',
         ],
      },

      {
         url: 'fila-brasilero-caracteristicas-cuidados-y-curiosidades',
         categories: ['Perros'],
         'card-heading': 'Fila Brasileño',
         sections: [
            'Historia',
            'Características físicas',
            'Cuidados',
            'Temperamento',
            'Cultura popular',
            'Datos interesantes',
            'Más',
         ],
         destacado: false,
         creation: '7/26/2023, 12:05:00',
         recent_card_title:
            '🐶 Fila Brasileño: Características, cuidados y curiosidades',
         buscador: ['Fila Brasileño', 'Fila', 'Perro de guarda'],
      },

      {
         url: 'gato-kawaii-descubre-los-secretos-de-la-ternura-felina',
         categories: ['Gatos'],
         'card-heading': 'Kawaii',
         sections: [
            'Orígen del término',
            'Como identificarlos',
            'Ideas de nombres',
            'Redes sociales',
            'Curiosidades',
            'Más'
         ],
         destacado: false,
         creation: '7/26/2023, 13:02:00',
         recent_card_title:
            '🐱 Gato Kawaii: Descubre los secretos de la ternura felina 🐱',
         buscador: ['Gatos Kawaii', 'Kawaii', 'Ternura', 'Tiernos', 'Secretos', 'Misterios', 'Japón'],
      },

      {
         url: 'los-gatitos-mas-adorables-descubre-el-encanto-de-los-gatitos-kawaii',
         categories: ['Gatos'],
         'card-heading': 'Gatos Kawaii',
         sections: [
            'Consejos de crianza',
            'Alimentación y Salud',
            'Gatos Kawaii Populares',
            'Vestimenta/Moda felina',
            'Impacto en la sociedad',
            'Características comunes',
            'Mitos asociados',
            'Más'
         ],
         destacado: false,
         creation: '7/28/2023, 13:02:00',
         recent_card_title:
            '🐱 Los gatitos más adorables: Descubre el encanto de los gatitos kawaii 🐱',
         buscador: ['Gatos Kawaii', 'Kawaii', 'Ternura', 'Tiernos', 'Secretos', 'Misterios', 'Japón'],
      },

      {
         url: 'gatitos-bebes-adorables-companieros-de-vida-para-tu-hogar',
         categories: ['Gatos'],
         'card-heading': 'Gatos bebes adorables',
         sections: [
            'Preparando el hogar',
            'Beneficios de tener un gatito',
            'El gatito adecuado para ti',
            'Mejores juguetes',
            'Problemas comunes',
            'Como alimentarlo correctamente',
            'Cuidado de la salud',
            'Enseñar buenos hábitos',
            'Castración',
            'Más'
         ],
         destacado: false,
         creation: '7/28/2023, 12:01:00',
         recent_card_title:
            '🐱 Gatitos bebes: Adorables companieros de vida para tu hogar 🐱',
         buscador: ['Gatitos', 'Cachorro', 'Adorable', 'Adorables', 'Hogar', 'Compañero', 'Compañeros', 'Compañía', 'Compañías', 'Mascota', 'Mascotas'],
      },
   ]);

   constructor() {}

   filterArticleList(article: Article, term: string) {
      return (
         article.recent_card_title.toLowerCase().includes(term.toLowerCase()) ||
         article.sections
            .join(' ')
            .toLowerCase()
            .includes(term.toLowerCase()) ||
         article.categories
            .join(' ')
            .toLowerCase()
            .includes(term.toLowerCase()) ||
         article['card-heading'].toLowerCase().includes(term.toLowerCase()) ||
         article.buscador.join(' ').toLowerCase().includes(term.toLowerCase())
      );
   }
}
