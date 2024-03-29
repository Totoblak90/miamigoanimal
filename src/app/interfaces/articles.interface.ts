export interface Article {
    url: string;
    categories: ('Gatos' | 'Perros' | 'Salud' | 'Adiestramiento' | 'Alimentacion')[],
    'card-heading': string,
    sections: string[],
    destacado: boolean,
    creation: string | Date,
    recent_card_title: string,
    buscador: string[]
    description?: string,
}


//   PROMPT PARA GPT-4

// Generame un artículo para mi blog.
// ES IMPRESCINDIBLE QUE TENGA ENTRE 10000 Y 15000 caracteres, sino no me sirve!
// Quiero que me devuelvas el texto en formato de html donde:
// # Los h1 los vas a devolver como:
// <app-header mainTitle="[Parte más importante del título]" secondaryTitle="[parte secundaria del título]" bckColour="[tipo de mascota]"></app-header>
// Los tipos de mascota son: dog o cat

// # Los h2 los vas a devolver como:
//   <div class="u-center-text u-margin-bottom-small">
//     <h2 class="heading-secondary">
//       [texto]
//     </h2>
//   </div>

// #Los parrafos los vas a devolver como:
// <p class="paragraph">[texto]</p>
// Si ves que un párrafo se extiene mucho podes separarlo en distintas etiquetas <p> para que sea más legible

// # Los ul y li como:
// <ul>
// <li class="paragraph">[texto]</li>
// //Si hay más li colocarlos en el mismo formato
// </ul>.

// Tambíen quiero que me devuelvas dentro de los párrafos palabras con enlaces.
// los enlaces pueden redirigir a:
// /gatos (si el texto se refiere a gatos)
// /perros (si es a perros)
// /alimentacion (si se menciona algo referido a alimentación de perros o gatos)
// /salud (Lo mismo que alimentación pero para salud
// /adiestramiento (lo mismo que alimentación pero para adiestramiento)

// Por último quiero que si considerás que una parte del texto es importante lo envuelvas en etiquetas <strong>

// Tenés libertad para realizar acciones que puedan ayudar a que el artículo sea más atractivo para el usuario, que redirija a distintos sectores de la página y que puntúe bien para motores de búsqueda.

// Para este artículo el título principal (h1) va a ser:
// Bulldog francés: Todo lo que necesitas saber sobre esta adorable raza de perros.

// Quiero que tomes el título que te pase como la palabra clave de cola larga para buscadores, es decir, optimizá el artículo que me vas a dar teniendo en cuenta esas palabras claves.

