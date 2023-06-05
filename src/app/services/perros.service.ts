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
    // this.http.get<Dog[]>(`${this.apiUrl}breeds`).subscribe(console.log);
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
  // private dogList: Dog[] = [
  //   {
  //     weight: {
  //       imperial: '6 - 13',
  //       metric: '3 - 6',
  //     },
  //     height: {
  //       imperial: '9 - 11.5',
  //       metric: '23 - 29',
  //     },
  //     id: 1,
  //     name: 'Affenpinscher',
  //     bred_for: 'Caza de roedores pequeños, perro faldero',
  //     breed_group: 'Juguete',
  //     life_span: '10 - 12 años',
  //     temperament:
  //       'Terco, Curioso, Juguetón, Aventurero, Activo, Amante de la diversión',
  //     origin: 'Alemania, Francia',
  //     reference_image_id: 'BJa4kxc4X',
  //     image: {
  //       id: 'BJa4kxc4X',
  //       width: 1600,
  //       height: 1199,
  //       url: 'https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg',
  //     },
  //     searchTerms: ['Affenpinscher', 'perro pequeño', 'caza de roedores'],
  //     description:
  //       'El Affenpinscher es una raza de perro pequeño originaria de Alemania y Francia. Es conocido por ser un perro de caza de roedores y también como perro faldero. Es terco, curioso, juguetón, aventurero, activo y amante de la diversión.',
  //   },
  //   {
  //     weight: {
  //       imperial: '50 - 60',
  //       metric: '23 - 27',
  //     },
  //     height: {
  //       imperial: '25 - 27',
  //       metric: '64 - 69',
  //     },
  //     id: 2,
  //     name: 'Sabueso afgano',
  //     country_code: 'AG',
  //     bred_for: 'Caza y persecución',
  //     breed_group: 'Sabueso',
  //     life_span: '10 - 13 años',
  //     temperament: 'Distante, Payaso, Digno, Independiente, Feliz',
  //     origin: 'Afganistán, Irán, Pakistán',
  //     reference_image_id: 'hMyT4CDXR',
  //     image: {
  //       id: 'hMyT4CDXR',
  //       width: 606,
  //       height: 380,
  //       url: 'https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg',
  //     },
  //     searchTerms: ['Sabueso afgano', 'perro de caza', 'perro de persecución'],
  //     description:
  //       'El Sabueso afgano, también conocido como Afghan Hound, es una raza de perro de caza y persecución originaria de Afganistán, Irán y Pakistán. Se caracteriza por su apariencia distante, su temperamento de payaso y su dignidad. Es un perro independiente y feliz.',
  //   },
  //   {
  //     weight: {
  //       imperial: '44 - 66',
  //       metric: '20 - 30',
  //     },
  //     height: {
  //       imperial: '30',
  //       metric: '76',
  //     },
  //     id: 3,
  //     name: 'Perro de caza africano',
  //     bred_for: 'Un animal salvaje en manada',
  //     life_span: '11 años',
  //     temperament: 'Salvaje, Trabajador, Dedicado',
  //     origin: '',
  //     reference_image_id: 'rkiByec47',
  //     image: {
  //       id: 'rkiByec47',
  //       width: 500,
  //       height: 335,
  //       url: 'https://cdn2.thedogapi.com/images/rkiByec47.jpg',
  //     },
  //     searchTerms: ['Perro de caza africano', 'perro de caza en manada'],
  //     description:
  //       'El Perro de caza africano, o African Hunting Dog, es un animal salvaje que se encuentra en manadas. Aunque su origen específico es desconocido, se sabe que es un perro salvaje, trabajador y dedicado.',
  //   },
  //   {
  //     weight: {
  //       imperial: '40 - 65',
  //       metric: '18 - 29',
  //     },
  //     height: {
  //       imperial: '21 - 23',
  //       metric: '53 - 58',
  //     },
  //     id: 4,
  //     name: 'Airedale Terrier',
  //     bred_for: 'Caza de tejones y nutrias',
  //     breed_group: 'Terrier',
  //     life_span: '10 - 13 años',
  //     temperament:
  //       'Sociable, Amigable, Alerta, Confiado, Inteligente, Valiente',
  //     origin: 'Reino Unido, Inglaterra',
  //     reference_image_id: '1-7cgoZSh',
  //     image: {
  //       id: '1-7cgoZSh',
  //       width: 645,
  //       height: 430,
  //       url: 'https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg',
  //     },
  //     searchTerms: [
  //       'Airedale Terrier',
  //       'perro de caza',
  //       'caza de tejones',
  //       'caza de nutrias',
  //     ],
  //     description:
  //       'El Airedale Terrier es un perro de caza utilizado para la caza de tejones y nutrias. Originario del Reino Unido e Inglaterra, pertenece al grupo de los terrier. Es un perro sociable, amigable, alerta, confiado, inteligente y valiente.',
  //   },
  //   {
  //     weight: {
  //       imperial: '90 - 120',
  //       metric: '41 - 54',
  //     },
  //     height: {
  //       imperial: '28 - 34',
  //       metric: '71 - 86',
  //     },
  //     id: 5,
  //     name: 'Perro de Akbash',
  //     bred_for: 'Guardia de ovejas',
  //     breed_group: 'Trabajo',
  //     life_span: '10 - 12 años',
  //     temperament: 'Leal, Independiente, Inteligente, Valiente',
  //     origin: '',
  //     reference_image_id: '26pHT3Qk7',
  //     image: {
  //       id: '26pHT3Qk7',
  //       width: 600,
  //       height: 471,
  //       url: 'https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg',
  //     },
  //     searchTerms: ['Perro de Akbash', 'guardia de ovejas'],
  //     description:
  //       'El Perro de Akbash es una raza utilizada para la guardia de ovejas. Es conocido por ser leal, independiente, inteligente y valiente.',
  //   },
  //   {
  //     weight: {
  //       imperial: '65 - 115',
  //       metric: '29 - 52',
  //     },
  //     height: {
  //       imperial: '24 - 28',
  //       metric: '61 - 71',
  //     },
  //     id: 6,
  //     name: 'Akita',
  //     bred_for: 'Caza de osos',
  //     breed_group: 'Trabajo',
  //     life_span: '10 - 14 años',
  //     temperament:
  //       'Dócil, Alerta, Sensible, Digno, Compuesto, Amistoso, Receptivo, Fiel, Valiente',
  //     reference_image_id: 'BFRYBufpm',
  //     image: {
  //       id: 'BFRYBufpm',
  //       width: 1280,
  //       height: 853,
  //       url: 'https://cdn2.thedogapi.com/images/BFRYBufpm.jpg',
  //     },
  //     searchTerms: ['Akita', 'perro de caza', 'caza de osos'],
  //     description:
  //       'El Akita es una raza de perro utilizada para la caza de osos. Pertenece al grupo de trabajo y se caracteriza por ser dócil, alerta, sensible, digno, compuesto, amistoso, receptivo, fiel y valiente.',
  //   },
  //   {
  //     weight: {
  //       imperial: '55 - 90',
  //       metric: '25 - 41',
  //     },
  //     height: {
  //       imperial: '18 - 24',
  //       metric: '46 - 61',
  //     },
  //     id: 7,
  //     name: 'Alapaha Blue Blood Bulldog',
  //     description:
  //       'El Bulldog Alapaha Blue Blood es una raza bien desarrollada y exagerada, con una cabeza amplia y orejas caídas naturales. El hocico prominente está cubierto por labios superiores sueltos. Los ojos prominentes están bien separados. El pelaje del Alapaha es relativamente corto y bastante rígido. Los colores preferidos son merle azul, merle marrón o merle rojo, todos recortados en blanco o chocolate y blanco. También se prefieren los ojos de vidrio (azules) o los ojos de mármol (marrón y azul mezclados en un solo ojo). Las orejas y la cola nunca se cortan. El cuerpo es robusto y muy musculoso. Las caderas bien musculadas son más estrechas que el pecho. La espalda recta tiene la misma longitud que la altura del perro en los hombros. Las uñas delanteras nunca se retiran y las patas son parecidas a las de un gato.',
  //     bred_for: 'Guardia',
  //     breed_group: 'Mixto',
  //     life_span: '12 - 13 años',
  //     history: '',
  //     temperament: 'Cariñoso, Protector, Adiestrable, Devoto, Responsable',
  //     reference_image_id: '33mJ-V3RX',
  //     image: {
  //       id: '33mJ-V3RX',
  //       width: 1828,
  //       height: 2065,
  //       url: 'https://cdn2.thedogapi.com/images/33mJ-V3RX.jpg',
  //     },
  //     searchTerms: ['Bulldog Alapaha Blue Blood', 'bulldog', 'guardia'],
  //   },
  //   {
  //     weight: {
  //       imperial: '38 - 50',
  //       metric: '17 - 23',
  //     },
  //     height: {
  //       imperial: '23 - 26',
  //       metric: '58 - 66',
  //     },
  //     id: 8,
  //     name: 'Husky de Alaska',
  //     bred_for: 'Tirar de trineos',
  //     breed_group: 'Mixto',
  //     life_span: '10 - 13 años',
  //     temperament: 'Amistoso, Enérgico, Leal, Gentil, Confiado',
  //     reference_image_id: '-HgpNnGXl',
  //     image: {
  //       id: '-HgpNnGXl',
  //       width: 500,
  //       height: 500,
  //       url: 'https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg',
  //     },
  //     searchTerms: ['Husky de Alaska', 'perro de trineo'],
  //     description:
  //       'El Husky de Alaska es una raza mixta utilizada para tirar de trineos. Se caracteriza por ser amistoso, enérgico, leal, gentil y confiado.',
  //   },
  //   {
  //     weight: {
  //       imperial: '65 - 100',
  //       metric: '29 - 45',
  //     },
  //     height: {
  //       imperial: '23 - 25',
  //       metric: '58 - 64',
  //     },
  //     id: 9,
  //     name: 'Malamute de Alaska',
  //     bred_for: 'Transporte de carga pesada, Tirar de trineos',
  //     breed_group: 'Trabajo',
  //     life_span: '12 - 15 años',
  //     temperament: 'Amistoso, Cariñoso, Devoto, Leal, Digno, Juguetón',
  //     reference_image_id: 'dW5UucTIW',
  //     image: {
  //       id: 'dW5UucTIW',
  //       width: 1023,
  //       height: 769,
  //       url: 'https://cdn2.thedogapi.com/images/dW5UucTIW.jpg',
  //     },
  //     searchTerms: [
  //       'Malamute de Alaska',
  //       'perro de trineo',
  //       'transporte de carga',
  //     ],
  //     description:
  //       'El Malamute de Alaska es una raza utilizada para el transporte de carga pesada y para tirar de trineos. Es amistoso, cariñoso, devoto, leal, digno y juguetón.',
  //   },
  //   {
  //     weight: {
  //       imperial: '60 - 120',
  //       metric: '27 - 54',
  //     },
  //     height: {
  //       imperial: '22 - 27',
  //       metric: '56 - 69',
  //     },
  //     id: 10,
  //     name: 'Bulldog americano',
  //     breed_group: 'Trabajo',
  //     life_span: '10 - 12 años',
  //     temperament:
  //       'Amistoso, Asertivo, Enérgico, Leal, Gentil, Confiado, Dominante',
  //     reference_image_id: 'pk1AAdloG',
  //     image: {
  //       id: 'pk1AAdloG',
  //       width: 1669,
  //       height: 1377,
  //       url: 'https://cdn2.thedogapi.com/images/pk1AAdloG.jpg',
  //     },
  //     searchTerms: ['Bulldog americano'],
  //     description:
  //       'El Bulldog americano es una raza de trabajo conocida por su amistad, asertividad, energía, lealtad, gentileza, confianza y dominancia.',
  //   },
  //   {
  //     weight: {
  //       imperial: '30 - 150',
  //       metric: '14 - 68',
  //     },
  //     height: {
  //       imperial: '14 - 17',
  //       metric: '36 - 43',
  //     },
  //     id: 11,
  //     name: 'American Bully',
  //     country_code: 'US',
  //     bred_for: 'Perro de compañía familiar',
  //     breed_group: '',
  //     life_span: '8 – 15 años',
  //     temperament:
  //       'Fuerte de voluntad, Testarudo, Amistoso, Payaso, Cariñoso, Leal, Obediente, Inteligente, Valiente',
  //     reference_image_id: 'sqQJDtbpY',
  //     image: {
  //       id: 'sqQJDtbpY',
  //       width: 1024,
  //       height: 683,
  //       url: 'https://cdn2.thedogapi.com/images/sqQJDtbpY.jpg',
  //     },
  //     searchTerms: ['American Bully', 'perro de compañía'],
  //     description:
  //       'El American Bully es una raza originaria de Estados Unidos y se destaca por su fuerte voluntad, testarudez, amistad, payasadas, cariño, lealtad, obediencia, inteligencia y valentía.',
  //   },
  //   {
  //     weight: {
  //       imperial: '20 - 40',
  //       metric: '9 - 18',
  //     },
  //     height: {
  //       imperial: '15 - 19',
  //       metric: '38 - 48',
  //     },
  //     id: 12,
  //     name: 'Perro esquimal americano',
  //     country_code: 'US',
  //     bred_for: 'Artista de circo',
  //     breed_group: 'No deportivo',
  //     life_span: '12 - 15 años',
  //     temperament: 'Amistoso, Alerta, Reservado, Inteligente, Protector',
  //     reference_image_id: 'Bymjyec4m',
  //     image: {
  //       id: 'Bymjyec4m',
  //       width: 1000,
  //       height: 802,
  //       url: 'https://cdn2.thedogapi.com/images/Bymjyec4m.jpg',
  //     },
  //     searchTerms: ['Perro esquimal americano', 'artista de circo'],
  //     description:
  //       'El Perro esquimal americano es una raza no deportiva que se destacaba como artista de circo. Es amistoso, alerta, reservado, inteligente y protector.',
  //   },
  //   {
  //     weight: {
  //       imperial: '7 - 10',
  //       metric: '3 - 5',
  //     },
  //     height: {
  //       imperial: '9 - 12',
  //       metric: '23 - 30',
  //     },
  //     id: 13,
  //     name: 'Perro esquimal americano (miniatura)',
  //     country_code: 'US',
  //     bred_for: 'Compañía',
  //     life_span: '13 – 15 años',
  //     temperament: 'Amistoso, Alerta, Reservado, Inteligente, Protector',
  //     reference_image_id: '_gn8GLrE6',
  //     image: {
  //       id: '_gn8GLrE6',
  //       width: 730,
  //       height: 487,
  //       url: 'https://cdn2.thedogapi.com/images/_gn8GLrE6.jpg',
  //     },
  //     searchTerms: ['Perro esquimal americano (miniatura)', 'compañía'],
  //     description:
  //       'El Perro esquimal americano en su versión miniatura es una raza criada principalmente para ser una compañía agradable. Es amistoso, alerta, reservado, inteligente y protector.',
  //   },
  //   {
  //     weight: {
  //       imperial: '65 - 75',
  //       metric: '29 - 34',
  //     },
  //     height: {
  //       imperial: '21 - 28',
  //       metric: '53 - 71',
  //     },
  //     id: 14,
  //     name: 'Sabueso americano',
  //     country_code: 'US',
  //     bred_for: 'Caza de zorros, perro rastreador',
  //     breed_group: 'Sabueso',
  //     life_span: '8 - 15 años',
  //     temperament:
  //       'Amable, de temperamento dulce, leal, independiente, inteligente, cariñoso',
  //     reference_image_id: 'S14n1x9NQ',
  //     image: {
  //       id: 'S14n1x9NQ',
  //       width: 3000,
  //       height: 2400,
  //       url: 'https://cdn2.thedogapi.com/images/S14n1x9NQ.jpg',
  //     },
  //     searchTerms: ['Sabueso americano', 'perro de caza', 'perro rastreador'],
  //     description:
  //       'El Sabueso americano es una raza de sabueso criada para la caza de zorros y como perro rastreador. Es amable, de temperamento dulce, leal, independiente, inteligente y cariñoso.',
  //   },
  //   {
  //     weight: {
  //       imperial: '30 - 60',
  //       metric: '14 - 27',
  //     },
  //     height: {
  //       imperial: '17 - 21',
  //       metric: '43 - 53',
  //     },
  //     id: 15,
  //     name: 'American Pit Bull Terrier',
  //     country_code: 'US',
  //     bred_for: 'Combates',
  //     breed_group: 'Terrier',
  //     life_span: '10 - 15 años',
  //     temperament:
  //       'Fuerte de voluntad, Testarudo, Amistoso, Payaso, Cariñoso, Leal, Obediente, Inteligente, Valiente',
  //     reference_image_id: 'HkC31gcNm',
  //     image: {
  //       id: 'HkC31gcNm',
  //       width: 300,
  //       height: 244,
  //       url: 'https://cdn2.thedogapi.com/images/HkC31gcNm.png',
  //     },
  //     searchTerms: ['American Pit Bull Terrier', 'perro de combate'],
  //     description:
  //       'El American Pit Bull Terrier es una raza criada originalmente para peleas de perros. A pesar de su pasado, es fuerte de voluntad, testarudo, amistoso, payaso, cariñoso, leal, obediente, inteligente y valiente.',
  //   },
  //   {
  //     weight: {
  //       imperial: '50 - 60',
  //       metric: '23 - 27',
  //     },
  //     height: {
  //       imperial: '17 - 19',
  //       metric: '43 - 48',
  //     },
  //     id: 16,
  //     name: 'American Staffordshire Terrier',
  //     country_code: 'US',
  //     bred_for: '',
  //     breed_group: 'Terrier',
  //     life_span: '12 - 15 años',
  //     temperament: 'Tenaz, Amistoso, Devoto, Leal, Atento, Valiente',
  //     reference_image_id: 'rJIakgc4m',
  //     image: {
  //       id: 'rJIakgc4m',
  //       width: 357,
  //       height: 500,
  //       url: 'https://cdn2.thedogapi.com/images/rJIakgc4m.jpg',
  //     },
  //     searchTerms: ['American Staffordshire Terrier'],
  //     description:
  //       'El American Staffordshire Terrier es una raza de terrier que se caracteriza por su tenacidad, amistad, devoción, lealtad, atención y valentía.',
  //   },
  //   {
  //     weight: {
  //       imperial: '25 - 45',
  //       metric: '11 - 20',
  //     },
  //     height: {
  //       imperial: '15 - 18',
  //       metric: '38 - 46',
  //     },
  //     id: 17,
  //     name: 'Spaniel de agua americano',
  //     country_code: 'US',
  //     bred_for: 'Búsqueda y recuperación de aves',
  //     breed_group: 'Deportivo',
  //     life_span: '10 - 12 años',
  //     temperament:
  //       'Amistoso, Enérgico, Obediente, Inteligente, Protector, Adiestrable',
  //     reference_image_id: 'SkmRJl9VQ',
  //     image: {
  //       id: 'SkmRJl9VQ',
  //       width: 1600,
  //       height: 1264,
  //       url: 'https://cdn2.thedogapi.com/images/SkmRJl9VQ.jpg',
  //     },
  //     searchTerms: [
  //       'Spaniel de agua americano',
  //       'perro de búsqueda y recuperación',
  //     ],
  //     description:
  //       'El Spaniel de agua americano es una raza deportiva criada para la búsqueda y recuperación de aves. Es amistoso, enérgico, obediente, inteligente, protector y adiestrable.',
  //   },
  //   {
  //     weight: {
  //       imperial: '80 - 150',
  //       metric: '36 - 68',
  //     },
  //     height: {
  //       imperial: '27 - 29',
  //       metric: '69 - 74',
  //     },
  //     id: 18,
  //     name: 'Perro pastor de Anatolia',
  //     bred_for: 'Pastoreo de ganado',
  //     breed_group: 'Trabajo',
  //     life_span: '11 - 13 años',
  //     temperament:
  //       'Estable, Valiente, Independiente, Confiado, Inteligente, Orgulloso',
  //     reference_image_id: 'BJT0Jx5Nm',
  //     image: {
  //       id: 'BJT0Jx5Nm',
  //       width: 1216,
  //       height: 1131,
  //       url: 'https://cdn2.thedogapi.com/images/BJT0Jx5Nm.jpg',
  //     },
  //     searchTerms: ['Perro pastor de Anatolia', 'pastoreo de ganado'],
  //     description:
  //       'El Perro pastor de Anatolia es una raza de trabajo criada para el pastoreo de ganado. Es estable, valiente, independiente, confiado, inteligente y orgulloso.',
  //   },
  //   {
  //     weight: {
  //       imperial: '48 - 55',
  //       metric: '22 - 25',
  //     },
  //     height: {
  //       imperial: '20 - 22',
  //       metric: '51 - 56',
  //     },
  //     id: 19,
  //     name: 'Appenzeller Sennenhund',
  //     bred_for: 'Pastoreo de ganado, tirar de carros y proteger la granja',
  //     life_span: '12 – 14 años',
  //     temperament: 'Confiable, Intrépido, Enérgico, Vivo, Seguro de sí mismo',
  //     reference_image_id: 'HkNkxlqEX',
  //     image: {
  //       id: 'HkNkxlqEX',
  //       width: 400,
  //       height: 600,
  //       url: 'https://cdn2.thedogapi.com/images/HkNkxlqEX.jpg',
  //     },
  //     searchTerms: [
  //       'Appenzeller Sennenhund',
  //       'pastoreo de ganado',
  //       'tirar de carros',
  //       'proteger la granja',
  //     ],
  //     description:
  //       'El Appenzeller Sennenhund es una raza versátil criada para el pastoreo de ganado, el tirado de carros y la protección de la granja. Es confiable, intrépido, enérgico, vivo y seguro de sí mismo.',
  //   },
  //   {
  //     weight: {
  //       imperial: '44 - 62',
  //       metric: '20 - 28',
  //     },
  //     height: {
  //       imperial: '17 - 20',
  //       metric: '43 - 51',
  //     },
  //     id: 21,
  //     name: 'Perro pastor australiano',
  //     country_code: 'AU',
  //     bred_for: 'Pastoreo de ganado, pruebas de pastoreo',
  //     breed_group: 'Pastoreo',
  //     life_span: '12 - 14 años',
  //     temperament: 'Cauteloso, Enérgico, Leal, Obediente, Protector, Valiente',
  //     reference_image_id: 'IBkYVm4v1',
  //     image: {
  //       id: 'IBkYVm4v1',
  //       width: 736,
  //       height: 850,
  //       url: 'https://cdn2.thedogapi.com/images/IBkYVm4v1.jpg',
  //     },
  //     searchTerms: [
  //       'Perro pastor australiano',
  //       'pastoreo de ganado',
  //       'pruebas de pastoreo',
  //     ],
  //     description:
  //       'El perro pastor australiano es una raza originaria de Australia. Se crió originalmente para el pastoreo de ganado y pruebas de pastoreo. Son perros cautelosos, enérgicos, leales, obedientes, protectores y valientes.',
  //   },
  //   {
  //     weight: {
  //       imperial: '31 - 46',
  //       metric: '14 - 21',
  //     },
  //     height: {
  //       imperial: '17 - 20',
  //       metric: '43 - 51',
  //     },
  //     id: 22,
  //     name: 'Australian Kelpie',
  //     country_code: 'AU',
  //     bred_for: 'Perro de granja, pastoreo de ganado',
  //     breed_group: 'Pastoreo',
  //     life_span: '10 - 13 años',
  //     temperament: 'Amigable, Enérgico, Alerta, Leal, Inteligente, Ansioso',
  //     reference_image_id: 'Hyq1ge9VQ',
  //     image: {
  //       id: 'Hyq1ge9VQ',
  //       width: 800,
  //       height: 533,
  //       url: 'https://cdn2.thedogapi.com/images/Hyq1ge9VQ.jpg',
  //     },
  //     searchTerms: [
  //       'Australian Kelpie',
  //       'perro de granja',
  //       'pastoreo de ganado',
  //     ],
  //     description:
  //       'El Australian Kelpie es un perro originario de Australia. Se crió para ser un perro de granja y para el pastoreo de ganado. Son perros amigables, enérgicos, alertas, leales, inteligentes y ansiosos.',
  //   },
  //   {
  //     weight: {
  //       imperial: '35 - 65',
  //       metric: '16 - 29',
  //     },
  //     height: {
  //       imperial: '18 - 23',
  //       metric: '46 - 58',
  //     },
  //     id: 23,
  //     name: 'Pastor australiano',
  //     country_code: 'AU',
  //     bred_for: 'Pastoreo de ovejas',
  //     breed_group: 'Pastoreo',
  //     life_span: '12 - 16 años',
  //     temperament: 'De buen carácter, Cariñoso, Inteligente, Activo, Protector',
  //     reference_image_id: 'B1-llgq4m',
  //     image: {
  //       id: 'B1-llgq4m',
  //       width: 1200,
  //       height: 733,
  //       url: 'https://cdn2.thedogapi.com/images/B1-llgq4m.jpg',
  //     },
  //     searchTerms: ['Pastor australiano', 'pastoreo de ovejas'],
  //     description:
  //       'El pastor australiano es un perro de pastoreo originario de Australia. Se crió para el pastoreo de ovejas. Son perros de buen carácter, cariñosos, inteligentes, activos y protectores.',
  //   },
  //   {
  //     weight: {
  //       imperial: '14 - 16',
  //       metric: '6 - 7',
  //     },
  //     height: {
  //       imperial: '10 - 11',
  //       metric: '25 - 28',
  //     },
  //     id: 24,
  //     name: 'Terrier australiano',
  //     country_code: 'AU',
  //     bred_for: 'Pastoreo de ganado, caza de serpientes y roedores',
  //     breed_group: 'Terrier',
  //     life_span: '15 años',
  //     temperament:
  //       'Animado, Alerta, Leal, Compañero, de Temperamento Equilibrado, Valiente',
  //     reference_image_id: 'r1Ylge5Vm',
  //     image: {
  //       id: 'r1Ylge5Vm',
  //       width: 1081,
  //       height: 720,
  //       url: 'https://cdn2.thedogapi.com/images/r1Ylge5Vm.jpg',
  //     },
  //     searchTerms: [
  //       'Terrier australiano',
  //       'pastoreo de ganado',
  //       'caza de serpientes',
  //       'caza de roedores',
  //     ],
  //     description:
  //       'El terrier australiano es un perro originario de Australia. Se crió para el pastoreo de ganado, la caza de serpientes y la caza de roedores. Son perros animados, alertas, leales, compañeros, de temperamento equilibrado y valientes.',
  //   },
  //   {
  //     weight: {
  //       imperial: '33 - 55',
  //       metric: '15 - 25',
  //     },
  //     height: {
  //       imperial: '23 - 29',
  //       metric: '58 - 74',
  //     },
  //     id: 25,
  //     name: 'Azawakh',
  //     bred_for: 'Protección de ganado, caza',
  //     breed_group: 'Levantador',
  //     life_span: '10 - 13 años',
  //     temperament: 'Distante, Cariñoso, Atento, Resistente, Feroz, Refinado',
  //     reference_image_id: 'SkvZgx94m',
  //     image: {
  //       id: 'SkvZgx94m',
  //       width: 1024,
  //       height: 768,
  //       url: 'https://cdn2.thedogapi.com/images/SkvZgx94m.jpg',
  //     },
  //     searchTerms: ['Azawakh', 'protección de ganado', 'caza'],
  //     description:
  //       'El Azawakh es una raza de perro utilizada para la protección de ganado y la caza. Son perros distantes, cariñosos, atentos, resistentes, feroces y refinados.',
  //   },
  //   {
  //     weight: {
  //       imperial: '40 - 65',
  //       metric: '18 - 29',
  //     },
  //     height: {
  //       imperial: '20 - 26',
  //       metric: '51 - 66',
  //     },
  //     id: 26,
  //     name: 'Barbet',
  //     bred_for: 'Caza de aves acuáticas',
  //     life_span: '13 – 15 años',
  //     temperament: 'Obediente, Compañero, Inteligente, Alegre',
  //     reference_image_id: 'HyWGexcVQ',
  //     image: {
  //       id: 'HyWGexcVQ',
  //       width: 853,
  //       height: 1280,
  //       url: 'https://cdn2.thedogapi.com/images/HyWGexcVQ.jpg',
  //     },
  //     searchTerms: ['Barbet', 'caza de aves acuáticas'],
  //     description:
  //       'El Barbet es una raza de perro utilizada para la caza de aves acuáticas. Son perros obedientes, compañeros, inteligentes y alegres.',
  //   },
  //   {
  //     weight: {
  //       imperial: '22 - 24',
  //       metric: '10 - 11',
  //     },
  //     height: {
  //       imperial: '16 - 17',
  //       metric: '41 - 43',
  //     },
  //     id: 28,
  //     name: 'Basenji',
  //     bred_for: 'Caza',
  //     breed_group: 'Levantador',
  //     life_span: '10 - 12 años',
  //     temperament: 'Cariñoso, Enérgico, Alerta, Curioso, Juguetón, Inteligente',
  //     reference_image_id: 'H1dGlxqNQ',
  //     image: {
  //       id: 'H1dGlxqNQ',
  //       width: 740,
  //       height: 493,
  //       url: 'https://cdn2.thedogapi.com/images/H1dGlxqNQ.jpg',
  //     },
  //     searchTerms: ['Basenji', 'caza'],
  //     description:
  //       'El Basenji es un perro de caza. Son perros cariñosos, enérgicos, alertas, curiosos, juguetones e inteligentes.',
  //   },
  //   {
  //     weight: {
  //       imperial: '35 - 40',
  //       metric: '16 - 18',
  //     },
  //     height: {
  //       imperial: '13 - 15',
  //       metric: '33 - 38',
  //     },
  //     id: 29,
  //     name: 'Basset Bleu de Gascogne',
  //     bred_for: 'Caza a pie.',
  //     breed_group: 'Levantador',
  //     life_span: '10 - 14 años',
  //     temperament: 'Cariñoso, Animado, Ágil, Curioso, Feliz, Activo',
  //     reference_image_id: 'BkMQll94X',
  //     image: {
  //       id: 'BkMQll94X',
  //       width: 1280,
  //       height: 853,
  //       url: 'https://cdn2.thedogapi.com/images/BkMQll94X.jpg',
  //     },
  //     searchTerms: ['Basset Bleu de Gascogne', 'caza a pie'],
  //     description:
  //       'El Basset Bleu de Gascogne es una raza de perro utilizada para la caza a pie. Son perros cariñosos, animados, ágiles, curiosos, felices y activos.',
  //   },
  //   {
  //     weight: {
  //       imperial: '50 - 65',
  //       metric: '23 - 29',
  //     },
  //     height: {
  //       imperial: '14',
  //       metric: '36',
  //     },
  //     id: 30,
  //     name: 'Basset Hound',
  //     bred_for: 'Caza por olfato',
  //     breed_group: 'Levantador',
  //     life_span: '12 - 15 años',
  //     temperament:
  //       'Tenaz, Amigable, Cariñoso, Devoto, de Temperamento Dulce, Gentil',
  //     reference_image_id: 'Sy57xx9EX',
  //     image: {
  //       id: 'Sy57xx9EX',
  //       width: 1024,
  //       height: 640,
  //       url: 'https://cdn2.thedogapi.com/images/Sy57xx9EX.jpg',
  //     },
  //     searchTerms: ['Basset Hound', 'caza por olfato'],
  //     description:
  //       'El Basset Hound es una raza de perro utilizada para la caza por olfato. Son perros tenaces, amigables, cariñosos, devotos, de temperamento dulce y gentil.',
  //   },
  //   {
  //     weight: {
  //       imperial: '20 - 35',
  //       metric: '9 - 16',
  //     },
  //     height: {
  //       imperial: '13 - 15',
  //       metric: '33 - 38',
  //     },
  //     id: 31,
  //     name: 'Beagle',
  //     bred_for: 'Caza de conejos y liebres',
  //     breed_group: 'Levantador',
  //     life_span: '13 - 16 años',
  //     temperament:
  //       'Amigable, de Temperamento Equilibrado, Excitable, Determinado, Gentil, Inteligente',
  //     reference_image_id: 'Syd4xxqEm',
  //     image: {
  //       id: 'Syd4xxqEm',
  //       width: 1000,
  //       height: 667,
  //       url: 'https://cdn2.thedogapi.com/images/Syd4xxqEm.jpg',
  //     },
  //     searchTerms: ['Beagle', 'caza de conejos', 'caza de liebres'],
  //     description:
  //       'El Beagle es una raza de perro utilizada para la caza de conejos y liebres. Son perros amigables, de temperamento equilibrado, excitables, determinados, gentiles e inteligentes.',
  //   },
  //   {
  //     weight: {
  //       imperial: '45 - 55',
  //       metric: '20 - 25',
  //     },
  //     height: {
  //       imperial: '20 - 22',
  //       metric: '51 - 56',
  //     },
  //     id: 32,
  //     name: 'Collie barbudo',
  //     bred_for: 'Pastoreo de ovejas',
  //     breed_group: 'Pastoreo',
  //     life_span: '12 - 14 años',
  //     temperament:
  //       'Seguro de sí mismo, Robusto, Vivo, Alerta, Inteligente, Activo',
  //     reference_image_id: 'A09F4c1qP',
  //     image: {
  //       id: 'A09F4c1qP',
  //       width: 733,
  //       height: 733,
  //       url: 'https://cdn2.thedogapi.com/images/A09F4c1qP.jpg',
  //     },
  //     searchTerms: ['Collie barbudo', 'pastoreo de ovejas'],
  //     description:
  //       'El Collie barbudo es una raza de perro utilizada para el pastoreo de ovejas. Son perros seguros de sí mismos, robustos, vivos, alertas, inteligentes y activos.',
  //   },
  // ];
}
