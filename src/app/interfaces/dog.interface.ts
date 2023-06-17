export interface Dog {
  id:                                    number;
  weight:                                Measurement;
  height:                                Measurement;
  image:                                 Image;
  casos_famosos?:                         PerrosFamosos[];
  name:                                  string;
  life_span:                             string;
  origin:                                string;
  reference_image_id:                    string;
  history:                               string;
  country_code:                          string;
  description:                           string;
  breed_group:                           string[];
  temperament:                           string[];
  searchTerms:                           string[];
  bred_for:                              string[];
  necesidades_especiales:                string[];
  perks:                                 string[];
  color:                                 string[];
  enfermedades_comunes:                  string[];
  fuentes?:                               string[];
  para_primerizos?:                       'Baja' | 'Moderada' | 'Alta' | '-';
  bueno_con_ninos?:                       'Baja' | 'Moderada' | 'Alta' | '-';
  compatibilidad_con_otros_animales:     'Baja' | 'Moderada' | 'Alta' | '-';
  facilidad_de_entrenamiento:            'Bajo' | 'Moderado' | 'Alto' | '-';
  nivel_de_energia:                      'Bajo' | 'Moderado' | 'Alto' | '-';
  popularidad:                           'Baja' | 'Moderada' | 'Alta' | '-';
  tendencia_a_ladrar?:                    'Baja' | 'Moderada' | 'Alta' | '-';
  necesidad_de_aseo?:                     'Baja' | 'Moderada' | 'Alta' | '-';
  soporta_clima_frio?:                    'Baja' | 'Moderada' | 'Alta' | '-';
  soporta_clima_calido?:                  'Baja' | 'Moderada' | 'Alta' | '-';
  tolerancia_a_la_soledad?:               'Baja' | 'Moderada' | 'Alta' | '-';
  salud_general:                         'Excelente' | 'Buena' | 'Regular' | 'Mala' | '-';
  categoria_de_tamanio:                  'Muy pequeño' | 'Pequeño' | 'Mediano' | 'Grande' | 'Muy grande' | '-';
}

export interface Measurement {
  imperial: string;
  metric:   string;
}

export interface Image {
  id:     string;
  width:  number;
  height: number;
  url:    string;
}

export interface PerrosFamosos {
  nombre: string;
  caso: string;
}

  // Para los objetos que me pasarás, de acuerdo a la interfaz Dog que hemos discutido, deberás hacer lo siguiente:

  // Si alguna propiedad del objeto que me das está en inglés, deberé traducirla al castellano.

  // Si alguna propiedad del objeto ya está en castellano, no debo hacer nada con ella.

  // Si alguna propiedad de la interfaz Dog no está presente en el objeto que me das, deberé agregarla con algún valor que tenga sentido de acuerdo al contexto.

  // Si la raza tiene muchos colores, elegir los 3 más comunes

  // Los nombres de las razas también deben traducirse al español

  // El campo history debe tener información bastante completa de la historia de la raza.  Si la información está y es muy corta reemplazarla por un texto más completo.

  // El campo description debe tener información bastante completa de la descripción de la raza. Si la información está y es muy corta reemplazarla por un texto más completo.

  // El campo description y el campo history deben diferenciarse entre sí

  // En el campo perks se debe colocar información útil para los posibles dueños como por ejemplo si es un perro que ladra mucho, si es un perro que necesita mucho ejercicio, si es un perro que necesita mucho cuidado del pelaje, etc. Deberás completar este campo con información que consideres relevante para los posibles dueños.

  // Es muy importante que ninguna categoría quede vacía. Todas deben tener información. La idea no es que los completes con valores por defecto sino que los completes con la información que vos tenés acerca de esa raza de perro, que es mucha ya que tenes todos los textos de internet.

  // Las propiedades de los objetos escribilas sin comillas, salvo que sea necesario.

  // Estos serán los criterios que seguiré para completar los objetos que me pases.

  // El objeto debe ser devuelto en formato typescript, es decir, con la sintaxis de typescript.

  // El objeto con el que hay q trabajar es el siguiente:


