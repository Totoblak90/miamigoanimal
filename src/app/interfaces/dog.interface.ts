export class Dog {
  weight?:                                Measurement;
  height?:                                Measurement;
  id?:                                    number;
  name?:                                  string;
  bred_for?:                              string;
  breed_group?:                           string;
  life_span?:                             string;
  temperament?:                           string;
  origin?:                                string;
  reference_image_id?:                    string;
  image?:                                 Image;
  searchTerms?:                           string[];
  country_code?:                          string;
  description?:                           string;
  history?:                               string;
  categoria_de_tamanio?:                  'Muy pequeño' | 'Pequeño' | 'Mediano' | 'Grande' | 'Muy grande';
  perks?:                                 string[];
  color?:                                 string;
  nivel_de_energia?:                      'Bajo' | 'Moderado' | 'Alto';
  facilidad_de_entrenamiento?:            'Bajo' | 'Moderado' | 'Alto';
  salud_general?:                         'Excelente' | 'Buena' | 'Regular' | 'Mala';
  compatibilidad_con_otros_animales?:     'Baja' | 'Moderada' | 'Alta';
  necesidades_especiales?:                string[];
  popularidad?:                           'Baja' | 'Moderada' | 'Alta';
  enfermedades_comunes?:                  string[];

  constructor(data: any) {
    Object.assign(this, data);
  }

  static create(data: any): Dog {
    return new Dog(data);
  }
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
