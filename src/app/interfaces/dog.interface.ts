export interface Dog {
  weight:                                Measurement;
  height:                                Measurement;
  id:                                    number;
  name:                                  string;
  bred_for:                              string[];
  breed_group:                           string[];
  life_span:                             string;
  temperament:                           string[];
  origin:                                string;
  reference_image_id:                    string;
  image:                                 Image;
  searchTerms:                           string[];
  country_code:                          string;
  description:                           string;
  history:                               string;
  necesidades_especiales:                string[];
  perks:                                 string[];
  color:                                 string[];
  enfermedades_comunes:                  string[];
  compatibilidad_con_otros_animales:     'Baja' | 'Moderada' | 'Alta';
  categoria_de_tamanio:                  'Muy pequeño' | 'Pequeño' | 'Mediano' | 'Grande' | 'Muy grande';
  facilidad_de_entrenamiento:            'Bajo' | 'Moderado' | 'Alto';
  salud_general:                         'Excelente' | 'Buena' | 'Regular' | 'Mala';
  nivel_de_energia:                      'Bajo' | 'Moderado' | 'Alto';
  popularidad:                           'Baja' | 'Moderada' | 'Alta';
}

export class Measurement {
  imperial?: string;
  metric?:   string;
}

export class Image {
  id?:     string;
  width?:  number;
  height?: number;
  url?:    string;
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
