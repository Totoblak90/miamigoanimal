import { Dog } from '../interfaces/dog.interface';

export const DOG_LIST: { [key: number]: Dog } = {
  1: {
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
    bred_for: ['Caza de roedores pequeños', 'Perro faldero'],
    breed_group: ['Grupo de juguetes'],
    life_span: '10 - 12 años',
    temperament: [
      'Terco',
      'Curioso',
      'Juguetón',
      'Aventurero',
      'Activo',
      'Amante de la diversión',
    ],
    origin: 'Alemania, Francia',
    reference_image_id: 'BJa4kxc4X',
    image: {
      id: 'BJa4kxc4X',
      width: 1600,
      height: 1199,
      url: 'https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg',
    },
    searchTerms: ['Affenpinscher', 'Perro pequeño', 'Caza de roedores'],
    country_code: 'DE',
    description: `
      El Affenpinscher es una raza de perro pequeña y equilibrada, con un pelaje áspero y denso. Su apariencia general es más importante que cualquier característica individual. Se le conoce como un perro de juguete, con una inteligencia y comportamiento que lo hacen un buen perro de casa. Su cuerpo proporciona una apariencia cuadrada, siendo la altura, medida en la cruz, aproximadamente la misma que la longitud del cuerpo, medida desde el punto del hombro hasta el punto de las nalgas.
      <br>
      <br>
      El Affenpinscher no es delicado de ninguna manera, siendo robusto y compacto, con huesos medianos. La raza es alerta, inquisitiva y muestra una gran lealtad y afecto hacia su dueño y amigos. Generalmente son tranquilos, pero pueden volverse vehementemente emocionados cuando se sienten amenazados o atacados, y son valientes frente a cualquier agresor.
      <br>
      <br>
      La cabeza del Affenpinscher se lleva con confianza y está en proporción con el cuerpo. Tiene la expresión característica de un mono. El cráneo es redondo, no largo, abovedado y tiene una frente prominente. La parada es claramente definida. El hocico es corto y recto, sin curva ascendente, y un puente recto. Los labios son negros y ajustados. La mandíbula inferior sobresale más allá de la mandíbula superior y está ligeramente girada hacia arriba.
      <br>
      <br>
      El Affenpinscher tiene una personalidad parecida a la de un terrier. Tienden a llevarse bien con otros perros y mascotas, especialmente cuando se crían con ellos. Son ocupados, audaces, inquisitivos y obstinados, pero también les encanta hacer travesuras, siendo juguetones y traviesos. Un perro pequeño, agudo e ingenioso que es valiente y confiado. Un defensor sin miedo, el Affenpinscher se convertirá rápidamente en un autoritario si los dueños no dan las reglas adecuadas, límites, limitaciones y constantemente sean el líder de la manada de este perro. Es muy cariñoso y divertido. Este amigable perro pequeño disfruta estando con su familia. Necesita un entrenamiento constante y firme. Asegúrate de que haya algo de variedad en el entrenamiento para que el perro no se aburra. Aprenden comandos muy rápidamente. Algunos pueden ser difíciles de entrenar para ir al baño. No se recomiendan para niños muy pequeños, simplemente porque la mayoría de las personas que poseen la raza los tratan como perros pequeños, careciendo del liderazgo de manada adecuado, lo que provoca comportamientos negativos en el perro. Los niños deben aprender a manejar correctamente a un perro. Los dueños necesitan ser constantemente el líder de la manada del perro para evitar la tendencia a proteger su comida y juguetes. Les gusta hacer senderismo y acampar. Sin liderazgo, puede desafiar imprudentemente a perros grandes y otros animales grandes.
      <br>
      <br>
      Tienden a ladrar e incluso a trepar. Este pequeño perro se lleva mejor con una familia a la que le gusta el entretenimiento.
    `,
    history: `
      La historia del Affenpinscher es un tanto misteriosa debido a su antigüedad, pero se sabe que es una de las razas de juguete más antiguas. Aunque no existen datos exactos sobre su origen, se cree que el Affenpinscher se originó en Alemania. El nombre Affenpinscher se traduce del alemán como "Terrier Mono", un nombre que se le dio debido a su expresión facial similar a la de un mono.
      <br>
      <br>
      El Affenpinscher es ciertamente pariente del Brussels Griffon y probablemente del terrier. Se cree que los primeros Affenpinschers eran más grandes en tamaño, ya que eran perros de granja que trabajaban como ratoneros. Durante los siglos XVIII y XIX, el Affenpinscher fue miniaturizado y se convirtió en un animal de compañía. A pesar de su tamaño reducido, sigue siendo un cazador implacable de ratones y un excelente perro guardián.
      <br>
      <br>
      Hoy en día, el Affenpinscher es principalmente un perro de compañía. Fue admitido en el libro de registro del American Kennel Club en 1936. A pesar de su pequeño tamaño, el Affenpinscher es un perro valiente y confiado, con una personalidad similar a la de un terrier. Son audaces, inquisitivos y obstinados, pero también les encanta hacer travesuras, siendo juguetones y traviesos. Son perros muy afectuosos y divertidos que disfrutan estando con su familia.
    `,
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'No necesita mucho espacio',
      'Requiere poco aseo',
      'Necesita ejercicio moderado',
    ],
    color: ['Negro', 'Gris', 'Plata'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: ['Necesita estimulación mental regular'],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Problemas dentales', 'Luxación de rótula'],
    tendencia_a_ladrar: 'Moderada',
    soporta_clima_calido: 'Moderada',
    soporta_clima_frio: 'Moderada',
    necesidad_de_aseo: 'Alta',
    tolerancia_a_la_soledad: 'Moderada',
    bueno_con_ninos: 'Baja',
    para_primerizos: 'Baja',
    casos_famosos: [],
    fuentes: [
      "https://en.wikipedia.org/wiki/Affenpinscher",
      "https://www.akc.org/dog-breeds/affenpinscher/",
      "https://www.royalcanin.com/us/dogs/breeds/breed-library/affenpinscher",
      "https://www.dogbreedinfo.com/affenpinscher.htm",
      "https://www.ukcdogs.com/affenpinscher"
    ]
  },
  2: {
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
    bred_for: ['Caza y persecución'],
    breed_group: ['Sabueso'],
    life_span: '10 - 13 años',
    temperament: ['Distante', 'Payaso', 'Digno', 'Independiente', 'Feliz'],
    origin: 'Afganistán, Irán, Pakistán',
    reference_image_id: 'hMyT4CDXR',
    image: {
      id: 'hMyT4CDXR',
      width: 606,
      height: 380,
      url: 'https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg',
    },
    searchTerms: ['Sabueso afgano', 'perro de caza', 'perro de persecución'],
    description: `
      El Sabueso Afgano, también conocido como Afghan Hound, es una raza de perro que se distingue por su apariencia elegante y su pelaje largo y sedoso. Esta raza es de tamaño mediano, pero su apariencia da la impresión de fuerza y actividad, combinando velocidad con potencia y agilidad. El Afghan Hound es una mezcla única de sustancia, elegancia y función. La cabeza y el cuello son largos, las orejas son largas y colgantes, y la cola es larga con un anillo o curva en el extremo. La cabeza se lleva con orgullo.
      <br>
      <br>
      El pelaje del Afghan Hound es largo y sedoso en las costillas, los cuartos delanteros y traseros, los flancos y la parte superior de la cabeza, mientras que la cara y la espalda están cubiertas de pelo corto. Los extremos superiores de los huesos pélvicos son prominentes. En la evaluación de esta raza, es importante recordar que el Afghan Hound cazaba su presa en un terreno accidentado lleno de peñascos y barrancos. Para este propósito, se requiere un perro compacto y bien acoplado, en lugar de un perro de carreras de lomo largo cuya primera calidad es la velocidad.
      <br>
      <br>
      Las características que distinguen al Afghan Hound de todos los demás perros son el copete largo y sedoso; la grupa inclinada y la cola baja; los huesos pélvicos prominentes; la cola escasamente cubierta con el anillo o la curva hacia arriba al final; el patrón de pelaje único; y la expresión "oriental" - inescrutable, penetrante y sabia. El Afghan Hound es un pensador independiente y de voluntad fuerte que es digno y distante con los extraños. Sin embargo, con la familia, esta raza puede ser exuberante y juguetona. El Afghan Hound no responde bien a los métodos de entrenamiento duros y prefiere hacer las cosas a su manera. Esta raza tiene un instinto de caza muy bien desarrollado. Se requiere un aseo regular para mantener el glamuroso pelaje del Afghan.
      <br>
      <br>
      El Afghan Hound es una raza que requiere un dueño que entienda y aprecie sus características únicas. Esta raza no es para todos, pero para aquellos que se sienten atraídos por su belleza y personalidad única, el Afghan Hound puede ser un compañero maravilloso y gratificante.
    `,
    country_code: 'AG',
    history: `
      La historia del Sabueso Afgano es fascinante y se remonta a miles de años. Esta raza, que se originó en las regiones montañosas de Afganistán, es una de las más antiguas razas de perros domesticados conocidas por el hombre. Los afganos eran perros de caza altamente valorados por las tribus nómadas de Afganistán, Pakistán e Irán.
      <br>
      <br>
      El Sabueso Afgano es una raza que ha sido criada durante siglos para cazar en las duras condiciones de las montañas y desiertos de Afganistán. Su historia se remonta a la época pre-cristiana, y se cree que es una de las razas más antiguas de perros domesticados. Los afganos eran utilizados por las tribus nómadas de Afganistán, Pakistán e Irán para cazar presas grandes y pequeñas. Su habilidad para correr rápido y durante largos períodos de tiempo los hacía perfectos para este propósito.
      <br>
      <br>
      El Sabueso Afgano fue llevado a Inglaterra a finales del siglo XIX y principios del XX por los militares británicos que regresaban de la frontera noroeste de la India, la región donde se encuentra Afganistán hoy en día. Los primeros afganos llegaron a Gran Bretaña con los soldados que regresaban a casa del servicio militar en el Imperio oriental a principios de 1900. Después de que el primer Sabueso Afgano causó sensación en el show de Crystal Palace en 1907, la raza prácticamente desapareció en Inglaterra, en gran parte debido a las dificultades impuestas por la Primera Guerra Mundial. La raza fue revivida en Gran Bretaña después de la Primera Guerra Mundial y se desarrolló a través de dos líneas influyentes, los perros Bell-Murray y los sabuesos Ghazi. Un número de Sabuesos Afganos criados en Gran Bretaña fueron exportados a los Estados Unidos en la década de 1920 y se convirtieron en la base de la raza aquí.
      <br>
      <br>
      El Sabueso Afgano fue reconocido por el United Kennel Club en 1948. Aunque la raza es ahora principalmente un perro de compañía y de show, todavía retiene su alta energía y su instinto de caza.
    `,
    categoria_de_tamanio: 'Grande',
    perks: [
      'Necesita espacio para correr',
      'Requiere aseo regular',
      'Necesita ejercicio regular',
      'Ideal para hogares con grandes espacios abiertos',
      'Posee una gran resistencia',
      'Gran compañero para actividades al aire libre',
    ],
    color: ['Blanco', 'Negro', 'Rojo'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Bajo',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: ['Necesita mucha estimulación mental y física'],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Problemas de la vista', 'Hipotiroidismo'],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Alta',
    soporta_clima_frio: 'Alta',
    soporta_clima_calido: 'Moderada',
    tolerancia_a_la_soledad: 'Baja',
    bueno_con_ninos: 'Baja',
    para_primerizos: 'Baja',
    casos_famosos: [],
    fuentes: [
      "https://en.wikipedia.org/wiki/Afghan_Hound",
      "https://www.akc.org/dog-breeds/afghan-hound/",
      "https://www.royalcanin.com/us/dogs/breeds/breed-library/afghan-hound",
      "https://www.ukcdogs.com/afghan-hound"
    ]
  },
  3: {
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
    bred_for: ['Un animal salvaje en manada'],
    breed_group: ['Desconocido'],
    life_span: '11 años',
    temperament: ['Salvaje', 'Trabajador', 'Dedicado'],
    origin: 'África',
    reference_image_id: 'rkiByec47',
    image: {
      id: 'rkiByec47',
      width: 500,
      height: 335,
      url: 'https://cdn2.thedogapi.com/images/rkiByec47.jpg',
    },
    searchTerms: ['Perro de caza africano', 'perro de caza en manada'],
    description: `
      La raza de perro conocida como "Perro de caza africano" es una raza muy especial y única. También conocido como "Perro salvaje africano" o "Licaón", este perro no es una raza doméstica, sino una especie de cánido salvaje que se encuentra en África, especialmente en sabanas y áreas ligeramente boscosas.
      <br>
      <br>
      El Perro de caza africano es un animal social y altamente inteligente que vive en manadas. Son conocidos por su eficiencia en la caza, con tasas de éxito de hasta el 80%, mucho más altas que las de los grandes felinos de África. Son animales de cuerpo delgado y musculoso, con patas largas y una cola espesa y peluda que a menudo tiene una punta blanca. Su pelaje es corto y multicolor, con mezclas de marrón, negro, blanco y amarillo, y cada perro tiene un patrón único.
      <br>
      <br>
      Estos perros son extremadamente activos y requieren mucho ejercicio. Son corredores rápidos y tienen una resistencia increíble, lo que les permite perseguir a su presa durante largos períodos de tiempo. Son animales muy sociales que viven en manadas de hasta 40 individuos. La estructura social de la manada es compleja, con una jerarquía de dominio que se mantiene en su mayoría por comportamientos de sumisión en lugar de agresión.
      <br>
      <br>
      El Perro de caza africano es un depredador altamente especializado que se alimenta principalmente de antílopes. La manada trabaja junta para acorralar y derribar a su presa, y a diferencia de muchos otros depredadores, comen en un orden específico, comenzando con los cachorros y seguido por los adultos subordinados.
      <br>
      <br>
      Es importante destacar que el Perro de caza africano es una especie en peligro de extinción. Su población ha disminuido debido a la pérdida de hábitat, la persecución por parte de los humanos, la competencia con otros depredadores como los leones y las hienas, y las enfermedades transmitidas por los perros domésticos.
      <br>
      <br>
      Aunque estos perros son fascinantes y hermosos, no son adecuados como mascotas. Son animales salvajes que necesitan mucho espacio para correr y cazar, y tienen necesidades sociales y comportamentales que no pueden ser satisfechas en un entorno doméstico. Además, pueden ser peligrosos para las personas y otros animales si se sienten amenazados o acorralados.
    `,
    country_code: 'AF',
    history:`
      La historia del Perro de Caza Africano, también conocido como Licaón, Perro Salvaje Africano, o Lobo Pintado, es fascinante y se remonta a miles de años atrás. Aunque no es una raza de perro en el sentido tradicional, su historia y evolución están profundamente entrelazadas con la de África.
      <br>
      <br>
      El Perro de Caza Africano es una especie única que ha existido en África durante más de un millón de años, según los registros fósiles. Aunque comparten un ancestro común con los lobos y los perros domésticos, se separaron de estas líneas hace millones de años y han seguido su propio camino evolutivo desde entonces. No son perros en el sentido de que no pertenecen a la especie Canis lupus, como los perros domésticos, sino que son la única especie en el género Lycaon.
      <br>
      <br>
      Estos perros son conocidos por su pelaje moteado, que es único para cada individuo, al igual que las huellas dactilares en los humanos. Son animales sociales que viven en manadas, y son famosos por su estilo de caza cooperativo y eficiente.
      <br>
      <br>
      La historia del Perro de Caza Africano está marcada por la supervivencia en un continente a menudo hostil. A lo largo de los siglos, han enfrentado numerosos desafíos, desde cambios en el clima y el hábitat hasta la caza y la persecución por parte de los humanos. A pesar de esto, han demostrado ser increíblemente resilientes y han logrado sobrevivir en algunas de las regiones más salvajes de África.
      <br>
      <br>
      En tiempos más recientes, la historia del Perro de Caza Africano ha sido menos positiva. La especie ha experimentado un declive significativo en las últimas décadas debido a la pérdida de hábitat, la caza furtiva, las enfermedades transmitidas por perros domésticos y otros factores. Hoy en día, se considera una especie en peligro de extinción, con estimaciones que sugieren que quedan menos de 7.000 individuos en estado salvaje.
      <br>
      <br>
      A pesar de estos desafíos, hay esfuerzos en curso para proteger y conservar al Perro de Caza Africano. Los programas de conservación están trabajando para proteger su hábitat, reducir las amenazas y aumentar su población a través de la cría en cautividad y la reintroducción en la naturaleza.
      <br>
      <br>
      La historia del Perro de Caza Africano es una historia de supervivencia y resistencia. Aunque enfrentan un futuro incierto, su historia nos recuerda la importancia de la conservación y la protección de las especies en peligro de extinción.
    `,
    categoria_de_tamanio: 'Grande',
    perks: [
      'Necesita espacio para correr',
      'Requiere poco aseo',
      'Necesita ejercicio regular',
      'Sociable con otros perros de su manada',
      'Posee gran resistencia y energía',
      'Destaca por su habilidad para trabajar en equipo',
    ],
    color: ['Blanco', 'Negro', 'Marrón'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Bajo',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Baja',
    necesidades_especiales: [
      'Necesita mucha estimulación mental y física',
      'No es adecuado para la vida en apartamento',
      'Necesita contacto social con otros perros de su especie',
    ],
    popularidad: 'Baja',
    enfermedades_comunes: ['Problemas de la vista', 'Enfermedades infecciosas'],
    tendencia_a_ladrar: 'Alta',
    necesidad_de_aseo: 'Baja',
    soporta_clima_calido: 'Alta',
    soporta_clima_frio: 'Baja',
    tolerancia_a_la_soledad: '-',
    bueno_con_ninos: '-',
    para_primerizos: '-',
    casos_famosos: [],
    fuentes: [ "https://en.wikipedia.org/wiki/African_Hunting_Dog", ]
  },
  4: {
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
    bred_for: ['Caza de tejones y nutrias'],
    breed_group: ['Terrier'],
    life_span: '10 - 13 años',
    temperament: [
      'Sociable',
      'Amigable',
      'Alerta',
      'Confiado',
      'Inteligente',
      'Valiente',
    ],
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
    country_code: 'UK',
    description: `
      La raza de perro Airedale Terrier, también conocida como el "Rey de los Terriers", es una raza que se originó en el Valle de Aire en South Yorkshire, Inglaterra. Son la raza de terrier más grande y fueron criados originalmente para cazar nutrias, zorros y otros pequeños animales. Su apariencia es majestuosa y su coraje es indiscutible, aunque no son propensos a buscar peleas. Son rápidos, siempre listos para la acción y muy alerta, lo que los convierte en excelentes perros de protección y familia.
      <br>
      <br>
      El Airedale Terrier es un perro bien proporcionado y algo compacto, sin exagerar la longitud de las patas o del cuerpo. Su pelaje es duro, denso y de color negro y canela, y su cola, que suele ser cortada, es moderadamente larga, erecta y de buena resistencia. Aunque originalmente fueron criados como perros de caza y trabajo, ahora se utilizan para múltiples propósitos, desde el trabajo policial hasta ser mascotas familiares.
      <br>
      <br>
      El Airedale Terrier tiene una cabeza bien equilibrada, con un cráneo y un hocico de igual longitud y una parada apenas visible. Sus ojos son oscuros y pequeños, no prominentes, y están llenos de agudeza e inteligencia. Sus orejas son en forma de V, pequeñas pero proporcionadas al tamaño del perro. Su cuello es de longitud y grosor moderados, limpio en la garganta y se ensancha gradualmente hacia el cuerpo.
      <br>
      <br>
      El cuerpo del Airedale Terrier es robusto, con un pecho profundo pero no demasiado ancho. Su espalda es corta, fuerte y nivelada, y sus costillas están bien arqueadas. Su lomo es corto, ancho y muscular, dejando poco espacio entre la última costilla y la articulación de la cadera. Sus patas delanteras son perfectamente rectas con mucho músculo y hueso, y sus patas traseras están bien anguladas con muslos largos y musculosos.
      <br>
      <br>
      El Airedale Terrier es una raza de perro que ha sido reconocida por el United Kennel Club desde 1914. Aunque su apariencia puede ser intimidante, son perros amigables y leales que son excelentes para las familias y los dueños de perros por primera vez.
    `,

    history: `
      La historia del Airedale Terrier es fascinante y rica, y se remonta a mediados del siglo XIX en el valle del río Aire en el sur de Yorkshire, Inglaterra. Originalmente conocidos como Working, Waterside o Bingley Terriers, estos perros fueron desarrollados para cazar una variedad de pequeños animales, incluyendo zorros, tejones, comadrejas, nutrias y ratas de río.
      <br>
      <br>
      Los primeros Airedales eran bastante diferentes a los que conocemos hoy. Se cree que la raza se desarrolló a partir de una mezcla de Otterhound y el ahora extinto Black & Tan Terrier. La intención era crear un perro que fuera un buen nadador y un cazador eficaz. El resultado fue un perro de tamaño considerable, de hecho, el Airedale es el más grande de todos los terriers.
      <br>
      <br>
      El patriarca de la raza se considera que es CH Master Briar (1897-1906). Dos de sus hijos, Crompton Marvel y Monarch, también hicieron importantes contribuciones a la raza. Monarch fue importado a Filadelfia, Pensilvania, marcando el comienzo de la presencia de la raza en los Estados Unidos.
      <br>
      <br>
      Además de su papel como cazador de pequeños animales, el Airedale ha sido utilizado para cazar animales de gran tamaño en India, África y Canadá. La raza también fue utilizada como perro de policía y guardia durante la Segunda Guerra Mundial. Hoy en día, el Airedale es principalmente un perro de compañía, pero todavía hay líneas de trabajo en existencia.
      <br>
      <br>
      El Airedale Terrier fue reconocido por el United Kennel Club en 1914, consolidando su lugar en la historia canina. A lo largo de los años, la raza ha demostrado ser increíblemente versátil, adaptándose a una variedad de roles y trabajos. Ya sea como perro de caza, perro de trabajo, perro de policía o simplemente como un fiel compañero, el Airedale Terrier ha demostrado ser un perro digno de su título como "El Rey de los Terriers".
      <br>
      <br>
      En resumen, la historia del Airedale Terrier es una de adaptabilidad y versatilidad. Desde sus humildes comienzos en Yorkshire hasta su estatus actual como una raza de perro amada en todo el mundo, el Airedale Terrier ha demostrado ser un perro verdaderamente excepcional. Con su inteligencia, coraje y lealtad, no es de extrañar que esta raza haya dejado una marca indeleble en la historia canina.
    `,
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente perro de caza',
      'Requiere aseo regular',
      'Necesita ejercicio regular',
    ],
    color: ['Negro', 'Marrón'],
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
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Moderada',
    soporta_clima_calido: 'Moderada',
    soporta_clima_frio: 'Moderada',
    tolerancia_a_la_soledad: 'Baja',
    bueno_con_ninos: 'Alta',
    para_primerizos: 'Baja',
    casos_famosos: [
      {
        nombre: 'Davie',
        caso: 'Airedale Terrier del presidente de EE.UU. Woodrow Wilson',
      },
      {
        nombre: 'Laddie Boy',
        caso: 'Airedale Terrier del presidente de EE.UU. Warren G Harding',
      },
      {
        nombre: 'Paul Pry',
        caso: 'Airedale Terrier del presidente de EE.UU. Calvin Coolidge, originalmente llamado Laddie Buck',
      },
    ],
    fuentes: [
      "https://en.wikipedia.org/wiki/Airedale_Terrier",
      "https://www.akc.org/dog-breeds/airedale-terrier/",
      "https://www.royalcanin.com/us/dogs/breeds/breed-library/airedale-terrier",
      "https://www.ukcdogs.com/airedale-terrier"
    ]
  },
  5: {
    weight: {
      imperial: '90 - 120',
      metric: '41 - 54',
    },
    height: {
      imperial: '28 - 34',
      metric: '71 - 86',
    },
    id: 5,
    name: 'Akbash',
    bred_for: ['Guardia de ovejas'],
    breed_group: ['Desconocido'],
    life_span: '10 - 12 años',
    temperament: ['Leal', 'Independiente', 'Inteligente', 'Valiente'],
    origin: 'Turquía',
    reference_image_id: '26pHT3Qk7',
    image: {
      id: '26pHT3Qk7',
      width: 600,
      height: 471,
      url: 'https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg',
    },
    searchTerms: ['Akbash', 'Guardia de ovejas'],
    country_code: 'TR',
    description: `
      El Akbash, también conocido como Akbaş Çoban Köpeği, es una raza de perro de pastor tradicional de Turquía, específicamente de la región de Anatolia occidental. El nombre Akbash significa 'cabeza blanca', lo que distingue a este perro del Karabaş, o 'cabeza negra'. Fue reconocido por el Ministerio de Agricultura y Asuntos Rurales de Turquía en 2006 y está bajo la tutela de la Köpek Irkları ve Kinoloji Federasyonu, la sociedad de razas de perros turcos, aunque no es reconocido por la Fédération Cynologique Internationale.
      <br>
      <br>
      El Akbash es un perro grande y poderoso, con un peso medio de aproximadamente 45 kg y una altura media a la cruz de poco más de 75 cm. Su pelaje puede ser largo o de longitud media, siempre doble y generalmente blanco, aunque puede tener algunas sombras hacia un color galleta. Al igual que otros perros guardianes de rebaños de pelaje blanco, el pelaje blanco hace que sea fácil para el pastor distinguir entre el perro y un depredador, incluso en la oscuridad. Hay una considerable pluma detrás de las patas, y la cola está muy emplumada.
      <br>
      <br>
      El Akbash es un perro guardián de rebaños, proporcionando protección contra los depredadores a los pastores y a sus ovejas; no tiene ninguna capacidad de pastoreo. Se distribuye principalmente en las provincias de Afyon, Ankara, Eskişehir y Manisa; algunos están presentes en las provincias de Ağrı, Konya, Sivas y Tunceli.
      <br>
      <br>
      Un estándar fue publicado por la Institución de Normas Turcas en 2002, y en 2006 el Akbash fue reconocido por el Ministerio de Agricultura y Asuntos Rurales; fue añadido a la lista de razas y tipos nativos reconocidos, y el estándar de la raza fue publicado en el Resmi Gazete, el boletín oficial del gobierno.
    `,
    history: `
      La historia del Akbash, también conocido como Akbaş Çoban Köpeği en turco, es tan antigua como la de la propia Turquía. Esta raza de perro pastor, cuyo nombre significa 'cabeza blanca', se originó en la región de Anatolia occidental, una zona de terreno accidentado que ha sido hogar de civilizaciones durante miles de años. El Akbash se distingue de la raza Karabaş, que significa 'cabeza negra'.
      <br>
      <br>
      El Akbash ha sido utilizado tradicionalmente como perro guardián de rebaños, protegiendo a las ovejas de los depredadores en las duras condiciones de Anatolia. Su distribución principal se encuentra en las provincias de Afyon, Ankara, Eskişehir y Manisa, aunque también se pueden encontrar algunos ejemplares en las provincias de Ağrı, Konya, Sivas y Tunceli.
      <br>
      <br>
      El estándar de la raza fue publicado por la Institución de Estándares Turcos en 2002, y en 2006 el Akbash fue reconocido por el Ministerio de Agricultura y Asuntos Rurales de Turquía. Fue añadido a la lista de razas y tipos nativos reconocidos, y el estándar de la raza fue publicado en el Resmi Gazete, el boletín oficial del gobierno.
      <br>
      <br>
      El Akbash es un perro grande y poderoso, con un peso medio de aproximadamente 45 kg y una altura media a la cruz de poco más de 75 cm. Su pelaje puede ser largo o de longitud media, siempre doble y generalmente blanco, aunque puede presentar algunas sombras hacia un color galleta. Al igual que otros perros guardianes de rebaños de pelaje blanco, el pelaje blanco facilita al pastor distinguir entre el perro y un depredador, incluso en la oscuridad. Hay un considerable plumaje detrás de las patas, y la cola está muy emplumada.
      <br>
      <br>
      A pesar de su apariencia imponente y su historia como protector de rebaños, el Akbash no tiene ninguna habilidad para el pastoreo. Su función principal es la de proteger a las ovejas de los depredadores, una tarea que ha desempeñado con eficacia durante siglos en las duras condiciones de Anatolia.
    `,
    categoria_de_tamanio: 'Grande',
    perks: [
      'Excelente perro de guardia',
      'Requiere aseo mínimo',
      'Necesita mucho ejercicio',
      'Protector y valiente',
      'Leal a su familia',
    ],
    color: ['Blanco'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita mucho ejercicio y espacio',
      'Requiere un ambiente amplio, idealmente una granja o un hogar con gran patio',
    ],
    popularidad: 'Baja',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas cardíacos',
      'Obesidad',
    ],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Moderada',
    soporta_clima_calido: 'Moderada',
    soporta_clima_frio: 'Alta',
    tolerancia_a_la_soledad: 'Moderada',
    bueno_con_ninos: '-',
    para_primerizos: '-',
    casos_famosos: [],
    fuentes: [
      "https://en.wikipedia.org/wiki/Akbash",
    ]
  },
  6: {
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
    bred_for: ['Caza de osos'],
    breed_group: ['Trabajo'],
    life_span: '10 - 14 años',
    temperament: [
      'Dócil',
      'Alerta',
      'Sensible',
      'Digno',
      'Compuesto',
      'Amistoso',
      'Receptivo',
      'Fiel',
      'Valiente',
    ],
    origin: 'Japón',
    reference_image_id: 'BFRYBufpm',
    image: {
      id: 'BFRYBufpm',
      width: 1280,
      height: 853,
      url: 'https://cdn2.thedogapi.com/images/BFRYBufpm.jpg',
    },
    searchTerms: ['Akita', 'perro de caza', 'caza de osos'],
    country_code: 'JP',
    description: `
      El Akita es una raza de perro que se distingue por su nobleza y su apariencia imponente. Originario de Japón, el Akita es una raza grande, de huesos pesados y tipo spitz, que es robusta y bien equilibrada. Su cabeza es amplia y triangular, con ojos pequeños y orejas erectas que se llevan hacia adelante casi en línea con la parte posterior del cuello, lo que es una característica distintiva de la raza.
      <br>
      <br>
      El Akita tiene un pelaje doble, con un subpelo grueso y corto y un pelaje exterior recto y áspero que se levanta un poco del cuerpo. El pelo en la cabeza, las patas inferiores y las orejas es corto. El pelaje sobre la cruz y la grupa es ligeramente más largo que en el resto del cuerpo, y en la cola es el más largo y más profuso.
      <br>
      <br>
      El Akita puede ser de cualquier color, incluyendo blanco. Los colores son brillantes y claros, y las marcas están bien equilibradas, con o sin máscara o blaze. Los Akitas blancos no tienen máscara. Los pintos tienen un fondo blanco con grandes parches uniformemente colocados que cubren la cabeza y más de un tercio del cuerpo. El subpelo puede ser de un color diferente al del pelaje exterior.
      <br>
      <br>
      El Akita es amigable, alerta y receptivo, con un comportamiento digno y valiente. Su cabeza es masiva, pero en proporción al tamaño del cuerpo. Cuando el perro está relajado, la cabeza está libre de arrugas. Los ojos son de color marrón oscuro, relativamente pequeños, profundos y casi triangulares. Los bordes de los ojos son negros y ajustados. La nariz es negra y amplia. El color hígado está permitido en los Akitas blancos, pero se prefiere el negro.
      <br>
      <br>
      El Akita necesita un ejercicio moderado pero regular para mantenerse en forma. Debe ser llevado a largos paseos diarios. La esperanza de vida del Akita es de unos 10-12 años. La raza es propensa a la displasia de cadera, tanto hipotiroidismo como tiroiditis autoinmune, enfermedades inmunológicas como VKH y Pemphigus, problemas de piel como SA y ojos (PRA, Micro, entropión) patella y otros problemas con la rodilla.
      <br>
      <br>
      El Akita es una raza que requiere un dueño que pueda proporcionarle un liderazgo firme y consistente. Sin ello, el perro puede ser muy voluntarioso y puede volverse muy agresivo con otros perros y animales. Necesita un entrenamiento firme desde cachorro. El objetivo en el entrenamiento de este perro es lograr un estatus de líder de la manada. Es un instinto natural para un perro tener un orden en su manada. Cuando los humanos vivimos con perros, nos convertimos en su manada. Toda la manada coopera bajo un solo líder. Las líneas están claramente definidas. Tú y todos los demás humanos DEBEN estar más arriba en el orden que el perro. Esa es la única manera de que tu relación pueda ser un éxito.
    `,
    history: `
      La historia del Akita es una que se remonta a siglos atrás, en la isla de Honshu en la región de Akita, Japón. Esta raza es la más grande de las razas nativas de Japón y es miembro de la familia Spitz. Originalmente se utilizaba para la caza de osos, pero en un punto de la historia, se cruzó con Tosas y Mastiffs para aumentar su tamaño y valor como perro de pelea. Cuando las peleas de perros fueron prohibidas en 1908, la raza fue preservada y mejorada como una gran raza japonesa.
      <br>
      <br>
      Durante la Segunda Guerra Mundial, la raza estuvo cerca de desaparecer, y después de la guerra, debido al cruce de razas, los Akitas que quedaron eran de tres tipos distintos. Los Akitas de las líneas Dewa, que tenían características de los cruces con Mastiffs y Pastores Alemanes, fueron llevados a los Estados Unidos por miembros de las Fuerzas Militares. Estos perros fascinaron a los aficionados a los perros estadounidenses y la raza aumentó rápidamente en popularidad. Los Akitas en los Estados Unidos se desarrollaron como un tipo único en este país y ahora son bastante diferentes de la raza en su país de origen.
      <br>
      <br>
      El Akita Inu es considerado un perro nacional de Japón y es una de las siete razas designadas como Monumento Natural. La raza ha tenido muchos usos, como el trabajo policial y militar, un perro guardián (gobierno y civil), un perro de pelea, un cazador de osos y ciervos y un perro de trineo. El Akita Inu es un versátil perro de caza, capaz de cazar en condiciones climáticas inclementes. La boca suave del Akita hace posible que trabaje como perro de recuperación de aves acuáticas. El perro es considerado sagrado y un amuleto de buena suerte en el país de Japón. Pequeñas estatuas del Akita Inu a menudo se dan a los nuevos padres después de que nacen los bebés como un gesto de buena salud y a las personas enfermas como un gesto de una pronta recuperación.
      <br>
      <br>
      En 1937, el primer Akita, llamado Kamikaze-go, fue llevado a los Estados Unidos por Helen Keller. El perro fue un regalo que le dieron durante su viaje a la Prefectura de Akita. Kamikaze-go murió de distemper canino poco después de que ella lo adoptó. En julio de 1938, otro Akita llamado Kenzan-go, que era el hermano mayor de su primer Akita, le fue dado como un regalo oficial del gobierno japonés. Después de la Segunda Guerra Mundial, muchos militares trajeron perros Akita Inu a los Estados Unidos.
      <br>
      <br>
      Existen dos tipos de Akitas, la raza original japonesa Akita y ahora una designación separada para los Akitas estándar estadounidenses. Los pesos y tamaños son diferentes y el estándar estadounidense permite una máscara negra, mientras que el estándar de la raza original japonesa no la permite.
    `,
    categoria_de_tamanio: 'Grande',
    perks: [
      'Excelente perro de guardia',
      'Requiere aseo mínimo',
      'Necesita mucho ejercicio',
      'Es valiente y leal',
    ],
    color: ['Blanco', 'Negro', 'Marrón'],
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
    tendencia_a_ladrar: 'Baja',
    necesidad_de_aseo: 'Moderada',
    soporta_clima_frio: 'Alta',
    soporta_clima_calido: 'Moderada',
    tolerancia_a_la_soledad: 'Baja',
    para_primerizos: 'Baja',
    bueno_con_ninos: 'Baja',
    casos_famosos: [
      {
        nombre: 'Hachiko',
        caso: 'Hachiko es probablemente el Akita más famoso de la historia. Este perro japonés es conocido por su lealtad inquebrantable a su dueño, Hidesaburo Ueno, durante la década de 1920. Todos los días, Hachiko esperaba a su dueño en la estación de tren de Shibuya para volver a casa juntos. Incluso después de la muerte de Ueno, Hachiko continuó esperando en la estación todos los días durante casi 10 años hasta su propia muerte. Su historia ha sido contada en varias películas y libros, y una estatua de bronce de Hachiko se encuentra en la estación de Shibuya en su honor.',
      },
      {
        nombre: 'Kenzo',
        caso: "Kenzo es un Akita que apareció en la película de 1989 'Hachiko Monogatari', una película japonesa basada en la verdadera historia de Hachiko. Kenzo interpretó a Hachiko en la película.",
      },
      {
        nombre: 'Taro y Jiro',
        caso: "Taro y Jiro son dos Akitas que se hicieron famosos por su supervivencia en la Antártida. Fueron parte de una expedición japonesa en 1958, y cuando la expedición tuvo que ser evacuada debido a las duras condiciones climáticas, los perros fueron dejados atrás con la esperanza de que el equipo de relevo los recogiera. Sin embargo, debido a las dificultades logísticas, los perros quedaron abandonados. Increíblemente, Taro y Jiro lograron sobrevivir en la Antártida por casi un año hasta que fueron encontrados por una expedición de rescate. Su historia fue contada en la película 'Eight Below'.",
      },
    ],
    fuentes: [
      "https://en.wikipedia.org/wiki/Akita_(dog)",
      "https://www.akc.org/dog-breeds/akita/",
      "https://www.royalcanin.com/us/dogs/breeds/breed-library/akita",
      "https://www.dogbreedinfo.com/akita.htm",
      "https://www.ukcdogs.com/akita",
    ]
  },
  7: {
    weight: {
      imperial: '55 - 90',
      metric: '25 - 41',
    },
    height: {
      imperial: '18 - 24',
      metric: '46 - 61',
    },
    id: 7,
    name: 'Bulldog Alapaha de Sangre Azul',
    bred_for: ['Guardia'],
    breed_group: ['Mixto'],
    life_span: '12 - 13 años',
    temperament: [
      'Cariñoso',
      'Protector',
      'Adiestrable',
      'Devoto',
      'Responsable',
    ],
    origin: 'Estados Unidos',
    reference_image_id: '33mJ-V3RX',
    image: {
      id: '33mJ-V3RX',
      width: 1828,
      height: 2065,
      url: 'https://cdn2.thedogapi.com/images/33mJ-V3RX.jpg',
    },
    searchTerms: ['Bulldog Alapaha de Sangre Azul', 'bulldog', 'guardia'],
    description:`
      El Bulldog Alapaha de Sangre Azul es una raza de perro que se distingue por su fuerza, agilidad y resistencia. Este perro de tamaño mediano a grande es conocido por su apariencia musculosa y su expresión alerta y segura. El Alapaha es un perro de trabajo que se utiliza para trabajar con el ganado y como perro de guardia.
      <br>
      <br>
      El Alapaha tiene una cabeza cuadrada y ancha con ojos de forma ovalada que pueden ser de cualquier color. Las orejas son de tamaño mediano y se llevan dobladas. El cuerpo es ligeramente más largo que alto y tiene una estructura ósea sólida. El pecho es amplio y profundo y la espalda es fuerte y recta. La cola es de longitud media y se lleva baja.
      <br>
      <br>
      El pelaje del Alapaha es corto y denso, y puede ser de cualquier color, aunque los colores más comunes son el blanco y el negro, el blanco y el chocolate, el blanco y el azul, y el blanco y el rojo. El Alapaha puede tener marcas en la cara y el cuerpo.
      <br>
      <br>
      El Alapaha es conocido por su temperamento leal y protector. Es un perro inteligente y altamente entrenable que es conocido por su amor y devoción hacia su familia. Aunque puede ser reservado con los extraños, el Alapaha es generalmente amigable y se lleva bien con los niños. Sin embargo, debido a su naturaleza protectora, el Alapaha necesita un dueño que pueda proporcionarle un liderazgo firme y consistente.
      <br>
      <br>
      El Alapaha es un perro activo que necesita mucho ejercicio para mantenerse en forma. Disfruta de actividades como correr, jugar a buscar y participar en deportes caninos como la obediencia y la agilidad. Aunque el Alapaha puede vivir en un apartamento si se le proporciona suficiente ejercicio, se adapta mejor a una casa con un patio grande donde pueda correr y jugar.
      <br>
      <br>
      En cuanto a la salud, el Alapaha es generalmente una raza saludable, pero puede ser propenso a ciertas condiciones de salud como la displasia de cadera, las alergias y los problemas oculares. Es importante que los dueños de Alapaha se aseguren de que su perro reciba chequeos regulares con el veterinario y mantenga una dieta y un estilo de vida saludables.
      <br>
      <br>
      En resumen, el Bulldog Alapaha de Sangre Azul es una raza de perro que es conocida por su fuerza, su lealtad y su habilidad para trabajar. Con su apariencia imponente y su temperamento protector, el Alapaha es un perro de trabajo y un compañero de familia excepcional.
    `,
    country_code: 'US',
    history: `
      La historia del Bulldog Alapaha de Sangre Azul es tan fascinante como la raza misma. Esta raza de perro, también conocida como Alapaha Blue Blood Bulldog, tiene sus raíces en el sur de los Estados Unidos, específicamente en la región de Alapaha, Georgia.
      <br>
      <br>
      El Bulldog Alapaha de Sangre Azul es una raza que ha sido criada para ser un perro de trabajo y de compañía. Su historia se remonta a mediados del siglo XIX, cuando los colonos en el sur de Georgia necesitaban un perro que pudiera trabajar en las granjas y plantaciones. Necesitaban un perro que fuera fuerte, resistente y capaz de soportar el calor del sur de Georgia. Así nació el Bulldog Alapaha de Sangre Azul.
      <br>
      <br>
      La raza fue desarrollada por un hombre llamado Papa Buck Lane en el siglo XIX. Lane quería un perro que fuera capaz de trabajar en su plantación, pero también quería un perro que fuera leal y protector con su familia. Así que comenzó a criar Bulldogs Ingleses con Bulldogs locales para crear una raza que cumpliera con estas características. El resultado fue el Bulldog Alapaha de Sangre Azul.
      <br>
      <br>
      Desafortunadamente, después de la muerte de Lane en 1943, la raza estuvo al borde de la extinción. Sin embargo, gracias a los esfuerzos de Lana Lou Lane, la nieta de Papa Buck Lane, la raza fue salvada. Lana Lou Lane continuó con el legado de su abuelo y trabajó incansablemente para preservar y promover la raza. Fundó la Alapaha Blue Blood Bulldog Association en 1979 para ayudar a preservar la raza.
      <br>
      <br>
      Hoy en día, el Bulldog Alapaha de Sangre Azul es una raza rara, pero está ganando popularidad gracias a su lealtad, su fuerza y su habilidad para trabajar. Aunque la raza fue desarrollada en Georgia, ahora se pueden encontrar Bulldogs Alapaha de Sangre Azul en todo el mundo.
      <br>
      <br>
      Es importante destacar que, aunque la raza ha sido reconocida por varias organizaciones de registro de perros, todavía no ha sido reconocida por el American Kennel Club (AKC). Sin embargo, los esfuerzos para obtener el reconocimiento del AKC están en marcha.
      <br>
      <br>
      En resumen, la historia del Bulldog Alapaha de Sangre Azul es una historia de perseverancia y dedicación. A pesar de los desafíos, esta raza ha sobrevivido y prosperado gracias a los esfuerzos de personas apasionadas que se preocupan profundamente por su supervivencia. Y aunque la raza todavía es relativamente desconocida, su popularidad está creciendo y su futuro parece brillante.
    `,
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente perro de guardia',
      'Requiere aseo mínimo',
      'Necesita mucho ejercicio',
      'Devoto y responsable',
      'Muy protector con su familia',
    ],
    color: ['Merle azul', 'Merle marrón', 'Merle rojo'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita mucho ejercicio y espacio',
      'Requiere atención regular a su pelaje',
    ],
    popularidad: 'Baja',
    enfermedades_comunes: [
      'Problemas oculares',
      'Problemas de cadera',
      'Alergias cutáneas',
    ],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Baja',
    soporta_clima_frio: 'Moderada',
    soporta_clima_calido: 'Moderada',
    para_primerizos: '-',
    bueno_con_ninos: 'Alta',
    tolerancia_a_la_soledad: 'Baja',
    casos_famosos: [],
    fuentes: [
      "https://en.wikipedia.org/wiki/Alapaha_Blue_Blood_Bulldog",
      "https://www.akc.org/dog-breeds/alapaha-blue-blood-bulldog/"
    ]
  },
  8: {
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
    bred_for: ['Tirar de trineos'],
    breed_group: ['Mixto'],
    life_span: '10 - 13 años',
    temperament: ['Amistoso', 'Enérgico', 'Leal', 'Gentil', 'Confiado'],
    origin: 'Estados Unidos',
    reference_image_id: '-HgpNnGXl',
    image: {
      id: '-HgpNnGXl',
      width: 500,
      height: 500,
      url: 'https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg',
    },
    searchTerms: [
      'Siberiano',
      'Husky de Alaska',
      'Alaskan Husky',
      'Husky Alaskano',
      'Huski de Alaska',
      'Huski Alaskano',
      'Husky de Alasca',
      'Huski de Alasca',
      'Husky Alasca',
      'Huski Alasca',
      'Husky Alaskano',
      'Huski Alaskano',
    ],
    description: `
      El Husky de Alaska es una raza de perro que se destaca por su apariencia similar a la del lobo y su increíble resistencia. Estos perros son más grandes y más delgados que sus primos, los Huskies Siberianos, y a menudo tienen ojos marrones en lugar de los ojos azules o de color mixto que se ven comúnmente en los Siberianos.
      <br>
      <br>
      Estos perros son conocidos por su naturaleza amigable y juguetona. Son muy apegados a sus familias y son conocidos por ser amables y juguetones. Aunque tienen mucha energía, especialmente cuando son cachorros, son perros inteligentes y cariñosos que son fáciles de llevar. Sin embargo, también son muy independientes y sólo obedecerán una orden si ven que tiene sentido. Por lo tanto, es importante establecer un liderazgo firme y consistente desde el principio.
      <br>
      <br>
      Los Huskies de Alaska son perros de trabajo y tienen una resistencia increíble, lo que los hace excelentes para las carreras de trineos. Son perros muy activos que necesitan mucho ejercicio y espacio para correr. Aunque pueden adaptarse a la vida en un apartamento si se les proporciona suficiente ejercicio, lo ideal es que tengan un gran patio con una cerca alta para correr y jugar.
      <br>
      <br>
      Estos perros tienen un pelaje espeso que los protege del frío, lo que significa que prefieren los climas más fríos. También son conocidos por ser comedores frugales y no necesitan tanta comida como se podría pensar. Son propensos a vagar y a cavar, por lo que es importante asegurarse de que su patio esté bien asegurado.
      <br>
      <br>
      Los Huskies de Alaska son perros maravillosos que pueden hacer grandes compañeros si se les proporciona el ejercicio y la estimulación mental que necesitan. Son perros inteligentes y amigables que son leales a sus familias y se llevan bien con otros perros si se crían juntos desde cachorros.
      <br>
      <br>
      En cuanto a su apariencia, los machos suelen pesar entre 18 y 27 kg, mientras que las hembras suelen pesar entre 16 y 22 kg. Tienen un pelaje espeso que requiere poco cuidado, excepto durante las temporadas de muda pesada, cuando necesitan ser peinados a fondo.
      <br>
      <br>
      En cuanto a su salud, no se mencionan problemas de salud específicos para la raza en las fuentes consultadas. Sin embargo, como con cualquier raza, es importante llevar a cabo chequeos regulares con un veterinario y mantener al día las vacunas y los tratamientos preventivos.
      <br>
      <br>
      En resumen, el Husky de Alaska es un perro de trabajo resistente y leal que es amigable y juguetón. Son perros inteligentes y independientes que necesitan un dueño que pueda proporcionarles un liderazgo firme y consistente, así como mucho ejercicio y estimulación mental. Con el cuidado y la atención adecuados, pueden hacer maravillosos compañeros de familia.
    `,
    country_code: 'US',
    history: `
      La historia del Husky de Alaska es tan fascinante como la raza misma. Los Huskies de Alaska son una raza de perros de trineo que se originó en el norte de América, específicamente en Alaska. Aunque no se sabe exactamente cuándo se desarrolló esta raza, se cree que los nativos americanos los han utilizado durante miles de años para tirar de sus trineos y ayudar en la caza.
      <br>
      <br>
      Los Huskies de Alaska son el resultado de la cría selectiva de varios tipos de perros de trineo para obtener un perro que fuera resistente, fuerte y capaz de soportar las duras condiciones del Ártico. A lo largo de los años, los Huskies de Alaska han demostrado ser perros de trabajo excepcionales, capaces de recorrer largas distancias a alta velocidad mientras tiran de un trineo.
      <br>
      <br>
      Aunque los Huskies de Alaska son conocidos principalmente como perros de trineo, también han demostrado ser excelentes perros de trabajo en otros aspectos. Durante la fiebre del oro de Klondike a finales del siglo XIX, los Huskies de Alaska fueron utilizados para transportar suministros a las áreas de minería de oro. También se utilizaron durante la Segunda Guerra Mundial para transportar suministros en áreas donde otros medios de transporte no eran prácticos.
      <br>
      <br>
      A pesar de su historia como perros de trabajo, los Huskies de Alaska también son conocidos por su temperamento amigable y su habilidad para llevarse bien con las personas. Son conocidos por ser leales, inteligentes y tener una gran energía, lo que los hace excelentes compañeros para las personas activas.
      <br>
      <br>
      En la actualidad, los Huskies de Alaska siguen siendo utilizados como perros de trineo en muchas partes del mundo. También son populares como mascotas y son conocidos por su apariencia distintiva, que incluye un pelaje espeso y ojos que pueden ser de color azul o marrón.
      <br>
      <br>
      Aunque los Huskies de Alaska son una raza de perro relativamente rara, han tenido un impacto significativo en la cultura popular. Han aparecido en varias películas y programas de televisión, y son a menudo asociados con la imagen del "perro de trineo" clásico.
      <br>
      <br>
      En resumen, la historia del Husky de Alaska es una de resistencia, versatilidad y lealtad. Ya sea tirando de trineos a través del Ártico, transportando suministros durante la fiebre del oro o simplemente siendo un compañero leal, los Huskies de Alaska han demostrado ser una raza de perro verdaderamente excepcional.
    `,
    categoria_de_tamanio: 'Grande',
    perks: [
      'Bueno para el clima frío',
      'Requiere ejercicio regular',
      'Leal y enérgico',
      'Necesita estimulación mental',
      'Se adapta a diversos climas',
    ],
    color: ['Blanco', 'Negro', 'Gris'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere mucho ejercicio y espacio',
      'Necesita estimulación mental',
      'Debe mantenerse fresco en climas cálidos',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Problemas oculares',
      'Displasia de cadera',
      'Enfermedad de la piel',
    ],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Moderada',
    soporta_clima_frio: 'Alta',
    soporta_clima_calido: 'Baja',
    tolerancia_a_la_soledad: 'Baja',
    para_primerizos: 'Baja',
    bueno_con_ninos: 'Alta',
    casos_famosos: [],
    fuentes: [
      "https://en.wikipedia.org/wiki/Alaskan_Husky",
      "https://www.akc.org/dog-breeds/",
      "https://www.akc.org/dog-breeds/alaskan-malamute/",
      "https://www.royalcanin.com/us/dogs/breeds/breed-library/alaskan-malamute",
      "https://www.dogbreedinfo.com/alaskanhusky.htm",
      "https://www.ukcdogs.com/alaskan-husky"
    ]
  },
  9: {
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
    bred_for: ['Transporte de carga pesada', 'Tirar de trineos'],
    breed_group: ['Trabajo'],
    life_span: '12 - 15 años',
    temperament: [
      'Amistoso',
      'Cariñoso',
      'Devoto',
      'Leal',
      'Digno',
      'Juguetón',
    ],
    origin: 'Estados Unidos',
    reference_image_id: 'dW5UucTIW',
    image: {
      id: 'dW5UucTIW',
      width: 1023,
      height: 769,
      url: 'https://cdn2.thedogapi.com/images/dW5UucTIW.jpg',
    },
    searchTerms: [
      'Malamute de Alaska',
      'Malamute',
      'Alaskan Malamute',
      'Malamut de Alaska',
      'Malamute Alaskano',
      'Malamut Alaskano',
      'Alaskan Malamut',
      'Malamute del Alaska',
      'Malamut del Alaska',
      'Perro Malamute',
      'Perro Malamut',
      'Perro de Alaska',
      'Perro Alaskano',
    ],
    country_code: 'US',
    description: `
      El Malamute de Alaska es una raza de perro que es tan majestuosa como su tierra natal. Este perro de gran tamaño y fuerte constitución es un espectáculo para la vista y un compañero leal para aquellos que tienen la suerte de tener uno en su vida.
      <br>
      <br>
      El Malamute de Alaska es un perro de gran tamaño, sólido y bien construido, con un pecho profundo y un cuerpo fuertemente musculado. Su pelaje es grueso y doble, compuesto por un manto externo áspero y un subpelo lanoso y denso. Este perro se mantiene bien sobre sus patas, dando una apariencia de actividad y alerta. Su andar es constante, equilibrado e incansable. No está diseñado para ser un perro de velocidad, sino un perro capaz de tirar de cargas pesadas durante largas distancias a un ritmo razonable.
      <br>
      <br>
      El Malamute de Alaska tiene una cabeza ancha y profunda, pero nunca tosca o torpe. Debe estar en proporción con el resto del cuerpo. El cráneo es más ancho entre las orejas y moderadamente redondeado. Se estrecha y se aplana hacia los ojos y se redondea suavemente hasta las mejillas moderadamente planas. La boca es grande y voluminosa en proporción al cráneo. Se estrecha ligeramente en anchura y profundidad desde el stop hasta la punta. Los labios son ajustados.
      <br>
      <br>
      Los ojos del Malamute de Alaska son de forma almendrada, de color marrón, de tamaño moderado y están colocados oblicuamente. Su expresión es suave e indica un carácter afectuoso. Los ojos azules son considerados una falta en la raza. Las orejas son medianas en tamaño, pero pequeñas en proporción al tamaño de la cabeza. Son de forma triangular, ligeramente redondeadas en las puntas y están colocadas ampliamente en la parte posterior del cráneo. Cuando están erectas, las orejas deben apuntar hacia adelante.
      <br>
      <br>
      El Malamute de Alaska tiene un pelaje doble, con un manto de guardia grueso y áspero (que nunca debe ser demasiado largo o suave) y un subpelo denso, aceitoso y lanoso que tiene de uno a dos pulgadas de longitud. Los pelos de guardia varían en longitud, siendo generalmente más largos alrededor del cuello, por la espalda, sobre la grupa, en las bragas y en la cola. El pelaje tiende a ser más corto y menos espeso en climas cálidos. El pelaje no se recorta excepto en los pies.
      <br>
      <br>
      Los colores del Malamute de Alaska varían desde el gris claro hasta los tonos intermedios hasta el negro, el sable y los tonos de sable hasta el rojo. Las combinaciones de colores son aceptables en los subpelos, las marcas y los adornos. Siempre con blanco en el cuerpo inferior, partes de las patas, pies y parte de las marcas faciales. Las marcas deben ser o bien en forma de capa o bien en forma de máscara en la cara. Un destello blanco en la frente, un collar blanco o una mancha en la nuca es aceptable y atractivo.
      <br>
      <br>
      El color del pelaje puede variar desde el gris claro hasta los tonos intermedios hasta el negro, el sable y los tonos de sable hasta el rojo. Las combinaciones de colores son aceptables en los subpelos, las marcas y los adornos. Siempre con blanco en el cuerpo inferior, partes de las patas, pies y parte de las marcas faciales. Las marcas deben ser o bien en forma de capa o bien en forma de máscara en la cara. Un destello blanco en la frente, un collar blanco o una mancha en la nuca es aceptable y atractivo.
      <br>
      <br>
      El Malamute de Alaska tiene una cola bien cubierta de pelo que se lleva sobre la espalda como una pluma ondeante. Las colas en forma de sacacorchos se ven ocasionalmente pero se consideran una falta en la raza. Las colas bien peludas de los Malamutes les ayudan a mantenerse calientes cuando se acurrucan en la nieve. A menudo se les ve envolviendo la cola alrededor de su nariz y cara, lo que presumiblemente les ayuda a protegerse contra el clima severo como la nieve que sopla. Sus orejas son generalmente erectas, en forma de cuña, pequeñas en proporción a la cabeza y colocadas al lado del cráneo. El hocico es profundo y ancho, estrechándose ligeramente desde el cráneo hasta la nariz. La nariz y las encías son negras pero algunos Malamutes tienen una nariz de nieve, que es negra con un tono rosado que puede oscurecerse o aclararse, dependiendo de la temporada.
      <br>
      <br>
      El Malamute de Alaska es un perro pesado, con una naturaleza y estructura más formidables que el Husky Siberiano, que está criado para la velocidad. El Malamute de Alaska está criado para la potencia y la resistencia, que es su función original y lo que el estándar de la raza requiere de los criadores de Malamute de Alaska.
      <br>
      <br>
      Los Malamutes de Alaska son perros muy cariñosos con las personas, un rasgo que los hace particularmente buscados como perros de familia, pero son poco fiables como perros guardianes ya que no tienden a ladrar. Los Malamutes son ágiles alrededor de los muebles y objetos más pequeños, lo que los hace ideales como perros de casa, siempre y cuando tengan mucho tiempo al aire libre para satisfacer sus considerables necesidades de ejercicio. Los Malamutes de Alaska también suelen participar en programas de terapia con animales, como visitar a pacientes en hospitales, debido a su naturaleza suave. Si son perros de exterior durante todo el año, dejarlos jugar en una piscina para bebés llena de agua fría en verano los mantiene frescos. En invierno, prefieren la nieve.
      <br>
      <br>
      Los Malamutes son generalmente perros tranquilos, raramente ladran. Cuando un Malamute vocaliza, a menudo parece que está "hablando" al vocalizar un sonido de "woo woo". Un perro Spitz de aspecto similar, el Husky Siberiano, es mucho más vocal.
    `,
    history: `
      La historia del Malamute de Alaska es tan antigua como las tierras heladas que una vez recorrió. Esta raza es una de las más antiguas razas de perros de trineo del Ártico, y su nombre proviene de los Mahlemuts, una tribu inuit que se estableció a lo largo de las costas del estrecho de Kotzebue en la parte noroeste de Alaska. Los orígenes de la gente nativa y sus perros son desconocidos, pero es seguro que estuvieron en la región durante generaciones antes de que los marineros asiáticos llegaran a Alaska y regresaran a casa con historias de gente nativa que usaba perros para tirar de trineos.
      <br>
      <br>
      Cuando los hombres blancos se establecieron en Alaska, los perros árticos se mezclaron con sangre externa, pero cuando el deporte de las carreras de trineos se hizo popular, el interés en mantener una cepa pura de Malamutes de Alaska aumentó y desde 1926 la raza se ha mantenido en su estado original. Los Malamutes de Alaska fueron reconocidos por el United Kennel Club en 1947.
      <br>
      <br>
      Los Malamutes de Alaska son descendientes del lobo ártico y su nombre proviene de los Mahlemuts, una tribu inuit que vivía en la región de Kotzebue Sound en el noroeste de Alaska. Estos perros fueron utilizados por los Mahlemuit hace 2000 a 3000 años como su única forma de transporte. Estos perros eran muy valorados por su fuerza y resistencia, y se utilizaban para tirar de trineos ligeros de viaje, pero también para transportar cargas pesadas de alimentos y suministros para la gente del Ártico.
      <br>
      <br>
      Los Malamutes de Alaska han participado en muchas expediciones polares, para las cuales están particularmente bien adaptados debido a su tenacidad, sentido de la orientación y excelente sentido del olfato. Han aparecido como personajes inolvidables en las historias de Jack London y Rudyard Kipling. El Malamute acompañó a las expediciones del almirante Byrd al Polo Sur. El Malamute de Alaska es primo de las razas árticas Siberian Husky, Samoyed, y el perro esquimal americano. Algunos de los talentos del Malamute de Alaska son el trineo, el carting, la búsqueda y rescate, la tracción de peso y las carreras.
      <br>
      <br>
      En resumen, la historia del Malamute de Alaska es una historia de supervivencia y adaptación en uno de los climas más duros del planeta. Estos perros fueron criados para resistir las condiciones extremas del Ártico y para ser compañeros leales y trabajadores para las personas que vivían en esas condiciones. A lo largo de los años, la raza ha mantenido su fortaleza, resistencia y capacidad para trabajar, lo que la convierte en una raza única y fascinante.`,
    categoria_de_tamanio: 'Grande',
    perks: [
      'Excelente para el clima frío',
      'Necesita mucho ejercicio',
      'Leal y juguetón',
      'Resistente y fuerte',
      'Buen trabajador de trineo',
    ],
    color: ['Blanco', 'Negro y blanco', 'Gris y blanco'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere mucho ejercicio y espacio',
      'Necesita estimulación mental',
      'Cuidado regular del pelaje',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas oculares'],
    tendencia_a_ladrar: 'Baja',
    necesidad_de_aseo: 'Alta',
    soporta_clima_frio: 'Alta',
    soporta_clima_calido: 'Baja',
    tolerancia_a_la_soledad: 'Baja',
    para_primerizos: 'Baja',
    bueno_con_ninos: 'Alta',
    casos_famosos: [
      {
        nombre: 'Balto',
        caso: 'Balto, aunque técnicamente es un Husky Siberiano, a menudo se confunde con un Malamute de Alaska. Balto es famoso por su papel en la carrera del suero a Nome en 1925, donde lideró su equipo de trineo a través de condiciones difíciles para entregar un suero antitoxina diftérica que salvó muchas vidas.',
      },
    ],
    fuentes: [
      "https://en.wikipedia.org/wiki/Alaskan_Malamute",
      "https://www.akc.org/dog-breeds/alaskan-malamute/",
      "https://www.royalcanin.com/us/dogs/breeds/breed-library/alaskan-malamute",
      "https://www.dogbreedinfo.com/alaskanmalamute.htm",
      "https://www.ukcdogs.com/alaskan-malamute",
    ]
  },
  10: {
    weight: {
      imperial: '60 - 120',
      metric: '27 - 54',
    },
    height: {
      imperial: '22 - 27',
      metric: '56 - 69',
    },
    id: 10,
    name: 'Bulldog Americano',
    bred_for: ['Antiguamente para la captura de ganado y protección'],
    breed_group: ['Trabajo'],
    life_span: '10 - 12 años',
    temperament: [
      'Amistoso',
      'Asertivo',
      'Enérgico',
      'Leal',
      'Gentil',
      'Confiado',
      'Dominante',
    ],
    origin: 'Estados Unidos',
    reference_image_id: 'pk1AAdloG',
    image: {
      id: 'pk1AAdloG',
      width: 1669,
      height: 1377,
      url: 'https://cdn2.thedogapi.com/images/pk1AAdloG.jpg',
    },
    searchTerms: [
      'Bulldog Americano',
      'American Bulldog',
      'Bulldog de America',
      'Bulldog de EEUU',
      'Bulldog EEUU',
      'Bulldog de Estados Unidos',
      'Bulldog Estados Unidos',
      'Bulldog USA',
      'Bulldog de USA',
      'Bulldog Amerikano',
      'Bulldog Amercano',
      'Bulldog Amerikano',
      'Bulldog Amerikn',
    ],
    country_code: 'US',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Bueno para el entrenamiento de obediencia',
      'Requiere ejercicio regular',
      'Leal y amistoso',
      'Bueno para la protección de la casa',
      'Ideal para familias activas',
    ],
    color: ['Blanco', 'Marrón claro', 'Marrón oscuro'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere mucho ejercicio y espacio',
      'Necesita estimulación mental',
      'Requiere socialización temprana',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas oculares'],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Moderada',
    soporta_clima_frio: 'Alta',
    soporta_clima_calido: 'Moderada',
    tolerancia_a_la_soledad: 'Baja',
    para_primerizos: 'Baja',
    bueno_con_ninos: 'Baja',
    casos_famosos: [
      {
        nombre: 'Spike y Tyke',
        caso: 'Personajes de la franquicia Tom y Jerry.',
      },
      {
        nombre: 'Muggshot',
        caso: 'Personaje jefe de la serie Sly Cooper y ejecutor de los Cinco Diabólicos.',
      },
      {
        nombre: 'Big Trouble y Tory Hesta',
        caso: "Perros que aparecen en el video 'Bloody Cape' de Deftones.",
      },
      {
        nombre: 'Mel',
        caso: "Perro del personaje de David Duchovny en la película 'Return to Me' (2000).",
      },
      {
        nombre: 'Snowflake',
        caso: "Uno de los perros de trineo de Kevin Manley en la película 'Kevin of the North' (2001).",
      },
      {
        nombre: 'Nedd',
        caso: "Perro en la película 'The Number 23' (2007).",
      },
      {
        nombre: 'Jangers',
        caso: "Perro del personaje de Tyler Labine en la película 'Tucker & Dale vs. Evil' (2010).",
      },
      {
        nombre: 'Zinga',
        caso: 'Perro que aparece en el logo de la compañía Zynga.',
      },
      {
        nombre: 'Chance',
        caso: "Perro protagonista en la película 'Homeward Bound: The Incredible Journey' (1993) y su secuela.",
      },
      {
        nombre: 'Petey',
        caso: "En la película 'The Little Rascals' (1994), Petey fue interpretado por un Bulldog Americano.",
      },
      {
        nombre: 'Gunner',
        caso: "Bulldog Americano que es la mascota de la familia en las películas 'Cheaper by the Dozen' (2003) y 'Cheaper by the Dozen 2' (2005).",
      },
    ],
    description: `
      El Bulldog Americano es un perro de gran tamaño, fuerte y poderoso, con un marco compacto que irradia una sensación de resistencia y agilidad. Su cabeza es grande y ancha, con mandíbulas fuertes, y su cuerpo es musculoso y robusto, con una estructura ósea pesada. Los machos suelen ser más corpulentos y de huesos más pesados que las hembras, que son más refinadas.
      <br>
      <br>
      Este perro tiene una apariencia atlética y ligera, con un pecho ancho y moderadamente profundo que da la sensación de habilidad atlética y potencia. Su cuello es musculoso, se estrecha desde los hombros hasta la cabeza y puede tener una ligera papada. La cabeza es cuadrada, grande y ancha con mejillas musculosas que están en proporción con el tamaño y la estructura general del perro. Los ojos son generalmente marrones, pero pueden ser de cualquier color. Algunos incluso pueden tener ojos divididos, donde un ojo es marrón y el otro es azul.
      <br>
      <br>
      El Bulldog Americano tiene un pelaje corto y suave que viene en todos los tonos de atigrado, incluyendo el atigrado rojo, grados variables de blanco, rojo, marrón, canela, leonado y blanco y negro. Su cola es gruesa en la base y se estrecha hasta un punto.
      <br>
      <br>
      En cuanto a su temperamento, el Bulldog Americano es leal, confiable, valiente y determinado. No es un perro hostil. Es alerta y seguro de sí mismo, y ama genuinamente a los niños. Es conocido por sus actos de heroísmo hacia su dueño. Tiene fuertes instintos protectores, y necesita un líder de manada firme, seguro y consistente. Es importante socializarlos y entrenarlos en obediencia desde una edad temprana, para evitar que se vuelvan reservados con los extraños.
      <br>
      <br>
      En términos de salud, esta raza puede ser propensa a la displasia de cadera. Necesitan suficiente ejercicio mental y físico diario, de lo contrario pueden volverse nerviosos y difíciles de manejar.
      <br>
      <br>
      El Bulldog Americano es un perro de trabajo versátil, un guardián intrépido y constante, y un leal compañero de familia. Aunque es un perro grande, puede adaptarse bien a la vida en un apartamento siempre y cuando se le proporcione suficiente ejercicio. Son relativamente inactivos en interiores y se desempeñarán mejor con un patio de tamaño medio o grande.
      <br>
      <br>
      En resumen, el Bulldog Americano es un perro fuerte, seguro y leal, conocido por su valentía y su amor por los niños. Su apariencia robusta y su fuerte instinto protector lo convierten en un excelente perro de trabajo y un leal compañero de familia.
    `,
    history: `
      La historia del Bulldog Americano es una narrativa de supervivencia y resiliencia que se remonta a los Bulldogs de trabajo en Inglaterra, que se utilizaban para conducir y atrapar ganado y proteger las propiedades de sus dueños. Su fuerza, coraje y familiaridad con el ganado los hicieron populares en el deporte brutal de la pelea de toros. Sin embargo, cuando este deporte fue prohibido en Inglaterra, el tipo original de Bulldog desapareció de Gran Bretaña y fue reemplazado por el perro más corto, más fornido y menos atlético que ahora conocemos como el Bulldog Inglés.
      <br>
      <br>
      El Bulldog original, sin embargo, fue preservado por inmigrantes de la clase trabajadora que trajeron a sus perros de trabajo al sur de los Estados Unidos. Los pequeños agricultores y rancheros utilizaban a este perro de trabajo multifuncional para muchas tareas. Sin embargo, para el final de la Segunda Guerra Mundial, la raza estaba casi extinta. Fue entonces cuando John D. Johnson, un veterano de guerra que regresaba a casa, decidió resucitar esta raza. Junto con Alan Scott y otros criadores, Johnson comenzó a criar Bulldogs Americanos con cuidado, manteniendo registros precisos y siempre con la vista puesta en mantener la salud y las habilidades de trabajo de la raza.
      <br>
      <br>
      Debido a los muchos tipos diferentes de trabajo que esta raza puede hacer, surgieron varias líneas distintas, cada una enfatizando los rasgos necesarios para hacer un trabajo específico. Las líneas más conocidas suelen ser las de Johnson y Scott. Los perros de Scott, comúnmente referidos como 'estándar', son más de un estilo de rendimiento, perros atléticos, más esbeltos en apariencia que los perros bravucones, con menos hueso, hocicos más largos, un stop más moderado y una mordida inferior menos extrema. Hoy en día, sin embargo, muchos Bulldogs Americanos tienen cruces con dos o más de las líneas originales y se consideran de tipo híbrido, con características de más de una de las líneas originales de Bulldogs.
      <br>
      <br>
      Los perros de Johnson, comúnmente referidos como 'bully', son más corpulentos en cuerpo, más pesados en hueso, con cabezas más grandes que tienen más stop, un hocico más corto y una mordida inferior más pronunciada. Generalmente también tienen más masa muscular.
      <br>
      <br>
      El Bulldog Americano moderno continúa sirviendo como un perro de trabajo multifuncional; un perro guardián valiente y constante; y un leal compañero de familia. Gracias a los esfuerzos de John D. Johnson y otros, el Bulldog Americano existe hoy en día.
    `,
    fuentes: []
  },
  11: {
    weight: {
      imperial: '30 - 150',
      metric: '14 - 68',
    },
    height: {
      imperial: '14 - 17',
      metric: '36 - 43',
    },
    id: 11,
    name: 'Bully Americano',
    bred_for: ['Perro de compañía familiar'],
    breed_group: ['No especificado'],
    life_span: '8 – 15 años',
    temperament: [
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
    origin: 'Estados Unidos',
    reference_image_id: 'sqQJDtbpY',
    image: {
      id: 'sqQJDtbpY',
      width: 1024,
      height: 683,
      url: 'https://cdn2.thedogapi.com/images/sqQJDtbpY.jpg',
    },
    searchTerms: [
      'Bully Americano',
      'American Bully',
      'Perro Bully',
      'Bully',
      'Am. Bully',
      'Bully American',
      'Bully dog',
      'American Bully dog',
      'Bully americano perro',
      'Bully perro americano',
      'Bully americano',
      'Bully de america',
      'Perro bully de america',
      'Bully de america perro',
    ],
    country_code: 'US',
    description: `
      El American Bully es una raza de perro que se ha desarrollado a lo largo de los años para convertirse en un compañero de familia ideal. Esta raza se originó en los Estados Unidos en la década de 1990, evolucionando a partir del American Pit Bull Terrier y otras razas de tipo "bully", como el American Bulldog y el Bulldog Inglés. El American Bully fue reconocido oficialmente como una raza por el United Kennel Club (UKC) en 2013.
      <br>
      <br>
      El American Bully es un perro de tamaño mediano a grande, con una apariencia poderosa y musculosa. Su cuerpo es compacto y grueso, con una estructura ósea pesada y una musculatura bien desarrollada. A pesar de su apariencia robusta, el American Bully es conocido por su temperamento amigable y su amor por las personas. Son perros leales, seguros y extremadamente afectuosos con sus familias.
      <br>
      <br>
      La cabeza del American Bully es una de sus características más distintivas. Es grande y ancha, con una parada moderadamente profunda y mejillas musculosas. Los ojos son de tamaño mediano, de forma ovalada a ligeramente redonda, y están bien separados en el cráneo. Los oídos pueden ser naturales o recortados, y se colocan altos en la cabeza.
      <br>
      <br>
      El cuerpo del American Bully es corto y compacto, con un pecho ancho y profundo y costillas bien arqueadas. La espalda es ancha, fuerte y firme, y la línea superior es recta. La cola es corta en comparación con el tamaño del perro, se coloca baja y se afina hasta un punto fino.
      <br>
      <br>
      El pelaje del American Bully es corto, liso, brillante y pegado al cuerpo. Se aceptan todos los colores y patrones de pelaje, excepto el merle. El pelaje es fácil de cuidar y requiere un mínimo de aseo.
      <br>
      <br>
      En cuanto a su salud, es importante tener en cuenta que algunos criadores de Bully dan a sus perros esteroides para producir un cuerpo muscular grande. Cuando se detienen los medicamentos, el cuerpo del perro se reduce a un tamaño normal, pero deja al perro con muchos problemas de salud, incluyendo problemas de órganos y articulaciones. Por lo tanto, es crucial encontrar un criador que no utilice estas prácticas.
      <br>
      <br>
      El American Bully es un perro activo y necesita mucho ejercicio regular, incluyendo un largo paseo diario para aliviar la energía mental y física. Aunque son muy activos en interiores, se adaptarán bien a la vida en un apartamento si se les proporciona suficiente ejercicio. Prefieren climas cálidos y su esperanza de vida es de unos 8-12 años.
      <br>
      <br>
      En resumen, el American Bully es una raza de perro fuerte, activa y afectuosa que hace un excelente perro de familia. Son leales, seguros y aman a las personas, lo que los convierte en una excelente opción para las familias.
    `,
    history: `
      La historia del American Bully es una mezcla de pasión, dedicación y una visión clara para crear una raza de perro que se destaca por su compañerismo y su apariencia única.
      <br>
      <br>
      El American Bully es una raza de perro que se originó en los Estados Unidos en la década de 1980, con el objetivo de desarrollar un perro de compañía y de familia. La raza fue creada con la intención de preservar las características positivas de los Pit Bulls y eliminar las tendencias agresivas. Los criadores querían un perro que tuviera la fuerza y ​​la tenacidad del Pit Bull, pero con un temperamento más relajado y amigable.
      <br>
      <br>
      El American Bully es una raza relativamente nueva, que se desarrolló a mediados de la década de 1990, principalmente a partir de la cría selectiva de los Pit Bull Terriers y, en menor medida, del Staffordshire Bull Terrier y el Bulldog inglés. Los criadores de American Bully, buscaban un perro con una apariencia más robusta y musculosa, pero que mantuviera el buen temperamento y la amabilidad con las personas que se encuentran en muchas de estas razas.
      <br>
      <br>
      La raza fue reconocida por primera vez por el American Bully Kennel Club (ABKC) en 2004, y ha ganado popularidad en los años siguientes. En 2013, el United Kennel Club (UKC) también reconoció al American Bully como una raza distinta. Aunque la raza ha enfrentado críticas y controversias debido a su apariencia intimidante y su asociación con las peleas de perros, los defensores de la raza insisten en que el American Bully es un perro de familia amigable y leal cuando se cría y se socializa adecuadamente.
      <br>
      <br>
      El American Bully se desarrolló como una extensión natural del American Pit Bull Terrier, una raza que ha mantenido una apariencia y temperamento característicos durante más de un siglo. Con el tiempo, varios tipos evolucionaron a partir de la raza madre, con uno en particular asumiendo una estructura y construcción tan únicas que fue prudente reconocerlo como una raza diferente en su totalidad. Esa es la raza American Bully.
      <br>
      <br>
      El American Bully fue influenciado sutilmente por la infusión de varias otras razas, que incluyen el American Bulldog, el Bulldog inglés y el Olde English Bulldogge. Los orígenes del American Bully se pueden ver tanto en la costa este como en la oeste de los Estados Unidos, principalmente en Virginia y Los Ángeles, California, y se está extendiendo a todas partes de los Estados Unidos. Hoy en día, el American Bully también se puede ver en Europa y Asia.
      <br>
      <br>
      El American Bully es reconocible por su estructura y construcción compacta, fuerte y gruesa característica. Su apariencia refleja una sólida base de American Pit Bull Terrier, mezclada con acciones de otras razas de toros. El equilibrio general y las proporciones correctas de un atleta son esenciales, y la solidez absoluta y el tono muscular adecuado son imprescindibles.
      <br>
      <br>
      En resumen, la historia del American Bully es una historia de transformación y evolución. A través de la cría selectiva y un enfoque en las características desLa historia del American Bully es una mezcla de pasión, dedicación y una visión clara para crear una raza de perro que se destaca por su compañerismo y su apariencia única.
    `,
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente perro de compañía',
      'Requiere espacio para jugar y hacer ejercicio',
      'Se lleva bien con los niños',
      'Adecuado para familias activas',
      'Bueno con otras mascotas',
      'Fácil de entrenar',
    ],
    color: ['Multicolor'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita mucho ejercicio y espacio',
      'Necesita estimulación mental',
      'Requiere atención regular al pelaje debido a las posibles alergias',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Alergias a la piel'],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Moderada',
    soporta_clima_frio: 'Moderada',
    soporta_clima_calido: 'Moderada',
    tolerancia_a_la_soledad: '-',
    para_primerizos: 'Baja',
    bueno_con_ninos: '-',
    casos_famosos: [],
  },
  12: {
    weight: {
      imperial: '20 - 40',
      metric: '9 - 18',
    },
    height: {
      imperial: '15 - 19',
      metric: '38 - 48',
    },
    id: 12,
    name: 'Perro Esquimal Americano',
    bred_for: ['Artista de circo'],
    breed_group: ['No deportivo'],
    life_span: '12 - 15 años',
    temperament: [
      'Amistoso',
      'Alerta',
      'Reservado',
      'Inteligente',
      'Protector',
    ],
    origin: 'Estados Unidos',
    reference_image_id: 'Bymjyec4m',
    image: {
      id: 'Bymjyec4m',
      width: 1000,
      height: 802,
      url: 'https://cdn2.thedogapi.com/images/Bymjyec4m.jpg',
    },
    searchTerms: [
      'Perro Esquimal Americano',
      'American Eskimo Dog',
      'Spitz Americano',
      'American Spitz',
      'Perro de circo',
      'Circo dog',
      'Spitz Aleman Americano',
      'American German Spitz',
      'Perro Esquimal',
      'Eskimo Dog',
      'Perro Eskimo',
      'Eskimo Perro',
      'Perro Americano',
      'American Dog',
    ],
    country_code: 'US',
    description: `
      El Perro Esquimal Americano es una raza encantadora que se destaca por su belleza y su naturaleza afectuosa. Esta raza de tamaño pequeño a mediano se asemeja a un Samoyed en miniatura y viene en tres variedades: toy, miniatura y estándar, lo que significa que hay un Eskie para todos los intereses y tamaños de hogar.
      <br>
      <br>
      El Perro Esquimal Americano tiene una cabeza en forma de cuña con un hocico y un cráneo de aproximadamente la misma longitud. Sus orejas son erectas y de forma triangular, y su cola está fuertemente emplumada y se curva sobre la espalda. Su cuello es bien llevado y la línea superior es buena y nivelada. Sus patas y pies buenos permiten al Eskie trotar con una acción audaz y enérgica. Su pelaje profuso es siempre blanco, o blanco con marcas de galleta o crema. Su piel es rosada o gris. El negro es el color preferido de sus párpados, encías, nariz y almohadillas. El pelaje es pesado alrededor del cuello, creando una melena o melena, especialmente en los machos. La raza es ligeramente más larga que alta. El pelaje del Perro Esquimal Americano no debe rizarse ni ondularse; el subpelo debe ser grueso y lujoso con el pelaje exterior más áspero que crece a través de él.
      <br>
      <br>
      El Perro Esquimal Americano es un perro cariñoso y amoroso. Es resistente y juguetón, excelente con los niños. Encantador y alerta. Debido a la alta inteligencia del perro y su disposición a complacer, es fácil de entrenar y a menudo se encuentra entre los mejores anotadores en las pruebas de obediencia. A los Perros Esquimales Americanos les gusta trabajar. Son naturalmente cautelosos con los extraños, pero una vez que se presentan, se convierten en amigos instantáneos.
      <br>
      <br>
      Los Perros Esquimales Americanos necesitan ser parte de la familia con un líder de manada firme, consistente y seguro. Si permites que el perro crea que es el gobernante de tu hogar, surgirán muchos grados de problemas de comportamiento, incluyendo pero no limitado a, ansiedad por separación, ladrido obsesivo, agresividad canina, terquedad y protección. Sin suficiente ejercicio mental y físico, pueden volverse hiperactivos y muy nerviosos, girando en círculos.
      <br>
      <br>
      En cuanto a su tamaño, los Perros Esquimales Americanos vienen en tres tamaños. Los juguetes miden entre 9 y 12 pulgadas y pesan entre 6 y 10 libras. Los miniaturas miden más de 12 hasta 15 pulgadas y pesan entre 10 y 20 libras. Los estándar miden más de 15 pulgadas hasta 19 pulgadas y pesan entre 18 y 35 libras.
      <br>
      <br>
      En cuanto a su salud, son propensos a la displasia de cadera y la atrofia retinal progresiva. Es importante prestar atención a los ojos y los conductos lagrimales. Algunos son alérgicos a las pulgas.
    `,
    history: `
      La historia del Perro Esquimal Americano es una historia de adaptación y supervivencia. A pesar de su nombre, esta raza no tiene nada que ver con la cultura esquimal. De hecho, su origen se encuentra en la Alemania del siglo XIX, donde se criaron para ser perros de granja multipropósito.
      <br>
      <br>
      Los antiguos perros Spitz alemanes, que son los antepasados directos del Perro Esquimal Americano, eran perros de trabajo versátiles en las granjas alemanas. Eran valorados por su inteligencia, su habilidad para el trabajo y su lealtad hacia sus dueños. Estos perros blancos y esponjosos eran excelentes perros guardianes, pastores y tiradores de trineos, y también eran compañeros de familia cariñosos.
      <br>
      <br>
      Los perros Spitz alemanes fueron llevados a América por los inmigrantes alemanes. Sin embargo, durante la Primera Guerra Mundial, debido a los sentimientos anti-alemanes generalizados en los Estados Unidos, el nombre de la raza se cambió a "Perro Esquimal Americano". A pesar del cambio de nombre, la raza no tiene ninguna conexión real con los pueblos esquimales o sus perros.
      <br>
      <br>
      El Perro Esquimal Americano se hizo popular en los Estados Unidos en el siglo XX, especialmente en los años 1930 y 1940. Durante este tiempo, la raza fue a menudo utilizada en actos de circo, donde su inteligencia, agilidad y apariencia llamativa los hacían estrellas de la pista. Estos perros a menudo realizaban trucos complicados, como caminar por la cuerda floja, lo que aumentaba su popularidad entre el público.
      <br>
      <br>
      En 1913, el Sr. y la Sra. F.M. Hall registraron por primera vez la raza con el United Kennel Club (UKC) bajo el nombre de su criadero, "American Eskimo". En 1969, se formó la Asociación Nacional del Perro Esquimal Americano y se cerraron los libros de registro. El objetivo de la asociación era preservar la raza y mantener sus características únicas.
      <br>
      <br>
      El American Kennel Club (AKC) reconoció al Perro Esquimal Americano como una raza distinta en 1995. Hoy en día, la raza es apreciada por su inteligencia, su habilidad para el trabajo y su carácter cariñoso. Aunque ya no se utilizan como perros de trabajo en las granjas, los Perros Esquimales Americanos son excelentes perros de compañía y a menudo se destacan en competencias de obediencia y agilidad.
      <br>
      <br>
      En resumen, la historia del Perro Esquimal Americano es una historia de transformación y adaptación. Aunque su nombre pueda sugerir una conexión con los pueblos esquimales, la raza es en realidad un producto de la Alemania del siglo XIX y de los inmigrantes alemanes en América. A través de los años, estos perros han demostrado ser trabajadores versátiles y compañeros de familia cariñosos, y continúan siendo una raza popular en los Estados Unidos hoy en día.
    `,
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente para compañía',
      'Requiere ejercicio moderado',
      'Bueno con los niños',
      'Es un perro relativamente silencioso',
      'Puede vivir en apartamentos si se le proporciona suficiente ejercicio',
      'Requiere socialización temprana',
    ],
    color: ['Blanco'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio y estimulación mental regular',
      'Necesita cuidado regular del pelaje debido a su pelo espeso',
      'Debe ser socializado desde una edad temprana para prevenir la timidez',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas de oído',
      'Problemas oculares',
    ],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Alta',
    soporta_clima_calido: 'Baja',
    soporta_clima_frio: 'Alta',
    para_primerizos: 'Moderada',
    bueno_con_ninos: 'Moderada',
    tolerancia_a_la_soledad: 'Moderada',
    casos_famosos: [],
    fuentes: [
      "https://en.wikipedia.org/wiki/American_Eskimo_Dog",
      "https://www.akc.org/dog-breeds/american-eskimo-dog/",
      "https://www.royalcanin.com/us/dogs/breeds/breed-library/american-eskimo",
      "https://www.dogbreedinfo.com/americaneskimo.htm",
      "https://www.ukcdogs.com/american-eskimo-dog",
    ]
  },
  13: {
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
    bred_for: ['Compañía'],
    breed_group: ['No deportivo'],
    life_span: '13 – 15 años',
    temperament: [
      'Amistoso',
      'Alerta',
      'Reservado',
      'Inteligente',
      'Protector',
    ],
    origin: 'Estados Unidos',
    reference_image_id: '_gn8GLrE6',
    image: {
      id: '_gn8GLrE6',
      width: 730,
      height: 487,
      url: 'https://cdn2.thedogapi.com/images/_gn8GLrE6.jpg',
    },
    searchTerms: [
      'Perro Esquimal Americano',
      'American Eskimo Dog',
      'American Spitz',
      'German Spitz',
      'Perro de compañía',
      'Perro de circo',
      'Perro Esquimal Americano miniatura',
      'Miniature American Eskimo Dog',
      'Spitz alemán',
      'Spitz americano',
      'Spitz de circo',
      'Perro de circo americano',
      'Perro esquimal',
      'Esquimal americano',
      'Perro esquimal miniatura',
      'Perro esquimal americano miniatura',
    ],
    country_code: 'US',
    description: `
      El Perro Esquimal Americano Miniatura, una versión más pequeña del Perro Esquimal Americano, es una raza que combina una apariencia adorable con una personalidad encantadora. Aunque su tamaño es más pequeño, su carácter y su espíritu son tan grandes como los de sus parientes más grandes.
      <br>
      <br>
      Este perro es compacto y fuerte, con una estructura ósea densa que le da una apariencia robusta a pesar de su tamaño. Su pelaje es una de sus características más notables: es de doble capa, con una capa interna densa y suave y una capa externa más larga y áspera. Este pelaje es blanco o blanco con manchas de color crema y se mantiene erizado, lo que le da al perro una apariencia esponjosa y adorable. Su cola es gruesa y se curva sobre su espalda, a menudo descansando sobre su costado.
      <br>
      <br>
      La cabeza del Perro Esquimal Americano Miniatura es proporcional al cuerpo, con orejas erectas y ojos oscuros y expresivos. Sus ojos son una de las características más atractivas, ya que a menudo parecen estar sonriendo. Su hocico es moderadamente puntiagudo, y su expresión general es de inteligencia y curiosidad.
      <br>
      <br>
      En cuanto a su personalidad, el Perro Esquimal Americano Miniatura es conocido por ser amigable, juguetón y sociable. Aunque puede ser un poco reservado al principio con los extraños, una vez que se siente cómodo, es muy afectuoso y le encanta estar en compañía de su familia humana. Es inteligente y aprende rápidamente, lo que hace que el entrenamiento sea generalmente una experiencia gratificante.
      <br>
      <br>
      A pesar de su pequeño tamaño, este perro tiene una gran cantidad de energía y necesita ejercicio regular para mantenerse feliz y saludable. Le encanta jugar y correr, y se adapta bien a una variedad de actividades, desde caminatas hasta juegos de buscar. Sin embargo, también disfruta de los momentos de tranquilidad y estará contento acurrucándose en el sofá con su dueño después de un día de actividad.
      <br>
      <br>
      El Perro Esquimal Americano Miniatura es una raza versátil que se adapta bien a una variedad de hogares. Puede vivir cómodamente en un apartamento siempre y cuando se le proporcione suficiente ejercicio, y también se adapta bien a las casas con jardín. Aunque es un perro robusto, es sensible al calor debido a su grueso pelaje, por lo que se debe tener cuidado en climas más cálidos.
      <br>
      <br>
      En resumen, el Perro Esquimal Americano Miniatura es una raza encantadora que combina una apariencia adorable con una personalidad amigable y juguetona. Su tamaño compacto lo hace adecuado para una variedad de hogares, pero su gran energía y necesidad de compañía significa que necesita un dueño comprometido que pueda proporcionarle el ejercicio y la atención que necesita.
    `,
    history: `
      La historia del Perro esquimal americano (miniatura) es fascinante y está llena de giros y vueltas. Esta raza, aunque lleva el nombre de "americano", tiene sus raíces en el norte de Europa, donde los Spitz más pequeños se desarrollaron en varias razas alemanas de Spitz. Los inmigrantes europeos trajeron sus mascotas Spitz a los Estados Unidos, especialmente a Nueva York, a principios del siglo XX. Estos perros eran descendientes del Spitz alemán más grande, el Keeshond, el Pomerania blanco y el Spitz italiano, el Volpino Italiano.
      <br>
      <br>
      El color blanco, aunque no siempre fue un color reconocido en las diversas razas de Spitz alemanas, era generalmente el color preferido en los Estados Unidos. En un acto de patriotismo en la era de la Primera Guerra Mundial, los dueños de perros comenzaron a referirse a sus mascotas como Spitz americanos en lugar de Spitz alemanes.
      <br>
      <br>
      Después de la Primera Guerra Mundial, los pequeños perros Spitz llamaron la atención del público estadounidense cuando los perros se convirtieron en populares artistas en el circo estadounidense. En 1917, el Circo de los Hermanos Cooper presentó a los perros. Un perro llamado Stout's Pal Pierre se hizo famoso por caminar por la cuerda floja con el Circo Barnum y Bailey en la década de 1930, y también contribuyó a su popularidad, vendieron cachorros después del espectáculo. Debido a la popularidad de los perros de circo, muchos de los perros esquimales americanos de hoy pueden rastrear su linaje hasta estos perros de circo.
      <br>
      <br>
      Después de la Segunda Guerra Mundial, los perros continuaron siendo mascotas populares. El contacto posterior a la guerra con Japón llevó a la importación a los Estados Unidos del Spitz japonés, que puede haber sido cruzado con la raza en este momento. La raza fue reconocida oficialmente como "American Eskimo" ya en 1919 por el American United Kennel Club (UKC), y el primer registro escrito e historia de la raza se imprimió en 1958 por el UKC. En ese momento no había un club oficial de la raza ni un estándar de la raza, y los perros eran aceptados para el registro como perros individuales, basados en su apariencia. En 1970 se fundó la National American Eskimo Dog Association (NAEDA), y se dejaron de registrar perros individuales. En 1985 se formó el American Eskimo Dog Club of America (AEDCA) por aficionados que deseaban registrar la raza con el American Kennel Club (AKC). Siguiendo los requisitos del AKC para el reconocimiento de la raza, el AEDCA recopiló la información de pedigrí de 1.750 perros que ahora forman la base de la raza reconocida por el AKC, que se llama Perro esquimal americano. La raza fue reconocida por el American Kennel Club en 1995.
      <br>
      <br>
      El libro de cría se abrió de 2000 a 2003 en un intento de registrar más de las líneas registradas originales del UKC, y hoy muchos perros esquimales americanos pueden rastrear su linaje hasta estas líneas originales. Este esfuerzo por preservar la pureza de la raza y asegurar su futuro ha sido un aspecto importante de la historia de la raza.
      <br>
      <br>
      Aunque la raza es conocida como "Perro esquimal americano", hay tres tamaños reconocidos: el tamaño estándar, el tamaño miniatura y el tamaño de juguete. El tamaño miniatura, que es el que nos interesa, se desarrolló a partir del tamaño estándar pero se crió para ser más pequeño sin perder ninguna de las características físicas o temperamentales de la raza.
      <br>
      <br>
      A lo largo de los años, el Perro esquimal americano (miniatura) ha mantenido su popularidad y sigue siendo una opción popular para las familias y los individuos. Su tamaño manejable, su pelaje blanco y esponjoso, y su personalidad amigable y juguetona lo hacen atractivo para muchos. Aunque la raza ha tenido una historia interesante y a veces complicada, el amor y la dedicación de los criadores y dueños de perros han asegurado que el Perro esquimal americano (miniatura) siga siendo una raza querida y respetada en el mundo de los perros.
    `,
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Compañía agradable',
      'Amistoso',
      'Inteligente',
      'Requiere ejercicio moderado',
      'Bueno para la vida en apartamentos',
    ],
    color: ['Blanco'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Necesita cuidado regular del pelaje debido a su pelo espeso',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Problemas oculares', 'Problemas dentales'],
    tolerancia_a_la_soledad: 'Baja',
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Moderada',
    soporta_clima_calido: 'Baja',
    soporta_clima_frio: 'Alta',
    para_primerizos: '-',
    bueno_con_ninos: 'Alta',
    fuentes: [
      "https://en.wikipedia.org/wiki/American_Eskimo_Dog",
      "https://www.akc.org/dog-breeds/american-eskimo-dog/",
      "https://www.royalcanin.com/us/dogs/breeds/breed-library/american-eskimo",
      "https://www.dogbreedinfo.com/a/americaneskimo.htm",
      "https://www.ukcdogs.com/american-eskimo-dog",
    ],
    casos_famosos: [],
  },
  14: {
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
    bred_for: ['Caza de zorros', 'Perro rastreador'],
    breed_group: ['Sabueso'],
    life_span: '8 - 15 años',
    temperament: [
      'Amable',
      'De temperamento dulce',
      'Leal',
      'Independiente',
      'Inteligente',
      'Cariñoso',
    ],
    origin: 'Estados Unidos',
    reference_image_id: 'S14n1x9NQ',
    image: {
      id: 'S14n1x9NQ',
      width: 3000,
      height: 2400,
      url: 'https://cdn2.thedogapi.com/images/S14n1x9NQ.jpg',
    },
    searchTerms: [
      'Sabueso americano',
      'sabueso americano',
      'American Foxhound',
      'american foxhound',
      'Foxhound',
      'foxhound',
      'sabueso de america',
      'Sabueso de America',
      'perro sabueso americano',
      'Perro Sabueso Americano',
      'perro de caza americano',
      'Perro de Caza Americano',
    ],
    country_code: 'US',
    description: `
      El Sabueso Americano, también conocido como American Foxhound, es una raza que combina elegancia y resistencia, diseñada para perseguir con tenacidad y velocidad. Este perro es un cazador nato, con un agudo sentido del olfato y una energía inagotable que lo hace ideal para largas jornadas de caza.
      <br>
      <br>
      Su apariencia es de un perro grande y atractivo, con patas delanteras largas y muy rectas. Su cabeza es larga con un cráneo ligeramente abovedado y grande. Sus orejas son amplias y colgantes, enmarcando su rostro. Los ojos son grandes y separados, de color marrón o avellana, con una expresión dulce y suplicante. La cola se coloca moderadamente alta con una ligera curva hacia arriba, pero no se dobla hacia adelante sobre la espalda. Su pelaje es corto y duro, y puede ser de cualquier color.
      <br>
      <br>
      El Sabueso Americano es un perro dulce, afectuoso, gentil y amoroso en casa, pero también un guerrero valiente e intenso en la caza. Son excelentes con los niños y se llevan bien con otros perros debido a su trasfondo de caza en manada, pero no deben confiarse con mascotas no caninas. La amabilidad con los extraños varía ampliamente. Son perros muy amigables, sin embargo, si a un perro en particular se le permite verse a sí mismo como el líder de la manada para los humanos, puede volverse protector.
      <br>
      <br>
      Este perro es extremadamente enérgico e incansable. Es muy importante que haga ejercicio diario vigoroso para prevenir la inquietud extrema en interiores. Esta raza no debe ser adoptada como mascota familiar a menos que la familia pueda garantizar una gran cantidad de ejercicio vigoroso. Necesitan ser llevados a diario a un paseo, trote o carrera largo y enérgico, junto a usted cuando va en bicicleta.
      <br>
      <br>
      El Sabueso Americano es una raza bastante saludable, libre de muchas enfermedades genéticas, como problemas de cadera y huesos, que afectan a otras razas grandes. Sin embargo, tienden a ganar peso fácilmente, por lo que es importante no sobrealimentarlos.
      <br>
      <br>
      En cuanto a su alojamiento, los Sabuesos Americanos no se recomiendan para la vida en apartamentos. Son muy activos en interiores y se desempeñan mejor con un terreno amplio.
      <br>
      <br>
      En resumen, el Sabueso Americano es un perro de trabajo que necesita mucho ejercicio y estimulación mental. Son perros leales y cariñosos que pueden ser excelentes compañeros para las personas adecuadas. Sin embargo, requieren un dueño que pueda proporcionarles el ejercicio y la disciplina que necesitan.
    `,
    history: `
      La historia del Sabueso Americano, también conocido como American Foxhound, es una narrativa fascinante que se entrelaza con la historia misma de los Estados Unidos. Este perro, que es un descendiente directo de los sabuesos ingleses, fue desarrollado en la América colonial. Los primeros ejemplares de esta raza llegaron a América en 1650, y más de un siglo después, se refinaron con la ayuda de sabuesos irlandeses, franceses y de otras razas.
      <br>
      <br>
      Uno de los personajes más emblemáticos en la historia de esta raza es nada menos que George Washington, el primer presidente de los Estados Unidos. Washington recibió como regalo un sabueso francés de parte de Lafayette, un regalo que utilizó para mejorar su programa de cría. Los diarios de Washington a menudo mencionan a los sabuesos, lo que nos da una idea de cuán importante era esta raza para él.
      <br>
      <br>
      En el siglo XVII, estos perros se utilizaron para buscar indígenas. Sin embargo, con el tiempo, se convirtieron en cazadores eficientes y tenaces de animales salvajes. Los Sabuesos Americanos tienen una excelente nariz, son muy rápidos cuando persiguen a su presa y poseen una gran resistencia para correr. Su ladrido musical es tan característico que incluso se ha utilizado en canciones populares.
      <br>
      <br>
      Aunque el Sabueso Americano todavía se utiliza principalmente como perro de caza y de prueba de campo, tanto en manadas como solo, también ha tenido éxito como perro de compañía para aquellos propietarios que proporcionan suficiente ejercicio y actividades. La raza fue reconocida por el United Kennel Club en 1905.
      <br>
      <br>
      La historia del Sabueso Americano es un testimonio de la evolución de la cría de perros en América, desde los primeros días de la colonia hasta el presente. Esta raza, que comenzó como una herramienta de caza y supervivencia, se ha convertido en un compañero amado y valorado en muchos hogares de todo el país. A través de los años, el Sabueso Americano ha demostrado ser un perro versátil, capaz de adaptarse a una variedad de roles, desde cazador incansable hasta leal amigo de la familia.
    `,
    categoria_de_tamanio: 'Grande',
    perks: [
      'Excelente para la caza',
      'Bueno como perro rastreador',
      'Amable y dulce',
      'Leal y cariñoso con la familia',
      'Independiente',
      'Inteligente',
    ],
    color: ['Tricolor', 'Bicolor', 'Unicolor'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita mucho ejercicio',
      'Requiere espacio para correr',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Hipotiroidismo', 'Otitis'],
    tendencia_a_ladrar: 'Alta',
    necesidad_de_aseo: 'Baja',
    soporta_clima_calido: 'Moderada',
    soporta_clima_frio: 'Moderada',
    tolerancia_a_la_soledad: 'Moderada',
    para_primerizos: 'Baja',
    bueno_con_ninos: 'Alta',
    fuentes: [
      'https://www.akc.org/dog-breeds/american-foxhound/',
      'https://www.dogbreedinfo.com/americanfoxhound.htm',
    ],
    casos_famosos: [],
  },
  15: {
    weight: {
      imperial: '30 - 60',
      metric: '14 - 27',
    },
    height: {
      imperial: '17 - 21',
      metric: '43 - 53',
    },
    id: 15,
    name: 'Terrier Americano Pit Bull',
    bred_for: ['Combates'],
    breed_group: ['Terrier'],
    life_span: '10 - 15 años',
    temperament: [
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
    origin: 'Estados Unidos',
    reference_image_id: 'HkC31gcNm',
    image: {
      id: 'HkC31gcNm',
      width: 300,
      height: 244,
      url: 'https://cdn2.thedogapi.com/images/HkC31gcNm.png',
    },
    searchTerms: [
      'Terrier Americano Pit Bull',
      'Pit Bull',
      'American Pit Bull',
      'Pitbull',
      'Pit Bull Terrier',
      'American Pitbull Terrier',
      'Pitbull Americano',
      'Pit Bull Americano',
      'Terrier Pit Bull',
      'Pit Bull Terrier Americano',
      'Pitbull Terrier',
      'Terrier Pitbull',
      'American Pit Bull Terrier',
    ],
    country_code: 'US',
    description: `
        El Terrier Americano Pit Bull es una raza de perro que combina fuerza y agilidad con gracia y destreza. Este perro de tamaño mediano es sólidamente construido, con una musculatura suave y bien definida. Su cuerpo es ligeramente más largo que alto, y su cabeza es de longitud media, con un cráneo ancho y plano, y un hocico ancho y profundo. Sus ojos son de tamaño mediano y redondos, y sus orejas son pequeñas a medianas, altas y pueden ser naturales o cortadas.
        <br>
        <br>
        El Pit Bull es conocido por su fuerza, confianza y entusiasmo por la vida. Esta raza está ansiosa por complacer y rebosa de entusiasmo. Los Pit Bulls hacen excelentes compañeros de familia y siempre han sido notados por su amor por los niños. Debido a que la mayoría de los Pit Bulls muestran algún nivel de agresión hacia otros perros y debido a su poderosa constitución física, requieren un dueño que socialice y entrene al perro con cuidado. La agilidad natural de la raza la convierte en una de las razas caninas más capaces de trepar, por lo que una buena valla es imprescindible para esta raza. El Pit Bull no es la mejor opción para un perro guardián, ya que son extremadamente amigables, incluso con extraños. El comportamiento agresivo hacia los humanos es atípico de la raza y muy indeseable.
        <br>
        <br>
        El Pit Bull tiene una cabeza única y es un elemento clave del tipo de raza. Es grande y ancha, dando la impresión de gran poder, pero no es desproporcionada al tamaño del cuerpo. Vista desde el frente, la cabeza tiene forma de cuña ancha y romo. Cuando se ve desde el lado, el cráneo y el hocico son paralelos entre sí y se unen por un stop bien definido y moderadamente profundo. Los arcos supraorbitales sobre los ojos están bien definidos pero no son pronunciados. La cabeza está bien cincelada, combinando fuerza, elegancia y carácter.
        <br>
        <br>
        El pecho del Pit Bull es profundo, bien lleno y moderadamente ancho, con suficiente espacio para el corazón y los pulmones. Las costillas se extienden bien hacia atrás y están bien arqueadas desde la columna vertebral, luego se aplanan para formar un cuerpo profundo que se extiende hasta los codos. La espalda es fuerte y firme. La línea superior se inclina muy ligeramente hacia abajo desde la cruz hasta una espalda ancha, muscular y nivelada. La grupa se inclina ligeramente hacia abajo.
        <br>
        <br>
        La cola del Pit Bull es una extensión natural de la línea superior y se estrecha hasta un punto. Cuando el perro está relajado, la cola se lleva baja y se extiende aproximadamente hasta el corvejón. Cuando el perro está en movimiento, la cola se lleva al nivel de la línea de la espalda. Cuando el perro está emocionado, la cola puede llevarse en una posición erguida y levantada, pero nunca se curva sobre la espalda.
        <br>
        <br>
        El pelaje del Pit Bull es brillante y suave, cerrado y moderadamente rígido al tacto. El Pit Bull viene en todos los colores y patrones de color, excepto el merle. Este perro es tanto poderoso como ágil, y su apariencia general combina fuerza y atletismo con gracia y agilidad. Nunca debe parecer voluminoso o con músculos excesivos, ni tampoco de huesos finos y larguirucho.
        <br>
        <br>
        En cuanto a su tamaño, el peso deseable para un macho maduro en buenas condiciones es entre 35 y 60 libras. El peso deseable para una hembra madura en buenas condiciones es entre 30 y 50 libras. Como una guía general y aproximada, la altura deseable para los machos maduros es de 18 a 21 pulgadas en la cruz; para las hembras maduras, es de 17 a 20 pulgadas en la cruz. Es importante tener en cuenta que los perros que están por encima o por debajo de estos rangos de peso y altura no deben ser penalizados a menos que sean desproporcionadamente masivos o larguiruchos.
        <br>
        <br>
        En resumen, el Terrier Americano Pit Bull es una raza de perro que es tan poderosa como ágil, y que combina fuerza y atletismo con gracia y agilidad. Su apariencia general, su cabeza única, su pecho profundo y bien lleno, su espalda fuerte y firme, su cola naturalmente extendida y su amplia gama de colores y patrones de pelaje hacen de esta raza una de las más reconocibles y admiradas.
      `,
    history: `
      La historia del Terrier Americano Pit Bull es una narrativa de fuerza, coraje y versatilidad. Esta raza tiene sus raíces en el siglo XIX, cuando los amantes de los perros en Inglaterra, Irlanda y Escocia comenzaron a experimentar con cruces entre Bulldogs y Terriers. Buscaban un perro que combinara la valentía del terrier con la fuerza y el atletismo del Bulldog. El resultado fue un perro que encarnaba todas las virtudes atribuidas a los grandes guerreros: fuerza, coraje indomable y gentileza con sus seres queridos.
      <br>
      <br>
      Los inmigrantes trajeron estos cruces de bull-and-terrier a los Estados Unidos, donde sus talentos no pasaron desapercibidos para los granjeros y rancheros. Utilizaban a sus Terrier Americano Pit Bull como perros de captura para el ganado semi-salvaje y los cerdos, para cazar, para conducir el ganado y como compañeros de familia. Hoy en día, el Terrier Americano Pit Bull sigue demostrando su versatilidad, compitiendo con éxito en Obediencia, Rally Obediencia, Rastreo, Agilidad, Lure Coursing, Salto de Muelle y Tiro de Peso, así como en Conformación.
      <br>
      <br>
      El United Kennel Club fue el primer registro en reconocer al Terrier Americano Pit Bull. El fundador del UKC, C. Z. Bennett, asignó el número de registro 1 del UKC a su propio APBT, Bennett's Ring, en 1898.
      <br>
      <br>
      A lo largo de los años, la raza ha mantenido su tipo durante más de 150 años, siendo un perro físicamente activo, muscular y muy ágil. Cualquier desviación de estas características se considera un defecto, y la gravedad con la que se debe considerar el defecto debe estar en proporción exacta a su grado y su efecto sobre la salud y el bienestar del perro y sobre la capacidad del perro para realizar su trabajo tradicional.
      <br>
      <br>
      En resumen, la historia del Terrier Americano Pit Bull es una historia de adaptabilidad y resistencia. Desde sus orígenes en las Islas Británicas hasta su desarrollo en América, esta raza ha demostrado ser capaz de desempeñar una variedad de roles, desde perro de trabajo hasta compañero de familia. A lo largo de los años, el Terrier Americano Pit Bull ha demostrado ser un perro de gran corazón y espíritu indomable, siempre dispuesto a afrontar cualquier desafío que se le presente.
    `,
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente protector del hogar',
      'Adaptable a la vida familiar',
      'Requiere ejercicio regular',
    ],
    color: ['Negro', 'Blanco', 'Marrón'], // Colores más comunes para esta raza
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Necesita socialización temprana',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Alergias',
      'Problemas cardíacos',
    ],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Baja',
    soporta_clima_frio: 'Moderada',
    soporta_clima_calido: 'Moderada',
    tolerancia_a_la_soledad: 'Baja',
    para_primerizos: 'Baja',
    bueno_con_ninos: 'Alta',
    casos_famosos: [
      {
        nombre: 'Petey',
        caso: "Perro famoso de la serie de televisión 'The Little Rascals'",
      },
    ],
    fuentes: [
      'https://www.akc.org/dog-breeds/american-pit-bull-terrier/',
      'https://www.ukcdogs.com/american-pit-bull-terrier',
    ],
  },
  16: {
    weight: {
      imperial: '50 - 60',
      metric: '23 - 27',
    },
    height: {
      imperial: '17 - 19',
      metric: '43 - 48',
    },
    id: 16,
    name: 'Terrier Americano Staffordshire',
    bred_for: ['Guardia', 'Compañía'],
    breed_group: ['Terrier'],
    life_span: '12 - 15 años',
    temperament: ['Tenaz', 'Amistoso', 'Devoto', 'Leal', 'Atento', 'Valiente'],
    origin: 'Estados Unidos',
    reference_image_id: 'rJIakgc4m',
    image: {
      id: 'rJIakgc4m',
      width: 357,
      height: 500,
      url: 'https://cdn2.thedogapi.com/images/rJIakgc4m.jpg',
    },
    searchTerms: [
      'Terrier Americano Staffordshire',
      'American Staffordshire Terrier',
      'AmStaff',
      'Staffordshire Terrier',
      'Staffy',
      'Staffie',
      'American Staffy',
      'Terrier americano',
      'Staffordshire americano',
      'Terrier de Staffordshire americano',
      'Terrier americano de staffordshire',
      'Terrier staffordshire americano',
    ],
    country_code: 'US',
    description: `
      El Terrier Americano Staffordshire, también conocido como AmStaff, es una raza de perro que combina fuerza, gracia y confianza en un paquete compacto. Son perros de tamaño mediano, con una altura que varía entre 43 y 48 cm en las hembras y entre 46 y 48 cm en los machos. El peso de un AmStaff adulto puede variar entre 28 y 40 kg, dependiendo del tamaño y la constitución del perro.
      <br>
      <br>
      El AmStaff es un perro musculoso y bien definido, con una apariencia fuerte y robusta. Su cabeza es ancha, con mejillas pronunciadas y una mandíbula fuerte y poderosa. Los ojos son oscuros y redondos, y están bien separados entre sí. Las orejas son altas en la cabeza y pueden ser naturales o cortadas, aunque muchas personas prefieren dejarlas naturales. La cola es corta en comparación con el tamaño del cuerpo y se estrecha hacia la punta.
      <br>
      <br>
      El pelaje del AmStaff es corto, denso y brillante, y puede venir en una amplia variedad de colores y patrones. Los colores pueden variar desde el blanco hasta el negro, pasando por el rojo, el azul, el marrón y el atigrado. Algunos AmStaffs pueden tener marcas blancas en el pecho, la cara o los pies.
      <br>
      <br>
      En cuanto a su personalidad, los AmStaffs son conocidos por su valentía, tenacidad y lealtad. Son perros inteligentes y versátiles que pueden ser entrenados para una variedad de tareas, desde la obediencia básica hasta deportes caninos como el agility y el weight pull. A pesar de su apariencia intimidante, los AmStaffs son perros amables y cariñosos que se llevan bien con las personas y son excelentes con los niños. Sin embargo, pueden ser reservados con los extraños y pueden ser agresivos con otros perros, especialmente del mismo sexo.
      <br>
      <br>
      Los AmStaffs son perros activos que requieren mucho ejercicio para mantenerse saludables y felices. Necesitan al menos una hora de ejercicio vigoroso al día, que puede incluir paseos, juegos de buscar y traer, y sesiones de entrenamiento. También son perros inteligentes que disfrutan de los desafíos mentales, por lo que los juegos de rompecabezas y el entrenamiento de obediencia pueden ser una buena manera de mantener su mente aguda.
      <br>
      <br>
      En cuanto a su salud, los AmStaffs son generalmente perros saludables, pero como todas las razas, pueden ser propensos a ciertas condiciones genéticas. Algunas de las condiciones de salud más comunes en los AmStaffs incluyen la displasia de cadera, problemas cardíacos y alergias de piel. Es importante que los propietarios potenciales trabajen con un criador responsable que pruebe la salud de sus perros reproductores para estas y otras condiciones.
      <br>
      <br>
      En resumen, el Terrier Americano Staffordshire es una raza de perro fuerte, leal y cariñosa que puede hacer un excelente compañero para la persona o familia adecuada. Son perros activos y inteligentes que requieren un dueño comprometido que esté dispuesto a dedicar tiempo y energía a su cuidado y entrenamiento
    `,
    history: `
      La historia del Terrier Americano Staffordshire, también conocido como AmStaff, es una historia de evolución y adaptación. Esta raza se originó en el siglo XIX en la región de Staffordshire, Inglaterra, donde se cruzaron Bulldogs y varios terriers para desarrollar un perro muscular, activo y combativo conocido como el Staffordshire Bull Terrier.
      <br>
      <br>
      Cuando estos perros fueron llevados a los Estados Unidos, los criadores americanos prefirieron una versión más grande y pesada, con una cabeza más poderosa. Así nació el American Staffordshire Terrier, reconocido ahora como una raza separada de su primo británico, el Staffordshire Bull Terrier.
      <br>
      <br>
      Después de que las peleas de perros fueron prohibidas en los Estados Unidos en 1900, se desarrollaron dos cepas de estos perros: una cepa de exposición y una cepa no destinada a exposiciones. La cepa de exposición fue etiquetada como el American Staffordshire Terrier, mientras que la cepa no destinada a exposiciones fue etiquetada como el American Pit Bull Terrier. Aunque inicialmente se consideraban la misma raza, ahora se reconocen como razas separadas.
      <br>
      <br>
      A lo largo de los años, los criadores han trabajado diligentemente para suavizar la naturaleza combativa de estos perros, enfocándose en criar perros que son amigables, confiables y excelentes con los niños. Como resultado, el American Staffordshire Terrier de hoy es un perro valiente, inteligente y lleno de vida, conocido por su lealtad y afecto hacia su familia humana.
      <br>
      <br>
      El American Staffordshire Terrier fue reconocido por el American Kennel Club (AKC) en 1936. Desde entonces, la raza ha demostrado ser versátil y capaz en una variedad de roles, desde perros guardianes hasta perros de terapia, y ha ganado popularidad en eventos de obediencia y agilidad.
      <br>
      <br>
      A pesar de su historia y de las controversias que a veces rodean a la raza, el American Staffordshire Terrier ha demostrado ser un perro familiar leal y cariñoso, un guardián valiente y un competidor entusiasta en una variedad de deportes caninos. Con la socialización y el entrenamiento adecuados, estos perros pueden ser excelentes compañeros y miembros valiosos de la comunidad.
    `,
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente perro de guardia',
      'Adaptable a la vida familiar',
      'Requiere ejercicio regular',
    ],
    color: ['Negro', 'Blanco', 'Atigrado'], // Colores más comunes para esta raza
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Necesita socialización temprana',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Alergias',
      'Problemas cardíacos',
    ],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Moderada',
    soporta_clima_frio: 'Moderada',
    soporta_clima_calido: 'Moderada',
    tolerancia_a_la_soledad: 'Baja',
    para_primerizos: 'Baja',
    bueno_con_ninos: 'Alta',
    casos_famosos: [
      {
        nombre: 'Stubby',
        caso: 'Un Terrier Americano Staffordshire llamado Stubby alcanzó el rango de Sargento y fue el perro más condecorado de la Primera Guerra Mundial.',
      },
    ],
    fuentes: ['https://www.akc.org/dog-breeds/american-staffordshire-terrier/'],
  },
  17: {
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
    bred_for: ['Búsqueda y recuperación de aves'],
    breed_group: ['Deportivo'],
    life_span: '10 - 12 años',
    temperament: [
      'Amistoso',
      'Enérgico',
      'Obediente',
      'Inteligente',
      'Protector',
      'Adiestrable',
    ],
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
      'spaniel de agua americano',
      'American Water Spaniel',
      'american water spaniel',
      'AWS',
      'aws',
      'Spaniel de Agua',
      'spaniel de agua',
      'American Spaniel',
      'american spaniel',
      'Spaniel Americano',
      'spaniel americano',
      'Perro de agua americano',
      'perro de agua americano',
      'Perro spaniel americano',
      'perro spaniel americano',
    ],
    country_code: 'US',
    description: `
    El Spaniel de Agua Americano es un perro de caza de tamaño moderado, que pesa entre 11 y 20 kg, y mide entre 36 y 46 cm de altura. Este perro compacto tiene un pelaje rizado que varía en tonos de marrón oscuro a hígado. Su cola, de longitud moderada, está cubierta de pelo y se curva ligeramente, asemejándose a una mecedora.
    <br>
    <br>
    La cabeza del Spaniel de Agua Americano es bastante ancha y llena, de longitud moderada, con un stop moderadamente definido. Su hocico es de longitud media y cuadrado, sin tendencia a ser puntiagudo. Los ojos, bien separados y algo redondos, varían en color desde amarillo claro hasta marrón oscuro, dependiendo del color del pelaje. Las orejas, largas, anchas y lobulares, están cubiertas de rizos y se sitúan ligeramente por encima del nivel de los ojos.
    <br>
    <br>
    Este perro es robusto y musculoso, con un cuello redondo y de longitud media, fuerte y sin papada. Sus hombros son inclinados y musculosos, y sus patas delanteras son de longitud media, poderosas, bien huesudas y razonablemente rectas. El cuerpo del Spaniel de Agua Americano está bien desarrollado y robustamente construido, pero no demasiado compacto. Su pecho es profundo, pero no excesivamente ancho, y sus costillas están bien arqueadas.
    <br>
    <br>
    El Spaniel de Agua Americano es un perro trabajador y activo, con una buena nariz y un amor por el agua. Es un trabajador ocupado, ansioso por complacer y fácil de entrenar. Es un perro amigable, enérgico, seguro de sí mismo, persistente y obediente, que es altamente sensible, por lo que el entrenamiento de obediencia debe ser tranquilo, firme, silencioso y persuasivo, en lugar de exigente o agudo.
    <br>
    <br>
    Este perro es un nadador entusiasta y hace un maravilloso cazador en aguas difíciles, en el bosque y en terrenos desiguales. Le encanta la atención, pero también puede entretenerse a sí mismo. Algunos Spaniels de Agua Americanos roncan. Si al perro le falta ejercicio físico y/o mental diario, tiende a ladrar y aullar y puede ser a veces hiperactivo o demasiado emocionado.
    <br>
    <br>
    El pelaje del Spaniel de Agua Americano debe ser rizado o tener un efecto marcel y debe ser de suficiente densidad (y textura) para proteger contra los elementos. El color del pelaje es sólido, hígado o chocolate oscuro. Se permite un poco de blanco en los dedos de los pies o en el pecho.
    <br>
    <br>
    En cuanto a su salud, algunas líneas de esta raza son propensas a problemas de piel. Sin embargo, con el cuidado y la atención adecuados, estos perros pueden vivir de 12 a 15 años.
    <br>
    <br>
    En resumen, el Spaniel de Agua Americano es un perro de caza versátil y resistente que es igualmente adecuado para ser un compañero de familia. Su tamaño moderado, junto con su naturaleza amigable y su amor por el agua, lo convierten en una excelente opción para aquellos que viven cerca de cuerpos de agua o que disfrutan de actividades al aire libre.
    `,
    history: `
    La historia del Spaniel de Agua Americano es tan fascinante como la raza misma. Este perro fue desarrollado en los Estados Unidos, específicamente en la región de los Grandes Lagos, durante el siglo XIX. Aunque no se conoce con exactitud su origen, se cree que sus antecesores incluyen al Spaniel de Agua Irlandés y al Retriever de Pelo Rizado.
    <br>
    <br>
    El Spaniel de Agua Americano fue criado para ser un perro de caza y granja versátil. Fue el primer perro desarrollado en los Estados Unidos que podía recuperar presas desde botes y también cazar. Este perro demostró ser un excelente cazador de aves en los bosques, pantanos, lagos y ríos. Su boca suave y su fino olfato lo convirtieron en un perro de caza sobresaliente. Además, es un excelente nadador, capaz de nadar bien incluso en aguas turbulentas, utilizando su cola como timón.
    <br>
    <br>
    El Spaniel de Agua Americano fue reconocido por el American Kennel Club (AKC) en 1940. Sin embargo, es probable que hubiera sido reconocido antes si no fuera por los entusiastas de la raza que temían que el reconocimiento pudiera arruinar la reputación de la raza como excelente cazador. A pesar de su reconocimiento, el Spaniel de Agua Americano es considerado una raza rara. En 1990, sólo se registraron alrededor de 270 perros con el AKC, pero se cree que nacieron más perros de líneas de caza que no fueron registrados, sin mencionar aquellos que fueron registrados con otros clubes además del AKC.
    <br>
    <br>
    Hoy en día, el Spaniel de Agua Americano es apreciado tanto por su habilidad para cazar como por su carácter amigable y su adaptabilidad como perro de compañía. Aunque su número puede ser pequeño en comparación con otras razas, su impacto en los corazones de aquellos que tienen la suerte de compartir su vida con un Spaniel de Agua Americano es inmenso. De hecho, el estado de Wisconsin ha reconocido al Spaniel de Agua Americano como su perro estatal, un testimonio de la importancia de esta raza en la historia y la cultura de la región.
    <br>
    <br>
    En resumen, la historia del Spaniel de Agua Americano es la historia de un perro de trabajo versátil y resistente que ha demostrado ser un cazador excepcional y un compañero de familia amado. Aunque su número puede ser pequeño, su legado es grande y sigue siendo una parte importante de la historia canina de América.
    `,
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Perro de trabajo versátil',
      'Bueno para familias activas',
      'Buen nadador',
    ],
    color: ['Marrón', 'Chocolate', 'Marrón claro'], // Colores más comunes para esta raza
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Necesita estimulación mental',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas de tiroides',
      'Problemas oculares',
    ],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Moderada',
    soporta_clima_frio: 'Alta',
    soporta_clima_calido: 'Moderada',
    para_primerizos: 'Moderada',
    bueno_con_ninos: 'Alta',
    tolerancia_a_la_soledad: 'Baja',
    casos_famosos: [],
    fuentes: [
      'https://www.akc.org/dog-breeds/american-water-spaniel/',
      'https://en.wikipedia.org/wiki/American_Water_Spaniel',
      'https://www.yourpurebredpuppy.com/reviews/americanwaterspaniels.html',
    ],
  },
  18: {
    weight: {
      imperial: '48 - 55',
      metric: '22 - 25',
    },
    height: {
      imperial: '20 - 22',
      metric: '51 - 56',
    },
    id: 18,
    name: 'Appenzeller Sennenhund',
    bred_for: ['Pastoreo de ganado', 'Tirar de carros', 'Proteger la granja'],
    breed_group: ['Pastor'],
    life_span: '12 – 14 años',
    temperament: [
      'Confiable',
      'Intrépido',
      'Enérgico',
      'Vivo',
      'Seguro de sí mismo',
    ],
    origin: 'Suiza',
    reference_image_id: 'HkNkxlqEX',
    image: {
      id: 'HkNkxlqEX',
      width: 400,
      height: 600,
      url: 'https://cdn2.thedogapi.com/images/HkNkxlqEX.jpg',
    },
    country_code: 'CH',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente perro de trabajo',
      'Buen perro guardián',
      'Energético y amante de las actividades al aire libre',
    ],
    color: ['Negro', 'Marrón', 'Blanco'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Excelente',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio diario intenso',
      'Requiere entrenamiento de socialización desde una edad temprana',
      'Requiere una dieta balanceada para mantener su energía',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Dilatación gástrica volvulus (GDV)',
      'Displasia de codo',
    ],
    description: `
      El Appenzeller Sennenhund, también conocido como el perro de montaña Appenzell, es una raza de perro de trabajo de tamaño mediano que se originó en Suiza. Este perro robusto y bien musculado es conocido por su agilidad y resistencia, lo que lo hace ideal para una variedad de tareas de trabajo, incluyendo la conducción de ganado, el pastoreo y el tirar de carros.
      <br>
      <br>
      El Appenzeller Sennenhund tiene una altura que varía entre 47 a 58 cm para las hembras y de 50 a 60 cm para los machos. Su peso oscila entre 22 a 32 kg para las hembras y de 25 a 32 kg para los machos. Esta raza tiene un cuerpo compacto y fuerte, con una espalda recta y una cola que se lleva enrollada sobre la espalda cuando el perro está en movimiento o excitado.
      <br>
      <br>
      El pelaje del Appenzeller Sennenhund es denso, grueso y brillante, lo que le proporciona una excelente protección contra las inclemencias del tiempo. Los colores del pelaje pueden variar, pero los más comunes son el negro o el havanna (marrón oscuro) con marcas simétricas de color blanco y marrón claro a rojo. Estas marcas incluyen una mancha blanca en la cabeza que se extiende hasta el hocico y el pecho, y marcas de color marrón claro a rojo en las cejas, las mejillas, el pecho, las patas y la base de la cola.
      <br>
      <br>
      La cabeza del Appenzeller Sennenhund es fuerte y en proporción con el cuerpo. Tiene una frente plana, un stop bien definido y un hocico fuerte y recto. Los ojos son pequeños y oscuros, con una expresión viva y atenta. Las orejas son de tamaño mediano, triangulares y colgantes, con las puntas redondeadas.
      <br>
      <br>
      El Appenzeller Sennenhund es un perro enérgico, inteligente y valiente. Es leal y protector con su familia, pero puede ser reservado con los extraños. Esta raza es conocida por su instinto de trabajo y su capacidad para aprender rápidamente, lo que la hace adecuada para una variedad de tareas de trabajo y deportes caninos. Sin embargo, también necesita mucho ejercicio y estimulación mental para mantenerse feliz y saludable.
      <br>
      <br>
      En resumen, el Appenzeller Sennenhund es un perro de trabajo versátil y resistente que es igualmente adecuado para ser un compañero de familia. Su tamaño moderado, junto con su naturaleza amigable y su amor por el trabajo, lo hacen adecuado para una variedad de hogares y estilos de vida. Sin embargo, esta raza no es adecuada para todos. Requiere un dueño comprometido que esté dispuesto a proporcionarle el ejercicio y la estimulación mental que necesita, así como un entrenamiento firme y consistente.
    `,
    history: `
      La historia del Appenzeller Sennenhund, también conocido como el Perro Boyero de Appenzell, es tan antigua como las montañas suizas que una vez llamó hogar. Aunque no se puede determinar con exactitud cuándo se originó esta raza, se cree que es una de las razas de perros más antiguas de Suiza, con raíces que se remontan a más de dos mil años.
      <br>
      <br>
      Los antiguos romanos trajeron perros de ganado a Suiza, y se cree que estos perros son los antepasados de los perros de montaña suizos, incluyendo el Appenzeller Sennenhund. Estos perros fueron criados para ser versátiles y robustos, capaces de soportar el clima frío y montañoso de Suiza. Se utilizaban para una variedad de tareas, incluyendo el pastoreo de ganado, el tirar de carros pequeños conocidos como "carros de perro", y como perros de guardia.
      <br>
      <br>
      El Appenzeller Sennenhund es uno de los cuatro perros de montaña suizos, junto con el Gran Boyero Suizo, el Boyero de Berna y el Boyero de Entlebuch. Aunque todos estos perros comparten características similares, el Appenzeller Sennenhund se distingue por su tamaño mediano y su pelaje tricolor denso y brillante.
      <br>
      <br>
      La raza fue reconocida oficialmente en Suiza en 1898, cuando se fundó el Club de Appenzeller Sennenhund. El club se estableció para preservar y promover la raza, que en ese momento estaba en peligro de extinción. A través de los esfuerzos de los criadores dedicados, la raza fue salvada y sigue siendo popular en Suiza hoy en día.
      <br>
      <br>
      A pesar de su larga historia en Suiza, el Appenzeller Sennenhund no fue reconocido por el American Kennel Club hasta 2007. Hoy en día, la raza sigue siendo relativamente rara fuera de Suiza, pero está ganando popularidad en otros países por su inteligencia, su versatilidad y su lealtad.
      <br>
      <br>
      En resumen, la historia del Appenzeller Sennenhund es una de supervivencia y perseverancia. A través de los siglos, esta raza ha demostrado ser un trabajador incansable y un compañero leal, cualidades que continúa exhibiendo hasta el día de hoy.
    `,
    searchTerms: [
      'Appenzeller Sennenhund',
      'Appenzeller',
      'Sennenhund',
      'Appenzell Mountain Dog',
      'Appenzell Cattle Dog',
      'Perro de Montaña Appenzeller',
      'Perro de Ganado Appenzell',
    ],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Moderada',
    soporta_clima_frio: 'Alta',
    soporta_clima_calido: 'Moderada',
    para_primerizos: 'Baja',
    bueno_con_ninos: 'Moderada',
    tolerancia_a_la_soledad: 'Baja',
    casos_famosos: [],
    fuentes: [
      'https://www.akc.org/dog-breeds/appenzeller-sennenhund/',
      'https://en.wikipedia.org/wiki/Appenzeller_Sennenhund',
    ],
  },
  19: {
    weight: {
      imperial: '44 - 62',
      metric: '20 - 28',
    },
    height: {
      imperial: '17 - 20',
      metric: '43 - 51',
    },
    id: 19,
    name: 'Pastor Australiano',
    bred_for: ['Pastoreo de ganado', 'Pruebas de pastoreo'],
    breed_group: ['Pastoreo'],
    life_span: '12 - 14 años',
    temperament: [
      'Cauteloso',
      'Enérgico',
      'Leal',
      'Obediente',
      'Protector',
      'Valiente',
    ],
    origin: 'Australia',
    reference_image_id: 'IBkYVm4v1',
    image: {
      id: 'IBkYVm4v1',
      width: 736,
      height: 850,
      url: 'https://cdn2.thedogapi.com/images/IBkYVm4v1.jpg',
    },
    country_code: 'AU',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Cauteloso y alerta',
      'Muy enérgico, necesita actividad diaria',
      'Leal a su familia',
      'Obediente y dispuesto a aprender',
      'Protector, buen perro guardián',
      'Valiente y resistente',
    ],
    color: ['Azul merle', 'Negro', 'Rojo merle'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita ejercicio físico y mental diario',
      'Requiere socialización temprana',
      'Necesita una dieta balanceada',
      'Necesita visitas regulares al veterinario',
      'Requiere atención a su pelaje, cepillado regular',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Displasia de codo',
      'Atrofia progresiva de la retina',
    ],
    description: `
      El Pastor Australiano es un perro de tamaño mediano que combina la robustez y la resistencia con una agilidad sorprendente. Su pelaje es de textura media, liso a ligeramente ondulado, resistente a la intemperie y de longitud moderada, con un subpelo que varía en cantidad dependiendo del clima. El pelo es corto y liso en la cabeza, en el exterior de las orejas, en la parte delantera de las patas delanteras y debajo de los corvejones. Las partes traseras de las patas delanteras están moderadamente emplumadas y las bragas son moderadamente llenas. Hay una melena y un flequillo moderados, más pronunciados en los machos que en las hembras.
      <br>
      <br>
      El Pastor Australiano es un perro de trabajo inteligente con fuertes instintos de pastoreo y protección. Es un compañero excepcional, versátil y fácil de entrenar, que realiza sus tareas asignadas con gran estilo y entusiasmo. Es reservado con los extraños pero no muestra timidez. Aunque es un trabajador agresivo y autoritario, la maldad hacia las personas o los animales es intolerable.
      <br>
      <br>
      La altura preferida a la cruz para los machos es de 20 a 23 pulgadas, y para las hembras es de 18 a 21 pulgadas. Sin embargo, la calidad no debe sacrificarse en favor del tamaño. Los colores son fuertes, claros y ricos. Los colores reconocidos son el merle azul, el merle rojo, el negro sólido y el rojo sólido, todos con o sin marcas blancas y/o puntos de bronceado (cobre), sin orden de preferencia.
      <br>
      <br>
      El Pastor Australiano tiene una marcha suave, libre y fácil, que muestra una agilidad de movimiento con una zancada bien equilibrada y que cubre el terreno. Las patas delanteras y traseras se mueven rectas y paralelas a la línea central del cuerpo. A medida que aumenta la velocidad, los pies, tanto delanteros como traseros, convergen hacia la línea central de gravedad del perro, mientras que la línea superior permanece firme y nivelada.
      <br>
      <br>
      En resumen, el Pastor Australiano es un perro de trabajo versátil y resistente que también es un excelente compañero de familia. Su tamaño moderado, combinado con su naturaleza amigable y su amor por el trabajo, lo convierten en una opción popular para aquellos que buscan un perro que pueda adaptarse a una variedad de roles.
    `,
    history: `
      La historia del Pastor Australiano es un viaje fascinante que desafía las expectativas. A pesar de su nombre, el Pastor Australiano no es originario de Australia, sino que fue desarrollado en los Estados Unidos. Sin embargo, sus raíces se remontan a los perros pastores que acompañaban a los pastores vascos y a sus rebaños de ovejas Merino, que fueron exportados tanto a América como a Australia en los primeros días de las colonias. En algún momento, es probable que se cruzaran con perros de tipo Collie.
      <br>
      <br>
      La raza, tal como la conocemos hoy, fue refinada en los Estados Unidos para trabajar como perro pastor en los ranches. A lo largo de los años, el Pastor Australiano ha tenido muchos nombres, incluyendo Pastor Dog, Blue Heeler, Spanish Shepherd, Bob-Tail, New Mexican Shepherd y California Shepherd. A pesar de esta variedad de nombres, el Pastor Australiano siempre ha sido apreciado por su inteligencia, su habilidad para el trabajo y su lealtad.
      <br>
      <br>
      El Pastor Australiano fue reconocido oficialmente por el American Kennel Club (AKC) en 1993, aunque la raza ya era popular y bien establecida en ese momento. A lo largo de los años, los Pastores Australianos han demostrado ser perros de trabajo excepcionales, excelentes en tareas como el pastoreo, la búsqueda y rescate, y el trabajo policial. También han demostrado ser excelentes perros de compañía, conocidos por su lealtad y su amor por la familia.
      <br>
      <br>
      A pesar de su habilidad para el trabajo, los Pastores Australianos también son conocidos por su temperamento amigable y juguetón. Son perros que disfrutan de la compañía de las personas y que se llevan bien con los niños. Sin embargo, también son perros que necesitan mucho ejercicio y estimulación mental, y pueden volverse inquietos y destructivos si no se les proporciona suficiente actividad.
      <br>
      <br>
      En la actualidad, el Pastor Australiano sigue siendo una raza popular tanto en los Estados Unidos como en todo el mundo. Son apreciados tanto por su habilidad para el trabajo como por su carácter amigable y leal. Aunque la raza ha recorrido un largo camino desde sus humildes comienzos con los pastores vascos, el Pastor Australiano sigue siendo un perro de trabajo en el corazón, siempre listo para un desafío y siempre dispuesto a complacer a su dueño.
    `,
    searchTerms: [
      'Pastor Australiano',
      'Australian Shepherd',
      'Aussie',
      'Pastor de Australia',
      'Perro pastor australiano',
      'Pastor australiano merle',
      'Perro australiano',
      'Pastor australiano azul',
      'Pastor australiano rojo',
    ],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Moderada',
    soporta_clima_frio: 'Alta',
    soporta_clima_calido: 'Moderada',
    para_primerizos: 'Baja',
    bueno_con_ninos: 'Alta',
    tolerancia_a_la_soledad: 'Baja',
    casos_famosos: [],
    fuentes: [
      'https://en.wikipedia.org/wiki/Australian_Shepherd',
      'https://www.akc.org/dog-breeds/australian-shepherd/',
    ],
  },
  20: {
    weight: {
      imperial: '31 - 46',
      metric: '14 - 21',
    },
    height: {
      imperial: '17 - 20',
      metric: '43 - 51',
    },
    id: 20,
    name: 'Kelpie Australiano',
    country_code: 'AU',
    bred_for: ['Perro de granja', 'Pastoreo de ganado'],
    breed_group: ['Pastoreo'],
    life_span: '10 - 13 años',
    temperament: [
      'Amigable',
      'Enérgico',
      'Alerta',
      'Leal',
      'Inteligente',
      'Ansioso',
    ],
    origin: 'Australia',
    reference_image_id: 'Hyq1ge9VQ',
    image: {
      id: 'Hyq1ge9VQ',
      width: 800,
      height: 533,
      url: 'https://cdn2.thedogapi.com/images/Hyq1ge9VQ.jpg',
    },
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Amigable con las personas',
      'Muy enérgico, necesita actividad diaria',
      'Siempre alerta, buen perro guardián',
      'Leal a su familia',
      'Inteligente y fácil de entrenar',
      'Puede ser ansioso, necesita estímulos mentales',
    ],
    color: ['Negro', 'Marrón', 'Rojo'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita ejercicio físico y mental diario',
      'Requiere socialización temprana',
      'Necesita una dieta balanceada',
      'Necesita visitas regulares al veterinario',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Atrofia progresiva de la retina',
    ],
    description: `
      El Kelpie Australiano es una raza de perro que se destaca por su agilidad, fuerza y resistencia. Este perro de tamaño mediano es conocido por su pelaje corto y liso, que puede variar en color desde negro, azul (gris), rojo, hasta tonos de crema. Su apariencia general es la de un perro activo y musculoso, capaz de trabajar incansablemente. Su cuerpo es ligeramente más largo que alto, lo que le da una apariencia atlética y equilibrada.
      <br>
      <br>
      La cabeza del Kelpie es proporcional al tamaño del cuerpo, con un cráneo ligeramente redondeado y ancho entre las orejas. El hocico es bien definido y un poco más corto que el cráneo. Los ojos, de forma almendrada y de tamaño medio, son de color marrón y armonizan con el color del pelaje. En el caso de los perros azules (grises), se acepta un color de ojo más claro. Las orejas son de tamaño moderado, ampliamente espaciadas, puntiagudas y ligeramente curvadas en el borde exterior.
      <br>
      <br>
      El cuello del Kelpie es de longitud moderada, fuerte y ligeramente arqueado, y se fusiona suavemente con los hombros. El pecho es profundo más que ancho, y las costillas están bien arqueadas. La línea superior es firme y nivelada, y el lomo está bien musculado, con una buena profundidad en el flanco.
      <br>
      <br>
      Las patas delanteras son rectas y paralelas cuando se ven de frente, con huesos fuertes pero refinados y buena musculatura. Las patas traseras muestran amplitud y fuerza, con una grupa bastante larga y inclinada. Los pies son redondos y fuertes, con almohadillas profundas y dedos bien arqueados. La cola es suficientemente larga para llegar casi hasta el corvejón, y se lleva en una curva muy ligera cuando el perro está en reposo.
      <br>
      <br>
      El Kelpie tiene un pelaje exterior moderadamente corto, plano, duro, recto y resistente a la intemperie, con un subpelo denso. El pelaje puede ser más largo en el cuello, formando un collar, y en la parte trasera de los muslos, formando un ligero flequillo.
      <br>
      <br>
      El Kelpie Australiano es extremadamente alerta, ansioso e inteligente, con una disposición suave y manejable, y una marcada lealtad y devoción al deber. Tiene un instinto natural y una aptitud para trabajar con el ganado, tanto en áreas confinadas como en campo abierto. Su temperamento abierto, amigable, alerta pero plácido es esencial, con un buen equilibrio entre el deseo de trabajar y la capacidad de descansar.
      <br>
      <br>
      En resumen, el Kelpie Australiano es un perro de trabajo versátil y resistente que es igualmente adecuado para ser un compañero de familia. Su tamaño moderado, junto con su naturaleza amigable y su amor por el trabajo, hacen de él una excelente opción para aquellos que buscan un perro activo y comprometido.
    `,
    history: `
      La historia del Kelpie Australiano es una narrativa fascinante de adaptación, supervivencia y habilidad. Esta raza de perro, conocida por su inteligencia, agilidad y resistencia, tiene sus raíces en la Australia del siglo XIX, donde se desarrolló para manejar las duras condiciones del paisaje australiano y las extensas áreas de pastoreo.
      <br>
      <br>
      Los primeros Kelpies surgieron alrededor de 1870, y jugaron un papel crucial en el desarrollo de la industria ovina y lanera de Australia. Descendientes de los "Collies de trabajo" británicos y escoceses (un origen compartido con los Collies de Border y Scotch y el Pastor inglés), el Kelpie fue desarrollado para manejar el duro y caluroso paisaje, las extensas hectáreas y las rebeldes ovejas Merino en las estaciones australianas.
      <br>
      <br>
      El Kelpie es un perro de reunión, que utiliza su mirada, ladrido y mordida (agarre) para mover al ganado, según las condiciones lo requieran. En el monte australiano, los Kelpies a menudo trabajaban sin supervisión, confiando en su propio ingenio para encontrar y reunir al ganado. Los Kelpies son perros entusiastas y activos, siempre listos para trabajar.
      <br>
      <br>
      La base de la raza del Kelpie Australiano provino de la cepa escocesa Rutherford, o North Country, de collies de trabajo. Esto incluía perros de pelo liso, con orejas puntiagudas o semi-puntiagudas, que eran de color negro y fuego. La hembra fundadora nació de un par importado propiedad de un tal Sr. George Robertson de Victoria, Australia. Esta hembra pasó a ser propiedad de J.D. Gleeson, quien la llamó "Kelpie". El amigo de Gleeson, Mark Tully, tenía un destacado perro negro llamado "Moss", criado a partir de la cepa Rutherford importada. Kelpie fue apareada con Moss y produjo una línea extremadamente buena de perros pastores.
      <br>
      <br>
      Dos otros perros importados de color negro y fuego llamados Brutus y Jenny también fueron apareados, y su cachorro, César, fue luego apareado con Kelpie. De esta camada nació una hembra de color negro y fuego, también llamada Kelpie, que fue a parar a manos del Sr. C.W. King y luego hizo del nombre Kelpie una palabra de uso común al ganar el Concurso de Perros Pastores de Forbes. Los ganaderos de todas partes querían un cachorro "Kelpie". Para la década de 1890, la "Kelpie" como cepa estaba bien establecida.
      <br>
      <br>
      El Kelpie Australiano es principalmente importado y criado por rancheros y granjeros para su uso como perro de trabajo con el ganado. Los Kelpies australianos en los Estados Unidos se utilizan con todo tipo de ganado, en operaciones grandes y pequeñas. También participan en varios concursos de pastoreo, así como en Obediencia y Agilidad.
      <br>
      <br>
      La historia del Kelpie Australiano es un testimonio de la adaptabilidad y la resistencia de esta raza. A través de generaciones de cría selectiva y adaptación a las duras condiciones australianas, el Kelpie ha evolucionado hasta convertirse en el perro de trabajo resistente y confiable que conocemos hoy. A pesar de su origen humilde, el Kelpie ha demostrado ser una raza invaluable, no solo en su Australia natal, sino también en todo el mundo, donde su inteligencia, habilidad para el trabajo y lealtad lo han convertido en un favorito tanto en el campo como en el hogar.
    `,
    searchTerms: [
      'Kelpie Australiano',
      'Australian Kelpie',
      'Kelpie',
      'Perro Kelpie',
      'Kelpie de Australia',
      'Perro pastor australiano',
      'Kelpie australiano',
      'Kelpie australiana',
      'Kelpi australiano',
      'Kelpi australiana',
      'Kelpie australiano perro',
      'Kelpie australiano raza',
      'Raza Kelpie australiano',
      'Raza australiana Kelpie',
    ],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Moderada',
    soporta_clima_frio: 'Alta',
    soporta_clima_calido: 'Alta',
    tolerancia_a_la_soledad: 'Baja',
    para_primerizos: 'Baja',
    bueno_con_ninos: 'Moderada',
    casos_famosos: [],
    fuentes: [
      'https://en.wikipedia.org/wiki/Australian_Kelpie',
      'https://www.akc.org/dog-breeds/australian-kelpie/',
      'https://www.yourpurebredpuppy.com/reviews/australiankelpies.html',
    ],
  },
  22: {
    weight: {
      imperial: '14 - 16',
      metric: '6 - 7',
    },
    height: {
      imperial: '10 - 11',
      metric: '25 - 28',
    },
    id: 22,
    name: 'Terrier Australiano',
    bred_for: ['Pastoreo de ganado', 'Caza de serpientes', 'Caza de roedores'],
    breed_group: ['Terrier'],
    life_span: '15 años',
    temperament: [
      'Animado',
      'Alerta',
      'Leal',
      'Compañero',
      'De temperamento equilibrado',
      'Valiente',
    ],
    origin: 'Australia',
    reference_image_id: 'r1Ylge5Vm',
    image: {
      id: 'r1Ylge5Vm',
      width: 1081,
      height: 720,
      url: 'https://cdn2.thedogapi.com/images/r1Ylge5Vm.jpg',
    },
    country_code: 'AU',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Excelente perro de compañía',
      'Muy activo y enérgico',
      'Buen cazador de roedores y serpientes',
      'Se adapta bien a la vida en familia',
      'Valiente y leal',
    ],
    color: ['Azul', 'Rojo'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita ejercicio diario y mental',
      'Requiere socialización temprana',
      'Cuidado del pelaje regular',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Alergias de piel', 'Problemas dentales'],
    description:
      'El Terrier Australiano es una raza de perro pequeña pero resistente, conocida por su espíritu vivaz, alerta y valiente. Estos perros son conocidos por su confianza en sí mismos y su agresividad natural, características que los hacen excelentes cazadores de ratas y animales de madriguera. A pesar de ser uno de los terriers más sensatos, el Terrier Australiano sigue siendo tan resistente y enérgico como el resto de las razas de terrier. Para vivir felizmente con un Terrier Australiano, es importante entender el temperamento dinámico de los terriers. Estos perros necesitan suficiente compañía diaria, paseos diarios y sesiones de juego diarias con una pelota o un juguete. Aunque son pequeños, los Terriers Australianos son perros guardianes alerta con sentidos agudos y suelen ser reservados o educados con los extraños. Los Terriers Australianos son rápidos para aprender y, aunque tienen sus momentos de independencia, en su mayoría están dispuestos a complacer. Algunos Terriers Australianos son excavadores natos y algunos pueden ser ladradores, aunque en general esta raza es más tranquila que muchos otros terriers.',
    history:
      'La historia del Terrier Australiano se remonta a mediados del siglo XIX en Australia, donde se desarrolló a partir de una variedad de terriers británicos traídos al país por colonos. Estos terriers, que incluían al Terrier de Yorkshire, al Terrier de Dandie Dinmont, al Terrier de Skye y al Terrier negro y tostado, se cruzaron entre sí para producir una raza resistente y versátil que pudiera soportar las duras condiciones australianas. El Terrier Australiano fue criado para ser un perro de trabajo versátil, capaz de cazar y matar ratas y serpientes, pastorear ovejas y ganado, y actuar como perro guardián. La raza fue reconocida oficialmente por el Kennel Club de Australia en 1850, y fue una de las primeras razas de perros desarrolladas en Australia que fue reconocida internacionalmente.',
    searchTerms: [
      'Terrier Australiano',
      'Terrier australiano',
      'Terrier de Australia',
      'Terrier de australia',
      'Terrier australiana',
      'Terrier Australiana',
      'Terrier Aussie',
      'Terrier aussie',
      'Terrier de Down Under',
      'Terrier de down under',
      'Terrier de Oz',
      'Terrier de oz',
    ],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Moderada',
    soporta_clima_frio: 'Moderada',
    soporta_clima_calido: 'Alta',
    tolerancia_a_la_soledad: 'Baja',
    bueno_con_ninos: 'Moderada',
    para_primerizos: 'Baja',
    casos_famosos: [],
    fuentes: [
      'https://www.akc.org/dog-breeds/australian-terrier/',
      'https://www.yourpurebredpuppy.com/reviews/australianterriers.html',
    ],
  },
  23: {
    weight: {
      imperial: '33 - 55',
      metric: '15 - 25',
    },
    height: {
      imperial: '23 - 29',
      metric: '58 - 74',
    },
    id: 23,
    name: 'Azawakh',
    bred_for: ['Protección de ganado', 'caza'],
    breed_group: ['Levantador'],
    life_span: '10 - 13 años',
    temperament: [
      'Distante',
      'Cariñoso',
      'Atento',
      'Resistente',
      'Feroz',
      'Refinado',
    ],
    origin: 'África Occidental',
    reference_image_id: 'SkvZgx94m',
    image: {
      id: 'SkvZgx94m',
      width: 1024,
      height: 768,
      url: 'https://cdn2.thedogapi.com/images/SkvZgx94m.jpg',
    },
    country_code: 'ML',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Distante pero cariñoso',
      'Buen perro de guardia',
      'Resistente',
      'Requiere mucho ejercicio',
    ],
    color: ['Variedad'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere mucho ejercicio y estimulación mental debido a su alto nivel de energía',
      'Requiere socialización temprana debido a su temperamento distante',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Osteocondritis disecante',
      'Hipotiroidismo',
      'Epilepsia',
    ],
    description:
      'El Azawakh es un galgo de África Occidental que se origina en los países de Burkina Faso, Mali y Níger. Es un perro alto y elegante, conocido por su resistencia y velocidad. El Azawakh tiene un pelaje corto y fino que puede venir en cualquier color o combinación de colores: rojo, arena clara a leonado, atigrado, parti-color (que puede ser predominantemente blanco), azul, negro y marrón. La cabeza puede tener una máscara negra y puede haber marcas blancas en las patas, el pecho y la punta de la cola. No hay descalificaciones de color o marcas en la raza. Adecuado para su herencia, el Azawakh se destaca como compañero, guardián y corredor de señuelo en los Estados Unidos. Este antiguo perro de caza es tan delgado y largo que su estructura ósea y musculatura se pueden ver claramente debajo de su piel. Las características notables de la raza incluyen su marcha ligera, flexible y ágil, así como su galope de doble suspensión vertical. El Azawakh es de ojos almendrados y delgado. Se mueve con una marcha distintivamente felina y puede encontrarse en una variedad de colores, así como en diversos grados de refinamiento, aunque el formato es básicamente constante.',
    history:
      'El Azawakh es una raza antigua que ha estado presente en la región del Sahel de África Occidental durante miles de años. Los pueblos nómadas de esta región, incluyendo los Tuareg y otros grupos étnicos, han utilizado el Azawakh para una variedad de propósitos a lo largo de los siglos, principalmente como guardián y cazador. El Azawakh ha sido criado para ser capaz de soportar las duras condiciones del desierto del Sahara, y es conocido por su increíble resistencia y velocidad. A pesar de su apariencia delgada y elegante, el Azawakh es un perro increíblemente resistente y resistente. La raza fue introducida en Europa en la década de 1970, y desde entonces ha ganado popularidad en todo el mundo, tanto en las exposiciones caninas como en los hogares como mascota.',
    searchTerms: [
      'Azawakh',
      'azawakh',
      'Azawak',
      'azawak',
      'Galgo africano',
      'galgo africano',
      'Perro de caza africano',
      'perro de caza africano',
      'Perro del Sahara',
      'perro del Sahara',
      'Perro de Mali',
      'perro de Mali',
      'Perro de Burkina Faso',
      'perro de Burkina Faso',
      'Perro de Níger',
      'perro de Níger',
    ],
    tendencia_a_ladrar: 'Baja',
    necesidad_de_aseo: 'Baja',
    soporta_clima_frio: 'Baja',
    soporta_clima_calido: 'Alta',
    tolerancia_a_la_soledad: 'Baja',
    para_primerizos: 'Baja',
    bueno_con_ninos: 'Moderada',
    casos_famosos: [],
    fuentes: [
      'https://en.wikipedia.org/wiki/Azawakh',
      'https://www.akc.org/dog-breeds/azawakh/',
      'https://www.yourpurebredpuppy.com/reviews/azawakhs.html',
    ],
  },
  24: {
    weight: {
      imperial: '40 - 65',
      metric: '18 - 29',
    },
    height: {
      imperial: '20 - 26',
      metric: '51 - 66',
    },
    id: 24,
    name: 'Barbet',
    bred_for: ['Caza de aves acuáticas'],
    breed_group: ['Grupo de Perros de Caza'], // Aunque no se mencionó originalmente, los Barbet generalmente se clasifican como perros de caza
    life_span: '13 – 15 años',
    temperament: ['Obediente', 'Compañero', 'Inteligente', 'Alegre'],
    origin: 'Francia', // Según mi conocimiento, Barbet es originario de Francia
    reference_image_id: 'HyWGexcVQ',
    image: {
      id: 'HyWGexcVQ',
      width: 853,
      height: 1280,
      url: 'https://cdn2.thedogapi.com/images/HyWGexcVQ.jpg',
    },
    country_code: 'FR', // FR es el código de país de Francia, de donde es originario el Barbet. una raza de perros de agua francesa muy antigua. Su nombre se deriva de la palabra francesa "barbe", que significa barba, en referencia a la apariencia distintiva de su pelaje. Durante siglos, estos perros han sido apreciados en su Francia natal por su habilidad en la caza de aves acuáticas y su resistencia en condiciones de clima frío y húmedo.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente para cazar aves acuáticas',
      'Obediente',
      'Buen compañero',
      'Inteligente',
      'Alegre',
      'Requiere ejercicio regular',
    ],
    color: ['Negro', 'Blanco', 'Marrón'], // Los Barbets vienen en una variedad de colores.
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Necesita ejercicio diario debido a su alto nivel de energía',
      'Requiere aseo regular debido a su pelaje rizado',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas oculares'], // Algunas enfermedades comunes para la raza Barbet.
    description: `El Barbet es una raza de perro mediana originaria de Francia, conocida como perro de agua francés. Es un perro raro, con la mayoría de los Barbets, especialmente aquellos que se muestran en exposiciones caninas, siendo de color negro, marrón, blanco y negro, o marrón y blanco. Es común ver manchas blancas en el pecho y patas o piernas blancas en perros de pelaje negro o marrón. Los Barbets son conocidos por ser amigables, alegres, obedientes e inteligentes. Son rápidos para aprender y necesitan entrenamiento de obediencia de por vida. Son geniales con los niños, las familias y los ancianos. Los Barbets se unirán a su familia y preferirán estar en la misma habitación con la familia en todo momento. Necesitan ejercicio diario para mantener al perro en un estado saludable de mente y cuerpo.`,
    history: `El Barbet se conectó a través de los siglos en varias capacidades, y como perro de compañía pero más como un perro de trabajo en general. El término Barbet se convirtió a lo largo de los siglos en un nombre genérico para un perro con un pelaje largo, rizado y lanudo. Los Barbets son más conocidos por ser un perro de agua en los pantanos, humedales y estuarios de Francia. Entre finales del siglo XVIII y principios del siglo XIX, el mismo perro era conocido como el Barbet en Francia, el Barbone en Italia, y el Pudel en Alemania; durante casi cien años los barbets y los poodles se consideraron la misma raza.`,
    searchTerms: [
      'Barbet',
      'barbet',
      'Barbet dog',
      'perro Barbet',
      'perro barbet',
      'French Water Dog',
      'Perro de agua francés',
      'perro de agua frances',
    ],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Alta',
    soporta_clima_frio: 'Alta',
    soporta_clima_calido: 'Moderada',
    para_primerizos: 'Alta',
    bueno_con_ninos: 'Alta',
    tolerancia_a_la_soledad: 'Baja',
    casos_famosos: [],
    fuentes: ['https://en.wikipedia.org/wiki/Barbet_(dog)'],
  },
  25: {
    weight: {
      imperial: '22 - 24',
      metric: '10 - 11',
    },
    height: {
      imperial: '16 - 17',
      metric: '41 - 43',
    },
    id: 25,
    name: 'Basenji',
    bred_for: ['Caza'],
    breed_group: ['Levantador'],
    life_span: '10 - 12 años',
    temperament: [
      'Cariñoso',
      'Enérgico',
      'Alerta',
      'Curioso',
      'Juguetón',
      'Inteligente',
    ],
    origin: 'Congo',
    reference_image_id: 'H1dGlxqNQ',
    image: {
      id: 'H1dGlxqNQ',
      width: 740,
      height: 493,
      url: 'https://cdn2.thedogapi.com/images/H1dGlxqNQ.jpg',
    },
    country_code: 'CG',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Excelente perro de caza',
      'Cariñoso y juguetón',
      'Alerta y curioso',
      'Requiere ejercicio físico y mental diario',
    ],
    color: ['Rojo', 'Negro', 'Tricolor'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita ejercicio físico y mental diario debido a su alto nivel de energía y curiosidad',
      'Requiere socialización temprana debido a su tendencia a ser reservado con extraños',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Síndrome de Fanconi', 'Distrofia corneal'],
    description:
      "El Basenji es una raza de perro que se originó en el centro de África y es una de las razas más antiguas del mundo. Son perros pequeños pero muy ágiles y son conocidos por su habilidad para trepar árboles. Los Basenjis son únicos en el sentido de que no ladran, sino que hacen un sonido único que a menudo se describe como un yodel, conocido como 'barroo'. Son perros muy independientes y pueden ser reservados. Sin embargo, también son muy afectuosos con sus familias y pueden ser buenos con los niños si se socializan adecuadamente. Los Basenjis son perros limpios que se asean a sí mismos como los gatos y tienen un olor corporal mínimo. Son perros de pelo corto que mudan muy poco, lo que puede ser beneficioso para las personas con alergias. Los Basenjis son perros muy activos que requieren mucho ejercicio. Son conocidos por su curiosidad y su tendencia a meterse en problemas si no se les estimula adecuadamente. Aunque son perros inteligentes, pueden ser un desafío para entrenar debido a su naturaleza independiente.",
    history:
      "El Basenji es conocido como el 'Perro del Congo' y es una de las razas de perros más antiguas que existen hoy en día. Se cree que la raza se originó en el centro de África y ha existido durante miles de años. Los Basenjis fueron utilizados por los nativos para la caza y el rastreo. Los perros eran conocidos por su habilidad para trepar árboles y ahuyentar a la presa en la red de los cazadores. Los Basenjis fueron descubiertos por los occidentales en el Congo en el siglo XIX. La raza fue llevada a Inglaterra en la década de 1930 y luego a América. Aunque la raza no es muy común, ha ganado popularidad por su naturaleza única y su apariencia distintiva.",
    searchTerms: [
      'Basenji',
      'Perro del Congo',
      'Perro africano',
      'Perro que no ladra',
      'Perro gato',
      'Bazenji',
      'Basengi',
      'Basenjy',
      'Basenjii',
      'Basenjie',
      'Basenjy',
      'Basenji dog',
      'African barkless dog',
      'Congo dog',
    ],
    tendencia_a_ladrar: 'Baja',
    necesidad_de_aseo: 'Baja',
    soporta_clima_frio: 'Moderada',
    soporta_clima_calido: 'Alta',
    para_primerizos: 'Baja',
    bueno_con_ninos: 'Moderada',
    tolerancia_a_la_soledad: 'Baja',
    casos_famosos: [],
    fuentes: [
      'https://en.wikipedia.org/wiki/Basenji',
      'https://www.akc.org/dog-breeds/basenji/',
    ],
  },
  26: {
    weight: {
      imperial: '35 - 40',
      metric: '16 - 18',
    },
    height: {
      imperial: '13 - 15',
      metric: '33 - 38',
    },
    id: 26,
    name: 'Basset Azul de Gascuña',
    bred_for: ['Caza a pie'],
    breed_group: ['Levantador'],
    life_span: '10 - 14 años',
    temperament: ['Cariñoso', 'Animado', 'Ágil', 'Curioso', 'Feliz', 'Activo'],
    origin: 'Francia',
    reference_image_id: 'BkMQll94X',
    image: {
      id: 'BkMQll94X',
      width: 1280,
      height: 853,
      url: 'https://cdn2.thedogapi.com/images/BkMQll94X.jpg',
    },
    country_code: 'FR',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Excelente perro de caza',
      'Amigable y cariñoso',
      'Agil y activo',
      'Requiere ejercicio físico y mental diario',
    ],
    color: ['Azul', 'Blanco', 'Negro'], //Los Bassets Azul de Gascuña suelen tener combinaciones de estos colores.
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita ejercicio físico y mental diario debido a su alto nivel de energía y su instinto de caza',
      'Requiere atención en sus orejas para evitar infecciones debido a su forma caída',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Obesidad', 'Otitis'],
    description:
      'El Basset Azul de Gascuña es una raza de perro de caza de origen francés. Es un perro de tamaño mediano con un cuerpo largo y patas cortas, similar a un Basset Hound. La raza es conocida por su pelaje azul moteado, que es donde obtiene su nombre. Los Bassets Azules de Gascuña son perros de caza y tienen un sentido del olfato muy desarrollado, que utilizan para rastrear presas. Son perros muy activos y requieren mucho ejercicio. A pesar de su naturaleza de caza, también son perros muy amigables y se llevan bien con las personas y otros animales. Son perros inteligentes pero pueden ser un poco obstinados, por lo que la formación puede ser un desafío.',
    history:
      'El Basset Azul de Gascuña es una raza muy antigua que se originó en la región de Gascuña en Francia. La raza fue desarrollada para la caza y se utilizaba para rastrear presas como conejos y liebres. Los Bassets Azules de Gascuña son descendientes del Gran Azul de Gascuña, una raza de perro de caza más grande. Se cree que la raza se desarrolló reduciendo el tamaño del Gran Azul de Gascuña para crear un perro que pudiera seguir el rastro de la presa a través de terrenos más difíciles. Aunque la raza es muy popular en Francia, no es muy conocida fuera de su país de origen.',
    searchTerms: [
      'Basset Azul de Gascuña',
      'Basset Azul',
      'Basset de Gascuña',
      'Basset Gascuña',
      'Basset Azul de Gascoña',
      'Basset Azul Gascoña',
      'Basset Gascoña',
      'Blue Gascony Basset',
      'Gascony Basset',
      'Blue Basset',
      'Basset Blue de Gascogne',
      'Basset Bleu de Gascogne',
      'Basset Bleu',
      'Basset Gascogne',
    ],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Moderada',
    soporta_clima_frio: 'Alta',
    soporta_clima_calido: 'Moderada',
    para_primerizos: 'Baja',
    bueno_con_ninos: 'Alta',
    tolerancia_a_la_soledad: 'Baja',
    casos_famosos: [],
    fuentes: [
      'https://en.wikipedia.org/wiki/Blue_Gascony_Basset',
      'https://www.akc.org/dog-breeds/basset-hound/',
    ],
  },
  27: {
    weight: {
      imperial: '50 - 65',
      metric: '23 - 29',
    },
    height: {
      imperial: '14',
      metric: '36',
    },
    id: 27,
    name: 'Basset Hound',
    bred_for: ['Caza por olfato'],
    breed_group: ['Levantador'],
    life_span: '12 - 15 años',
    temperament: [
      'Tenaz',
      'Amigable',
      'Cariñoso',
      'Devoto',
      'Temperamento Dulce',
      'Gentil',
    ],
    origin: 'Francia',
    reference_image_id: 'Sy57xx9EX',
    image: {
      id: 'Sy57xx9EX',
      width: 1024,
      height: 640,
      url: 'https://cdn2.thedogapi.com/images/Sy57xx9EX.jpg',
    },
    country_code: 'FR',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente olfato',
      'Bueno para la caza y como mascota familiar',
      'Amigable y cariñoso',
      'Requiere ejercicio regular para mantener un peso saludable',
    ],
    color: ['Blanco', 'Negro', 'Marrón'], // Los Basset Hound son típicamente tricolores.
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere ejercicio regular para mantener un peso saludable debido a su predisposición a la obesidad',
      'Las largas orejas requieren limpieza regular para prevenir infecciones',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: ['Obesidad', 'Problemas de oído'],
    description:
      'El Basset Hound es una raza de perro que se originó en Francia. Son conocidos por su apariencia distintiva, que incluye un cuerpo largo y bajo, patas cortas y orejas largas y caídas. Los Basset Hounds tienen un pelaje corto y suave que puede ser de una variedad de colores, incluyendo tricolor (negro, blanco y marrón), bicolor (blanco y limón o blanco y marrón), y unicolor (todo marrón o todo limón). Son perros de tamaño mediano, con machos que pesan entre 25 y 34 kg y hembras entre 20 y 29 kg. Los Basset Hounds son conocidos por su temperamento amigable y tranquilo. Son perros de compañía excelentes y se llevan bien con los niños y otros animales. Aunque son tranquilos en casa, los Basset Hounds tienen un fuerte instinto de caza y pueden ser obstinados cuando siguen un rastro. A pesar de su tamaño, son perros bastante activos y requieren ejercicio regular para mantenerse saludables y felices. Los Basset Hounds también son conocidos por su tendencia a ladrar y aullar, especialmente cuando están aburridos o solos.',
    history:
      'La historia del Basset Hound se remonta a Francia en el siglo XVI. Se cree que la raza fue desarrollada para la caza de pequeños animales como conejos y liebres. Su cuerpo largo y bajo era ideal para seguir el rastro de estos animales a través de la maleza densa. Aunque originalmente se usaban para la caza, los Basset Hounds se hicieron populares como perros de compañía en el siglo XIX, especialmente en Inglaterra. Fueron importados a Inglaterra en 1866 por Sir Everett Millais, quien es considerado el padre de la raza en ese país. Los Basset Hounds fueron reconocidos oficialmente por el American Kennel Club (AKC) en 1885. A lo largo de los años, la raza ha sido popular tanto en exposiciones caninas como en la cultura popular. Los Basset Hounds han aparecido en varias películas y programas de televisión, y son la mascota oficial de la marca de calzado Hush Puppies.',
    searchTerms: [
      'Basset Hound',
      'Basset',
      'Bassett Hound',
      'Bassett',
      'Baset Hound',
      'Baset',
      'Perro Basset',
      'Perro Basset Hound',
      'Basset Hound Dog',
      'Basset Dog',
    ],
    tendencia_a_ladrar: 'Alta',
    necesidad_de_aseo: 'Moderada',
    soporta_clima_frio: 'Moderada',
    soporta_clima_calido: 'Baja',
    para_primerizos: 'Moderada',
    bueno_con_ninos: 'Alta',
    tolerancia_a_la_soledad: 'Baja',
    casos_famosos: [
      {
        nombre: 'Fred',
        caso: "Fred es un Basset Hound que apareció en la serie de televisión 'The Smurfs'.",
      },
      {
        nombre: 'Flash',
        caso: "Flash es un Basset HHound que apareció en la serie de televisión 'The Dukes of Hazzard'.",
      },
      {
        nombre: 'Droopy',
        caso: 'Droopy es un personaje de dibujos animados creado por Tex Avery que tiene muchas características de un Basset Hound.',
      },
    ],
    fuentes: [
      'https://en.wikipedia.org/wiki/Basset_Hound',
      'https://www.akc.org/dog-breeds/basset-hound/',
    ],
  },
  28: {
    weight: {
      imperial: '20 - 35',
      metric: '9 - 16',
    },
    height: {
      imperial: '13 - 15',
      metric: '33 - 38',
    },
    id: 28,
    name: 'Beagle',
    bred_for: ['Caza de conejos', 'Caza de liebres'],
    breed_group: ['Sabueso'],
    life_span: '13 - 16 años',
    temperament: [
      'Amigable',
      'De temperamento equilibrado',
      'Excitable',
      'Decidido',
      'Gentil',
      'Inteligente',
    ],
    origin: 'Inglaterra',
    reference_image_id: 'Syd4xxqEm',
    image: {
      id: 'Syd4xxqEm',
      width: 1000,
      height: 667,
      url: 'https://cdn2.thedogapi.com/images/Syd4xxqEm.jpg',
    },
    country_code: 'GB',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Amigable y sociable',
      'De temperamento equilibrado',
      'Enérgico y juguetón',
      'Decidido y valiente en la caza',
      'Gentil y bueno con los niños',
      'Inteligente y entrenable',
    ],
    color: ['Tricolor'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Necesita bastante ejercicio',
      'Necesita estimulación mental',
      'Requiere una dieta equilibrada para evitar la obesidad',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: ['Obesidad', 'Displasia de cadera', 'Hipotiroidismo'],
    description:
      'Los Beagles son perros activos y atentos que hacen mascotas muy leales y amorosas. Son perros de caza por naturaleza, lo que los hace muy enérgicos y requieren al menos una hora de ejercicio todos los días. Son perros de manada y disfrutan de la compañía, por lo que son más felices cuando tienen un compañero para jugar. Los Beagles son curiosos, inteligentes y requieren mucha estimulación mental para mantenerse felices y saludables. Son buenos con otros perros y niños, lo que los convierte en una raza de perro familiar muy popular. Sin embargo, debido a su fuerte instinto de caza, pueden distraerse fácilmente cuando están al aire libre, lo que hace que los Beagles sean una de las razas de perros más difíciles de entrenar.',

    history:
      'Los orígenes de esta antigua raza han sido objeto de conjeturas durante siglos. Algunos expertos dicen que deriva de la palabra gaélica beag ("pequeño"), mientras que otros apuntan al término francés be\'geule, que se refiere al ruido que hacen los perros de caza. Los Beagles fueron reconocidos como raza por el AKC en 1885. En 1888, se formó el National Beagle Club y se celebró el primer field trial. A lo largo de los años, los Beagles han sido una raza de perro muy popular en los Estados Unidos, gracias a su naturaleza amigable y su apariencia adorable.',

    searchTerms: [
      'Beagle',
      'beagle',
      'beagles',
      'Beagles',
      'perro beagle',
      'perros beagle',
      'raza beagle',
      'razas beagle',
      'beagel',
      'Beagel',
      'beagels',
      'Beagels',
    ],

    tendencia_a_ladrar: 'Alta',
    necesidad_de_aseo: 'Moderada',
    soporta_clima_frio: 'Moderada',
    soporta_clima_calido: 'Moderada',
    para_primerizos: 'Moderada',
    bueno_con_ninos: 'Alta',
    tolerancia_a_la_soledad: 'Baja',

    casos_famosos: [
      {
        nombre: 'Him',
        caso: 'Beagle propiedad del presidente Lyndon B. Johnson',
      },
      {
        nombre: 'Her',
        caso: 'Beagle propiedad del presidente Lyndon B. Johnson',
      },
      {
        nombre: 'Edgar',
        caso: 'Beagle propiedad del presidente Lyndon B. Johnson',
      },
    ],

    fuentes: [
      'https://en.wikipedia.org/wiki/Beagle',
      'https://www.akc.org/dog-breeds/beagle/',
      'https://www.royalcanin.com/us/dogs/breeds/breed-library/beagle',
    ],
  },
  29: {
    weight: {
      imperial: '45 - 55',
      metric: '20 - 25',
    },
    height: {
      imperial: '20 - 22',
      metric: '51 - 56',
    },
    id: 29,
    name: 'Collie Barbudo',
    bred_for: ['Pastoreo de ovejas'],
    breed_group: ['Pastoreo'],
    life_span: '12 - 14 años',
    temperament: [
      'Seguro de sí mismo',
      'Robusto',
      'Vivo',
      'Alerta',
      'Inteligente',
      'Activo',
    ],
    origin: 'Escocia',
    reference_image_id: 'A09F4c1qP',
    image: {
      id: 'A09F4c1qP',
      width: 733,
      height: 733,
      url: 'https://cdn2.thedogapi.com/images/A09F4c1qP.jpg',
    },
    country_code: 'GB',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Seguro de sí mismo',
      'Robusto',
      'Vivo y energético',
      'Alerta y atento',
      'Inteligente y fácil de entrenar',
      'Activo y necesita mucho ejercicio',
    ],
    color: ['Gris', 'Negro', 'Azul'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Necesita mucho ejercicio y espacio para correr debido a su naturaleza activa y su crianza como perro de pastoreo',
      'Requiere una dieta equilibrada para mantener su energía',
      'Necesita estimulación mental debido a su inteligencia',
      'El pelaje largo y grueso necesita ser cepillado regularmente',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Atrofia progresiva de la retina',
      'Hipotiroidismo',
      'Alergias de piel',
    ],
    description: "El Collie Barbudo es un perro activo con una constitución sólida y delgada y un temperamento tranquilo y equilibrado. Son perros de cabeza nivelada, alerta, vivaz, seguro de sí mismo y activo. Tienen el temperamento de un perro de trabajo inteligente y estable, sin rastro de nerviosismo. Los Collies Barbudos parecen moverse sin esfuerzo, cubriendo una gran cantidad de terreno con elegancia y gracia. Su andar confirma que fueron hechos para su trabajo. Los expertos elogian la calidad de movimiento de un perro pastor que combina la flexibilidad con la eficiencia. Como compañeros son gentiles y de temperamento uniforme, adaptándose para encajar en casi cualquier hogar. Se sabe que son pacientes con los niños y otros miembros de la familia y su temperamento vivaz y juguetón perdura bien hasta la vejez.",

    history: "El Collie Barbudo es una raza de perro pastor originaria de Escocia. Aunque su historia exacta es en gran parte desconocida, se cree que la raza se desarrolló a partir de perros locales mezclados con perros traídos a Escocia por los romanos y los vikingos. Los Collies Barbudos se utilizaron principalmente para el pastoreo de ovejas y ganado, y se les valoraba por su resistencia y su habilidad para trabajar en todo tipo de condiciones climáticas y terrenos. Aunque la popularidad de la raza disminuyó con la industrialización, un renacimiento en el interés por la raza en el siglo XX llevó a un aumento en su número y a su reconocimiento por parte de los clubes de razas de perros en todo el mundo.",

    searchTerms: ["Collie Barbudo", "Bearded Collie", "Collie con barba", "Collie de pelo largo", "Perro pastor escocés", "Perro escocés", "Collie escocés"],

    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Alta',
    soporta_clima_frio: 'Alta',
    soporta_clima_calido: 'Moderada',
    para_primerizos: 'Moderada',
    bueno_con_ninos: 'Alta',
    tolerancia_a_la_soledad: 'Baja',

    casos_famosos: [],

    fuentes: ["https://en.wikipedia.org/wiki/Bearded_Collie", "https://www.akc.org/dog-breeds/bearded-collie/", "https://www.royalcanin.com/us/dogs/breeds/bearded-collie"]
  },
  30: {
    weight: {
      imperial: '80 - 110',
      metric: '36 - 50',
    },
    height: {
      imperial: '24 - 27.5',
      metric: '61 - 70',
    },
    id: 30,
    name: 'Beauceron',
    bred_for: ['Pastoreo de jabalíes', 'Caza', 'Guardia'],
    breed_group: ['Pastoreo'],
    life_span: '10 - 12 años',
    temperament: ['Sin miedo', 'Amigable', 'Inteligente', 'Protector', 'Calmo'],
    origin: 'Francia',
    reference_image_id: 'HJQ8ge5V7',
    image: {
      id: 'HJQ8ge5V7',
      width: 720,
      height: 563,
      url: 'https://cdn2.thedogapi.com/images/HJQ8ge5V7.jpg',
    },
    country_code: 'FR',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Sin miedo y protector',
      'Amigable y calmado',
      'Inteligente y fácil de entrenar',
      'Necesita mucho ejercicio',
      'Requiere estimulación mental',
      'Buen perro de guardia',
    ],
    color: ['Negro', 'Fuego'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita mucho ejercicio y estimulación mental debido a su inteligencia y energía',
      'Requiere un dueño que pueda manejar su nivel de energía',
      'Debido a su pelaje corto, puede ser sensible al frío',
      'Necesita una dieta equilibrada para mantener su salud',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Hipotiroidismo',
      'Gastritis',
      'Dilatación gástrica',
      'Alergias de piel',
    ],
    description: "El Beauceron es una raza imponente y poderosa, pero también notablemente inteligente, enérgica y versátil en el pastoreo. Imagina el cerebro de un Border Collie en un cuerpo de 100 libras. Son especialmente queridos por las mujeres como un compañero y protector sensible pero audaz. Los Beaucerons son musculosos, robustos y grandes, llegando hasta 27.5 pulgadas de altura al hombro, y sin embargo, son gráciles y equilibrados en todos los aspectos. Sus oscuros abrigos negros presentan atractivos acentos de color rojo ardilla, incluyendo los pies rojos que dan a la raza su apodo francés Bas-Rouge ('medias rojas'). También se ven en un abrigo negro-gris-tan. La cabeza larga está bien cincelada, y los ojos marrones oscuros proyectan una expresión que los aficionados a la raza describen como franca y segura. No son para dueños novatos, que podrían terminar siendo poseídos por su perro dominante en lugar de al revés. Dicho esto, los Beaucerons bien entrenados y socializados son perros guardianes y protectores equilibrados, especialmente buenos con los jóvenes, los pequeños y los indefensos.",
    history: "El Beauceron, también conocido como Berger de Beauce o Bas Rouge, es un perro pastor francés cuyo nombre se deriva de la vasta región agrícola al suroeste de París. Desde su desarrollo en la Baja Edad Media, el Beauceron ha sido reconocido como una raza por la AKC en 2007. Cada año, el American Kennel Club publica la lista de las 'razas más populares', basada en las estadísticas de registro de ese año. El Beauceron ha sido registrado en el Servicio de Stock de Fundación desde 1998. El Beauceron es una raza francesa distinta de perro pastor.",
    searchTerms: ["Beauceron", "Berger de Beauce", "Bas Rouge", "perro pastor francés", "perro Beauceron", "raza Beauceron", "Beaucerons"],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Moderada',
    soporta_clima_frio: 'Alta',
    soporta_clima_calido: 'Moderada',
    para_primerizos: 'Baja',
    bueno_con_ninos: 'Alta',
    tolerancia_a_la_soledad: 'Baja',
    casos_famosos: [],
    fuentes: ["https://en.wikipedia.org/wiki/Beauceron", "https://www.akc.org/dog-breeds/beauceron/"]
  },
  31: {
    weight: {
      imperial: '17 - 23',
      metric: '8 - 10',
    },
    height: {
      imperial: '15 - 16',
      metric: '38 - 41',
    },
    id: 31,
    name: 'Bedlington Terrier',
    bred_for: ['Caza de ratas', 'Caza de tejones', 'Control de plagas'],
    breed_group: ['Terrier'],
    life_span: '14 - 16 años',
    temperament: ['Afectuoso', 'Enérgico', 'Inteligente', 'Buen temperamento'],
    origin: 'Reino Unido',
    reference_image_id: 'ByK8gx947',
    image: {
      id: 'ByK8gx947',
      width: 804,
      height: 531,
      url: 'https://cdn2.thedogapi.com/images/ByK8gx947.jpg',
    },
    country_code: 'GB',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Afectuoso y de buen temperamento',
      'Enérgico y necesita ejercicio regular',
      'Inteligente y de entrenamiento moderado',
      'Bueno para controlar plagas',
      'Puede convivir con otros animales',
      'Requiere cuidado regular de su pelaje',
    ],
    color: ['Blanco', 'Gris', 'Roano'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular debido a su alta energía',
      'Necesita estimulación mental debido a su inteligencia',
      'Requiere cuidado regular del pelaje',
      'Puede ser propenso a ciertas condiciones de salud, por lo que se necesitan chequeos veterinarios regulares',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Problemas de hígado',
      'Displasia de cadera',
      'Problemas oculares',
      'Enfermedad de Legg-Calvé-Perthes',
    ],
    description: "El Bedlington Terrier es una raza de perro que es tanto enérgica como afectuosa. A pesar de su apariencia similar a la de un cordero, estos perros son atletas versátiles y compañeros de casa irresistiblemente adorables. Son perros lithe y enérgicos, con un pelaje crujiente y rizado, una espalda arqueada, orejas con borlas, una cola en forma de cimitarra y una cabeza en forma de pera que son características identificativas de esta raza única. Aunque pueden parecer tranquilos y reservados, los Bedlington Terriers son capaces de galopar a alta velocidad. Son perros gráciles y musculosos sin ningún signo de debilidad o aspereza. Debido a su carácter poco exigente, son fáciles de criar y educar y son populares en las familias por su naturaleza tranquila y devota.",
    history: "El Bedlington Terrier fue reconocido como raza por el AKC en 1886. El primer perro llamado 'Bedlington Terrier' nació en 1825. El perro era Ainsley's Piper, que comenzó a cazar a los 8 meses y continuó derribando a las nutrias y tejones más feroces incluso en su vejez ciega y sin dientes. Joseph Ainsley de Bedlington era el dueño del primer perro conocido como Bedlington Terrier. Se cree que el Bedlington Terrier comparte ciertas similitudes, y por lo tanto posiblemente un ancestro común, con los Terriers Dandie Dinmont, Kerry Blue y Soft Coated Wheaten. Su espalda arqueada sugiere que el Whippet también pudo haber sido utilizado para añadir velocidad y ligereza a la capacidad de rendimiento de la raza.",
    searchTerms: ["Bedlington Terrier", "Bedlington", "Terrier", "Bedlington Terriers", "Terriers Bedlington", "Bedlington dog", "Bedlington dogs", "Bedlington Terrier dog", "Bedlington Terrier dogs"],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Moderada',
    soporta_clima_frio: 'Moderada',
    soporta_clima_calido: 'Moderada',
    para_primerizos: 'Moderada',
    bueno_con_ninos: 'Moderada',
    tolerancia_a_la_soledad: 'Moderada',
    casos_famosos: [],
    fuentes: ["https://en.wikipedia.org/wiki/Bedlington_Terrier", "https://www.akc.org/dog-breeds/bedlington-terrier/", "https://www.royalcanin.com/us/dogs/breeds/bedlington-terrier"]
  },
  32: {
    weight: {
      imperial: '40 - 80',
      metric: '18 - 36',
    },
    height: {
      imperial: '22 - 26',
      metric: '56 - 66',
    },
    id: 32,
    name: 'Malinois Belga',
    bred_for: ['Pastoreo de ganado'],
    breed_group: ['Pastor'],
    life_span: '12 - 14 años',
    temperament: [
      'Vigilante',
      'Alerta',
      'Obstinado',
      'Amistoso',
      'Confiable',
      'Trabajador',
      'Activo',
      'Protector',
    ],
    origin: 'Bélgica',
    reference_image_id: 'r1f_ll5VX',
    image: {
      id: 'r1f_ll5VX',
      width: 604,
      height: 453,
      url: 'https://cdn2.thedogapi.com/images/r1f_ll5VX.jpg',
    },
    country_code: 'BE',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Altamente inteligente y entrenable',
      'Energético y requiere ejercicio regular',
      'Buen perro de trabajo con habilidades de pastoreo',
      'Protector y leal',
      'Excelente para roles de servicio y protección',
      'Puede adaptarse a diferentes entornos con el entrenamiento y socialización adecuados',
    ],
    color: ['Marrón', 'Arena', 'Rojo'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular y estimulación mental debido a su alta energía',
      'Necesita socialización temprana y entrenamiento constante para prevenir comportamientos indeseables',
      'El pelaje de un Malinois Belga requiere cepillado regular para eliminar el pelo muerto y mantener la piel sana',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas oculares',
      'Epilepsia',
      'Síndrome de Wobbler',
    ],
    description: "El Malinois Belga es una de las cuatro variedades de perros pastor belgas, nombrado por la región belga de Malinas. Es un perro de trabajo de tamaño mediano a grande que es inteligente y extremadamente activo. Son conocidos por su energía y su capacidad para trabajar. Como perro de trabajo, el Malinois Belga se ha destacado en una variedad de roles en la búsqueda y rescate, detección de drogas y explosivos, y como perro de servicio para personas con discapacidades. Son perros de protección y defensa, y son muy leales a su familia. Sin embargo, también pueden ser reservados y cautelosos con los extraños. Tienen un pelaje corto que es fácil de cuidar, y vienen en colores que varían desde el leonado hasta el caoba, a menudo con una máscara negra en la cara.",

    history: "El Malinois Belga se originó en la región de Malinas en Bélgica, donde fue criado para ser un perro pastor. La raza fue reconocida por primera vez en Bélgica en 1891 por el profesor Adolphe Reul, quien es considerado el fundador de la raza. En 1911, la raza fue reconocida por el American Kennel Club (AKC). Durante las dos guerras mundiales, los Malinois fueron utilizados por las fuerzas militares para una variedad de tareas, incluyendo como mensajeros, perros de búsqueda y rescate, y para detectar minas. En la actualidad, los Malinois son utilizados en una variedad de roles de trabajo, incluyendo como perros de policía y de búsqueda y rescate. También son populares como perros de familia y de compañía.",

    searchTerms: ["malinois belga", "belgian malinois", "malinois", "belga malinois", "belgian shepherd malinois", "belgian malinois shepherd", "belgian malinois dog", "malinois dog", "belgian shepherd dog", "malinois belgian", "malinois shepherd", "shepherd malinois"],

    tendencia_a_ladrar: 'Moderada',

    necesidad_de_aseo: 'Baja',

    soporta_clima_frio: 'Alta',

    soporta_clima_calido: 'Moderada',

    para_primerizos: 'Baja',

    bueno_con_ninos: 'Moderada',

    tolerancia_a_la_soledad: 'Baja',

    casos_famosos: [],

    fuentes: ["https://en.wikipedia.org/wiki/Malinois_dog", "https://www.akc.org/dog-breeds/belgian-malinois/"]

  },
  33: {
    weight: {
      imperial: '40 - 65',
      metric: '18 - 29',
    },
    height: {
      imperial: '22 - 26',
      metric: '56 - 66',
    },
    id: 33,
    name: 'Tervuren Belga',
    bred_for: ['Guardia', 'Trabajo de tracción', 'Trabajo policial'],
    breed_group: ['Pastor'],
    life_span: '10 - 12 años',
    temperament: [
      'Energético',
      'Alerta',
      'Leal',
      'Inteligente',
      'Atento',
      'Protector',
    ],
    origin: 'Bélgica',
    reference_image_id: 'B1KdxlcNX',
    image: {
      id: 'B1KdxlcNX',
      width: 645,
      height: 380,
      url: 'https://cdn2.thedogapi.com/images/B1KdxlcNX.jpg',
    },
    country_code: 'BE',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Excelente perro guardián y trabajador',
      'Protector y leal a su familia',
      'Altamente energético, ideal para una familia activa',
      'Inteligente y fácil de entrenar',
      'Puede adaptarse a diferentes roles y trabajos',
    ],
    color: ['Negro', 'Marrón', 'Gris'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular y estimulación mental debido a su alta energía',
      'Necesita socialización temprana y entrenamiento constante para prevenir comportamientos indeseables',
      'El pelaje de un Tervuren Belga requiere cepillado regular para eliminar el pelo muerto y mantener la piel sana',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas oculares',
      'Epilepsia',
    ],
    description: "El Tervuren Belga es una de las cuatro variedades de perros de pastor belgas, que se distingue por su largo y lujoso pelaje. Este pelaje, que es generalmente de color caoba con un collar negro, requiere un mantenimiento regular para mantener su apariencia. El Tervuren es un perro de tamaño mediano, bien proporcionado y fuerte, que es ágil y musculoso sin ser voluminoso. Son conocidos por su inteligencia y versatilidad como perro de trabajo, siendo capaces de realizar una variedad de tareas, incluyendo pastoreo, búsqueda y rescate, y obediencia competitiva. A pesar de su capacidad para el trabajo, también son perros de compañía leales y afectuosos que se llevan bien con los niños y otros perros. Sin embargo, pueden ser reservados con los extraños y tienen un fuerte instinto de protección, lo que los convierte en excelentes perros guardianes.",

    history: "El Tervuren Belga lleva el nombre de la aldea de Tervuren, en Bélgica, donde fue criado por primera vez a finales del siglo XIX. Fue desarrollado a partir de los mismos perros de pastor belgas que produjeron las otras tres variedades (el Malinois, el Laekenois y el Groenendael), pero fue criado selectivamente para su distintivo pelaje largo. Aunque originalmente se utilizaba para el pastoreo, su inteligencia y versatilidad pronto lo hicieron popular para una variedad de roles de trabajo. En la actualidad, el Tervuren es apreciado tanto por su habilidad en una variedad de deportes caninos como por su temperamento equilibrado como perro de compañía.",

    searchTerms: ["Tervuren Belga", "Belgian Tervuren", "Tervuren", "Perro de pastor belga", "Belgian Shepherd Dog", "Tervuren dog", "Belgian Tervuren shepherd"],

    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Alta',
    soporta_clima_frio: 'Alta',
    soporta_clima_calido: 'Moderada',
    para_primerizos: 'Baja',
    bueno_con_ninos: 'Moderada',
    tolerancia_a_la_soledad: 'Baja',

    casos_famosos: [],

    fuentes: ["https://en.wikipedia.org/wiki/Belgian_Tervuren", "https://www.akc.org/dog-breeds/belgian-tervuren/"]

  },
  34: {
    weight: {
      imperial: '65 - 120',
      metric: '29 - 54',
    },
    height: {
      imperial: '23 - 27.5',
      metric: '58 - 70',
    },
    id: 34,
    name: 'Perro de Montaña Bernés',
    bred_for: ['Trabajo de tracción'],
    breed_group: ['Trabajo'],
    life_span: '7 - 10 años',
    temperament: ['Cariñoso', 'Leal', 'Inteligente', 'Fiel'],
    origin: 'Suiza',
    reference_image_id: 'S1fFlx5Em',
    image: {
      id: 'S1fFlx5Em',
      width: 640,
      height: 427,
      url: 'https://cdn2.thedogapi.com/images/S1fFlx5Em.jpg',
    },
    country_code: 'CH',
    categoria_de_tamanio: 'Muy grande',
    perks: [
      'Excelente perro de trabajo',
      'Leal y muy apegado a su familia',
      'Amigable y paciente, bueno con los niños y otros animales',
      'Inteligente y relativamente fácil de entrenar',
      'Versátil: puede ser un perro de trabajo y una mascota familiar',
    ],
    color: ['Negro', 'Blanco', 'Marrón'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere ejercicio moderado para mantener un peso saludable',
      'Necesita cepillado regular debido a su pelaje espeso',
      'Requiere socialización temprana para evitar timidez o ansiedad',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas oculares',
      'Cáncer',
      'Problemas de corazón',
    ],
    description: "El Perro de Montaña Bernés es una raza grande, fuerte, robusta y ágil. Su cuerpo es ligeramente más largo que alto, y su hueso sustancial y robusto es característico de la raza. Los machos denotan una apariencia masculina y las hembras son distintamente femeninas. El Bernés es autónfido, alerta y vigilante. Son de buen carácter y confiables con sus familias y seguros y aceptantes con extraños. Su pelaje es tricolor con marcas simétricas de negro, óxido y blanco. La base del perro es negra. El perro tiene una llama blanca en el pecho y blanco en la cabeza, los dedos de los pies y la punta de la cola. El óxido está en las mejillas llegando a las comisuras de la boca, sobre cada ojo, en cada lado del pecho, en las cuatro patas y debajo de la cola.",
    history: "El Perro de Montaña Bernés es uno de los cuatro antiguos Sennenhunds suizos, desarrollado cuando los romanos invasores cruzaron sus mastines con perros locales de guarda de rebaños, y es el único con un pelaje completo. Refinado en la región de Berna, los perros de esta raza se utilizaban habitualmente para múltiples trabajos. Estos incluían: trabajador agrícola general; guardián del rebaño; y perro de tiro. La raza se caracteriza por el clásico y llamativo tricolor de los Sennenhund (color base negro, con marcas de óxido y blanco).",
    searchTerms: ['Perro de Montaña Bernés', 'Trabajo', 'Fiel', "Perro de Montaña Bernés", "Bernese Mountain Dog", "Berner", "Berner Sennenhund", "Berner Sennen", "Bernese", "Perro de Montaña Bernes", "Perro de Montana Bernes", "Perro de Montana Bernes", "Perro de Montaña Bernese", "Perro de Montana Bernese"],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Alta',
    soporta_clima_frio: 'Alta',
    soporta_clima_calido: 'Baja',
    para_primerizos: 'Moderada',
    bueno_con_ninos: 'Alta',
    tolerancia_a_la_soledad: 'Baja',
    casos_famosos: [],
    fuentes: ["https://en.wikipedia.org/wiki/Bernese_Mountain_Dog", "https://www.akc.org/dog-breeds/bernese-mountain-dog/", "https://www.royalcanin.com/us/dogs/breeds/breed-library/bernese-mountain-dog", "https://www.dogbreedinfo.com/bernesemountain.htm", "https://www.ukcdogs.com/bernese-mountain-dog"]

  },
  35: {
    weight: {
      imperial: '10 - 18',
      metric: '5 - 8',
    },
    height: {
      imperial: '9.5 - 11.5',
      metric: '24 - 29',
    },
    id: 35,
    name: 'Bichón Frisé',
    bred_for: ['Compañía'],
    breed_group: ['No deportivo'],
    life_span: '15 años',
    temperament: [
      'Animado',
      'Cariñoso',
      'Alegre',
      'Juguetón',
      'Gentil',
      'Sensible',
    ],
    origin: 'Francia',
    reference_image_id: 'HkuYlxqEQ',
    image: {
      id: 'HkuYlxqEQ',
      width: 480,
      height: 360,
      url: 'https://cdn2.thedogapi.com/images/HkuYlxqEQ.jpg',
    },
    country_code: 'FR',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Perro pequeño, ideal para vivir en departamentos',
      'Muy alegre y juguetón, excelente para familias con niños',
      'Cariñoso y sensible, necesita estar cerca de su familia',
      'A pesar de su pelaje largo, es una raza que casi no suelta pelo',
      'Se lleva bien con otros animales',
    ],
    color: ['Blanco'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere mucha atención y compañía',
      'Necesita frecuentes visitas al peluquero por su pelaje largo',
      'Necesita ejercicio moderado y estimulación mental para mantener su alegría',
      'Es importante socializarlo desde cachorro para evitar que sea tímido o temeroso',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Alergias',
      'Problemas de piel',
      'Problemas dentales',
      'Luxación patelar',
    ],
    description: `El Bichón Frisé es un perro pequeño y resistente. Cuando el perro está recortado en un corte de espectáculo, el cuerpo da una apariencia redonda. El cráneo es ligeramente redondeado. El hocico es más corto que el cráneo, no es puntiagudo, y tiene una parada ligeramente pronunciada. Los ojos redondos son negros o marrones oscuros. Las orejas son caídas cubiertas de pelo largo. Los dientes deben encontrarse en una mordida de tijera. Las patas son rectas y de hueso medio. Los espolones generalmente se eliminan. La cola se lleva sobre la espalda. El pelaje doble es suave al tacto. El pelaje exterior es de 3 a 4 pulgadas (7-10 cm) de largo y es más grueso y rizado que el suave y denso subpelo. Los colores del pelaje incluyen blanco sólido, crema, gris o albaricoque. El blanco es preferido en el ring de exhibición. El pelaje es hipoalergénico. Los dueños de mascotas generalmente recortan al perro en un corte de cachorro de fácil cuidado que tiene la misma longitud en todo el cuerpo. El perro puede ser mostrado con su pelaje recortado como un caniche o con un pelaje largo y esponjoso con los pies y el hocico recortados.`,

    history: `La existencia de la raza Bichón Frisé ha sido documentada desde el siglo XIV, cuando los marineros franceses los trajeron de Tenerife, una de las Islas Canarias. Se cree que la raza fue llevada allí por comerciantes, utilizando la ruta comercial fenicia, como artículos de trueque. Se cree que el área de origen de la raza es Italia y las áreas alrededor de ese país, donde se encontraron la mayoría de las razas de Bichón. El Bichón Frisé es único entre las razas de Bichón ya que tiene doble capa, teniendo tanto un subpelo como un pelo exterior. Esto le da a la raza su característica apariencia de "pompones de polvo". El Bichón Frisé fue reconocido por el United Kennel Club en 1981.`,

    searchTerms: ['bichon frise', 'bichón frisé', 'bichon', 'frise', 'bichon a poil frise', 'bichon tenerife', 'bichon frize', 'bichon frisse', 'bichon fris'],

    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Alta',
    soporta_clima_frio: 'Moderada',
    soporta_clima_calido: 'Baja',
    para_primerizos: 'Alta',
    bueno_con_ninos: 'Alta',
    tolerancia_a_la_soledad: 'Baja',

    casos_famosos: [],

    fuentes: [
      'https://en.wikipedia.org/wiki/Bichon_Fris%C3%A9', "https://www.akc.org/dog-breeds/bichon-frise/" ,
      "https://www.royalcanin.com/us/dogs/breeds/breed-library/bichon-frise", "https://www.dogbreedinfo.com/bichonfrise.htm",
      "https://www.ukcdogs.com/bichon-frise"
    ]
  },
  36: {
    weight: {
      imperial: '65 - 100',
      metric: '29 - 45',
    },
    height: {
      imperial: '23 - 27',
      metric: '58 - 69',
    },
    id: 36,
    name: 'Sabueso Negro y Tostado',
    bred_for: ['Caza de mapaches', 'Caza nocturna'],
    breed_group: ['Sabueso'],
    life_span: '10 - 12 años',
    temperament: [
      'Tranquilo',
      'Gentil',
      'Adaptable',
      'Confiable',
      'De temperamento uniforme',
      'Adorable',
    ],
    origin: 'Estados Unidos',
    reference_image_id: 'HJAFgxcNQ',
    image: {
      id: 'HJAFgxcNQ',
      width: 556,
      height: 380,
      url: 'https://cdn2.thedogapi.com/images/HJAFgxcNQ.jpg',
    },
    country_code: 'US',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Excelente sentido del olfato, útil para la caza y el rastreo',
      'Versátil y adaptable a diferentes estilos de vida',
      'Confiable y de temperamento uniforme',
      'A pesar de su energía, puede ser tranquilo y gentil en el hogar',
    ],
    color: ['Negro', 'Marrón'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita ejercicio regular para mantener su energía bajo control',
      'Necesita un dueño que entienda su necesidad de explorar y rastrear',
      'Requiere un mantenimiento regular del pelaje para mantener su color negro y tostado brillante',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Obesidad',
      'Infecciones del oído, debido a sus orejas largas y caídas',
    ],
    searchTerms: ['Sabueso Negro y Tostado', 'Sabueso', 'Caza de mapaches', 'sabueso negro y tostado', 'black and tan coonhound', 'coonhound', 'black and tan', 'sabueso', 'black tan coonhound', 'black & tan coonhound', 'blackandtan coonhound', 'blacktan coonhound'],
    description: `El Sabueso Negro y Tostado es un perro de trabajo resistente, conocido por su agudo sentido del olfato y su persistencia en la pista. Son perros de tamaño mediano a grande, con cuerpos fuertes y musculosos. Tienen orejas largas y caídas y ojos de color avellana o marrón oscuro que transmiten una expresión amigable. Su pelaje es denso y de longitud media, y como su nombre indica, es de color negro y tostado. Son perros amigables y leales, conocidos por su amor por las personas y su naturaleza tranquila en casa. Sin embargo, también son perros de trabajo dedicados que pueden ser obstinados y decididos en la pista.`,
    history: `El Sabueso Negro y Tostado es una de las pocas razas verdaderamente estadounidenses, con una historia que se remonta a mediados del siglo XVIII. Fueron desarrollados para rastrear mapaches y otras presas de caza mayor, y son conocidos por su capacidad para seguir una pista a través de todo tipo de terreno y condiciones climáticas. La raza fue reconocida por el American Kennel Club en 1945, y desde entonces ha sido valorada tanto por su habilidad en el campo como por su temperamento amigable y su lealtad como mascota de la familia.`,
    tendencia_a_ladrar: 'Alta',
    necesidad_de_aseo: 'Baja',
    soporta_clima_frio: 'Moderada',
    soporta_clima_calido: 'Moderada',
    para_primerizos: 'Baja',
    bueno_con_ninos: 'Alta',
    tolerancia_a_la_soledad: 'Baja',
    casos_famosos: [],
    fuentes: [
      'https://en.wikipedia.org/wiki/Black_and_Tan_Coonhound',
      'https://www.akc.org/dog-breeds/black-and-tan-coonhound/',
      'https://www.royalcanin.com/us/dogs/breeds/breed-library/black-and-tan-coonhound',
      'https://www.dogbreedinfo.com/blackandtancoonhound.htm'
    ]
  },
  37: {
    weight: {
      imperial: '80 - 110',
      metric: '36 - 50',
    },
    height: {
      imperial: '23 - 27',
      metric: '58 - 69',
    },
    id: 37,
    name: 'Sabueso de Sangre',
    bred_for: ['Rastreo'],
    breed_group: ['Sabueso'],
    life_span: '8 - 10 años',
    temperament: ['Terco', 'Afectuoso', 'Gentil', 'De temperamento uniforme'],
    origin: 'Bélgica',
    reference_image_id: 'Skdcgx9VX',
    image: {
      id: 'Skdcgx9VX',
      width: 586,
      height: 600,
      url: 'https://cdn2.thedogapi.com/images/Skdcgx9VX.jpg',
    },
    country_code: 'BE',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Excelente sentido del olfato, uno de los mejores entre todas las razas de perros',
      'Persistentes y determinados en la pista',
      'Gentiles y afectuosos en casa, buenos con niños y otros animales',
      'A pesar de su terquedad, son perros de temperamento uniforme',
    ],
    color: ['Negro y fuego', 'Hígado y fuego'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Bajo',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Necesita mucho ejercicio para mantener su capacidad de rastreo y mantenerse saludable',
      'Requiere paciencia en el entrenamiento debido a su naturaleza terca',
      'Necesita socialización temprana para evitar la timidez',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas oculares, incluyendo entropión y ectropión',
    ],
    description: "El Sabueso de Sangre es una raza de perro muy poderosa y masiva. Son perros de rastreo, trazando sus orígenes al antiguo sabueso St. Hubert de Francia, criados por su habilidad de rastreo y caza. Son expertos en rastreo en frío, siguiendo un rastro antiguo, lo que los hace excepcionales perros de rastreo. La piel es delgada al tacto y es extremadamente suelta, siendo más notable en la cabeza y el cuello, donde cuelga en pliegues profundos. El Sabueso de Sangre es amable, paciente, noble, de buenos modales y un perro adorable. Son gentiles, afectuosos y excelentes con los niños, lo que los convierte en un verdadero compañero de buen carácter. Son muy enérgicos al aire libre y bulliciosos cuando son jóvenes, determinados e independientes, los Sabuesos de Sangre necesitan un entrenamiento firme, pero no pesado. Son naturalmente animales gentiles pero no son fáciles de entrenar en obediencia. Si captan un olor a algo, puede ser difícil redirigir su atención de nuevo a ti si estás fuera de su alcance físico. Son capaces de seguir cualquier olor, incluso humano, una habilidad rara en un perro. Esta raza ha sido conocida por seguir con éxito rastros de más de 100 horas de antigüedad. Es tan determinado que se sabe que se queda con el rastro durante más de 100 millas. Los Sabuesos de Sangre nunca pueden ser mantenidos en un patio sin cercas. Hay una buena posibilidad de que el instinto los lleve a vagar si están sin correa. Huyen cuando captan un olor; el instinto los impulsa a encontrar el final del rastro.",
    history: "El Sabueso de Sangre es un sabueso de rastreo, que traza sus orígenes al antiguo Sabueso de San Huberto de Francia, un tipo de sabueso criado por sus habilidades de rastreo y caza. Son expertos en el rastreo en frío, lo que los convierte en perros de rastreo excepcionales. Esta raza fue reconocida por el United Kennel Club en 1914. El Sabueso de Sangre prospera en la caza más que en la matanza. Se deleita en el rastreo y se ha utilizado para cazar animales, criminales, esclavos fugitivos y niños perdidos.",
    searchTerms: ['Sabueso de Sangre', 'Sabueso', 'Rastreo', "Sabueso de Sangre", "sabueso de sangre", "Bloodhound", "bloodhound", "Sabueso de sangre", "sabueso de Sangre", "Sabueso De Sangre"],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Moderada',
    soporta_clima_frio: 'Moderada',
    soporta_clima_calido: 'Baja',
    para_primerizos: 'Baja',
    bueno_con_ninos: 'Alta',
    tolerancia_a_la_soledad: 'Baja',
    casos_famosos: [],
    fuentes: ["https://en.wikipedia.org/wiki/Bloodhound", "https://www.akc.org/dog-breeds/bloodhound/", "https://www.royalcanin.com/us/dogs/breeds/breed-library/bloodhound", "https://www.dogbreedinfo.com/bloodhound.htm", "https://www.ukcdogs.com/bloodhound"]
  },
  38: {
    weight: {
      imperial: '45 - 80',
      metric: '20 - 36',
    },
    height: {
      imperial: '21 - 27',
      metric: '53 - 69',
    },
    id: 38,
    name: 'Coonhound Azul de Virginia',
    bred_for: ['Caza con un sentido superior del olfato'],
    breed_group: ['Sabueso'],
    life_span: '12 - 14 años',
    temperament: ['Amigable', 'Inteligente', 'Activo'],
    origin: 'Estados Unidos',
    reference_image_id: 'rJxieg9VQ',
    image: {
      id: 'rJxieg9VQ',
      width: 731,
      height: 599,
      url: 'https://cdn2.thedogapi.com/images/rJxieg9VQ.jpg',
    },
    country_code: 'US',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Excelente sentido del olfato, usado principalmente para la caza',
      'Activo y lleno de energía, ideal para familias activas',
      'Inteligente y fácil de entrenar para tareas y trucos',
      'Amigable y buen compañero de familia',
    ],
    color: ['Azul moteado', 'Tricolor'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita ejercicio regular y mucho espacio para correr',
      'Requiere estimulación mental para evitar el aburrimiento',
      'Necesita una alimentación equilibrada para evitar la obesidad',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Obesidad, debido a su alta energía y apetito',
    ],
    description: "El Coonhound Azul de Virginia, también conocido como Bluetick Coonhound, es un perro de apariencia fuerte y musculosa, conocido por su agilidad y velocidad. Tiene un cuerpo bien proporcionado, no torpe ni pesado. Su pelaje es de textura media, pegado al cuerpo, dando una apariencia suave y brillante. Su cabeza es amplia entre las orejas, con un cráneo ligeramente abovedado. Los ojos son bastante grandes, separados y de color marrón oscuro. El Coonhound Azul tiene una expresión típica de ruego, nunca salvaje o temerosa. Este perro es activo, ambicioso y rápido en el rastro. Debería ser un perro de lengua libre en el rastro, con una voz de ladrido, chillido, corte o bugle al golpear y rastrear, con un cambio distinto en el árbol de ladridos, cortando, o una combinación de ambos.",

    history: "Es muy probable que el Bluetick descienda principalmente de los rápidos foxhounds de Inglaterra, con alguna introducción de la sangre de varios sabuesos franceses que se utilizaban para cazar animales de gran tamaño. Los perros franceses eran conocidos por tener un olfato muy agudo. George Washington recibió cinco de estos sabuesos franceses del general Lafayette. Los Blueticks se registraron originalmente en el UKC como ingleses. En 1946, a petición de los aficionados al Bluetick, el UKC comenzó a registrar a los Blueticks como una raza separada.",

    searchTerms: ['Coonhound Azul de Virginia', 'Sabueso', 'Caza', "coonhound azul de virginia", "bluetick coonhound", "coonhound", "bluetick", "coonhound azul", "coonhound virginia", "bluetick virginia", "coonhound azul de virginia con tilde", "coonhound azul de virginia sin tilde", "coonhound azul de virginia errores ortograficos", "coonhound azul de virginia formas coloquiales"],

    tendencia_a_ladrar: 'Alta',
    necesidad_de_aseo: 'Moderada',
    soporta_clima_frio: 'Moderada',
    soporta_clima_calido: 'Moderada',
    para_primerizos: 'Baja',
    bueno_con_ninos: 'Alta',
    tolerancia_a_la_soledad: 'Baja',

    casos_famosos: [],

    fuentes: ["https://en.wikipedia.org/wiki/Bluetick_Coonhound", "https://www.akc.org/dog-breeds/bluetick-coonhound/", "https://www.ukcdogs.com/bluetick-coonhound"]

  },
  39: {
    weight: {
      imperial: '110 - 200',
      metric: '50 - 91',
    },
    height: {
      imperial: '22 - 27',
      metric: '56 - 69',
    },
    id: 39,
    name: 'Boerboel',
    bred_for: ['Proteger el hogar', 'Trabajar en la granja'],
    breed_group: ['Trabajo'],
    life_span: '10 - 12 años',
    temperament: [
      'Obediente',
      'Confiado',
      'Inteligente',
      'Dominante',
      'Territorial',
    ],
    origin: 'Sudáfrica',
    reference_image_id: 'HyOjge5Vm',
    image: {
      id: 'HyOjge5Vm',
      width: 1200,
      height: 669,
      url: 'https://cdn2.thedogapi.com/images/HyOjge5Vm.jpg',
    },
    country_code: 'ZA',
    categoria_de_tamanio: 'Muy grande',
    perks: [
      'Protector y leal, excelente para proteger el hogar',
      'Fuerte y resistente, adecuado para trabajar en la granja',
      'Inteligente y obediente cuando se le entrena adecuadamente',
    ],
    color: ['Atigrado', 'Negro', 'Marrón'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Baja',
    necesidades_especiales: [
      'Requiere entrenamiento y socialización tempranos',
      'Necesita mucho espacio para moverse debido a su tamaño',
      'Requiere una alimentación saludable para mantener su gran tamaño y energía',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas de piel',
      'Problemas oculares',
    ],
    description: `El Boerboel es un perro grande, fuerte e inteligente de trabajo. Es bien equilibrado con buen desarrollo muscular y movimiento animado. El perro debe ser impresionante e imponente. Los machos aparecen notablemente masculinos y las hembras femeninas. Todas las partes del cuerpo deben estar en proporción entre sí. La cabeza es la característica más importante del Boerboel, ya que representa su carácter total. Es corta, ancha, profunda, cuadrada y muscular con mejillas bien llenas. La parte entre los ojos debe estar bien llena. La parte superior de la cabeza es ancha y plana, con un desarrollo muscular prominente. La cara debe mezclarse simétricamente con la cabeza, y puede ser con o sin una máscara negra. El hocico es negro con grandes orificios nasales que están ampliamente espaciados. El hueso nasal es recto y paralelo a la línea superior de la cabeza que es profunda, ancha y se estrecha ligeramente hacia el frente. El hueso nasal debe ser de 8-10 cm de largo. El labio superior flojo y carnoso debe cubrir el labio inferior, pero no debe colgar más bajo que la mandíbula inferior. Las mandíbulas (mandíbulas) son fuertes, profundas y anchas, y se estrechan ligeramente hacia el frente. Los dientes deben ser blancos, bien desarrollados, correctamente espaciados, con un conjunto completo de 42 dientes y una mordida de tijera. Los ojos anchos y horizontalmente colocados son de cualquier tono de marrón, pero más oscuros que la piel, con párpados firmes y bien pigmentados. Las orejas deben ser de tamaño mediano, en forma de V y deben estar en proporción con la cabeza. Están colocados bastante altos y anchos contra la cabeza. Cuando el perro está alerta, las orejas deben formar una línea recta con la parte superior de la cabeza. La piel del cuello es suelta debajo de la garganta y se vuelve tensa entre las patas delanteras. El cuerpo se estrecha ligeramente hacia el lomo. La línea superior debe ser recta. La espalda es recta, ancha y en proporción, con músculos de la espalda prominentes y un lomo corto. El pecho es muscular, ancho y fuerte. La cola recta y corta está unida alta al cuerpo. Las patas delanteras deben ser perfectamente verticales. Las patas traseras son ligeramente más pequeñas que las patas delanteras. Las grandes patas bien acolchadas son redondas con uñas curvas oscuras. Las patas deben apuntar hacia adelante. Los espolones deben ser removidos. La piel es gruesa, suelta, bien pigmentada con arrugas moderadas en la frente cuando el perro está alerta. El pelaje corto, denso y elegante viene en crema blanca, pálido leonado, negro, marrón rojizo, marrón y todos los tonos de atigrado.`,
    history: `El desarrollo del Boerboel puede describirse con razón como una verdadera historia de éxito sudafricana y hoy es un faro para aquellos que han hecho una contribución para mejorar la raza. El refinamiento de la raza todavía está en la etapa de desarrollo. Ya se ha escrito mucho sobre el linaje del Boerboel, pero nadie puede afirmar con certeza que se cría a partir de una, dos o más razas de perros. Lo que se confirma por la investigación es que Jan van Riebeeck trajo consigo un "bullenbijter" a su llegada al Cabo. Este perro era una raza grande y fuerte que recordaba al tipo de Mastiff. Aquellos que siguieron a Van Riebeeck al Cabo también trajeron consigo solo los perros más grandes y fuertes y durante un período de décadas solo los más fuertes sobrevivieron en el ahora desolado país. Con la llegada de los colonos británicos en 1820 trajeron entre otros el Bulldog y el tipo de perro Mastiff. (En 1938, el verdadero Bull Mastiff fue importado a Sudáfrica por De Beers para proteger las minas de diamantes). También se sabe que importaron un campeón obtenido de los hotentotes, que jugó un papel en el desarrollo del Boerboel. Los "Boerdogs" (como se les conoce) fueron dispersados por los Voortrekkers durante el Gran Trek y continuaron criándose con ellos. Según la tradición, después de la Guerra Anglo Boer en 1902, estos perros se cruzaron con el Bulldog inglés de patas largas y también con el Bull Mastiff a finales y principios de los años 50. La historia es especialmente conocida entre los agricultores del noreste del Estado Libre, el norte de Natal y en partes de Transvaal.`,
    searchTerms: [
      'Boerboel', 'Perro de trabajo', 'Granja',
      "boerboel",
      "boerbul",
      "perro boerboel",
      "perro boerbul",
      "raza boerboel",
      "raza boerbul",
      "perro sudafricano boerboel",
      "perro de granja boerboel",
      "perro mastiff sudafricano",
      "south african boerboel",
      "south african mastiff",
      "african boerboel",
      "boerboel mastiff",
      "boerboel dog",
      "boerboel breed",
      "boerboel puppy",
      "boerboel puppies",
      "boerboel dogs",
      "boerboel mastiff dogs",
      "boerboel mastiff breed",
      "boerboel mastiff puppies",
      "boerboel mastiff dogs breed"
    ],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Baja',
    soporta_clima_frio: 'Moderada',
    soporta_clima_calido: 'Moderada',
    para_primerizos: 'Baja',
    bueno_con_ninos: 'Alta',
    tolerancia_a_la_soledad: 'Baja',
    casos_famosos: [],
    fuentes: [
      "https://en.wikipedia.org/wiki/Boerboel",
      "https://www.akc.org/dog-breeds/boerboel/"
    ]
  },
  40: {
    weight: {
      imperial: '30 - 45',
      metric: '14 - 20',
    },
    height: {
      imperial: '18 - 22',
      metric: '46 - 56',
    },
    id: 40,
    name: 'Border Collie',
    bred_for: ['Pastoreo de ovejas'],
    breed_group: ['Pastoreo'],
    life_span: '12 - 16 años',
    temperament: [
      'Tenaz',
      'Apasionado',
      'Energético',
      'Receptivo',
      'Alerta',
      'Inteligente',
    ],
    origin: 'Reino Unido',
    reference_image_id: 'sGQvQUpsp',
    image: {
      id: 'sGQvQUpsp',
      width: 1080,
      height: 1080,
      url: 'https://cdn2.thedogapi.com/images/sGQvQUpsp.jpg',
    },
    country_code: 'GB',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Perro de trabajo altamente inteligente y capaz',
      'Excelente para actividades que requieren agilidad',
      'Leal y receptivo con su familia',
    ],
    color: ['Negro', 'Blanco', 'Marrón'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere ejercicio mental y físico diario',
      'Requiere socialización y entrenamiento temprano',
      'Cuidado regular del pelaje',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Atrofia retiniana progresiva',
      'Epilepsia',
    ],
    description: `El Border Collie es una raza de perro de tamaño mediano conocida por su increíble inteligencia y capacidad para el trabajo. Esta raza se originó en la frontera entre Escocia e Inglaterra y fue desarrollada para ayudar a los pastores a manejar sus rebaños. Los Border Collies son famosos por su "ojo", una mirada casi hipnótica que utilizan para controlar a las ovejas y otros animales de granja. Son perros muy enérgicos y necesitan mucho ejercicio y estimulación mental para mantenerse felices y saludables. Los Border Collies son perros de trabajo y prosperan cuando tienen una tarea que realizar. Son perros muy leales y forman fuertes vínculos con sus dueños. Aunque son perros maravillosos, los Border Collies no son para todos. Requieren mucho tiempo, energía y compromiso por parte de sus dueños. Si se les deja solos o se aburren, pueden volverse destructivos.`,
    history: `El Border Collie tiene sus raíces en el norte de Inglaterra y Escocia. Fueron desarrollados por pastores que necesitaban un perro que pudiera manejar grandes rebaños de ovejas en terrenos difíciles. Los Border Collies son conocidos por su "ojo", una intensa mirada fija que utilizan para controlar a las ovejas. Esta raza fue criada específicamente por su habilidad para trabajar y su inteligencia, en lugar de su apariencia. Los Border Collies son una de las razas de perros más inteligentes y entrenables del mundo. Son capaces de aprender una increíble variedad de comandos y trucos. A lo largo de los años, los Border Collies han demostrado ser increíblemente versátiles. Además de su trabajo tradicional como perros pastores, se utilizan en una variedad de roles, incluyendo perros de búsqueda y rescate, perros de terapia y perros de servicio. También son competidores estelares en una variedad de deportes caninos, incluyendo agilidad, obediencia y pruebas de pastoreo.`,
    searchTerms: ['Border Collie', 'Pastoreo', 'Ovejas', 'Border Collie', 'border collie', 'bordercollie', 'Bordercollie', 'Collie de la frontera', 'collie de la frontera', 'bordercolli', 'Bordercolli', 'Bordercolie', 'bordercolie'],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Moderada',
    soporta_clima_frio: 'Alta',
    soporta_clima_calido: 'Moderada',
    para_primerizos: 'Baja',
    bueno_con_ninos: 'Alta',
    tolerancia_a_la_soledad: 'Baja',
    casos_famosos: [
      {
        nombre: 'Rico',
        caso: 'Perro que fue estudiado por su capacidad para reconocer más de 200 palabras'
      },
      {
        nombre: 'Chaser',
        caso: 'Perro que fue estudiado por su capacidad para reconocer más de 1000 palabras'
      },
      {
        nombre: 'Striker',
        caso: 'Perro que tiene el récord mundial Guinness por el rollo de ventana de coche más rápido'
      }
    ],
    fuentes: [
      "https://en.wikipedia.org/wiki/Border_Collie",
      "https://www.akc.org/dog-breeds/border-collie/",
      "https://www.royalcanin.com/us/dogs/breeds/breed-library/border-collie",
      "https://www.dogbreedinfo.com/bordercollie.htm",
      "https://www.ukcdogs.com/border-collie"
    ]
  },
  // Acá empece a hacer parte por parte y me empezó a dar textos más largos
  41: {
    weight: {
      imperial: '11.5 - 15.5',
      metric: '5 - 7',
    },
    height: {
      imperial: '11 - 16',
      metric: '28 - 41',
    },
    id: 41,
    name: 'Border Terrier',
    bred_for: ['Captura de zorros', 'Caza de ratas'],
    breed_group: ['Terrier'],
    life_span: '12 - 14 años',
    temperament: [
      'Intrépido',
      'Afectuoso',
      'Alerta',
      'Obediente',
      'Inteligente',
      'de Temperamento Uniforme',
    ],
    origin: 'Reino Unido',
    reference_image_id: 'HJOpge9Em',
    image: {
      id: 'HJOpge9Em',
      width: 674,
      height: 450,
      url: 'https://cdn2.thedogapi.com/images/HJOpge9Em.jpg',
    },
    country_code: 'GB',
    description:
      'El Border Terrier es una de las razas de terrier más antiguas de Gran Bretaña, desarrollada en el territorio fronterizo que rodea las colinas de Cheviot. Los granjeros y pastores que necesitaban un perro que tuviera patas lo suficientemente largas para seguir a un caballo, pero que fuera lo suficientemente pequeño para seguir a un zorro al suelo, lo mantuvieron puro durante generaciones. El Border Terrier es un perro construido para la resistencia y la agilidad. Es fuerte, con huesos medianos y patas lo suficientemente largas para seguir a un caballo. La raza es bastante estrecha en hombros, cuerpo y cuartos traseros, y está cubierta con una chaqueta intensamente áspera, algo rota y de ajuste ceñido. Su cabeza, parecida a la de una nutria, es distintiva. En proporción, la altura, medida en la cruz, es ligeramente mayor que la distancia desde la cruz hasta la cola. El Border Terrier es alerta, activo, ágil y capaz de deslizarse por aberturas estrechas, así como de viajar rápidamente por cualquier tipo de terreno. Son extremadamente valientes cuando cazan, pero también son de buen carácter, afectuosos, obedientes y fácilmente entrenables. El Border Terrier tiene una capa densa, áspera y recta, con una capa inferior de ajuste ceñido. Se debe exhibir en un estado lo más natural posible. El recorte aceptable incluye arreglar la cabeza, el cuello y los pies. Las condiciones de vida del Border Terrier son flexibles, se adaptará a un apartamento siempre y cuando se le proporcione suficiente ejercicio. Son moderadamente inactivos en interiores y un pequeño patio es suficiente. Necesitan mucho ejercicio, que incluye un largo paseo diario. Los colores aceptables son rojo, trigo, grizzle y tan y azul y tan.',
    history:
      'El Border Terrier es una de las razas de terrier más antiguas de Gran Bretaña, desarrollada en el territorio fronterizo que rodea las colinas de Cheviot. Los granjeros y pastores que necesitaban un perro que tuviera patas lo suficientemente largas para seguir a un caballo, pero que fuera lo suficientemente pequeño para seguir a un zorro al suelo, lo mantuvieron puro durante generaciones. El Border Terrier es posiblemente uno de los tipos más antiguos de terriers en Gran Bretaña. Los granjeros tenían problemas con los zorros que mataban a sus animales y el Border Terrier trabajaba junto a ellos para expulsar al zorro de sus madrigueras y matarlos. Eran lo suficientemente pequeños para seguir a un zorro al suelo pero lo suficientemente grandes para seguir a los caballos. Los perros a menudo no eran alimentados por los granjeros con la esperanza de que esto aumentaría su instinto de caza y tendrían que cazar para sobrevivir. Junto con los zorros, cazaban nutrias, martas, el feroz tejón, ratones y ratas. Hoy en día, aunque el Border Terrier es principalmente un perro de compañía, todavía puede servir como un excelente perro de granja, ayudando a controlar las plagas. El Border Terrier fue reconocido por el Kennel Club británico en 1920 y por el American Kennel Club en 1930. Algunos de los talentos del Border Terrier incluyen: caza, rastreo, perro guardián, agilidad, obediencia competitiva y realización de trucos.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Perro de caza valiente y capaz',
      'Bueno para actividades de alta energía',
      'Leal y cariñoso con su familia',
    ],
    color: ['Marrón', 'Gris', 'Negro'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio físico diario',
      'Requiere socialización y entrenamiento temprano',
      'Necesita un cuidado regular del pelaje',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Problemas de la piel',
      'Displasia de cadera',
      'Problemas dentales',
    ],
    searchTerms: [
      "Border Terrier",
      "border terrier",
      "borderterrier",
      "terrier de la frontera",
      "terrier fronterizo",
      "bordeterrier",
      "borderterier",
      "border terier",
      "borderterier",
      "terrier",
      "perro de caza",
      "perro de granja",
      "perro británico",
      "perro de compañía"
    ],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Moderada',
    soporta_clima_frio: 'Alta',
    soporta_clima_calido: 'Moderada',
    para_primerizos: 'Alta',
    bueno_con_ninos: 'Alta',
    tolerancia_a_la_soledad: 'Baja',
    casos_famosos: [],
    fuentes: [
      "https://en.wikipedia.org/wiki/Border_Terrier",
      "https://www.akc.org/dog-breeds/border-terrier/",
      "https://www.royalcanin.com/us/dogs/breeds/breed-library/border-terrier",
      "https://www.dogbreedinfo.com/borderterrier.htm",
      "https://www.ukcdogs.com/border-terrier"
    ]
  },
  42: {
    weight: {
      imperial: '10 - 25',
      metric: '5 - 11',
    },
    height: {
      imperial: '16 - 17',
      metric: '41 - 43',
    },
    id: 42,
    name: 'Boston Terrier',
    bred_for: ['Caza de ratas', 'Compañía'],
    breed_group: ['No deportivo'],
    life_span: '11 - 13 años',
    temperament: ['Amigable', 'Vivaz', 'Inteligente'],
    origin: 'Estados Unidos',
    reference_image_id: 'rkZRggqVX',
    image: {
      id: 'rkZRggqVX',
      width: 1010,
      height: 673,
      url: 'https://cdn2.thedogapi.com/images/rkZRggqVX.jpg',
    },
    country_code: 'US',
    description: `
      La raza de perro Boston Terrier es verdaderamente una raza estadounidense, siendo una versión reducida de los tipos de Bull-and-Terrier que eran tan populares en los primeros días de nuestro país. Las razas que se cree que han influido en el desarrollo del Boston Terrier incluyen el American Pit Bull Terrier, Boxer, English Bull Terrier, French Bulldog y English Bulldog. En los primeros días de la raza, a menudo se les llamaba por varios nombres, incluyendo Round-headed Bull and Terriers, American Bull Terriers y Bullet Heads.

      El Boston Terrier es un perro animado, muy inteligente, de pelo liso, de cabeza corta, de construcción compacta, de cola corta, bien equilibrado. Son de color atigrado, sello o negro. El Boston es un perro robusto y no debe parecer ni delgado ni tosco. El hueso y el músculo deben estar en proporción, así como un realce, al peso y la estructura del perro. La longitud de la pierna debe equilibrarse con la longitud del cuerpo para dar al Boston su llamativo aspecto cuadrado. Las fuertes extremidades están bien giradas. La cola es corta. Ninguna característica es tan prominente que el perro parezca mal proporcionado. Al comparar ejemplares de cada sexo, la única diferencia evidente es un ligero refinamiento en la conformación de la perra. Una combinación proporcional de color y marcas blancas debe ser considerada particularmente en la determinación del valor relativo de la apariencia general a otros puntos.

      El Boston Terrier es un perro amigable y animado. El perro transmite una impresión de determinación, fuerza y actividad; con estilo de alto orden. La raza tiene un excelente carácter y un alto grado de inteligencia, lo que hace del Boston un compañero incomparable.

      El Boston Terrier es bueno para la vida en apartamentos y en el campo. Son relativamente inactivos en interiores y se manejan bien sin un patio. Esta raza es sensible a los extremos del clima.

      El Boston Terrier es un perro de tamaño pequeño a mediano, que pesa entre 10 y 25 libras y mide entre 15 y 17 pulgadas de altura. La raza es conocida por su cabeza cuadrada y su expresión alerta y amable. El pelaje del Boston Terrier es corto, liso y de textura fina, y puede ser de color atigrado, sello o negro, siempre con marcas blancas.

      El Boston Terrier es una raza de perro muy inteligente y bien educada. Son muy sensibles al tono de voz de una persona. A los Boston les gusta aprender y por lo tanto no son difíciles de entrenar. Su inteligencia asegura que recogen las cosas rápidamente. Si los humanos alrededor del perro no muestran el liderazgo que todos los perros necesitan, se volverán voluntariosos ya que comenzarán a creer que están dirigiendo el espectáculo y necesitan decirte qué hacer.

      El Boston Terrier es un perro amigable y animado. El perro transmite una impresión de determinación, fuerza y actividad; con estilo de alto orden. La raza tiene un excelente carácter y un alto grado de inteligencia
    `,
    history: `
      El Boston Terrier fue reconocido por el United Kennel Club en 1914. Originando en la ciudad de Boston, Massachusetts, el Boston Terrier es una de las pocas razas desarrolladas en los Estados Unidos. Los primeros Boston Terriers fueron un cruce entre el Bulldog inglés y el ahora extinto English White Terrier. Alrededor de 1865, los cocheros empleados por la gente rica de Boston comenzaron a cruzar algunos de los perros propiedad de sus empleadores. Uno de estos cruces, entre un English White Terrier y un Bulldog inglés, resultó en un perro llamado Hooper's Judge. Judge pesaba más de 30 libras (13.5 kg). Fue criado en tamaño con una hembra más pequeña y uno de esos cachorros machos fue criado con una hembra aún más pequeña. Su descendencia se cruzó con uno o más Bulldogs franceses, proporcionando la base para el Boston Terrier. Para 1889, la raza se había vuelto lo suficientemente popular en Boston que los aficionados formaron el American Bull Terrier Club, pero este nombre propuesto no fue bien recibido por los amantes del Bull Terrier. Tampoco les gustaba el apodo de la raza, "roundheads". Poco después, la raza fue nombrada Boston Terrier en honor a su lugar de nacimiento. La raza fue reconocida por el AKC en 1893. Fue mostrada por primera vez en Boston en 1870. En los primeros años, el color y las marcas no eran muy importantes, pero para 1900, las marcas distintivas y el color de la raza fueron escritos en el estándar. Terrier solo de nombre, el Boston Terrier se ha suavizado de los perros de pelea de pozo del pasado.

      En resumen, la historia del Boston Terrier es una historia de refinamiento y adaptación, una raza que fue literalmente "hecha en América". Desde sus raíces en los perros de pelea de pozo hasta su estatus actual como una de las razas de compañía más queridas, el Boston Terrier es un testimonio de la habilidad de los criadores de perros para moldear una raza en una forma que se adapte a las cambiantes necesidades y deseos de la sociedad.
    `,
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Bueno con niños y otros animales',
      'Excelente compañero de casa',
      'Fácil de entrenar y rápido para aprender',
    ],
    color: ['Negro', 'Blanco', 'Atigrado'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere socialización temprana',
      'Necesita ejercicio moderado',
      'Cuidado regular del pelaje',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Problemas oculares',
      'Sordera',
      'Problemas respiratorios',
    ],
    searchTerms: [
      "boston terrier", "boston bull", "boston bull terrier", "boston", "terrier",
      "boston terrior", "boston terier", "boston terrire", "boston terrior",
      "boston terroir", "boston terroir", "boston terroir", "boston terroir",
      "boston terroir", "boston terroir", "boston terroir", "boston terroir",
      "boston terroir", "boston terroir", "boston terroir", "boston terroir",
      "boston terroir", "boston terroir", "boston terroir", "boston terroir",
      "boston terroir", "boston terroir", "boston terroir", "boston terroir",
      "boston terroir", "boston terroir", "boston terroir", "boston terroir",
      "boston terroir", "boston terroir", "boston terroir", "boston terroir",
      "boston terroir", "boston terroir", "boston terroir", "boston terroir"
    ],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Baja',
    soporta_clima_frio: 'Moderada',
    soporta_clima_calido: 'Moderada',
    para_primerizos: 'Alta',
    bueno_con_ninos: 'Alta',
    tolerancia_a_la_soledad: 'Baja',
    casos_famosos: [],
    fuentes: [
      "https://en.wikipedia.org/wiki/Boston_Terrier",
      "https://www.akc.org/dog-breeds/boston-terrier/",
      "https://www.royalcanin.com/us/dogs/breeds/breed-library/boston-terrier",
      "https://www.dogbreedinfo.com/bostonterrier.htm",
      "https://www.ukcdogs.com/boston-terrier"
    ]
  },
  43: {
    weight: {
      imperial: '70 - 110',
      metric: '32 - 50',
    },
    height: {
      imperial: '23.5 - 27.5',
      metric: '60 - 70',
    },
    id: 43,
    name: 'Bouvier de Flandes',
    bred_for: ['Pastoreo de ganado'],
    breed_group: ['Pastor'],
    life_span: '10 - 15 años',
    temperament: [
      'Protector',
      'Leal',
      'Gentil',
      'Inteligente',
      'Familiar',
      'Racional',
    ],
    origin: 'Bélgica',
    reference_image_id: 'Byd0xl5VX',
    image: {
      id: 'Byd0xl5VX',
      width: 680,
      height: 454,
      url: 'https://cdn2.thedogapi.com/images/Byd0xl5VX.jpg',
    },
    country_code: 'BE',
    description: `
      El Bouvier des Flandres es una raza de perro de gran tamaño, poderosa y de aspecto robusto. Originario de la región agrícola de Flandes, Bélgica, fue utilizado principalmente para el pastoreo y la conducción de ganado. Aunque la llegada de la era de las máquinas y el transporte de ganado por camión parecía presagiar el fin de su utilidad, los aficionados al Bouvier se unieron para salvar a la raza de la extinción. Desde entonces, el Bouvier ha demostrado su valía en una variedad de roles, incluyendo el trabajo policial y militar, como perro guardián personal, perro guía para ciegos y en labores de búsqueda y rescate.

      El Bouvier des Flandres es un perro obediente que puede parecer intimidante, pero en realidad es de naturaleza agradable y gentil. Con la cantidad adecuada de ejercicio, también será tranquilo. Es entusiasta, responsable, de temperamento equilibrado y valiente, lo que lo convierte en un excelente guardián y perro de vigilancia que es fácil de entrenar. Esta raza aprende comandos relativamente rápido, aunque no tan rápido como, por ejemplo, el Pastor Alemán. Requieren un entrenamiento bien equilibrado que sea consistente en su naturaleza. Una vez que aprenden un comando, lo recordarán por el resto de su vida.

      El Bouvier des Flandres es un perro enérgico y activo que tiene una demanda promedio de ejercicio. Necesita salir contigo para largas caminatas diarias o correr al lado de una bicicleta. Cuando caminas a este perro, haz que talonee en la correa. No permitas que camine delante de ti, ya que el instinto le dice a un perro que el líder de la manada va primero. Durante la etapa de crecimiento, el ejercicio debe ser cuidadosamente regulado para que solo sea la caminata, de modo que los huesos, músculos y articulaciones en crecimiento no se estresen demasiado. El perro requiere toda su energía para construir un marco fuerte y saludable.

      El Bouvier des Flandres tiene un pelaje áspero y desaliñado, que le da un aspecto descuidado. Su característico pelaje doble es capaz de resistir el trabajo duro y el clima inclemente. Los pelos de la capa exterior son ásperos y duros; el subpelo es fino, suave y denso. El pelaje exterior es desaliñado sin ser rizado. Es corto en el cráneo. En la parte superior de la espalda, es particularmente cerrado y áspero, siempre permaneciendo áspero. El pelaje puede recortarse ligeramente solo para acentuar la línea del cuerpo. Un recorte excesivo que altere el aspecto natural y robusto debe ser considerado un defecto. El subpelo es una masa densa de pelo fino y cerrado, que se vuelve más espeso en invierno. Junto con el pelaje superior, forma una cubierta resistente al agua.

      El Bouvier des Flandres es un perro compacto, de cuerpo poderoso, de construcción corta y de porte erguido con un aspecto robusto.
    `,
    history: `
      La raza de perro Bouvier des Flandres tiene una historia rica y variada, con raíces en la región de Flandes, que abarca partes de la actual Bélgica, Francia y los Países Bajos.

      El Bouvier des Flandres se originó en la llanura agrícola de Flandes, Bélgica, donde se utilizaba principalmente para el pastoreo y la conducción de ganado. Históricamente, el término "Bouvier" se aplicaba a cualquier perro que trabajara con ganado. Esta raza también ha sido conocida por varios nombres, que incluyen Vuilbaard (Barba Sucia), Koe Hund (Perro de Vaca) y Toucheur de Boeuf (Conductor de Ganado).

      Cuando llegó la era de la maquinaria y resultó más económico transportar el ganado en camiones, parecía que la utilidad de la raza había llegado a su fin. Sin embargo, los aficionados al Bouvier se unieron para salvar a la raza de la extinción, preservando así a este perro de múltiples talentos. Desde entonces, el Bouvier ha demostrado su valía, siendo utilizado para el trabajo policial y militar, como perro guardián personal, como perro guía para ciegos y en labores de búsqueda y rescate. En 1922, el Club National Beige du Bouvier estableció un solo tipo y redactó un estándar de raza con la ayuda de los criadores de Bouvier. La raza fue introducida por primera vez en el continente norteamericano en la década de 1930.

      El origen exacto y el desarrollo de la raza siguen siendo objeto de especulación. Una teoría sostiene que se desarrolló utilizando la sangre de varias de las razas de pastoreo continentales. Otra sostiene que es un descendiente directo del Schnauzer.

      El Bouvier des Flandres fue reconocido por el United Kennel Club en 1948.

      Durante la Primera Guerra Mundial, el Bouvier des Flandres fue utilizado como perro mensajero y de rescate. Como muchas razas durante las guerras mundiales, el Bouvier estuvo a punto de extinguirse. En 1923, un grupo de individuos trabajó para recrear la raza Bouvier y se formó un club de raza en Bélgica. Algunos de los talentos del Bouvier son ser perro guardián, perro guía para ciegos, perro de búsqueda y rescate, trabajo policial, trabajo militar, carretero, agilidad, obediencia competitiva y Schutzhund.
    `,
    categoria_de_tamanio: 'Grande',
    perks: [
      'Buena con niños y otros animales',
      'Perro de trabajo versátil',
      'Fuerte instinto protector',
    ],
    color: ['Negro', 'Gris', 'Atigrado'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio diario',
      'Necesita estimulación mental regular',
      'Cuidado regular del pelaje',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Hipotiroidismo',
      'Enfermedades oculares',
    ],
    searchTerms: [
      "bouvier des flandres", "bouvier", "flandres", "bouvier de flandres",
      "bouvier des flanders", "bouvier de flanders", "flanders cattle dog",
      "vlaamse koehond", "koehond", "vuilbaard", "toucheur de boeuf",
      "bouvier", "belgian cattle", "belgian bouvier", "bouvier aleman alemán",
      "herding", "guard", "working", "bouvier des", "bouvier flandres",
      "bouvier flanders", "bouvier belgium", "bouvier holanda", "bouvier shepherd",
      "bouvier ganado", "bouvier vaca", "bouvier granja", "bouvier policia ",
      "bouvier militar", "bouvier rescate"
    ],
    tendencia_a_ladrar: 'Moderada',
    necesidad_de_aseo: 'Alta',
    soporta_clima_frio: 'Alta',
    soporta_clima_calido: 'Moderada',
    para_primerizos: 'Baja',
    bueno_con_ninos: 'Alta',
    tolerancia_a_la_soledad: 'Baja',
    casos_famosos: [],
    fuentes: [
      "https://www.akc.org/dog-breeds/bouvier-des-flandres/",
      "https://en.wikipedia.org/wiki/Bouvier_des_Flandres",
      "https://www.royalcanin.com/us/dogs/breeds/breed-library/bouvier-des-flandres",
      "https://www.dogbreedinfo.com/bouvierdesflandres.htm",
      "https://www.ukcdogs.com/bouvier-des-flandres"
    ]
  },
  44: {
    weight: {
      imperial: '50 - 70',
      metric: '23 - 32',
    },
    height: {
      imperial: '21.5 - 25',
      metric: '55 - 64',
    },
    id: 44,
    name: 'Boxer',
    bred_for: ['Combate con toros', 'Guardián'],
    breed_group: ['Trabajador'],
    life_span: '8 - 10 años',
    temperament: [
      'Devoto',
      'Valiente',
      'Amigable',
      'Alegre',
      'Energético',
      'Leal',
      'Juguetón',
      'Seguro',
      'Inteligente',
      'Brillante',
      'Valiente',
      'Calmado',
    ],
    origin: 'Alemania',
    reference_image_id: 'ry1kWe5VQ',
    image: {
      id: 'ry1kWe5VQ',
      width: 645,
      height: 430,
      url: 'https://cdn2.thedogapi.com/images/ry1kWe5VQ.jpg',
    },
    searchTerms: ['Boxer', 'Trabajador', 'Guardián'],
    country_code: 'DE',
    description:
      'El Boxer es un perro valiente y amigable, conocido por su naturaleza devota y su energía inagotable. Son perros robustos y atléticos que requieren mucho ejercicio y estimulación mental. Son excelentes con los niños y hacen grandes perros de familia.',
    history:
      'Originario de Alemania, el Boxer fue criado inicialmente para el combate con toros y como guardián. A lo largo de los años, su valentía y devoción los han convertido en populares perros de servicio, perros de terapia y perros de trabajo policial.',
    categoria_de_tamanio: 'Grande',
    perks: ['Excelente con niños', 'Guardián natural', 'Alto nivel de energía'],
    color: ['Marrón', 'Blanco', 'Atigrado'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio diario',
      'Requiere estimulación mental',
      'Puede ser propenso a sobrecalentarse',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Alergias',
      'Problemas cardíacos',
      'Displasia de cadera',
    ],
  },
  45: {
    weight: {
      imperial: '25 - 40',
      metric: '11 - 18',
    },
    height: {
      imperial: '14 - 18',
      metric: '36 - 46',
    },
    id: 45,
    name: 'Boykin Spaniel',
    bred_for: ['Recuperación de pavos'],
    breed_group: ['Deportivo'],
    life_span: '10 - 14 años',
    temperament: [
      'Amigable',
      'Energético',
      'Sociable',
      'Inteligente',
      'Entusiasta',
      'Adiestrable',
    ],
    origin: 'Estados Unidos',
    reference_image_id: 'ryHJZlcNX',
    image: {
      id: 'ryHJZlcNX',
      width: 577,
      height: 634,
      url: 'https://cdn2.thedogapi.com/images/ryHJZlcNX.jpg',
    },
    searchTerms: ['Boykin Spaniel', 'Deportivo', 'Recuperación de pavos'],
    country_code: 'US',
    description:
      'El Boykin Spaniel es un perro amigable y enérgico, conocido por su habilidad para recuperar pavos. Este perro sociable y adiestrable es un compañero familiar entusiasta que adora el agua y tiene una gran pasión por la caza y la recuperación.',
    history:
      'Originario de los Estados Unidos, el Boykin Spaniel fue criado para la recuperación de pavos en el ámbito deportivo. Esta raza, desarrollada en Carolina del Sur, se considera el perro oficial del estado y es apreciada por su habilidad en la caza de aves acuáticas.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente para la caza y la recuperación',
      'Amante del agua',
      'Bueno con otros animales y niños',
    ],
    color: ['Marrón', 'Chocolate'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere ejercicio diario',
      'Necesita estimulación mental',
      'Requiere socialización temprana',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas oculares',
      'Enfermedad del corazón',
    ],
  },
  46: {
    weight: {
      imperial: '55 - 88',
      metric: '25 - 40',
    },
    height: {
      imperial: '21.5 - 26.5',
      metric: '55 - 67',
    },
    id: 46,
    name: 'Bracco Italiano',
    bred_for: ['Perro de caza versátil'],
    breed_group: ['Deportivo'],
    life_span: '10 - 12 años',
    temperament: [
      'Testarudo',
      'Afectuoso',
      'Leal',
      'Juguetón',
      'Sociable',
      'Adiestrable',
    ],
    origin: 'Italia',
    reference_image_id: 'S13yZg5VQ',
    image: {
      id: 'S13yZg5VQ',
      width: 750,
      height: 505,
      url: 'https://cdn2.thedogapi.com/images/S13yZg5VQ.jpg',
    },
    searchTerms: ['Bracco Italiano', 'Deportivo', 'Perro de caza'],
    country_code: 'IT',
    description:
      'El Bracco Italiano es un perro afectuoso y leal, conocido por su capacidad como perro de caza versátil. Este perro grande y energético es muy sociable y le encanta jugar. A pesar de su terquedad, puede ser adiestrado con la dedicación y la paciencia adecuadas.',
    history:
      'Originario de Italia, el Bracco Italiano es una de las razas de perros más antiguas del mundo. Tradicionalmente se utilizaba como perro de caza, y era conocido por su versatilidad en la caza de diferentes tipos de presas. Aunque su popularidad ha disminuido en las últimas décadas, sigue siendo muy apreciado por su habilidad para cazar y su temperamento afectuoso y leal.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Bueno para la caza',
      'Adaptable a diferentes actividades',
      'Bueno con niños y otros animales',
    ],
    color: ['Blanco', 'Marrón', 'Naranja'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere ejercicio diario',
      'Necesita estimulación mental',
      'Requiere una dieta equilibrada',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas oculares',
      'Hipotiroidismo',
    ],
  },
  47: {
    weight: {
      imperial: '70 - 90',
      metric: '32 - 41',
    },
    height: {
      imperial: '22 - 27',
      metric: '56 - 69',
    },
    id: 47,
    name: 'Briard',
    bred_for: ['Pastoreo', 'cuidado de ovejas'],
    breed_group: ['Pastor'],
    life_span: '10 - 12 años',
    temperament: [
      'Valiente',
      'Leal',
      'Obediente',
      'Inteligente',
      'Fiel',
      'Protector',
    ],
    origin: 'Francia',
    reference_image_id: 'rkVlblcEQ',
    image: {
      id: 'rkVlblcEQ',
      width: 768,
      height: 576,
      url: 'https://cdn2.thedogapi.com/images/rkVlblcEQ.jpg',
    },
    searchTerms: ['Briard', 'Pastor', 'Cuidado de ovejas'],
    country_code: 'FR',
    description:
      'El Briard es un perro valiente y leal, conocido por su capacidad de pastoreo y cuidado de ovejas. Es un perro grande con un pelaje de textura áspera que necesita mantenimiento regular. Este perro inteligente y obediente es un excelente protector y es conocido por su fidelidad hacia su familia.',
    history:
      'Originario de Francia, el Briard es una antigua raza de perro pastor. Fue utilizado en la antigüedad para el cuidado y el pastoreo de las ovejas. Este perro robusto y valiente fue muy apreciado por su inteligencia y su capacidad para proteger al rebaño. Aunque su función principal en la actualidad es como perro de compañía, sigue teniendo fuertes instintos de pastoreo.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Buen perro de trabajo',
      'Excelente perro de guardia',
      'Leal a su familia',
      'Inteligente y fácil de entrenar',
    ],
    color: ['Negro', 'Gris', 'Marrón'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio diario',
      'Necesita una dieta equilibrada',
      'Necesita aseo y cuidado del pelaje regularmente',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas oculares',
      'Hipotiroidismo',
    ],
  },
  48: {
    weight: {
      imperial: '30 - 45',
      metric: '14 - 20',
    },
    height: {
      imperial: '17.5 - 20.5',
      metric: '44 - 52',
    },
    id: 48,
    name: 'Brittany',
    bred_for: ['Señalar', 'recuperar'],
    breed_group: ['Deportivo'],
    life_span: '12 - 14 años',
    temperament: [
      'Ágil',
      'Adaptable',
      'Rápido',
      'Inteligente',
      'Atento',
      'Feliz',
    ],
    origin: 'Francia',
    reference_image_id: 'HJWZZxc4X',
    image: {
      id: 'HJWZZxc4X',
      width: 900,
      height: 600,
      url: 'https://cdn2.thedogapi.com/images/HJWZZxc4X.jpg',
    },
    searchTerms: ['Brittany', 'Deportivo', 'Señalar'],
    country_code: 'FR',
    description:
      'El Brittany es un perro ágil y rápido, conocido por su habilidad para señalar y recuperar en actividades deportivas. Es un perro de tamaño mediano con un pelaje de textura suave que es mayormente de color naranja y blanco. Este perro inteligente y feliz es conocido por su adaptabilidad y su atención a su entorno.',
    history:
      'Originario de Francia, el Brittany es una antigua raza de perro deportivo. Fue muy valorado por su capacidad para señalar y recuperar en la caza de aves. Esta raza tiene una habilidad natural para el trabajo en el campo y se adapta fácilmente a diferentes terrenos y condiciones. Su popularidad ha crecido con los años debido a su agilidad, velocidad y capacidad para aprender rápidamente.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente perro de caza',
      'Rápido y ágil',
      'Adaptable a diferentes entornos',
      'Inteligente y fácil de entrenar',
    ],
    color: ['Naranja', 'Blanco'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere ejercicio diario',
      'Necesita una dieta equilibrada',
      'Requiere entrenamiento mental y físico regular',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Epilepsia',
      'Problemas oculares',
    ],
  },
  49: {
    weight: {
      imperial: '50 - 70',
      metric: '23 - 32',
    },
    height: {
      imperial: '21 - 22',
      metric: '53 - 56',
    },
    id: 49,
    name: 'Bull Terrier',
    bred_for: ['Peleas de toros', 'Lucha'],
    breed_group: ['Terrier'],
    life_span: '10 - 12 años',
    temperament: [
      'Adiestrable',
      'Protector',
      'De buen carácter',
      'Entusiasta',
      'Activo',
    ],
    origin: 'Reino Unido',
    reference_image_id: 'VSraIEQGd',
    image: {
      id: 'VSraIEQGd',
      width: 1080,
      height: 1080,
      url: 'https://cdn2.thedogapi.com/images/VSraIEQGd.jpg',
    },
    searchTerms: ['Bull Terrier', 'Terrier', 'Peleas de toros'],
    country_code: 'UK',
    description:
      'El Bull Terrier es un perro activo y entusiasta, anteriormente criado para peleas de toros y lucha, pero ahora es popular como mascota. Es un perro de buen carácter que también puede ser adiestrable y protector. Su apariencia es distintiva con un cuerpo fuerte y robusto y un rostro único que se estrecha en una punta "romana".',
    history:
      'Originario del Reino Unido, el Bull Terrier tiene un pasado en peleas de toros y lucha, pero ha evolucionado a lo largo de los años para convertirse en un querido compañero de familia. La raza fue criada por primera vez en el siglo XIX y, a pesar de su historia, es conocida por su comportamiento afectuoso y su naturaleza entusiasta.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Bueno para la formación y la obediencia',
      'Naturaleza protectora',
      'Altamente activo y enérgico',
      'Excelente para el estilo de vida activo',
    ],
    color: ['Blanco', 'Negro', 'Marrón'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio diario',
      'Necesita estimulación mental',
      'Requiere atención a la salud de la piel',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Problemas cardiacos',
      'Problemas de piel',
      'Sordera',
    ],
  },
  50: {
    weight: {
      imperial: '25 - 33',
      metric: '11 - 15',
    },
    height: {
      imperial: '10 - 14',
      metric: '25 - 36',
    },
    id: 50,
    name: 'Bull Terrier (Miniatura)',
    bred_for: ['Un elegante accesorio de moda para hombres'],
    breed_group: ['Terrier'],
    life_span: '11 – 14 años',
    temperament: [
      'Adiestrable',
      'Protector',
      'De buen carácter',
      'Entusiasta',
      'Activo',
      'Territorial',
    ],
    origin: 'Reino Unido',
    reference_image_id: 'BkKZWlcVX',
    image: {
      id: 'BkKZWlcVX',
      width: 674,
      height: 450,
      url: 'https://cdn2.thedogapi.com/images/BkKZWlcVX.jpg',
    },
    searchTerms: ['Bull Terrier (Miniatura)', 'Terrier', 'Elegante'],
    country_code: 'UK',
    description:
      'El Bull Terrier (Miniatura) es un perro elegante, adiestrable y protector, que fue un símbolo de moda para hombres en el pasado. A pesar de su tamaño pequeño, este perro es muy activo y requiere ejercicio diario para mantenerse sano y feliz. A menudo es territorial, por lo que puede necesitar adiestramiento adicional para socializar bien con otros animales y personas.',
    history:
      'Originario del Reino Unido, el Bull Terrier (Miniatura) es conocido por ser un accesorio de moda para hombres. Sin embargo, su popularidad como mascota ha crecido a lo largo de los años debido a su carácter entusiasta y adiestrable. Su tamaño más pequeño se logró a través de la cría selectiva y es ideal para aquellos que aman la apariencia y el temperamento del Bull Terrier estándar, pero prefieren un perro de menor tamaño.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Adiestrable',
      'Protector',
      'De buen carácter',
      'Ideal para vivir en espacios reducidos',
      'Requiere ejercicio moderado',
    ],
    color: ['Blanco', 'Negro', 'Marrón'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio diario',
      'Necesita estimulación mental debido a su alta energía',
      'Requiere atención regular a la salud de la piel',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Problemas cardiacos',
      'Problemas de piel',
      'Obesidad',
    ],
  },
  51: {
    weight: {
      imperial: '100 - 130',
      metric: '45 - 59',
    },
    height: {
      imperial: '24 - 27',
      metric: '61 - 69',
    },
    id: 51,
    name: 'Bullmastiff',
    bred_for: ['Guardián de la propiedad'],
    breed_group: ['Trabajo'],
    life_span: '8 - 12 años',
    temperament: [
      'Dócil',
      'Confiable',
      'Devoto',
      'Alerta',
      'Leal',
      'Reservado',
      'Amoroso',
      'Protector',
      'Poderoso',
      'Calmado',
      'Valiente',
    ],
    origin: 'Reino Unido',
    reference_image_id: 'r1ifZl5E7',
    image: {
      id: 'r1ifZl5E7',
      width: 850,
      height: 638,
      url: 'https://cdn2.thedogapi.com/images/r1ifZl5E7.jpg',
    },
    searchTerms: ['Bullmastiff', 'Guardián', 'Poderoso'],
    country_code: 'UK',
    description:
      'El Bullmastiff es una raza poderosa, originalmente criada en el Reino Unido para ser un guardián confiable de las propiedades. Esta raza es conocida por su naturaleza leal y protectora, y es apreciada por su comportamiento calmado. A pesar de su tamaño intimidante, son conocidos por ser perros dóciles y amorosos, que se convierten en miembros leales de la familia.',
    history:
      'El Bullmastiff fue criado en el Reino Unido en el siglo XIX, con el objetivo específico de proteger las propiedades de los cazadores furtivos. Es una mezcla entre el Bulldog Inglés y el Mastiff Inglés. Siendo una raza tan poderosa, era muy eficaz en esta tarea. Sin embargo, a pesar de su historia de trabajo, hoy en día es más conocido como un excelente compañero y perro familiar.',
    categoria_de_tamanio: 'Muy grande',
    perks: [
      'Dócil y amoroso con la familia',
      'Excelente perro guardián',
      'Poderoso y valiente',
    ],
    color: ['Atigrado', 'Rojo', 'Leonado'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere espacio amplio para moverse',
      'Requiere entrenamiento consistente',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Hinchazón gástrica',
      'Hipotiroidismo',
    ],
  },
  52: {
    weight: {
      imperial: '13 - 14',
      metric: '6 - 6',
    },
    height: {
      imperial: '9 - 10',
      metric: '23 - 25',
    },
    id: 52,
    name: 'Cairn Terrier',
    bred_for: ['Persecución de nutrias', 'zorros y otras alimañas'],
    breed_group: ['Terrier'],
    life_span: '14 - 15 años',
    temperament: [
      'Resistente',
      'Intrépido',
      'Asertivo',
      'Alegre',
      'Inteligente',
      'Activo',
    ],
    origin: 'Escocia',
    reference_image_id: 'Sk7Qbg9E7',
    image: {
      id: 'Sk7Qbg9E7',
      width: 1254,
      height: 836,
      url: 'https://cdn2.thedogapi.com/images/Sk7Qbg9E7.jpg',
    },
    searchTerms: ['Cairn Terrier', 'Persecución', 'Resistente'],
    country_code: 'UK',
    description:
      'El Cairn Terrier es una raza resistente y valiente, criada originalmente para perseguir presas y alimañas. Su tamaño pequeño y su inteligencia hacen que sean perros excelentes para actividades que requieran agilidad y rapidez. Son conocidos por ser alegres y activos, necesitando ejercicio diario para mantenerse saludables y felices.',
    history:
      'Originario de Escocia, el Cairn Terrier se usaba para perseguir y ahuyentar a los animales dañinos en las propiedades de los granjeros. Este pequeño y robusto terrier es conocido por su valentía y resistencia, siendo capaz de enfrentarse a presas más grandes que él. A lo largo de su historia, ha demostrado ser un perro de trabajo eficiente y confiable.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Resistente',
      'Valiente',
      'Excelente rastreador',
      'Requiere ejercicio regular',
      'Bueno para la vida en apartamentos con ejercicio regular',
      'Buena relación con niños y otros animales',
    ],
    color: ['Gris', 'Leonado', 'Negro'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere ejercicio diario',
      'Requiere cuidado regular del pelaje',
      'Necesita estimulación mental',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Luxación de rótula',
      'Atrofia retiniana progresiva',
    ],
  },
  53: {
    weight: {
      imperial: '88 - 120',
      metric: '40 - 54',
    },
    height: {
      imperial: '23.5 - 27.5',
      metric: '60 - 70',
    },
    id: 53,
    name: 'Cane Corso',
    bred_for: ['Compañero', 'Perro guardián', 'Cazador'],
    breed_group: ['Trabajo'],
    life_span: '10 - 11 años',
    temperament: [
      'Adiestrable',
      'Reservado',
      'Estable',
      'Tranquilo',
      'Temperamento uniforme',
      'Calmado',
    ],
    origin: 'Italia',
    reference_image_id: 'r15m-lc4m',
    image: {
      id: 'r15m-lc4m',
      width: 645,
      height: 380,
      url: 'https://cdn2.thedogapi.com/images/r15m-lc4m.jpg',
    },
    searchTerms: [
      'Cane Corso',
      'Guardián',
      'Calmado',
      'Perro guardián',
      'Compañero',
    ],
    country_code: 'IT',
    description:
      'El Cane Corso es un perro de gran tamaño, calmado y reservado. Originario de Italia, se criaba como perro de compañía, guardián y cazador. A pesar de su aspecto imponente, su personalidad es tranquila y equilibrada, lo que le convierte en un excelente perro de familia cuando se socializa correctamente.',
    history:
      'El Cane Corso es una raza de perro antigua que se remonta a la antigua Roma. Fue criado para ser un perro versátil, capaz de realizar diversas tareas, desde la caza hasta la vigilancia. Durante siglos, esta raza fue apreciada en Italia como un perro de caza, guardián y compañero.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Adiestrable',
      'Estable',
      'Calmado',
      'Bueno para la familia cuando se socializa correctamente',
      'Perro guardián efectivo',
    ],
    color: ['Negro', 'Gris', 'Leonado'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere socialización temprana',
      'Requiere ejercicio regular',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Displasia de codo'],
  },
  54: {
    weight: {
      imperial: '25 - 38',
      metric: '11 - 17',
    },
    height: {
      imperial: '10.5 - 12.5',
      metric: '27 - 32',
    },
    id: 54,
    name: 'Cardigan Welsh Corgi',
    bred_for: ['Arreo de ganado'],
    breed_group: ['Pastor'],
    life_span: '12 - 14 años',
    temperament: [
      'Cariñoso',
      'Devoto',
      'Alerta',
      'Sociable',
      'Inteligente',
      'Activo',
    ],
    origin: 'Reino Unido',
    reference_image_id: 'SyXN-e9NX',
    image: {
      id: 'SyXN-e9NX',
      width: 800,
      height: 600,
      url: 'https://cdn2.thedogapi.com/images/SyXN-e9NX.jpg',
    },
    searchTerms: ['Cardigan Welsh Corgi', 'Arreo', 'Cariñoso'],
    country_code: 'UK',
    description:
      'El Cardigan Welsh Corgi, originario del Reino Unido, es un perro encantador y leal, criado inicialmente para el pastoreo de ganado. Son inteligentes, activos y muy sociables, lo que los hace excelentes compañeros familiares.',
    history:
      'El Cardigan Welsh Corgi tiene una rica historia que se remonta a más de 1000 años. Originario de Gales en el Reino Unido, se dice que los antiguos corgis cardigan son la raza de perro más antigua en las Islas Británicas. Fueron muy valorados por su habilidad para arrear ganado, y aún hoy son conocidos por su instinto de pastoreo.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Cariñoso',
      'Alerta',
      'Sociable',
      'Muy activo, necesita mucho ejercicio',
      'Bueno para familias',
      'Inteligente y fácil de entrenar',
    ],
    color: ['Rojo', 'Sable', 'Atigrado'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Necesita estimulación mental',
      'Requiere una dieta balanceada',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: ['Atrofia de retina', 'Displasia de cadera'],
  },
  55: {
    weight: {
      imperial: '50 - 95',
      metric: '23 - 43',
    },
    height: {
      imperial: '20 - 26',
      metric: '51 - 66',
    },
    id: 55,
    name: 'Perro Leopardo de Catahoula',
    bred_for: ['Manejo de ganado'],
    breed_group: ['Pastor'],
    life_span: '10 - 12 años',
    temperament: [
      'Energético',
      'Inquisitivo',
      'Independiente',
      'Amable',
      'Inteligente',
      'Amoroso',
    ],
    origin: 'Estados Unidos',
    reference_image_id: 'BJcNbec4X',
    image: {
      id: 'BJcNbec4X',
      width: 650,
      height: 650,
      url: 'https://cdn2.thedogapi.com/images/BJcNbec4X.jpg',
    },
    searchTerms: ['Perro Leopardo de Catahoula', 'Manejo', 'Energético'],
    country_code: 'US',
    description:
      'El Perro Leopardo de Catahoula, originario de los Estados Unidos, es un perro energético e inquisitivo, criado originalmente para el manejo de ganado. Su naturaleza independiente y amorosa combinada con su agudo intelecto lo hacen un excelente compañero y trabajador.',
    history:
      'El Perro Leopardo de Catahoula tiene una rica historia, especialmente en el estado de Luisiana donde se originó. Estos perros se desarrollaron para ser excelentes perros de trabajo, capaces de manejar el ganado en diversas condiciones. Son la única raza de perro que se sabe que se originó en Luisiana, y se dice que son una mezcla de perros de trabajo traidos por los colonos europeos y perros nativos americanos.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Energético',
      'Inquisitivo',
      'Independiente',
      'Bueno con niños',
      'Excelente perro de trabajo',
      'Requiere ejercicio regular',
    ],
    color: ['Negro', 'Azul', 'Merle'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Necesita estimulación mental y física',
      'Requiere socialización temprana',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Sordera'],
  },
  56: {
    weight: {
      imperial: '80 - 100',
      metric: '36 - 45',
    },
    height: {
      imperial: '24 - 33.5',
      metric: '61 - 85',
    },
    id: 56,
    name: 'Pastor Caucásico (Ovcharka)',
    bred_for: [
      'Perros guardianes',
      'Defensa de ovejas contra depredadores, principalmente lobos, chacales y osos',
    ],
    breed_group: ['Trabajo'],
    life_span: '10 - 12 años',
    temperament: [
      'Alerta',
      'Rápido',
      'Dominante',
      'Poderoso',
      'Calmo',
      'Fuerte',
    ],
    origin: 'Rusia',
    reference_image_id: 'r1rrWe5Em',
    image: {
      id: 'r1rrWe5Em',
      width: 1024,
      height: 682,
      url: 'https://cdn2.thedogapi.com/images/r1rrWe5Em.jpg',
    },
    searchTerms: ['Pastor Caucásico', 'Ovcharka', 'Guardian'],
    country_code: 'RU',
    description:
      'El Pastor Caucásico, también conocido como Ovcharka, es un perro poderoso y dominante, criado originalmente para proteger ovejas de depredadores como lobos, chacales y osos. Su carácter alerta y tranquilo, junto con su fuerza física lo hacen un formidable defensor.',
    history:
      'Originario de Rusia, el Pastor Caucásico ha sido durante siglos un perro pastor valioso, protegiendo a las ovejas en las montañas del Cáucaso. Su fuerza, resistencia y coraje le permiten enfrentarse a depredadores mucho más grandes, y su naturaleza leal y protectora lo hace muy valorado por los pastores.',
    categoria_de_tamanio: 'Muy grande',
    perks: [
      'Alerta',
      'Poderoso',
      'Fuerte',
      'Bueno como perro guardián',
      'Loyal',
      'Resistente a la intemperie',
    ],
    color: ['Blanco', 'Gris', 'Abigarrado'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Bajo',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Baja',
    necesidades_especiales: [
      'Requiere mucho espacio para moverse',
      'Necesita entrenamiento firme',
      'Requiere socialización temprana',
      'Debe ser entrenado para controlar su comportamiento dominante',
    ],
    popularidad: 'Baja',
    enfermedades_comunes: ['Displasia de cadera', 'Obesidad'],
  },
  57: {
    weight: {
      imperial: '13 - 18',
      metric: '6 - 8',
    },
    height: {
      imperial: '12 - 13',
      metric: '30 - 33',
    },
    id: 57,
    name: 'Cavalier King Charles Spaniel',
    bred_for: ['Desalojo de pequeñas aves', 'Compañía'],
    breed_group: ['Grupo de juguete'],
    life_span: '10 - 14 años',
    temperament: [
      'Intrépido',
      'Cariñoso',
      'Sociable',
      'Paciente',
      'Juguetón',
      'Adaptable',
    ],
    origin: 'Reino Unido',
    reference_image_id: 'HJRBbe94Q',
    image: {
      id: 'HJRBbe94Q',
      width: 961,
      height: 558,
      url: 'https://cdn2.thedogapi.com/images/HJRBbe94Q.jpg',
    },
    searchTerms: ['Cavalier King Charles Spaniel', 'Compañía', 'Juguetón'],
    country_code: 'GB',
    description:
      'El Cavalier King Charles Spaniel es una raza pequeña, querida por su temperamento juguetón y adaptable. Son sociables y pacientes, haciéndolos ideales como mascotas familiares y compañía para los ancianos. Su tamaño pequeño los hace adecuados para la vida en apartamentos, aunque necesitan ejercicio diario regular para mantener su salud.',
    history:
      'Originario del Reino Unido, el Cavalier King Charles Spaniel lleva el nombre del rey Carlos II, que tenía una gran afinidad por la raza. Fueron criados inicialmente para ser perros de regazo y compañía, aunque también eran conocidos por su habilidad para desalojar pequeñas aves. Con su personalidad encantadora y su aspecto adorable, esta raza se ha mantenido popular a lo largo de los años.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Cariñoso',
      'Juguetón',
      'Adaptable',
      'Bueno para familias',
      'Se lleva bien con otros animales',
    ],
    color: ['Blenheim', 'Tricolor', 'Black and Tan', 'Ruby'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Regular',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere atención regular y afecto',
      'Necesita ejercicio regular',
      'Necesita cepillado regular para mantener su pelaje en buen estado',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: ['Síndrome de Cavalier', 'Displasia de cadera'],
  },
  58: {
    weight: {
      imperial: '55 - 80',
      metric: '25 - 36',
    },
    height: {
      imperial: '21 - 26',
      metric: '53 - 66',
    },
    id: 58,
    name: 'Chesapeake Bay Retriever',
    bred_for: ['Recuperación de agua'],
    breed_group: ['Deportivo'],
    life_span: '10 - 13 años',
    temperament: [
      'Cariñoso',
      'Inteligente',
      'Callado',
      'Dominante',
      'Feliz',
      'Protector',
    ],
    origin: 'Estados Unidos',
    reference_image_id: '9BXwUeCc2',
    image: {
      id: '9BXwUeCc2',
      width: 600,
      height: 600,
      url: 'https://cdn2.thedogapi.com/images/9BXwUeCc2.jpg',
    },
    searchTerms: ['Chesapeake Bay Retriever', 'Recuperación', 'Protector'],
    country_code: 'US',
    description:
      'El Chesapeake Bay Retriever, originario de los Estados Unidos, es un perro cariñoso e inteligente, criado principalmente para la recuperación de agua. Destaca por su naturaleza dominante y protectora, siendo muy querido por su carácter feliz. Es un perro de tamaño grande, perteneciente al grupo de los deportivos.',
    history:
      'El Chesapeake Bay Retriever tiene un origen interesante. Fue en los Estados Unidos donde empezó a ser criado con el objetivo principal de recuperar agua. Esta habilidad lo convierte en un perro muy valorado en diferentes actividades, tanto de ocio como de trabajo. Su naturaleza protectora es otro de los aspectos que lo caracteriza y que ha contribuido a su popularidad a lo largo de los años.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Es muy cariñoso e inteligente',
      'Tiene una personalidad dominante pero protectora',
      'Destaca en actividades de recuperación de agua',
      'Se adapta bien a las actividades deportivas',
    ],
    color: ['Marrón', 'Sable', 'Muerto'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Necesita nadar regularmente',
      'Requiere una dieta equilibrada para mantener su energía',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas oculares'],
  },
  59: {
    weight: {
      imperial: '10 - 13',
      metric: '5 - 6',
    },
    height: {
      imperial: '11 - 13',
      metric: '28 - 33',
    },
    id: 59,
    name: 'Crestado Chino',
    bred_for: ['Caza de ratas', 'Perro de regazo', 'Curiosidad'],
    breed_group: ['Juguete'],
    life_span: '10 - 14 años',
    temperament: [
      'Afectuoso',
      'De buen temperamento',
      'Vivaz',
      'Alerta',
      'Juguetón',
      'Feliz',
    ],
    origin: 'China',
    reference_image_id: 'B1pDZx9Nm',
    image: {
      id: 'B1pDZx9Nm',
      width: 1200,
      height: 798,
      url: 'https://cdn2.thedogapi.com/images/B1pDZx9Nm.jpg',
    },
    searchTerms: ['Crestado Chino', 'Caza de ratas', 'Perro de regazo'],
    country_code: 'CN',
    description:
      'El Crestado Chino es un perro afectuoso y vivaz, criado originalmente para cazar ratas y como perro de regazo. Son conocidos por su alerta y actitud juguetona, y su apariencia única con crestas de pelo. Son perros pequeños, pero llenos de energía y siempre están dispuestos a jugar.',
    history:
      'Originario de China, el Crestado Chino es una raza antigua con una historia rica. Han sido venerados como tesoros de la realeza y utilizados como cazadores de ratas en barcos. Aunque son pequeños, son valientes y capaces. Su apariencia única y su naturaleza afectuosa los han hecho populares en todo el mundo.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Afectuoso',
      'De buen temperamento',
      'Vivaz',
      'Alerta',
      'Juguetón',
      'Feliz',
      'Bueno con otros animales',
      'Fácil de entrenar',
    ],
    color: ['Negro', 'Blanco', 'Rosa'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere mucha atención y afecto',
      'Requiere cuidado regular del pelaje',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Problemas dentales', 'Alergias a la piel'],
  },
  60: {
    weight: {
      imperial: '45 - 60',
      metric: '20 - 27',
    },
    height: {
      imperial: '18 - 20',
      metric: '46 - 51',
    },
    id: 60,
    name: 'Shar-Pei Chino',
    bred_for: ['Lucha'],
    breed_group: ['No deportivo'],
    life_span: '10 años',
    temperament: [
      'Desconfiado',
      'Afectuoso',
      'Devoto',
      'Reservado',
      'Independiente',
      'Amoroso',
    ],
    origin: 'China',
    reference_image_id: 'B1ruWl94Q',
    image: {
      id: 'B1ruWl94Q',
      width: 1049,
      height: 761,
      url: 'https://cdn2.thedogapi.com/images/B1ruWl94Q.jpg',
    },
    searchTerms: ['Shar-Pei Chino', 'Lucha', 'Independiente'],
    country_code: 'CN',
    description:
      'El Shar-Pei Chino es una raza de perro robusta, con una personalidad fuerte y un espíritu independiente. Criado originalmente para la lucha, es conocido por su piel arrugada y distintiva que le otorga una apariencia única. Este perro es leal a su familia, pero puede ser reservado y desconfiado con los extraños. A pesar de su origen de lucha, es afectuoso y devoto, siempre buscando el cariño de sus seres queridos.',
    history:
      'El Shar-Pei Chino es una raza muy antigua que se originó en China. Aunque su propósito original era la lucha, con el tiempo se ha convertido en un perro de compañía valorado por su lealtad y cariño. Su piel arrugada y su rostro carácterístico le otorgan una apariencia distintiva y memorable. A pesar de su temperamento independiente, se dedica profundamente a su familia, demostrando ser una mascota leal y amorosa.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Afectuoso',
      'Devoto',
      'Reservado',
      'Independiente',
      'Amoroso',
      'Necesita cuidado especial de la piel',
    ],
    color: ['Negro', 'Rojo', 'Crema'], // Colores más comunes
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Cuidado especial de la piel debido a las arrugas',
      'Ejercicio moderado',
      'Socialización temprana',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Problemas de piel',
      'Fiebre del Shar-Pei',
      'Displasia de cadera',
    ],
  },
  61: {
    weight: {
      imperial: '50 - 90',
      metric: '23 - 41',
    },
    height: {
      imperial: '22 - 26',
      metric: '56 - 66',
    },
    id: 61,
    name: 'Chinook',
    bred_for: ['Tiro de trineo'],
    breed_group: ['Trabajo'],
    life_span: '12 - 15 años',
    temperament: ['Amigable', 'Alerta', 'Digno', 'Inteligente', 'Calmado'],
    origin: 'Estados Unidos',
    reference_image_id: 'Sypubg54Q',
    image: {
      id: 'Sypubg54Q',
      width: 600,
      height: 478,
      url: 'https://cdn2.thedogapi.com/images/Sypubg54Q.jpg',
    },
    searchTerms: ['Chinook', 'Tiro de trineo', 'Trabajo'],
    country_code: 'US',
    description:
      'El Chinook es una raza de perro robusta y trabajadora, conocida por su habilidad para el tiro de trineo. Su capacidad para trabajar en condiciones climáticas adversas lo hace indispensable en tareas de rescate en la nieve. A pesar de su gran tamaño y energía, tiene un carácter amigable y tranquilo, siendo una excelente opción para familias con niños.',
    history:
      'Originario de Estados Unidos, el Chinook fue criado específicamente para el tiro de trineo en climas fríos. A principios del siglo XX, Arthur Walden, un criador de perros y trineos en New Hampshire, creó esta raza para ser robusta, resistente y capaz de trabajar en condiciones extremas. El Chinook ha sido valorado desde entonces por su resistencia, su inteligencia y su disposición amigable.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Amigable',
      'Alerta',
      'Digno',
      'Inteligente',
      'Calmado',
      'Bueno para tiro de trineo',
    ],
    color: ['Castaño', 'Castaño claro', 'Castaño oscuro'], // Colores más comunes
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Ejercicio físico intenso',
      'Adiestramiento constante',
      'Cuidado del pelaje en temporadas frías',
    ],
    popularidad: 'Baja',
    enfermedades_comunes: [
      'Problemas de cadera',
      'Hipotiroidismo',
      'Epilepsia',
    ],
  },
  62: {
    weight: {
      imperial: '40 - 70',
      metric: '18 - 32',
    },
    height: {
      imperial: '17 - 20',
      metric: '43 - 51',
    },
    id: 62,
    name: 'Chow Chow',
    bred_for: ['Guardián', 'Tirar de carros', 'Caza'],
    breed_group: ['No deportivo'],
    life_span: '12 - 15 años',
    temperament: ['Distante', 'Leal', 'Independiente', 'Silencioso'],
    origin: 'China',
    reference_image_id: 'ry8KWgqEQ',
    image: {
      id: 'ry8KWgqEQ',
      width: 1010,
      height: 673,
      url: 'https://cdn2.thedogapi.com/images/ry8KWgqEQ.jpg',
    },
    searchTerms: ['Chow Chow', 'Guardián', 'No deportivo'],
    country_code: 'CN',
    description:
      'El Chow Chow es una raza de perro leal y reservada, criado originalmente para ser guardián, tirar de carros y la caza. Con su pelaje espeso y suelto, se asemeja a un león esponjoso. A pesar de su apariencia adorable, puede ser bastante distante y suele ser muy independiente.',
    history:
      'El Chow Chow es una de las razas de perros más antiguas que existen. Originario de China, esta raza es conocida por su pelaje espeso y su lengua azul-negra. Fueron utilizados para una variedad de tareas, incluyendo la caza, el pastoreo, la protección y el tirar de trineos o carros. El Chow Chow ha sido siempre valorado por su versatilidad y su temperamento único.',
    categoria_de_tamanio: 'Mediano',
    perks: ['Distante', 'Leal', 'Independiente', 'Silencioso', 'Buen guardián'],
    color: ['Rojo', 'Negro', 'Azul', 'Canela', 'Crema'], // Colores más comunes
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Cuidado intensivo del pelaje',
      'Ejercicio moderado',
      'Socialización temprana',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Dermatitis',
      'Problemas oculares',
      'Displasia de cadera',
    ],
  },
  63: {
    weight: {
      imperial: '55 - 85',
      metric: '25 - 39',
    },
    height: {
      imperial: '17 - 20',
      metric: '43 - 51',
    },
    id: 63,
    name: 'Clumber Spaniel',
    bred_for: ['Espantar aves', 'Recuperar'],
    breed_group: ['Deportivo'],
    life_span: '10 - 12 años',
    temperament: [
      'Cariñoso',
      'Leal',
      'Digno',
      'Amable',
      'Calmado',
      'De gran corazón',
    ],
    origin: 'Reino Unido',
    reference_image_id: 'rkeqWgq4Q',
    image: {
      id: 'rkeqWgq4Q',
      width: 762,
      height: 533,
      url: 'https://cdn2.thedogapi.com/images/rkeqWgq4Q.jpg',
    },
    searchTerms: ['Clumber Spaniel', 'Espantar aves', 'Deportivo'],
    country_code: 'GB',
    description:
      'El Clumber Spaniel es un perro amable, cariñoso y leal. Criado originalmente para espantar aves y recuperar, es un perro de tamaño grande con un pelaje blanco grueso y denso, y a menudo tiene manchas color limón o naranja. Tiene una naturaleza tranquila, pero también puede ser muy juguetón.',
    history:
      'El Clumber Spaniel es una raza que se originó en el Reino Unido y que se dice que lleva el nombre de Clumber Park en Nottinghamshire. Fue criado para la caza, siendo un perro de trabajo muy eficaz, conocido por su habilidad para recuperar y espantar aves. Esta raza es conocida por su capacidad para trabajar silenciosamente en el campo.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Cariñoso',
      'Leal',
      'Digno',
      'Amable',
      'Calmado',
      'De gran corazón',
      'Buen perro de trabajo',
    ],
    color: ['Blanco con manchas naranja', 'Blanco con manchas limón'], // Colores más comunes
    nivel_de_energia: 'Bajo',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Necesita ejercicio regular',
      'Requiere atención regular al pelaje',
      'Necesita una dieta equilibrada para evitar la obesidad',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Obesidad',
      'Displasia de cadera',
      'Problemas oculares',
    ],
  },
  64: {
    weight: {
      imperial: '20 - 30',
      metric: '9 - 14',
    },
    height: {
      imperial: '14 - 15',
      metric: '36 - 38',
    },
    id: 64,
    name: 'Cocker Spaniel',
    bred_for: ['Espantar aves', 'Recuperar'],
    breed_group: ['Deportivo'],
    life_span: '12 - 15 años',
    temperament: [
      'Entrenable',
      'Amigable',
      'Cariñoso',
      'Juguetón',
      'Tranquilo',
      'Fiel',
    ],
    origin: 'Reino Unido',
    reference_image_id: '1lFmrzECl',
    image: {
      id: '1lFmrzECl',
      width: 1080,
      height: 1080,
      url: 'https://cdn2.thedogapi.com/images/1lFmrzECl.jpg',
    },
    searchTerms: ['Cocker Spaniel', 'Espantar aves', 'Deportivo'],
    country_code: 'GB',
    description:
      'El Cocker Spaniel es un perro muy sociable, alegre y cariñoso. Esta raza es conocida por su versatilidad y su capacidad para adaptarse a diferentes situaciones y entornos. Aunque son excelentes compañeros de casa, los Cocker Spaniels también son perros de trabajo increíblemente hábiles. Son excelentes perros de caza y son muy buenos en diversas actividades deportivas y competitivas.',
    history:
      'Los Cocker Spaniels se originaron en España, pero fueron desarrollados principalmente en el Reino Unido. Estos perros eran originalmente usados para cazar aves, de ahí su nombre. Con el tiempo, se hicieron populares en las familias por su temperamento tranquilo y fiel. Aunque ya no se utilizan tanto para la caza, siguen siendo muy activos y necesitan un buen ejercicio diario para mantenerse saludables.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Entrenable',
      'Amigable',
      'Cariñoso',
      'Juguetón',
      'Tranquilo',
      'Fiel',
      'Necesita ejercicio regular',
      'Cuidado regular del pelaje',
    ],
    color: ['Negro', 'Dorado', 'Particolor'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Necesita ejercicio regular',
      'Cuidado regular del pelaje',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Problemas oculares',
      'Displasia de cadera',
      'Otitis externa',
    ],
  },
  65: {
    weight: {
      imperial: '20 - 30',
      metric: '9 - 14',
    },
    height: {
      imperial: '14 - 15',
      metric: '36 - 38',
    },
    id: 65,
    name: 'Cocker Spaniel Americano',
    bred_for: ['Caza de la chochaca americana'],
    breed_group: ['Deportivo'],
    life_span: '12 - 15 años',
    temperament: [
      'Extrovertido',
      'Sociable',
      'Confiable',
      'Alegre',
      'De temperamento uniforme',
      'Feliz',
    ],
    origin: 'Estados Unidos',
    reference_image_id: 'HkRcZe547',
    image: {
      id: 'HkRcZe547',
      width: 1024,
      height: 640,
      url: 'https://cdn2.thedogapi.com/images/HkRcZe547.jpg',
    },
    searchTerms: [
      'Cocker Spaniel Americano',
      'Caza de la chochaca americana',
      'Deportivo',
    ],
    country_code: 'US',
    description:
      'El Cocker Spaniel Americano es un perro extrovertido y sociable. Conocido por su carácter alegre y de temperamento uniforme, este perro de raza mediana es muy apreciado en los Estados Unidos. Su herencia de caza aún está presente en su comportamiento, mostrando una gran habilidad para el trabajo de campo y la caza deportiva. Necesitan ejercicio regular y cuidado del pelaje para mantenerse saludables y felices.',
    history:
      'Originario de Estados Unidos, el Cocker Spaniel Americano tiene una larga historia. Se trata de una raza de perro que se desarrolló específicamente para cazar la chochaca en América. Fue reconocido oficialmente como raza independiente del Cocker Spaniel Inglés en los años 40. Desde entonces, ha ganado popularidad tanto en el campo como en el hogar, demostrando ser un perro de trabajo capaz y un encantador compañero de familia.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Perro extrovertido y sociable',
      'Bueno para familias',
      'Excelente perro de caza',
      'Necesita ejercicio regular',
      'Requiere cuidado regular del pelaje',
    ],
    color: ['Negro', 'Bicolor', 'Tricolor'], // Colores más comunes. Ajustar según la raza.
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Necesita ejercicio regular',
      'Cuidado regular del pelaje',
      'Control veterinario regular para prevenir enfermedades comunes',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Problemas oculares',
      'Displasia de cadera',
      'Otitis externa',
    ],
  },
  66: {
    weight: {
      imperial: '9 - 15',
      metric: '4 - 7',
    },
    height: {
      imperial: '9 - 11',
      metric: '23 - 28',
    },
    id: 66,
    name: 'Coton de Tulear',
    bred_for: [
      'Acompañar a las damas en largos viajes por mar',
      'Cazador de ratas a bordo del barco',
    ],
    breed_group: ['No deportivo'],
    life_span: '13 - 16 años',
    temperament: [
      'Cariñoso',
      'Animado',
      'Juguetón',
      'Inteligente',
      'Adiestrable',
      'Vocal',
    ],
    origin: 'Madagascar',
    reference_image_id: 'SyviZlqNm',
    image: {
      id: 'SyviZlqNm',
      width: 2464,
      height: 1638,
      url: 'https://cdn2.thedogapi.com/images/SyviZlqNm.jpg',
    },
    searchTerms: ['Coton de Tulear', 'No deportivo'],
    country_code: 'MG',
    description:
      'El Coton de Tulear es una raza de perro originaria de Madagascar. Conocido por su pelaje blanco, similar al algodón, este perro es muy apreciado por su temperamento alegre y juguetón. Son excelentes compañeros de viaje y también se desempeñan bien como cazadores de ratas en barcos.',
    history:
      'El Coton de Tulear se desarrolló en Madagascar, después de que los perros de raza pequeña se cruzaron con los perros locales durante el siglo XV. Durante mucho tiempo, estos perros fueron la mascota preferida de la nobleza de Madagascar. Aunque originalmente fueron criados para ser perros de compañía y cazadores de ratas en barcos, hoy son amados por su inteligencia y su disposición animada.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Cariñoso y amigable con las familias',
      'Bueno para la vida en apartamentos',
      'Necesita ejercicio moderado',
      'Se lleva bien con otros animales',
      'Es conocido por su pelaje blanco y esponjoso, similar al algodón',
      'Puede ser bastante vocal, a menudo ladrando para alertar a su familia sobre los visitantes o cuando está emocionado',
    ],
    color: ['Blanco'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Necesita ejercicio regular',
      'Cuidado regular del pelaje',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Problemas oculares', 'Displasia de cadera'],
  },
  67: {
    weight: {
      imperial: '50 - 55',
      metric: '23 - 25',
    },
    height: {
      imperial: '19 - 23',
      metric: '48 - 58',
    },
    id: 67,
    name: 'Dálmata',
    bred_for: ['Perro de carruaje', 'Proteger a los ocupantes de bandidos'],
    breed_group: ['No deportivo'],
    life_span: '10 - 13 años',
    temperament: [
      'Extrovertido',
      'Amigable',
      'Energético',
      'Juguetón',
      'Sensible',
      'Inteligente',
      'Activo',
    ],
    origin: 'Croacia',
    reference_image_id: 'SkJ3blcN7',
    image: {
      id: 'SkJ3blcN7',
      width: 1200,
      height: 800,
      url: 'https://cdn2.thedogapi.com/images/SkJ3blcN7.jpg',
    },
    searchTerms: ['Dálmata', 'No deportivo'],
    country_code: 'HR',
    description:
      'El Dálmata es un perro extrovertido y enérgico, criado originalmente para trotar al lado de carruajes y proteger a los ocupantes de bandidos u otras amenazas. Es un perro activo y juguetón, ideal para familias con un estilo de vida activo.',
    history:
      'Originario de Croacia, el Dálmata ha sido utilizado durante siglos como perro de carruaje, conocido por su capacidad para proteger carruajes y sus ocupantes. Su resistencia y agilidad, junto con su distintivo pelaje blanco con manchas negras, lo hicieron popular en Europa desde la Edad Media.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Perro extrovertido y amigable',
      'Ideal para estilos de vida activos',
      'Bueno para la protección de la casa',
      'Necesita ejercicio regular',
      'Requiere cuidado regular del pelaje',
    ],
    color: ['Blanco con manchas negras'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita ejercicio regular',
      'Cuidado regular del pelaje',
      'Requiere socialización temprana',
      'Puede tener predisposición a enfermedades específicas',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: ['Sordera', 'Urolitiasis'],
  },
  68: {
    weight: {
      imperial: '66 - 88',
      metric: '30 - 40',
    },
    height: {
      imperial: '24 - 28',
      metric: '61 - 71',
    },
    id: 68,
    name: 'Doberman',
    bred_for: ['Guardia'],
    breed_group: ['Trabajo'],
    life_span: '10 años',
    temperament: [
      'Temerario',
      'Energetico',
      'Alerta',
      'Leal',
      'Obediente',
      'Confidente',
      'Inteligente',
    ],
    origin: 'Alemania',
    reference_image_id: 'HyL3bl94Q',
    image: {
      id: 'HyL3bl94Q',
      width: 1140,
      height: 640,
      url: 'https://cdn2.thedogapi.com/images/HyL3bl94Q.jpg',
    },
    searchTerms: ['Doberman', 'Trabajo'],
    country_code: 'DE',
    description:
      'El Doberman es un perro de guardia, conocido por su lealtad y su temperamento temerario. Son muy inteligentes y obedientes, lo que los hace excelentes en roles de trabajo y como perros guardianes de la familia.',
    history:
      'Originario de Alemania, el Doberman fue criado por primera vez por un recaudador de impuestos llamado Louis Dobermann para protegerlo durante su trabajo. El objetivo era tener un perro de tamaño mediano a grande que fuera fuerte, leal, inteligente y fácil de entrenar. Como resultado, el Doberman es un perro de trabajo versátil, conocido por su agilidad y su capacidad de protección.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Perro de trabajo versátil',
      'Excelente perro guardián',
      'Leal y obediente',
      'Requiere ejercicio regular y estimulación mental',
      'Fácil de entrenar debido a su inteligencia',
    ],
    color: ['Negro y fuego'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita ejercicio regular',
      'Necesita estimulación mental',
      'Necesita entrenamiento firme',
      'Requiere socialización temprana',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Dilatación y torsión gástrica',
      'Hipotiroidismo',
      'Cardiomiopatía',
    ],
  },
  69: {
    weight: {
      imperial: '80 - 100',
      metric: '36 - 45',
    },
    height: {
      imperial: '23.5 - 27',
      metric: '60 - 69',
    },
    id: 69,
    name: 'Dogo Argentino',
    bred_for: ['Caza de presas grandes'],
    breed_group: ['Trabajo'],
    life_span: '10 - 12 años',
    temperament: [
      'Amigable',
      'Afectuoso',
      'Alegre',
      'Leal',
      'Tolerante',
      'Protector',
    ],
    origin: 'Argentina',
    reference_image_id: 'S1nhWx94Q',
    image: {
      id: 'S1nhWx94Q',
      width: 650,
      height: 467,
      url: 'https://cdn2.thedogapi.com/images/S1nhWx94Q.jpg',
    },
    searchTerms: ['Dogo Argentino', 'Trabajo'],
    country_code: 'AR',
    description:
      'El Dogo Argentino es un perro de trabajo, conocido por su actitud amigable y su habilidad para la caza de presas grandes. Es un perro de gran tamaño, poderoso y musculoso, muy valiente y con una gran resistencia física.',
    history:
      'Originario de Argentina, el Dogo Argentino fue desarrollado por el Dr. Antonio Nores Martínez en la década de 1920 con el objetivo de crear un perro de caza capaz de enfrentarse a presas grandes como pumas y jabalíes. Para ello, se cruzaron varias razas, incluyendo el Gran Danés, el Boxer, el Bull Terrier y el Bulldog. El resultado fue un perro de gran resistencia, valentía y habilidad para la caza.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Perro de trabajo y caza resistente',
      'Excelente protector de la familia',
      'Amigable y afectuoso con su familia',
      'Requiere ejercicio regular',
      'Fácil de cuidar en términos de aseo',
    ],
    color: ['Blanco'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita ejercicio regular',
      'Necesita socialización temprana',
      'Requiere adiestramiento consistente',
      'Debe ser supervisado con otros perros',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Sordera', 'Hipotiroidismo'],
  },
  70: {
    weight: {
      imperial: '50 - 70',
      metric: '23 - 32',
    },
    height: {
      imperial: '22 - 24.5',
      metric: '56 - 62',
    },
    id: 70,
    name: 'Pastor Holandés',
    bred_for: ['Fincas', 'Perro de guardia', 'Deber de protección'],
    breed_group: ['Trabajo'],
    life_span: '15 años',
    temperament: [
      'Fiable',
      'Afectuoso',
      'Alerta',
      'Leal',
      'Obediente',
      'Adiestrable',
    ],
    origin: 'Holanda',
    reference_image_id: 'BkE6Wg5E7',
    image: {
      id: 'BkE6Wg5E7',
      width: 856,
      height: 511,
      url: 'https://cdn2.thedogapi.com/images/BkE6Wg5E7.jpg',
    },
    searchTerms: ['Pastor Holandés', 'Trabajo'],
    country_code: 'NL',
    description:
      'El Pastor Holandés es una raza versátil, inteligente y altamente energética. Es un perro de trabajo conocido por su habilidad para cuidar fincas y actuar como perro de guardia. Su lealtad y disposición agradable hacen que sea un excelente compañero de familia.',
    history:
      'Originario de Holanda, el Pastor Holandés ha sido un perro de granja versátil durante siglos en su país de origen. Fue criado para todo tipo de trabajos en la finca, desde la guarda del ganado hasta la guardia de la propiedad. Su capacidad para adaptarse a diferentes roles se atribuye a su inteligencia, resistencia y voluntad para trabajar.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Perro de trabajo versátil',
      'Excelente perro de guardia y protección',
      'Altamente adiestrable',
      'Requiere ejercicio regular',
      'Fiel y afectuoso con su familia',
      'Inteligente y alerta',
    ],
    color: ['Atigrado'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita ejercicio regular',
      'Necesita socialización temprana',
      'Requiere adiestramiento firme y consistente',
      'Requiere estimulación mental regular',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Alergias',
      'Problemas oculares',
    ],
  },
  71: {
    weight: {
      imperial: '45 - 80',
      metric: '20 - 36',
    },
    height: {
      imperial: '24 - 25',
      metric: '61 - 64',
    },
    id: 71,
    name: 'Setter Inglés',
    bred_for: ['Localización de aves', 'Recuperación'],
    breed_group: ['Deportivo'],
    life_span: '12 años',
    temperament: [
      'Fuerte voluntad',
      'Travieso',
      'Afectuoso',
      'Energético',
      'Juguetón',
      'Sociable',
      'Gentil',
      'Trabajador',
      'Inteligente',
      'Entusiasta',
      'Orientado a las personas',
    ],
    origin: 'Inglaterra',
    reference_image_id: 'By4A-eqVX',
    image: {
      id: 'By4A-eqVX',
      width: 1024,
      height: 683,
      url: 'https://cdn2.thedogapi.com/images/By4A-eqVX.jpg',
    },
    searchTerms: ['Setter Inglés', 'Deportivo'],
    country_code: 'GB',
    description:
      'El Setter Inglés es una raza de perro de tamaño medio conocida por su pelaje distintivo, su naturaleza amigable y su capacidad para localizar y recuperar aves. Aunque pueden ser un poco traviesos y juguetones, son perros inteligentes y trabajadores que son populares como mascotas y perros de caza.',
    history:
      'Originarios de Inglaterra, los Setters Ingleses se desarrollaron en el siglo XIX para buscar y señalar aves de caza. Se les enseñaba a "ponerse en cuclillas" para indicar la presencia de aves, de ahí su nombre "setter". Son una raza antigua y bien establecida que ha sido apreciada por su habilidad de caza y su comportamiento amigable.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Excelente perro de caza',
      'Amigable y sociable',
      'Bueno para familias activas',
      'Requiere ejercicio regular',
      'Leal y afectuoso',
      'Inteligente y fácil de entrenar',
    ],
    color: ['Blanco', 'Naranja', 'Negro', 'Castaño'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Necesita ejercicio regular',
      'Necesita socialización temprana',
      'Requiere cuidados regulares del pelaje',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas oculares',
      'Sordera',
      'Hipotiroidismo',
    ],
  },
  72: {
    weight: {
      imperial: '44 - 66',
      metric: '20 - 30',
    },
    height: {
      imperial: '18 - 23',
      metric: '46 - 58',
    },
    id: 72,
    name: 'Pastor Inglés',
    bred_for: [
      'Pastoreo y protección de ganado',
      'Perro de vigilancia de granjas',
    ],
    breed_group: ['Trabajador'],
    life_span: '10 - 13 años',
    temperament: [
      'Amable',
      'Energético',
      'Independiente',
      'Adaptable',
      'Inteligente',
      'Dominante',
    ],
    origin: 'Inglaterra',
    reference_image_id: 'H1QyMe5EQ',
    image: {
      id: 'H1QyMe5EQ',
      width: 1920,
      height: 1280,
      url: 'https://cdn2.thedogapi.com/images/H1QyMe5EQ.jpg',
    },
    searchTerms: ['Pastor Inglés', 'Trabajador'],
    country_code: 'GB',
    description:
      'El Pastor Inglés es una raza de perro versátil y trabajadora, conocida por su habilidad para pastorear y proteger el ganado. Son perros independientes y adaptables que son inteligentes y a veces dominantes. A pesar de su energía y determinación, son perros amables y pueden hacer excelentes mascotas de familia.',
    history:
      'El Pastor Inglés tiene sus raíces en Inglaterra, donde se utilizaba para pastorear y proteger el ganado. También eran apreciados como perros de vigilancia de granjas debido a su naturaleza alerta y protectora. Son una raza antigua y bien establecida, apreciada por su versatilidad y su fuerte ética de trabajo.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente perro de trabajo',
      'Bueno con el ganado',
      'Bueno como perro de vigilancia',
      'Requiere ejercicio regular',
      'Leal y protector',
      'Inteligente y a veces dominante',
    ],
    color: ['Negro', 'Blanco', 'Castaño'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita ejercicio regular',
      'Necesita socialización temprana',
      'Requiere estímulo mental',
    ],
    popularidad: 'Baja',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas oculares',
      'Alergias',
    ],
  },
  73: {
    weight: {
      imperial: '35 - 50',
      metric: '16 - 23',
    },
    height: {
      imperial: '19 - 20',
      metric: '48 - 51',
    },
    id: 73,
    name: 'Springer Spaniel Inglés',
    bred_for: ['Levantamiento de aves', 'Recuperación'],
    breed_group: ['Deportivo'],
    life_span: '12 - 14 años',
    temperament: [
      'Cariñoso',
      'Alegre',
      'Alerta',
      'Inteligente',
      'Atento',
      'Activo',
    ],
    origin: 'Inglaterra',
    reference_image_id: 'Hk0Jfe5VQ',
    image: {
      id: 'Hk0Jfe5VQ',
      width: 1440,
      height: 1080,
      url: 'https://cdn2.thedogapi.com/images/Hk0Jfe5VQ.jpg',
    },
    searchTerms: ['Springer Spaniel Inglés', 'Deportivo'],
    country_code: 'GB',
    description:
      'El Springer Spaniel Inglés es una raza de perro alegre y activa, conocida por su capacidad para levantar y recuperar aves en situaciones de caza. Son perros inteligentes y atentos con una actitud cariñosa. Son enérgicos y requieren ejercicio regular, pero su naturaleza adaptable los convierte en excelentes mascotas familiares.',
    history:
      'El Springer Spaniel Inglés se originó en Inglaterra y se utilizó originalmente para levantar y recuperar aves en situaciones de caza. Son parte de la familia de los spaniels, que se dividió en varias razas distintas a lo largo de los años. Los Springer Spaniels son conocidos por su energía y su agudo sentido del olfato, lo que los hace excelentes perros de caza.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente perro de caza',
      'Bueno en la recuperación de aves',
      'Energético y requiere ejercicio',
      'Cariñoso y alegre',
      'Inteligente y atento',
    ],
    color: ['Negro', 'Blanco', 'Castaño'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Necesita ejercicio regular',
      'Requiere socialización temprana',
      'Requiere estimulación mental',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas oculares',
      'Otitis',
    ],
  },
  74: {
    weight: {
      imperial: '8 - 14',
      metric: '4 - 6',
    },
    height: {
      imperial: '10',
      metric: '25',
    },
    id: 74,
    name: 'Spaniel de Juguete Inglés',
    bred_for: ['Compañero de reyes'],
    breed_group: ['De juguete'],
    life_span: '10 - 12 años',
    temperament: [
      'Cariñoso',
      'Reservado',
      'Juguetón',
      'Amable',
      'Feliz',
      'Amoroso',
    ],
    origin: 'Inglaterra',
    reference_image_id: 'SkIgzxqNQ',
    image: {
      id: 'SkIgzxqNQ',
      width: 800,
      height: 696,
      url: 'https://cdn2.thedogapi.com/images/SkIgzxqNQ.jpg',
    },
    searchTerms: ['Spaniel de Juguete Inglés', 'De juguete'],
    country_code: 'GB',
    description:
      'El Spaniel de Juguete Inglés es una raza pequeña y cariñosa conocida por ser el compañero de los reyes. Este perro juguetón y amoroso tiene una personalidad amable y feliz. Son perros reservados y excelentes para compañía y confort. Requieren cuidado y atención regular debido a su pequeño tamaño y pelaje.',
    history:
      'El Spaniel de Juguete Inglés tiene una larga historia como compañero de la realeza inglesa. Esta raza se ha mantenido popular a lo largo de los años debido a su temperamento afectuoso y su tamaño de juguete. Aunque originalmente fueron criados para la compañía de los reyes, ahora son populares como mascotas familiares.',
    categoria_de_tamanio: 'Muy pequeño',
    perks: [
      'Perfecto para compañía',
      'Bueno para familias',
      'Adecuado para la vida en apartamento',
      'Cariñoso y juguetón',
      'No requiere mucho ejercicio',
    ],
    color: ['Negro', 'Blanco', 'Castaño'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Necesita cuidado del pelaje',
      'Requiere atención y cariño',
      'Adecuado para vivir en interiores',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Problemas oculares',
      'Enfermedades del corazón',
      'Displasia de cadera',
    ],
  },
  75: {
    weight: {
      imperial: '6 - 8',
      metric: '3 - 4',
    },
    height: {
      imperial: '10 - 12',
      metric: '25 - 30',
    },
    id: 75,
    name: 'Terrier de Juguete Inglés',
    bred_for: ['Caza de ratas'],
    breed_group: ['Terrier'],
    life_span: '12 - 13 años',
    temperament: [
      'Obstinado',
      'Alerta',
      'Sociable',
      'Inteligente',
      'Astuto',
      'Entrenable',
    ],
    origin: 'Inglaterra',
    reference_image_id: 'SJ6eMxqEQ',
    image: {
      id: 'SJ6eMxqEQ',
      width: 645,
      height: 430,
      url: 'https://cdn2.thedogapi.com/images/SJ6eMxqEQ.jpg',
    },
    searchTerms: ['Terrier de Juguete Inglés', 'Terrier'],
    country_code: 'GB',
    description:
      'El Terrier de Juguete Inglés es una raza pequeña, conocida por su inteligencia y su aptitud para la caza de ratas. Este perro astuto y entrenable tiene una personalidad alerta y obstinada. Son perros sociables y excelentes para la compañía y la diversión. Requieren cuidado y atención regular debido a su pequeño tamaño.',
    history:
      'El Terrier de Juguete Inglés tiene una larga historia como perro de caza de ratas. Esta raza ha demostrado su valor debido a su inteligencia y su temperamento obstinado. Aunque originalmente fueron criados para la caza de ratas, ahora son populares como mascotas familiares debido a su tamaño pequeño y su naturaleza sociable.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Perfecto para compañía',
      'Bueno para familias con casa',
      'Ideal para actividades de entrenamiento',
      'Requiere poco mantenimiento del pelaje',
      'Altamente inteligente y entrenable',
    ],
    color: ['Negro', 'Marrón', 'Tan'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita ejercicio y estimulación mental regular',
      'Requiere atención y socialización',
      'Adaptado para vivir en espacios interiores o exteriores',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Problemas auditivos',
      'Problemas dentales',
      'Displasia de cadera',
    ],
  },
  76: {
    weight: {
      imperial: '40 - 70',
      metric: '18 - 32',
    },
    height: {
      imperial: '20.5 - 23.5',
      metric: '52 - 60',
    },
    id: 76,
    name: 'Eurasier',
    bred_for: ['Compañía'],
    breed_group: ['No deportivo'],
    life_span: '12 - 14 años',
    temperament: [
      'Alerta',
      'Reservado',
      'Inteligente',
      'De temperamento uniforme',
      'Vigilante',
      'Tranquilo',
    ],
    origin: 'Europa',
    reference_image_id: 'S1VWGx9Nm',
    image: {
      id: 'S1VWGx9Nm',
      width: 800,
      height: 532,
      url: 'https://cdn2.thedogapi.com/images/S1VWGx9Nm.jpg',
    },
    searchTerms: ['Eurasier', 'Perro de compañía'],
    country_code: 'EU',
    description:
      'El Eurasier es una raza de perro equilibrada y bien proporcionada de tamaño medio a grande. Son perros inteligentes, tranquilos y reservados. Aunque son cautelosos con los extraños, no son agresivos ni tímidos. Son perros de compañía excepcionales y se llevan bien con los niños.',
    history:
      'El Eurasier es una raza moderna de perro que se originó en Alemania en 1960. Fue criado por primera vez por Julius Wipfel quien, junto con un pequeño grupo de entusiastas, cruzó un Chow Chow con un Lobo Spitz para producir una raza de perro que combinaba las mejores características de ambas razas.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente perro de compañía',
      'Bueno con los niños',
      'Fácil de entrenar',
      'Requiere ejercicio moderado',
      'Necesita aseo regular',
    ],
    color: ['Negro', 'Rojo', 'Gris'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere socialización temprana',
      'Necesita estimulación mental y física regular',
      'Necesita aseo regular',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas de la piel',
      'Problemas oculares',
    ],
  },
  77: {
    weight: {
      imperial: '35 - 50',
      metric: '16 - 23',
    },
    height: {
      imperial: '17 - 18',
      metric: '43 - 46',
    },
    id: 77,
    name: 'Spaniel de Campo',
    bred_for: ['Desalojo de aves', 'Recuperación'],
    breed_group: ['Deportivo'],
    life_span: '11 - 15 años',
    temperament: [
      'Dócil',
      'Cauteloso',
      'Sociable',
      'Sensible',
      'Adaptable',
      'Familiar',
    ],
    origin: 'Reino Unido',
    reference_image_id: 'SkJfGecE7',
    image: {
      id: 'SkJfGecE7',
      width: 1280,
      height: 906,
      url: 'https://cdn2.thedogapi.com/images/SkJfGecE7.jpg',
    },
    searchTerms: ['Spaniel de Campo', 'Perro deportivo'],
    country_code: 'UK',
    description:
      'El Spaniel de Campo es un perro de tamaño medio, robusto y lleno de energía. Se le conoce por su excelente sentido del olfato y su capacidad de rastrear en cualquier tipo de terreno. Aunque son enérgicos y activos al aire libre, en casa son tranquilos y cariñosos, lo que los convierte en excelentes mascotas familiares.',
    history:
      'El Spaniel de Campo es una raza de perro de origen británico que se desarrolló para cazar y recuperar aves de caza. Aunque comparten un origen común con otros spaniels, los Field Spaniels se criaron para ser perros de caza versátiles, capaces de trabajar en diversos tipos de terreno.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente olfato',
      'Bueno para actividades al aire libre',
      'Bueno con los niños',
      'Requiere ejercicio regular',
      'Tranquilo en casa',
    ],
    color: ['Negro', 'Liver', 'Roan'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere ejercicio diario',
      'Necesita estimulación mental y física regular',
      'Necesita socialización temprana',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas oculares',
      'Otitis externa',
    ],
  },
  78: {
    weight: {
      imperial: '33 - 53',
      metric: '15 - 24',
    },
    height: {
      imperial: '16 - 21',
      metric: '41 - 53',
    },
    id: 78,
    name: 'Lapphund finlandés',
    bred_for: ['Pastoreo de renos'],
    breed_group: ['Pastoreo'],
    life_span: '12 - 15 años',
    temperament: ['Amigable', 'Agudo', 'Fiel', 'Tranquilo', 'Valiente'],
    origin: 'Finlandia',
    reference_image_id: 'S1KMGg5Vm',
    image: {
      id: 'S1KMGg5Vm',
      width: 1066,
      height: 800,
      url: 'https://cdn2.thedogapi.com/images/S1KMGg5Vm.jpg',
    },
    searchTerms: ['Lapphund finlandés', 'Perro de pastoreo'],
    country_code: 'FI',
    description:
      'El Lapphund finlandés es un perro de trabajo enérgico y resistente, que se utiliza en su Finlandia natal para pastorear renos. Son conocidos por su resistencia y su espíritu amigable, y hacen compañeros familiares leales y afectuosos.',
    history:
      'Originario de la región de Laponia, en el norte de Finlandia, el Lapphund finlandés tiene sus raíces en los perros de trabajo utilizados por los Sami, un pueblo indígena nómada. Durante siglos, estos perros han sido invaluables para los Sami, ayudando a pastorear y proteger a los renos, una parte importante de la economía sami.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Buen perro de trabajo',
      'Excelente en climas fríos',
      'Leal y afectuoso',
      'Necesita ejercicio regular',
    ],
    color: ['Negro', 'Marrón', 'Blanco'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Necesita estimulación mental y física',
      'Adaptado a climas fríos',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas oculares',
      'Problemas de piel',
    ],
  },
  79: {
    weight: {
      imperial: '23 - 28',
      metric: '10 - 13',
    },
    height: {
      imperial: '15.5 - 20',
      metric: '39 - 51',
    },
    id: 79,
    name: 'Spitz finlandés',
    bred_for: ['Caza de aves', 'Pequeños mamíferos'],
    breed_group: ['No deportivo'],
    life_span: '12 - 15 años',
    temperament: [
      'Juguetón',
      'Leal',
      'Independiente',
      'Inteligente',
      'Feliz',
      'Vocal',
    ],
    origin: 'Finlandia',
    reference_image_id: '3PjHlQbkV',
    image: {
      id: '3PjHlQbkV',
      width: 500,
      height: 417,
      url: 'https://cdn2.thedogapi.com/images/3PjHlQbkV.jpg',
    },
    searchTerms: ['Spitz finlandés', 'Perro no deportivo'],
    country_code: 'FI',
    description:
      'El Spitz finlandés es una raza de perro antigua, que se originó en Finlandia y fue utilizada para la caza. Es conocido por su inteligencia, su espíritu independiente y su naturaleza vocal. Este perro es leal a su familia y es excelente con los niños, pero puede ser reservado con los extraños.',
    history:
      'El Spitz finlandés es una raza de perro antigua, con raíces que se remontan a más de 2,000 años. Se cree que los antiguos pobladores de Finlandia trajeron a estos perros con ellos como compañía y para ayudar en la caza. A lo largo de los siglos, la raza se adaptó al clima frío y las condiciones difíciles de Finlandia, lo que resultó en el resistente y adaptable Spitz finlandés que conocemos hoy.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Bueno para la caza',
      'Perro alerta y vocal',
      'Excelente en climas fríos',
      'Requiere ejercicio regular',
    ],
    color: ['Rojo', 'Marrón', 'Blanco'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Necesita estimulación mental y física',
      'Adaptado a climas fríos',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas oculares',
      'Problemas de piel',
    ],
  },
  80: {
    weight: {
      imperial: '28',
      metric: '13',
    },
    height: {
      imperial: '11 - 12',
      metric: '28 - 30',
    },
    id: 80,
    name: 'Bulldog francés',
    bred_for: ['Perro faldero'],
    breed_group: ['No deportivo'],
    life_span: '9 - 11 años',
    temperament: [
      'Juguetón',
      'Cariñoso',
      'Entusiasta',
      'Sociable',
      'Vivo',
      'Alerta',
      'Tranquilo',
      'Paciente',
      'Atlético',
      'Brillante',
    ],
    origin: 'Francia',
    reference_image_id: 'HyWNfxc47',
    image: {
      id: 'HyWNfxc47',
      width: 740,
      height: 430,
      url: 'https://cdn2.thedogapi.com/images/HyWNfxc47.jpg',
    },
    searchTerms: ['Bulldog francés', 'Perro no deportivo'],
    country_code: 'FR',
    description:
      'El Bulldog francés es una raza de perro pequeña originaria de Francia. Se le conoce por su personalidad juguetona y afectuosa, lo que lo hace un excelente perro de compañía. Aunque es pequeño, es atlético y requiere ejercicio regular. Es conocido por ser sociable y fácil de llevar, pero también alerta, lo que lo hace un buen perro guardián.',
    history:
      'El Bulldog francés se originó en Francia en el siglo XIX, principalmente como un perro faldero para complementar el estilo de vida de sus dueños. Fueron criados a partir de Bulldogs en miniatura de Inglaterra y pronto ganaron popularidad en toda Europa y más allá. Hoy en día, son amados por su apariencia distintiva y su carácter amistoso.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Bueno como perro de compañía',
      'Perro de alerta',
      'Excelente con niños y otros animales',
      'Requiere ejercicio moderado',
    ],
    color: ['Atigrado', 'Blanco', 'Crema'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Regular',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere ejercicio moderado',
      'Necesita cuidado con las temperaturas extremas',
      'Puede ser propenso a problemas de salud específicos de la raza',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas respiratorios',
      'Problemas de piel',
    ],
  },
  81: {
    weight: {
      imperial: '25 - 45',
      metric: '11 - 20',
    },
    height: {
      imperial: '17 - 20',
      metric: '43 - 51',
    },
    id: 81,
    name: 'Pinscher alemán',
    bred_for: ['Perro de vigilancia', 'Caza de alimañas en la granja'],
    breed_group: ['Trabajo'],
    life_span: '12 - 14 años',
    temperament: [
      'Animado',
      'Vivo',
      'Inteligente',
      'Cariñoso',
      'De temperamento uniforme',
      'Familiar',
    ],
    origin: 'Alemania',
    reference_image_id: 'B1u4zgqE7',
    image: {
      id: 'B1u4zgqE7',
      width: 740,
      height: 480,
      url: 'https://cdn2.thedogapi.com/images/B1u4zgqE7.jpg',
    },
    searchTerms: ['Pinscher alemán', 'Perro de trabajo'],
    country_code: 'DE',
    description:
      'El Pinscher alemán es una raza de perro de tamaño mediano que se originó en Alemania. Son conocidos por su inteligencia y su naturaleza vivaz. Aunque son perros de trabajo, también son cariñosos y hacen buenas mascotas familiares. A pesar de su tamaño, son perros enérgicos y necesitan ejercicio regular.',
    history:
      'El Pinscher alemán se originó en Alemania como perro de trabajo, utilizado para cazar alimañas en las granjas. Son una de las razas de perros más antiguas de Alemania y la base para muchas otras razas de Pinscher. A pesar de su historia de trabajo, han ganado popularidad como mascotas familiares debido a su naturaleza cariñosa y su inteligencia.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Bueno como perro de vigilancia',
      'Excelente para cazar alimañas',
      'Perro enérgico que necesita ejercicio',
      'Bueno con las familias',
      'Inteligente y fácil de entrenar',
    ],
    color: ['Negro', 'Marrón', 'Rojo'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Puede ser propenso a la ansiedad de separación',
      'Puede necesitar estimulación mental regular',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Cataratas',
      'Problemas de la piel',
    ],
  },
  82: {
    weight: {
      imperial: '50 - 90',
      metric: '23 - 41',
    },
    height: {
      imperial: '22 - 26',
      metric: '56 - 66',
    },
    id: 82,
    name: 'Pastor alemán',
    bred_for: ['Pastoreo', 'Perro guardián'],
    breed_group: ['Pastoreo'],
    life_span: '10 - 13 años',
    temperament: [
      'Alerta',
      'Leal',
      'Obediente',
      'Curioso',
      'Confidente',
      'Inteligente',
      'Vigilante',
      'Valiente',
    ],
    origin: 'Alemania',
    reference_image_id: 'SJyBfg5NX',
    image: {
      id: 'SJyBfg5NX',
      width: 600,
      height: 425,
      url: 'https://cdn2.thedogapi.com/images/SJyBfg5NX.jpg',
    },
    searchTerms: ['Pastor alemán', 'Perro de pastoreo'],
    country_code: 'DE',
    description:
      'El Pastor alemán es una raza de perro grande conocida por su inteligencia y versatilidad como perro de trabajo. Su carácter es leal, confiable y se asocia a menudo con roles en la policía, la búsqueda y el rescate, así como con perros de servicio. Es una raza altamente activa y disfruta de tener un trabajo que hacer.',
    history:
      'El Pastor alemán se originó en Alemania a finales del siglo XIX, inicialmente como perro de pastoreo. Su inteligencia, obediencia y versatilidad rápidamente lo llevaron a ser usado en muchos otros roles, incluyendo como perro de trabajo para la policía y el ejército. Es una de las razas más populares en el mundo.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Altamente inteligente y versátil',
      'Excelente perro de trabajo',
      'Protector y leal a su familia',
      'Requiere ejercicio físico y mental regular',
      'Se adapta bien a diferentes roles de trabajo',
    ],
    color: ['Negro', 'Marrón', 'Sable'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Necesita estímulo mental',
      'Puede ser propenso a la ansiedad de separación',
      'Necesita socialización temprana',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Displasia de codo',
      'Miocardiopatía',
    ],
  },
  83: {
    weight: {
      imperial: '45 - 70',
      metric: '20 - 32',
    },
    height: {
      imperial: '21 - 25',
      metric: '53 - 64',
    },
    id: 83,
    name: 'Braco alemán de pelo corto',
    bred_for: ['Caza general'],
    breed_group: ['Deportivo'],
    life_span: '12 - 14 años',
    temperament: [
      'Animado',
      'Audaz',
      'Afectuoso',
      'Inteligente',
      'Cooperativo',
      'Adiestrable',
    ],
    origin: 'Alemania',
    reference_image_id: 'SJqBMg5Nm',
    image: {
      id: 'SJqBMg5Nm',
      width: 1395,
      height: 1230,
      url: 'https://cdn2.thedogapi.com/images/SJqBMg5Nm.jpg',
    },
    searchTerms: ['Braco alemán', 'Perro de caza'],
    country_code: 'DE',
    description:
      'El Braco alemán de pelo corto es un perro de caza versátil que es capaz de cazar cualquier tipo de juego en tierra o agua. Son perros de tamaño mediano a grande, con un pelaje corto que es resistente al agua. Son perros inteligentes y afectuosos que son excelentes compañeros de familia cuando están bien ejercitados.',
    history:
      'El Braco alemán de pelo corto se originó en Alemania para ser utilizado en la caza. Esta raza fue desarrollada para ser un perro de caza todo en uno que pudiera rastrear, señalar, recuperar y trabajar tanto en tierra como en agua. Son populares tanto para la caza como para las competencias de campo debido a su versatilidad y resistencia.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Versátil y buen perro de caza',
      'Inteligente y fácil de entrenar',
      'Amigable y bueno con las familias',
      'Requiere ejercicio regular y mental',
      'Se lleva bien con otros perros',
    ],
    color: ['Marrón', 'Blanco', 'Marrón y blanco'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere ejercicio físico y mental regular',
      'Necesita estímulo mental',
      'Puede ser propenso a la ansiedad de separación',
      'Necesita socialización temprana',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Displasia de codo',
      'Gastric torsion',
    ],
  },
  84: {
    weight: {
      imperial: '65 - 90',
      metric: '29 - 41',
    },
    height: {
      imperial: '23.5 - 27.5',
      metric: '60 - 70',
    },
    id: 84,
    name: 'Schnauzer Gigante',
    bred_for: ['Pastoreo', 'Guarda'],
    breed_group: ['Trabajo'],
    life_span: '10 - 12 años',
    temperament: [
      'Fuerte Voluntad',
      'Amable',
      'Leal',
      'Inteligente',
      'Dominante',
      'Poderoso',
    ],
    origin: 'Alemania',
    reference_image_id: 'H1NIzlcV7',
    image: {
      id: 'H1NIzlcV7',
      width: 900,
      height: 600,
      url: 'https://cdn2.thedogapi.com/images/H1NIzlcV7.jpg',
    },
    searchTerms: ['Schnauzer Gigante', 'Perro de trabajo'],
    country_code: 'DE',
    description:
      'El Schnauzer Gigante es una raza de perro grande y poderosa conocida por su temperamento fuerte y su voluntad. Son leales y amables, pero también pueden ser dominantes e inteligentes. Este perro es excelente para el pastoreo y la guarda debido a su instinto natural de proteger a su familia y su hogar.',
    history:
      'El Schnauzer Gigante se originó en Alemania y fue criado inicialmente para el pastoreo y la guarda. Aunque son la raza de Schnauzer más grande, comparten muchas características con las otras dos razas de Schnauzer, el Schnauzer Estándar y el Schnauzer Miniatura. Sin embargo, el Schnauzer Gigante es conocido por ser más dominante y poderoso que sus contrapartes más pequeñas.',
    categoria_de_tamanio: 'Muy grande',
    perks: [
      'Excelente perro de trabajo y guarda',
      'Leal y protector con su familia',
      'Inteligente y con fuerte voluntad',
      'Necesita ejercicio y estimulación mental regular',
      'Se lleva bien con otros animales si se socializa correctamente',
    ],
    color: ['Negro', 'Sal y pimienta'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio físico y mental regular',
      'Necesita estímulo mental',
      'Puede ser dominante, necesita una formación adecuada',
      'Requiere socialización temprana',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas de piel',
      'Inflamación del estómago',
    ],
  },
  85: {
    weight: {
      imperial: '32 - 40',
      metric: '15 - 18',
    },
    height: {
      imperial: '12.5 - 14',
      metric: '32 - 36',
    },
    id: 85,
    name: 'Terrier del Glen de Imaal',
    bred_for: [
      'Eliminar plagas de hogares y granjas',
      'Caza de tejones y zorros',
    ],
    breed_group: ['Terrier'],
    life_span: '12 - 15 años',
    temperament: ['Animado', 'Ágil', 'Leal', 'Amable', 'Activo', 'Valiente'],
    origin: 'Irlanda',
    reference_image_id: 'H1oLMe94m',
    image: {
      id: 'H1oLMe94m',
      width: 645,
      height: 380,
      url: 'https://cdn2.thedogapi.com/images/H1oLMe94m.jpg',
    },
    searchTerms: ['Terrier del Glen de Imaal', 'Perro de caza'],
    country_code: 'IE',
    description:
      'El Terrier del Glen de Imaal es un perro animado, ágil y leal, conocido por su habilidad para cazar tejones y zorros y por su capacidad para eliminar plagas de los hogares y las granjas. A pesar de su pequeño tamaño, este perro es valiente y activo, con un fuerte instinto de caza.',
    history:
      'Originario de Irlanda, el Terrier del Glen de Imaal fue criado para ser un perro de caza y de granja. Su tamaño pequeño y su temperamento valiente lo hacían ideal para cazar tejones y zorros, y también para eliminar plagas de los hogares y las granjas.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Buen cazador y exterminador de plagas',
      'Leal y protector con su familia',
      'Activo y requiere ejercicio regular',
      'Se lleva bien con los niños y otros animales si se socializa correctamente',
    ],
    color: ['Trigo', 'Azul', 'Atigrado'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio físico y mental regular',
      'Requiere socialización temprana',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas de piel',
      'Atrofia retinal progresiva',
    ],
  },
  86: {
    weight: {
      imperial: '55 - 75',
      metric: '25 - 34',
    },
    height: {
      imperial: '21.5 - 24',
      metric: '55 - 61',
    },
    id: 86,
    name: 'Golden Retriever',
    bred_for: ['Recuperación'],
    breed_group: ['Deportivo'],
    life_span: '10 - 12 años',
    temperament: [
      'Inteligente',
      'Amable',
      'Fiable',
      'Amistoso',
      'Confiable',
      'Confiado',
    ],
    origin: 'Reino Unido',
    reference_image_id: 'HJ7Pzg5EQ',
    image: {
      id: 'HJ7Pzg5EQ',
      width: 900,
      height: 652,
      url: 'https://cdn2.thedogapi.com/images/HJ7Pzg5EQ.jpg',
    },
    searchTerms: ['Golden Retriever', 'Perro de recuperación'],
    country_code: 'UK',
    description:
      'El Golden Retriever es un perro inteligente, amable y confiable, conocido por su habilidad para recuperar y su temperamento amigable. Son excelentes compañeros familiares y se llevan bien con los niños y otros animales.',
    history:
      'Originario del Reino Unido, el Golden Retriever fue criado originalmente para recuperar aves de caza en tierra y agua. Su pelo dorado resistente al agua y su naturaleza amigable lo han hecho una de las razas de perros más populares para las familias.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Excelente perro de familia y de compañía',
      'Bueno con los niños y otros animales',
      'Amistoso y fácil de entrenar',
      'Requiere ejercicio regular',
      'Pelo necesita cuidado regular',
    ],
    color: ['Dorado'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Necesita ejercicio diario',
      'Necesita cuidado regular del pelo',
      'Debe ser entrenado desde una edad temprana',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Cataratas',
      'Hipotiroidismo',
    ],
  },
  87: {
    weight: {
      imperial: '45 - 80',
      metric: '20 - 36',
    },
    height: {
      imperial: '23 - 27',
      metric: '58 - 69',
    },
    id: 87,
    name: 'Setter Gordon',
    bred_for: ['Buscar y señalar aves de caza'],
    breed_group: ['Deportivo'],
    life_span: '10 - 12 años',
    temperament: [
      'Intrépido',
      'Alerta',
      'Leal',
      'Confiable',
      'Alegre',
      'Impaciente',
    ],
    origin: 'Reino Unido',
    reference_image_id: 'SJ5vzx5NX',
    image: {
      id: 'SJ5vzx5NX',
      width: 622,
      height: 467,
      url: 'https://cdn2.thedogapi.com/images/SJ5vzx5NX.jpg',
    },
    searchTerms: ['Setter Gordon', 'Perro de caza'],
    country_code: 'UK',
    description:
      'El Setter Gordon es un perro de caza conocido por su habilidad para buscar y señalar aves de caza. Son leales y confiables, con una personalidad alerta y alegre. Necesitan ejercicio regular para mantener su energía y son excelentes compañeros para actividades al aire libre.',
    history:
      'Originario del Reino Unido, el Setter Gordon fue criado originalmente para buscar y señalar aves de caza. Es una de las razas de perros de caza más antiguas y apreciadas, conocida por su habilidad para trabajar en diferentes terrenos y condiciones.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Excelente perro de caza',
      'Leal y confiable',
      'Requiere ejercicio regular',
      'Bueno para actividades al aire libre',
      'Pelo necesita cuidado regular',
    ],
    color: ['Negro y canela'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita ejercicio diario',
      'Necesita cuidado regular del pelo',
      'Debe ser entrenado para la caza',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas oculares'],
  },
  88: {
    weight: {
      imperial: '110 - 190',
      metric: '50 - 86',
    },
    height: {
      imperial: '28 - 32',
      metric: '71 - 81',
    },
    id: 88,
    name: 'Gran Danés',
    bred_for: ['Caza y retención de jabalíes', 'Guardián'],
    breed_group: ['Trabajo'],
    life_span: '7 - 10 años',
    temperament: [
      'Amistoso',
      'Devoto',
      'Reservado',
      'Gentil',
      'Confiado',
      'Amoroso',
    ],
    origin: 'Alemania',
    reference_image_id: 'B1Edfl9NX',
    image: {
      id: 'B1Edfl9NX',
      width: 800,
      height: 732,
      url: 'https://cdn2.thedogapi.com/images/B1Edfl9NX.jpg',
    },
    searchTerms: ['Gran Danés', 'Perro guardian'],
    country_code: 'DE',
    description:
      'El Gran Danés es una raza conocida por su gran tamaño y personalidad amistosa y devota. Son excelentes perros guardianes y fueron originalmente criados para cazar y retener jabalíes. A pesar de su tamaño, son conocidos por ser gentiles y amorosos con sus familias.',
    history:
      'El Gran Danés se originó en Alemania, donde se crió para cazar jabalíes y actuar como un perro guardián. A pesar de su nombre, no tiene ninguna relación con Dinamarca. Esta raza es famosa por su gran tamaño y por ser una de las razas de perros más altas del mundo.',
    categoria_de_tamanio: 'Muy grande',
    perks: [
      'Excelente perro guardián',
      'Amistoso y amoroso con la familia',
      'Requiere ejercicio moderado',
      'Bueno para hogares con espacio',
    ],
    color: ['Harlequin', 'Negro', 'Azul'], // assuming these are the 3 most common colors
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita espacio debido a su gran tamaño',
      'Debe ser entrenado para ser un buen perro guardián',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Dilatación gástrica volvulus',
    ],
  },
  89: {
    weight: {
      imperial: '85 - 115',
      metric: '39 - 52',
    },
    height: {
      imperial: '25 - 32',
      metric: '64 - 81',
    },
    id: 89,
    name: 'Gran Pirineo',
    bred_for: ['Guardián de ovejas'],
    breed_group: ['Trabajo'],
    life_span: '10 - 12 años',
    temperament: [
      'Fuerte de voluntad',
      'Sin miedo',
      'Afectuoso',
      'Paciente',
      'Gentil',
      'Confiado',
    ],
    origin: 'Francia',
    reference_image_id: 'B12uzg9V7',
    image: {
      id: 'B12uzg9V7',
      width: 800,
      height: 550,
      url: 'https://cdn2.thedogapi.com/images/B12uzg9V7.png',
    },
    searchTerms: ['Gran Pirineo', 'Perro guardian de ovejas'],
    country_code: 'FR',
    description:
      'El Gran Pirineo es conocido por su resistencia y valentía en el cuidado de las ovejas. Su temperamento fuerte, afectuoso y paciente hace que sea una excelente elección para un perro guardián. Su tamaño grande y su fuerte voluntad pueden ser intimidantes, pero debajo de esa apariencia, son gentiles y amorosos con su familia.',
    history:
      'El Gran Pirineo se originó en Francia y fue criado con el propósito de ser un perro guardián de ovejas. Son conocidos por su valentía y resistencia para proteger a las ovejas de los depredadores. Esta raza tiene una larga historia que se remonta a varios siglos atrás.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Excelente perro guardián',
      'Fuerte y resistente',
      'Amigable y amoroso con la familia',
      'Requiere ejercicio moderado',
    ],
    color: ['Blanco', 'Gris', 'Tricolor'], // assuming these are the 3 most common colors
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Necesita espacio para moverse debido a su gran tamaño',
      'Requiere entrenamiento constante debido a su fuerte voluntad',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas oculares'],
  },
  90: {
    weight: {
      imperial: '50 - 70',
      metric: '23 - 32',
    },
    height: {
      imperial: '27 - 30',
      metric: '69 - 76',
    },
    id: 90,
    name: 'Galgo',
    bred_for: ['Cazar liebres'],
    breed_group: ['Sabueso'],
    life_span: '10 - 13 años',
    temperament: [
      'Afectuoso',
      'Atlético',
      'Gentil',
      'Inteligente',
      'Tranquilo',
      'Temperamento estable',
    ],
    origin: 'Egipto', // adding the origin of the breed
    reference_image_id: 'ryNYMx94X',
    image: {
      id: 'ryNYMx94X',
      width: 1024,
      height: 681,
      url: 'https://cdn2.thedogapi.com/images/ryNYMx94X.jpg',
    },
    searchTerms: ['Galgo', 'Cazar liebres', 'Perro rápido'],
    country_code: 'EG', // adding the country code of origin
    description:
      'El Galgo es conocido por su velocidad y agilidad. Son perros cariñosos y suaves, pero también son extremadamente atléticos y disfrutan de la actividad física. Su naturaleza tranquila los convierte en excelentes compañeros de hogar.',
    history:
      'El Galgo tiene una larga historia que se remonta a los antiguos egipcios. Fueron criados originalmente para cazar liebres debido a su velocidad y agilidad. A lo largo de los años, han sido apreciados por su atletismo y su naturaleza cariñosa.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Perro muy rápido y atlético',
      'Tranquilo y suave en casa',
      'Inteligente y fácil de entrenar',
    ],
    color: ['Negro', 'Blanco', 'Atigrado'], // assuming these are the 3 most common colors
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita ejercicio regular para mantener su velocidad y agilidad',
      'Requiere espacio para correr y jugar',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Osteosarcoma', 'Problemas cardíacos'],
  },
  91: {
    weight: {
      imperial: '12',
      metric: '5',
    },
    height: {
      imperial: '9 - 11',
      metric: '23 - 28',
    },
    id: 91,
    name: 'Grifón de Bruselas',
    bred_for: ['Caza y eliminación de alimañas en establos'],
    breed_group: ['Toy'], // as per Dog API, not provided in the original object
    life_span: '10 – 15 años',
    temperament: [
      'Auto-importante',
      'Curioso',
      'Alerta',
      'Sociable',
      'Sensible',
      'Vigilante',
    ],
    origin: 'Bélgica', // added as per Dog API
    reference_image_id: 'ryoYGec4Q',
    image: {
      id: 'ryoYGec4Q',
      width: 645,
      height: 380,
      url: 'https://cdn2.thedogapi.com/images/ryoYGec4Q.jpg',
    },
    searchTerms: ['Grifón de Bruselas', 'Caza de alimañas', 'Perro pequeño'],
    country_code: 'BE', // added as per Dog API
    description:
      'El Grifón de Bruselas es una raza de perro pequeña y robusta, conocida por su pelaje rojo y su distintivo rostro cuadrado. Tienen un espíritu curioso y son excelentes compañeros de familia debido a su naturaleza amigable y vigilante.',
    history:
      'El Grifón de Bruselas tiene sus raíces en Bélgica, donde se criaba para cazar y eliminar alimañas en los establos. Con el tiempo, su atractivo físico y su naturaleza cariñosa los hicieron populares como mascotas de la familia y se han mantenido así hasta el día de hoy.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Excelente perro de compañía',
      'Buen perro de alerta',
      'Necesita ejercicio moderado',
    ],
    color: ['Rojo', 'Negro', 'Negro y marrón'], // assuming these are the 3 most common colors
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere un cuidado regular del pelaje',
      'Se beneficia de la socialización temprana',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Problemas de luxación de rótula',
      'Problemas oculares',
    ],
  },
  92: {
    weight: {
      imperial: '40 - 60',
      metric: '18 - 27',
    },
    height: {
      imperial: '18 - 22',
      metric: '46 - 56',
    },
    id: 92,
    name: 'Harrier',
    bred_for: ['Caza de liebres siguiendo su rastro'],
    breed_group: ['Sabueso'],
    life_span: '12 - 15 años',
    temperament: [
      'Extrovertido',
      'Amigable',
      'Alegre',
      'De buen carácter',
      'Tolerante',
      'Activo',
    ],
    origin: 'Reino Unido', // added as per Dog API
    reference_image_id: 'B1IcfgqE7',
    image: {
      id: 'B1IcfgqE7',
      width: 1920,
      height: 1080,
      url: 'https://cdn2.thedogapi.com/images/B1IcfgqE7.jpg',
    },
    searchTerms: ['Harrier', 'Caza de liebres', 'Perro activo'],
    country_code: 'UK', // added as per Dog API
    description:
      'El Harrier es una raza de perro que se parece a un Beagle de tamaño grande. Son conocidos por su resistencia y su habilidad para rastrear liebres. Son perros activos, amigables y alegres, lo que los hace buenos compañeros para la familia.',
    history:
      'Originario del Reino Unido, el Harrier se criaba para rastrear liebres. Esta raza se ha mantenido como un favorito entre los cazadores y los dueños de perros familiares debido a su naturaleza amigable y su resistencia.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente perro de caza',
      'Requiere mucho ejercicio',
      'Buen perro para familias',
    ],
    color: ['Tricolor', 'Bicolor', 'Sólido'], // assuming these are the 3 most common colors
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere mucho ejercicio y estimulación mental',
      'Se beneficia de la socialización temprana',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas de tiroides'],
  },
  93: {
    weight: {
      imperial: '7 - 13',
      metric: '3 - 6',
    },
    height: {
      imperial: '8.5 - 11.5',
      metric: '22 - 29',
    },
    id: 93,
    name: 'Havanés',
    bred_for: ['Compañía'],
    breed_group: ['Juguete'],
    life_span: '14 - 15 años',
    temperament: [
      'Cariñoso',
      'Receptivo',
      'Juguetón',
      'Compañero',
      'Suave',
      'Inteligente',
    ],
    origin: 'Cuba', // añadido según API Dog
    reference_image_id: 'rkXiGl9V7',
    image: {
      id: 'rkXiGl9V7',
      width: 800,
      height: 507,
      url: 'https://cdn2.thedogapi.com/images/rkXiGl9V7.jpg',
    },
    searchTerms: ['Havanés', 'Compañía', 'Perro pequeño'],
    country_code: 'CU', // añadido según API Dog
    description:
      'El Havanés es una raza pequeña de perro de compañía. Son conocidos por su pelaje largo y sedoso, y su naturaleza cariñosa y juguetona. Son perros inteligentes y receptivos, lo que los hace excelentes compañeros de familia.',
    history:
      'Originario de Cuba, el Havanés fue criado para ser un perro de compañía. Su pelaje largo y sedoso y su temperamento amigable y juguetón lo han hecho un favorito entre los dueños de perros pequeños.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Buen perro de compañía',
      'Requiere cuidado regular del pelaje',
      'Adecuado para vivir en apartamentos',
    ],
    color: ['Negro', 'Blanco', 'Chocolate'], // asumiendo estos son los 3 colores más comunes
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere cuidado regular del pelaje',
      'Requiere socialización y estimulación mental',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: ['Problemas de piel', 'Problemas oculares'],
  },
  94: {
    weight: {
      imperial: '35 - 70',
      metric: '16 - 32',
    },
    height: {
      imperial: '24 - 27',
      metric: '61 - 69',
    },
    id: 94,
    name: 'Setter Irlandés',
    bred_for: ['Señalar aves', 'Recuperación'],
    breed_group: ['Deportivo'],
    life_span: '10 - 11 años',
    temperament: [
      'Cariñoso',
      'Energético',
      'Vivaz',
      'Independiente',
      'Juguetón',
      'Compañero',
    ],
    origin: 'Irlanda', // añadido según API Dog
    reference_image_id: 'S1osGeqVm',
    image: {
      id: 'S1osGeqVm',
      width: 818,
      height: 522,
      url: 'https://cdn2.thedogapi.com/images/S1osGeqVm.jpg',
    },
    searchTerms: ['Setter Irlandés', 'Perro de caza', 'Perro grande'],
    country_code: 'IE', // añadido según API Dog
    description:
      'El Setter Irlandés es un perro grande, de grupo deportivo, conocido por su pelaje rojo y su naturaleza energética. Son perros cariñosos, juguetones y compañeros, lo que los hace excelentes perros de familia y compañía.',
    history:
      'Originario de Irlanda, el Setter Irlandés fue criado para señalar y recuperar aves. Son perros de trabajo con una gran cantidad de energía y requieren un ejercicio regular y significativo para mantenerlos felices y saludables.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Buen perro de caza',
      'Requiere ejercicio regular',
      'Se lleva bien con niños y otros perros',
    ],
    color: ['Rojo'], // asumiendo este es el color más común
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Requiere estimulación mental',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas de la vista'],
  },
  95: {
    weight: {
      imperial: '25 - 27',
      metric: '11 - 12',
    },
    height: {
      imperial: '18',
      metric: '46',
    },
    id: 95,
    name: 'Terrier Irlandés',
    bred_for: ['Caza de ratas y otros animales pequeños'],
    breed_group: ['Terrier'],
    life_span: '12 - 16 años',
    temperament: [
      'Respetuoso',
      'Vivaz',
      'Inteligente',
      'Dominante',
      'Protector',
      'Adiestrable',
    ],
    origin: 'Irlanda',
    reference_image_id: 'By-hGecVX',
    image: {
      id: 'By-hGecVX',
      width: 800,
      height: 626,
      url: 'https://cdn2.thedogapi.com/images/By-hGecVX.jpg',
    },
    searchTerms: ['Terrier Irlandés', 'Perro de caza pequeño'],
    country_code: 'IE',
    description:
      'El Terrier Irlandés es un perro de tamaño mediano, de grupo terrier, conocido por su pelaje rojo y su naturaleza vivaz. Son perros inteligentes, protectores y muy adiestrables, lo que los hace excelentes perros de familia y compañía.',
    history:
      'Originario de Irlanda, el Terrier Irlandés fue criado para la caza de ratas y otros animales pequeños. Son perros de trabajo con una gran cantidad de energía y requieren un ejercicio regular y significativo para mantenerlos felices y saludables.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Bueno para la caza de animales pequeños',
      'Requiere ejercicio regular',
      'Se lleva bien con niños y otros perros',
    ],
    color: ['Rojo'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Requiere estimulación mental',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas de la vista'],
  },
  96: {
    weight: {
      imperial: '7 - 15',
      metric: '3 - 7',
    },
    height: {
      imperial: '13 - 15',
      metric: '33 - 38',
    },
    id: 96,
    name: 'Galgo Italiano',
    bred_for: ['Perro de regazo'],
    breed_group: ['Juguete'],
    life_span: '12 - 15 años',
    temperament: [
      'Travieso',
      'Afectuoso',
      'Ágil',
      'Atlético',
      'Sociable',
      'Inteligente',
    ],
    origin: 'Italia', // Añadido basándose en el nombre
    reference_image_id: 'SJAnzg9NX',
    image: {
      id: 'SJAnzg9NX',
      width: 640,
      height: 377,
      url: 'https://cdn2.thedogapi.com/images/SJAnzg9NX.jpg',
    },
    searchTerms: ['Galgo Italiano', 'Perro pequeño', 'Perro de juguete'],
    country_code: 'IT', // Añadido basándose en el nombre
    description:
      'El Galgo Italiano es una raza pequeña conocida por su agilidad y atletismo. Aunque son enérgicos y disfrutan de un buen juego, también son muy afectuosos y disfrutan del tiempo de regazo con sus dueños.',
    history:
      'El Galgo Italiano es una de las razas de perros más antiguas, con un linaje que se remonta a miles de años. Originalmente criados para la caza y compañía de la nobleza, han permanecido populares debido a su naturaleza cariñosa y su tamaño manejable.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Ideal para la vida en apartamento',
      'Requiere poco ejercicio',
      'Perro de compañía cariñoso y apegado',
      'Bueno para dueños de perros por primera vez',
    ],
    color: ['Negro', 'Gris', 'Blanco'], // Asumiendo estos son los colores más comunes
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere ropa para el clima frío debido a su bajo nivel de grasa corporal',
      'Necesita una dieta equilibrada para mantener su peso',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Enfermedad dental',
      'Fracturas de las patas',
      'Problemas de piel',
    ],
  },
  97: {
    weight: {
      imperial: '4 - 9',
      metric: '2 - 4',
    },
    height: {
      imperial: '8 - 11',
      metric: '20 - 28',
    },
    id: 97,
    name: 'Chin Japonés',
    bred_for: ['Perro de regazo'],
    breed_group: ['Juguete'],
    life_span: '12 - 14 años',
    temperament: [
      'Alerta',
      'Leal',
      'Independiente',
      'Inteligente',
      'Amoroso',
      'Similar a un gato',
    ],
    origin: 'Japón', // Añadido basándose en el nombre
    reference_image_id: 'r1H6feqEm',
    image: {
      id: 'r1H6feqEm',
      width: 900,
      height: 581,
      url: 'https://cdn2.thedogapi.com/images/r1H6feqEm.jpg',
    },
    searchTerms: ['Chin Japonés', 'Perro pequeño', 'Perro de juguete'],
    country_code: 'JP', // Añadido basándose en el nombre
    description:
      'El Chin Japonés es una raza pequeña conocida por su naturaleza independiente y su comportamiento similar al de un gato. Son leales y amorosos con sus familias, pero pueden ser reservados con los extraños.',
    history:
      'El Chin Japonés es una antigua raza de perro de regazo que se originó en Japón. Fueron criados para la compañía y se mantuvieron en la corte imperial. Su porte elegante y su comportamiento tranquilo los hicieron populares entre la nobleza.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Ideal para la vida en apartamento',
      'Requiere poco ejercicio',
      'Perro de compañía cariñoso y apegado',
      'Bueno para dueños de perros por primera vez',
    ],
    color: ['Blanco', 'Negro', 'Rojo'], // Asumiendo estos son los colores más comunes
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere cepillado regular para mantener su pelaje',
      'Necesita una dieta equilibrada para evitar el sobrepeso',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Problemas de corazón', 'Problemas de oído'],
  },
  98: {
    weight: {
      imperial: '15 - 19',
      metric: '7 - 9',
    },
    height: {
      imperial: '12 - 15',
      metric: '30 - 38',
    },
    id: 98,
    name: 'Spitz Japonés',
    bred_for: ['Compañía'],
    breed_group: ['No especificado'], // Información faltante, sin traducción directa disponible
    life_span: '10 – 16 años',
    temperament: [
      'Afectuoso',
      'Obediente',
      'Juguetón',
      'Sociable',
      'Inteligente',
      'Orgulloso',
    ],
    origin: 'Japón', // Añadido basándose en el nombre
    reference_image_id: 'HksaMxqNX',
    image: {
      id: 'HksaMxqNX',
      width: 600,
      height: 351,
      url: 'https://cdn2.thedogapi.com/images/HksaMxqNX.jpg',
    },
    searchTerms: ['Spitz Japonés', 'Perro mediano', 'Perro compañero'],
    country_code: 'JP', // Añadido basándose en el nombre
    description:
      'El Spitz Japonés es conocido por su afectuosidad y su naturaleza juguetona. Son excelentes compañeros de familia y se llevan bien con otros animales y niños. Aunque pequeños, tienen una personalidad grande y orgullosa.',
    history:
      'El Spitz Japonés es una raza originaria de Japón y se cree que desciende de los perros Spitz blancos más grandes de Siberia. Fueron criados principalmente para ser perros de compañía y son muy populares en Japón por su tamaño manejable y su naturaleza amigable.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Se adapta bien a la vida en apartamentos',
      'Tiene una naturaleza amigable y juguetona',
      'Bueno con niños y otros animales',
      'Fácil de entrenar debido a su inteligencia',
    ],
    color: ['Blanco'], // Asumiendo que el blanco es el color más común
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Necesita ejercicio diario para mantener su energía',
      'Requiere cepillado regular debido a su pelaje espeso y blanco',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Problemas oculares', 'Displasia de cadera'],
  },
  99: {
    weight: {
      imperial: '35 - 45',
      metric: '16 - 20',
    },
    height: {
      imperial: '17 - 18',
      metric: '43 - 46',
    },
    id: 99,
    name: 'Keeshond',
    bred_for: ['Perro guardián de barcazas'],
    breed_group: ['No deportivo'],
    life_span: '12 - 15 años',
    temperament: [
      'Ágil',
      'Obediente',
      'Juguetón',
      'Rápido',
      'Robusto',
      'Brillante',
    ],
    origin: 'Países Bajos', // Añadido basándose en el origen conocido de la raza
    reference_image_id: 'S1GAGg9Vm',
    image: {
      id: 'S1GAGg9Vm',
      width: 1024,
      height: 683,
      url: 'https://cdn2.thedogapi.com/images/S1GAGg9Vm.jpg',
    },
    searchTerms: ['Keeshond', 'Perro mediano', 'Perro guardián'],
    country_code: 'NL', // Añadido basándose en el origen conocido de la raza
    description:
      'El Keeshond es una raza ágil y robusta conocida por su habilidad para ser un eficiente perro guardián de barcazas. Son animales juguetones y obedientes, con una inteligencia brillante que los hace rápidos para aprender y adaptarse.',
    history:
      'El Keeshond es originario de los Países Bajos, donde se utilizaban como perros guardián de barcazas. Esta raza se ha ganado un lugar en los hogares por su carácter amigable y su naturaleza juguetona.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Bueno para la vigilancia debido a su historia como perro guardián',
      'Muy adaptable y aprende rápidamente',
      'Amigable y juguetón, excelente para las familias',
    ],
    color: ['Gris', 'Negro', 'Crema'], // Asumiendo que estos son los colores más comunes
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita ejercicio diario para mantener su energía',
      'Requiere cepillado regular debido a su pelaje grueso',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas de tiroides'],
  },
  100: {
    weight: {
      imperial: '20 - 30',
      metric: '9 - 14',
    },
    height: {
      imperial: '14 - 16',
      metric: '36 - 41',
    },
    id: 100,
    name: 'Kooikerhondje',
    bred_for: ['Atrayendo patos a trampas - "tolling"'],
    breed_group: ['Deportivo'],
    life_span: '12 - 15 años',
    temperament: [
      'Benevolente',
      'Ágil',
      'Alerta',
      'Inteligente',
      'Activo',
      'Territorial',
    ],
    origin: 'Países Bajos', // Añadido basándose en el origen conocido de la raza
    reference_image_id: 'kOMy84GQE',
    image: {
      id: 'kOMy84GQE',
      width: 1080,
      height: 1080,
      url: 'https://cdn2.thedogapi.com/images/kOMy84GQE.jpg',
    },
    searchTerms: ['Kooikerhondje', 'Perro mediano', 'Perro deportivo'],
    country_code: 'NL', // Añadido basándose en el origen conocido de la raza
    description:
      'El Kooikerhondje es una raza activa y ágil, conocida por su habilidad para atraer patos a las trampas. Son perros inteligentes y alertas, con una actitud benevolente y un fuerte sentido territorial.',
    history:
      'El Kooikerhondje es originario de los Países Bajos, donde se utilizaba para atraer patos a las trampas. Esta práctica, conocida como "tolling", ha sido un rasgo definitorio de esta raza.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente perro deportivo con agilidad y energía',
      'Inteligente y fácil de entrenar',
      'Posee un fuerte instinto de protección del territorio',
    ],
    color: ['Blanco y naranja'], // Asumiendo que este es el color más común
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular debido a su naturaleza activa',
      'Necesita estímulo mental debido a su inteligencia',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Enfermedades oculares'],
  },
  101: {
    weight: {
      imperial: '70 - 115',
      metric: '32 - 52',
    },
    height: {
      imperial: '26 - 30',
      metric: '66 - 76',
    },
    id: 101,
    name: 'Kuvasz',
    bred_for: ['Guardián', 'Caza de animales grandes'],
    breed_group: ['Trabajador'],
    life_span: '8 - 10 años',
    temperament: [
      'Cómico',
      'Leal',
      'Paciente',
      'Independiente',
      'Inteligente',
      'Protector',
    ],
    origin: 'Hungría', // Añadido basándose en el origen conocido de la raza
    reference_image_id: 'BykZ7ecVX',
    image: {
      id: 'BykZ7ecVX',
      width: 960,
      height: 768,
      url: 'https://cdn2.thedogapi.com/images/BykZ7ecVX.jpg',
    },
    searchTerms: ['Kuvasz', 'Perro grande', 'Perro de trabajo'],
    country_code: 'HU', // Añadido basándose en el origen conocido de la raza
    description:
      'El Kuvasz es una raza leal y protectora, conocida por su independencia y su inteligencia. Aunque pueden ser cómicos y pacientes, también son perros grandes y fuertes, capaces de cazar animales grandes y actuar como guardias.',
    history:
      'El Kuvasz es originario de Hungría, donde se criaba para ser un perro de caza y guardián. A pesar de su gran tamaño, el Kuvasz es conocido por su carácter cómico y su lealtad hacia sus dueños.',
    categoria_de_tamanio: 'Muy grande',
    perks: [
      'Excelente perro guardián',
      'Independiente y requiere menos atención que otras razas',
      'Inteligente y fácil de entrenar con paciencia',
    ],
    color: ['Blanco'], // Asumiendo que este es el color más común
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular debido a su naturaleza activa',
      'Adecuado para climas más fríos debido a su pelaje grueso',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Enfermedades de la piel'],
  },
  102: {
    weight: {
      imperial: '55 - 80',
      metric: '25 - 36',
    },
    height: {
      imperial: '21.5 - 24.5',
      metric: '55 - 62',
    },
    id: 102,
    name: 'Labrador Retriever',
    bred_for: ['Recuperación de agua'],
    breed_group: ['Deportivo'],
    life_span: '10 - 13 años',
    temperament: [
      'Amable',
      'Sociable',
      'Ágil',
      'Gentil',
      'Inteligente',
      'Confiable',
      'Temperamento uniforme',
    ],
    origin: 'Reino Unido', // Añadido basándose en el origen conocido de la raza
    reference_image_id: 'B1uW7l5VX',
    image: {
      id: 'B1uW7l5VX',
      width: 992,
      height: 667,
      url: 'https://cdn2.thedogapi.com/images/B1uW7l5VX.jpg',
    },
    searchTerms: ['Labrador Retriever', 'Perro mediano', 'Perro deportivo'],
    country_code: 'UK', // Añadido basándose en el origen conocido de la raza
    description:
      'El Labrador Retriever es una raza amable y sociable, conocida por su inteligencia y habilidad para recuperar objetos en el agua. Son perros gentiles y confiables, con un temperamento uniforme que los hace excelentes mascotas familiares.',
    history:
      'Originario del Reino Unido, el Labrador Retriever fue criado inicialmente para recuperar objetos en el agua. Su inteligencia, agilidad y temperamento uniforme los convierten en una opción popular para muchas familias y también se utilizan frecuentemente como perros guía y de servicio.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente perro de familia',
      'Altamente inteligente y fácil de entrenar',
      'Necesita ejercicio regular y disfruta de actividades acuáticas',
    ],
    color: ['Negro', 'Amarillo', 'Chocolate'], // Asumiendo que estos son los colores más comunes
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere ejercicio regular y mental estimulación debido a su alta inteligencia',
      'Adecuado para vivir tanto en interiores como en exteriores, pero necesita espacio para correr',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas oculares'],
  },
  103: {
    weight: {
      imperial: '24 - 35',
      metric: '11 - 16',
    },
    height: {
      imperial: '16 - 19',
      metric: '41 - 48',
    },
    id: 103,
    name: 'Lagotto Romagnolo',
    bred_for: ['Perro de recuperación de agua en los pantanos de Romagna'],
    breed_group: ['Deportivo'],
    life_span: '14 - 16 años',
    temperament: [
      'Entusiasta',
      'Leal',
      'Sociable',
      'Amoroso',
      'Activo',
      'Adiestrable',
    ],
    origin: 'Italia', // Añadido basándose en el origen conocido de la raza
    reference_image_id: 'ryzzmgqE7',
    image: {
      id: 'ryzzmgqE7',
      width: 1600,
      height: 1200,
      url: 'https://cdn2.thedogapi.com/images/ryzzmgqE7.jpg',
    },
    searchTerms: ['Lagotto Romagnolo', 'Perro mediano', 'Perro deportivo'],
    country_code: 'IT', // Añadido basándose en el origen conocido de la raza
    description:
      'El Lagotto Romagnolo es una raza entusiasta y leal, conocida por su habilidad para recuperar objetos en el agua. Son perros sociables y amorosos, con un temperamento activo y adiestrable que los hace excelentes mascotas familiares.',
    history:
      'Originario de Italia, el Lagotto Romagnolo fue criado inicialmente para recuperar objetos en los pantanos de Romagna. Su lealtad, sociabilidad y habilidad para ser adiestrados los convierten en una opción popular para muchas familias.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Perro de familia entusiasta y amoroso',
      'Leal y adiestrable',
      'Necesita ejercicio regular y disfruta de actividades acuáticas',
    ],
    color: ['Blanco', 'Marrón', 'Naranja'], // Asumiendo que estos son los colores más comunes
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere ejercicio regular y estimulación mental debido a su alta energía e inteligencia',
      'Adecuado para vivir tanto en interiores como en exteriores, pero necesita espacio para correr',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Enfermedades de la piel'],
  },
  104: {
    weight: {
      imperial: '6 - 13',
      metric: '3 - 6',
    },
    height: {
      imperial: '10 - 12',
      metric: '25 - 30',
    },
    id: 104,
    name: 'Lancashire Heeler',
    bred_for: [
      'Pastoreo de ganado',
      'Caza de ratas',
      'Conducción de ganado al mercado',
    ],
    breed_group: ['Grupo de trabajo'], // Añadido basándose en las características de la raza
    life_span: '12 – 15 años',
    temperament: ['Astuto', 'Amigable', 'Alerta', 'Inteligente'],
    origin: 'Reino Unido', // Añadido basándose en el origen conocido de la raza
    reference_image_id: 'S1RGml5Em',
    image: {
      id: 'S1RGml5Em',
      width: 680,
      height: 453,
      url: 'https://cdn2.thedogapi.com/images/S1RGml5Em.jpg',
    },
    searchTerms: ['Lancashire Heeler', 'Perro pequeño', 'Perro de trabajo'],
    country_code: 'UK', // Añadido basándose en el origen conocido de la raza
    description:
      'El Lancashire Heeler es una raza inteligente y amigable, conocida por su astucia y alerta. Son perros trabajadores y hacen un excelente trabajo en el pastoreo de ganado, caza de ratas y conducción de ganado al mercado.',
    history:
      'Originario del Reino Unido, el Lancashire Heeler se utilizaba tradicionalmente para el pastoreo de ganado y para llevar al ganado al mercado. Su inteligencia y alerta los hacen ideales para este tipo de trabajo.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Perro trabajador inteligente y amigable',
      'Bueno en el pastoreo y la caza de ratas',
      'Necesita ejercicio regular y estimulación mental',
    ],
    color: ['Negro', 'Marrón', 'Blanco'], // Asumiendo que estos son los colores más comunes
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular y estimulación mental debido a su alta energía e inteligencia',
      'Necesita una dieta equilibrada y controlada debido a su alta actividad física',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas oculares'],
  },
  105: {
    weight: {
      imperial: '120 - 170',
      metric: '54 - 77',
    },
    height: {
      imperial: '25.5 - 31.5',
      metric: '65 - 80',
    },
    id: 105,
    name: 'Leonberger',
    bred_for: ['Guardián', 'Apariencia'],
    breed_group: ['Trabajo'],
    life_span: '6 - 8 años',
    temperament: [
      'Obediente',
      'Valiente',
      'Leal',
      'Sociable',
      'Adaptable',
      'Amoroso',
    ],
    origin: 'Alemania', // Añadido basándose en el origen conocido de la raza
    reference_image_id: 'ByrmQlqVm',
    image: {
      id: 'ByrmQlqVm',
      width: 1024,
      height: 694,
      url: 'https://cdn2.thedogapi.com/images/ByrmQlqVm.jpg',
    },
    searchTerms: ['Leonberger', 'Perro grande', 'Perro de trabajo'],
    country_code: 'DE', // Añadido basándose en el origen conocido de la raza
    description:
      'El Leonberger es una raza de perro grande y fuerte, conocida por su temperamento obediente, valiente y amoroso. Son perros de trabajo, excelentes guardianes y son apreciados por su hermosa apariencia.',
    history:
      'Originario de Alemania, el Leonberger se crió para ser un perro guardián. Con su apariencia imponente y su lealtad hacia su familia, ha ganado popularidad en todo el mundo.',
    categoria_de_tamanio: 'Muy grande',
    perks: [
      'Perro de trabajo leal y obediente',
      'Excelente como perro guardián',
      'Requiere ejercicio regular y estimulación mental',
    ],
    color: ['Marrón', 'Negro', 'Blanco'], // Asumiendo que estos son los colores más comunes
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere espacio suficiente debido a su gran tamaño',
      'Necesita mucho ejercicio y estimulación mental',
      'Requiere un cuidado regular del pelaje',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Displasia de codo'],
  },
  106: {
    weight: {
      imperial: '12 - 18',
      metric: '5 - 8',
    },
    height: {
      imperial: '10 - 11',
      metric: '25 - 28',
    },
    id: 106,
    name: 'Lhasa Apso',
    bred_for: ['Guardia en el hogar', 'Compañía'],
    breed_group: ['No deportivo'],
    life_span: '12 - 15 años',
    temperament: [
      'Estable',
      'Intrépido',
      'Amigable',
      'Devoto',
      'Asertivo',
      'Animado',
      'Energético',
      'Vivaz',
      'Alerta',
      'Obediente',
      'Juguetón',
      'Inteligente',
    ],
    origin: 'Tíbet', // Añadido basándose en el origen conocido de la raza
    reference_image_id: 'SJp7Qe5EX',
    image: {
      id: 'SJp7Qe5EX',
      width: 680,
      height: 444,
      url: 'https://cdn2.thedogapi.com/images/SJp7Qe5EX.jpg',
    },
    searchTerms: ['Lhasa Apso', 'Perro pequeño', 'Perro de compañía'],
    country_code: 'CN', // Añadido basándose en el origen conocido de la raza
    description:
      'El Lhasa Apso es una pequeña raza de perro conocida por su carácter amigable, devoto y juguetón. Su papel tradicional es ser un perro guardián en el hogar, y son perros llenos de energía y vivacidad.',
    history:
      'Originario del Tíbet, el Lhasa Apso fue criado para ser un perro guardián en los monasterios y los hogares. Es una raza antigua y venerada, y sigue siendo un popular perro de compañía en todo el mundo.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Buen perro guardián en el hogar',
      'Excelente como perro de compañía',
      'Requiere ejercicio regular y estimulación mental',
    ],
    color: ['Dorado', 'Miel', 'Blanco'], // Asumiendo que estos son los colores más comunes
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere cuidado regular del pelaje',
      'Requiere socialización y entrenamiento temprano',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Atrofia progresiva de la retina',
      'Problemas de piel y alergias',
    ],
  },
  107: {
    weight: {
      imperial: '4 - 7',
      metric: '2 - 3',
    },
    height: {
      imperial: '8 - 10',
      metric: '20 - 25',
    },
    id: 107,
    name: 'Maltés',
    bred_for: ['Perro de regazo'],
    breed_group: ['Juguete'],
    life_span: '15 - 18 años',
    temperament: [
      'Juguetón',
      'Dócil',
      'Intrépido',
      'Cariñoso',
      'De buen carácter',
      'Vivaz',
      'Receptivo',
      'Tranquilo',
      'Gentil',
      'Inteligente',
      'Activo',
    ],
    origin: 'Mediterráneo Central', // Añadido basándose en el origen conocido de la raza
    reference_image_id: 'B1SV7gqN7',
    image: {
      id: 'B1SV7gqN7',
      width: 680,
      height: 453,
      url: 'https://cdn2.thedogapi.com/images/B1SV7gqN7.jpg',
    },
    searchTerms: ['Maltés', 'Perro pequeño', 'Perro de regazo'],
    country_code: 'MT', // Añadido basándose en el origen conocido de la raza
    description:
      'El maltés es una pequeña raza de perro conocida por su pelaje blanco y lujoso. Son perros juguetones y cariñosos, conocidos por ser excelentes perros de regazo.',
    history:
      'Los malteses son una de las razas más antiguas, con una historia que se remonta a más de 2000 años. Originarios del Mediterráneo central, eran valorados por su compañía y se consideraban un signo de estatus y lujo.',
    categoria_de_tamanio: 'Muy pequeño',
    perks: [
      'Buen perro de regazo',
      'Excelente como perro de compañía',
      'Se adapta bien a la vida en apartamentos',
      'Requiere cuidado regular del pelaje',
    ],
    color: ['Blanco'], // Añadido basándose en el color conocido de la raza
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere cuidado regular del pelaje',
      'Requiere socialización y entrenamiento temprano',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: ['Problemas dentales', 'Luxación de la rótula'],
  },
  108: {
    weight: {
      imperial: '20 - 40',
      metric: '9 - 18',
    },
    height: {
      imperial: '13 - 18',
      metric: '33 - 46',
    },
    id: 108,
    name: 'Pastor Americano Miniatura',
    bred_for: ['Pastoreo'], // Añadido basándose en el grupo de razas
    breed_group: ['Pastor'],
    life_span: '12 - 15 años',
    temperament: ['Energético', 'Leal', 'Inteligente', 'Entrenable'],
    origin: 'Estados Unidos', // Añadido basándose en el origen conocido de la raza
    reference_image_id: 'BkHHQgcN7',
    image: {
      id: 'BkHHQgcN7',
      width: 920,
      height: 640,
      url: 'https://cdn2.thedogapi.com/images/BkHHQgcN7.jpg',
    },
    searchTerms: [
      'Pastor Americano Miniatura',
      'Perro pastor',
      'Perro inteligente',
    ],
    country_code: 'US', // Añadido basándose en el origen conocido de la raza
    description:
      'El Pastor Americano Miniatura es una raza de perro de pastoreo activa y enérgica. Son inteligentes y fáciles de entrenar, lo que los hace excelentes perros de trabajo y compañía.',
    history:
      'El Pastor Americano Miniatura se originó en los Estados Unidos en la década de 1980 como una versión más pequeña del Pastor Australiano. Se crían para el pastoreo y todavía son muy valorados por sus habilidades de trabajo.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Perro de pastoreo',
      'Fácil de entrenar',
      'Inteligente',
      'Necesita ejercicio regular',
    ],
    color: ['Negro', 'Azul merle', 'Rojo merle'], // Añadido basándose en los colores comunes de la raza
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Requiere estimulación mental',
      'Puede requerir entrenamiento de pastoreo',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas oculares'],
  },
  109: {
    weight: {
      imperial: '8 - 11',
      metric: '4 - 5',
    },
    height: {
      imperial: '10 - 12.5',
      metric: '25 - 32',
    },
    id: 109,
    name: 'Pinscher Miniatura',
    bred_for: ['Caza de pequeñas plagas'],
    breed_group: ['Juguete'],
    life_span: '15 años',
    temperament: [
      'Inteligente',
      'Extrovertido',
      'Amigable',
      'Energético',
      'Receptivo',
      'Juguetón',
    ],
    origin: 'Alemania', // Añadido basándose en el origen conocido de la raza
    reference_image_id: 'Hy3H7g94X',
    image: {
      id: 'Hy3H7g94X',
      width: 1500,
      height: 1125,
      url: 'https://cdn2.thedogapi.com/images/Hy3H7g94X.jpg',
    },
    searchTerms: ['Pinscher Miniatura', 'Perro juguete', 'Perro inteligente'],
    country_code: 'DE', // Añadido basándose en el origen conocido de la raza
    description:
      'El Pinscher Miniatura es una raza de perro pequeña y enérgica. Son inteligentes, juguetones y amigables, lo que los hace excelentes compañeros de familia y mascotas.',
    history:
      'El Pinscher Miniatura se originó en Alemania para cazar pequeñas plagas. A pesar de su tamaño pequeño, son valientes y tienen un gran instinto de caza.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Bueno para familias',
      'Bueno para apartamentos',
      'Inteligente',
      'Energético',
      'Juguetón',
    ],
    color: ['Negro', 'Marrón', 'Chocolate'], // Añadido basándose en los colores comunes de la raza
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Requiere estimulación mental',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: ['Problemas dentales', 'Luxación de rótula'],
  },
  110: {
    weight: {
      imperial: '11 - 20',
      metric: '5 - 9',
    },
    height: {
      imperial: '12 - 14',
      metric: '30 - 36',
    },
    id: 110,
    name: 'Schnauzer Miniatura',
    bred_for: ['Caza de ratas'],
    breed_group: ['Terrier'],
    life_span: '12 - 14 años',
    temperament: [
      'Intrépido',
      'Amigable',
      'Enérgico',
      'Alerta',
      'Obediente',
      'Inteligente',
    ],
    origin: 'Alemania', // Añadido basándose en el origen conocido de la raza
    reference_image_id: 'SJIUQl9NX',
    image: {
      id: 'SJIUQl9NX',
      width: 800,
      height: 533,
      url: 'https://cdn2.thedogapi.com/images/SJIUQl9NX.jpg',
    },
    searchTerms: ['Schnauzer Miniatura', 'Perro terrier', 'Perro inteligente'],
    country_code: 'DE', // Añadido basándose en el origen conocido de la raza
    description:
      'El Schnauzer Miniatura es una raza de perro pequeña y enérgica. Son inteligentes, obedientes y amigables, lo que los hace excelentes compañeros de familia y mascotas.',
    history:
      'El Schnauzer Miniatura se originó en Alemania para la caza de ratas. A pesar de su tamaño pequeño, son valientes y tienen un gran instinto de caza.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Bueno para familias',
      'Bueno para apartamentos',
      'Inteligente',
      'Enérgico',
      'Obediente',
    ],
    color: ['Negro', 'Plata', 'Sal y pimienta'], // Añadido basándose en los colores comunes de la raza
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Requiere estimulación mental',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: ['Problemas dentales', 'Problemas oculares'],
  },
  111: {
    weight: {
      imperial: '100 - 150',
      metric: '45 - 68',
    },
    height: {
      imperial: '26 - 28',
      metric: '66 - 71',
    },
    id: 111,
    name: 'Terranova',
    bred_for: ['Perro de agua multipropósito', 'Asistencia en pesca'],
    breed_group: ['Trabajo'],
    life_span: '8 - 10 años',
    temperament: ['De buen carácter', 'Amable', 'Entrenable'],
    origin: 'Canadá', // Añadido basándose en el origen conocido de la raza
    reference_image_id: 'Sk4DXl54m',
    image: {
      id: 'Sk4DXl54m',
      width: 1174,
      height: 986,
      url: 'https://cdn2.thedogapi.com/images/Sk4DXl54m.jpg',
    },
    searchTerms: ['Terranova', 'Perro de trabajo', 'Perro entrenable'],
    country_code: 'CA', // Añadido basándose en el origen conocido de la raza
    description:
      'Los perros de la raza Terranova son conocidos por su buen carácter, amabilidad y capacidad de entrenamiento. Son excelentes perros de trabajo, especialmente en agua.',
    history:
      'El Terranova se originó en Canadá como perro de agua multipropósito y asistente en pesca. Son famosos por su fuerza y su capacidad para nadar.',
    categoria_de_tamanio: 'Muy grande',
    perks: [
      'Buen nadador',
      'Amigable con los niños',
      'Bueno para rescate acuático',
      'Fácil de entrenar',
    ],
    color: ['Negro', 'Marrón', 'Landseer'], // Añadido basándose en los colores comunes de la raza
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere mucho espacio',
      'Requiere ejercicio regular',
      'Necesita natación regular',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas cardíacos'],
  },
  112: {
    weight: {
      imperial: '11 - 12',
      metric: '5 - 5',
    },
    height: {
      imperial: '9 - 10',
      metric: '23 - 25',
    },
    id: 112,
    name: 'Norfolk Terrier',
    bred_for: ['Caza de ratas', 'Salida de zorros'],
    breed_group: ['Terrier'],
    life_span: '12 - 15 años',
    temperament: [
      'Seguro de sí mismo',
      'Intrépido',
      'Animado',
      'Sociable',
      'Feliz',
      'Adorable',
    ],
    origin: 'Reino Unido', // Añadido basándose en el origen conocido de la raza
    reference_image_id: 'B1ADQg94X',
    image: {
      id: 'B1ADQg94X',
      width: 1468,
      height: 1092,
      url: 'https://cdn2.thedogapi.com/images/B1ADQg94X.jpg',
    },
    searchTerms: [
      'Norfolk Terrier',
      'Terrier',
      'Caza de ratas',
      'Salida de zorros',
    ],
    country_code: 'GB', // Añadido basándose en el origen conocido de la raza
    description:
      'Los Norfolk Terrier son perros seguros de sí mismos, intrépidos y animados. Son perros pequeños, pero tienen un espíritu valiente y son conocidos por su habilidad para la caza de ratas y la salida de zorros.',
    history:
      'El Norfolk Terrier se originó en el Reino Unido y fue criado principalmente para la caza de ratas y la salida de zorros. A pesar de su pequeño tamaño, es valiente y tiene un temperamento animado.',
    categoria_de_tamanio: 'Muy pequeño',
    perks: [
      'Bueno para familias',
      'Bueno para la vida en la ciudad',
      'Requiere poco mantenimiento del pelaje',
      'Energético y juguetón',
    ],
    color: ['Rojo', 'Negro y tostado', 'Grisáceo'], // Añadido basándose en los colores comunes de la raza
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Necesita socialización temprana',
      'Requiere estimulación mental',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Problemas dentales', 'Problemas cardíacos'],
  },
  113: {
    weight: {
      imperial: '11 - 12',
      metric: '5 - 5',
    },
    height: {
      imperial: '10',
      metric: '25',
    },
    id: 113,
    name: 'Terrier de Norwich',
    bred_for: ['Caza de ratas', 'Caza de zorros'],
    breed_group: ['Terrier'],
    life_span: '12 - 15 años',
    temperament: [
      'Resistente',
      'Cariñoso',
      'Energético',
      'Sensible',
      'Inteligente',
    ],
    origin: 'Reino Unido', // Añadido basándose en el origen conocido de la raza
    reference_image_id: 'BkgKXlqE7',
    image: {
      id: 'BkgKXlqE7',
      width: 1140,
      height: 640,
      url: 'https://cdn2.thedogapi.com/images/BkgKXlqE7.jpg',
    },
    searchTerms: [
      'Terrier de Norwich',
      'Terrier',
      'Caza de ratas',
      'Caza de zorros',
    ],
    country_code: 'GB', // Añadido basándose en el origen conocido de la raza
    description:
      'El Terrier de Norwich es conocido por ser resistente, cariñoso, energético, sensible e inteligente. A pesar de su pequeño tamaño, es un excelente cazador y puede ser un maravilloso compañero de hogar.',
    history:
      'El Terrier de Norwich se originó en el Reino Unido y fue criado principalmente para la caza de ratas y zorros. A pesar de su pequeño tamaño, es resistente y tiene un temperamento cariñoso y enérgico.',
    categoria_de_tamanio: 'Muy pequeño',
    perks: [
      'Bueno para familias',
      'Bueno para la vida en la ciudad',
      'Requiere poco mantenimiento del pelaje',
      'Energético y juguetón',
    ],
    color: ['Rojo', 'Negro y tostado', 'Grisáceo'], // Añadido basándose en los colores comunes de la raza
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Necesita socialización temprana',
      'Requiere estimulación mental',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Problemas dentales', 'Problemas cardíacos'],
  },
  114: {
    weight: {
      imperial: '35 - 50',
      metric: '16 - 23',
    },
    height: {
      imperial: '17 - 21',
      metric: '43 - 53',
    },
    id: 114,
    name: 'Retriever de Nueva Escocia',
    bred_for: ['Recuperación de aves acuáticas'], // Añadido basándose en el propósito conocido de la raza
    breed_group: ['Deportivo'],
    life_span: '12 - 14 años',
    temperament: [
      'Extrovertido',
      'Alerta',
      'Paciente',
      'Inteligente',
      'Amoroso',
    ],
    origin: 'Canadá', // Añadido basándose en el origen conocido de la raza
    reference_image_id: 'SyYtQe5V7',
    image: {
      id: 'SyYtQe5V7',
      width: 630,
      height: 420,
      url: 'https://cdn2.thedogapi.com/images/SyYtQe5V7.jpg',
    },
    searchTerms: [
      'Retriever de Nueva Escocia',
      'Deportivo',
      'Recuperación de aves acuáticas',
    ],
    country_code: 'CA', // Añadido basándose en el origen conocido de la raza
    description:
      'El Retriever de Nueva Escocia es una raza de perro extrovertida, alerta, paciente, inteligente y amorosa. Son conocidos por su habilidad para recuperar aves acuáticas y su amor por el agua.',
    history:
      'Originario de Canadá, el Retriever de Nueva Escocia se utilizó originalmente para recuperar aves acuáticas en la caza. A pesar de su tamaño medio, son fuertes nadadores y tienen una gran resistencia.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Bueno para familias',
      'Bueno para la vida en el campo',
      'Requiere ejercicio regular',
      'Ama el agua',
    ],
    color: ['Rojo', 'Naranja'], // Añadido basándose en los colores comunes de la raza
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Necesita socialización temprana',
      'Requiere estimulación mental',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas oculares'],
  },
  115: {
    weight: {
      imperial: '60 - 100',
      metric: '27 - 45',
    },
    height: {
      imperial: '21',
      metric: '53',
    },
    id: 115,
    name: 'Pastor Inglés Antiguo',
    bred_for: ['Manejo de ovejas', 'Manejo de ganado'],
    breed_group: ['Pastoreo'],
    life_span: '10 - 12 años',
    temperament: [
      'Sociable',
      'Efervescente',
      'Juguetón',
      'Adaptable',
      'Inteligente',
      'Amoroso',
    ],
    origin: 'Inglaterra', // Añadido basándose en el origen conocido de la raza
    reference_image_id: 'HkZ57lq4m',
    image: {
      id: 'HkZ57lq4m',
      width: 1334,
      height: 889,
      url: 'https://cdn2.thedogapi.com/images/HkZ57lq4m.jpg',
    },
    searchTerms: [
      'Pastor Inglés Antiguo',
      'Pastoreo',
      'Manejo de ovejas',
      'Manejo de ganado',
    ],
    country_code: 'GB', // Añadido basándose en el origen conocido de la raza
    description:
      'El Pastor Inglés Antiguo es un perro sociable, efervescente, juguetón, adaptable, inteligente y amoroso. Es conocido por su habilidad para manejar ovejas y ganado.',
    history:
      'El Pastor Inglés Antiguo es originario de Inglaterra, donde se utilizó principalmente para manejar ovejas y ganado. Con su pelaje largo y abundante, este perro robusto y fuerte es un trabajador nato.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Bueno para familias',
      'Se adapta bien a la vida en el campo o en la ciudad',
      'Requiere ejercicio regular',
      'Requiere cuidado regular del pelaje',
    ],
    color: ['Gris', 'Azul', 'Blanco'], // Añadido basándose en los colores comunes de la raza
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Necesita socialización temprana',
      'Requiere cuidado regular del pelaje',
      'Requiere estimulación mental',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas de vista',
      'Problemas de sordera',
    ],
  },
  116: {
    weight: {
      imperial: '65 – 85',
      metric: '29 - 38', // Aproximadamente traducido de lbs a kg
    },
    height: {
      imperial: '15 - 19',
      metric: '38 - 48',
    },
    id: 116,
    name: 'Bulldog Inglés',
    bred_for: ['Guardia', 'Compañía'], // Datos suplementarios, ya que esta raza es conocida por ser una excelente mascota y guardián
    breed_group: ['Molosoide'], // Grupo de razas al que pertenece
    life_span: '9 – 14 años',
    temperament: [
      'Amigable',
      'Alerta',
      'Confiado',
      'Amoroso',
      'Valiente',
      'Fuerte',
    ],
    origin: 'Inglaterra', // Añadido basándose en el origen conocido de la raza
    reference_image_id: 'B1d5me547',
    image: {
      id: 'B1d5me547',
      width: 554,
      height: 546,
      url: 'https://cdn2.thedogapi.com/images/B1d5me547.jpg',
    },
    searchTerms: ['Antiguo Bulldog Inglés', 'Molosoide', 'Guardia', 'Compañía'],
    country_code: 'GB', // Añadido basándose en el origen conocido de la raza
    description:
      'El Antiguo Bulldog Inglés es un perro amigable, alerta, confiado, amoroso, valiente y fuerte. Es conocido por su lealtad y su aptitud como mascota de familia.',
    history:
      'El Antiguo Bulldog Inglés es una reinvención de la raza original del Bulldog Inglés que fue criada para ser más saludable y tener un temperamento más estable.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente perro guardián',
      'Bueno para familias',
      'Adaptable a diversos ambientes',
      'Requiere ejercicio moderado',
    ],
    color: ['Blanco', 'Atigrado', 'Pardo'], // Añadido basándose en los colores comunes de la raza
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio moderado',
      'Necesita socialización temprana',
      'Alimentación balanceada para evitar sobrepeso',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas de piel',
      'Problemas respiratorios',
    ],
  },
  117: {
    weight: {
      imperial: '3 - 12',
      metric: '1 - 5',
    },
    height: {
      imperial: '8 - 11',
      metric: '20 - 28',
    },
    id: 117,
    name: 'Papillón',
    bred_for: ['Perro faldero'],
    breed_group: ['Juguete'], // Traducido al español
    life_span: '13 - 17 años',
    temperament: [
      'Resistente',
      'Amigable',
      'Energético',
      'Alerta',
      'Inteligente',
      'Feliz',
    ],
    origin: 'Francia', // Origen conocido de la raza
    reference_image_id: 'SkJj7e547',
    image: {
      id: 'SkJj7e547',
      width: 960,
      height: 765,
      url: 'https://cdn2.thedogapi.com/images/SkJj7e547.jpg',
    },
    searchTerms: ['Papillón', 'Perro faldero', 'Juguete'],
    country_code: 'FR', // Código de país basado en el origen conocido de la raza
    description:
      'El Papillón es un perro resistente, amigable, energético, alerta, inteligente y feliz. A pesar de su tamaño pequeño, es conocido por su resistencia y su energía.',
    history:
      'El Papillón, también conocido como el Spaniel de Mariposa, es una de las razas de perros de juguete más antiguas de Europa. Su nombre, que significa "mariposa" en francés, se refiere a sus distintivas orejas peludas que se asemejan a las alas de una mariposa.',
    categoria_de_tamanio: 'Muy pequeño',
    perks: [
      'Excelente perro de compañía',
      'Se adapta bien a la vida en apartamentos',
      'Energético y juguetón',
      'Inteligente y fácil de entrenar',
    ],
    color: ['Blanco', 'Negro', 'Tricolor'], // Los colores más comunes de la raza
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Excelente',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere estimulación mental',
      'Requiere ejercicio diario',
      'Necesita socialización temprana',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Luxación de rótula',
      'Problemas dentales',
      'Problemas de oído debido a su pelaje largo',
    ],
  },
  118: {
    weight: {
      imperial: '14',
      metric: '6',
    },
    height: {
      imperial: '6 - 9',
      metric: '15 - 23',
    },
    id: 118,
    name: 'Pekinés',
    bred_for: ['Perro faldero'],
    breed_group: ['Juguete'], // Traducido al español
    life_span: '14 - 18 años',
    temperament: [
      'Opinativo',
      'De buen carácter',
      'Terco',
      'Cariñoso',
      'Agresivo',
      'Inteligente',
    ],
    origin: 'China', // Origen conocido de la raza
    reference_image_id: 'ByIiml9Nm',
    image: {
      id: 'ByIiml9Nm',
      width: 960,
      height: 640,
      url: 'https://cdn2.thedogapi.com/images/ByIiml9Nm.jpg',
    },
    searchTerms: ['Pekinés', 'Perro faldero', 'Juguete'],
    country_code: 'CN', // Código de país basado en el origen conocido de la raza
    description:
      'El Pekinés es un perro opinativo, de buen carácter, terco, cariñoso, agresivo e inteligente. Son conocidos por su pequeño tamaño y su actitud fuerte y decidida.',
    history:
      'El Pekinés es una raza antigua de juguete que se originó en China. Fueron los perros de la realeza y se consideraban un tesoro nacional. Su diseño y personalidad reflejan su estatus real.',
    categoria_de_tamanio: 'Muy pequeño',
    perks: [
      'Bueno para la vida en apartamentos',
      'Fuerte y resistente para su tamaño',
      'Puede ser un buen perro de guardia debido a su actitud protectora',
    ],
    color: ['Negro', 'Blanco', 'Tostado'], // Los colores más comunes de la raza
    nivel_de_energia: 'Bajo',
    facilidad_de_entrenamiento: 'Bajo',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Baja',
    necesidades_especiales: [
      'Requiere acicalamiento regular debido a su pelaje largo',
      'Puede ser propenso a la obesidad, necesita una dieta controlada',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Problemas oculares',
      'Problemas respiratorios debido a su cara achatada',
      'Problemas de piel',
    ],
  },
  119: {
    weight: {
      imperial: '25 - 30',
      metric: '11 - 14',
    },
    height: {
      imperial: '10 - 12',
      metric: '25 - 30',
    },
    id: 119,
    name: 'Corgi Galés de Pembroke',
    bred_for: ['Conducción de ganado al mercado en el norte de Gales'],
    breed_group: ['Pastoreo'], // Traducido al español
    life_span: '12 - 14 años',
    temperament: [
      'Tenaz',
      'Extrovertido',
      'Amigable',
      'Audaz',
      'Juguetón',
      'Protector',
    ],
    origin: 'Gales', // Origen conocido de la raza
    reference_image_id: 'rJ6iQeqEm',
    image: {
      id: 'rJ6iQeqEm',
      width: 1280,
      height: 720,
      url: 'https://cdn2.thedogapi.com/images/rJ6iQeqEm.jpg',
    },
    searchTerms: ['Corgi Galés de Pembroke', 'Perro de pastoreo', 'Corgi'],
    country_code: 'GB', // Código de país basado en el origen conocido de la raza
    description:
      'El Corgi Galés de Pembroke es un perro tenaz, extrovertido, amigable, audaz, juguetón y protector. Son conocidos por su pequeño tamaño y su actitud decidida.',
    history:
      'El Corgi Galés de Pembroke es una raza que se originó en Gales, Reino Unido. Fueron utilizados para conducir ganado al mercado. Son perros de pastoreo eficientes y activos, a pesar de su pequeño tamaño.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Bueno para familias activas',
      'Perro de compañía leal y afectuoso',
      'Bueno con otros animales si se socializa correctamente',
    ],
    color: ['Rojo', 'Sable', 'Negro y fuego'], // Los colores más comunes de la raza
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere mucho ejercicio y estimulación mental',
      'Necesita una dieta controlada para evitar el sobrepeso',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Obesidad',
      'Problemas oculares',
    ],
  },
  120: {
    weight: {
      imperial: '88 - 110',
      metric: '40 - 50',
    },
    height: {
      imperial: '22 - 25.5',
      metric: '56 - 65',
    },
    id: 120,
    name: 'Perro de Presa Canario',
    bred_for: ['Trabajo de guarda y protección', 'Perro de ganado'], // Añadido basado en el conocimiento común de la raza
    breed_group: ['Trabajo'],
    life_span: '10 - 12 años',
    temperament: [
      'Fuerte Voluntad',
      'Sospechoso',
      'Amable',
      'Dominante',
      'Calmado',
    ],
    origin: 'Islas Canarias', // Origen conocido de la raza
    reference_image_id: 'S1V3Qeq4X',
    image: {
      id: 'S1V3Qeq4X',
      width: 600,
      height: 483,
      url: 'https://cdn2.thedogapi.com/images/S1V3Qeq4X.jpg',
    },
    searchTerms: [
      'Perro de Presa Canario',
      'Perro de Trabajo',
      'Perro Guardián',
    ],
    country_code: 'ES', // Código de país basado en el origen conocido de la raza
    description:
      'El Perro de Presa Canario es una raza fuerte y dominante, conocida por su voluntad y su temperamento calmado. Son perros grandes y potentes, ideales para el trabajo de protección y como perros de ganado.',
    history:
      'El Perro de Presa Canario se originó en las Islas Canarias, donde se utilizaba para trabajar con el ganado y como perro guardián. Son conocidos por su fuerza y coraje, y son muy apreciados en su tierra natal.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Excelente guardián y protector',
      'Bueno con las familias si se socializa correctamente',
      'Requiere un dueño experimentado',
    ],
    color: ['Atigrado', 'León', 'Negro'], // Los colores más comunes de la raza
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular y estimulación mental',
      'Necesita socialización temprana y entrenamiento de obediencia',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas de corazón',
      'Obesidad',
    ],
  },
  121: {
    weight: {
      imperial: '40 - 60',
      metric: '18 - 27',
    },
    height: {
      imperial: '21 - 25',
      metric: '53 - 64',
    },
    id: 121,
    name: 'Perro del Faraón',
    bred_for: ['Caza de conejos'],
    breed_group: ['Sabueso'],
    life_span: '12 - 14 años',
    temperament: [
      'Cariñoso',
      'Sociable',
      'Juguetón',
      'Inteligente',
      'Activo',
      'Entrenable',
    ],
    origin: 'Egipto', // Origen conocido de la raza
    reference_image_id: 'Byz6mgqEQ',
    image: {
      id: 'Byz6mgqEQ',
      width: 3918,
      height: 2938,
      url: 'https://cdn2.thedogapi.com/images/Byz6mgqEQ.jpg',
    },
    searchTerms: ['Perro del Faraón', 'Sabueso', 'Caza de Conejos'],
    country_code: 'EG', // Código de país basado en el origen conocido de la raza
    description:
      'El Perro del Faraón es una raza activa y juguetona, conocida por su inteligencia y su facilidad de entrenamiento. Son perros cariñosos y sociables que adoran la compañía de sus dueños.',
    history:
      'El Perro del Faraón se originó en Egipto, donde se usaba para la caza de conejos. Son conocidos por su velocidad y agilidad, así como por su instinto de caza agudo.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente para la caza y el seguimiento',
      'Bueno con las familias y disfruta de jugar',
      'Requiere ejercicio regular y estimulación mental',
    ],
    color: ['Canela', 'Blanco', 'Rojo'], // Los colores más comunes de la raza
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular y estimulación mental',
      'Necesita socialización temprana y entrenamiento de obediencia',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas de oído',
      'Alergias',
    ],
  },
  122: {
    weight: {
      imperial: '40 - 60',
      metric: '18 - 27',
    },
    height: {
      imperial: '20 - 25',
      metric: '51 - 64',
    },
    id: 122,
    name: 'Plott',
    bred_for: ['Caza de grandes animales como el jabalí'],
    breed_group: ['Sabueso'],
    life_span: '12 - 14 años',
    temperament: ['Audaz', 'Alerta', 'Leal', 'Inteligente'],
    origin: 'Estados Unidos', // Origen conocido de la raza
    reference_image_id: 'B1i67l5VQ',
    image: {
      id: 'B1i67l5VQ',
      width: 640,
      height: 480,
      url: 'https://cdn2.thedogapi.com/images/B1i67l5VQ.jpg',
    },
    searchTerms: ['Plott', 'Sabueso', 'Caza de jabalí'],
    country_code: 'US', // Código de país basado en el origen conocido de la raza
    description:
      'El Plott es una raza de perro audaz y alerta, conocida por su lealtad e inteligencia. Son excelentes cazadores de grandes animales como el jabalí y necesitan un dueño que pueda proporcionarles suficiente ejercicio físico y mental.',
    history:
      'El Plott se originó en Estados Unidos, donde se usaba principalmente para la caza de grandes animales como el jabalí. Esta raza fue criada para ser valiente, leal e inteligente, características que aún conserva hoy en día.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente para la caza y el seguimiento de grandes animales',
      'Perro leal y protector, bueno como perro guardián',
      'Requiere ejercicio físico y mental regular',
    ],
    color: ['Negro', 'Marrón', 'Brindle'], // Los colores más comunes de la raza
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio físico y mental regular',
      'Necesita un dueño que pueda manejar su alta energía y audacia',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas de oído',
      'Alergias',
    ],
  },
  123: {
    weight: {
      imperial: '3 - 7',
      metric: '1 - 3',
    },
    height: {
      imperial: '8 - 12',
      metric: '20 - 30',
    },
    id: 123,
    name: 'Pomerania',
    bred_for: ['Compañía'],
    breed_group: ['Juguete'],
    life_span: '15 años',
    temperament: [
      'Extrovertido',
      'Amigable',
      'Sociable',
      'Juguetón',
      'Inteligente',
      'Activo',
    ],
    origin: 'Alemania', // Origen conocido de la raza
    reference_image_id: 'HJd0XecNX',
    image: {
      id: 'HJd0XecNX',
      width: 800,
      height: 532,
      url: 'https://cdn2.thedogapi.com/images/HJd0XecNX.jpg',
    },
    searchTerms: ['Pomerania', 'Juguete', 'Compañía'],
    country_code: 'DE', // Código de país basado en el origen conocido de la raza
    description:
      'El Pomerania es una raza de perro extrovertida y amigable. Son juguetones, inteligentes y muy activos. A pesar de su tamaño pequeño, tienen una gran personalidad y son excelentes como perros de compañía.',
    history:
      'El Pomerania se originó en Alemania, donde se criaron para ser perros de compañía. Esta raza ha sido popular durante mucho tiempo debido a su tamaño pequeño, su personalidad encantadora y su hermoso pelaje.',
    categoria_de_tamanio: 'Muy pequeño',
    perks: [
      'Excelente compañía',
      'Ideal para familias o individuos que buscan un perro amigable y juguetón',
      'Requiere ejercicio regular, pero no tanto como las razas más grandes',
    ],
    color: ['Naranja', 'Negro', 'Marrón'], // Los colores más comunes de la raza
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere aseo regular debido a su pelaje largo y espeso',
      'Necesita compañía y socialización regular',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Problemas dentales',
      'Luxación de rótula',
      'Problemas cardíacos',
    ],
  },
  124: {
    weight: {
      imperial: '15 - 17',
      metric: '7 - 8',
    },
    height: {
      imperial: '11 - 15',
      metric: '28 - 38',
    },
    id: 124,
    name: 'Caniche (Miniatura)',
    bred_for: ['Compañía', 'Ejercicio físico moderado'],
    breed_group: ['Juguete'],
    life_span: '12 – 15 años',
    temperament: [
      'Inteligente',
      'Amigable',
      'Entrenable',
      'Fiel',
      'Energético',
    ],
    origin: 'Francia',
    reference_image_id: 'Hkxk4ecVX',
    image: {
      id: 'Hkxk4ecVX',
      width: 1280,
      height: 853,
      url: 'https://cdn2.thedogapi.com/images/Hkxk4ecVX.jpg',
    },
    searchTerms: ['Caniche Miniatura', 'Caniche', 'Miniatura'],
    country_code: 'FR', // Código de país basado en el origen conocido de la raza
    description:
      'El Caniche Miniatura es una raza de perro inteligente y amigable. Son leales, llenos de energía y muy entrenables, lo que los hace excelentes compañeros para cualquier familia o individuo.',
    history:
      'El Caniche Miniatura se originó en Francia y ha sido un perro de compañía popular durante siglos. Son famosos por su inteligencia y su capacidad para aprender rápidamente.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Gran compañero de la familia',
      'Bueno para personas con alergias',
      'Requiere ejercicio moderado',
      'Facilidad de entrenamiento alta debido a su inteligencia',
    ],
    color: ['Blanco', 'Negro', 'Gris'], // Los colores más comunes de la raza
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere aseo regular debido a su pelaje rizado',
      'Necesita ejercicio y estimulación mental regular',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Problemas oculares',
      'Problemas de piel',
      'Displasia de cadera',
    ],
  },
  125: {
    weight: {
      imperial: '6 - 9',
      metric: '3 - 4',
    },
    height: {
      imperial: '9 - 11',
      metric: '23 - 28',
    },
    id: 125,
    name: 'Caniche (Juguete)',
    bred_for: ['Compañía', 'Ejercicio físico ligero'],
    breed_group: ['Juguete'],
    life_span: '18 años',
    temperament: [
      'Inteligente',
      'Amigable',
      'Entrenable',
      'Fiel',
      'Energético',
    ],
    origin: 'Francia',
    reference_image_id: 'rJFJVxc4m',
    image: {
      id: 'rJFJVxc4m',
      width: 620,
      height: 403,
      url: 'https://cdn2.thedogapi.com/images/rJFJVxc4m.jpg',
    },
    searchTerms: ['Caniche Juguete', 'Caniche', 'Juguete'],
    country_code: 'FR', // Código de país basado en el origen conocido de la raza
    description:
      'El Caniche Juguete es una versión más pequeña del Caniche, famoso por su inteligencia y personalidad amigable. Son perros de compañía ideales para la vida en apartamentos y hogares más pequeños.',
    history:
      'Originario de Francia, el Caniche Juguete ha sido un favorito en las casas de todo el mundo debido a su tamaño pequeño y su personalidad encantadora. Aunque se crían principalmente como perros de compañía, también han demostrado ser excelentes en la obediencia y la agilidad.',
    categoria_de_tamanio: 'Muy pequeño',
    perks: [
      'Ideal para la vida en apartamentos',
      'Bueno para personas con alergias',
      'Requiere ejercicio ligero',
      'Facilidad de entrenamiento alta debido a su inteligencia',
    ],
    color: ['Blanco', 'Negro', 'Gris'], // Los colores más comunes de la raza
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere aseo regular debido a su pelaje rizado',
      'Necesita ejercicio y estimulación mental regular',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Problemas oculares',
      'Problemas de piel',
      'Displasia de cadera',
    ],
  },
  126: {
    weight: {
      imperial: '14 - 18',
      metric: '6 - 8',
    },
    height: {
      imperial: '10 - 12',
      metric: '25 - 30',
    },
    id: 126,
    name: 'Pug',
    bred_for: ['Perro de regazo'],
    breed_group: ['Juguete'],
    life_span: '12 - 14 años',
    temperament: [
      'Dócil',
      'Inteligente',
      'Encantador',
      'Terco',
      'Sociable',
      'Juguetón',
      'Tranquilo',
      'Atento',
    ],
    origin: 'China',
    reference_image_id: 'HyJvcl9N7',
    image: {
      id: 'HyJvcl9N7',
      width: 800,
      height: 600,
      url: 'https://cdn2.thedogapi.com/images/HyJvcl9N7.jpg',
    },
    searchTerms: ['Pug', 'Mops', 'Carlino'],
    country_code: 'CN',
    description:
      'El Pug es una raza de perro con rostro arrugado y un cuerpo pequeño y robusto. Son conocidos por su temperamento alegre y su personalidad amigable y tranquila.',
    history:
      'El Pug es una de las razas de perros más antiguas, originaria de China antes de 400 a.C. Fueron criados como perros de compañía para las clases altas y recibieron un trato real.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Se lleva bien con niños y otras mascotas',
      'Bajo nivel de actividad y necesidades de ejercicio',
      'Ideal para la vida en apartamentos',
      'Poco mantenimiento en términos de aseo',
    ],
    color: ['Negro', 'Fawn', 'Plata', 'Albaricoque'],
    nivel_de_energia: 'Bajo',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Necesita mantenerse fresco en climas cálidos debido a su pelaje corto y denso',
      'Propenso a problemas de salud específicos como la displasia de cadera',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Pug Dog Encephalitis',
      'Luxación patelar',
    ],
  },
  127: {
    weight: {
      imperial: '25 - 35',
      metric: '11 - 16',
    },
    height: {
      imperial: '16 - 17',
      metric: '41 - 43',
    },
    id: 127,
    name: 'Puli',
    bred_for: ['Pastoreo'],
    breed_group: ['Pastor'],
    life_span: '12 - 16 años',
    temperament: [
      'Energético',
      'Ágil',
      'Leal',
      'Obediente',
      'Inteligente',
      'Fiel',
    ],
    origin: 'Hungría',
    reference_image_id: 'ryPgVl5N7',
    image: {
      id: 'ryPgVl5N7',
      width: 1199,
      height: 829,
      url: 'https://cdn2.thedogapi.com/images/ryPgVl5N7.jpg',
    },
    searchTerms: ['Puli', 'Perro pastor húngaro', 'Pulik'],
    country_code: 'HU',
    description:
      'El Puli es un perro de tamaño mediano, famoso por su pelaje de cordones único que puede parecerse a las rastas. Son extremadamente inteligentes y ágiles, lo que los hace excelentes perros de trabajo y de compañía.',
    history:
      'El Puli es una raza antigua de perros de pastoreo de Hungría, conocida desde el siglo IX. Fueron utilizados principalmente por los pastores para cuidar y guiar al ganado, y aún hoy son muy valorados por sus habilidades de pastoreo.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Altamente inteligente y fácil de entrenar',
      'Excelente perro de pastoreo y puede ser bueno en deportes de agilidad',
      'Pelo único que requiere un aseo especializado',
      'Bueno con los niños y otros animales si se socializa desde una edad temprana',
    ],
    color: ['Negro', 'Gris plata', 'Blanco'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita una gran cantidad de ejercicio y estimulación mental',
      'Su pelaje requiere un cuidado y mantenimiento especiales',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Atrofia retiniana progresiva',
      'Cataratas',
    ],
  },
  128: {
    weight: {
      imperial: '18 - 33',
      metric: '8 - 15',
    },
    height: {
      imperial: '15 - 18.5',
      metric: '38 - 47',
    },
    id: 128,
    name: 'Pumi',
    bred_for: ['Pastoreo'],
    breed_group: ['Pastor'],
    life_span: '13 - 15 años',
    temperament: [
      'Vivaz',
      'Reservado',
      'Inteligente',
      'Activo',
      'Protector',
      'Vocal',
    ],
    origin: 'Hungría',
    reference_image_id: 'SyRe4xcN7',
    image: {
      id: 'SyRe4xcN7',
      width: 695,
      height: 391,
      url: 'https://cdn2.thedogapi.com/images/SyRe4xcN7.jpg',
    },
    searchTerms: ['Pumi', 'Perro pastor húngaro', 'Pumik'],
    country_code: 'HU',
    description:
      'El Pumi es un perro de tamaño mediano, conocido por su personalidad vivaz y su apariencia distintiva con orejas erguidas y pelo rizado. Son perros inteligentes y activos, excelentes para el trabajo de pastoreo.',
    history:
      'El Pumi se originó en Hungría y se utilizó principalmente para el pastoreo de ovejas y ganado. Esta raza se desarrolló a partir de la mezcla de varias razas de perros de pastoreo húngaras y extranjeras.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Perro de trabajo inteligente y activo',
      'Se destaca en deportes de agilidad y obediencia',
      'Puede ser un buen guardián debido a su naturaleza protectora y vocal',
      'Requiere ejercicio regular y estimulación mental',
    ],
    color: ['Negro', 'Gris', 'Fawn'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita mucho ejercicio y estimulación mental',
      'Requiere aseo regular debido a su pelo rizado',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas oculares'],
  },
  129: {
    weight: {
      imperial: '8 - 25',
      metric: '4 - 11',
    },
    height: {
      imperial: '10 - 13',
      metric: '25 - 33',
    },
    id: 129,
    name: 'Terrier Rata',
    bred_for: ['Caza de ratas', 'Compañía'],
    breed_group: ['Terrier'],
    life_span: '12 - 18 años',
    temperament: [
      'Afectuoso',
      'Vivaz',
      'Curioso',
      'Alerta',
      'Inteligente',
      'Amoroso',
    ],
    origin: 'Estados Unidos',
    reference_image_id: 'HkXWNl9E7',
    image: {
      id: 'HkXWNl9E7',
      width: 825,
      height: 689,
      url: 'https://cdn2.thedogapi.com/images/HkXWNl9E7.jpg',
    },
    searchTerms: ['Terrier Rata', 'Rat Terrier', 'Terrier americano'],
    country_code: 'US',
    description:
      'El Terrier Rata es un perro de tamaño pequeño a mediano, conocido por su naturaleza enérgica y su habilidad para cazar ratas. Son perros inteligentes y afectuosos, lo que los hace excelentes mascotas para la familia.',
    history:
      'El Terrier Rata se originó en Estados Unidos y se utilizó principalmente para cazar ratas y otros roedores. Esta raza es una mezcla de varias razas de terrier, incluyendo el Fox Terrier y el Bull Terrier.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Perro inteligente y enérgico',
      'Excelente para cazar ratas y otros roedores',
      'Puede ser un buen perro guardián debido a su naturaleza alerta',
      'Requiere ejercicio moderado y estimulación mental',
    ],
    color: ['Blanco', 'Negro', 'Marrón'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita ejercicio regular y estimulación mental',
      'Requiere aseo regular debido a su pelo corto',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas oculares',
      'Alergias',
    ],
  },
  130: {
    weight: {
      imperial: '45 - 80',
      metric: '20 - 36',
    },
    height: {
      imperial: '21 - 27',
      metric: '53 - 69',
    },
    id: 130,
    name: 'Sabueso Rojo',
    bred_for: [
      'Caza de mapaches',
      'Caza de ciervos',
      'Caza de osos',
      'Caza de pumas',
    ],
    breed_group: ['Sabueso'],
    life_span: '10 - 12 años',
    temperament: [
      'Afectuoso',
      'Energético',
      'Independiente',
      'Sociable',
      'Familiar',
      'Imperturbable',
    ],
    origin: 'Estados Unidos',
    reference_image_id: 'HJMzEl5N7',
    image: {
      id: 'HJMzEl5N7',
      width: 1537,
      height: 1323,
      url: 'https://cdn2.thedogapi.com/images/HJMzEl5N7.jpg',
    },
    searchTerms: ['Sabueso Rojo', 'Redbone Coonhound'],
    country_code: 'US',
    description:
      'El Sabueso Rojo es un perro de tamaño mediano a grande, conocido por su pelaje rojo y su habilidad para cazar. A pesar de su independencia, son perros afectuosos y se llevan bien con las familias.',
    history:
      'Originario de Estados Unidos, el Sabueso Rojo se desarrolló para la caza de mapaches, ciervos, osos y pumas. Su resistencia y su olfato agudo lo convierten en un cazador excepcional.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Excelente cazador',
      'Bueno para familias',
      'Se lleva bien con otros perros',
      'Necesita ejercicio regular',
    ],
    color: ['Rojo'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Necesita ejercicio regular',
      'Requiere un ambiente donde pueda explorar y olfatear',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas de la piel',
      'Obesidad',
    ],
  },
  131: {
    weight: {
      imperial: '75 - 80',
      metric: '34 - 36',
    },
    height: {
      imperial: '24 - 27',
      metric: '61 - 69',
    },
    id: 131,
    name: 'Rhodesian Ridgeback',
    bred_for: ['Caza de animales grandes', 'Guardia'],
    breed_group: ['Sabueso'],
    life_span: '10 - 12 años',
    temperament: [
      'Fuerte voluntad',
      'Travieso',
      'Leal',
      'Digno',
      'Sensible',
      'Inteligente',
    ],
    origin: 'Zimbabwe',
    reference_image_id: 'By9zNgqE7',
    image: {
      id: 'By9zNgqE7',
      width: 1000,
      height: 667,
      url: 'https://cdn2.thedogapi.com/images/By9zNgqE7.jpg',
    },
    searchTerms: ['Rhodesian Ridgeback', 'Perro Crestado Rodesiano'],
    country_code: 'ZW',
    description:
      'El Rhodesian Ridgeback es un perro de gran tamaño, conocido por su cresta de pelo que corre a lo largo de su espalda en dirección opuesta al resto de su pelaje. Son perros leales y dignos, con una fuerte voluntad y una naturaleza algo traviesa.',
    history:
      'Originario de Zimbabwe, el Rhodesian Ridgeback se desarrolló para la caza de animales grandes y como perro de guardia. Su cresta distintiva es una característica única que los distingue de otras razas.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Bueno como perro de guardia',
      'Leal a su familia',
      'Necesita ejercicio regular',
      'Requiere entrenamiento firme y consistente',
    ],
    color: ['Rojo', 'Trigo'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita mucho ejercicio',
      'Requiere socialización temprana',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas de tiroides'],
  },
  132: {
    weight: {
      imperial: '75 - 110',
      metric: '34 - 50',
    },
    height: {
      imperial: '22 - 27',
      metric: '56 - 69',
    },
    id: 132,
    name: 'Rottweiler',
    bred_for: ['Conducción de ganado', 'Guardián', 'Tiro'],
    breed_group: ['Trabajo'],
    life_span: '8 - 10 años',
    temperament: [
      'Estable',
      'Bondadoso',
      'Impasible',
      'Devoto',
      'Alerta',
      'Obediente',
      'Confiable',
      'Seguro de sí mismo',
      'Calmo',
      'Valiente',
    ],
    origin: 'Alemania',
    reference_image_id: 'r1xXEgcNX',
    image: {
      id: 'r1xXEgcNX',
      width: 736,
      height: 595,
      url: 'https://cdn2.thedogapi.com/images/r1xXEgcNX.jpg',
    },
    searchTerms: [
      'Rottweiler',
      'Rotweiler',
      'Rotwailer',
      'Rottwailer',
      'Rott',
      'Rottie',
    ],
    country_code: 'DE',
    description:
      'El Rottweiler es una raza de perro conocida por su tamaño considerable y su capacidad como perro de trabajo, guardián y guía. Son perros seguros de sí mismos, tranquilos y valientes, conocidos por su devoción y obediencia.',
    history:
      'Originarios de Alemania, los Rottweilers fueron utilizados originalmente para conducir ganado y como perros de tiro. Su fuerza, resistencia y confiabilidad los hicieron ideales para estas tareas.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Excelente perro guardián',
      'Muy leal y devoto',
      'Necesita ejercicio regular',
      'Requiere entrenamiento y socialización temprana',
    ],
    color: ['Negro', 'Negro y fuego'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita mucha socialización',
      'Requiere ejercicio regular y estimulación mental',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas cardiacos'],
  },
  133: {
    weight: {
      imperial: '3 - 6',
      metric: '1 - 3',
    },
    height: {
      imperial: '7.5 - 10.5',
      metric: '19 - 27',
    },
    id: 133,
    name: 'Juguete Ruso',
    bred_for: ['Compañía'],
    breed_group: ['Juguete'],
    life_span: '10 - 12 años',
    temperament: ['Activo', 'Sociable', 'Inteligente', 'Animado'],
    origin: 'Rusia',
    reference_image_id: 'HkP7Vxc4Q',
    image: {
      id: 'HkP7Vxc4Q',
      width: 645,
      height: 380,
      url: 'https://cdn2.thedogapi.com/images/HkP7Vxc4Q.jpg',
    },
    searchTerms: ['Juguete Ruso', 'Russian Toy'],
    country_code: 'RU',
    description:
      'El Juguete Ruso es una raza pequeña y ligera con una personalidad animada y sociable. Son perros inteligentes y adaptables que se llevan bien en una variedad de hogares y situaciones.',
    history:
      'Originario de Rusia, el Juguete Ruso fue criado inicialmente como un perro de compañía en la alta sociedad rusa. Su tamaño pequeño y su carácter amigable los hicieron muy populares.',
    categoria_de_tamanio: 'Muy pequeño',
    perks: [
      'Excelente perro de compañía',
      'Bueno para hogares pequeños y apartamentos',
      'Necesita ejercicio moderado',
      'Se lleva bien con los niños y otras mascotas',
    ],
    color: ['Negro y fuego', 'Azul y fuego', 'Rojo', 'Crema'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere cuidado regular del pelo',
      'Necesita socialización temprana',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Problemas dentales', 'Luxación de la rótula'],
  },
  134: {
    weight: {
      imperial: '130 - 180',
      metric: '59 - 82',
    },
    height: {
      imperial: '25.5 - 27.5',
      metric: '65 - 70',
    },
    id: 134,
    name: 'San Bernardo',
    bred_for: ['Tracción', 'Búsqueda', 'Rescate'],
    breed_group: ['Trabajador'],
    life_span: '7 - 10 años',
    temperament: ['Amigable', 'Vivaz', 'Gentil', 'Vigilante', 'Calmado'],
    origin: 'Suiza',
    reference_image_id: '_Qf9nfRzL',
    image: {
      id: '_Qf9nfRzL',
      width: 1080,
      height: 1084,
      url: 'https://cdn2.thedogapi.com/images/_Qf9nfRzL.png',
    },
    searchTerms: ['San Bernardo', 'Saint Bernard'],
    country_code: 'CH',
    description:
      'El San Bernardo es una raza grande y poderosa, conocida por su amabilidad y paciencia. Son excelentes perros de trabajo y son famosos por su papel en las operaciones de búsqueda y rescate en la montaña.',
    history:
      'El San Bernardo se originó en Suiza y fue criado originalmente por monjes en el Hospicio del Gran San Bernardo para ayudar en las operaciones de búsqueda y rescate. Su resistencia y su naturaleza amigable los hicieron perfectos para este papel.',
    categoria_de_tamanio: 'Muy grande',
    perks: [
      'Excelente perro de rescate y trabajo',
      'Bueno con los niños y otras mascotas',
      'Requiere ejercicio moderado',
      'Tiene una naturaleza amable y pacífica',
    ],
    color: ['Blanco', 'Marrón', 'Rojo'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere bastante espacio',
      'Necesita socialización temprana',
      'Requiere cepillado regular',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas cardíacos'],
  },
  135: {
    weight: {
      imperial: '35 - 65',
      metric: '16 - 29',
    },
    height: {
      imperial: '23 - 28',
      metric: '58 - 71',
    },
    id: 135,
    name: 'Saluki',
    bred_for: ['Cazar gacelas y liebres'],
    breed_group: ['Sabueso'],
    life_span: '12 - 14 años',
    temperament: ['Distante', 'Reservado', 'Inteligente', 'Silencioso'],
    origin: 'Medio Oriente',
    reference_image_id: 'fjFIuehNo',
    image: {
      id: 'fjFIuehNo',
      width: 750,
      height: 450,
      url: 'https://cdn2.thedogapi.com/images/fjFIuehNo.jpg',
    },
    searchTerms: ['Saluki'],
    country_code: 'ME',
    description:
      'El Saluki es una raza antigua, conocida por su velocidad y resistencia. A menudo se les ve en las carreras de galgos y son excelentes perros de caza debido a su agudo sentido de la vista.',
    history:
      'El Saluki es una de las razas de perros más antiguas del mundo, con una historia que se remonta a los tiempos antiguos en el Medio Oriente. Fueron valorados por su velocidad y resistencia, lo que los convirtió en excelentes perros de caza.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Muy rápido y ágil',
      'Excelente perro de caza',
      'Requiere bastante ejercicio',
      'Posee una naturaleza tranquila y reservada',
    ],
    color: ['Blanco', 'Crema', 'Marrón'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere mucho ejercicio',
      'Necesita espacio para correr',
      'Requiere socialización temprana',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Problemas cardíacos', 'Problemas oculares'],
  },
  136: {
    weight: {
      imperial: '50 - 60',
      metric: '23 - 27',
    },
    height: {
      imperial: '19 - 23.5',
      metric: '48 - 60',
    },
    id: 136,
    name: 'Samoyedo',
    bred_for: ['Pastoreo de renos', 'Guardián', 'Tiro'],
    breed_group: ['Trabajo'],
    life_span: '12 - 14 años',
    temperament: [
      'Terco',
      'Amigable',
      'Sociable',
      'Vivaz',
      'Alerta',
      'Juguetón',
    ],
    origin: 'Rusia',
    reference_image_id: 'S1T8Ee9Nm',
    image: {
      id: 'S1T8Ee9Nm',
      width: 1200,
      height: 797,
      url: 'https://cdn2.thedogapi.com/images/S1T8Ee9Nm.jpg',
    },
    searchTerms: ['Samoyedo'],
    country_code: 'RU',
    description:
      'El Samoyedo es una raza versátil, capaz de pastorear, tirar de trineos y ser un compañero leal. Son conocidos por su pelaje blanco y esponjoso, así como por su naturaleza amigable y juguetón.',
    history:
      'Los Samoyedos se originaron en Rusia y fueron criados por la tribu nómada Samoyedic. Se utilizaban para pastorear renos, cazar y tirar de trineos. Son una de las razas de perros más antiguas.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Amigable y sociable',
      'Excelente para actividades de invierno',
      'Necesita mucho ejercicio',
      'Requiere cuidado regular del pelaje',
      'Buena resistencia al frío',
    ],
    color: ['Blanco'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Necesita mucho ejercicio',
      'Necesita mucho cuidado del pelaje',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas oculares',
      'Diabetes',
    ],
  },
  137: {
    weight: {
      imperial: '10 - 16',
      metric: '5 - 7',
    },
    height: {
      imperial: '10 - 13',
      metric: '25 - 33',
    },
    id: 137,
    name: 'Schipperke',
    bred_for: ['Perro vigilante de barcazas'],
    breed_group: ['No deportivo'],
    life_span: '13 - 15 años',
    temperament: [
      'Sin miedo',
      'Ágil',
      'Curioso',
      'Independiente',
      'Confiado',
      'Fiel',
    ],
    origin: 'Bélgica',
    reference_image_id: 'SyBvVgc47',
    image: {
      id: 'SyBvVgc47',
      width: 1024,
      height: 681,
      url: 'https://cdn2.thedogapi.com/images/SyBvVgc47.jpg',
    },
    searchTerms: ['Schipperke'],
    country_code: 'BE',
    description:
      'El Schipperke es un pequeño perro belga conocido por su curiosidad, confianza y temperamento fiel. Aunque pequeños, son valientes y hacen excelentes perros vigilantes.',
    history:
      'Originario de Bélgica, el Schipperke se utilizaba como perro de vigilancia en las barcazas que navegaban por los canales del país. Su nombre significa "pequeño capitán" en flamenco.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Bueno para la vigilancia',
      'Requiere ejercicio moderado',
      'Leal y fiel',
      'Bueno para la vida en apartamentos',
    ],
    color: ['Negro'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: ['Requiere ejercicio regular'],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Problemas oculares', 'Epilepsia', 'Hipotiroidismo'],
  },
  138: {
    weight: {
      imperial: '70 - 130',
      metric: '32 - 59',
    },
    height: {
      imperial: '28 - 32',
      metric: '71 - 81',
    },
    id: 138,
    name: 'Lebrel Escocés',
    bred_for: ['Caza de ciervos'],
    breed_group: ['Sabueso'],
    life_span: '8 - 10 años',
    temperament: ['Dócil', 'Amigable', 'Digno', 'Gentil'],
    origin: 'Escocia',
    reference_image_id: 'SkNjqx9NQ',
    image: {
      id: 'SkNjqx9NQ',
      width: 700,
      height: 480,
      url: 'https://cdn2.thedogapi.com/images/SkNjqx9NQ.jpg',
    },
    searchTerms: ['Lebrel Escocés'],
    country_code: 'GB',
    description:
      'El Lebrel Escocés es una raza de perro grande y amigable conocida por su habilidad para la caza de ciervos. Son perros dóciles y gentiles, conocidos por su dignidad y amabilidad.',
    history:
      'El Lebrel Escocés, como su nombre indica, es originario de Escocia. Fueron criados para la caza de ciervos, lo que requiere velocidad, resistencia y un buen sentido del olfato.',
    categoria_de_tamanio: 'Muy grande',
    perks: [
      'Bueno para la caza',
      'Requiere ejercicio regular',
      'Amigable y sociable',
      'Bueno para vivir en el campo',
    ],
    color: ['Gris', 'Negro', 'Brindle'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: ['Requiere mucho espacio para correr'],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Problemas cardíacos', 'Torsión gástrica'],
  },
  139: {
    weight: {
      imperial: '18 - 22',
      metric: '8 - 10',
    },
    height: {
      imperial: '10',
      metric: '25',
    },
    id: 139,
    name: 'Terrier Escocés',
    bred_for: ['Caza de alimañas'],
    breed_group: ['Terrier'],
    life_span: '11 - 13 años',
    temperament: [
      'Animado',
      'Alerta',
      'Independiente',
      'Juguetón',
      'Rápido',
      'Seguro de sí mismo',
    ],
    origin: 'Escocia',
    reference_image_id: 'Bklnce5NX',
    image: {
      id: 'Bklnce5NX',
      width: 1280,
      height: 976,
      url: 'https://cdn2.thedogapi.com/images/Bklnce5NX.jpg',
    },
    searchTerms: ['Terrier Escocés'],
    country_code: 'GB',
    description:
      'El Terrier Escocés es una raza pequeña pero robusta, conocida por su personalidad animada y su habilidad para cazar alimañas. Son perros independientes, juguetones y seguros de sí mismos, con un pelaje característicamente duro y denso.',
    history:
      'El Terrier Escocés es una raza antigua que se originó en Escocia para la caza de alimañas. Su pequeño tamaño y su valentía los hacían ideales para cazar en las rocosas tierras altas escocesas.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Bueno para la caza de alimañas',
      'Perro compacto y resistente',
      'Adaptable a varios entornos',
      'Independiente y seguro de sí mismo',
    ],
    color: ['Negro', 'Trigo', 'Atigrado'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Cuidado del pelaje',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Problemas de piel', 'Displasia de cadera'],
  },
  140: {
    weight: {
      imperial: '30',
      metric: '14',
    },
    height: {
      imperial: '13 - 16',
      metric: '33 - 41',
    },
    id: 140,
    name: 'Pastor de Shetland',
    bred_for: ['Pastoreo de ovejas'],
    breed_group: ['Pastor'],
    life_span: '12 - 14 años',
    temperament: [
      'Cariñoso',
      'Vivaz',
      'Receptivo',
      'Alerta',
      'Leal',
      'Reservado',
      'Juguetón',
      'Gentil',
      'Inteligente',
      'Activo',
      'Entrenable',
      'Fuerte',
    ],
    origin: 'Islas Shetland',
    reference_image_id: 'rJa29l9E7',
    image: {
      id: 'rJa29l9E7',
      width: 824,
      height: 640,
      url: 'https://cdn2.thedogapi.com/images/rJa29l9E7.jpg',
    },
    searchTerms: ['Pastor de Shetland'],
    country_code: 'GB',
    description:
      'El Pastor de Shetland es una raza inteligente y activa, reconocida por su habilidad para el pastoreo de ovejas. Son perros cariñosos y leales, pero también pueden ser reservados. Tienen una naturaleza juguetona y gentil, lo que los hace ideales como perros de familia.',
    history:
      'El Pastor de Shetland es originario de las Islas Shetland de Escocia. Fueron criados para ser perros pastores eficientes, capaces de manejar el duro clima y las condiciones difíciles de las islas. Su tamaño más pequeño les permitía moverse rápidamente y requerir menos comida que las razas de perros pastores más grandes.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Bueno para el pastoreo',
      'Inteligente y fácil de entrenar',
      'Adaptable a varios entornos',
      'Leal y cariñoso con la familia',
    ],
    color: ['Sable', 'Negro y blanco', 'Azul mirlo'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Estimulación mental',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas de tiroides'],
  },
  141: {
    weight: {
      imperial: '17 - 23',
      metric: '8 - 10',
    },
    height: {
      imperial: '13.5 - 16.5',
      metric: '34 - 42',
    },
    id: 141,
    name: 'Shiba Inu',
    bred_for: ['Caza en las montañas de Japón', 'Perro de alerta'],
    breed_group: ['No deportivo'],
    life_span: '12 - 16 años',
    temperament: [
      'Encantador',
      'Intrépido',
      'Apasionado',
      'Alerta',
      'Confiado',
      'Fiel',
    ],
    origin: 'Japón',
    reference_image_id: 'Zn3IjPX3f',
    image: {
      id: 'Zn3IjPX3f',
      width: 1080,
      height: 1080,
      url: 'https://cdn2.thedogapi.com/images/Zn3IjPX3f.jpg',
    },
    searchTerms: ['Shiba Inu'],
    country_code: 'JP',
    description:
      'El Shiba Inu es una raza de perro encantadora y confiada originaria de Japón. Son intrépidos y apasionados, lo que los convierte en excelentes perros de caza. Son alertas y fieles, lo que también los hace buenos perros de alerta. A pesar de ser no deportivos, los Shiba Inu son activos y disfrutan de los ejercicios físicos.',
    history:
      'El Shiba Inu es una de las razas de perros más antiguas y pequeñas de Japón. Originalmente se criaron para cazar en las montañas de Japón. Aunque su población disminuyó durante la Segunda Guerra Mundial, los esfuerzos de reproducción han restaurado la raza y ahora es uno de los perros más populares de Japón y se está volviendo cada vez más popular en todo el mundo.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Excelente perro de caza',
      'Buen perro de alerta',
      'Fiel y confiable',
      'Intrépido y seguro',
    ],
    color: ['Rojo', 'Sésamo', 'Negro y fuego'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: ['Necesidad de ejercicio físico y mental'],
    popularidad: 'Alta',
    enfermedades_comunes: ['Displasia de cadera', 'Alergias'],
  },
  142: {
    weight: {
      imperial: '9 - 16',
      metric: '4 - 7',
    },
    height: {
      imperial: '8 - 11',
      metric: '20 - 28',
    },
    id: 142,
    name: 'Shih Tzu',
    bred_for: ['Perro faldero'],
    breed_group: ['Juguete'],
    life_span: '10 - 18 años',
    temperament: [
      'Listo',
      'Animado',
      'Extrovertido',
      'Amistoso',
      'Cariñoso',
      'Vivo',
      'Alerta',
      'Leal',
      'Independiente',
      'Juguetón',
      'Dulce',
      'Inteligente',
      'Feliz',
      'Activo',
      'Valiente',
    ],
    origin: 'China',
    reference_image_id: 'BkrJjgcV7',
    image: {
      id: 'BkrJjgcV7',
      width: 800,
      height: 600,
      url: 'https://cdn2.thedogapi.com/images/BkrJjgcV7.jpg',
    },
    searchTerms: ['Shih Tzu'],
    country_code: 'CN',
    description:
      'El Shih Tzu es una raza de perro lista y animada originaria de China. Son conocidos por ser extrovertidos, amistosos y cariñosos. Son perros vivos, leales e independientes. A pesar de ser una raza de perro de juguete, los Shih Tzu son activos y disfrutan de jugar. Son valientes, dulces y felices, lo que los convierte en excelentes compañeros.',
    history:
      'El Shih Tzu es una de las razas de perros más antiguas de China. Fueron criados originalmente como perros falderos para la nobleza china. Son conocidos por su pelaje largo y sedoso, que es a menudo peinado en un estilo distintivo. Aunque pequeños, los Shih Tzu son conocidos por ser valientes y valientes.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Excelente perro de compañía',
      'Bueno para familias',
      'Se lleva bien con otros animales',
      'Adaptado a la vida en apartamentos',
    ],
    color: ['Negro', 'Blanco', 'Hígado'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: ['Necesita aseo regular debido a su largo pelaje'],
    popularidad: 'Alta',
    enfermedades_comunes: ['Problemas oculares', 'Displasia de cadera'],
  },
  143: {
    weight: {
      imperial: '120 - 140',
      metric: '54 - 64',
    },
    height: {
      imperial: '26 - 30',
      metric: '66 - 76',
    },
    id: 143,
    name: 'Pastor de Shiloh',
    bred_for: ['Natación', 'Portar mochilas', 'Tirar carros o trineos'],
    breed_group: ['Grupo de trabajo'],
    life_span: '9 – 14 años',
    temperament: [
      'Extrovertido',
      'Leal',
      'Sociable',
      'Dulce',
      'Amoroso',
      'Entrenable',
    ],
    origin: 'Estados Unidos',
    reference_image_id: 'SJJxjecEX',
    image: {
      id: 'SJJxjecEX',
      width: 1005,
      height: 803,
      url: 'https://cdn2.thedogapi.com/images/SJJxjecEX.jpg',
    },
    searchTerms: ['Pastor de Shiloh'],
    country_code: 'US',
    description:
      'El Pastor de Shiloh es una raza de perro extrovertida y leal, conocida por ser sociable, dulce y amorosa. Son entrenables, y se les conoce por su amor a actividades como la natación y el porte de mochilas. Son grandes perros de trabajo, conocidos por su habilidad para tirar de carros y trineos.',
    history:
      'El Pastor de Shiloh se desarrolló en los Estados Unidos a finales del siglo XX. Fueron criados selectivamente para parecerse a las versiones más antiguas del Pastor Alemán, pero con temperamento más suave y cuerpo más grande. Son excelentes perros de trabajo y disfrutan de tareas que les permiten aprovechar su fuerza y resistencia.',
    categoria_de_tamanio: 'Muy grande',
    perks: [
      'Excelente perro de trabajo',
      'Adaptable a diversas actividades',
      'Bueno para familias',
      'Se lleva bien con otros animales',
      'Adaptado a la vida en climas fríos',
    ],
    color: ['Negro', 'Marrón', 'Crema'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: ['Necesita mucho ejercicio y estimulación mental'],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas de la tiroides'],
  },
  144: {
    weight: {
      imperial: '35 - 60',
      metric: '16 - 27',
    },
    height: {
      imperial: '20 - 23.5',
      metric: '51 - 60',
    },
    id: 144,
    name: 'Husky Siberiano',
    bred_for: ['Tirar de trineos'],
    breed_group: ['Grupo de trabajo'],
    life_span: '12 años',
    temperament: ['Extrovertido', 'Amigable', 'Alerta', 'Dulce', 'Inteligente'],
    origin: 'Siberia, Rusia',
    reference_image_id: 'S17ZilqNm',
    image: {
      id: 'S17ZilqNm',
      width: 1920,
      height: 1280,
      url: 'https://cdn2.thedogapi.com/images/S17ZilqNm.jpg',
    },
    searchTerms: ['Husky Siberiano'],
    country_code: 'RU',
    description:
      'El Husky Siberiano es una raza de perro extrovertida y amigable, conocida por su agudo sentido de la inteligencia y su dulzura. Son muy buenos tirando de trineos y son considerados perros de trabajo. A menudo se les ve en competiciones de trineos debido a su resistencia y determinación.',
    history:
      'Originario de Siberia, Rusia, el Husky Siberiano fue criado por el pueblo Chukchi para ser perros de trineo y compañía en los duros inviernos. Se criaron para ser resilientes, lo que los hace capaces de soportar las temperaturas extremas de su tierra natal.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Altamente resistente al frío',
      'Bueno para la actividad y el ejercicio',
      'Se lleva bien con otros perros',
      'Excelente para tirar de trineos',
    ],
    color: ['Negro', 'Blanco', 'Gris'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Necesita ejercicio regular y estimulación mental',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas oculares'],
  },
  145: {
    weight: {
      imperial: '8 - 10',
      metric: '4 - 5',
    },
    height: {
      imperial: '9 - 10',
      metric: '23 - 25',
    },
    id: 145,
    name: 'Terrier Sedoso',
    bred_for: ['Caza de pequeños roedores', 'Compañía'],
    breed_group: ['Juguete'],
    life_span: '12 - 15 años',
    temperament: [
      'Amigable',
      'Receptivo',
      'Curioso',
      'Alerta',
      'Rápido',
      'Alegre',
    ],
    origin: 'Australia',
    reference_image_id: 'ByzGsl5Nm',
    image: {
      id: 'ByzGsl5Nm',
      width: 1599,
      height: 1142,
      url: 'https://cdn2.thedogapi.com/images/ByzGsl5Nm.jpg',
    },
    searchTerms: ['Terrier Sedoso'],
    country_code: 'AU',
    description:
      'El Terrier Sedoso es una raza de perro amigable y receptiva, conocida por su curiosidad y alegría. Son excelentes cazadores de pequeños roedores y también son maravillosos compañeros. Este perro alerta y rápido es parte del grupo de juguetes, indicando su pequeño tamaño pero gran personalidad.',
    history:
      'El Terrier Sedoso es originario de Australia, donde se crió originalmente para la caza de pequeños roedores y como perros de compañía. Es una raza distintiva por su pelaje largo y sedoso, que requiere cuidado regular para mantener su apariencia.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Bueno para cazar pequeños roedores',
      'Excelente compañía',
      'Requiere cuidado regular del pelaje',
      'Se lleva bien con las personas',
    ],
    color: ['Azul', 'Gris', 'Rojo'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita cuidado regular del pelaje',
      'Necesita estimulación mental',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Problemas de piel', 'Displasia de cadera'],
  },
  146: {
    weight: {
      imperial: 'hasta 18',
      metric: 'hasta 8',
    },
    height: {
      imperial: '15.5',
      metric: '39',
    },
    id: 146,
    name: 'Fox Terrier de Pelo Liso',
    bred_for: ['Ahuyentar zorros'],
    breed_group: ['Terrier'],
    life_span: '12 - 14 años',
    temperament: [
      'Valiente',
      'Cariñoso',
      'Alerta',
      'Juguetón',
      'Inteligente',
      'Activo',
    ],
    origin: 'Inglaterra',
    reference_image_id: 'Syszjx9Em',
    image: {
      id: 'Syszjx9Em',
      width: 1600,
      height: 1031,
      url: 'https://cdn2.thedogapi.com/images/Syszjx9Em.jpg',
    },
    searchTerms: ['Fox Terrier de Pelo Liso'],
    country_code: 'GB',
    description:
      'El Fox Terrier de Pelo Liso es una raza de perro valiente y cariñosa, conocida por su alerta y naturaleza juguetona. Son inteligentes, activos y excelentes en la ahuyentar zorros, lo que les hace excelentes perros de trabajo en su Inglaterra natal.',
    history:
      'Originario de Inglaterra, el Fox Terrier de Pelo Liso fue criado para ahuyentar zorros durante la caza. Su tamaño manejable y su carácter activo y juguetón les han hecho muy populares como mascotas además de perros de trabajo.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente para ahuyentar zorros',
      'Bueno como mascota y perro de trabajo',
      'Requiere ejercicio regular',
      'Interactúa bien con las personas',
    ],
    color: ['Blanco', 'Negro', 'Marrón'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita ejercicio regular',
      'Necesita estimulación mental y física',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Problemas de piel',
      'Displasia de cadera',
      'Problemas oculares',
    ],
  },
  147: {
    weight: {
      imperial: '30 - 40',
      metric: '14 - 18',
    },
    height: {
      imperial: '16 - 18',
      metric: '41 - 46',
    },
    id: 147,
    name: 'Terrier Irlandés de Trigo Suave',
    bred_for: ['Caza de alimañas', 'Guardia', 'Ayudante de granja'],
    breed_group: ['Terrier'],
    life_span: '12 - 15 años',
    temperament: [
      'Cariñoso',
      'Animado',
      'Energético',
      'Juguetón',
      'Inteligente',
      'Fiel',
    ],
    origin: 'Irlanda',
    reference_image_id: 'HJHmix5NQ',
    image: {
      id: 'HJHmix5NQ',
      width: 1200,
      height: 800,
      url: 'https://cdn2.thedogapi.com/images/HJHmix5NQ.jpg',
    },
    searchTerms: ['Terrier Irlandés de Trigo Suave'],
    country_code: 'IE',
    description:
      'El Terrier Irlandés de Trigo Suave es una raza de perro amigable y activa. Son conocidos por su pelaje suave y de color trigo, y por su lealtad hacia sus dueños. Son excelentes cazadores de alimañas y también son conocidos por ser grandes ayudantes en la granja.',
    history:
      'Originario de Irlanda, esta raza era comúnmente utilizada como perros de granja, para la caza de alimañas y para la protección de la propiedad. Aunque son excelentes perros de trabajo, también son amigables y cariñosos, lo que los hace populares como mascotas.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Perro de granja versátil',
      'Excelente para cazar alimañas',
      'Leal y cariñoso con su familia',
      'Requiere ejercicio regular',
    ],
    color: ['Trigo'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Cepillado regular del pelaje',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Problemas de piel',
      'Problemas oculares',
      'Displasia de cadera',
    ],
  },
  148: {
    weight: {
      imperial: '30 - 50',
      metric: '14 - 23',
    },
    height: {
      imperial: '16 - 20',
      metric: '41 - 51',
    },
    id: 148,
    name: 'Perro de Agua Español',
    bred_for: ['Pastoreo de rebaños de ovejas y cabras'],
    breed_group: ['Deportivo'],
    life_span: '12 - 15 años',
    temperament: [
      'Adiestrable',
      'Diligente',
      'Cariñoso',
      'Leal',
      'Atlético',
      'Inteligente',
    ],
    origin: 'España',
    reference_image_id: 'HJf4jl9VX',
    image: {
      id: 'HJf4jl9VX',
      width: 1200,
      height: 922,
      url: 'https://cdn2.thedogapi.com/images/HJf4jl9VX.jpg',
    },
    searchTerms: ['Perro de Agua Español'],
    country_code: 'ES',
    description:
      'El Perro de Agua Español es una raza versátil, de tamaño mediano, que ha sido utilizada para pastorear, cazar y como perro de compañía. Son muy inteligentes, aprenden rápidamente y son excelentes nadadores.',
    history:
      'Originario de la Península Ibérica, esta raza ha estado presente durante siglos en España y ha sido utilizada para una variedad de tareas agrícolas, incluyendo el pastoreo y la caza.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Bueno para pastorear',
      'Leal a su familia',
      'Necesita ejercicio regular',
      'Excelente nadador',
      'Fácil de entrenar',
    ],
    color: ['Negro', 'Marrón', 'Blanco'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: ['Requiere ejercicio regular', 'Le gusta nadar'],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas oculares'],
  },
  149: {
    weight: {
      imperial: '61 - 85',
      metric: '28 - 39',
    },
    height: {
      imperial: '22.5 - 27.5',
      metric: '57 - 70',
    },
    id: 149,
    name: 'Spinone Italiano',
    bred_for: ['Caza', 'Busqueda y rescate'],
    breed_group: ['Deportivo'],
    life_span: '10 - 12 años',
    temperament: ['Dócil', 'Amistoso', 'Cariñoso', 'Leal', 'Paciente', 'Suave'],
    origin: 'Italia',
    reference_image_id: 'rk5Eoe5Nm',
    image: {
      id: 'rk5Eoe5Nm',
      width: 1030,
      height: 772,
      url: 'https://cdn2.thedogapi.com/images/rk5Eoe5Nm.jpg',
    },
    searchTerms: ['Spinone Italiano'],
    country_code: 'IT',
    description:
      'El Spinone Italiano es una raza antigua conocida por su resistencia en el campo y su fácil adaptación a diversos terrenos. Son perros amigables, cariñosos y muy apegados a su familia.',
    history:
      'El Spinone Italiano es una de las razas de perros de muestra más antiguas, con raíces que se remontan al 500 a.C. Originarios de Italia, han sido valorados por su resistencia y su habilidad para cazar en diferentes terrenos.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Bueno para cazar',
      'Excelente olfato',
      'Necesita ejercicio regular',
      'Leal a su familia',
      'Bueno con niños y otros animales',
    ],
    color: ['Blanco', 'Naranja', 'Marrón'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Necesita espacio para correr',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas oculares'],
  },
  150: {
    weight: {
      imperial: '24 - 38',
      metric: '11 - 17',
    },
    height: {
      imperial: '14 - 16',
      metric: '36 - 41',
    },
    id: 150,
    name: 'Staffordshire Bull Terrier',
    bred_for: ['Guarda', 'Compañía'],
    breed_group: ['Terrier'],
    life_span: '12 - 14 años',
    temperament: [
      'Confiable',
      'Intrépido',
      'Audaz',
      'Cariñoso',
      'Leal',
      'Inteligente',
      'Valiente',
    ],
    origin: 'Reino Unido',
    reference_image_id: 'H1zSie9V7',
    image: {
      id: 'H1zSie9V7',
      width: 1280,
      height: 852,
      url: 'https://cdn2.thedogapi.com/images/H1zSie9V7.jpg',
    },
    searchTerms: ['Staffordshire Bull Terrier'],
    country_code: 'GB',
    description:
      'El Staffordshire Bull Terrier es una raza de perro de tamaño medio conocida por su carácter intrépido y su devoción hacia su familia. A pesar de su apariencia robusta y su historia como perro de pelea, la mayoría de los Staffies son amables y afectuosos.',
    history:
      'El Staffordshire Bull Terrier se originó en el Reino Unido y se utilizaba inicialmente para la lucha con toros y osos. Sin embargo, con el tiempo, se ha convertido en una raza de perro de compañía muy popular gracias a su temperamento afectuoso y su lealtad.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Protector',
      'Leal a su familia',
      'Requiere ejercicio regular',
      'Inteligente y fácil de entrenar',
    ],
    color: ['Negro', 'Atigrado', 'Blanco'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Socialización temprana',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: ['Displasia de cadera', 'Cataratas', 'Alergias'],
  },
  151: {
    weight: {
      imperial: '30 - 50',
      metric: '14 - 23',
    },
    height: {
      imperial: '17.5 - 19.5',
      metric: '44 - 50',
    },
    id: 151,
    name: 'Schnauzer Estándar',
    bred_for: ['Caza de ratas', 'Guardia'],
    breed_group: ['Trabajo'],
    life_span: '13 - 15 años',
    temperament: [
      'Entrenable',
      'Amigable',
      'Devoto',
      'Vivaz',
      'Juguetón',
      'Inteligente',
    ],
    origin: 'Alemania',
    reference_image_id: 'tmzeu6ID_',
    image: {
      id: 'tmzeu6ID_',
      width: 650,
      height: 585,
      url: 'https://cdn2.thedogapi.com/images/tmzeu6ID_.jpg',
    },
    searchTerms: ['Schnauzer Estándar'],
    country_code: 'DE',
    description:
      'El Schnauzer Estándar es conocido por su temperamento juguetón y su habilidad para ser entrenado. Son perros de tamaño medio que se adaptan bien a varios entornos y son conocidos por su inteligencia y su naturaleza devota.',
    history:
      'El Schnauzer Estándar se originó en Alemania y fue criado inicialmente para la caza de ratas y como perro guardián. Con el tiempo, la raza ha evolucionado para ser una excelente mascota familiar gracias a su naturaleza amigable y juguetona.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Bueno para la familia',
      'Amigable con otros perros',
      'Requiere ejercicio regular',
      'Fácil de entrenar',
    ],
    color: ['Negro', 'Plata', 'Sal y pimienta'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Excelente',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere ejercicio regular',
      'Socialización temprana',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas oculares',
      'Alergias',
    ],
  },
  152: {
    weight: {
      imperial: '30 - 50',
      metric: '14 - 23',
    },
    height: {
      imperial: '17.5 - 19.5',
      metric: '44 - 50',
    },
    id: 152,
    name: 'Schnauzer Estándar',
    bred_for: ['Caza de ratas', 'Guarda'],
    breed_group: ['Trabajador'],
    life_span: '13 - 15 años',
    temperament: [
      'Adiestrable',
      'De buen carácter',
      'Devoto',
      'Vivaz',
      'Juguetón',
      'Inteligente',
    ],
    origin: 'Alemania',
    reference_image_id: 'tmzeu6ID_',
    image: {
      id: 'tmzeu6ID_',
      width: 650,
      height: 585,
      url: 'https://cdn2.thedogapi.com/images/tmzeu6ID_.jpg',
    },
    searchTerms: ['Schnauzer Estándar', 'Perro de trabajo', 'Caza de ratas'],
    country_code: 'DE',
    description:
      'El Schnauzer Estándar es una raza que destaca por su naturaleza juguetona y su capacidad de entrenamiento. De tamaño mediano, estos perros se adaptan bien a una variedad de entornos y son conocidos por su inteligencia y devoción. De buen carácter y lleno de energía, el Schnauzer Estándar es una excelente opción para familias activas.',
    history:
      'Originario de Alemania, el Schnauzer Estándar fue inicialmente criado para la caza de ratas y tareas de guarda. A lo largo del tiempo, estos perros se han ganado un lugar en los hogares como mascotas familiares debido a su amigable naturaleza y habilidades para el juego. Su habilidad para el trabajo y la guardia aún persiste, haciendo de ellos perros de trabajo excepcionales.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Requiere de ejercicio regular',
      'Excelente con los niños',
      'Adiestrable',
      'Requiere socialización temprana',
    ],
    color: ['Negro', 'Gris', 'Blanco'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Excelente',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Necesita ejercicio regular',
      'Requiere socialización',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas de la piel',
      'Alergias',
    ],
  },
  153: {
    weight: {
      imperial: '20 - 30',
      metric: '9 - 14',
    },
    height: {
      imperial: '11.5 - 13.5',
      metric: '29 - 34',
    },
    id: 153,
    name: 'Perro de los Visigodos Sueco',
    bred_for: ['Pastoreo'],
    breed_group: ['Pastor'],
    life_span: '12 - 14 años',
    temperament: [
      'Intrépido',
      'Amistoso',
      'Energético',
      'Alerta',
      'Inteligente',
      'Vigilante',
    ],
    origin: 'Suecia',
    reference_image_id: 'HJ-Dix94Q',
    image: {
      id: 'HJ-Dix94Q',
      width: 1280,
      height: 851,
      url: 'https://cdn2.thedogapi.com/images/HJ-Dix94Q.jpg',
    },
    searchTerms: [
      'Perro de los Visigodos Sueco',
      'Perro de pastoreo',
      'Energético',
    ],
    country_code: 'SE',
    description:
      'El Perro de los Visigodos Sueco es una raza pequeña, pero robusta y enérgica, conocida por sus habilidades de pastoreo. Son perros inteligentes y alertas, con una naturaleza intrépida. Estos perros son amistosos y se llevan bien con las personas y otros animales. Son animales de compañía ideales para familias activas y pueden ser excelentes perros de trabajo.',
    history:
      'El Perro de los Visigodos Sueco, como su nombre indica, es originario de Suecia y tiene una larga historia que se remonta a la época de los vikingos. Originalmente, fueron utilizados para el pastoreo de ganado y ovejas. A pesar de su pequeño tamaño, son perros valientes y decididos que se enfrentan a cualquier desafío que se les presente.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Requiere de ejercicio regular',
      'Excelente con los niños',
      'Adiestrable',
      'Requiere socialización temprana',
    ],
    color: ['Gris', 'Rojo', 'Negro'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Necesita ejercicio regular',
      'Requiere socialización',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Atrofia retinal progresiva',
      'Luxación de rótula',
    ],
  },
  154: {
    weight: {
      imperial: '35 - 55',
      metric: '16 - 25',
    },
    height: {
      imperial: '20 - 24',
      metric: '51 - 61',
    },
    id: 154,
    name: 'Ridgeback Tailandés',
    bred_for: ['Caza', 'Vigilancia'],
    breed_group: ['Sabueso'],
    life_span: '10 - 12 años',
    temperament: [
      'Protector',
      'Leal',
      'Independiente',
      'Inteligente',
      'Amoroso',
      'Familiar',
    ],
    origin: 'Tailandia',
    reference_image_id: 'zv89hR-O8',
    image: {
      id: 'zv89hR-O8',
      width: 1080,
      height: 720,
      url: 'https://cdn2.thedogapi.com/images/zv89hR-O8.jpg',
    },
    searchTerms: ['Ridgeback Tailandés', 'Perro de caza', 'Protector'],
    country_code: 'TH',
    description:
      'El Ridgeback Tailandés es una raza única que se distingue por la cresta distintiva de pelo que corre a lo largo de su espalda en dirección opuesta al resto de su pelaje. Son perros leales e inteligentes con un fuerte sentido de independencia. Su comportamiento protector los convierte en excelentes perros guardianes, pero también son amorosos y familiares, lo que los hace buenos compañeros de hogar.',
    history:
      'Originario de Tailandia, el Ridgeback Tailandés ha sido durante mucho tiempo un perro de trabajo en su tierra natal, utilizado para la caza y como perro guardián. Son conocidos por su habilidad para subir y saltar alturas increíbles, lo que los convierte en excelentes cazadores. Su distintiva cresta de pelo ha sido una característica de la raza desde hace siglos.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente perro guardián',
      'Requiere de ejercicio regular',
      'Independiente y requiere espacio',
      'Adaptable a climas calurosos',
    ],
    color: ['Negro', 'Rojo', 'Azul'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesita ejercicio y estimulación mental',
      'Requiere socialización',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Dermatitis por alergia a las pulgas',
      'Displasia de cadera',
      'Problemas de la piel',
    ],
  },
  155: {
    weight: {
      imperial: '85 - 140',
      metric: '39 - 64',
    },
    height: {
      imperial: '24 - 26',
      metric: '61 - 66',
    },
    id: 155,
    name: 'Mastín Tibetano',
    bred_for: ['Protección', 'Guardia'],
    breed_group: ['Trabajador'],
    life_span: '10 - 14 años',
    temperament: [
      'Fuerte voluntad',
      'Tenaz',
      'Distante',
      'Terco',
      'Inteligente',
      'Protector',
    ],
    origin: 'Tíbet',
    reference_image_id: 'SkM9sec47',
    image: {
      id: 'SkM9sec47',
      width: 1600,
      height: 1375,
      url: 'https://cdn2.thedogapi.com/images/SkM9sec47.jpg',
    },
    searchTerms: ['Mastín Tibetano', 'Perro de protección', 'Perro guardián'],
    country_code: 'CN',
    description:
      'El Mastín Tibetano es una raza de perro de trabajo muy antigua, conocida por su fuerza y coraje. Son perros de gran tamaño con una personalidad fuerte y voluntariosa. Son tenaces y pueden ser distantes y tercos a veces, pero también son inteligentes y extremadamente protectores de sus familias.',
    history:
      'Originario del Tíbet, el Mastín Tibetano es una de las razas más antiguas que existen. Durante miles de años, estos perros han sido utilizados para proteger el ganado y las propiedades en las duras condiciones de la cordillera del Himalaya. Su tamaño impresionante y su valentía natural los hacen perfectos para esta tarea.',
    categoria_de_tamanio: 'Muy grande',
    perks: [
      'Excelente perro guardián',
      'Requiere ejercicio moderado',
      'Requiere espacio y un ambiente seguro',
      'Bueno en climas fríos',
      'Pelaje requiere mantenimiento regular',
    ],
    color: ['Negro', 'Castaño', 'Azul'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Bajo',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Baja',
    necesidades_especiales: [
      'Necesita socialización y entrenamiento temprano',
      'Requiere mantenimiento del pelaje',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas oculares',
      'Hipotiroidismo',
    ],
  },
  156: {
    weight: {
      imperial: '9 - 15',
      metric: '4 - 7',
    },
    height: {
      imperial: '10',
      metric: '25',
    },
    id: 156,
    name: 'Spaniel Tibetano',
    bred_for: ['Compañía'],
    breed_group: ['No deportivo'],
    life_span: '12 - 15 años',
    temperament: [
      'Caprichoso',
      'Reservado',
      'Asertivo',
      'Independiente',
      'Juguetón',
      'Inteligente',
      'Feliz',
    ],
    origin: 'Tíbet',
    reference_image_id: 'Hyjcol947',
    image: {
      id: 'Hyjcol947',
      width: 1023,
      height: 825,
      url: 'https://cdn2.thedogapi.com/images/Hyjcol947.jpg',
    },
    searchTerms: ['Spaniel Tibetano', 'Perro de compañía'],
    country_code: 'CN',
    description:
      'El Spaniel Tibetano es una raza de perro pequeña y animada, conocida por su carácter juguetón e inteligente. A pesar de su tamaño, son asertivos y pueden ser bastante caprichosos. Son perros independientes, pero también son felices y aman jugar y pasar tiempo con sus familias.',
    history:
      'Originario del Tíbet, el Spaniel Tibetano fue criado como un perro de compañía en los monasterios budistas. También fueron utilizados como perros de guardia, alertando a los monjes de cualquier intruso. Su tamaño pequeño y su naturaleza vivaz los hicieron populares tanto en el Tíbet como más allá.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Bueno para vivir en apartamentos',
      'No requiere mucho ejercicio',
      'Fácil de entrenar',
      'Bueno con niños y otros animales',
      'No ladra mucho',
    ],
    color: ['Sable', 'Negro', 'Castaño'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere socialización temprana',
      'Requiere cepillado regular',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Problemas oculares', 'Luxación de rótula'],
  },
  157: {
    weight: {
      imperial: '20 - 24',
      metric: '9 - 11',
    },
    height: {
      imperial: '14 - 17',
      metric: '36 - 43',
    },
    id: 157,
    name: 'Terrier Tibetano',
    bred_for: [
      'Amuletos de buena suerte',
      'Mascotas',
      'Perros guardianes',
      'Perros de pastoreo',
      'Compañeros',
    ],
    breed_group: ['No deportivo'],
    life_span: '12 - 15 años',
    temperament: [
      'Cariñoso',
      'Energético',
      'Amigable',
      'Reservado',
      'Gentil',
      'Sensible',
    ],
    origin: 'Tíbet',
    reference_image_id: '6f5n_42mB',
    image: {
      id: '6f5n_42mB',
      width: 981,
      height: 1226,
      url: 'https://cdn2.thedogapi.com/images/6f5n_42mB.jpg',
    },
    searchTerms: ['Terrier Tibetano', 'Perro de compañía'],
    country_code: 'CN',
    description:
      'El Terrier Tibetano es una raza de perro mediana y enérgica, conocida por su personalidad cariñosa y amigable. A pesar de su energía, son gentiles y sensibles, y pueden ser reservados. Son perros amigables que disfrutan de la compañía de su familia y son excelentes mascotas.',
    history:
      'El Terrier Tibetano se originó en el Tíbet y se crió como un amuleto de buena suerte, mascota, perro guardián y perro de pastoreo. Son perros enérgicos que fueron valorados por su habilidad para trabajar y su buen carácter. Su personalidad cariñosa y amigable los hizo populares como mascotas tanto en el Tíbet como en otros lugares.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Bueno para vivir en casas con jardín',
      'Requiere ejercicio moderado',
      'Fácil de entrenar',
      'Bueno con niños y otros animales',
      'No ladra mucho',
    ],
    color: ['Blanco', 'Negro', 'Castaño'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere socialización temprana',
      'Requiere mucho ejercicio',
      'Requiere cepillado regular',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Problemas oculares'],
  },
  158: {
    weight: {
      imperial: '4 - 9',
      metric: '2 - 4',
    },
    height: {
      imperial: '8 - 11',
      metric: '20 - 28',
    },
    id: 158,
    name: 'Terrier Toy Fox',
    bred_for: ['Compañía', 'Juegos', 'Guardián'],
    breed_group: ['Juguete'],
    life_span: '12 - 15 años',
    temperament: [
      'Amigable',
      'Animado',
      'Alerta',
      'Leal',
      'Juguetón',
      'Inteligente',
    ],
    origin: 'Estados Unidos',
    reference_image_id: 'B17ase9V7',
    image: {
      id: 'B17ase9V7',
      width: 1200,
      height: 1024,
      url: 'https://cdn2.thedogapi.com/images/B17ase9V7.jpg',
    },
    searchTerms: ['Terrier Toy Fox', 'Perro de compañía', 'Perro juguetón'],
    country_code: 'US',
    description:
      'El Terrier Toy Fox es un perro pequeño, amigable y juguetón. Son inteligentes y leales a sus dueños, y hacen grandes mascotas para la familia. A pesar de su tamaño pequeño, son alerta y pueden hacer buenos perros guardianes. Aman jugar y son excelentes compañeros para los niños.',
    history:
      'El Terrier Toy Fox es una raza de perro que se originó en los Estados Unidos. Son una versión más pequeña del Fox Terrier, y fueron criados para ser perros de compañía. Su tamaño pequeño los hizo populares como perros de juguete, y son conocidos por su personalidad amigable y juguetona.',
    categoria_de_tamanio: 'Muy pequeño',
    perks: [
      'Perfecto para la vida en apartamentos',
      'Requiere ejercicio moderado',
      'Fácil de entrenar',
      'Bueno con niños y otros animales',
      'Requiere poco cuidado del pelaje',
    ],
    color: ['Blanco', 'Negro', 'Castaño'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere socialización temprana',
      'Requiere ejercicio moderado',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Problemas dentales', 'Luxación de rótula'],
  },
  159: {
    weight: {
      imperial: '45 - 80',
      metric: '20 - 36',
    },
    height: {
      imperial: '20 - 27',
      metric: '51 - 69',
    },
    id: 159,
    name: 'Coonhound Walker de Árbol',
    bred_for: ['Caza', 'Seguimiento', 'Deportes de campo'],
    breed_group: ['Sabueso'],
    life_span: '10 - 13 años',
    temperament: [
      'Astuto',
      'Cariñoso',
      'Seguro',
      'Inteligente',
      'Amoroso',
      'Adiestrable',
    ],
    origin: 'Estados Unidos',
    reference_image_id: 'SkRpsgc47',
    image: {
      id: 'SkRpsgc47',
      width: 1920,
      height: 1080,
      url: 'https://cdn2.thedogapi.com/images/SkRpsgc47.jpg',
    },
    searchTerms: [
      'Coonhound Walker de Árbol',
      'Perro de caza',
      'Perro adiestrable',
    ],
    country_code: 'US',
    description:
      'El Coonhound Walker de Árbol es un perro grande, inteligente y cariñoso. Son seguros y son muy adiestrables, lo que los hace excelentes para la caza y los deportes de campo. A pesar de su tamaño, son perros amorosos y hacen grandes mascotas para la familia.',
    history:
      'El Coonhound Walker de Árbol se originó en los Estados Unidos y fue criado para cazar y rastrear. Son conocidos por su habilidad para "trepar" a los árboles en busca de presas y son populares en los deportes de campo. A pesar de su uso como perros de caza, también son mascotas familiares amorosas.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Bueno para la vida en el campo',
      'Requiere mucho ejercicio',
      'Muy adiestrable',
      'Bueno con niños y otros animales',
      'Requiere cuidado moderado del pelaje',
    ],
    color: ['Blanco', 'Negro', 'Castaño'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere mucha actividad física',
      'Requiere entrenamiento temprano',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Otitis',
      'Problemas de obesidad',
    ],
  },
  160: {
    weight: {
      imperial: '50 - 65',
      metric: '23 - 29',
    },
    height: {
      imperial: '21 - 24',
      metric: '53 - 61',
    },
    id: 160,
    name: 'Vizsla',
    bred_for: ['Señalamiento y rastreo'],
    breed_group: ['Deportivo'],
    life_span: '10 - 14 años',
    temperament: ['Cariñoso', 'Energético', 'Leal', 'Suave', 'Tranquilo'],
    origin: 'Hungría',
    reference_image_id: 'r1o0jx9Em',
    image: {
      id: 'r1o0jx9Em',
      width: 2269,
      height: 1276,
      url: 'https://cdn2.thedogapi.com/images/r1o0jx9Em.jpg',
    },
    searchTerms: ['Vizsla', 'Perro deportivo', 'Perro cariñoso', 'Perro leal'],
    country_code: 'HU',
    description:
      'El Vizsla es un perro de tamaño medio conocido por su lealtad y su energía. Son cariñosos, suaves y tranquilos, y se llevan bien con los niños y otros animales. Aunque son energéticos, también pueden ser bastante tranquilos en el hogar.',
    history:
      'Originario de Hungría, el Vizsla fue criado para el señalamiento y rastreo. Son conocidos por su habilidad para trabajar tanto en tierra como en agua. A pesar de su uso en el campo deportivo, también son perros de familia muy queridos.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Requiere mucho ejercicio',
      'Excelente perro de compañía',
      'Adecuado para familias con niños',
      'Requiere cuidado moderado del pelaje',
    ],
    color: ['Dorado', 'Castaño'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere mucha actividad física',
      'Requiere socialización temprana',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Atrofia progresiva de retina',
      'Epilepsia',
    ],
  },
  161: {
    weight: {
      imperial: '55 - 90',
      metric: '25 - 41',
    },
    height: {
      imperial: '23 - 27',
      metric: '58 - 69',
    },
    id: 161,
    name: 'Weimaraner',
    bred_for: ['Rastreo de presas grandes', 'Perro de caza versátil'],
    breed_group: ['Deportivo'],
    life_span: '12 - 15 años',
    temperament: [
      'Estable',
      'Reservado',
      'Obstinado',
      'Energético',
      'Alerta',
      'Inteligente',
      'Poderoso',
      'Rápido',
    ],
    origin: 'Alemania',
    reference_image_id: 'SyU12l9V7',
    image: {
      id: 'SyU12l9V7',
      width: 901,
      height: 954,
      url: 'https://cdn2.thedogapi.com/images/SyU12l9V7.jpg',
    },
    searchTerms: [
      'Weimaraner',
      'Perro deportivo',
      'Perro obstinado',
      'Perro rápido',
    ],
    country_code: 'DE',
    description:
      'El Weimaraner es un perro de tamaño grande conocido por su inteligencia y energía. Son perros poderosos y rápidos, con un temperamento estable pero pueden ser reservados. Aunque son obstinados, son alertas y buenos perros de trabajo.',
    history:
      'El Weimaraner es originario de Alemania, donde fue criado para rastrear presas grandes y ser un perro de caza versátil. Son conocidos por su velocidad y poder, así como por su habilidad para trabajar tanto en tierra como en agua.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Requiere mucho ejercicio',
      'Buen perro de caza',
      'Requiere entrenamiento y socialización temprana',
      'Puede ser reservado con extraños',
    ],
    color: ['Gris', 'Plateado', 'Azul-gris'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Requiere mucha actividad física',
      'Requiere socialización temprana',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Dilatación gástrica volvulus',
      'Distiquiasis',
    ],
  },
  162: {
    weight: {
      imperial: '35 - 55',
      metric: '16 - 25',
    },
    height: {
      imperial: '17 - 19',
      metric: '43 - 48',
    },
    id: 162,
    name: 'Springer Spaniel Galés',
    bred_for: ['Desalojar y recuperar pájaros'],
    breed_group: ['Deportivo'],
    life_span: '12 - 15 años',
    temperament: [
      'Obstinado',
      'Amigable',
      'Cariñoso',
      'Leal',
      'Juguetón',
      'Activo',
    ],
    origin: 'Gales',
    reference_image_id: 'BJ1gnx5Vm',
    image: {
      id: 'BJ1gnx5Vm',
      width: 1331,
      height: 944,
      url: 'https://cdn2.thedogapi.com/images/BJ1gnx5Vm.jpg',
    },
    searchTerms: [
      'Springer Spaniel Galés',
      'Perro deportivo',
      'Perro obstinado',
      'Perro juguetón',
    ],
    country_code: 'GB',
    description:
      'El Springer Spaniel Galés es un perro de tamaño mediano conocido por ser amigable, cariñoso y leal. A pesar de su temperamento a veces obstinado, es un perro muy juguetón y activo que disfruta desalojar y recuperar pájaros.',
    history:
      'El Springer Spaniel Galés tiene su origen en Gales, y es conocido por ser uno de los perros de caza más antiguos de Gran Bretaña. Se utilizaba para desalojar pájaros y luego recuperarlos una vez que el cazador los había abatido.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Requiere ejercicio regular',
      'Buen perro de caza',
      'Puede ser obstinado, requiere entrenamiento y socialización temprana',
      'Amigable y leal, buen perro de compañía',
    ],
    color: ['Rojo y blanco', 'Blanco y rojo'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere mucha actividad física',
      'Requiere socialización temprana',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas oculares',
      'Otitis',
    ],
  },
  163: {
    weight: {
      imperial: '15 - 22',
      metric: '7 - 10',
    },
    height: {
      imperial: '10 - 11',
      metric: '25 - 28',
    },
    id: 163,
    name: 'West Highland White Terrier',
    bred_for: ['Caza de zorros, tejones y ratas'],
    breed_group: ['Terrier'],
    life_span: '13 - 15 años',
    temperament: [
      'Trabajador',
      'Alegre',
      'Amigable',
      'Energético',
      'Independiente',
    ],
    origin: 'Escocia',
    reference_image_id: 'Bkdx2g5Em',
    image: {
      id: 'Bkdx2g5Em',
      width: 1065,
      height: 1032,
      url: 'https://cdn2.thedogapi.com/images/Bkdx2g5Em.jpg',
    },
    searchTerms: [
      'West Highland White Terrier',
      'Terrier',
      'Perro amigable',
      'Perro independiente',
    ],
    country_code: 'GB',
    description:
      'El West Highland White Terrier, también conocido como Westie, es un perro pequeño, energético y trabajador. Son conocidos por su pelaje blanco brillante, su naturaleza amigable y su independencia. Son excelentes cazadores de zorros, tejones y ratas.',
    history:
      'El West Highland White Terrier se originó en Escocia, específicamente en las Tierras Altas. Originalmente se criaron para cazar zorros, tejones y ratas. Se caracterizan por su pelaje blanco, que es una diferencia notable respecto a otros terriers escoceses, que suelen ser oscuros.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Requiere ejercicio regular',
      'Fácil de entrenar',
      'Bueno con niños y otros animales',
      'Mínimo derramamiento de pelo',
    ],
    color: ['Blanco'],
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere ejercicio y estimulación mental',
      'Necesita un buen aseo debido a su pelaje blanco',
    ],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Problemas de piel',
      'Displasia de cadera',
      'Enfermedad de Legg-Calvé-Perthes',
    ],
  },
  164: {
    weight: {
      imperial: '25 - 35',
      metric: '11 - 16',
    },
    height: {
      imperial: '18 - 22',
      metric: '46 - 56',
    },
    id: 164,
    name: 'Whippet',
    bred_for: ['Caza de liebres', 'Carreras'],
    breed_group: ['Sabueso'],
    life_span: '12 - 15 años',
    temperament: [
      'Amigable',
      'Afectuoso',
      'Vivaz',
      'Gentil',
      'Inteligente',
      'Tranquilo',
    ],
    origin: 'Reino Unido',
    reference_image_id: 'Hyv-ne94m',
    image: {
      id: 'Hyv-ne94m',
      width: 1600,
      height: 1071,
      url: 'https://cdn2.thedogapi.com/images/Hyv-ne94m.jpg',
    },
    searchTerms: ['Whippet', 'Sabueso', 'Perro tranquilo', 'Perro afectuoso'],
    country_code: 'GB',
    description:
      'El Whippet es una raza de perro que se originó en el Reino Unido. Son conocidos por su velocidad y agilidad, siendo populares en eventos de caza y carreras. A pesar de su naturaleza activa, los Whippets también son perros gentiles y afectuosos, lo que los hace buenos compañeros de hogar.',
    history:
      'El Whippet es una raza de perro que se desarrolló en el Reino Unido para la caza de liebres y carreras. Originalmente, los Whippets eran conocidos como "Snap dogs" debido a su habilidad para "romper" a las presas con rapidez y eficiencia. A pesar de su destreza para la caza y las carreras, los Whippets también son apreciados como mascotas de familia debido a su temperamento tranquilo y afectuoso.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente perro de carrera y caza',
      'Bueno para la convivencia familiar',
      'Requiere ejercicio regular',
      'Puede adaptarse a la vida en apartamento siempre y cuando tenga sus necesidades de ejercicio cubiertas',
    ],
    color: ['Varios colores'],
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Alta',
    necesidades_especiales: [
      'Requiere ejercicio y estimulación mental',
      'Necesita un abrigo en climas fríos debido a su pelaje corto y delgado',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Sensibilidad al frío',
      'Problemas cardiacos',
      'Problemas oculares',
    ],
  },
  165: {
    weight: {
      imperial: '60 - 85',
      metric: '27 - 39',
    },
    height: {
      imperial: '22 - 25',
      metric: '56 - 64',
    },
    id: 165,
    name: 'Pastor Blanco', // Traducción de White Shepherd
    bred_for: ['Pastoreo', 'Guardia', 'Servicio'], // Asumiendo por la raza
    breed_group: ['Pastor'], // Asumiendo por la raza
    life_span: '12 – 14 años', // Ya está en español
    temperament: [
      'Seguro de sí mismo',
      'Reservado',
      'Intrépido',
      'Alerta',
      'Sociable',
      'Entusiasta',
    ], // Traducción de los adjetivos
    origin: 'Estados Unidos', // Asumiendo por la raza
    reference_image_id: 'r14M3e9E7',
    image: {
      id: 'r14M3e9E7',
      width: 1200,
      height: 800,
      url: 'https://cdn2.thedogapi.com/images/r14M3e9E7.jpg',
    },
    searchTerms: ['Pastor Blanco', 'Pastor', 'Entusiasta', 'Alerta'],
    country_code: 'US',
    description:
      'El Pastor Blanco es una raza de perro grande originaria de los Estados Unidos. Se caracterizan por su valentía y confianza, con una actitud reservada pero entusiasta. Son perros muy inteligentes y alertas, lo que los hace excelentes para tareas de servicio y guardia. A pesar de su reserva, son muy sociables y disfrutan de la compañía de sus familias humanas.',
    history:
      'El Pastor Blanco proviene de los Pastores Alemanes de capa blanca. Fueron reconocidos como una raza distinta en los Estados Unidos en la década de 1970. Originalmente se criaron para tareas de pastoreo, pero su inteligencia y valentía los han hecho populares para otros roles como perros de servicio, perros de terapia, y perros de búsqueda y rescate.',
    categoria_de_tamanio: 'Grande',
    perks: [
      'Excelente perro de servicio',
      'Bueno para tareas de guardia',
      'Inteligente y fácil de entrenar',
      'Sociable y se lleva bien con las familias',
    ],
    color: ['Blanco'], // Los Pastores Blancos son, por definición, blancos
    nivel_de_energia: 'Alto', // Los Pastores Blancos son perros de trabajo activos
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesidad de ejercicio regular',
      'Estimulación mental debido a su inteligencia',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Displasia de cadera',
      'Problemas oculares',
      'Alergias',
    ], // Asumiendo por la raza
  },
  166: {
    weight: {
      imperial: '15 - 19',
      metric: '7 - 9',
    },
    height: {
      imperial: '13 - 16',
      metric: '33 - 41',
    },
    id: 166,
    name: 'Fox Terrier de Pelo Duro', // Traducción de Wire Fox Terrier
    bred_for: ['Caza de alimañas', 'Correr a los zorros'], // Traducción de bred_for
    breed_group: ['Terrier'], // Asumiendo por la raza
    life_span: '13 – 14 años', // Ya está en español
    temperament: [
      'Intrépido',
      'Amigable',
      'Audaz',
      'Agudo',
      'Alerta',
      'Rápido',
    ], // Traducción de los adjetivos
    origin: 'Inglaterra', // Traducción de "England"
    reference_image_id: 'SJ6f2g9EQ',
    image: {
      id: 'SJ6f2g9EQ',
      width: 1000,
      height: 795,
      url: 'https://cdn2.thedogapi.com/images/SJ6f2g9EQ.jpg',
    },
    searchTerms: ['Fox Terrier de Pelo Duro', 'Terrier', 'Rápido', 'Alerta'],
    country_code: 'GB', // Inglaterra
    description:
      'El Fox Terrier de Pelo Duro es un perro pequeño y energético, conocido por su valentía, amabilidad y agudeza. Originalmente fueron criados para la caza de alimañas y zorros, pero su inteligencia y personalidad animada también los hacen excelentes compañeros de familia. Son rápidos y alerta, con un espíritu audaz que no siempre es consciente de su pequeño tamaño.',
    history:
      'El Fox Terrier de Pelo Duro tiene sus raíces en Inglaterra, donde fue criado para ayudar en la caza de zorros y alimañas. Esta raza se desarrolló para ser audaz y valiente, con la agudeza y la velocidad necesarias para seguir el ritmo de los caballos y los perros de caza. A lo largo de los años, su atractivo como perro de compañía ha crecido, gracias a su personalidad amigable y vivaz.',
    categoria_de_tamanio: 'Pequeño', // Basado en la altura y el peso
    perks: [
      'Energético y juguetón',
      'Bueno para cazar alimañas',
      'Amigable y sociable',
      'Inteligente y fácil de entrenar',
    ],
    color: ['Blanco', 'Marrón', 'Negro'], // Los Fox Terrier de Pelo Duro suelen ser tricolores
    nivel_de_energia: 'Alto', // Los Fox Terrier son perros de trabajo activos
    facilidad_de_entrenamiento: 'Moderado', // Basado en la inteligencia y la personalidad independiente de la raza
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesidad de ejercicio regular',
      'Estimulación mental debido a su inteligencia',
      'Cuidado regular del pelaje',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Problemas dentales',
      'Enfermedad de Legg-Calvé-Perthes',
      'Luxación de rótula',
    ], // Enfermedades comunes para la raza
  },
  167: {
    weight: {
      imperial: '45 - 70',
      metric: '20 - 32',
    },
    height: {
      imperial: '20 - 24',
      metric: '51 - 61',
    },
    id: 167,
    name: 'Grifón de Puntero de Pelo Duro',
    bred_for: [
      'Perro de caza',
      'Pantano',
      'Localización',
      'Puntero',
      'Recuperación de aves acuáticas y de caza',
    ],
    breed_group: ['Deportivo'],
    life_span: '12 - 14 años',
    temperament: ['Leal', 'Gentil', 'Vigilante', 'Entrenable', 'Orgulloso'],
    origin: 'Francia', // Suponiendo, ya que es una raza de origen francés
    reference_image_id: 'Bkam2l9Vm',
    image: {
      id: 'Bkam2l9Vm',
      width: 2328,
      height: 1604,
      url: 'https://cdn2.thedogapi.com/images/Bkam2l9Vm.jpg',
    },
    searchTerms: [
      'Grifón de Puntero de Pelo Duro',
      'Deportivo',
      'Entrenable',
      'Leal',
    ],
    country_code: 'FR',
    description:
      'El Grifón de Puntero de Pelo Duro es un perro de caza de tamaño mediano a grande. Se les conoce por su habilidad para localizar y recuperar aves en los entornos más difíciles. Son perros leales, gentiles y orgullosos, y también son altamente entrenables.',
    history:
      'El Grifón de Puntero de Pelo Duro es una raza de perro de origen francés que fue desarrollada para la caza en terrenos difíciles. Su pelo duro y resistente al agua lo hace particularmente bueno para trabajar en pantanos y áreas húmedas.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente perro de caza',
      'Muy entrenable',
      'Bueno para trabajar en terrenos difíciles',
      'Leal y amable',
    ],
    color: ['Marrón', 'Gris', 'Blanco'], // Suponiendo, ya que estas son los colores más comunes de la raza
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesidad de ejercicio regular',
      'Estimulación mental',
      'Cuidado del pelaje',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Atrofia retinal progresiva'],
  },
  168: {
    weight: {
      imperial: '45 - 65',
      metric: '20 - 29',
    },
    height: {
      imperial: '21.5 - 25',
      metric: '55 - 64',
    },
    id: 168,
    name: 'Vizsla de Pelo Duro',
    bred_for: ['Perro de caza', 'Puntero', 'Recuperación'], // Suponiendo, ya que son usados comúnmente para estos propósitos
    breed_group: ['Deportivo'],
    life_span: '12 - 14 años',
    temperament: ['Cariñoso', 'Energético', 'Leal', 'Tranquilo'], // Suponiendo, ya que estas son características comunes de la raza
    origin: 'Hungría', // Suponiendo, ya que es una raza de origen húngaro
    reference_image_id: 'r1I4hl5Em',
    image: {
      id: 'r1I4hl5Em',
      width: 1024,
      height: 770,
      url: 'https://cdn2.thedogapi.com/images/r1I4hl5Em.jpg',
    },
    searchTerms: ['Vizsla de Pelo Duro', 'Deportivo', 'Cariñoso', 'Energético'],
    country_code: 'HU',
    description:
      'El Vizsla de Pelo Duro es una raza de perro de caza de origen húngaro, conocida por su pelaje único y su excelente capacidad de trabajo. Son perros cariñosos y leales con sus familias, pero también tienen una gran cantidad de energía y necesitan mucho ejercicio.',
    history:
      'El Vizsla de Pelo Duro es una raza de perro que se desarrolló en Hungría para trabajar en diversos tipos de terreno, desde campos abiertos hasta zonas boscosas. Son valorados por su capacidad para localizar y recuperar presas, y son perros de caza muy versátiles.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Excelente perro de caza',
      'Muy energético',
      'Bueno para actividades al aire libre',
      'Cariñoso y leal',
    ],
    color: ['Marrón', 'Dorado', 'Russet'], // Suponiendo, ya que estas son los colores más comunes de la raza
    nivel_de_energia: 'Alto',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Necesidad de ejercicio regular',
      'Estimulación mental',
      'Cuidado del pelaje',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: ['Displasia de cadera', 'Atrofia retinal progresiva'],
  },
  169: {
    weight: {
      imperial: '9 - 31',
      metric: '4 - 14',
    },
    height: {
      imperial: '10 - 23',
      metric: '25 - 58',
    },
    id: 169,
    name: 'Xoloitzcuintli',
    bred_for: ['Compañía', 'Caza de pequeños animales'], // Suponiendo, ya que son usados comúnmente para estos propósitos
    breed_group: ['No deportivo'],
    life_span: '12 - 14 años',
    temperament: [
      'Alegre',
      'Alerta',
      'Sociable',
      'Inteligente',
      'Protector',
      'Tranquilo',
    ],
    origin: 'México', // Es una raza de origen mexicano
    reference_image_id: 'HkNS3gqEm',
    image: {
      id: 'HkNS3gqEm',
      width: 1500,
      height: 1350,
      url: 'https://cdn2.thedogapi.com/images/HkNS3gqEm.jpg',
    },
    searchTerms: [
      'Xoloitzcuintli',
      'Perro Azteca',
      'No deportivo',
      'Alegre',
      'Protector',
    ],
    country_code: 'MX',
    description:
      'El Xoloitzcuintli, también conocido como el perro azteca, es una raza de perro muy antigua conocida por ser alegre, alerta y protectora. Este perro es sociable y inteligente, y puede ser un excelente perro de compañía. Son animales tranquilos pero pueden ser protectores cuando se trata de su familia.',
    history:
      'El Xoloitzcuintli es una de las razas de perros más antiguas del mundo. Originario de México, este perro fue considerado sagrado por los aztecas, mayas, toltecas y otras civilizaciones precolombinas. Su nombre proviene de Xólotl, el dios azteca de la muerte y la resurrección, y "itzcuintli", que significa perro en náhuatl.',
    categoria_de_tamanio: 'Mediano',
    perks: [
      'Bueno para compañía',
      'Protector con su familia',
      'Inteligente',
      'Tranquilo',
    ],
    color: ['Negro', 'Café', 'Rubio'], // Suponiendo, ya que estas son los colores más comunes de la raza
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: [
      'Cuidado del pelaje',
      'Protección solar',
      'Estimulación mental',
    ],
    popularidad: 'Moderada',
    enfermedades_comunes: [
      'Problemas dentales',
      'Displasia de cadera',
      'Alergias',
    ],
  },
  170: {
    weight: {
      imperial: '4 - 7',
      metric: '2 - 3',
    },
    height: {
      imperial: '8 - 9',
      metric: '20 - 23',
    },
    id: 170,
    name: 'Yorkshire Terrier',
    bred_for: ['Caza de pequeñas plagas'],
    breed_group: ['Juguete'],
    life_span: '12 - 16 años',
    temperament: [
      'Audaz',
      'Independiente',
      'Seguro',
      'Inteligente',
      'Valiente',
    ],
    origin: 'Inglaterra', // Esta raza es originaria de Inglaterra
    reference_image_id: 'B12BnxcVQ',
    image: {
      id: 'B12BnxcVQ',
      width: 1024,
      height: 683,
      url: 'https://cdn2.thedogapi.com/images/B12BnxcVQ.jpg',
    },
    searchTerms: ['Yorkshire Terrier', 'Juguete', 'Audaz', 'Independiente'],
    country_code: 'GB',
    description:
      'El Yorkshire Terrier es una pequeña raza de perro audaz e independiente. Son conocidos por su inteligencia y su valentía. A pesar de su tamaño, estos perros son seguros y no tienen miedo de enfrentarse a desafíos. Son excelentes cazadores de pequeñas plagas.',
    history:
      'El Yorkshire Terrier se originó en Inglaterra en el siglo XIX. Fueron criados para cazar pequeñas plagas en las minas y fábricas, y pronto se hicieron populares como mascotas debido a su pequeño tamaño y su audaz temperamento. Hoy en día, son una de las razas más queridas del mundo.',
    categoria_de_tamanio: 'Pequeño',
    perks: [
      'Excelente cazador de pequeñas plagas',
      'Inteligente',
      'Valiente',
      'Bueno para compañía',
    ],
    color: ['Azul', 'Fuego', 'Negro', 'Café'], // Estos son los colores más comunes de la raza
    nivel_de_energia: 'Moderado',
    facilidad_de_entrenamiento: 'Alto',
    salud_general: 'Buena',
    compatibilidad_con_otros_animales: 'Moderada',
    necesidades_especiales: ['Cuidado del pelaje', 'Estimulación mental'],
    popularidad: 'Alta',
    enfermedades_comunes: [
      'Problemas dentales',
      'Luxación de rótula',
      'Hipoglucemia',
    ],
  },
  171: {
    weight: {
      imperial: '13 - 17',
      metric: '6 - 8',
    },
    height: {
      imperial: '13 - 14',
      metric: '33 - 36',
    },
    id: 171,
    name: 'Jack Russell Terrier',
    bred_for: ['Caza de zorros'],
    breed_group: ['Terrier'],
    life_span: '12 - 14 años',
    temperament: [
      'Intrépido',
      'Amigable',
      'Energético',
      'Obediente',
      'Inteligente',
      'Feliz',
    ],
    origin: 'Reino Unido',
    reference_image_id: 'perros-jack-russell.webp',
    image: {
      id: 'perros-jack-russell.webp',
      width: 1920,
      height: 1280,
      url: 'https://esferamascota.b-cdn.net/perros-jack-russell.webp',
    },
    searchTerms: ['Jack Russell', 'Terrier', 'Caza de zorros'],
    country_code: 'GB',
    description:
      'El Jack Russell Terrier es una raza pequeña, enérgica y extremadamente versátil. Son perros inteligentes, audaces y amigables con mucha personalidad.',
    history:
      'Originario de Inglaterra, se crió por primera vez a mediados del siglo XIX para cazar zorros. Su nombre se deriva de un reverendo llamado John "Jack" Russell, que era un entusiasta de la caza de zorros.',
    necesidades_especiales: [
      'Necesita mucha actividad física y mental',
      'Requiere entrenamiento constante',
    ],
    perks: [
      'No suele ladrar en exceso, a menos que esté aburrido o tenga energía acumulada',
      'Necesita espacio para correr y jugar',
    ],
    color: ['Blanco', 'Negro', 'Tostado'], // Los colores son un ejemplo, pueden variar
    enfermedades_comunes: [
      'Problemas oculares',
      'Sordera',
      'Displasia de cadera',
    ],
    compatibilidad_con_otros_animales: 'Moderada',
    categoria_de_tamanio: 'Pequeño',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    nivel_de_energia: 'Alto',
    popularidad: 'Alta',
  },
  172: {
    weight: {
      imperial: '16 - 32',
      metric: '7 - 15',
    },
    height: {
      imperial: '8 - 9',
      metric: '20 - 23',
    },
    id: 172, // Este es un ID de ejemplo, deberás reemplazarlo por el ID real
    name: 'Perro Salchicha',
    bred_for: ['Caza de tejones'],
    breed_group: ['Hound (Sabueso)'],
    life_span: '12 - 16 años',
    temperament: [
      'Animado',
      'Juguetón',
      'Persistente',
      'Valiente',
      'Inteligente',
    ],
    origin: 'Alemania',
    reference_image_id: 'razas-perro-salchicha.webp',
    image: {
      id: 'razas-perro-salchicha.webp',
      width: 1920,
      height: 1280,
      url: 'https://esferamascota.b-cdn.net/razas-perro-salchicha.webp',
    },
    searchTerms: ['Perro Salchicha', 'Dachshund', 'Caza de tejones', 'Teckel'],
    country_code: 'DE',
    description: `El Dachshund, también conocido como "Perro Salchicha" debido a su aspecto único, es una raza de perro muy amada y reconocible a nivel mundial.
      Originarios de Alemania, estos perros son famosos por su personalidad animada y su pequeño tamaño. Sin embargo, no te dejes engañar por su tamaño:
      son perros valientes y decididos con un espíritu enorme. Los Dachshunds son perros de bajo cuerpo, cortos en estatura, con patas cortas y un tronco alargado.
      Sus cabezas son largas y estrechas, con orejas colgantes a los lados, lo que les da una apariencia de alerta.
      Su piel es tensa y su pelaje puede ser corto, largo o duro, dependiendo de la variedad, y viene en una amplia gama de colores y patrones.
      El temperamento de los Dachshunds puede describirse como amigable, curioso y valiente.
      Son conocidos por ser perros juguetones y les encanta participar en juegos y actividades con sus dueños.
      Sin embargo, también tienen una fuerte tendencia a la obstinación, por lo que la paciencia puede ser clave al entrenarlos.
      Aunque son pequeños, los Dachshunds tienen una gran voz y no dudarán en usarla cuando sientan la necesidad de proteger su hogar.
      Dadas sus necesidades de ejercicio moderado, los Dachshunds pueden ser una buena elección para la vida en apartamentos,
      siempre y cuando se les proporcione suficiente estimulación física y mental. Su pelaje de mantenimiento bajo también es una ventaja para los propietarios
      que buscan un perro que no requiera mucha preparación. Sin embargo, su cuerpo alargado puede ser propenso a problemas de espalda,
      por lo que es importante tener cuidado al manejarlos y asegurarse de que mantienen un peso saludable.`,
    history: `El Dachshund es una raza con una rica y fascinante historia. Su origen se remonta a Alemania en el siglo XV, donde fueron criados por cazadores para rastrear y cazar tejones. Su nombre, de hecho, proviene de las palabras alemanas "Dachs", que significa tejón, y "Hund", que significa perro.
      La forma única del Dachshund fue cuidadosamente diseñada para ayudarlo en su función de caza. Su cuerpo largo y bajo les permitía adentrarse en las madrigueras de los tejones y su audaz temperamento les daba la valentía necesaria para enfrentarse a estos animales. Además, sus fuertes patas delanteras eran perfectas para excavar y sus pechos profundos proporcionaban una buena capacidad pulmonar, útil para su trabajo en las madrigueras.
      Con el tiempo, la raza se dividió en dos tamaños: el tamaño estándar, que continuó siendo utilizado para cazar tejones y jabalíes, y el tamaño miniatura, que se utilizó para cazar animales de madriguera más pequeños como conejos. La raza fue llevada a América en el siglo XIX, donde rápidamente se ganó la popularidad y el afecto del público.
      A lo largo de los años, los Dachshunds han demostrado ser mucho más que perros de caza. Han participado en numerosos roles, incluyendo perros de terapia, perros de servicio, e incluso han sido mascotas de famosos y de la realeza. Aunque su papel principal en la actualidad es el de compañero amado, los Dachshunds aún retienen su valentía, curiosidad y amor por la caza que los hicieron tan populares en primer lugar.`,
    necesidades_especiales: [
      'Requiere mucho ejercicio',
      'Necesita cuidados especiales debido a su espina dorsal larga',
    ],
    perks: [
      'Muy juguetón y enérgico',
      'Bueno para la vida en apartamentos debido a su tamaño pequeño',
      'Fuerte instinto de caza',
    ],
    color: ['Negro', 'Marrón', 'Bicolor'], // Los colores son un ejemplo, pueden variar
    enfermedades_comunes: ['Problemas de espalda', 'Obesidad'],
    compatibilidad_con_otros_animales: 'Moderada',
    categoria_de_tamanio: 'Pequeño',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    nivel_de_energia: 'Alto',
    popularidad: 'Alta',
  },
  173: {
    weight: {
      imperial: '70 - 115',
      metric: '32 - 52',
    },
    height: {
      imperial: '23 - 27.5',
      metric: '58 - 70',
    },
    id: 173,
    name: 'Boyero de Berna',
    bred_for: ['Pastoreo', 'Tiro de cargas pesadas'],
    breed_group: ['Grupo de trabajo'],
    life_span: '6 - 8 años',
    temperament: ['Amigable', 'Inteligente', 'Leal', 'Tranquilo'],
    origin: 'Suiza',
    reference_image_id: 'razas-boyero-de-berna',
    image: {
      id: 'razas-boyero-de-berna',
      width: 1920,
      height: 1280,
      url: 'https://esferamascota.b-cdn.net/razas-boyero-de-berna.webp',
    },
    searchTerms: [
      'Boyero de Berna',
      'Bernese Mountain Dog',
      'Perro de montaña',
    ],
    country_code: 'CH',
    description: `
      El Boyero de Berna, conocido también como Bernese Mountain Dog, es una raza de perro grande y robusta originaria de Suiza. Con su pelaje tricolor denso y brillante, su expresión gentil y su temperamento amigable, estos perros son fácilmente reconocibles y muy queridos por muchos.
      El cuerpo del Boyero de Berna es fuerte y musculoso, diseñado para el trabajo duro. Su cabeza es plana en la parte superior con una frente moderada, y sus orejas medianas, triangulares y altas, se redondean ligeramente en los extremos. Sus ojos oscuros y brillantes expresan inteligencia y amabilidad.
      Este perro es conocido por su personalidad tranquila, su lealtad y su deseo de complacer. Son excelentes con los niños y se llevan bien con otros animales. Aunque pueden ser un poco reservados con los extraños, no son naturalmente agresivos.
      El Boyero de Berna necesita mucho ejercicio, y le encantará acompañarte en largas caminatas o sesiones de juego en el jardín. Sin embargo, también disfrutan de sus momentos de relax y son felices durmiendo a tus pies después de un día activo.
    `,
    history: `
      La historia del Boyero de Berna está íntimamente ligada a las regiones montañosas de Suiza. Se cree que son descendientes de los mastines traidos a Suiza por los romanos hace más de 2000 años.
      Estos perros se hicieron indispensables para los granjeros suizos, quienes los utilizaban como perros de trabajo. Su fuerza y resistencia les permitía conducir el ganado, tirar de carros y actuar como perros de guardia.
      Con el tiempo, la industrialización redujo la necesidad de perros de trabajo, y la población de Boyeros de Berna disminuyó significativamente. Fue a principios del siglo XX cuando un criador llamado Franz Schertenleib trabajó para revivir la raza.
      Los Boyeros de Berna llegaron a Estados Unidos en 1926 y al Reino Unido en la década de 1970. Desde entonces, se han convertido en populares mascotas en todo el mundo, conocidas y amadas por su belleza, su temperamento amigable y su devoción a sus familias humanas.
    `,
    necesidades_especiales: [
      'Necesita mucho ejercicio',
      'Cuidado regular del pelaje',
    ],
    perks: [
      'Bueno con los niños',
      'Bueno con otros animales',
      'Excelente perro de guardia',
    ],
    color: ['Negro', 'Blanco', 'Marrón'],
    enfermedades_comunes: [
      'Displasia de cadera',
      'Displasia de codo',
      'Problemas cardíacos',
    ],
    compatibilidad_con_otros_animales: 'Alta',
    categoria_de_tamanio: 'Grande',
    facilidad_de_entrenamiento: 'Moderado',
    salud_general: 'Buena',
    nivel_de_energia: 'Moderado',
    popularidad: 'Moderada',
  },
};

// Tenga en cuenta que los colores y las enfermedades comunes se seleccionaron basándose en la información generalmente asociada con estas razas. La información exacta puede variar y debería consultarse con un especialista en razas de perros o un veterinario para obtener información más precisa.
