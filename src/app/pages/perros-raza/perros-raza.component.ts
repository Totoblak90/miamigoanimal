import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dog } from 'src/app/interfaces/dog.interface';
import { MetaService } from 'src/app/services/meta.service';
import { PerrosService } from 'src/app/services/perros.service';

@Component({
  selector: 'app-perros-raza',
  templateUrl: './perros-raza.component.html',
  styleUrls: ['./perros-raza.component.scss']
})
export class PerrosRazaComponent {

  dog: Dog = {
    bred_for: [],
    breed_group: [],
    categoria_de_tamanio: 'Grande',
    color: [],
    country_code: 'AR',
    description: '',
    height: {
      imperial: '',
      metric: ''
    },
    id: 0,
    image: {
      height: 0,
      id: '',
      url: '',
      width: 0
    },
    life_span: '',
    name: '',
    origin: '',
    temperament: [],
    weight: {
      imperial: '',
      metric: ''
    },
    compatibilidad_con_otros_animales: 'Baja',
    enfermedades_comunes:[],
    nivel_de_energia: 'Bajo',
    facilidad_de_entrenamiento: 'Bajo',
    history: '',
    necesidades_especiales: [],
    perks: [],
    popularidad: 'Alta',
    reference_image_id: '',
    salud_general: 'Buena',
    searchTerms: []
  } ;


  get compatibilidadConOtrosAnimalesPercentage() {

    type compatibilidadConOtrosAnimales = 'Baja' | 'Moderada' | 'Alta';

    type compatibilidadConOtrosAnimalesMap = {
      [K in compatibilidadConOtrosAnimales]: number;
    };

    const compatibilidad: compatibilidadConOtrosAnimalesMap = {
      'Baja': 33,
      'Moderada': 66,
      'Alta': 100
    }

    return `progress progress__${compatibilidad[this.dog.compatibilidad_con_otros_animales]}`
  }

  get categoriaDeTamanioPercentage() {
    type categoriaDeTamanio = 'Muy pequeño' | 'Pequeño' | 'Mediano' | 'Grande' | 'Muy grande';

    type categoriaDeTamanioMap = {
      [K in categoriaDeTamanio]: number;
    };

    const categoriaDeTamanio: categoriaDeTamanioMap = {
      'Muy pequeño': 20,
      'Pequeño': 40,
      'Mediano': 60,
      'Grande': 80,
      'Muy grande': 100
    }

    return `progress progress__${categoriaDeTamanio[this.dog.categoria_de_tamanio]}`
  }

  get facilidadDeEntrenamientoPercentage() {

    type FacilidadDeEntrenamiento = 'Bajo' | 'Moderado' | 'Alto';

    type FacilidadDeEntrenamientoMap = {
      [K in FacilidadDeEntrenamiento]: number;
    };

    const facilidadDeEntrenamiento: FacilidadDeEntrenamientoMap = {
      'Bajo': 33,
      'Moderado': 66,
      'Alto': 100
    }

    return `progress progress__${facilidadDeEntrenamiento[this.dog.facilidad_de_entrenamiento]}`
  }

  get saludGeneralPercentage() {

    type saludGeneral = 'Mala' | 'Regular' | 'Buena' | 'Excelente';

    type saludGeneralMap = {
      [K in saludGeneral]: number;
    };

    const saludGeneral: saludGeneralMap = {
      'Mala': 25,
      'Regular': 50,
      'Buena': 75,
      'Excelente': 100
    }

    return `progress progress__${saludGeneral[this.dog.salud_general]}`
  }

  get nivelDeEnergiaPercentage() {

    type nivelDeEnergia = 'Bajo' | 'Moderado' | 'Alto';

    type nivelDeEnergiaMap = {
      [K in nivelDeEnergia]: number;
    };

    const nivelDeEnergia: nivelDeEnergiaMap = {
      'Bajo': 33,
      'Moderado': 66,
      'Alto': 100
    }

    return `progress progress__${nivelDeEnergia[this.dog.nivel_de_energia]}`
  }

  get popularidadPercentage() {

    type popularidad = 'Baja' | 'Moderada' | 'Alta';

    type popularidadMap = {
      [K in popularidad]: number;
    };

    const popularidad: popularidadMap = {
      'Baja': 33,
      'Moderada': 66,
      'Alta': 100
    }

    return `progress progress__${popularidad[this.dog.popularidad]}`
  }

