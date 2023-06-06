import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Dog } from '../interfaces/dog.interface';

@Injectable({
  providedIn: 'root',
})
export class PerrosService {
  private apiUrl = 'https://api.thedogapi.com/v1/';
  private headers = new HttpHeaders({
    'Content-type': 'application/json',
    'x-api-key':
      'live_IMSkHCnLKaMGNb3cwXwplyqpgA2TRFnQmcpJXrDhVjY6bxImsfHKXRkwskW7AQU6',
  });

  constructor(private http: HttpClient) {}

  getDogBreeds(page = 0): Observable<Dog[]> {
    this.http.get<Dog[]>(`${this.apiUrl}breeds`).subscribe(console.log);
    // Voy por el artículo 30
    return this.http.get<Dog[]>(`${this.apiUrl}breeds?limit=4&page=${page}`, {
      headers: this.headers,
    });
  }

  searchByName(breed: string) {
    return this.http
      .get<Dog[]>(`${this.apiUrl}breeds/search?q=${breed}&limit=4`, {
        headers: this.headers,
      })
      .pipe(
        switchMap(async (dogs: Dog[]) => {
          try {
            const imagePromises = dogs.map((dog) =>
              this.http
                .get<any[]>(`${this.apiUrl}images/search?breed_id=${dog.id}`, {
                  headers: this.headers,
                })
                .toPromise()
            );

            const images = await Promise.all(imagePromises);

            dogs.forEach((dog, index) => {
              dog.image = images[index]![0]?.url; // Asume que la respuesta es un array y toma la primera imagen
            });

            return dogs;
          } catch (error) {
            return dogs;
          }
        })
      );
  }

