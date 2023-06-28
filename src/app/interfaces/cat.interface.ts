export class Cat {
  weight?:             Weight;
  id?:                 string;
  name?:               string;
  cfa_url?:            string;
  vetstreet_url?:      string;
  vcahospitals_url?:   string;
  temperament?:        string;
  origin?:             string;
  country_codes?:      string;
  country_code?:       string;
  life_span?:          string;
  indoor?:             number;
  lap?:                number;
  alt_names?:          string;
  adaptability?:       number;
  affection_level?:    number;
  child_friendly?:     number;
  dog_friendly?:       number;
  energy_level?:       number;
  grooming?:           number;
  health_issues?:      number;
  intelligence?:       number;
  shedding_level?:     number;
  social_needs?:       number;
  stranger_friendly?:  number;
  vocalisation?:       number;
  experimental?:       number;
  hairless?:           number;
  natural?:            number;
  rare?:               number;
  rex?:                number;
  suppressed_tail?:    number;
  short_legs?:         number;
  wikipedia_url?:      string;
  hypoallergenic?:     number;
  reference_image_id?: string;
  image?:              string;

  perks?:              string[];
  necesidades_especiales?:                string[];
  color?:                                 string[];
  enfermedades_comunes?:                  string[];
  fuentes?:                               string[];
  para_primerizos?:                       'Baja' | 'Moderada' | 'Alta' | '-';
  nivel_de_energia?:                      'Bajo' | 'Moderado' | 'Alto' | '-';
  popularidad?:                           'Baja' | 'Moderada' | 'Alta' | '-';
  necesidad_de_aseo?:                     'Baja' | 'Moderada' | 'Alta' | '-';
  soporta_clima_frio?:                    'Baja' | 'Moderada' | 'Alta' | '-';
  soporta_clima_calido?:                  'Baja' | 'Moderada' | 'Alta' | '-';
  tolerancia_a_la_soledad?:               'Baja' | 'Moderada' | 'Alta' | '-';
  salud_general?:                         'Excelente' | 'Buena' | 'Regular' | 'Mala' | '-';
  categoria_de_tamanio?:                  'Muy pequeño' | 'Pequeño' | 'Mediano' | 'Grande' | 'Muy grande' | '-';
  searchTerms?:                           string[];

  description?:                           string;
  history?:                              string;

  constructor(data: any) {
    Object.assign(this, data);
  }

  static create(data: any): Cat {
    return new Cat(data);
  }
}

export class Weight {
  imperial?: string;
  metric?:   string;
}

