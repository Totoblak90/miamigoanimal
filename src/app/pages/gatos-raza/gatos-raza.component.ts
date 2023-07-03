import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Cat } from 'src/app/interfaces/cat.interface';
import { GatosService } from 'src/app/services/gatos.service';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-gatos-raza',
  templateUrl: './gatos-raza.component.html',
  styleUrls: ['./gatos-raza.component.scss']
})
export class GatosRazaComponent {

  cat: Cat = {
    adaptability: 0,
    affection_level: 0,
    alt_names: "",
    cfa_url: "",
    child_friendly: 0,
    country_code: "",
    country_codes: "",
    description: "",
    dog_friendly: 0,
    energy_level: 0,
    experimental: 0,
    grooming: 0,
    hairless: 0,
    health_issues: 0,
    hypoallergenic: 0,
    id: "",
    indoor: 0,
    intelligence: 0,
    lap: 0,
    life_span: "",
    name: "",
    natural: 0,
    origin: "",
    rare: 0,
    reference_image_id: "",
    rex: 0,
    shedding_level: 0,
    short_legs: 0,
    social_needs: 0,
    stranger_friendly: 0,
    suppressed_tail: 0,
    temperament: [],
    vcahospitals_url: "",
    vetstreet_url: "",
    vocalisation: 0,
    weight: {
      imperial: "",
      metric: ""
    },
    wikipedia_url: "",
    categoria_de_tamanio: "-",
    necesidades_especiales: [],
    color: [],
    enfermedades_comunes: [],
    fuentes: [],
    history: "",
    image: "",
    necesidad_de_aseo: "-",
    nivel_de_energia: "-",
    para_primerizos: "-",
    perks: [],
    popularidad: "-",
    salud_general: "-",
    searchTerms: [],
    soporta_clima_calido: "-",
    soporta_clima_frio: "-",
    tolerancia_a_la_soledad: "-"
  };

  catGallery: { url: string, altText: string }[] = [];

  get catPerks() {
    return this.cat.perks.join(', ').toLocaleUpperCase()
  }

  get relacionConLosPerrosPercentage(): string {
    const map: {[key: number]: number} = {
      0: 0,
      1: 20,
      2: 40,
      3: 60,
      4: 80,
      5: 100
    }

    return this.cat.dog_friendly ? `progress progress__${map[this.cat.dog_friendly]}` : 'progress progress__0'
  }

  get sheddingLevelPercentage(): string {
    const map: {[key: number]: number} = {
      0: 0,
      1: 20,
      2: 40,
      3: 60,
      4: 80,
      5: 100
    }

    return this.cat.shedding_level ? `progress progress__${map[this.cat.shedding_level]}` : 'progress progress__0'
  }

  get relacionConLosExtraniosPercentage(): string {
    const map: {[key: number]: number} = {
      0: 0,
      1: 20,
      2: 40,
      3: 60,
      4: 80,
      5: 100
    }

    return this.cat.stranger_friendly ? `progress progress__${map[this.cat.stranger_friendly]}` : 'progress progress__0'
  }

  get necesidadesSocialesPercentage(): string {
    const map: {[key: number]: number} = {
      0: 0,
      1: 20,
      2: 40,
      3: 60,
      4: 80,
      5: 100
    }

    return this.cat.social_needs ? `progress progress__${map[this.cat.social_needs]}` : 'progress progress__0'
  }

  get vocalisationPercentage(): string {
    const map: {[key: number]: number} = {
      0: 0,
      1: 20,
      2: 40,
      3: 60,
      4: 80,
      5: 100
    }

    return this.cat.vocalisation ? `progress progress__${map[this.cat.vocalisation]}` : 'progress progress__0'
  }

  get childFriendlyPercentage(): string {
    const map: {[key: number]: number} = {
      0: 0,
      1: 20,
      2: 40,
      3: 60,
      4: 80,
      5: 100
    }

    return this.cat.child_friendly ? `progress progress__${map[this.cat.child_friendly]}` : 'progress progress__0'
  }

  get intelligencePercentage(): string {
    const map: {[key: number]: number} = {
      0: 0,
      1: 20,
      2: 40,
      3: 60,
      4: 80,
      5: 100
    }

    return this.cat.intelligence ? `progress progress__${map[this.cat.intelligence]}` : 'progress progress__0'
  }

  get categoriaDeTamanioPercentage() {
    type categoriaDeTamanio = 'Muy pequeño' | 'Pequeño' | 'Mediano' | 'Grande' | 'Muy grande' | '-';

    type categoriaDeTamanioMap = {
      [K in categoriaDeTamanio]: number;
    };

    const categoriaDeTamanio: categoriaDeTamanioMap = {
      '-': 0,
      'Muy pequeño': 20,
      'Pequeño': 40,
      'Mediano': 60,
      'Grande': 80,
      'Muy grande': 100
    }

    return `progress progress__${categoriaDeTamanio[this.cat.categoria_de_tamanio]}`
  }