  get tendenciaLadridoPercentage() {

    type tendenciaLadrido = 'Baja' | 'Moderada' | 'Alta';

    type tendenciaLadridoMap = {
      [K in tendenciaLadrido]: number;
    };

    const tendenciaLadrido: tendenciaLadridoMap = {
      'Baja': 33,
      'Moderada': 66,
      'Alta': 100
    }

    return `progress progress__${tendenciaLadrido[this.dog.tendencia_a_ladrar || 'Baja']}`
  }

  get necesidadDeAseoPercentage() {

    type necesidadDeAseo = 'Baja' | 'Moderada' | 'Alta';

    type necesidadDeAseoMap = {
      [K in necesidadDeAseo]: number;
    };

    const necesidadDeAseo: necesidadDeAseoMap = {
      'Baja': 33,
      'Moderada': 66,
      'Alta': 100
    }

    return `progress progress__${necesidadDeAseo[this.dog.necesidad_de_aseo || 'Baja']}`
  }

  get resistenciaAlCalorPercentage() {

    type resistenciaAlCalor = 'Baja' | 'Moderada' | 'Alta';

    type resistenciaAlCalorMap = {
      [K in resistenciaAlCalor]: number;
    };

    const resistenciaAlCalor: resistenciaAlCalorMap = {
      'Baja': 33,
      'Moderada': 66,
      'Alta': 100
    }

    return `progress progress__${resistenciaAlCalor[this.dog.soporta_clima_calido || 'Baja']}`
  }

  get resistenciaAlFrioPercentage() {

    type resistenciaAlFrio = 'Baja' | 'Moderada' | 'Alta';

    type resistenciaAlFrioMap = {
      [K in resistenciaAlFrio]: number;
    };

    const resistenciaAlFrio: resistenciaAlFrioMap = {
      'Baja': 33,
      'Moderada': 66,
      'Alta': 100
    }

    return `progress progress__${resistenciaAlFrio[this.dog.soporta_clima_frio || 'Baja']}`
  }

  get toleranciaSoledadPercentage() {

    type toleranciaSoledad = 'Baja' | 'Moderada' | 'Alta' | '-';

    type toleranciaSoledadMap = {
      [K in toleranciaSoledad]: number;
    };

    const toleranciaSoledad: toleranciaSoledadMap = {
      '-': 0,
      'Baja': 33,
      'Moderada': 66,
      'Alta': 100
    }

    return `progress progress__${toleranciaSoledad[this.dog.tolerancia_a_la_soledad || '-']}`
  }

  get relacionNinosPercentage() {

    type relacionNinos = 'Baja' | 'Moderada' | 'Alta' | '-';

    type relacionNinosMap = {
      [K in relacionNinos]: number;
    };

    const relacionNinos: relacionNinosMap = {
      '-': 0,
      'Baja': 33,
      'Moderada': 66,
      'Alta': 100
    }

    return `progress progress__${relacionNinos[this.dog.bueno_con_ninos || '-']}`
  }

  get recomendacionPrimerizosPercentage() {

    type recomendacionPrimerizos = 'Baja' | 'Moderada' | 'Alta' | '-';

    type recomendacionPrimerizosMap = {
      [K in recomendacionPrimerizos]: number;
    };

    const recomendacionPrimerizos: recomendacionPrimerizosMap = {
      '-': 0,
      'Baja': 33,
      'Moderada': 66,
      'Alta': 100
    }

    return `progress progress__${recomendacionPrimerizos[this.dog.para_primerizos || '-']}`
  }



  constructor(private activatedRoute: ActivatedRoute, private perrosService: PerrosService, private metaService: MetaService) {
      console.log(this.activatedRoute.snapshot.data)
      this.dog = this.activatedRoute.snapshot.data['raza'];
      this.metaService.setMetaTags(
        `Aprendé todo sobre la raza "${this.dog.name}" - esferamascota.com`,
        `Descubre todo sobre la raza de perro ${this.dog.name}: su historia, características, cuidados y más. ¡Conviértete en el mejor amigo de tu perro con nuestra guía completa!`
      )

  }

}