/*

PROMPT PARA OBJ GENERAL

Tengo que completar esta interfaz para un gato:

export interface Cat {
  weight:             Weight;
  id:                 string;
  name:               string;
  cfa_url:            string;
  vetstreet_url:      string;
  vcahospitals_url:   string;
  temperament:        string;
  origin:             string;
  country_codes:      string;
  country_code:       string;
  description:        string;
  life_span:          string;
  indoor:             number;
  lap:                number;
  alt_names:          string;
  adaptability:       number;
  affection_level:    number;
  child_friendly:     number;
  dog_friendly:       number;
  energy_level:       number;
  grooming:           number;
  health_issues:      number;
  intelligence:       number;
  shedding_level:     number;
  social_needs:       number;
  stranger_friendly:  number;
  vocalisation:       number;
  experimental:       number;
  hairless:           number;
  natural:            number;
  rare:               number;
  rex:                number;
  suppressed_tail:    number;
  short_legs:         number;
  wikipedia_url:      string;
  hypoallergenic:     number;
  reference_image_id: string;
  image:              string;
  perks:              string[];

  necesidades_especiales:                string[];
  color:                                 string[];
  enfermedades_comunes:                  string[];
  fuentes:                               string[];
  para_primerizos:                       'Baja' | 'Moderada' | 'Alta' | '-';
  nivel_de_energia:                      'Bajo' | 'Moderado' | 'Alto' | '-';
  popularidad:                           'Baja' | 'Moderada' | 'Alta' | '-';
  necesidad_de_aseo:                     'Baja' | 'Moderada' | 'Alta' | '-';
  soporta_clima_frio:                    'Baja' | 'Moderada' | 'Alta' | '-';
  soporta_clima_calido:                  'Baja' | 'Moderada' | 'Alta' | '-';
  tolerancia_a_la_soledad:               'Baja' | 'Moderada' | 'Alta' | '-';
  salud_general:                         'Excelente' | 'Buena' | 'Regular' | 'Mala' | '-';
  categoria_de_tamanio:                  'Muy pequeño' | 'Pequeño' | 'Mediano' | 'Grande' | 'Muy grande' | '-';
  searchTerms:                           string[];

}

export interface Weight {
  imperial: string;
  metric:   string;
}

Te voy a pasar un objeto de un gato que ya tiene varias propiedades completadas pero hay que hacer varios cambios.

Para los objetos que me pasarás, de acuerdo a la interfaz Cat que te estoy pasando, deberás hacer lo siguiente:

Todas las propiedades son obligatorias

A la propiedad description eliminala.

Si alguna propiedad del objeto está en inglés, deberás traducirla al castellano.

Si alguna propiedad del objeto ya está en castellano, no debes hacer nada con ella.

Si alguna propiedad de la interfaz Cat no está presente en el objeto que me das, deberé agregarla con algún valor que tenga sentido de acuerdo al contexto.

Si la raza tiene muchos colores, elegir los 3 más comunes

Si los campos que deben llenarse con urls están vacíos, dejalos vacíos.

Si no tenes información sobre un campo en particular dejalo vacío, por ejemplo si es un string pone "" y si es un array pone []

Los nombres de las razas también deben traducirse al español

En el campo perks se debe colocar información útil para los posibles dueños como por ejemplo si es un gato maulla mucho, si es un gato que necesita mucho ejercicio, si es un gato que necesita mucho cuidado del pelaje, etc. Deberás completar este campo con información que consideres relevante para los posibles dueños.

Es muy importante que ninguna categoría quede vacía. Todas deben tener información. La idea no es que los completes con valores por defecto sino que los completes con la información que vos tenés acerca de esa raza de perro, que es mucha ya que tenes todos los textos de internet.

Las propiedades que deben ser completadas con arrays tampoco pueden ser devueltas con arrays vacíos. Deben tener información.

Las propiedades de los objetos escribilas sin comillas, salvo que sea necesario.

Estos serán los criterios que seguirás para completar los objetos que te pases.

El objeto debe ser devuelto en formato typescript, es decir, con la sintaxis de typescript.

El objeto con el que hay q trabajar es el siguiente:

----------------------------------------------------------------------------------------------------------------------------------------------------------------

PROMPT PARA TÉRMINOS DE BÚSQUEDA

Necesito que, para acelerar mi trabajo, toda la información me la retornes en el formto de typescript que te solicito más abajo.

Si no te menciono la raza de gato no respondas nada, solo mencioname q no te la mencione y listo.

IMPORTANTE EN CUANTO A LOS TÉRMINOS DE BÚSQUEDA, NO COLOQUES MÁS DE 30 DE ELLOS EN EL ARRAY Y LOS TÉRMINOS DE BÚSQUEDA DEBEN ESTAR ÚNICAMENTE EN CASTELLANO!!!

Dame términos de búsqueda para la raza del gato. Para los términos de búsqueda tené en cuenta todas las diferentes formas que se te ocurran que una persona
puede buscar esa raza, un caso sería que si el nombre de la raza es con tilde, pongas dentro de los términos de búsqueda el nombre de la raza con tilde y
sin tilde para preveer los errores ortográficos, también agrega todas las formas coloquiales y los posibles errores ortográficos con los que se puede buscar
a esa raza en un buscador. Fijate de agregar palabras con las que se puede reconocer a la raza como por ejemplo para que fue creada
la raza, etc. No te preocupes por mayúsculas y minúsculas por que cuando el usuario hace una búsqueda yo ya
me encargo de pasar todo a minúscula, enfocate en las formas coloquiales de llamar a la raza y los posibles errores ortográficos.
Podés colocar palabras que estén relacionadas a si la raza es buena con niños como por ejemplo "niños" o "familia", etc.
Hace esto en el caso únicamente que la relación es positiva con la palabra. Si la relación es negativa no la coloques.

Para que puedas darte una mejor idea, esta es la función que uso para filtrar las razas de perro en mi blog:
  filterBySearchTerm(perrosActiclesList: Cat[], searchTerm: string) {
    const searchTermWithoutPunctuation = searchTerm.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();

    return perrosActiclesList.filter((dog) =>
      cat.name.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(searchTermWithoutPunctuation) ||
      cat.searchTerms.some((term) => term.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(searchTermWithoutPunctuation)) ||
      cat.origin.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(searchTermWithoutPunctuation) ||
      cat.perks.some((term) => term.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(searchTermWithoutPunctuation)) ||
      cat.temperament.some((term) => term.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(searchTermWithoutPunctuation))
    );
  }

Ejemplo de términos de búsqueda para el gaty "Abisinio":
    searchTerms: [
        "Abisinio",
        "Gato activo",
        "Gato independiente",
        "Gato inteligente",
        "Gato gentil"
    ]

¡¡IMPORTANTE TAMBIÉN!!  --> Retorname todo en formato de objeto de typescript con las siguientes propiedades:
{
  searchTerms: string[]
}

Estoy trabajando en la raza de gato "".

----------------------------------------------------------------------------------------------------------------------------------------------------------------

PROMPT PARA SOLO DESCRIPCIÓN

Si no te menciono la raza de gato no respondas nada, solo mencioname q no te la mencione y listo.

Necesito una descripción detallada de esta raza. No agregues información histórica de la raza, solo descriptiva.

Asegúrate de que la información que proveas sea precisa y verídica.
Es MUY IMPORTANTE que los textos que me proporciones sean muy extensos,
brindando toda la información posible ya que esta información va a ser la información de la raza en mi blog.

VUELVO A INSISTIR QUE LA DESCRIPCIÓN DE LA RAZA DEBE SER MUY MUY LARGA. ES INDISPENSABLE!!!

Escribí el texto de manera tal que el usuario quede cautivado por el mismo y le den muchas ganas de continuar leyendo.
Retorname la descripción en formato de texto unicamente

Estoy trabajando en la raza de gato "".

----------------------------------------------------------------------------------------------------------------------------------------------------------------

PROMPT PARA SOLO HISTORIA

Si no te menciono la raza de gato no respondas nada, solo mencioname q no te la mencione y listo.

Necesito la historia de esta raza. No agregues acá información descriptiva de la raza, solo sobre la historia.
Asegúrate de que la información que proveas sea precisa y verídica.
Es MUY IMPORTANTE que los textos que me proporciones sean muy extensos,
brindando toda la información posible ya que esta información va a ser la información de la raza en mi blog.

VUELVO A INSISTIR QUE LA HISTORIA DE LA RAZA DEBE SER MUY MUY LARGA. ES INDISPENSABLE!!!

Escribí el texto de manera tal que el usuario quede cautivado por el mismo y le den muchas ganas de continuar leyendo.
Retorname la historia en formato de texto unicamente

Estoy trabajando en la raza de gato "".

----------------------------------------------------------------------------------------------------------------------------------------------------------------

PROMPT PARA CONTINUAR

Continua desde acá sin navegar por internet y sin repetir lo que pusiste en la respuesta anterior a este prompt:

*/