  get saludGeneralPercentage() {

    type saludGeneral = 'Mala' | 'Regular' | 'Buena' | 'Excelente' | '-';

    type saludGeneralMap = {
      [K in saludGeneral]: number;
    };

    const saludGeneral: saludGeneralMap = {
      '-': 0,
      'Mala': 25,
      'Regular': 50,
      'Buena': 75,
      'Excelente': 100
    }

    return `progress progress__${saludGeneral[this.cat.salud_general]}`
  }

  get nivelDeEnergiaPercentage() {

    type nivelDeEnergia = 'Bajo' | 'Moderado' | 'Alto' | '-';

    type nivelDeEnergiaMap = {
      [K in nivelDeEnergia]: number;
    };

    const nivelDeEnergia: nivelDeEnergiaMap = {
      '-': 0,
      'Bajo': 33,
      'Moderado': 66,
      'Alto': 100
    }

    return `progress progress__${nivelDeEnergia[this.cat.nivel_de_energia]}`
  }

  get popularidadPercentage() {

    type popularidad = 'Baja' | 'Moderada' | 'Alta' | '-';

    type popularidadMap = {
      [K in popularidad]: number;
    };

    const popularidad: popularidadMap = {
      '-': 0,
      'Baja': 33,
      'Moderada': 66,
      'Alta': 100
    }

    return `progress progress__${popularidad[this.cat.popularidad]}`
  }

  get necesidadDeAseoPercentage() {

    const map: {[key: number]: number} = {
      0: 0,
      1: 20,
      2: 40,
      3: 60,
      4: 80,
      5: 100
    }

    return this.cat.grooming ? `progress progress__${map[this.cat.grooming]}` : 'progress progress__0'
  }

  get resistenciaAlCalorPercentage() {

    type resistenciaAlCalor = 'Baja' | 'Moderada' | 'Alta' | '-';

    type resistenciaAlCalorMap = {
      [K in resistenciaAlCalor]: number;
    };

    const resistenciaAlCalor: resistenciaAlCalorMap = {
      '-': 0,
      'Baja': 33,
      'Moderada': 66,
      'Alta': 100
    }

    return `progress progress__${resistenciaAlCalor[this.cat.soporta_clima_calido || '-']}`
  }

  get resistenciaAlFrioPercentage() {

    type resistenciaAlFrio = 'Baja' | 'Moderada' | 'Alta' | '-';

    type resistenciaAlFrioMap = {
      [K in resistenciaAlFrio]: number;
    };

    const resistenciaAlFrio: resistenciaAlFrioMap = {
      '-': 0,
      'Baja': 33,
      'Moderada': 66,
      'Alta': 100
    }

    return `progress progress__${resistenciaAlFrio[this.cat.soporta_clima_frio || '-']}`
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

    return `progress progress__${toleranciaSoledad[this.cat.tolerancia_a_la_soledad || '-']}`
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

    return `progress progress__${recomendacionPrimerizos[this.cat.para_primerizos || '-']}`
  }

  private _destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private metaService: MetaService,
    private gatosService: GatosService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {

    this.cat = this.activatedRoute.snapshot.data['raza'];
    this.setCatGallery()
    this.setMetaTags();
    this.subscribeToRouteChange();

  }

  private setMetaTags() {
    this.metaService.setMetaTags(
      `Aprendé todo sobre la raza ${this.cat.name} - esferamascota.com`,
      `Descubre todo sobre la raza de gato ${this.cat.name}: acerca de la raza, su historia, datos clave, rasgos y más. ¡Conviértete en el mejor amigo de tu gato con nuestra guía!`,
      '',
      true,
      'Tobias Blaksley',
      `${this.cat.name}, raza ${this.cat.name}, raza de perro ${this.cat.name}`,
    )

  }

  private subscribeToRouteChange() {
    if (isPlatformBrowser(this.platformId))
    {

      // Me suscribo a cambios en las rutas
      this.activatedRoute.params
      .pipe(takeUntil(this._destroy$))
      .subscribe(params => {
        // Aquí es donde puedes manejar los cambios en los parámetros de la ruta.
        // Por ejemplo, podrías llamar a un método para obtener los datos de la nueva raza de perro.
        const id = params['gatoId'];

        if (id)
        {
          this.cat = this.gatosService.catListSignal()[id];
          this.setCatGallery()
          this.setMetaTags();
        }
        else { this.router.navigate(['gatos']) }

      });

    }
  }

  setCatGallery() {
    this.catGallery = this.cat.gallery?.map(img => {
      return {
        url: img.url,
        altText: this.cat.name
      }
    }) || []
  }

  setCategoryName(value: number): string {
    const categoryNameMap: {[key: number]: string} = {
      0: '-',
      1: 'Muy Baja',
      2: 'Baja',
      3: 'Moderada',
      4: 'Alta',
      5: 'Muy Alta'
    }

    return categoryNameMap[value]
  }

  ngOnDestroy(): void {
    this._destroy$.next(true)
    this._destroy$.unsubscribe();
  }


}