  // Mapeo de lista de perros
  private dogList: Dog[] = [
    {
      weight: {
        imperial: '6 - 13',
        metric: '3 - 6',
      },
      height: {
        imperial: '9 - 11.5',
        metric: '23 - 29',
      },
      id: 1,
      name: 'Affenpinscher',
      bred_for: 'Caza de roedores pequeños, perro faldero',
      breed_group: 'Grupo de juguetes',
      life_span: '10 - 12 años',
      temperament:
        'Terco, Curioso, Juguetón, Aventurero, Activo, Amante de la diversión',
      origin: 'Alemania, Francia',
      reference_image_id: 'BJa4kxc4X',
      image: {
        id: 'BJa4kxc4X',
        width: 1600,
        height: 1199,
        url: 'https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg',
      },
      searchTerms: ['Affenpinscher', 'perro pequeño', 'caza de roedores'],
      description:
        'El Affenpinscher es una raza de perro pequeño originaria de Alemania y Francia. Es conocido por ser un perro de caza de roedores y también como perro faldero. Es terco, curioso, juguetón, aventurero, activo y amante de la diversión.',
      country_code: 'DE',
      history:
        'El Affenpinscher tiene su origen en Alemania y Francia en el siglo XVII. Fue criado inicialmente para cazar roedores en las cocinas y establos.',
      categoria_de_tamanio: 'Pequeño',
      perks: [
        'No necesita mucho espacio',
        'Requiere poco aseo',
        'Necesita ejercicio moderado',
      ],
      color: 'Negro, Gris, Plata, Rojo',
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Moderado',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: ['Necesita estimulación mental regular'],
      popularidad: 'Moderada',
      enfermedades_comunes: ['Problemas dentales', 'Luxación de rótula'],
    },
    {
      weight: {
        imperial: '50 - 60',
        metric: '23 - 27',
      },
      height: {
        imperial: '25 - 27',
        metric: '64 - 69',
      },
      id: 2,
      name: 'Sabueso afgano',
      country_code: 'AG',
      bred_for: 'Caza y persecución',
      breed_group: 'Sabueso',
      life_span: '10 - 13 años',
      temperament: 'Distante, Payaso, Digno, Independiente, Feliz',
      origin: 'Afganistán, Irán, Pakistán',
      reference_image_id: 'hMyT4CDXR',
      image: {
        id: 'hMyT4CDXR',
        width: 606,
        height: 380,
        url: 'https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg',
      },
      searchTerms: ['Sabueso afgano', 'perro de caza', 'perro de persecución'],
      description:
        'El Sabueso afgano, también conocido como Afghan Hound, es una raza de perro de caza y persecución originaria de Afganistán, Irán y Pakistán. Se caracteriza por su apariencia distante, su temperamento de payaso y su dignidad. Es un perro independiente y feliz.',
      history:
        'El Sabueso afgano es una de las razas de perros más antiguas, originaria de las regiones montañosas de Afganistán. Tradicionalmente se utilizaba para la caza en terrenos difíciles.',
      categoria_de_tamanio: 'Grande',
      perks: [
        'Necesita espacio para correr',
        'Requiere aseo regular',
        'Necesita ejercicio regular',
      ],
      color: 'Varía - Blanco, Negro, Rojo, Crema, Gris, Multicolor',
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Bajo',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Alta',
      necesidades_especiales: ['Necesita mucha estimulación mental y física'],
      popularidad: 'Moderada',
      enfermedades_comunes: ['Problemas de la vista', 'Hipotiroidismo'],
    },
    {
      weight: {
        imperial: '44 - 66',
        metric: '20 - 30',
      },
      height: {
        imperial: '30',
        metric: '76',
      },
      id: 3,
      name: 'Perro de caza africano',
      bred_for: 'Un animal salvaje en manada',
      life_span: '11 años',
      temperament: 'Salvaje, Trabajador, Dedicado',
      origin: 'África',
      reference_image_id: 'rkiByec47',
      image: {
        id: 'rkiByec47',
        width: 500,
        height: 335,
        url: 'https://cdn2.thedogapi.com/images/rkiByec47.jpg',
      },
      searchTerms: ['Perro de caza africano', 'perro de caza en manada'],
      description:
        'El Perro de caza africano, o African Hunting Dog, es un animal salvaje que se encuentra en manadas. Aunque su origen específico es desconocido, se sabe que es un perro salvaje, trabajador y dedicado.',
      country_code: 'AF',
      history:
        'El Perro de caza africano es una raza salvaje originaria de África, conocida por su habilidad para cazar en manadas.',
      categoria_de_tamanio: 'Grande',
      perks: [
        'Necesita espacio para correr',
        'Requiere poco aseo',
        'Necesita ejercicio regular',
      ],
      color: 'Varía - Blanco, Negro, Marrón, Manchado',
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Bajo',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: ['Necesita mucha estimulación mental y física'],
      popularidad: 'Baja',
      enfermedades_comunes: [
        'Problemas de la vista',
        'Enfermedades infecciosas',
      ],
    },
    {
      weight: {
        imperial: '40 - 65',
        metric: '18 - 29',
      },
      height: {
        imperial: '21 - 23',
        metric: '53 - 58',
      },
      id: 4,
      name: 'Airedale Terrier',
      bred_for: 'Caza de tejones y nutrias',
      life_span: '10 - 13 años',
      temperament:
        'Sociable, Amigable, Alerta, Confiado, Inteligente, Valiente',
      origin: 'Reino Unido, Inglaterra',
      reference_image_id: '1-7cgoZSh',
      image: {
        id: '1-7cgoZSh',
        width: 645,
        height: 430,
        url: 'https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg',
      },
      searchTerms: [
        'Airedale Terrier',
        'perro de caza',
        'caza de tejones',
        'caza de nutrias',
      ],
      description:
        'El Airedale Terrier es un perro de caza utilizado para la caza de tejones y nutrias. Originario del Reino Unido e Inglaterra, pertenece al grupo de los terrier. Es un perro sociable, amigable, alerta, confiado, inteligente y valiente.',
      country_code: 'UK',
      history:
        'El Airedale Terrier, originario del Reino Unido e Inglaterra, fue criado originalmente para la caza de tejones y nutrias.',
      categoria_de_tamanio: 'Mediano',
      perks: [
        'Excelente perro de caza',
        'Requiere aseo regular',
        'Necesita ejercicio regular',
      ],
      color: 'Negro y marrón',
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Alto',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Alta',
      necesidades_especiales: ['Necesita estimulación mental y física'],
      popularidad: 'Moderada',
      enfermedades_comunes: [
        'Displasia de cadera',
        'Problemas de piel',
        'Alergias',
      ],
    },
    {
      weight: {
        imperial: '90 - 120',
        metric: '41 - 54',
      },
      height: {
        imperial: '28 - 34',
        metric: '71 - 86',
      },
      id: 5,
      name: 'Perro de Akbash',
      bred_for: 'Guardia de ovejas',
      life_span: '10 - 12 años',
      temperament: 'Leal, Independiente, Inteligente, Valiente',
      reference_image_id: '26pHT3Qk7',
      image: {
        id: '26pHT3Qk7',
        width: 600,
        height: 471,
        url: 'https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg',
      },
      searchTerms: ['Perro de Akbash', 'guardia de ovejas'],
      description:
        'El Perro de Akbash es una raza utilizada para la guardia de ovejas. Es conocido por ser leal, independiente, inteligente y valiente.',
      country_code: 'TR',
      history:
        'El Perro de Akbash es originario de Turquía, donde fue criado para ser un perro de guardia de ovejas.',
      categoria_de_tamanio: 'Grande',
      perks: [
        'Excelente perro de guardia',
        'Requiere aseo mínimo',
        'Necesita mucho ejercicio',
      ],
      color: 'Blanco',
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Moderado',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Alta',
      necesidades_especiales: ['Necesita mucho ejercicio y espacio'],
      popularidad: 'Baja',
      enfermedades_comunes: [
        'Displasia de cadera',
        'Problemas cardíacos',
        'Obesidad',
      ],
    },
    {
      weight: {
        imperial: '65 - 115',
        metric: '29 - 52',
      },
      height: {
        imperial: '24 - 28',
        metric: '61 - 71',
      },
      id: 6,
      name: 'Akita',
      bred_for: 'Caza de osos',
      breed_group: 'Trabajo',
      life_span: '10 - 14 años',
      temperament:
        'Dócil, Alerta, Sensible, Digno, Compuesto, Amistoso, Receptivo, Fiel, Valiente',
      reference_image_id: 'BFRYBufpm',
      image: {
        id: 'BFRYBufpm',
        width: 1280,
        height: 853,
        url: 'https://cdn2.thedogapi.com/images/BFRYBufpm.jpg',
      },
      searchTerms: ['Akita', 'perro de caza', 'caza de osos'],
      description:
        'El Akita es una raza de perro utilizada para la caza de osos. Pertenece al grupo de trabajo y se caracteriza por ser dócil, alerta, sensible, digno, compuesto, amistoso, receptivo, fiel y valiente.',
      country_code: 'JP',
      history:
        'El Akita es originario de Japón, donde se le utilizaba originalmente para la caza de osos.',
      categoria_de_tamanio: 'Grande',
      perks: [
        'Excelente perro de guardia',
        'Requiere aseo mínimo',
        'Necesita mucho ejercicio',
      ],
      color: 'Varios colores',
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Moderado',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: ['Necesita mucho ejercicio y espacio'],
      popularidad: 'Moderada',
      enfermedades_comunes: [
        'Displasia de cadera',
        'Problemas de tiroides',
        'Obesidad',
      ],
    },
    {
      weight: {
        imperial: '55 - 90',
        metric: '25 - 41',
      },
      height: {
        imperial: '18 - 24',
        metric: '46 - 61',
      },
      id: 7,
      name: 'Alapaha Blue Blood Bulldog',
      description:
        'El Bulldog Alapaha Blue Blood es una raza bien desarrollada y exagerada, con una cabeza amplia y orejas caídas naturales. El hocico prominente está cubierto por labios superiores sueltos. Los ojos prominentes están bien separados. El pelaje del Alapaha es relativamente corto y bastante rígido. Los colores preferidos son merle azul, merle marrón o merle rojo, todos recortados en blanco o chocolate y blanco. También se prefieren los ojos de vidrio (azules) o los ojos de mármol (marrón y azul mezclados en un solo ojo). Las orejas y la cola nunca se cortan. El cuerpo es robusto y muy musculoso. Las caderas bien musculadas son más estrechas que el pecho. La espalda recta tiene la misma longitud que la altura del perro en los hombros. Las uñas delanteras nunca se retiran y las patas son parecidas a las de un gato.',
      bred_for: 'Guardia',
      breed_group: 'Mixto',
      life_span: '12 - 13 años',
      history: '',
      temperament: 'Cariñoso, Protector, Adiestrable, Devoto, Responsable',
      reference_image_id: '33mJ-V3RX',
      image: {
        id: '33mJ-V3RX',
        width: 1828,
        height: 2065,
        url: 'https://cdn2.thedogapi.com/images/33mJ-V3RX.jpg',
      },
      searchTerms: ['Bulldog Alapaha Blue Blood', 'bulldog', 'guardia'],
      country_code: 'US',
      categoria_de_tamanio: 'Mediano',
      perks: [
        'Excelente perro de guardia',
        'Requiere aseo mínimo',
        'Necesita mucho ejercicio',
      ],
      color:
        'Merle azul, merle marrón, merle rojo, blanco o chocolate y blanco',
      nivel_de_energia: 'Moderado',
      facilidad_de_entrenamiento: 'Alto',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: ['Necesita mucho ejercicio y espacio'],
      popularidad: 'Baja',
      enfermedades_comunes: ['Problemas oculares', 'Problemas de cadera'],
    },
    {
      weight: {
        imperial: '38 - 50',
        metric: '17 - 23',
      },
      height: {
        imperial: '23 - 26',
        metric: '58 - 66',
      },
      id: 8,
      name: 'Husky de Alaska',
      bred_for: 'Tirar de trineos',
      breed_group: 'Mixto',
      life_span: '10 - 13 años',
      temperament: 'Amistoso, Enérgico, Leal, Gentil, Confiado',
      reference_image_id: '-HgpNnGXl',
      image: {
        id: '-HgpNnGXl',
        width: 500,
        height: 500,
        url: 'https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg',
      },
      searchTerms: ['Husky de Alaska', 'perro de trineo'],
      description:
        'El Husky de Alaska es una raza mixta utilizada para tirar de trineos. Se caracteriza por ser amistoso, enérgico, leal, gentil y confiado.',
      origin: 'Estados Unidos',
      country_code: 'US',
      history: '',
      categoria_de_tamanio: 'Grande',
      perks: [
        'Bueno para el clima frío',
        'Requiere ejercicio regular',
        'Leal y enérgico',
      ],
      color: 'Variado',
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Moderado',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: [
        'Requiere mucho ejercicio y espacio',
        'Necesita estimulación mental',
      ],
      popularidad: 'Alta',
      enfermedades_comunes: ['Problemas oculares', 'Displasia de cadera'],
    },
    {
      weight: {
        imperial: '65 - 100',
        metric: '29 - 45',
      },
      height: {
        imperial: '23 - 25',
        metric: '58 - 64',
      },
      id: 9,
      name: 'Malamute de Alaska',
      bred_for: 'Transporte de carga pesada, Tirar de trineos',
      breed_group: 'Trabajo',
      life_span: '12 - 15 años',
      temperament: 'Amistoso, Cariñoso, Devoto, Leal, Digno, Juguetón',
      reference_image_id: 'dW5UucTIW',
      image: {
        id: 'dW5UucTIW',
        width: 1023,
        height: 769,
        url: 'https://cdn2.thedogapi.com/images/dW5UucTIW.jpg',
      },
      searchTerms: [
        'Malamute de Alaska',
        'perro de trineo',
        'transporte de carga',
      ],
      description:
        'El Malamute de Alaska es una raza utilizada para el transporte de carga pesada y para tirar de trineos. Es amistoso, cariñoso, devoto, leal, digno y juguetón.',
      origin: 'Estados Unidos',
      country_code: 'US',
      history: '',
      categoria_de_tamanio: 'Grande',
      perks: [
        'Bueno para el clima frío',
        'Requiere ejercicio regular',
        'Leal y juguetón',
      ],
      color: 'Variado',
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Moderado',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: [
        'Requiere mucho ejercicio y espacio',
        'Necesita estimulación mental',
      ],
      popularidad: 'Moderada',
      enfermedades_comunes: ['Displasia de cadera', 'Problemas oculares'],
    },
    {
      weight: {
        imperial: '60 - 120',
        metric: '27 - 54',
      },
      height: {
        imperial: '22 - 27',
        metric: '56 - 69',
      },
      id: 10,
      name: 'Bulldog americano',
      bred_for: '',
      breed_group: 'Trabajo',
      life_span: '10 - 12 años',
      temperament:
        'Amistoso, Asertivo, Enérgico, Leal, Gentil, Confiado, Dominante',
      origin: 'Estados Unidos',
      reference_image_id: 'pk1AAdloG',
      image: {
        id: 'pk1AAdloG',
        width: 1669,
        height: 1377,
        url: 'https://cdn2.thedogapi.com/images/pk1AAdloG.jpg',
      },
      searchTerms: ['Bulldog americano'],
      country_code: 'US',
      description:
        'El Bulldog americano es una raza de trabajo conocida por su amistad, asertividad, energía, lealtad, gentileza, confianza y dominancia.',
      history: '',
      categoria_de_tamanio: 'Grande',
      perks: [
        'Bueno para el entrenamiento de obediencia',
        'Requiere ejercicio regular',
        'Leal y amistoso',
      ],
      color: 'Variado',
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Moderado',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: [
        'Requiere mucho ejercicio y espacio',
        'Necesita estimulación mental',
      ],
      popularidad: 'Moderada',
      enfermedades_comunes: ['Displasia de cadera', 'Problemas oculares'],
    },
    {
      weight: {
        imperial: '30 - 150',
        metric: '14 - 68',
      },
      height: {
        imperial: '14 - 17',
        metric: '36 - 43',
      },
      id: 11,
      name: 'American Bully',
      bred_for: 'Perro de compañía familiar',
      breed_group: '',
      life_span: '8 – 15 años',
      temperament:
        'Fuerte de voluntad, Testarudo, Amistoso, Payaso, Cariñoso, Leal, Obediente, Inteligente, Valiente',
      origin: 'Estados Unidos',
      reference_image_id: 'sqQJDtbpY',
      image: {
        id: 'sqQJDtbpY',
        width: 1024,
        height: 683,
        url: 'https://cdn2.thedogapi.com/images/sqQJDtbpY.jpg',
      },
      searchTerms: ['American Bully', 'perro de compañía'],
      country_code: 'US',
      description:
        'El American Bully es una raza originaria de Estados Unidos y se destaca por su fuerte voluntad, testarudez, amistad, payasadas, cariño, lealtad, obediencia, inteligencia y valentía.',
      history: '',
      categoria_de_tamanio: 'Mediano',
      perks: [
        'Bueno para compañía',
        'Necesita espacio para jugar y ejercitarse',
        'Bueno con niños',
      ],
      color: 'Variado',
      nivel_de_energia: 'Moderado',
      facilidad_de_entrenamiento: 'Moderado',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: [
        'Requiere mucho ejercicio y espacio',
        'Necesita estimulación mental',
      ],
      popularidad: 'Moderada',
      enfermedades_comunes: ['Displasia de cadera', 'Alergias'],
    },
    {
      weight: {
        imperial: '20 - 40',
        metric: '9 - 18',
      },
      height: {
        imperial: '15 - 19',
        metric: '38 - 48',
      },
      id: 12,
      name: 'Perro esquimal americano',
      bred_for: 'Artista de circo',
      breed_group: 'No deportivo',
      life_span: '12 - 15 años',
      temperament: 'Amistoso, Alerta, Reservado, Inteligente, Protector',
      origin: 'Estados Unidos',
      reference_image_id: 'Bymjyec4m',
      image: {
        id: 'Bymjyec4m',
        width: 1000,
        height: 802,
        url: 'https://cdn2.thedogapi.com/images/Bymjyec4m.jpg',
      },
      searchTerms: ['Perro esquimal americano', 'artista de circo'],
      country_code: 'US',
      description:
        'El Perro esquimal americano es una raza no deportiva que se destacaba como artista de circo. Es amistoso, alerta, reservado, inteligente y protector.',
      history: '',
      categoria_de_tamanio: 'Mediano',
      perks: [
        'Bueno para compañía',
        'Necesita ejercicio moderado',
        'Bueno con niños',
      ],
      color: 'Blanco',
      nivel_de_energia: 'Moderado',
      facilidad_de_entrenamiento: 'Moderado',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: [
        'Requiere mucho ejercicio y estimulación mental',
        'Necesita atención y cuidado del pelaje',
      ],
      popularidad: 'Moderada',
      enfermedades_comunes: ['Displasia de cadera', 'Problemas de oído'],
    },
    {
      weight: {
        imperial: '7 - 10',
        metric: '3 - 5',
      },
      height: {
        imperial: '9 - 12',
        metric: '23 - 30',
      },
      id: 13,
      name: 'Perro esquimal americano (miniatura)',
      bred_for: 'Compañía',
      breed_group: 'No deportivo',
      life_span: '13 – 15 años',
      temperament: 'Amistoso, Alerta, Reservado, Inteligente, Protector',
      origin: 'Estados Unidos',
      reference_image_id: '_gn8GLrE6',
      image: {
        id: '_gn8GLrE6',
        width: 730,
        height: 487,
        url: 'https://cdn2.thedogapi.com/images/_gn8GLrE6.jpg',
      },
      searchTerms: ['Perro esquimal americano (miniatura)', 'compañía'],
      country_code: 'US',
      description:
        'El Perro esquimal americano en su versión miniatura es una raza criada principalmente para ser una compañía agradable. Es amistoso, alerta, reservado, inteligente y protector.',
      history: '',
      categoria_de_tamanio: 'Pequeño',
      perks: ['Compañía agradable', 'Amistoso', 'Inteligente'],
      color: '',
      nivel_de_energia: 'Moderado',
      facilidad_de_entrenamiento: 'Moderado',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: [],
      popularidad: 'Moderada',
      enfermedades_comunes: [],
    },
    {
      weight: {
        imperial: '65 - 75',
        metric: '29 - 34',
      },
      height: {
        imperial: '21 - 28',
        metric: '53 - 71',
      },
      id: 14,
      name: 'Sabueso americano',
      bred_for: 'Caza de zorros, perro rastreador',
      breed_group: 'Sabueso',
      life_span: '8 - 15 años',
      temperament:
        'Amable, de temperamento dulce, leal, independiente, inteligente, cariñoso',
      origin: 'Estados Unidos',
      reference_image_id: 'S14n1x9NQ',
      image: {
        id: 'S14n1x9NQ',
        width: 3000,
        height: 2400,
        url: 'https://cdn2.thedogapi.com/images/S14n1x9NQ.jpg',
      },
      searchTerms: ['Sabueso americano', 'perro de caza', 'perro rastreador'],
      country_code: 'US',
      description:
        'El Sabueso americano es una raza de sabueso criada para la caza de zorros y como perro rastreador. Es amable, de temperamento dulce, leal, independiente, inteligente y cariñoso.',
      history: '',
      categoria_de_tamanio: 'Grande',
      perks: [
        'Caza de zorros',
        'Perro rastreador',
        'Amable',
        'Leal',
        'Independiente',
        'Inteligente',
        'Cariñoso',
      ],
      color: '',
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Moderado',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: [],
      popularidad: 'Moderada',
      enfermedades_comunes: [],
    },
    {
      weight: {
        imperial: '30 - 60',
        metric: '14 - 27',
      },
      height: {
        imperial: '17 - 21',
        metric: '43 - 53',
      },
      id: 15,
      name: 'American Pit Bull Terrier',
      bred_for: 'Combates',
      breed_group: 'Terrier',
      life_span: '10 - 15 años',
      temperament:
        'Fuerte de voluntad, Testarudo, Amistoso, Payaso, Cariñoso, Leal, Obediente, Inteligente, Valiente',
      origin: 'Estados Unidos',
      reference_image_id: 'HkC31gcNm',
      image: {
        id: 'HkC31gcNm',
        width: 300,
        height: 244,
        url: 'https://cdn2.thedogapi.com/images/HkC31gcNm.png',
      },
      searchTerms: ['American Pit Bull Terrier', 'perro de combate'],
      country_code: 'US',
      description:
        'El American Pit Bull Terrier es una raza criada originalmente para peleas de perros. A pesar de su pasado, es fuerte de voluntad, testarudo, amistoso, payaso, cariñoso, leal, obediente, inteligente y valiente.',
      history: 'No disponible',
      categoria_de_tamanio: 'Mediano',
      perks: [
        'Fuerte de voluntad',
        'Testarudo',
        'Amistoso',
        'Payaso',
        'Cariñoso',
        'Leal',
        'Obediente',
        'Inteligente',
        'Valiente',
      ],
      color: 'No disponible',
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Moderado',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: [],
      popularidad: 'Moderada',
      enfermedades_comunes: [],
    },
    {
      weight: {
        imperial: '50 - 60',
        metric: '23 - 27',
      },
      height: {
        imperial: '17 - 19',
        metric: '43 - 48',
      },
      id: 16,
      name: 'American Staffordshire Terrier',
      bred_for: '',
      breed_group: 'Terrier',
      life_span: '12 - 15 años',
      temperament: 'Tenaz, Amistoso, Devoto, Leal, Atento, Valiente',
      origin: 'Estados Unidos',
      reference_image_id: 'rJIakgc4m',
      image: {
        id: 'rJIakgc4m',
        width: 357,
        height: 500,
        url: 'https://cdn2.thedogapi.com/images/rJIakgc4m.jpg',
      },
      searchTerms: ['American Staffordshire Terrier'],
      country_code: 'US',
      description:
        'El American Staffordshire Terrier es una raza de terrier que se caracteriza por su tenacidad, amistad, devoción, lealtad, atención y valentía.',
      history: '',
      categoria_de_tamanio: 'Mediano',
      perks: ['Tenaz', 'Amistoso', 'Devoto', 'Leal', 'Atento', 'Valiente'],
      color: '',
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Moderado',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: [],
      popularidad: 'Moderada',
      enfermedades_comunes: [],
    },
    {
      weight: {
        imperial: '25 - 45',
        metric: '11 - 20',
      },
      height: {
        imperial: '15 - 18',
        metric: '38 - 46',
      },
      id: 17,
      name: 'Spaniel de agua americano',
      bred_for: 'Búsqueda y recuperación de aves',
      breed_group: 'Deportivo',
      life_span: '10 - 12 años',
      temperament:
        'Amistoso, Enérgico, Obediente, Inteligente, Protector, Adiestrable',
      origin: 'Estados Unidos',
      reference_image_id: 'SkmRJl9VQ',
      image: {
        id: 'SkmRJl9VQ',
        width: 1600,
        height: 1264,
        url: 'https://cdn2.thedogapi.com/images/SkmRJl9VQ.jpg',
      },
      searchTerms: [
        'Spaniel de agua americano',
        'perro de búsqueda y recuperación',
      ],
      country_code: 'US',
      description:
        'El Spaniel de agua americano es una raza deportiva criada para la búsqueda y recuperación de aves. Es amistoso, enérgico, obediente, inteligente, protector y adiestrable.',
      history: '',
      categoria_de_tamanio: 'Mediano',
      perks: [
        'Amistoso',
        'Enérgico',
        'Obediente',
        'Inteligente',
        'Protector',
        'Adiestrable',
      ],
      color: '',
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Alto',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: [],
      popularidad: 'Moderada',
      enfermedades_comunes: [],
    },
    {
      weight: {
        imperial: '48 - 55',
        metric: '22 - 25',
      },
      height: {
        imperial: '20 - 22',
        metric: '51 - 56',
      },
      id: 19,
      name: 'Appenzeller Sennenhund',
      bred_for: 'Pastoreo de ganado, tirar de carros y proteger la granja',
      breed_group: 'Pastor',
      life_span: '12 – 14 años',
      temperament: 'Confiable, Intrépido, Enérgico, Vivo, Seguro de sí mismo',
      origin: 'Suiza', // El Appenzeller Sennenhund es originario de Suiza
      reference_image_id: 'HkNkxlqEX',
      image: {
        id: 'HkNkxlqEX',
        width: 400,
        height: 600,
        url: 'https://cdn2.thedogapi.com/images/HkNkxlqEX.jpg',
      },
      searchTerms: [
        'Appenzeller Sennenhund',
        'pastoreo de ganado',
        'tirar de carros',
        'proteger la granja',
      ],
      country_code: 'CH', // El Appenzeller Sennenhund es originario de Suiza
      description:
        'El Appenzeller Sennenhund es una raza versátil criada para el pastoreo de ganado, el tirado de carros y la protección de la granja. Es confiable, intrépido, enérgico, vivo y seguro de sí mismo.',
      history:
        'El Appenzeller Sennenhund es una raza antigua de perro de montaña de los Alpes suizos.',
      categoria_de_tamanio: 'Mediano',
      perks: [
        'Confiable',
        'Intrépido',
        'Enérgico',
        'Vivo',
        'Seguro de sí mismo',
      ],
      color: 'Negro, Marrón, Blanco',
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Moderado',
      salud_general: 'Excelente',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: [
        'Requiere ejercicio diario intenso',
        'Requiere entrenamiento de socialización desde una edad temprana',
      ],
      popularidad: 'Moderada',
      enfermedades_comunes: [
        'Displasia de cadera',
        'Gastric Dilatation-Volvulus (GDV)',
        'Displasia de codo',
      ],
    },
    {
      weight: {
        imperial: '44 - 62',
        metric: '20 - 28',
      },
      height: {
        imperial: '17 - 20',
        metric: '43 - 51',
      },
      id: 21,
      name: 'Perro pastor australiano',
      country_code: 'AU',
      bred_for: 'Pastoreo de ganado, pruebas de pastoreo',
      breed_group: 'Pastoreo',
      life_span: '12 - 14 años',
      temperament: 'Cauteloso, Enérgico, Leal, Obediente, Protector, Valiente',
      origin: 'Australia',
      reference_image_id: 'IBkYVm4v1',
      image: {
        id: 'IBkYVm4v1',
        width: 736,
        height: 850,
        url: 'https://cdn2.thedogapi.com/images/IBkYVm4v1.jpg',
      },
      searchTerms: [
        'Perro pastor australiano',
        'pastoreo de ganado',
        'pruebas de pastoreo',
      ],
      description:
        'El perro pastor australiano es una raza originaria de Australia. Se crió originalmente para el pastoreo de ganado y pruebas de pastoreo. Son perros cautelosos, enérgicos, leales, obedientes, protectores y valientes.',
      history:
        'El perro pastor australiano se desarrolló en Australia para el pastoreo de ganado y las pruebas de pastoreo.',
      categoria_de_tamanio: 'Mediano',
      perks: [
        'Cauteloso',
        'Enérgico',
        'Leal',
        'Obediente',
        'Protector',
        'Valiente',
      ],
      color: 'Azul merle, negro, rojo merle, rojo sólido', // Los colores comunes de esta raza
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Alto',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: [
        'Necesita ejercicio diario y mental',
        'Requiere socialización temprana',
      ],
      popularidad: 'Moderada',
      enfermedades_comunes: [
        'Displasia de cadera',
        'Displasia de codo',
        'Atrofia progresiva de retina',
      ],
    },
    {
      weight: {
        imperial: '31 - 46',
        metric: '14 - 21',
      },
      height: {
        imperial: '17 - 20',
        metric: '43 - 51',
      },
      id: 22,
      name: 'Australian Kelpie',
      country_code: 'AU',
      bred_for: 'Perro de granja, pastoreo de ganado',
      breed_group: 'Pastoreo',
      life_span: '10 - 13 años',
      temperament: 'Amigable, Enérgico, Alerta, Leal, Inteligente, Ansioso',
      origin: 'Australia',
      reference_image_id: 'Hyq1ge9VQ',
      image: {
        id: 'Hyq1ge9VQ',
        width: 800,
        height: 533,
        url: 'https://cdn2.thedogapi.com/images/Hyq1ge9VQ.jpg',
      },
      searchTerms: [
        'Australian Kelpie',
        'perro de granja',
        'pastoreo de ganado',
      ],
      description:
        'El Australian Kelpie es un perro originario de Australia. Se crió para ser un perro de granja y para el pastoreo de ganado. Son perros amigables, enérgicos, alertas, leales, inteligentes y ansiosos.',
      history:
        'El Australian Kelpie fue criado en Australia para ser un perro de granja y para el pastoreo de ganado.',
      categoria_de_tamanio: 'Mediano',
      perks: [
        'Amigable',
        'Enérgico',
        'Alerta',
        'Leal',
        'Inteligente',
        'Ansioso',
      ],
      color: 'Negro, Marrón, Rojo, Gris', // Colores comunes de esta raza
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Alto',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: [
        'Necesita ejercicio diario y mental',
        'Requiere socialización temprana',
      ],
      popularidad: 'Moderada',
      enfermedades_comunes: [
        'Displasia de cadera',
        'Atrofia progresiva de retina',
      ],
    },
    {
      weight: {
        imperial: '35 - 65',
        metric: '16 - 29',
      },
      height: {
        imperial: '18 - 23',
        metric: '46 - 58',
      },
      id: 23,
      name: 'Pastor australiano',
      country_code: 'AU',
      bred_for: 'Pastoreo de ovejas',
      breed_group: 'Pastoreo',
      life_span: '12 - 16 años',
      temperament: 'De buen carácter, Cariñoso, Inteligente, Activo, Protector',
      origin: 'Australia',
      reference_image_id: 'B1-llgq4m',
      image: {
        id: 'B1-llgq4m',
        width: 1200,
        height: 733,
        url: 'https://cdn2.thedogapi.com/images/B1-llgq4m.jpg',
      },
      searchTerms: ['Pastor australiano', 'pastoreo de ovejas'],
      description:
        'El pastor australiano es un perro de pastoreo originario de Australia. Se crió para el pastoreo de ovejas. Son perros de buen carácter, cariñosos, inteligentes, activos y protectores.',
      history:
        'El pastor australiano fue criado en Australia para pastoreo de ovejas.',
      categoria_de_tamanio: 'Mediano',
      perks: [
        'De buen carácter',
        'Cariñoso',
        'Inteligente',
        'Activo',
        'Protector',
      ],
      color: 'Multicolor, Azul merle, Rojo merle', // Colores comunes de esta raza
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Alto',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: [
        'Necesita ejercicio diario y mental',
        'Requiere socialización temprana',
      ],
      popularidad: 'Moderada',
      enfermedades_comunes: [
        'Displasia de cadera',
        'Atrofia progresiva de retina',
      ],
    },
    {
      weight: {
        imperial: '14 - 16',
        metric: '6 - 7',
      },
      height: {
        imperial: '10 - 11',
        metric: '25 - 28',
      },
      id: 24,
      name: 'Terrier australiano',
      country_code: 'AU',
      bred_for: 'Pastoreo de ganado, caza de serpientes y roedores',
      breed_group: 'Terrier',
      life_span: '15 años',
      temperament:
        'Animado, Alerta, Leal, Compañero, de Temperamento Equilibrado, Valiente',
      origin: 'Australia',
      reference_image_id: 'r1Ylge5Vm',
      image: {
        id: 'r1Ylge5Vm',
        width: 1081,
        height: 720,
        url: 'https://cdn2.thedogapi.com/images/r1Ylge5Vm.jpg',
      },
      searchTerms: [
        'Terrier australiano',
        'pastoreo de ganado',
        'caza de serpientes',
        'caza de roedores',
      ],
      description:
        'El terrier australiano es un perro originario de Australia. Se crió para el pastoreo de ganado, la caza de serpientes y la caza de roedores. Son perros animados, alertas, leales, compañeros, de temperamento equilibrado y valientes.',
      history:
        'El terrier australiano fue criado en Australia para pastoreo de ganado, caza de serpientes y roedores.',
      categoria_de_tamanio: 'Pequeño',
      perks: [
        'Animado',
        'Alerta',
        'Leal',
        'Compañero',
        'De temperamento equilibrado',
        'Valiente',
      ],
      color: 'Azul, rojo', // Colores comunes de esta raza
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Moderado',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: [
        'Necesita ejercicio diario y mental',
        'Requiere socialización temprana',
      ],
      popularidad: 'Moderada',
      enfermedades_comunes: ['Alergias de piel', 'Problemas dentales'],
    },
    {
      weight: {
        imperial: '14 - 16',
        metric: '6 - 7',
      },
      height: {
        imperial: '10 - 11',
        metric: '25 - 28',
      },
      id: 24,
      name: 'Terrier australiano',
      bred_for: 'Pastoreo de ganado, caza de serpientes y roedores',
      breed_group: 'Terrier',
      life_span: '15 años',
      temperament:
        'Animado, Alerta, Leal, Compañero, de Temperamento Equilibrado, Valiente',
      origin: 'Australia', // Traducido de 'Origin'
      reference_image_id: 'r1Ylge5Vm',
      image: {
        id: 'r1Ylge5Vm',
        width: 1081,
        height: 720,
        url: 'https://cdn2.thedogapi.com/images/r1Ylge5Vm.jpg',
      },
      searchTerms: [
        'Terrier australiano',
        'pastoreo de ganado',
        'caza de serpientes',
        'caza de roedores',
      ],
      country_code: 'AU',
      description:
        'El terrier australiano es un perro originario de Australia. Se crió para el pastoreo de ganado, la caza de serpientes y la caza de roedores. Son perros animados, alertas, leales, compañeros, de temperamento equilibrado y valientes.',
      history:
        'Criado en Australia para pastorear ganado y cazar serpientes y roedores.',
      categoria_de_tamanio: 'Pequeño',
      perks: [
        'Animado',
        'Alerta',
        'Leal',
        'Compañero',
        'De temperamento equilibrado',
        'Valiente',
      ],
      color: 'Variable', // Este es un valor por defecto, ya que no tenemos la información exacta
      nivel_de_energia: 'Alto', // Este es un valor por defecto, basado en el temperamento del perro
      facilidad_de_entrenamiento: 'Moderado', // Este es un valor por defecto, basado en el temperamento del perro
      salud_general: 'Buena', // Este es un valor por defecto, asumiendo que la raza no tiene problemas de salud notorios
      compatibilidad_con_otros_animales: 'Moderada', // Este es un valor por defecto, asumiendo que el perro es un Terrier
      necesidades_especiales: ['Necesita ejercicio regular'], // Este es un valor por defecto, basado en el nivel de energía del perro
      popularidad: 'Moderada', // Este es un valor por defecto, asumiendo que la raza es conocida pero no extremadamente popular
      enfermedades_comunes: ['Ninguna notable'], // Este es un valor por defecto, asumiendo que la raza no tiene problemas de salud notorios
    },
    {
      weight: {
        imperial: '33 - 55',
        metric: '15 - 25',
      },
      height: {
        imperial: '23 - 29',
        metric: '58 - 74',
      },
      id: 25,
      name: 'Azawakh',
      bred_for: 'Protección de ganado, caza',
      breed_group: 'Levantador',
      life_span: '10 - 13 años',
      temperament: 'Distante, Cariñoso, Atento, Resistente, Feroz, Refinado',
      origin: 'África Occidental', // Según mi conocimiento, Azawakh es originario de África Occidental
      reference_image_id: 'SkvZgx94m',
      image: {
        id: 'SkvZgx94m',
        width: 1024,
        height: 768,
        url: 'https://cdn2.thedogapi.com/images/SkvZgx94m.jpg',
      },
      searchTerms: ['Azawakh', 'protección de ganado', 'caza'],
      country_code: 'ML', // ML es el código del país de Mali, de donde se cree que proviene la raza Azawakh.
      description:
        'El Azawakh es una raza de perro utilizada para la protección de ganado y la caza. Son perros distantes, cariñosos, atentos, resistentes, feroces y refinados.',
      history:
        'El Azawakh es una antigua raza de perros de caza del Sahel, región del África Occidental.', // Un poco de historia basada en lo que sé sobre la raza.
      categoria_de_tamanio: 'Grande',
      perks: [
        'Distante',
        'Cariñoso',
        'Atento',
        'Resistente',
        'Feroz',
        'Refinado',
      ],
      color: 'Varios', // Los Azawakhs vienen en una variedad de colores.
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Moderado',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: [
        'Necesita ejercicio diario debido a su alto nivel de energía',
      ],
      popularidad: 'Moderada',
      enfermedades_comunes: [
        'Osteocondritis disecante',
        'Hipotiroidismo',
        'Epilepsia',
      ], // Algunas enfermedades comunes para la raza Azawakh.
    },
    {
      weight: {
        imperial: '40 - 65',
        metric: '18 - 29',
      },
      height: {
        imperial: '20 - 26',
        metric: '51 - 66',
      },
      id: 26,
      name: 'Barbet',
      bred_for: 'Caza de aves acuáticas',
      breed_group: 'Grupo de Perros de Caza', // Aunque no se mencionó originalmente, los Barbet generalmente se clasifican como perros de caza
      life_span: '13 – 15 años',
      temperament: 'Obediente, Compañero, Inteligente, Alegre',
      origin: 'Francia', // Según mi conocimiento, Barbet es originario de Francia
      reference_image_id: 'HyWGexcVQ',
      image: {
        id: 'HyWGexcVQ',
        width: 853,
        height: 1280,
        url: 'https://cdn2.thedogapi.com/images/HyWGexcVQ.jpg',
      },
      searchTerms: ['Barbet', 'caza de aves acuáticas'],
      country_code: 'FR', // FR es el código de país de Francia, de donde es originario el Barbet.
      description:
        'El Barbet es una raza de perro utilizada para la caza de aves acuáticas. Son perros obedientes, compañeros, inteligentes y alegres.',
      history: 'El Barbet es una raza de perros de agua francesa muy antigua.', // Un poco de historia basada en lo que sé sobre la raza.
      categoria_de_tamanio: 'Mediano',
      perks: ['Obediente', 'Compañero', 'Inteligente', 'Alegre'],
      color: 'Varios', // Los Barbets vienen en una variedad de colores.
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Alto',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Alta',
      necesidades_especiales: [
        'Necesita ejercicio diario debido a su alto nivel de energía',
      ],
      popularidad: 'Moderada',
      enfermedades_comunes: ['Displasia de cadera', 'Problemas oculares'], // Algunas enfermedades comunes para la raza Barbet.
    },
    {
      weight: {
        imperial: '22 - 24',
        metric: '10 - 11',
      },
      height: {
        imperial: '16 - 17',
        metric: '41 - 43',
      },
      id: 28,
      name: 'Basenji',
      bred_for: 'Caza',
      breed_group: 'Levantador',
      life_span: '10 - 12 años',
      temperament: 'Cariñoso, Enérgico, Alerta, Curioso, Juguetón, Inteligente',
      origin: 'Congo', // Basenji es originario del Congo
      reference_image_id: 'H1dGlxqNQ',
      image: {
        id: 'H1dGlxqNQ',
        width: 740,
        height: 493,
        url: 'https://cdn2.thedogapi.com/images/H1dGlxqNQ.jpg',
      },
      searchTerms: ['Basenji', 'caza'],
      country_code: 'CG', // CG es el código de país del Congo, de donde es originario el Basenji.
      description:
        'El Basenji es un perro de caza. Son perros cariñosos, enérgicos, alertas, curiosos, juguetones e inteligentes.',
      history:
        'El Basenji es una raza de perros muy antigua, originaria de la zona central de África. Han sido compañeros de caza de los humanos desde tiempos muy antiguos.',
      categoria_de_tamanio: 'Pequeño',
      perks: [
        'Cariñoso',
        'Enérgico',
        'Alerta',
        'Curioso',
        'Juguetón',
        'Inteligente',
      ],
      color: 'Rojo, Negro, Tricolor', // Los Basenjis suelen ser de estos colores.
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Moderado',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: [
        'Necesita ejercicio físico y mental diario debido a su alto nivel de energía y curiosidad',
      ],
      popularidad: 'Moderada',
      enfermedades_comunes: ['Síndrome de Fanconi', 'Distrofia corneal'], // Algunas enfermedades comunes para la raza Basenji.
    },
    {
      weight: {
        imperial: '35 - 40',
        metric: '16 - 18',
      },
      height: {
        imperial: '13 - 15',
        metric: '33 - 38',
      },
      id: 29,
      name: 'Basset Bleu de Gascogne',
      bred_for: 'Caza a pie',
      breed_group: 'Levantador',
      life_span: '10 - 14 años',
      temperament: 'Cariñoso, Animado, Ágil, Curioso, Feliz, Activo',
      origin: 'Francia', // Basset Bleu de Gascogne es originario de Francia
      reference_image_id: 'BkMQll94X',
      image: {
        id: 'BkMQll94X',
        width: 1280,
        height: 853,
        url: 'https://cdn2.thedogapi.com/images/BkMQll94X.jpg',
      },
      searchTerms: ['Basset Bleu de Gascogne', 'caza a pie'],
      country_code: 'FR', // FR es el código de país de Francia, de donde es originario el Basset Bleu de Gascogne.
      description:
        'El Basset Bleu de Gascogne es una raza de perro utilizada para la caza a pie. Son perros cariñosos, animados, ágiles, curiosos, felices y activos.',
      history:
        'El Basset Bleu de Gascogne es una raza muy antigua de perros franceses, originalmente utilizada para la caza a pie en la región de Gascuña.',
      categoria_de_tamanio: 'Pequeño',
      perks: ['Cariñoso', 'Animado', 'Ágil', 'Curioso', 'Feliz', 'Activo'],
      color: 'Azul', // Los Basset Bleu de Gascogne son típicamente de color azul.
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Moderado',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: [
        'Necesita ejercicio físico y mental diario debido a su alto nivel de energía y su instinto de caza',
      ],
      popularidad: 'Moderada',
      enfermedades_comunes: ['Obesidad', 'Otitis'], // Algunas enfermedades comunes para la raza Basset Bleu de Gascogne.
    },
    {
      weight: {
        imperial: '50 - 65',
        metric: '23 - 29',
      },
      height: {
        imperial: '14',
        metric: '36',
      },
      id: 30,
      name: 'Basset Hound',
      bred_for: 'Caza por olfato',
      breed_group: 'Levantador',
      life_span: '12 - 15 años',
      temperament:
        'Tenaz, Amigable, Cariñoso, Devoto, de Temperamento Dulce, Gentil',
      origin: 'Francia', // Basset Hound es originario de Francia
      reference_image_id: 'Sy57xx9EX',
      image: {
        id: 'Sy57xx9EX',
        width: 1024,
        height: 640,
        url: 'https://cdn2.thedogapi.com/images/Sy57xx9EX.jpg',
      },
      searchTerms: ['Basset Hound', 'caza por olfato'],
      country_code: 'FR', // FR es el código de país de Francia, de donde es originario el Basset Hound.
      description:
        'El Basset Hound es una raza de perro utilizada para la caza por olfato. Son perros tenaces, amigables, cariñosos, devotos, de temperamento dulce y gentil.',
      history:
        'El Basset Hound es una raza antigua y famosa de perros de rastreo. Se crió por su habilidad para seguir un olor a través de terrenos difíciles.',
      categoria_de_tamanio: 'Mediano',
      perks: [
        'Tenaz',
        'Amigable',
        'Cariñoso',
        'Devoto',
        'Temperamento Dulce',
        'Gentil',
      ],
      color: 'Tricolor', // Los Basset Hound son típicamente tricolores: blanco, negro y marrón.
      nivel_de_energia: 'Moderado',
      facilidad_de_entrenamiento: 'Moderado',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Alta',
      necesidades_especiales: [
        'Requiere mucho ejercicio para mantener un peso saludable debido a su predisposición a la obesidad',
      ],
      popularidad: 'Alta',
      enfermedades_comunes: [
        'Obesidad',
        'Problemas de oído debido a sus largas orejas',
      ], // Algunas enfermedades comunes para la raza Basset Hound.
    },
    {
      weight: {
        imperial: '20 - 35',
        metric: '9 - 16',
      },
      height: {
        imperial: '13 - 15',
        metric: '33 - 38',
      },
      id: 31,
      name: 'Beagle',
      bred_for: 'Caza de conejos y liebres',
      breed_group: 'Levantador',
      life_span: '13 - 16 años',
      temperament:
        'Amigable, de Temperamento Equilibrado, Excitable, Determinado, Gentil, Inteligente',
      origin: 'Inglaterra', // Beagle es originario de Inglaterra
      reference_image_id: 'Syd4xxqEm',
      image: {
        id: 'Syd4xxqEm',
        width: 1000,
        height: 667,
        url: 'https://cdn2.thedogapi.com/images/Syd4xxqEm.jpg',
      },
      searchTerms: ['Beagle', 'caza de conejos', 'caza de liebres'],
      country_code: 'GB', // GB es el código de país de Reino Unido, de donde es originario el Beagle.
      description:
        'El Beagle es una raza de perro utilizada para la caza de conejos y liebres. Son perros amigables, de temperamento equilibrado, excitables, determinados, gentiles e inteligentes.',
      history:
        'El Beagle es una raza de perro pequeña a mediana, similar en apariencia a la mucho más grande Foxhound. Los Beagles son perros de caza y fueron criados para este propósito principalmente para rastrear liebres, conejos y otras pequeñas presas.',
      categoria_de_tamanio: 'Mediano',
      perks: [
        'Amigable',
        'Temperamento Equilibrado',
        'Excitable',
        'Determinado',
        'Gentil',
        'Inteligente',
      ],
      color: 'Tricolor', // Los Beagle son típicamente tricolores: blanco, negro y marrón.
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Moderado',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Alta',
      necesidades_especiales: [
        'Necesidad de mucho ejercicio y estímulo mental debido a su alta energía e inteligencia',
      ],
      popularidad: 'Alta',
      enfermedades_comunes: [
        'Obesidad',
        'Displasia de cadera',
        'Hipotiroidismo',
      ], // Algunas enfermedades comunes para la raza Beagle.
    },
    {
      weight: {
        imperial: '45 - 55',
        metric: '20 - 25',
      },
      height: {
        imperial: '20 - 22',
        metric: '51 - 56',
      },
      id: 32,
      name: 'Collie barbudo',
      bred_for: 'Pastoreo de ovejas',
      breed_group: 'Pastoreo',
      life_span: '12 - 14 años',
      temperament:
        'Seguro de sí mismo, Robusto, Vivo, Alerta, Inteligente, Activo',
      origin: 'Escocia', // El Collie Barbudo es originario de Escocia
      reference_image_id: 'A09F4c1qP',
      image: {
        id: 'A09F4c1qP',
        width: 733,
        height: 733,
        url: 'https://cdn2.thedogapi.com/images/A09F4c1qP.jpg',
      },
      searchTerms: ['Collie barbudo', 'pastoreo de ovejas'],
      country_code: 'GB', // GB es el código de país de Reino Unido, de donde es originario el Collie Barbudo.
      description:
        'El Collie barbudo es una raza de perro utilizada para el pastoreo de ovejas. Son perros seguros de sí mismos, robustos, vivos, alertas, inteligentes y activos.',
      history:
        'El Collie Barbudo, también conocido como "Highland Collie", es una raza de perro de pastoreo que se originó en Escocia. Los Collies Barbudos han estado pastoreando ovejas en las Tierras Altas de Escocia durante siglos.',
      categoria_de_tamanio: 'Mediano',
      perks: [
        'Seguro de sí mismo',
        'Robusto',
        'Vivo',
        'Alerta',
        'Inteligente',
        'Activo',
      ],
      color: 'Gris', // Los Collie Barbudo son generalmente grises, aunque pueden tener variaciones de color.
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Alto',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Alta',
      necesidades_especiales: [
        'Necesita mucho ejercicio y espacio para correr debido a su naturaleza activa y su crianza como perro de pastoreo',
      ],
      popularidad: 'Moderada',
      enfermedades_comunes: [
        'Displasia de cadera',
        'Atrofia progresiva de la retina',
        'Hipotiroidismo',
      ], // Algunas enfermedades comunes para la raza Collie Barbudo.
    },
    {
      weight: {
        imperial: '80 - 110',
        metric: '36 - 50',
      },
      height: {
        imperial: '24 - 27.5',
        metric: '61 - 70',
      },
      id: 33,
      name: 'Beauceron',
      bred_for: 'Pastoreo de jabalíes, caza, guardia',
      breed_group: 'Pastoreo',
      life_span: '10 - 12 años',
      temperament: 'Sin miedo, Amigable, Inteligente, Protector, Calmo',
      origin: 'Francia', // El Beauceron es originario de Francia
      reference_image_id: 'HJQ8ge5V7',
      image: {
        id: 'HJQ8ge5V7',
        width: 720,
        height: 563,
        url: 'https://cdn2.thedogapi.com/images/HJQ8ge5V7.jpg',
      },
      searchTerms: ['Beauceron', 'Pastoreo de jabalíes', 'Caza', 'Guardia'],
      country_code: 'FR', // FR es el código de país de Francia, de donde es originario el Beauceron.
      description:
        'El Beauceron es una raza de perro conocida por su valentía, amabilidad, inteligencia y temperamento calmado. Originalmente se utilizaban para pastorear jabalíes, cazar y como perros guardianes.',
      history:
        'El Beauceron, también conocido como Berger de Beauce o Pastor de Beauce, es una raza de perro de pastoreo de origen francés. Se utilizaba para pastorear ovejas y para cazar jabalíes.',
      categoria_de_tamanio: 'Grande',
      perks: ['Sin miedo', 'Amigable', 'Inteligente', 'Protector', 'Calmo'],
      color: 'Negro y fuego', // Los Beaucerons son generalmente negros y fuego, aunque pueden tener variaciones de color.
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Alto',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: [
        'Necesita mucho ejercicio y entrenamiento debido a su inteligencia y energía',
      ],
      popularidad: 'Moderada',
      enfermedades_comunes: [
        'Displasia de cadera',
        'Hipotiroidismo',
        'Gastritis',
      ], // Algunas enfermedades comunes para la raza Beauceron.
    },
    {
      weight: {
        imperial: '17 - 23',
        metric: '8 - 10',
      },
      height: {
        imperial: '15 - 16',
        metric: '38 - 41',
      },
      id: 34,
      name: 'Bedlington Terrier',
      bred_for: 'Matar ratas, tejones, otras alimañas',
      breed_group: 'Terrier',
      life_span: '14 - 16 años',
      temperament: 'Afectuoso, Enérgico, Inteligente, Buen temperamento',
      origin: 'Reino Unido', // El Bedlington Terrier es originario del Reino Unido
      reference_image_id: 'ByK8gx947',
      image: {
        id: 'ByK8gx947',
        width: 804,
        height: 531,
        url: 'https://cdn2.thedogapi.com/images/ByK8gx947.jpg',
      },
      searchTerms: ['Bedlington Terrier', 'Matar ratas', 'Tejones', 'Alimañas'],
      country_code: 'GB', // GB es el código de país del Reino Unido, de donde es originario el Bedlington Terrier.
      description:
        'El Bedlington Terrier es una raza de perro conocida por su carácter afectuoso, enérgico e inteligente. Originalmente se utilizaban para matar ratas, tejones y otras alimañas.',
      history:
        'El Bedlington Terrier es una raza de perro de terrier que se originó en la ciudad de Bedlington, en el norte de Inglaterra. Se utilizaban originalmente como perros cazadores de ratas y tejones.',
      categoria_de_tamanio: 'Mediano',
      perks: ['Afectuoso', 'Enérgico', 'Inteligente', 'Buen temperamento'],
      color: 'Blanco', // Los Bedlington Terriers son comúnmente de color blanco.
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Moderado',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: [
        'Requiere ejercicio regular debido a su alta energía',
      ],
      popularidad: 'Moderada',
      enfermedades_comunes: [
        'Problemas de hígado',
        'Displasia de cadera',
        'Problemas oculares',
      ], // Algunas enfermedades comunes para la raza Bedlington Terrier.
    },
    {
      weight: {
        imperial: '40 - 80',
        metric: '18 - 36',
      },
      height: {
        imperial: '22 - 26',
        metric: '56 - 66',
      },
      id: 36,
      name: 'Belgian Malinois',
      bred_for: 'Pastoreo de ganado',
      breed_group: 'Pastor',
      life_span: '12 - 14 años',
      temperament:
        'Vigilante, Alerta, Obstinado, Amistoso, Confiable, Trabajador, Activo, Protector',
      origin: 'Bélgica', // El Belgian Malinois es originario de Bélgica
      reference_image_id: 'r1f_ll5VX',
      image: {
        id: 'r1f_ll5VX',
        width: 604,
        height: 453,
        url: 'https://cdn2.thedogapi.com/images/r1f_ll5VX.jpg',
      },
      searchTerms: [
        'Belgian Malinois',
        'Pastoreo de ganado',
        'Vigilante',
        'Alerta',
        'Obstinado',
        'Amistoso',
        'Confiable',
        'Trabajador',
        'Activo',
        'Protector',
      ],
      country_code: 'BE', // BE es el código de país de Bélgica, de donde es originario el Belgian Malinois.
      description:
        'El Belgian Malinois es una raza de perro de pastor conocida por su temperamento vigilante, alerta, obstinado, amistoso, confiable, trabajador, activo y protector. Son especialmente conocidos por su papel en el pastoreo de ganado.',
      history:
        'El Belgian Malinois es una de las cuatro variedades de perros de pastor belga. Originalmente se criaban para el pastoreo de ganado, pero su versatilidad los ha llevado a diversos roles como perros policiales y de servicio.',
      categoria_de_tamanio: 'Grande',
      perks: [
        'Vigilante',
        'Alerta',
        'Obstinado',
        'Amistoso',
        'Confiable',
        'Trabajador',
        'Activo',
        'Protector',
      ],
      color: 'Marrón', // Los Belgian Malinois son comúnmente de color marrón.
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Alto',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: [
        'Requiere ejercicio regular debido a su alta energía',
        'Necesita estimulación mental regular',
      ],
      popularidad: 'Alta',
      enfermedades_comunes: [
        'Displasia de cadera',
        'Problemas oculares',
        'Epilepsia',
      ], // Algunas enfermedades comunes para la raza Belgian Malinois.
    },
    {
      weight: {
        imperial: '40 - 65',
        metric: '18 - 29',
      },
      height: {
        imperial: '22 - 26',
        metric: '56 - 66',
      },
      id: 38,
      name: 'Belgian Tervuren',
      bred_for: 'Guardia, trabajo de tracción, trabajo policial.',
      breed_group: 'Pastor',
      life_span: '10 - 12 años',
      temperament: 'Energético, Alerta, Leal, Inteligente, Atento, Protector',
      origin: 'Bélgica',
      reference_image_id: 'B1KdxlcNX',
      image: {
        id: 'B1KdxlcNX',
        width: 645,
        height: 380,
        url: 'https://cdn2.thedogapi.com/images/B1KdxlcNX.jpg',
      },
      searchTerms: ['Belgian Tervuren', 'Pastor', 'Protector'],
      country_code: 'BE',
      description:
        'El Belgian Tervuren es conocido por su energía y su agudo sentido de protección. Es un excelente perro de trabajo y se lleva bien con su familia.',
      history:
        'Originarios de Bélgica, fueron criados inicialmente para la guardia y el trabajo de tracción.',
      categoria_de_tamanio: 'Grande',
      perks: ['Guardián', 'Trabajador', 'Protector'],
      color: 'Negro, Marrón, Gris',
      nivel_de_energia: 'Alto',
      facilidad_de_entrenamiento: 'Alto',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Moderada',
      necesidades_especiales: ['Necesidad de ejercicio'],
      popularidad: 'Moderada',
      enfermedades_comunes: ['Displasia de cadera', 'Problemas oculares'],
    },
    {
      weight: {
        imperial: '65 - 120',
        metric: '29 - 54',
      },
      height: {
        imperial: '23 - 27.5',
        metric: '58 - 70',
      },
      id: 41,
      name: 'Bernese Mountain Dog',
      bred_for: 'Trabajo de tracción',
      breed_group: 'Trabajo',
      life_span: '7 - 10 años',
      temperament: 'Cariñoso, Leal, Inteligente, Fiel',
      origin: 'Suiza',
      reference_image_id: 'S1fFlx5Em',
      image: {
        id: 'S1fFlx5Em',
        width: 640,
        height: 427,
        url: 'https://cdn2.thedogapi.com/images/S1fFlx5Em.jpg',
      },
      searchTerms: ['Bernese Mountain Dog', 'Trabajo', 'Fiel'],
      country_code: 'CH',
      description:
        'El Bernese Mountain Dog es conocido por su lealtad y su inteligencia. Son excelentes perros de trabajo y se llevan bien con su familia.',
      history:
        'Originarios de Suiza, fueron criados inicialmente para el trabajo de tracción.',
      categoria_de_tamanio: 'Muy grande',
      perks: ['Leal', 'Inteligente', 'Fiel'],
      color: 'Negro, Blanco, Marrón',
      nivel_de_energia: 'Moderado',
      facilidad_de_entrenamiento: 'Alto',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Alta',
      necesidades_especiales: ['Necesidad de ejercicio'],
      popularidad: 'Alta',
      enfermedades_comunes: [
        'Displasia de cadera',
        'Problemas oculares',
        'Cáncer',
      ],
    },
    {
      weight: {
        imperial: '10 - 18',
        metric: '5 - 8',
      },
      height: {
        imperial: '9.5 - 11.5',
        metric: '24 - 29',
      },
      id: 42,
      name: 'Bichon Frise',
      bred_for: 'Compañía',
      breed_group: 'No deportivo',
      life_span: '15 años',
      temperament: 'Animado, Cariñoso, Alegre, Juguetón, Gentil, Sensible',
      origin: 'Francia',
      reference_image_id: 'HkuYlxqEQ',
      image: {
        id: 'HkuYlxqEQ',
        width: 480,
        height: 360,
        url: 'https://cdn2.thedogapi.com/images/HkuYlxqEQ.jpg',
      },
      searchTerms: ['Bichon Frise', 'Compañía', 'Alegre'],
      country_code: 'FR',
      description:
        'El Bichon Frise es un perro alegre y juguetón, perfecto para la compañía. Son sensibles y requieren una atención constante de su familia.',
      history:
        'Originario de Francia, el Bichon Frise fue criado para ser un perro de compañía.',
      categoria_de_tamanio: 'Pequeño',
      perks: ['Alegre', 'Juguetón', 'Cariñoso'],
      color: 'Blanco',
      nivel_de_energia: 'Moderado',
      facilidad_de_entrenamiento: 'Moderado',
      salud_general: 'Buena',
      compatibilidad_con_otros_animales: 'Alta',
      necesidades_especiales: [
        'Necesidad de atención',
        'Frecuentes visitas al peluquero',
      ],
      popularidad: 'Alta',
      enfermedades_comunes: ['Alergias', 'Problemas de piel'],
    },
  ];

  // export interface Dog {
  //   weight?:             Measurement;
  //   height?:             Measurement;
  //   id?:                 number;
  //   name?:               string;
  //   bred_for?:           string;
  //   breed_group?:        string;
  //   life_span?:          string;
  //   temperament?:        string;
  //   origin?:             string;
  //   reference_image_id?: string;
  //   image?:              Image;
  //   searchTerms?:        string[];
  //   country_code?:       string;
  //   description?:        string;
  //   history?:            string;
  //   categoria_de_tamanio?: 'Muy pequeño' | 'Pequeño' | 'Mediano' | 'Grande' | 'Muy grande';
  //   perks?:              string[];
  //   color?:              string;
  //   nivel_de_energia?:   'Bajo' | 'Moderado' | 'Alto';
  //   facilidad_de_entrenamiento?: 'Bajo' | 'Moderado' | 'Alto';
  //   salud_general?:      'Excelente' | 'Buena' | 'Regular' | 'Mala';
  //   compatibilidad_con_otros_animales?: 'Baja' | 'Moderada' | 'Alta';
  //   necesidades_especiales?: string[];
  //   popularidad?:        'Baja' | 'Moderada' | 'Alta';
  //   enfermedades_comunes?: string[];
  // }

  // export class Measurement {
  //   imperial?: string;
  //   metric?:   string;
  // }

  // export class Image {
  //   id?:     string;
  //   width?:  number;
  //   height?: number;
  //   url?:    string;
  // }

  // Para los objetos que me pasarás, de acuerdo a la interfaz Dog que hemos discutido, deberás hacer lo siguiente:

  // Si alguna propiedad del objeto que me das está en inglés, deberé traducirla al castellano.

  // Si alguna propiedad del objeto ya está en castellano, no debo hacer nada con ella.

  // Si alguna propiedad de la interfaz Dog no está presente en el objeto que me das, deberé agregarla con algún valor por defecto o un valor que tenga sentido de acuerdo al contexto. Algunas propiedades podrían quedar sin completar si no hay suficiente información disponible.

  // Si la raza tiene muchos colores, elegir los 3 más comunes

  //Es muy importante que ninguna categoría quede vacía. Todas deben tener información. La idea no es que los completes con valores por defecto sino que los completes con la información que vos tenés acerca de esa raza de perro, que es mucha ya que tenes todos los textos de internet.

  // Estos serán los criterios que seguiré para completar los objetos que me pases.

  // Te voy a pasar 3 objetos para que trabajes:

  //   [

  //     {
  //         "weight": {
  //             "imperial": "65 - 100",
  //             "metric": "29 - 45"
  //         },
  //         "height": {
  //             "imperial": "23 - 27",
  //             "metric": "58 - 69"
  //         },
  //         "id": 43,
  //         "name": "Black and Tan Coonhound",
  //         "bred_for": "Hunting raccoons, night hunting",
  //         "breed_group": "Hound",
  //         "life_span": "10 - 12 years",
  //         "temperament": "Easygoing, Gentle, Adaptable, Trusting, Even Tempered, Lovable",
  //         "reference_image_id": "HJAFgxcNQ",
  //         "image": {
  //             "id": "HJAFgxcNQ",
  //             "width": 556,
  //             "height": 380,
  //             "url": "https://cdn2.thedogapi.com/images/HJAFgxcNQ.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "80 - 110",
  //             "metric": "36 - 50"
  //         },
  //         "height": {
  //             "imperial": "23 - 27",
  //             "metric": "58 - 69"
  //         },
  //         "id": 45,
  //         "name": "Bloodhound",
  //         "bred_for": "Trailing",
  //         "breed_group": "Hound",
  //         "life_span": "8 - 10 years",
  //         "temperament": "Stubborn, Affectionate, Gentle, Even Tempered",
  //         "reference_image_id": "Skdcgx9VX",
  //         "image": {
  //             "id": "Skdcgx9VX",
  //             "width": 586,
  //             "height": 600,
  //             "url": "https://cdn2.thedogapi.com/images/Skdcgx9VX.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "45 - 80",
  //             "metric": "20 - 36"
  //         },
  //         "height": {
  //             "imperial": "21 - 27",
  //             "metric": "53 - 69"
  //         },
  //         "id": 47,
  //         "name": "Bluetick Coonhound",
  //         "bred_for": "Hunting with a superior sense of smell.",
  //         "breed_group": "Hound",
  //         "life_span": "12 - 14 years",
  //         "temperament": "Friendly, Intelligent, Active",
  //         "reference_image_id": "rJxieg9VQ",
  //         "image": {
  //             "id": "rJxieg9VQ",
  //             "width": 731,
  //             "height": 599,
  //             "url": "https://cdn2.thedogapi.com/images/rJxieg9VQ.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "110 - 200",
  //             "metric": "50 - 91"
  //         },
  //         "height": {
  //             "imperial": "22 - 27",
  //             "metric": "56 - 69"
  //         },
  //         "id": 48,
  //         "name": "Boerboel",
  //         "bred_for": "Guarding the homestead, farm work.",
  //         "breed_group": "Working",
  //         "life_span": "10 - 12 years",
  //         "temperament": "Obedient, Confident, Intelligent, Dominant, Territorial",
  //         "reference_image_id": "HyOjge5Vm",
  //         "image": {
  //             "id": "HyOjge5Vm",
  //             "width": 1200,
  //             "height": 669,
  //             "url": "https://cdn2.thedogapi.com/images/HyOjge5Vm.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "30 - 45",
  //             "metric": "14 - 20"
  //         },
  //         "height": {
  //             "imperial": "18 - 22",
  //             "metric": "46 - 56"
  //         },
  //         "id": 50,
  //         "name": "Border Collie",
  //         "bred_for": "Sheep herder",
  //         "breed_group": "Herding",
  //         "life_span": "12 - 16 years",
  //         "temperament": "Tenacious, Keen, Energetic, Responsive, Alert, Intelligent",
  //         "reference_image_id": "sGQvQUpsp",
  //         "image": {
  //             "id": "sGQvQUpsp",
  //             "width": 1080,
  //             "height": 1080,
  //             "url": "https://cdn2.thedogapi.com/images/sGQvQUpsp.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "11.5 - 15.5",
  //             "metric": "5 - 7"
  //         },
  //         "height": {
  //             "imperial": "11 - 16",
  //             "metric": "28 - 41"
  //         },
  //         "id": 51,
  //         "name": "Border Terrier",
  //         "bred_for": "Fox bolting, ratting",
  //         "breed_group": "Terrier",
  //         "life_span": "12 - 14 years",
  //         "temperament": "Fearless, Affectionate, Alert, Obedient, Intelligent, Even Tempered",
  //         "reference_image_id": "HJOpge9Em",
  //         "image": {
  //             "id": "HJOpge9Em",
  //             "width": 674,
  //             "height": 450,
  //             "url": "https://cdn2.thedogapi.com/images/HJOpge9Em.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "10 - 25",
  //             "metric": "5 - 11"
  //         },
  //         "height": {
  //             "imperial": "16 - 17",
  //             "metric": "41 - 43"
  //         },
  //         "id": 53,
  //         "name": "Boston Terrier",
  //         "bred_for": "Ratting, Companionship",
  //         "breed_group": "Non-Sporting",
  //         "life_span": "11 - 13 years",
  //         "temperament": "Friendly, Lively, Intelligent",
  //         "reference_image_id": "rkZRggqVX",
  //         "image": {
  //             "id": "rkZRggqVX",
  //             "width": 1010,
  //             "height": 673,
  //             "url": "https://cdn2.thedogapi.com/images/rkZRggqVX.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "70 - 110",
  //             "metric": "32 - 50"
  //         },
  //         "height": {
  //             "imperial": "23.5 - 27.5",
  //             "metric": "60 - 70"
  //         },
  //         "id": 54,
  //         "name": "Bouvier des Flandres",
  //         "bred_for": "Cattle herding",
  //         "breed_group": "Herding",
  //         "life_span": "10 - 15 years",
  //         "temperament": "Protective, Loyal, Gentle, Intelligent, Familial, Rational",
  //         "reference_image_id": "Byd0xl5VX",
  //         "image": {
  //             "id": "Byd0xl5VX",
  //             "width": 680,
  //             "height": 454,
  //             "url": "https://cdn2.thedogapi.com/images/Byd0xl5VX.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "50 - 70",
  //             "metric": "23 - 32"
  //         },
  //         "height": {
  //             "imperial": "21.5 - 25",
  //             "metric": "55 - 64"
  //         },
  //         "id": 55,
  //         "name": "Boxer",
  //         "bred_for": "Bull-baiting, guardian",
  //         "breed_group": "Working",
  //         "life_span": "8 - 10 years",
  //         "temperament": "Devoted, Fearless, Friendly, Cheerful, Energetic, Loyal, Playful, Confident, Intelligent, Bright, Brave, Calm",
  //         "reference_image_id": "ry1kWe5VQ",
  //         "image": {
  //             "id": "ry1kWe5VQ",
  //             "width": 645,
  //             "height": 430,
  //             "url": "https://cdn2.thedogapi.com/images/ry1kWe5VQ.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "25 - 40",
  //             "metric": "11 - 18"
  //         },
  //         "height": {
  //             "imperial": "14 - 18",
  //             "metric": "36 - 46"
  //         },
  //         "id": 56,
  //         "name": "Boykin Spaniel",
  //         "bred_for": "Turkey retrieving",
  //         "breed_group": "Sporting",
  //         "life_span": "10 - 14 years",
  //         "temperament": "Friendly, Energetic, Companionable, Intelligent, Eager, Trainable",
  //         "reference_image_id": "ryHJZlcNX",
  //         "image": {
  //             "id": "ryHJZlcNX",
  //             "width": 577,
  //             "height": 634,
  //             "url": "https://cdn2.thedogapi.com/images/ryHJZlcNX.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "55 - 88",
  //             "metric": "25 - 40"
  //         },
  //         "height": {
  //             "imperial": "21.5 - 26.5",
  //             "metric": "55 - 67"
  //         },
  //         "id": 57,
  //         "name": "Bracco Italiano",
  //         "bred_for": "Versatile gun dog",
  //         "breed_group": "Sporting",
  //         "life_span": "10 - 12 years",
  //         "temperament": "Stubborn, Affectionate, Loyal, Playful, Companionable, Trainable",
  //         "reference_image_id": "S13yZg5VQ",
  //         "image": {
  //             "id": "S13yZg5VQ",
  //             "width": 750,
  //             "height": 505,
  //             "url": "https://cdn2.thedogapi.com/images/S13yZg5VQ.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "70 - 90",
  //             "metric": "32 - 41"
  //         },
  //         "height": {
  //             "imperial": "22 - 27",
  //             "metric": "56 - 69"
  //         },
  //         "id": 58,
  //         "name": "Briard",
  //         "bred_for": "Herding, guarding sheep",
  //         "breed_group": "Herding",
  //         "life_span": "10 - 12 years",
  //         "temperament": "Fearless, Loyal, Obedient, Intelligent, Faithful, Protective",
  //         "reference_image_id": "rkVlblcEQ",
  //         "image": {
  //             "id": "rkVlblcEQ",
  //             "width": 768,
  //             "height": 576,
  //             "url": "https://cdn2.thedogapi.com/images/rkVlblcEQ.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "30 - 45",
  //             "metric": "14 - 20"
  //         },
  //         "height": {
  //             "imperial": "17.5 - 20.5",
  //             "metric": "44 - 52"
  //         },
  //         "id": 59,
  //         "name": "Brittany",
  //         "bred_for": "Pointing, retrieving",
  //         "breed_group": "Sporting",
  //         "life_span": "12 - 14 years",
  //         "temperament": "Agile, Adaptable, Quick, Intelligent, Attentive, Happy",
  //         "reference_image_id": "HJWZZxc4X",
  //         "image": {
  //             "id": "HJWZZxc4X",
  //             "width": 900,
  //             "height": 600,
  //             "url": "https://cdn2.thedogapi.com/images/HJWZZxc4X.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "50 - 70",
  //             "metric": "23 - 32"
  //         },
  //         "height": {
  //             "imperial": "21 - 22",
  //             "metric": "53 - 56"
  //         },
  //         "id": 61,
  //         "name": "Bull Terrier",
  //         "bred_for": "Bull baiting, Fighting",
  //         "breed_group": "Terrier",
  //         "life_span": "10 - 12 years",
  //         "temperament": "Trainable, Protective, Sweet-Tempered, Keen, Active",
  //         "reference_image_id": "VSraIEQGd",
  //         "image": {
  //             "id": "VSraIEQGd",
  //             "width": 1080,
  //             "height": 1080,
  //             "url": "https://cdn2.thedogapi.com/images/VSraIEQGd.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "25 - 33",
  //             "metric": "11 - 15"
  //         },
  //         "height": {
  //             "imperial": "10 - 14",
  //             "metric": "25 - 36"
  //         },
  //         "id": 62,
  //         "name": "Bull Terrier (Miniature)",
  //         "bred_for": "An elegant man's fashion statement",
  //         "life_span": "11 – 14 years",
  //         "temperament": "Trainable, Protective, Sweet-Tempered, Keen, Active, Territorial",
  //         "reference_image_id": "BkKZWlcVX",
  //         "image": {
  //             "id": "BkKZWlcVX",
  //             "width": 674,
  //             "height": 450,
  //             "url": "https://cdn2.thedogapi.com/images/BkKZWlcVX.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "100 - 130",
  //             "metric": "45 - 59"
  //         },
  //         "height": {
  //             "imperial": "24 - 27",
  //             "metric": "61 - 69"
  //         },
  //         "id": 64,
  //         "name": "Bullmastiff",
  //         "bred_for": "Estate guardian",
  //         "breed_group": "Working",
  //         "life_span": "8 - 12 years",
  //         "temperament": "Docile, Reliable, Devoted, Alert, Loyal, Reserved, Loving, Protective, Powerful, Calm, Courageous",
  //         "reference_image_id": "r1ifZl5E7",
  //         "image": {
  //             "id": "r1ifZl5E7",
  //             "width": 850,
  //             "height": 638,
  //             "url": "https://cdn2.thedogapi.com/images/r1ifZl5E7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "13 - 14",
  //             "metric": "6 - 6"
  //         },
  //         "height": {
  //             "imperial": "9 - 10",
  //             "metric": "23 - 25"
  //         },
  //         "id": 65,
  //         "name": "Cairn Terrier",
  //         "bred_for": "Bolting of otter, foxes, other vermin",
  //         "breed_group": "Terrier",
  //         "life_span": "14 - 15 years",
  //         "temperament": "Hardy, Fearless, Assertive, Gay, Intelligent, Active",
  //         "reference_image_id": "Sk7Qbg9E7",
  //         "image": {
  //             "id": "Sk7Qbg9E7",
  //             "width": 1254,
  //             "height": 836,
  //             "url": "https://cdn2.thedogapi.com/images/Sk7Qbg9E7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "88 - 120",
  //             "metric": "40 - 54"
  //         },
  //         "height": {
  //             "imperial": "23.5 - 27.5",
  //             "metric": "60 - 70"
  //         },
  //         "id": 67,
  //         "name": "Cane Corso",
  //         "bred_for": "Companion, guard dog, and hunter",
  //         "breed_group": "Working",
  //         "life_span": "10 - 11 years",
  //         "temperament": "Trainable, Reserved, Stable, Quiet, Even Tempered, Calm",
  //         "reference_image_id": "r15m-lc4m",
  //         "image": {
  //             "id": "r15m-lc4m",
  //             "width": 645,
  //             "height": 380,
  //             "url": "https://cdn2.thedogapi.com/images/r15m-lc4m.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "25 - 38",
  //             "metric": "11 - 17"
  //         },
  //         "height": {
  //             "imperial": "10.5 - 12.5",
  //             "metric": "27 - 32"
  //         },
  //         "id": 68,
  //         "name": "Cardigan Welsh Corgi",
  //         "bred_for": "Cattle droving",
  //         "breed_group": "Herding",
  //         "life_span": "12 - 14 years",
  //         "temperament": "Affectionate, Devoted, Alert, Companionable, Intelligent, Active",
  //         "reference_image_id": "SyXN-e9NX",
  //         "image": {
  //             "id": "SyXN-e9NX",
  //             "width": 800,
  //             "height": 600,
  //             "url": "https://cdn2.thedogapi.com/images/SyXN-e9NX.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "50 - 95",
  //             "metric": "23 - 43"
  //         },
  //         "height": {
  //             "imperial": "20 - 26",
  //             "metric": "51 - 66"
  //         },
  //         "id": 69,
  //         "name": "Catahoula Leopard Dog",
  //         "bred_for": "Driving livestock",
  //         "breed_group": "Herding",
  //         "life_span": "10 - 12 years",
  //         "temperament": "Energetic, Inquisitive, Independent, Gentle, Intelligent, Loving",
  //         "reference_image_id": "BJcNbec4X",
  //         "image": {
  //             "id": "BJcNbec4X",
  //             "width": 650,
  //             "height": 650,
  //             "url": "https://cdn2.thedogapi.com/images/BJcNbec4X.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "80 - 100",
  //             "metric": "36 - 45"
  //         },
  //         "height": {
  //             "imperial": "24 - 33.5",
  //             "metric": "61 - 85"
  //         },
  //         "id": 70,
  //         "name": "Caucasian Shepherd (Ovcharka)",
  //         "bred_for": "Guard dogs, defending sheep from predators, mainly wolves, jackals and bears",
  //         "breed_group": "Working",
  //         "life_span": "10 - 12 years",
  //         "temperament": "Alert, Quick, Dominant, Powerful, Calm, Strong",
  //         "reference_image_id": "r1rrWe5Em",
  //         "image": {
  //             "id": "r1rrWe5Em",
  //             "width": 1024,
  //             "height": 682,
  //             "url": "https://cdn2.thedogapi.com/images/r1rrWe5Em.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "13 - 18",
  //             "metric": "6 - 8"
  //         },
  //         "height": {
  //             "imperial": "12 - 13",
  //             "metric": "30 - 33"
  //         },
  //         "id": 71,
  //         "name": "Cavalier King Charles Spaniel",
  //         "bred_for": "Flushing small birds, companion",
  //         "breed_group": "Toy",
  //         "life_span": "10 - 14 years",
  //         "temperament": "Fearless, Affectionate, Sociable, Patient, Playful, Adaptable",
  //         "reference_image_id": "HJRBbe94Q",
  //         "image": {
  //             "id": "HJRBbe94Q",
  //             "width": 961,
  //             "height": 558,
  //             "url": "https://cdn2.thedogapi.com/images/HJRBbe94Q.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "55 - 80",
  //             "metric": "25 - 36"
  //         },
  //         "height": {
  //             "imperial": "21 - 26",
  //             "metric": "53 - 66"
  //         },
  //         "id": 76,
  //         "name": "Chesapeake Bay Retriever",
  //         "bred_for": "Water Retriever",
  //         "breed_group": "Sporting",
  //         "life_span": "10 - 13 years",
  //         "temperament": "Affectionate, Intelligent, Quiet, Dominant, Happy, Protective",
  //         "reference_image_id": "9BXwUeCc2",
  //         "image": {
  //             "id": "9BXwUeCc2",
  //             "width": 600,
  //             "height": 600,
  //             "url": "https://cdn2.thedogapi.com/images/9BXwUeCc2.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "10 - 13",
  //             "metric": "5 - 6"
  //         },
  //         "height": {
  //             "imperial": "11 - 13",
  //             "metric": "28 - 33"
  //         },
  //         "id": 78,
  //         "name": "Chinese Crested",
  //         "bred_for": "Ratting, lapdog, curio",
  //         "breed_group": "Toy",
  //         "life_span": "10 - 14 years",
  //         "temperament": "Affectionate, Sweet-Tempered, Lively, Alert, Playful, Happy",
  //         "reference_image_id": "B1pDZx9Nm",
  //         "image": {
  //             "id": "B1pDZx9Nm",
  //             "width": 1200,
  //             "height": 798,
  //             "url": "https://cdn2.thedogapi.com/images/B1pDZx9Nm.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "45 - 60",
  //             "metric": "20 - 27"
  //         },
  //         "height": {
  //             "imperial": "18 - 20",
  //             "metric": "46 - 51"
  //         },
  //         "id": 79,
  //         "name": "Chinese Shar-Pei",
  //         "bred_for": "Fighting",
  //         "breed_group": "Non-Sporting",
  //         "life_span": "10 years",
  //         "temperament": "Suspicious, Affectionate, Devoted, Reserved, Independent, Loving",
  //         "reference_image_id": "B1ruWl94Q",
  //         "image": {
  //             "id": "B1ruWl94Q",
  //             "width": 1049,
  //             "height": 761,
  //             "url": "https://cdn2.thedogapi.com/images/B1ruWl94Q.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "50 - 90",
  //             "metric": "23 - 41"
  //         },
  //         "height": {
  //             "imperial": "22 - 26",
  //             "metric": "56 - 66"
  //         },
  //         "id": 80,
  //         "name": "Chinook",
  //         "bred_for": "Sled pulling",
  //         "breed_group": "Working",
  //         "life_span": "12 - 15 years",
  //         "temperament": "Friendly, Alert, Dignified, Intelligent, Calm",
  //         "reference_image_id": "Sypubg54Q",
  //         "image": {
  //             "id": "Sypubg54Q",
  //             "width": 600,
  //             "height": 478,
  //             "url": "https://cdn2.thedogapi.com/images/Sypubg54Q.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "40 - 70",
  //             "metric": "18 - 32"
  //         },
  //         "height": {
  //             "imperial": "17 - 20",
  //             "metric": "43 - 51"
  //         },
  //         "id": 81,
  //         "name": "Chow Chow",
  //         "bred_for": "Guardian, cart pulling, hunting",
  //         "breed_group": "Non-Sporting",
  //         "life_span": "12 - 15 years",
  //         "temperament": "Aloof, Loyal, Independent, Quiet",
  //         "reference_image_id": "ry8KWgqEQ",
  //         "image": {
  //             "id": "ry8KWgqEQ",
  //             "width": 1010,
  //             "height": 673,
  //             "url": "https://cdn2.thedogapi.com/images/ry8KWgqEQ.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "55 - 85",
  //             "metric": "25 - 39"
  //         },
  //         "height": {
  //             "imperial": "17 - 20",
  //             "metric": "43 - 51"
  //         },
  //         "id": 84,
  //         "name": "Clumber Spaniel",
  //         "bred_for": "Bird flushing, retrieving",
  //         "breed_group": "Sporting",
  //         "life_span": "10 - 12 years",
  //         "temperament": "Affectionate, Loyal, Dignified, Gentle, Calm, Great-hearted",
  //         "reference_image_id": "rkeqWgq4Q",
  //         "image": {
  //             "id": "rkeqWgq4Q",
  //             "width": 762,
  //             "height": 533,
  //             "url": "https://cdn2.thedogapi.com/images/rkeqWgq4Q.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "20 - 30",
  //             "metric": "9 - 14"
  //         },
  //         "height": {
  //             "imperial": "14 - 15",
  //             "metric": "36 - 38"
  //         },
  //         "id": 86,
  //         "name": "Cocker Spaniel",
  //         "bred_for": "Bird flushing, retrieving",
  //         "breed_group": "Sporting",
  //         "life_span": "12 - 15 years",
  //         "temperament": "Trainable, Friendly, Affectionate, Playful, Quiet, Faithful",
  //         "reference_image_id": "1lFmrzECl",
  //         "image": {
  //             "id": "1lFmrzECl",
  //             "width": 1080,
  //             "height": 1080,
  //             "url": "https://cdn2.thedogapi.com/images/1lFmrzECl.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "20 - 30",
  //             "metric": "9 - 14"
  //         },
  //         "height": {
  //             "imperial": "14 - 15",
  //             "metric": "36 - 38"
  //         },
  //         "id": 87,
  //         "name": "Cocker Spaniel (American)",
  //         "bred_for": "Hunting the American woodcock",
  //         "breed_group": "Sporting",
  //         "life_span": "12 - 15 years",
  //         "temperament": "Outgoing, Sociable, Trusting, Joyful, Even Tempered, Merry",
  //         "reference_image_id": "HkRcZe547",
  //         "image": {
  //             "id": "HkRcZe547",
  //             "width": 1024,
  //             "height": 640,
  //             "url": "https://cdn2.thedogapi.com/images/HkRcZe547.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "9 - 15",
  //             "metric": "4 - 7"
  //         },
  //         "height": {
  //             "imperial": "9 - 11",
  //             "metric": "23 - 28"
  //         },
  //         "id": 89,
  //         "name": "Coton de Tulear",
  //         "bred_for": "Accompanying ladies on long sea voyages, ratters onboard ship.",
  //         "breed_group": "Non-Sporting",
  //         "life_span": "13 - 16 years",
  //         "temperament": "Affectionate, Lively, Playful, Intelligent, Trainable, Vocal",
  //         "reference_image_id": "SyviZlqNm",
  //         "image": {
  //             "id": "SyviZlqNm",
  //             "width": 2464,
  //             "height": 1638,
  //             "url": "https://cdn2.thedogapi.com/images/SyviZlqNm.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "50 - 55",
  //             "metric": "23 - 25"
  //         },
  //         "height": {
  //             "imperial": "19 - 23",
  //             "metric": "48 - 58"
  //         },
  //         "id": 92,
  //         "name": "Dalmatian",
  //         "bred_for": "Carriage dog - trot alongside carriages to protect the occupants from banditry or other interference",
  //         "breed_group": "Non-Sporting",
  //         "life_span": "10 - 13 years",
  //         "temperament": "Outgoing, Friendly, Energetic, Playful, Sensitive, Intelligent, Active",
  //         "reference_image_id": "SkJ3blcN7",
  //         "image": {
  //             "id": "SkJ3blcN7",
  //             "width": 1200,
  //             "height": 800,
  //             "url": "https://cdn2.thedogapi.com/images/SkJ3blcN7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "66 - 88",
  //             "metric": "30 - 40"
  //         },
  //         "height": {
  //             "imperial": "24 - 28",
  //             "metric": "61 - 71"
  //         },
  //         "id": 94,
  //         "name": "Doberman Pinscher",
  //         "bred_for": "Guardian",
  //         "breed_group": "Working",
  //         "life_span": "10 years",
  //         "temperament": "Fearless, Energetic, Alert, Loyal, Obedient, Confident, Intelligent",
  //         "reference_image_id": "HyL3bl94Q",
  //         "image": {
  //             "id": "HyL3bl94Q",
  //             "width": 1140,
  //             "height": 640,
  //             "url": "https://cdn2.thedogapi.com/images/HyL3bl94Q.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "80 - 100",
  //             "metric": "36 - 45"
  //         },
  //         "height": {
  //             "imperial": "23.5 - 27",
  //             "metric": "60 - 69"
  //         },
  //         "id": 95,
  //         "name": "Dogo Argentino",
  //         "bred_for": "Big-game hunting",
  //         "breed_group": "Working",
  //         "life_span": "10 - 12 years",
  //         "temperament": "Friendly, Affectionate, Cheerful, Loyal, Tolerant, Protective",
  //         "reference_image_id": "S1nhWx94Q",
  //         "image": {
  //             "id": "S1nhWx94Q",
  //             "width": 650,
  //             "height": 467,
  //             "url": "https://cdn2.thedogapi.com/images/S1nhWx94Q.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "50 - 70",
  //             "metric": "23 - 32"
  //         },
  //         "height": {
  //             "imperial": "22 - 24.5",
  //             "metric": "56 - 62"
  //         },
  //         "id": 98,
  //         "name": "Dutch Shepherd",
  //         "bred_for": "Farms, watchdog, guard duty",
  //         "life_span": "15 years",
  //         "temperament": "Reliable, Affectionate, Alert, Loyal, Obedient, Trainable",
  //         "reference_image_id": "BkE6Wg5E7",
  //         "image": {
  //             "id": "BkE6Wg5E7",
  //             "width": 856,
  //             "height": 511,
  //             "url": "https://cdn2.thedogapi.com/images/BkE6Wg5E7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "45 - 80",
  //             "metric": "20 - 36"
  //         },
  //         "height": {
  //             "imperial": "24 - 25",
  //             "metric": "61 - 64"
  //         },
  //         "id": 101,
  //         "name": "English Setter",
  //         "bred_for": "Bird setting, retrieving",
  //         "breed_group": "Sporting",
  //         "life_span": "12 years",
  //         "temperament": "Strong Willed, Mischievous, Affectionate, Energetic, Playful, Companionable, Gentle, Hard-working, Intelligent, Eager, People-Oriented",
  //         "reference_image_id": "By4A-eqVX",
  //         "image": {
  //             "id": "By4A-eqVX",
  //             "width": 1024,
  //             "height": 683,
  //             "url": "https://cdn2.thedogapi.com/images/By4A-eqVX.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "44 - 66",
  //             "metric": "20 - 30"
  //         },
  //         "height": {
  //             "imperial": "18 - 23",
  //             "metric": "46 - 58"
  //         },
  //         "id": 102,
  //         "name": "English Shepherd",
  //         "bred_for": "Herding & guarding livestock, farm watch dog",
  //         "breed_group": "Working",
  //         "life_span": "10 - 13 years",
  //         "temperament": "Kind, Energetic, Independent, Adaptable, Intelligent, Bossy",
  //         "reference_image_id": "H1QyMe5EQ",
  //         "image": {
  //             "id": "H1QyMe5EQ",
  //             "width": 1920,
  //             "height": 1280,
  //             "url": "https://cdn2.thedogapi.com/images/H1QyMe5EQ.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "35 - 50",
  //             "metric": "16 - 23"
  //         },
  //         "height": {
  //             "imperial": "19 - 20",
  //             "metric": "48 - 51"
  //         },
  //         "id": 103,
  //         "name": "English Springer Spaniel",
  //         "bred_for": "Bird flushing, retrieving",
  //         "breed_group": "Sporting",
  //         "life_span": "12 - 14 years",
  //         "temperament": "Affectionate, Cheerful, Alert, Intelligent, Attentive, Active",
  //         "reference_image_id": "Hk0Jfe5VQ",
  //         "image": {
  //             "id": "Hk0Jfe5VQ",
  //             "width": 1440,
  //             "height": 1080,
  //             "url": "https://cdn2.thedogapi.com/images/Hk0Jfe5VQ.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "8 - 14",
  //             "metric": "4 - 6"
  //         },
  //         "height": {
  //             "imperial": "10",
  //             "metric": "25"
  //         },
  //         "id": 104,
  //         "name": "English Toy Spaniel",
  //         "bred_for": "Companion of kings",
  //         "breed_group": "Toy",
  //         "life_span": "10 - 12 years",
  //         "temperament": "Affectionate, Reserved, Playful, Gentle, Happy, Loving",
  //         "reference_image_id": "SkIgzxqNQ",
  //         "image": {
  //             "id": "SkIgzxqNQ",
  //             "width": 800,
  //             "height": 696,
  //             "url": "https://cdn2.thedogapi.com/images/SkIgzxqNQ.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "6 - 8",
  //             "metric": "3 - 4"
  //         },
  //         "height": {
  //             "imperial": "10 - 12",
  //             "metric": "25 - 30"
  //         },
  //         "id": 105,
  //         "name": "English Toy Terrier",
  //         "bred_for": "Rat-baiting",
  //         "life_span": "12 - 13 years",
  //         "temperament": "Stubborn, Alert, Companionable, Intelligent, Cunning, Trainable",
  //         "reference_image_id": "SJ6eMxqEQ",
  //         "image": {
  //             "id": "SJ6eMxqEQ",
  //             "width": 645,
  //             "height": 430,
  //             "url": "https://cdn2.thedogapi.com/images/SJ6eMxqEQ.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "40 - 70",
  //             "metric": "18 - 32"
  //         },
  //         "height": {
  //             "imperial": "20.5 - 23.5",
  //             "metric": "52 - 60"
  //         },
  //         "id": 107,
  //         "name": "Eurasier",
  //         "bred_for": "Companionship",
  //         "breed_group": "Non-Sporting",
  //         "life_span": "12 - 14 years",
  //         "temperament": "Alert, Reserved, Intelligent, Even Tempered, Watchful, Calm",
  //         "reference_image_id": "S1VWGx9Nm",
  //         "image": {
  //             "id": "S1VWGx9Nm",
  //             "width": 800,
  //             "height": 532,
  //             "url": "https://cdn2.thedogapi.com/images/S1VWGx9Nm.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "35 - 50",
  //             "metric": "16 - 23"
  //         },
  //         "height": {
  //             "imperial": "17 - 18",
  //             "metric": "43 - 46"
  //         },
  //         "id": 108,
  //         "name": "Field Spaniel",
  //         "bred_for": "Bird flushing, retrieving",
  //         "breed_group": "Sporting",
  //         "life_span": "11 - 15 years",
  //         "temperament": "Docile, Cautious, Sociable, Sensitive, Adaptable, Familial",
  //         "reference_image_id": "SkJfGecE7",
  //         "image": {
  //             "id": "SkJfGecE7",
  //             "width": 1280,
  //             "height": 906,
  //             "url": "https://cdn2.thedogapi.com/images/SkJfGecE7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "33 - 53",
  //             "metric": "15 - 24"
  //         },
  //         "height": {
  //             "imperial": "16 - 21",
  //             "metric": "41 - 53"
  //         },
  //         "id": 110,
  //         "name": "Finnish Lapphund",
  //         "bred_for": "Herding reindeer",
  //         "breed_group": "Herding",
  //         "life_span": "12 - 15 years",
  //         "temperament": "Friendly, Keen, Faithful, Calm, Courageous",
  //         "reference_image_id": "S1KMGg5Vm",
  //         "image": {
  //             "id": "S1KMGg5Vm",
  //             "width": 1066,
  //             "height": 800,
  //             "url": "https://cdn2.thedogapi.com/images/S1KMGg5Vm.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "23 - 28",
  //             "metric": "10 - 13"
  //         },
  //         "height": {
  //             "imperial": "15.5 - 20",
  //             "metric": "39 - 51"
  //         },
  //         "id": 111,
  //         "name": "Finnish Spitz",
  //         "bred_for": "Hunting birds, small mammals",
  //         "breed_group": "Non-Sporting",
  //         "life_span": "12 - 15 years",
  //         "temperament": "Playful, Loyal, Independent, Intelligent, Happy, Vocal",
  //         "reference_image_id": "3PjHlQbkV",
  //         "image": {
  //             "id": "3PjHlQbkV",
  //             "width": 500,
  //             "height": 417,
  //             "url": "https://cdn2.thedogapi.com/images/3PjHlQbkV.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "28",
  //             "metric": "13"
  //         },
  //         "height": {
  //             "imperial": "11 - 12",
  //             "metric": "28 - 30"
  //         },
  //         "id": 113,
  //         "name": "French Bulldog",
  //         "bred_for": "Lapdog",
  //         "breed_group": "Non-Sporting",
  //         "life_span": "9 - 11 years",
  //         "temperament": "Playful, Affectionate, Keen, Sociable, Lively, Alert, Easygoing, Patient, Athletic, Bright",
  //         "reference_image_id": "HyWNfxc47",
  //         "image": {
  //             "id": "HyWNfxc47",
  //             "width": 740,
  //             "height": 430,
  //             "url": "https://cdn2.thedogapi.com/images/HyWNfxc47.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "25 - 45",
  //             "metric": "11 - 20"
  //         },
  //         "height": {
  //             "imperial": "17 - 20",
  //             "metric": "43 - 51"
  //         },
  //         "id": 114,
  //         "name": "German Pinscher",
  //         "bred_for": "Watchdog, Hunting vermin on the farm.",
  //         "breed_group": "Working",
  //         "life_span": "12 - 14 years",
  //         "temperament": "Spirited, Lively, Intelligent, Loving, Even Tempered, Familial",
  //         "reference_image_id": "B1u4zgqE7",
  //         "image": {
  //             "id": "B1u4zgqE7",
  //             "width": 740,
  //             "height": 480,
  //             "url": "https://cdn2.thedogapi.com/images/B1u4zgqE7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "50 - 90",
  //             "metric": "23 - 41"
  //         },
  //         "height": {
  //             "imperial": "22 - 26",
  //             "metric": "56 - 66"
  //         },
  //         "id": 115,
  //         "name": "German Shepherd Dog",
  //         "bred_for": "Herding, Guard dog",
  //         "breed_group": "Herding",
  //         "life_span": "10 - 13 years",
  //         "temperament": "Alert, Loyal, Obedient, Curious, Confident, Intelligent, Watchful, Courageous",
  //         "reference_image_id": "SJyBfg5NX",
  //         "image": {
  //             "id": "SJyBfg5NX",
  //             "width": 600,
  //             "height": 425,
  //             "url": "https://cdn2.thedogapi.com/images/SJyBfg5NX.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "45 - 70",
  //             "metric": "20 - 32"
  //         },
  //         "height": {
  //             "imperial": "21 - 25",
  //             "metric": "53 - 64"
  //         },
  //         "id": 116,
  //         "name": "German Shorthaired Pointer",
  //         "bred_for": "General hunting",
  //         "breed_group": "Sporting",
  //         "life_span": "12 - 14 years",
  //         "temperament": "Boisterous, Bold, Affectionate, Intelligent, Cooperative, Trainable",
  //         "reference_image_id": "SJqBMg5Nm",
  //         "image": {
  //             "id": "SJqBMg5Nm",
  //             "width": 1395,
  //             "height": 1230,
  //             "url": "https://cdn2.thedogapi.com/images/SJqBMg5Nm.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "65 - 90",
  //             "metric": "29 - 41"
  //         },
  //         "height": {
  //             "imperial": "23.5 - 27.5",
  //             "metric": "60 - 70"
  //         },
  //         "id": 119,
  //         "name": "Giant Schnauzer",
  //         "bred_for": "Herding, guarding",
  //         "breed_group": "Working",
  //         "life_span": "10 - 12 years",
  //         "temperament": "Strong Willed, Kind, Loyal, Intelligent, Dominant, Powerful",
  //         "reference_image_id": "H1NIzlcV7",
  //         "image": {
  //             "id": "H1NIzlcV7",
  //             "width": 900,
  //             "height": 600,
  //             "url": "https://cdn2.thedogapi.com/images/H1NIzlcV7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "32 - 40",
  //             "metric": "15 - 18"
  //         },
  //         "height": {
  //             "imperial": "12.5 - 14",
  //             "metric": "32 - 36"
  //         },
  //         "id": 120,
  //         "name": "Glen of Imaal Terrier",
  //         "bred_for": "Rid the home and farm of vermin, and hunt badger and fox",
  //         "breed_group": "Terrier",
  //         "life_span": "12 - 15 years",
  //         "temperament": "Spirited, Agile, Loyal, Gentle, Active, Courageous",
  //         "reference_image_id": "H1oLMe94m",
  //         "image": {
  //             "id": "H1oLMe94m",
  //             "width": 645,
  //             "height": 380,
  //             "url": "https://cdn2.thedogapi.com/images/H1oLMe94m.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "55 - 75",
  //             "metric": "25 - 34"
  //         },
  //         "height": {
  //             "imperial": "21.5 - 24",
  //             "metric": "55 - 61"
  //         },
  //         "id": 121,
  //         "name": "Golden Retriever",
  //         "bred_for": "Retrieving",
  //         "breed_group": "Sporting",
  //         "life_span": "10 - 12 years",
  //         "temperament": "Intelligent, Kind, Reliable, Friendly, Trustworthy, Confident",
  //         "reference_image_id": "HJ7Pzg5EQ",
  //         "image": {
  //             "id": "HJ7Pzg5EQ",
  //             "width": 900,
  //             "height": 652,
  //             "url": "https://cdn2.thedogapi.com/images/HJ7Pzg5EQ.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "45 - 80",
  //             "metric": "20 - 36"
  //         },
  //         "height": {
  //             "imperial": "23 - 27",
  //             "metric": "58 - 69"
  //         },
  //         "id": 123,
  //         "name": "Gordon Setter",
  //         "bred_for": "Find and point gamebirds",
  //         "breed_group": "Sporting",
  //         "life_span": "10 - 12 years",
  //         "temperament": "Fearless, Alert, Loyal, Confident, Gay, Eager",
  //         "reference_image_id": "SJ5vzx5NX",
  //         "image": {
  //             "id": "SJ5vzx5NX",
  //             "width": 622,
  //             "height": 467,
  //             "url": "https://cdn2.thedogapi.com/images/SJ5vzx5NX.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "110 - 190",
  //             "metric": "50 - 86"
  //         },
  //         "height": {
  //             "imperial": "28 - 32",
  //             "metric": "71 - 81"
  //         },
  //         "id": 124,
  //         "name": "Great Dane",
  //         "bred_for": "Hunting & holding boars, Guardian",
  //         "breed_group": "Working",
  //         "life_span": "7 - 10 years",
  //         "temperament": "Friendly, Devoted, Reserved, Gentle, Confident, Loving",
  //         "reference_image_id": "B1Edfl9NX",
  //         "image": {
  //             "id": "B1Edfl9NX",
  //             "width": 800,
  //             "height": 732,
  //             "url": "https://cdn2.thedogapi.com/images/B1Edfl9NX.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "85 - 115",
  //             "metric": "39 - 52"
  //         },
  //         "height": {
  //             "imperial": "25 - 32",
  //             "metric": "64 - 81"
  //         },
  //         "id": 125,
  //         "name": "Great Pyrenees",
  //         "bred_for": "Sheep guardian",
  //         "breed_group": "Working",
  //         "life_span": "10 - 12 years",
  //         "temperament": "Strong Willed, Fearless, Affectionate, Patient, Gentle, Confident",
  //         "reference_image_id": "B12uzg9V7",
  //         "image": {
  //             "id": "B12uzg9V7",
  //             "width": 800,
  //             "height": 550,
  //             "url": "https://cdn2.thedogapi.com/images/B12uzg9V7.png"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "50 - 70",
  //             "metric": "23 - 32"
  //         },
  //         "height": {
  //             "imperial": "27 - 30",
  //             "metric": "69 - 76"
  //         },
  //         "id": 127,
  //         "name": "Greyhound",
  //         "bred_for": "Coursing hares",
  //         "breed_group": "Hound",
  //         "life_span": "10 - 13 years",
  //         "temperament": "Affectionate, Athletic, Gentle, Intelligent, Quiet, Even Tempered",
  //         "reference_image_id": "ryNYMx94X",
  //         "image": {
  //             "id": "ryNYMx94X",
  //             "width": 1024,
  //             "height": 681,
  //             "url": "https://cdn2.thedogapi.com/images/ryNYMx94X.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "12",
  //             "metric": "5"
  //         },
  //         "height": {
  //             "imperial": "9 - 11",
  //             "metric": "23 - 28"
  //         },
  //         "id": 128,
  //         "name": "Griffon Bruxellois",
  //         "bred_for": "Hunt and kill vermin in stables",
  //         "life_span": "10 – 15 years",
  //         "temperament": "Self-important, Inquisitive, Alert, Companionable, Sensitive, Watchful",
  //         "reference_image_id": "ryoYGec4Q",
  //         "image": {
  //             "id": "ryoYGec4Q",
  //             "width": 645,
  //             "height": 380,
  //             "url": "https://cdn2.thedogapi.com/images/ryoYGec4Q.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "40 - 60",
  //             "metric": "18 - 27"
  //         },
  //         "height": {
  //             "imperial": "18 - 22",
  //             "metric": "46 - 56"
  //         },
  //         "id": 129,
  //         "name": "Harrier",
  //         "bred_for": "Hunting hares by trailing them",
  //         "breed_group": "Hound",
  //         "life_span": "12 - 15 years",
  //         "temperament": "Outgoing, Friendly, Cheerful, Sweet-Tempered, Tolerant, Active",
  //         "reference_image_id": "B1IcfgqE7",
  //         "image": {
  //             "id": "B1IcfgqE7",
  //             "width": 1920,
  //             "height": 1080,
  //             "url": "https://cdn2.thedogapi.com/images/B1IcfgqE7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "7 - 13",
  //             "metric": "3 - 6"
  //         },
  //         "height": {
  //             "imperial": "8.5 - 11.5",
  //             "metric": "22 - 29"
  //         },
  //         "id": 130,
  //         "name": "Havanese",
  //         "bred_for": "Companionship",
  //         "breed_group": "Toy",
  //         "life_span": "14 - 15 years",
  //         "temperament": "Affectionate, Responsive, Playful, Companionable, Gentle, Intelligent",
  //         "reference_image_id": "rkXiGl9V7",
  //         "image": {
  //             "id": "rkXiGl9V7",
  //             "width": 800,
  //             "height": 507,
  //             "url": "https://cdn2.thedogapi.com/images/rkXiGl9V7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "35 - 70",
  //             "metric": "16 - 32"
  //         },
  //         "height": {
  //             "imperial": "24 - 27",
  //             "metric": "61 - 69"
  //         },
  //         "id": 134,
  //         "name": "Irish Setter",
  //         "bred_for": "Bird setting, retrieving",
  //         "breed_group": "Sporting",
  //         "life_span": "10 - 11 years",
  //         "temperament": "Affectionate, Energetic, Lively, Independent, Playful, Companionable",
  //         "reference_image_id": "S1osGeqVm",
  //         "image": {
  //             "id": "S1osGeqVm",
  //             "width": 818,
  //             "height": 522,
  //             "url": "https://cdn2.thedogapi.com/images/S1osGeqVm.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "25 - 27",
  //             "metric": "11 - 12"
  //         },
  //         "height": {
  //             "imperial": "18",
  //             "metric": "46"
  //         },
  //         "id": 135,
  //         "name": "Irish Terrier",
  //         "breed_group": "Terrier",
  //         "life_span": "12 - 16 years",
  //         "temperament": "Respectful, Lively, Intelligent, Dominant, Protective, Trainable",
  //         "reference_image_id": "By-hGecVX",
  //         "image": {
  //             "id": "By-hGecVX",
  //             "width": 800,
  //             "height": 626,
  //             "url": "https://cdn2.thedogapi.com/images/By-hGecVX.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "105 - 180",
  //             "metric": "48 - 82"
  //         },
  //         "height": {
  //             "imperial": "30 - 35",
  //             "metric": "76 - 89"
  //         },
  //         "id": 137,
  //         "name": "Irish Wolfhound",
  //         "bred_for": "Coursing wolves, elk",
  //         "breed_group": "Hound",
  //         "life_span": "6 - 8 years",
  //         "temperament": "Sweet-Tempered, Loyal, Dignified, Patient, Thoughtful, Generous",
  //         "reference_image_id": "Hyd2zgcEX",
  //         "image": {
  //             "id": "Hyd2zgcEX",
  //             "width": 1000,
  //             "height": 630,
  //             "url": "https://cdn2.thedogapi.com/images/Hyd2zgcEX.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "7 - 15",
  //             "metric": "3 - 7"
  //         },
  //         "height": {
  //             "imperial": "13 - 15",
  //             "metric": "33 - 38"
  //         },
  //         "id": 138,
  //         "name": "Italian Greyhound",
  //         "bred_for": "Lapdog",
  //         "breed_group": "Toy",
  //         "life_span": "12 - 15 years",
  //         "temperament": "Mischievous, Affectionate, Agile, Athletic, Companionable, Intelligent",
  //         "reference_image_id": "SJAnzg9NX",
  //         "image": {
  //             "id": "SJAnzg9NX",
  //             "width": 640,
  //             "height": 377,
  //             "url": "https://cdn2.thedogapi.com/images/SJAnzg9NX.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "4 - 9",
  //             "metric": "2 - 4"
  //         },
  //         "height": {
  //             "imperial": "8 - 11",
  //             "metric": "20 - 28"
  //         },
  //         "id": 140,
  //         "name": "Japanese Chin",
  //         "bred_for": "Lapdog",
  //         "breed_group": "Toy",
  //         "life_span": "12 - 14 years",
  //         "temperament": "Alert, Loyal, Independent, Intelligent, Loving, Cat-like",
  //         "reference_image_id": "r1H6feqEm",
  //         "image": {
  //             "id": "r1H6feqEm",
  //             "width": 900,
  //             "height": 581,
  //             "url": "https://cdn2.thedogapi.com/images/r1H6feqEm.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "15 - 19",
  //             "metric": "7 - 9"
  //         },
  //         "height": {
  //             "imperial": "12 - 15",
  //             "metric": "30 - 38"
  //         },
  //         "id": 141,
  //         "name": "Japanese Spitz",
  //         "bred_for": "Companion",
  //         "life_span": "10 – 16 years",
  //         "temperament": "Affectionate, Obedient, Playful, Companionable, Intelligent, Proud",
  //         "reference_image_id": "HksaMxqNX",
  //         "image": {
  //             "id": "HksaMxqNX",
  //             "width": 600,
  //             "height": 351,
  //             "url": "https://cdn2.thedogapi.com/images/HksaMxqNX.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "35 - 45",
  //             "metric": "16 - 20"
  //         },
  //         "height": {
  //             "imperial": "17 - 18",
  //             "metric": "43 - 46"
  //         },
  //         "id": 142,
  //         "name": "Keeshond",
  //         "bred_for": "Barge watchdog",
  //         "breed_group": "Non-Sporting",
  //         "life_span": "12 - 15 years",
  //         "temperament": "Agile, Obedient, Playful, Quick, Sturdy, Bright",
  //         "reference_image_id": "S1GAGg9Vm",
  //         "image": {
  //             "id": "S1GAGg9Vm",
  //             "width": 1024,
  //             "height": 683,
  //             "url": "https://cdn2.thedogapi.com/images/S1GAGg9Vm.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "80 - 100",
  //             "metric": "36 - 45"
  //         },
  //         "height": {
  //             "imperial": "25.5 - 27.5",
  //             "metric": "65 - 70"
  //         },
  //         "id": 144,
  //         "name": "Komondor",
  //         "bred_for": "Sheep guardian",
  //         "breed_group": "Working",
  //         "life_span": "10 - 12 years",
  //         "temperament": "Steady, Fearless, Affectionate, Independent, Gentle, Calm",
  //         "reference_image_id": "Bko0fl547",
  //         "image": {
  //             "id": "Bko0fl547",
  //             "width": 1030,
  //             "height": 772,
  //             "url": "https://cdn2.thedogapi.com/images/Bko0fl547.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "20 - 30",
  //             "metric": "9 - 14"
  //         },
  //         "height": {
  //             "imperial": "14 - 16",
  //             "metric": "36 - 41"
  //         },
  //         "id": 145,
  //         "name": "Kooikerhondje",
  //         "bred_for": "Luring ducks into traps - \"tolling\"",
  //         "breed_group": "Sporting",
  //         "life_span": "12 - 15 years",
  //         "temperament": "Benevolent, Agile, Alert, Intelligent, Active, Territorial",
  //         "reference_image_id": "kOMy84GQE",
  //         "image": {
  //             "id": "kOMy84GQE",
  //             "width": 1080,
  //             "height": 1080,
  //             "url": "https://cdn2.thedogapi.com/images/kOMy84GQE.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "70 - 115",
  //             "metric": "32 - 52"
  //         },
  //         "height": {
  //             "imperial": "26 - 30",
  //             "metric": "66 - 76"
  //         },
  //         "id": 147,
  //         "name": "Kuvasz",
  //         "bred_for": "Guardian, hunting large game",
  //         "breed_group": "Working",
  //         "life_span": "8 - 10 years",
  //         "temperament": "Clownish, Loyal, Patient, Independent, Intelligent, Protective",
  //         "reference_image_id": "BykZ7ecVX",
  //         "image": {
  //             "id": "BykZ7ecVX",
  //             "width": 960,
  //             "height": 768,
  //             "url": "https://cdn2.thedogapi.com/images/BykZ7ecVX.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "55 - 80",
  //             "metric": "25 - 36"
  //         },
  //         "height": {
  //             "imperial": "21.5 - 24.5",
  //             "metric": "55 - 62"
  //         },
  //         "id": 149,
  //         "name": "Labrador Retriever",
  //         "bred_for": "Water retrieving",
  //         "breed_group": "Sporting",
  //         "life_span": "10 - 13 years",
  //         "temperament": "Kind, Outgoing, Agile, Gentle, Intelligent, Trusting, Even Tempered",
  //         "reference_image_id": "B1uW7l5VX",
  //         "image": {
  //             "id": "B1uW7l5VX",
  //             "width": 992,
  //             "height": 667,
  //             "url": "https://cdn2.thedogapi.com/images/B1uW7l5VX.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "24 - 35",
  //             "metric": "11 - 16"
  //         },
  //         "height": {
  //             "imperial": "16 - 19",
  //             "metric": "41 - 48"
  //         },
  //         "id": 151,
  //         "name": "Lagotto Romagnolo",
  //         "bred_for": "Water retrieval dog in the marshes of Romagna",
  //         "breed_group": "Sporting",
  //         "life_span": "14 - 16 years",
  //         "temperament": "Keen, Loyal, Companionable, Loving, Active, Trainable",
  //         "reference_image_id": "ryzzmgqE7",
  //         "image": {
  //             "id": "ryzzmgqE7",
  //             "width": 1600,
  //             "height": 1200,
  //             "url": "https://cdn2.thedogapi.com/images/ryzzmgqE7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "6 - 13",
  //             "metric": "3 - 6"
  //         },
  //         "height": {
  //             "imperial": "10 - 12",
  //             "metric": "25 - 30"
  //         },
  //         "id": 153,
  //         "name": "Lancashire Heeler",
  //         "bred_for": "Cattle herding, Ratting, Driving cattle to market.",
  //         "life_span": "12 – 15 years",
  //         "temperament": "Clever, Friendly, Alert, Intelligent",
  //         "reference_image_id": "S1RGml5Em",
  //         "image": {
  //             "id": "S1RGml5Em",
  //             "width": 680,
  //             "height": 453,
  //             "url": "https://cdn2.thedogapi.com/images/S1RGml5Em.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "120 - 170",
  //             "metric": "54 - 77"
  //         },
  //         "height": {
  //             "imperial": "25.5 - 31.5",
  //             "metric": "65 - 80"
  //         },
  //         "id": 155,
  //         "name": "Leonberger",
  //         "bred_for": "Guardian, appearance.",
  //         "breed_group": "Working",
  //         "life_span": "6 - 8 years",
  //         "temperament": "Obedient, Fearless, Loyal, Companionable, Adaptable, Loving",
  //         "reference_image_id": "ByrmQlqVm",
  //         "image": {
  //             "id": "ByrmQlqVm",
  //             "width": 1024,
  //             "height": 694,
  //             "url": "https://cdn2.thedogapi.com/images/ByrmQlqVm.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "12 - 18",
  //             "metric": "5 - 8"
  //         },
  //         "height": {
  //             "imperial": "10 - 11",
  //             "metric": "25 - 28"
  //         },
  //         "id": 156,
  //         "name": "Lhasa Apso",
  //         "bred_for": "Guarding inside the home, companion",
  //         "breed_group": "Non-Sporting",
  //         "life_span": "12 - 15 years",
  //         "temperament": "Steady, Fearless, Friendly, Devoted, Assertive, Spirited, Energetic, Lively, Alert, Obedient, Playful, Intelligent",
  //         "reference_image_id": "SJp7Qe5EX",
  //         "image": {
  //             "id": "SJp7Qe5EX",
  //             "width": 680,
  //             "height": 444,
  //             "url": "https://cdn2.thedogapi.com/images/SJp7Qe5EX.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "4 - 7",
  //             "metric": "2 - 3"
  //         },
  //         "height": {
  //             "imperial": "8 - 10",
  //             "metric": "20 - 25"
  //         },
  //         "id": 161,
  //         "name": "Maltese",
  //         "bred_for": "Lapdog",
  //         "breed_group": "Toy",
  //         "life_span": "15 - 18 years",
  //         "temperament": "Playful, Docile, Fearless, Affectionate, Sweet-Tempered, Lively, Responsive, Easygoing, Gentle, Intelligent, Active",
  //         "reference_image_id": "B1SV7gqN7",
  //         "image": {
  //             "id": "B1SV7gqN7",
  //             "width": 680,
  //             "height": 453,
  //             "url": "https://cdn2.thedogapi.com/images/B1SV7gqN7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "20 - 40",
  //             "metric": "9 - 18"
  //         },
  //         "height": {
  //             "imperial": "13 - 18",
  //             "metric": "33 - 46"
  //         },
  //         "id": 165,
  //         "name": "Miniature American Shepherd",
  //         "breed_group": "Herding",
  //         "life_span": "12 - 15 years",
  //         "temperament": "Energetic, Loyal, Intelligent, Trainable",
  //         "reference_image_id": "BkHHQgcN7",
  //         "image": {
  //             "id": "BkHHQgcN7",
  //             "width": 920,
  //             "height": 640,
  //             "url": "https://cdn2.thedogapi.com/images/BkHHQgcN7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "8 - 11",
  //             "metric": "4 - 5"
  //         },
  //         "height": {
  //             "imperial": "10 - 12.5",
  //             "metric": "25 - 32"
  //         },
  //         "id": 167,
  //         "name": "Miniature Pinscher",
  //         "bred_for": "Small vermin hunting",
  //         "breed_group": "Toy",
  //         "life_span": "15 years",
  //         "temperament": "Clever, Outgoing, Friendly, Energetic, Responsive, Playful",
  //         "reference_image_id": "Hy3H7g94X",
  //         "image": {
  //             "id": "Hy3H7g94X",
  //             "width": 1500,
  //             "height": 1125,
  //             "url": "https://cdn2.thedogapi.com/images/Hy3H7g94X.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "11 - 20",
  //             "metric": "5 - 9"
  //         },
  //         "height": {
  //             "imperial": "12 - 14",
  //             "metric": "30 - 36"
  //         },
  //         "id": 168,
  //         "name": "Miniature Schnauzer",
  //         "bred_for": "Ratting",
  //         "breed_group": "Terrier",
  //         "life_span": "12 - 14 years",
  //         "temperament": "Fearless, Friendly, Spirited, Alert, Obedient, Intelligent",
  //         "reference_image_id": "SJIUQl9NX",
  //         "image": {
  //             "id": "SJIUQl9NX",
  //             "width": 800,
  //             "height": 533,
  //             "url": "https://cdn2.thedogapi.com/images/SJIUQl9NX.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "100 - 150",
  //             "metric": "45 - 68"
  //         },
  //         "height": {
  //             "imperial": "26 - 28",
  //             "metric": "66 - 71"
  //         },
  //         "id": 171,
  //         "name": "Newfoundland",
  //         "bred_for": "All purpose water dog, fishing aid",
  //         "breed_group": "Working",
  //         "life_span": "8 - 10 years",
  //         "temperament": "Sweet-Tempered, Gentle, Trainable",
  //         "reference_image_id": "Sk4DXl54m",
  //         "image": {
  //             "id": "Sk4DXl54m",
  //             "width": 1174,
  //             "height": 986,
  //             "url": "https://cdn2.thedogapi.com/images/Sk4DXl54m.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "11 - 12",
  //             "metric": "5 - 5"
  //         },
  //         "height": {
  //             "imperial": "9 - 10",
  //             "metric": "23 - 25"
  //         },
  //         "id": 172,
  //         "name": "Norfolk Terrier",
  //         "bred_for": "Ratting, fox bolting",
  //         "breed_group": "Terrier",
  //         "life_span": "12 - 15 years",
  //         "temperament": "Self-confidence, Fearless, Spirited, Companionable, Happy, Lovable",
  //         "reference_image_id": "B1ADQg94X",
  //         "image": {
  //             "id": "B1ADQg94X",
  //             "width": 1468,
  //             "height": 1092,
  //             "url": "https://cdn2.thedogapi.com/images/B1ADQg94X.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "11 - 12",
  //             "metric": "5 - 5"
  //         },
  //         "height": {
  //             "imperial": "10",
  //             "metric": "25"
  //         },
  //         "id": 176,
  //         "name": "Norwich Terrier",
  //         "bred_for": "Ratting, fox bolting",
  //         "breed_group": "Terrier",
  //         "life_span": "12 - 15 years",
  //         "temperament": "Hardy, Affectionate, Energetic, Sensitive, Intelligent",
  //         "reference_image_id": "BkgKXlqE7",
  //         "image": {
  //             "id": "BkgKXlqE7",
  //             "width": 1140,
  //             "height": 640,
  //             "url": "https://cdn2.thedogapi.com/images/BkgKXlqE7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "35 - 50",
  //             "metric": "16 - 23"
  //         },
  //         "height": {
  //             "imperial": "17 - 21",
  //             "metric": "43 - 53"
  //         },
  //         "id": 177,
  //         "name": "Nova Scotia Duck Tolling Retriever",
  //         "breed_group": "Sporting",
  //         "life_span": "12 - 14 years",
  //         "temperament": "Outgoing, Alert, Patient, Intelligent, Loving",
  //         "reference_image_id": "SyYtQe5V7",
  //         "image": {
  //             "id": "SyYtQe5V7",
  //             "width": 630,
  //             "height": 420,
  //             "url": "https://cdn2.thedogapi.com/images/SyYtQe5V7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "60 - 100",
  //             "metric": "27 - 45"
  //         },
  //         "height": {
  //             "imperial": "21",
  //             "metric": "53"
  //         },
  //         "id": 178,
  //         "name": "Old English Sheepdog",
  //         "bred_for": "Driving sheep, cattle",
  //         "breed_group": "Herding",
  //         "life_span": "10 - 12 years",
  //         "temperament": "Sociable, Bubbly, Playful, Adaptable, Intelligent, Loving",
  //         "reference_image_id": "HkZ57lq4m",
  //         "image": {
  //             "id": "HkZ57lq4m",
  //             "width": 1334,
  //             "height": 889,
  //             "url": "https://cdn2.thedogapi.com/images/HkZ57lq4m.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "65 – 85",
  //             "metric": "NaN"
  //         },
  //         "height": {
  //             "imperial": "15 - 19",
  //             "metric": "38 - 48"
  //         },
  //         "id": 179,
  //         "name": "Olde English Bulldogge",
  //         "life_span": "9 – 14 years",
  //         "temperament": "Friendly, Alert, Confident, Loving, Courageous, Strong",
  //         "reference_image_id": "B1d5me547",
  //         "image": {
  //             "id": "B1d5me547",
  //             "width": 554,
  //             "height": 546,
  //             "url": "https://cdn2.thedogapi.com/images/B1d5me547.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "3 - 12",
  //             "metric": "1 - 5"
  //         },
  //         "height": {
  //             "imperial": "8 - 11",
  //             "metric": "20 - 28"
  //         },
  //         "id": 181,
  //         "name": "Papillon",
  //         "bred_for": "Lapdog",
  //         "breed_group": "Toy",
  //         "life_span": "13 - 17 years",
  //         "temperament": "Hardy, Friendly, Energetic, Alert, Intelligent, Happy",
  //         "reference_image_id": "SkJj7e547",
  //         "image": {
  //             "id": "SkJj7e547",
  //             "width": 960,
  //             "height": 765,
  //             "url": "https://cdn2.thedogapi.com/images/SkJj7e547.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "14",
  //             "metric": "6"
  //         },
  //         "height": {
  //             "imperial": "6 - 9",
  //             "metric": "15 - 23"
  //         },
  //         "id": 183,
  //         "name": "Pekingese",
  //         "bred_for": "Lapdog",
  //         "breed_group": "Toy",
  //         "life_span": "14 - 18 years",
  //         "temperament": "Opinionated, Good-natured, Stubborn, Affectionate, Aggressive, Intelligent",
  //         "reference_image_id": "ByIiml9Nm",
  //         "image": {
  //             "id": "ByIiml9Nm",
  //             "width": 960,
  //             "height": 640,
  //             "url": "https://cdn2.thedogapi.com/images/ByIiml9Nm.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "25 - 30",
  //             "metric": "11 - 14"
  //         },
  //         "height": {
  //             "imperial": "10 - 12",
  //             "metric": "25 - 30"
  //         },
  //         "id": 184,
  //         "name": "Pembroke Welsh Corgi",
  //         "bred_for": "Driving stock to market in northern Wales",
  //         "breed_group": "Herding",
  //         "life_span": "12 - 14 years",
  //         "temperament": "Tenacious, Outgoing, Friendly, Bold, Playful, Protective",
  //         "reference_image_id": "rJ6iQeqEm",
  //         "image": {
  //             "id": "rJ6iQeqEm",
  //             "width": 1280,
  //             "height": 720,
  //             "url": "https://cdn2.thedogapi.com/images/rJ6iQeqEm.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "88 - 110",
  //             "metric": "40 - 50"
  //         },
  //         "height": {
  //             "imperial": "22 - 25.5",
  //             "metric": "56 - 65"
  //         },
  //         "id": 185,
  //         "name": "Perro de Presa Canario",
  //         "breed_group": "Working",
  //         "life_span": "10 - 12 years",
  //         "temperament": "Strong Willed, Suspicious, Gentle, Dominant, Calm",
  //         "reference_image_id": "S1V3Qeq4X",
  //         "image": {
  //             "id": "S1V3Qeq4X",
  //             "width": 600,
  //             "height": 483,
  //             "url": "https://cdn2.thedogapi.com/images/S1V3Qeq4X.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "40 - 60",
  //             "metric": "18 - 27"
  //         },
  //         "height": {
  //             "imperial": "21 - 25",
  //             "metric": "53 - 64"
  //         },
  //         "id": 188,
  //         "name": "Pharaoh Hound",
  //         "bred_for": "Hunting rabbits",
  //         "breed_group": "Hound",
  //         "life_span": "12 - 14 years",
  //         "temperament": "Affectionate, Sociable, Playful, Intelligent, Active, Trainable",
  //         "reference_image_id": "Byz6mgqEQ",
  //         "image": {
  //             "id": "Byz6mgqEQ",
  //             "width": 3918,
  //             "height": 2938,
  //             "url": "https://cdn2.thedogapi.com/images/Byz6mgqEQ.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "40 - 60",
  //             "metric": "18 - 27"
  //         },
  //         "height": {
  //             "imperial": "20 - 25",
  //             "metric": "51 - 64"
  //         },
  //         "id": 189,
  //         "name": "Plott",
  //         "bred_for": "Hunting big-game like Boar.",
  //         "breed_group": "Hound",
  //         "life_span": "12 - 14 years",
  //         "temperament": "Bold, Alert, Loyal, Intelligent",
  //         "reference_image_id": "B1i67l5VQ",
  //         "image": {
  //             "id": "B1i67l5VQ",
  //             "width": 640,
  //             "height": 480,
  //             "url": "https://cdn2.thedogapi.com/images/B1i67l5VQ.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "3 - 7",
  //             "metric": "1 - 3"
  //         },
  //         "height": {
  //             "imperial": "8 - 12",
  //             "metric": "20 - 30"
  //         },
  //         "id": 193,
  //         "name": "Pomeranian",
  //         "bred_for": "Companion",
  //         "breed_group": "Toy",
  //         "life_span": "15 years",
  //         "temperament": "Extroverted, Friendly, Sociable, Playful, Intelligent, Active",
  //         "reference_image_id": "HJd0XecNX",
  //         "image": {
  //             "id": "HJd0XecNX",
  //             "width": 800,
  //             "height": 532,
  //             "url": "https://cdn2.thedogapi.com/images/HJd0XecNX.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "15 - 17",
  //             "metric": "7 - 8"
  //         },
  //         "height": {
  //             "imperial": "11 - 15",
  //             "metric": "28 - 38"
  //         },
  //         "id": 196,
  //         "name": "Poodle (Miniature)",
  //         "life_span": "12 – 15 years",
  //         "reference_image_id": "Hkxk4ecVX",
  //         "image": {
  //             "id": "Hkxk4ecVX",
  //             "width": 1280,
  //             "height": 853,
  //             "url": "https://cdn2.thedogapi.com/images/Hkxk4ecVX.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "6 - 9",
  //             "metric": "3 - 4"
  //         },
  //         "height": {
  //             "imperial": "9 - 11",
  //             "metric": "23 - 28"
  //         },
  //         "id": 197,
  //         "name": "Poodle (Toy)",
  //         "life_span": "18 years",
  //         "reference_image_id": "rJFJVxc4m",
  //         "image": {
  //             "id": "rJFJVxc4m",
  //             "width": 620,
  //             "height": 403,
  //             "url": "https://cdn2.thedogapi.com/images/rJFJVxc4m.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "14 - 18",
  //             "metric": "6 - 8"
  //         },
  //         "height": {
  //             "imperial": "10 - 12",
  //             "metric": "25 - 30"
  //         },
  //         "id": 201,
  //         "name": "Pug",
  //         "bred_for": "Lapdog",
  //         "breed_group": "Toy",
  //         "life_span": "12 - 14 years",
  //         "temperament": "Docile, Clever, Charming, Stubborn, Sociable, Playful, Quiet, Attentive",
  //         "reference_image_id": "HyJvcl9N7",
  //         "image": {
  //             "id": "HyJvcl9N7",
  //             "width": 800,
  //             "height": 600,
  //             "url": "https://cdn2.thedogapi.com/images/HyJvcl9N7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "25 - 35",
  //             "metric": "11 - 16"
  //         },
  //         "height": {
  //             "imperial": "16 - 17",
  //             "metric": "41 - 43"
  //         },
  //         "id": 204,
  //         "name": "Puli",
  //         "bred_for": "Herding",
  //         "breed_group": "Herding",
  //         "life_span": "12 - 16 Years years",
  //         "temperament": "Energetic, Agile, Loyal, Obedient, Intelligent, Faithful",
  //         "reference_image_id": "ryPgVl5N7",
  //         "image": {
  //             "id": "ryPgVl5N7",
  //             "width": 1199,
  //             "height": 829,
  //             "url": "https://cdn2.thedogapi.com/images/ryPgVl5N7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "18 - 33",
  //             "metric": "8 - 15"
  //         },
  //         "height": {
  //             "imperial": "15 - 18.5",
  //             "metric": "38 - 47"
  //         },
  //         "id": 205,
  //         "name": "Pumi",
  //         "breed_group": "Herding",
  //         "life_span": "13 - 15 years",
  //         "temperament": "Lively, Reserved, Intelligent, Active, Protective, Vocal",
  //         "reference_image_id": "SyRe4xcN7",
  //         "image": {
  //             "id": "SyRe4xcN7",
  //             "width": 695,
  //             "height": 391,
  //             "url": "https://cdn2.thedogapi.com/images/SyRe4xcN7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "8 - 25",
  //             "metric": "4 - 11"
  //         },
  //         "height": {
  //             "imperial": "10 - 13",
  //             "metric": "25 - 33"
  //         },
  //         "id": 207,
  //         "name": "Rat Terrier",
  //         "breed_group": "Terrier",
  //         "life_span": "12 - 18 years",
  //         "temperament": "Affectionate, Lively, Inquisitive, Alert, Intelligent, Loving",
  //         "reference_image_id": "HkXWNl9E7",
  //         "image": {
  //             "id": "HkXWNl9E7",
  //             "width": 825,
  //             "height": 689,
  //             "url": "https://cdn2.thedogapi.com/images/HkXWNl9E7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "45 - 80",
  //             "metric": "20 - 36"
  //         },
  //         "height": {
  //             "imperial": "21 - 27",
  //             "metric": "53 - 69"
  //         },
  //         "id": 208,
  //         "name": "Redbone Coonhound",
  //         "bred_for": "Hunting raccoon, deer, bear, and cougar.",
  //         "breed_group": "Hound",
  //         "life_span": "10 - 12 years",
  //         "temperament": "Affectionate, Energetic, Independent, Companionable, Familial, Unflappable",
  //         "reference_image_id": "HJMzEl5N7",
  //         "image": {
  //             "id": "HJMzEl5N7",
  //             "width": 1537,
  //             "height": 1323,
  //             "url": "https://cdn2.thedogapi.com/images/HJMzEl5N7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "75 - 80",
  //             "metric": "34 - 36"
  //         },
  //         "height": {
  //             "imperial": "24 - 27",
  //             "metric": "61 - 69"
  //         },
  //         "id": 209,
  //         "name": "Rhodesian Ridgeback",
  //         "bred_for": "Big game hunting, guarding",
  //         "breed_group": "Hound",
  //         "life_span": "10 - 12 years",
  //         "temperament": "Strong Willed, Mischievous, Loyal, Dignified, Sensitive, Intelligent",
  //         "reference_image_id": "By9zNgqE7",
  //         "image": {
  //             "id": "By9zNgqE7",
  //             "width": 1000,
  //             "height": 667,
  //             "url": "https://cdn2.thedogapi.com/images/By9zNgqE7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "75 - 110",
  //             "metric": "34 - 50"
  //         },
  //         "height": {
  //             "imperial": "22 - 27",
  //             "metric": "56 - 69"
  //         },
  //         "id": 210,
  //         "name": "Rottweiler",
  //         "bred_for": "Cattle drover, guardian, draft",
  //         "breed_group": "Working",
  //         "life_span": "8 - 10 years",
  //         "temperament": "Steady, Good-natured, Fearless, Devoted, Alert, Obedient, Confident, Self-assured, Calm, Courageous",
  //         "reference_image_id": "r1xXEgcNX",
  //         "image": {
  //             "id": "r1xXEgcNX",
  //             "width": 736,
  //             "height": 595,
  //             "url": "https://cdn2.thedogapi.com/images/r1xXEgcNX.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "3 - 6",
  //             "metric": "1 - 3"
  //         },
  //         "height": {
  //             "imperial": "7.5 - 10.5",
  //             "metric": "19 - 27"
  //         },
  //         "id": 211,
  //         "name": "Russian Toy",
  //         "breed_group": "Toy",
  //         "life_span": "10 - 12 years",
  //         "reference_image_id": "HkP7Vxc4Q",
  //         "image": {
  //             "id": "HkP7Vxc4Q",
  //             "width": 645,
  //             "height": 380,
  //             "url": "https://cdn2.thedogapi.com/images/HkP7Vxc4Q.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "130 - 180",
  //             "metric": "59 - 82"
  //         },
  //         "height": {
  //             "imperial": "25.5 - 27.5",
  //             "metric": "65 - 70"
  //         },
  //         "id": 212,
  //         "name": "Saint Bernard",
  //         "bred_for": "Draft, search, rescue",
  //         "breed_group": "Working",
  //         "life_span": "7 - 10 years",
  //         "temperament": "Friendly, Lively, Gentle, Watchful, Calm",
  //         "reference_image_id": "_Qf9nfRzL",
  //         "image": {
  //             "id": "_Qf9nfRzL",
  //             "width": 1080,
  //             "height": 1084,
  //             "url": "https://cdn2.thedogapi.com/images/_Qf9nfRzL.png"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "35 - 65",
  //             "metric": "16 - 29"
  //         },
  //         "height": {
  //             "imperial": "23 - 28",
  //             "metric": "58 - 71"
  //         },
  //         "id": 213,
  //         "name": "Saluki",
  //         "bred_for": "Coursing gazelle and hare",
  //         "breed_group": "Hound",
  //         "life_span": "12 - 14 years",
  //         "temperament": "Aloof, Reserved, Intelligent, Quiet",
  //         "reference_image_id": "fjFIuehNo",
  //         "image": {
  //             "id": "fjFIuehNo",
  //             "width": 750,
  //             "height": 450,
  //             "url": "https://cdn2.thedogapi.com/images/fjFIuehNo.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "50 - 60",
  //             "metric": "23 - 27"
  //         },
  //         "height": {
  //             "imperial": "19 - 23.5",
  //             "metric": "48 - 60"
  //         },
  //         "id": 214,
  //         "name": "Samoyed",
  //         "bred_for": "Herding reindeer, guardian, draft",
  //         "breed_group": "Working",
  //         "life_span": "12 - 14 years",
  //         "temperament": "Stubborn, Friendly, Sociable, Lively, Alert, Playful",
  //         "reference_image_id": "S1T8Ee9Nm",
  //         "image": {
  //             "id": "S1T8Ee9Nm",
  //             "width": 1200,
  //             "height": 797,
  //             "url": "https://cdn2.thedogapi.com/images/S1T8Ee9Nm.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "10 - 16",
  //             "metric": "5 - 7"
  //         },
  //         "height": {
  //             "imperial": "10 - 13",
  //             "metric": "25 - 33"
  //         },
  //         "id": 216,
  //         "name": "Schipperke",
  //         "bred_for": "Barge watchdog",
  //         "breed_group": "Non-Sporting",
  //         "life_span": "13 - 15 years",
  //         "temperament": "Fearless, Agile, Curious, Independent, Confident, Faithful",
  //         "reference_image_id": "SyBvVgc47",
  //         "image": {
  //             "id": "SyBvVgc47",
  //             "width": 1024,
  //             "height": 681,
  //             "url": "https://cdn2.thedogapi.com/images/SyBvVgc47.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "70 - 130",
  //             "metric": "32 - 59"
  //         },
  //         "height": {
  //             "imperial": "28 - 32",
  //             "metric": "71 - 81"
  //         },
  //         "id": 218,
  //         "name": "Scottish Deerhound",
  //         "bred_for": "Coursing deer",
  //         "breed_group": "Hound",
  //         "life_span": "8 - 10 years",
  //         "temperament": "Docile, Friendly, Dignified, Gentle",
  //         "reference_image_id": "SkNjqx9NQ",
  //         "image": {
  //             "id": "SkNjqx9NQ",
  //             "width": 700,
  //             "height": 480,
  //             "url": "https://cdn2.thedogapi.com/images/SkNjqx9NQ.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "18 - 22",
  //             "metric": "8 - 10"
  //         },
  //         "height": {
  //             "imperial": "10",
  //             "metric": "25"
  //         },
  //         "id": 219,
  //         "name": "Scottish Terrier",
  //         "bred_for": "Vermin hunting",
  //         "breed_group": "Terrier",
  //         "life_span": "11 - 13 years",
  //         "temperament": "Feisty, Alert, Independent, Playful, Quick, Self-assured",
  //         "reference_image_id": "Bklnce5NX",
  //         "image": {
  //             "id": "Bklnce5NX",
  //             "width": 1280,
  //             "height": 976,
  //             "url": "https://cdn2.thedogapi.com/images/Bklnce5NX.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "30",
  //             "metric": "14"
  //         },
  //         "height": {
  //             "imperial": "13 - 16",
  //             "metric": "33 - 41"
  //         },
  //         "id": 221,
  //         "name": "Shetland Sheepdog",
  //         "bred_for": "Sheep herding",
  //         "breed_group": "Herding",
  //         "life_span": "12 - 14 years",
  //         "temperament": "Affectionate, Lively, Responsive, Alert, Loyal, Reserved, Playful, Gentle, Intelligent, Active, Trainable, Strong",
  //         "reference_image_id": "rJa29l9E7",
  //         "image": {
  //             "id": "rJa29l9E7",
  //             "width": 824,
  //             "height": 640,
  //             "url": "https://cdn2.thedogapi.com/images/rJa29l9E7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "17 - 23",
  //             "metric": "8 - 10"
  //         },
  //         "height": {
  //             "imperial": "13.5 - 16.5",
  //             "metric": "34 - 42"
  //         },
  //         "id": 222,
  //         "name": "Shiba Inu",
  //         "bred_for": "Hunting in the mountains of Japan, Alert Watchdog",
  //         "breed_group": "Non-Sporting",
  //         "life_span": "12 - 16 years",
  //         "temperament": "Charming, Fearless, Keen, Alert, Confident, Faithful",
  //         "reference_image_id": "Zn3IjPX3f",
  //         "image": {
  //             "id": "Zn3IjPX3f",
  //             "width": 1080,
  //             "height": 1080,
  //             "url": "https://cdn2.thedogapi.com/images/Zn3IjPX3f.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "9 - 16",
  //             "metric": "4 - 7"
  //         },
  //         "height": {
  //             "imperial": "8 - 11",
  //             "metric": "20 - 28"
  //         },
  //         "id": 223,
  //         "name": "Shih Tzu",
  //         "bred_for": "Lapdog",
  //         "breed_group": "Toy",
  //         "life_span": "10 - 18 years",
  //         "temperament": "Clever, Spunky, Outgoing, Friendly, Affectionate, Lively, Alert, Loyal, Independent, Playful, Gentle, Intelligent, Happy, Active, Courageous",
  //         "reference_image_id": "BkrJjgcV7",
  //         "image": {
  //             "id": "BkrJjgcV7",
  //             "width": 800,
  //             "height": 600,
  //             "url": "https://cdn2.thedogapi.com/images/BkrJjgcV7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "120 - 140",
  //             "metric": "54 - 64"
  //         },
  //         "height": {
  //             "imperial": "26 - 30",
  //             "metric": "66 - 76"
  //         },
  //         "id": 225,
  //         "name": "Shiloh Shepherd",
  //         "bred_for": "Swimming, Carrying backpacks, Pulling carts or sleds",
  //         "life_span": "9 – 14 years",
  //         "temperament": "Outgoing, Loyal, Companionable, Gentle, Loving, Trainable",
  //         "reference_image_id": "SJJxjecEX",
  //         "image": {
  //             "id": "SJJxjecEX",
  //             "width": 1005,
  //             "height": 803,
  //             "url": "https://cdn2.thedogapi.com/images/SJJxjecEX.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "35 - 60",
  //             "metric": "16 - 27"
  //         },
  //         "height": {
  //             "imperial": "20 - 23.5",
  //             "metric": "51 - 60"
  //         },
  //         "id": 226,
  //         "name": "Siberian Husky",
  //         "bred_for": "Sled pulling",
  //         "breed_group": "Working",
  //         "life_span": "12 years",
  //         "temperament": "Outgoing, Friendly, Alert, Gentle, Intelligent",
  //         "reference_image_id": "S17ZilqNm",
  //         "image": {
  //             "id": "S17ZilqNm",
  //             "width": 1920,
  //             "height": 1280,
  //             "url": "https://cdn2.thedogapi.com/images/S17ZilqNm.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "8 - 10",
  //             "metric": "4 - 5"
  //         },
  //         "height": {
  //             "imperial": "9 - 10",
  //             "metric": "23 - 25"
  //         },
  //         "id": 228,
  //         "name": "Silky Terrier",
  //         "bred_for": "Small vermin hunting, companionship",
  //         "breed_group": "Toy",
  //         "life_span": "12 - 15 years",
  //         "temperament": "Friendly, Responsive, Inquisitive, Alert, Quick, Joyful",
  //         "reference_image_id": "ByzGsl5Nm",
  //         "image": {
  //             "id": "ByzGsl5Nm",
  //             "width": 1599,
  //             "height": 1142,
  //             "url": "https://cdn2.thedogapi.com/images/ByzGsl5Nm.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "up - 18",
  //             "metric": "NaN - 8"
  //         },
  //         "height": {
  //             "imperial": "15.5",
  //             "metric": "39"
  //         },
  //         "id": 232,
  //         "name": "Smooth Fox Terrier",
  //         "bred_for": "Fox bolting",
  //         "breed_group": "Terrier",
  //         "life_span": "12 - 14 years",
  //         "temperament": "Fearless, Affectionate, Alert, Playful, Intelligent, Active",
  //         "reference_image_id": "Syszjx9Em",
  //         "image": {
  //             "id": "Syszjx9Em",
  //             "width": 1600,
  //             "height": 1031,
  //             "url": "https://cdn2.thedogapi.com/images/Syszjx9Em.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "30 - 40",
  //             "metric": "14 - 18"
  //         },
  //         "height": {
  //             "imperial": "16 - 18",
  //             "metric": "41 - 46"
  //         },
  //         "id": 233,
  //         "name": "Soft Coated Wheaten Terrier",
  //         "bred_for": "Vermin hunting, guarding, all-around farm helper",
  //         "breed_group": "Terrier",
  //         "life_span": "12 - 15 years",
  //         "temperament": "Affectionate, Spirited, Energetic, Playful, Intelligent, Faithful",
  //         "reference_image_id": "HJHmix5NQ",
  //         "image": {
  //             "id": "HJHmix5NQ",
  //             "width": 1200,
  //             "height": 800,
  //             "url": "https://cdn2.thedogapi.com/images/HJHmix5NQ.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "30 - 50",
  //             "metric": "14 - 23"
  //         },
  //         "height": {
  //             "imperial": "16 - 20",
  //             "metric": "41 - 51"
  //         },
  //         "id": 235,
  //         "name": "Spanish Water Dog",
  //         "bred_for": "Herding flocks of sheep and goats from one pasture to another",
  //         "breed_group": "Sporting",
  //         "life_span": "12 - 15 years",
  //         "temperament": "Trainable, Diligent, Affectionate, Loyal, Athletic, Intelligent",
  //         "reference_image_id": "HJf4jl9VX",
  //         "image": {
  //             "id": "HJf4jl9VX",
  //             "width": 1200,
  //             "height": 922,
  //             "url": "https://cdn2.thedogapi.com/images/HJf4jl9VX.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "61 - 85",
  //             "metric": "28 - 39"
  //         },
  //         "height": {
  //             "imperial": "22.5 - 27.5",
  //             "metric": "57 - 70"
  //         },
  //         "id": 236,
  //         "name": "Spinone Italiano",
  //         "breed_group": "Sporting",
  //         "life_span": "10 - 12 years",
  //         "temperament": "Docile, Friendly, Affectionate, Loyal, Patient, Gentle",
  //         "reference_image_id": "rk5Eoe5Nm",
  //         "image": {
  //             "id": "rk5Eoe5Nm",
  //             "width": 1030,
  //             "height": 772,
  //             "url": "https://cdn2.thedogapi.com/images/rk5Eoe5Nm.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "24 - 38",
  //             "metric": "11 - 17"
  //         },
  //         "height": {
  //             "imperial": "14 - 16",
  //             "metric": "36 - 41"
  //         },
  //         "id": 238,
  //         "name": "Staffordshire Bull Terrier",
  //         "bred_for": "",
  //         "breed_group": "Terrier",
  //         "life_span": "12 - 14 years",
  //         "temperament": "Reliable, Fearless, Bold, Affectionate, Loyal, Intelligent, Courageous",
  //         "reference_image_id": "H1zSie9V7",
  //         "image": {
  //             "id": "H1zSie9V7",
  //             "width": 1280,
  //             "height": 852,
  //             "url": "https://cdn2.thedogapi.com/images/H1zSie9V7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "30 - 50",
  //             "metric": "14 - 23"
  //         },
  //         "height": {
  //             "imperial": "17.5 - 19.5",
  //             "metric": "44 - 50"
  //         },
  //         "id": 239,
  //         "name": "Standard Schnauzer",
  //         "bred_for": "Ratting, guarding",
  //         "breed_group": "Working",
  //         "life_span": "13 - 15 years",
  //         "temperament": "Trainable, Good-natured, Devoted, Lively, Playful, Intelligent",
  //         "reference_image_id": "tmzeu6ID_",
  //         "image": {
  //             "id": "tmzeu6ID_",
  //             "width": 650,
  //             "height": 585,
  //             "url": "https://cdn2.thedogapi.com/images/tmzeu6ID_.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "20 - 30",
  //             "metric": "9 - 14"
  //         },
  //         "height": {
  //             "imperial": "11.5 - 13.5",
  //             "metric": "29 - 34"
  //         },
  //         "id": 242,
  //         "name": "Swedish Vallhund",
  //         "breed_group": "Herding",
  //         "life_span": "12 - 14 years",
  //         "temperament": "Fearless, Friendly, Energetic, Alert, Intelligent, Watchful",
  //         "reference_image_id": "HJ-Dix94Q",
  //         "image": {
  //             "id": "HJ-Dix94Q",
  //             "width": 1280,
  //             "height": 851,
  //             "url": "https://cdn2.thedogapi.com/images/HJ-Dix94Q.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "35 - 55",
  //             "metric": "16 - 25"
  //         },
  //         "height": {
  //             "imperial": "20 - 24",
  //             "metric": "51 - 61"
  //         },
  //         "id": 243,
  //         "name": "Thai Ridgeback",
  //         "breed_group": "Hound",
  //         "life_span": "10 - 12 years",
  //         "temperament": "Protective, Loyal, Independent, Intelligent, Loving, Familial",
  //         "reference_image_id": "zv89hR-O8",
  //         "image": {
  //             "id": "zv89hR-O8",
  //             "width": 1080,
  //             "height": 720,
  //             "url": "https://cdn2.thedogapi.com/images/zv89hR-O8.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "85 - 140",
  //             "metric": "39 - 64"
  //         },
  //         "height": {
  //             "imperial": "24 - 26",
  //             "metric": "61 - 66"
  //         },
  //         "id": 244,
  //         "name": "Tibetan Mastiff",
  //         "breed_group": "Working",
  //         "life_span": "10 - 14 years",
  //         "temperament": "Strong Willed, Tenacious, Aloof, Stubborn, Intelligent, Protective",
  //         "reference_image_id": "SkM9sec47",
  //         "image": {
  //             "id": "SkM9sec47",
  //             "width": 1600,
  //             "height": 1375,
  //             "url": "https://cdn2.thedogapi.com/images/SkM9sec47.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "9 - 15",
  //             "metric": "4 - 7"
  //         },
  //         "height": {
  //             "imperial": "10",
  //             "metric": "25"
  //         },
  //         "id": 245,
  //         "name": "Tibetan Spaniel",
  //         "breed_group": "Non-Sporting",
  //         "life_span": "12 - 15 years",
  //         "temperament": "Willful, Aloof, Assertive, Independent, Playful, Intelligent, Happy",
  //         "reference_image_id": "Hyjcol947",
  //         "image": {
  //             "id": "Hyjcol947",
  //             "width": 1023,
  //             "height": 825,
  //             "url": "https://cdn2.thedogapi.com/images/Hyjcol947.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "20 - 24",
  //             "metric": "9 - 11"
  //         },
  //         "height": {
  //             "imperial": "14 - 17",
  //             "metric": "36 - 43"
  //         },
  //         "id": 246,
  //         "name": "Tibetan Terrier",
  //         "bred_for": "Good luck charms, mascots, watchdogs, herding dogs, and companions",
  //         "breed_group": "Non-Sporting",
  //         "life_span": "12 - 15 years",
  //         "temperament": "Affectionate, Energetic, Amiable, Reserved, Gentle, Sensitive",
  //         "reference_image_id": "6f5n_42mB",
  //         "image": {
  //             "id": "6f5n_42mB",
  //             "width": 981,
  //             "height": 1226,
  //             "url": "https://cdn2.thedogapi.com/images/6f5n_42mB.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "4 - 9",
  //             "metric": "2 - 4"
  //         },
  //         "height": {
  //             "imperial": "8 - 11",
  //             "metric": "20 - 28"
  //         },
  //         "id": 248,
  //         "name": "Toy Fox Terrier",
  //         "breed_group": "Toy",
  //         "life_span": "12 - 15 years",
  //         "temperament": "Friendly, Spirited, Alert, Loyal, Playful, Intelligent",
  //         "reference_image_id": "B17ase9V7",
  //         "image": {
  //             "id": "B17ase9V7",
  //             "width": 1200,
  //             "height": 1024,
  //             "url": "https://cdn2.thedogapi.com/images/B17ase9V7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "45 - 80",
  //             "metric": "20 - 36"
  //         },
  //         "height": {
  //             "imperial": "20 - 27",
  //             "metric": "51 - 69"
  //         },
  //         "id": 250,
  //         "name": "Treeing Walker Coonhound",
  //         "breed_group": "Hound",
  //         "life_span": "10 - 13 years",
  //         "temperament": "Clever, Affectionate, Confident, Intelligent, Loving, Trainable",
  //         "reference_image_id": "SkRpsgc47",
  //         "image": {
  //             "id": "SkRpsgc47",
  //             "width": 1920,
  //             "height": 1080,
  //             "url": "https://cdn2.thedogapi.com/images/SkRpsgc47.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "50 - 65",
  //             "metric": "23 - 29"
  //         },
  //         "height": {
  //             "imperial": "21 - 24",
  //             "metric": "53 - 61"
  //         },
  //         "id": 251,
  //         "name": "Vizsla",
  //         "bred_for": "Pointing and trailing",
  //         "breed_group": "Sporting",
  //         "life_span": "10 - 14 years",
  //         "temperament": "Affectionate, Energetic, Loyal, Gentle, Quiet",
  //         "reference_image_id": "r1o0jx9Em",
  //         "image": {
  //             "id": "r1o0jx9Em",
  //             "width": 2269,
  //             "height": 1276,
  //             "url": "https://cdn2.thedogapi.com/images/r1o0jx9Em.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "55 - 90",
  //             "metric": "25 - 41"
  //         },
  //         "height": {
  //             "imperial": "23 - 27",
  //             "metric": "58 - 69"
  //         },
  //         "id": 253,
  //         "name": "Weimaraner",
  //         "bred_for": "Large game trailing and versatile gundog",
  //         "breed_group": "Sporting",
  //         "life_span": "12 - 15 years",
  //         "temperament": "Steady, Aloof, Stubborn, Energetic, Alert, Intelligent, Powerful, Fast",
  //         "reference_image_id": "SyU12l9V7",
  //         "image": {
  //             "id": "SyU12l9V7",
  //             "width": 901,
  //             "height": 954,
  //             "url": "https://cdn2.thedogapi.com/images/SyU12l9V7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "35 - 55",
  //             "metric": "16 - 25"
  //         },
  //         "height": {
  //             "imperial": "17 - 19",
  //             "metric": "43 - 48"
  //         },
  //         "id": 254,
  //         "name": "Welsh Springer Spaniel",
  //         "bred_for": "Flushing and retrieving birds",
  //         "breed_group": "Sporting",
  //         "life_span": "12 - 15 years",
  //         "temperament": "Stubborn, Friendly, Affectionate, Loyal, Playful, Active",
  //         "reference_image_id": "BJ1gnx5Vm",
  //         "image": {
  //             "id": "BJ1gnx5Vm",
  //             "width": 1331,
  //             "height": 944,
  //             "url": "https://cdn2.thedogapi.com/images/BJ1gnx5Vm.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "15 - 22",
  //             "metric": "7 - 10"
  //         },
  //         "height": {
  //             "imperial": "10 - 11",
  //             "metric": "25 - 28"
  //         },
  //         "id": 256,
  //         "name": "West Highland White Terrier",
  //         "bred_for": "Fox, badger, vermin hunting",
  //         "breed_group": "Terrier",
  //         "life_span": "15 - 20 years",
  //         "temperament": "Hardy, Friendly, Alert, Independent, Gay, Active, Courageous",
  //         "reference_image_id": "Bkdx2g5Em",
  //         "image": {
  //             "id": "Bkdx2g5Em",
  //             "width": 1065,
  //             "height": 1032,
  //             "url": "https://cdn2.thedogapi.com/images/Bkdx2g5Em.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "25 - 35",
  //             "metric": "11 - 16"
  //         },
  //         "height": {
  //             "imperial": "18 - 22",
  //             "metric": "46 - 56"
  //         },
  //         "id": 257,
  //         "name": "Whippet",
  //         "bred_for": "Coursing, racing",
  //         "breed_group": "Hound",
  //         "life_span": "12 - 15 years",
  //         "temperament": "Friendly, Affectionate, Lively, Gentle, Intelligent, Quiet",
  //         "reference_image_id": "Hyv-ne94m",
  //         "image": {
  //             "id": "Hyv-ne94m",
  //             "width": 1600,
  //             "height": 1071,
  //             "url": "https://cdn2.thedogapi.com/images/Hyv-ne94m.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "60 - 85",
  //             "metric": "27 - 39"
  //         },
  //         "height": {
  //             "imperial": "22 - 25",
  //             "metric": "56 - 64"
  //         },
  //         "id": 258,
  //         "name": "White Shepherd",
  //         "life_span": "12 – 14 years",
  //         "temperament": "Self-confidence, Aloof, Fearless, Alert, Companionable, Eager",
  //         "reference_image_id": "r14M3e9E7",
  //         "image": {
  //             "id": "r14M3e9E7",
  //             "width": 1200,
  //             "height": 800,
  //             "url": "https://cdn2.thedogapi.com/images/r14M3e9E7.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "15 - 19",
  //             "metric": "7 - 9"
  //         },
  //         "height": {
  //             "imperial": "13 - 16",
  //             "metric": "33 - 41"
  //         },
  //         "id": 259,
  //         "name": "Wire Fox Terrier",
  //         "bred_for": "Vermin hunting, fox bolting",
  //         "life_span": "13 – 14 years",
  //         "history": " England",
  //         "temperament": "Fearless, Friendly, Bold, Keen, Alert, Quick",
  //         "reference_image_id": "SJ6f2g9EQ",
  //         "image": {
  //             "id": "SJ6f2g9EQ",
  //             "width": 1000,
  //             "height": 795,
  //             "url": "https://cdn2.thedogapi.com/images/SJ6f2g9EQ.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "45 - 70",
  //             "metric": "20 - 32"
  //         },
  //         "height": {
  //             "imperial": "20 - 24",
  //             "metric": "51 - 61"
  //         },
  //         "id": 260,
  //         "name": "Wirehaired Pointing Griffon",
  //         "bred_for": "Gundog, \"swamp-tromping\", Flushing, pointing, and retrieving water fowl & game birds",
  //         "breed_group": "Sporting",
  //         "life_span": "12 - 14 years",
  //         "temperament": "Loyal, Gentle, Vigilant, Trainable, Proud",
  //         "reference_image_id": "Bkam2l9Vm",
  //         "image": {
  //             "id": "Bkam2l9Vm",
  //             "width": 2328,
  //             "height": 1604,
  //             "url": "https://cdn2.thedogapi.com/images/Bkam2l9Vm.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "45 - 65",
  //             "metric": "20 - 29"
  //         },
  //         "height": {
  //             "imperial": "21.5 - 25",
  //             "metric": "55 - 64"
  //         },
  //         "id": 261,
  //         "name": "Wirehaired Vizsla",
  //         "breed_group": "Sporting",
  //         "life_span": "12 - 14 years",
  //         "reference_image_id": "r1I4hl5Em",
  //         "image": {
  //             "id": "r1I4hl5Em",
  //             "width": 1024,
  //             "height": 770,
  //             "url": "https://cdn2.thedogapi.com/images/r1I4hl5Em.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "9 - 31",
  //             "metric": "4 - 14"
  //         },
  //         "height": {
  //             "imperial": "10 - 23",
  //             "metric": "25 - 58"
  //         },
  //         "id": 262,
  //         "name": "Xoloitzcuintli",
  //         "breed_group": "Non-Sporting",
  //         "life_span": "12 - 14 years",
  //         "temperament": "Cheerful, Alert, Companionable, Intelligent, Protective, Calm",
  //         "reference_image_id": "HkNS3gqEm",
  //         "image": {
  //             "id": "HkNS3gqEm",
  //             "width": 1500,
  //             "height": 1350,
  //             "url": "https://cdn2.thedogapi.com/images/HkNS3gqEm.jpg"
  //         }
  //     },
  //     {
  //         "weight": {
  //             "imperial": "4 - 7",
  //             "metric": "2 - 3"
  //         },
  //         "height": {
  //             "imperial": "8 - 9",
  //             "metric": "20 - 23"
  //         },
  //         "id": 264,
  //         "name": "Yorkshire Terrier",
  //         "bred_for": "Small vermin hunting",
  //         "breed_group": "Toy",
  //         "life_span": "12 - 16 years",
  //         "temperament": "Bold, Independent, Confident, Intelligent, Courageous",
  //         "reference_image_id": "B12BnxcVQ",
  //         "image": {
  //             "id": "B12BnxcVQ",
  //             "width": 1024,
  //             "height": 683,
  //             "url": "https://cdn2.thedogapi.com/images/B12BnxcVQ.jpg"
  //         }
  //     }
  // ]
}