/**

PROMPT PARA SOLO DESCRIPCIÓN

Si no te menciono la raza de perro no respondas nada, solo mencioname q no te la mencione y listo.
Para esta consulta SI quiero que navegues por internet.
Para esta consulta NO me interesa que me retornes fuentes.

Necesito una descripción detallada de esta raza. Asegúrate de que la información que proveas sea precisa y verídica. Es MUY IMPORTANTE que los textos que me proporciones sean muy extensos, brindando toda la información posible ya que esta información va a ser la información de la raza en mi blog.

No cites solamente una fuente, cita varias fuentes de internet si es posible, te paso un par de opciones: "https://en.wikipedia.org/", "https://www.akc.org/dog-breeds/", "https://www.ukcdogs.com". Podes de consultar otras fuentes de relevancia que vos conozcas. También agrega información que vos tengas. ES MUY IMPORTANTE QUE LE PONGAS TU IMPORTNTA AL TEXTO Y NO COPIES Y PEGUES LO QUE SACASTE DE LAS FUENTES!!!

VUELVO A INSISTIR QUE LA DESCRIPCIÓN DE LA RAZA DEBE SER MUY MUY LARGA. ES INDISPENSABLE!!!

Escribí el texto de manera tal que el usuario quede cautivado por el mismo y le den muchas ganas de continuar leyendo.
Retorname la descripción en formato de texto unicamente

Estoy trabajando en la raza de perro "".

----------------------------------------------------------------------------------------------------------------------------------------------------------------

PROMPT PARA SOLO HISTORIA

Si no te menciono la raza de perro no respondas nada, solo mencioname q no te la mencione y listo.
Para esta consulta SI quiero que navegues por internet.
Para esta consulta NO me interesa que me retornes fuentes.

Necesito la historia de esta raza. Asegúrate de que la información que proveas sea precisa y verídica. Es MUY IMPORTANTE que los textos que me proporciones sean muy extensos, brindando toda la información posible ya que esta información va a ser la información de la raza en mi blog.

No cites solamente una fuente, cita varias fuentes de internet si es posible, te paso un par de opciones: "https://en.wikipedia.org/", "https://www.akc.org/dog-breeds/", "https://www.ukcdogs.com". Podes de consultar otras fuentes de relevancia que vos conozcas. También agrega información que vos tengas de la historia. ES MUY IMPORTANTE QUE LE PONGAS TU IMPORTNTA AL TEXTO Y NO COPIES Y PEGUES LO QUE SACASTE DE LAS FUENTES!!!

VUELVO A INSISTIR QUE LA HISTORIA DE LA RAZA DEBE SER MUY MUY LARGA. ES INDISPENSABLE!!!

Escribí el texto de manera tal que el usuario quede cautivado por el mismo y le den muchas ganas de continuar leyendo.
Retorname la historia en formato de texto unicamente

Estoy trabajando en la raza de perro "".

----------------------------------------------------------------------------------------------------------------------------------------------------------------

PROMPT PARA TÉRMINOS DE BÚSQUEDA

Necesito que, para acelerar mi trabajo, toda la información me la retornes en el formto de typescript que te solicito más abajo.

Si no te menciono la raza de perro no respondas nada, solo mencioname q no te la mencione y listo.

A TENER EN CUENTA: Para esta tarea NO quiero que consultes internet, usa la información que ya tenes disponible en tu entrenamiento
IMPORTANTE EN CUANTO A LOS TÉRMINOS DE BÚSQUEDA, NO COLOQUES MÁS DE 30 DE ELLOS EN EL ARRAY Y LOS TÉRMINOS DE BÚSQUEDA DEBEN ESTAR ÚNICAMENTE EN CASTELLANO!!!

Dame términos de búsqueda para la raza del perro. Para los términos de búsqueda tené en cuenta todas las diferentes formas que se te ocurran que una persona
puede buscar esa raza, un caso sería que si el nombre de la raza es con tilde, pongas dentro de los términos de búsqueda el nombre de la raza con tilde y
sin tilde para preveer los errores ortográficos, también agrega todas las formas coloquiales y los posibles errores ortográficos con los que se puede buscar
a esa raza en un buscador. Fijate de agregar palabras con las que se puede reconocer a la raza como por ejemplo su grupo de trabajo o para que fue creada
la raza tambien si es terrier podes agregarlo, etc. No te preocupes por mayúsculas y minúsculas por que cuando el usuario hace una búsqueda yo ya
me encargo de pasar todo a minúscula, enfocate en las formas coloquiales de llamar a la raza y los posibles errores ortográficos.
Podés colocar palabras que estén relacionadas a si la raza es buena con niños como por ejemplo "niños" o "familia" o si el perro es para protección podes poner
"protección" o "guardia" o "guardián", etc. Hace esto en el caso únicamente que la relación es positiva con la palabra. Si la relación es negativa no la coloques.

Para que puedas darte una mejor idea, esta es la función que uso para filtrar las razas de perro en mi blog:
  filterBySearchTerm(perrosActiclesList: Dog[], searchTerm: string) {
    const searchTermWithoutPunctuation = searchTerm.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();

    return perrosActiclesList.filter((dog) =>
      dog.name.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(searchTermWithoutPunctuation) ||
      dog.searchTerms.some((term) => term.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(searchTermWithoutPunctuation)) ||
      dog.origin.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(searchTermWithoutPunctuation) ||
      dog.perks.some((term) => term.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(searchTermWithoutPunctuation)) ||
      dog.bred_for.some((term) => term.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(searchTermWithoutPunctuation)) ||
      dog.breed_group.some((term) => term.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(searchTermWithoutPunctuation)) ||
      dog.temperament.some((term) => term.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(searchTermWithoutPunctuation))
    );
  }

Ejemplo de términos de búsqueda para el perro "Bóxer": searchTerms: ['Boxer', 'Bóxer', 'Bocser', 'Trabajador', 'Guardián']

¡¡IMPORTANTE TAMBIÉN!!  --> Retorname todo en formato de objeto de typescript con las siguientes propiedades:
{
  searchTerms: string[]
}

Estoy trabajando en la raza de perro "".

----------------------------------------------------------------------------------------------------------------------------------------------------------------

PROMPT PARA CARACTERÍSTICAS

Necesito que, para acelerar mi trabajo, toda la información me la retornes en el formto de typescript que te solicito más abajo.

Si no te menciono la raza de perro no respondas nada, solo mencioname q no te la mencione y listo.

IMPORTANTE PARA ESTE PROMPT --> Devolveme ÚNICAMENTE un objeto de typescript con la información como respuesta

Para esta consulta SI quiero que navegues por internet.
Para esta consulta SI me interesa que me retornes fuentes.

No cites solamente una fuente, cita varias fuentes de internet si es posible, te paso un par de opciones:
"https://en.wikipedia.org/", "https://www.dogbreedinfo.com", "https://www.ukcdogs.com".
Podes de consultar otras fuentes de relevancia que vos conozcas.
También agrega información que vos tengas de la raza.
ES MUY IMPORTANTE QUE LE PONGAS TU IMPORTNTA AL TEXTO Y NO COPIES Y PEGUES LO QUE SACASTE DE LAS FUENTES!!!

Necesito completar los siguientes campos:

Tendencia a ladrar: ¿Es baja, moderada o alta?
Necesidad de aseo: ¿Es baja, moderada o alta?
Soporta clima frío: ¿Es baja, moderada o alta?
Soporta calor: ¿Es baja, moderada o alta?
Tolerancia a la soledad: ¿Es baja, moderada o alta?
Recomendado para primerizos: ¿Es baja, moderada o alta?
recomendado para niños:  ¿Es baja, moderada o alta?

También quiero que me agregues, si es que conoces, perros famosos de la raza.
El formato en que me vas a devolver la información de perros famosos de la raza es un array de objetos de typescript ordenado de la siguiente manera:

casos_famosos: [
  {
    nombre: string,
    caso: string
  }
]

Por último quiero que agregues en un array de strings las urls de las fuentes que fuiste a visitar para conseguir la información (si es que se da el caso)

¡¡IMPORTANTE TAMBIÉN!!  --> retorname ÚNICAMENTE todo en formato de objeto de typescript con las siguientes propiedades:
{
  tendencia_a_ladrar: 'Baja' | 'Moderada' | 'Alta' | '-'
  necesidad_de_aseo:  'Baja' | 'Moderada' | 'Alta' | '-'
  soporta_clima_frio:  'Baja' | 'Moderada' | 'Alta' | '-'
  soporta_clima_calido:  'Baja' | 'Moderada' | 'Alta' | '-'
  para_primerizos:  'Baja' | 'Moderada' | 'Alta' | '-'
  bueno_con_ninos:  'Baja' | 'Moderada' | 'Alta' | '-'
  tolerancia_a_la_soledad:  'Baja' | 'Moderada' | 'Alta' | '-'
  casos_famosos: [{nombre: string, caso:string}] o un array vacío si no se encontraron casos
  fuentes: string[]
}

Estoy trabajando en la raza de perro "".

----------------------------------------------------------------------------------------------------------------------------------------------------------------
PROMPT PARA CONTINUAR

Continua desde acá sin navegar por internet y sin repetir lo que pusiste en la respuesta anterior a este prompt:

*/
