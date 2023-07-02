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

  private _destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private metaService: MetaService,
    private gatosService: GatosService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {

    this.cat = this.activatedRoute.snapshot.data['raza'];

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
          this.setMetaTags();
        }
        else { this.router.navigate(['gatos']) }

      });

    }
  }

  ngOnDestroy(): void {
    this._destroy$.next(true)
    this._destroy$.unsubscribe();
  }


}
