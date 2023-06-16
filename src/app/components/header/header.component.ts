import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnDestroy, OnInit, PLATFORM_ID, makeStateKey, TransferState, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Dog } from 'src/app/interfaces/dog.interface';
import { PerrosService } from 'src/app/services/perros.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @ViewChild('headerContainerRef') headerContainerRef: ElementRef<HTMLElement> | undefined;

  @Input() mainTitle: string = '';
  @Input() secondaryTitle = '';
  @Input() cta?: string = '';
  @Input() bckColour?: 'default' | 'dog' | 'cat' | 'health' | 'train' | 'food' | 'yo' = 'default';
  @Input() providedImg: string = '';

  selectedImage: string = '';

  get backgroundImage() {
    return this.selectedImage;
  }

  get showSocialIcons() {

    return  !this.router.url.includes('post') ||
            !this.router.url.includes('cookies') ||
            !this.router.url.includes('politicas') ||
            !this.router.url.includes('terminos')

  }

  get showBuscador() {
    return !this.router.url.includes('search-post')
  }

  private _destroy$ = new Subject<boolean>();

  constructor(
    private utilitiesSrv: UtilitiesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private perrosService: PerrosService,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit() {
    this.setBackgroundImage();
    this.subscribeToRouteChange();
  }

  // Configuración para cambiar la imágen del header si es una raza de perro y se encuentra en la misma ruta
  private subscribeToRouteChange() {
    if (isPlatformBrowser(this.platformId))
    {

      // Me suscribo a cambios en las rutas
      this.activatedRoute.params
      .pipe( takeUntil(this._destroy$) )
      .subscribe(params => {
        // Aquí es donde puedes manejar los cambios en los parámetros de la ruta.
        const id = params['id'];
        this.changeImagesWhenParamsChange(id);

        // Tengo que setear manualmente la imágen porque aplique la directiva de lazy loading
        if (this.headerContainerRef) { this.headerContainerRef.nativeElement.style.backgroundImage = this.selectedImage; }

      });

    }
  }

  private changeImagesWhenParamsChange(id: string) {
        // Acá hay un perro
        if (Number(id))
        {
          const dog = this.perrosService.dogListSignal()[+id];

          if (dog)
          {
            this.bckColour = 'dog';
            this.providedImg = dog.image.url;
            this.selectAnImageForTheBackground();

          }
        }

        else
        {
          // Acá va la lógica para el resto de las posibilidades
          this.selectAnImageForTheBackground();
        }
  }


  private setBackgroundImage() {

    const IMAGE_KEY = makeStateKey<string>( 'hero-section-background-image' );

    // Estoy del lado del cliente
    if (this.transferState.hasKey(IMAGE_KEY))
    {

      this.selectedImage = this.transferState.get(IMAGE_KEY, this.utilitiesSrv.selectImage( this.bckColour ));
      this.transferState.remove(IMAGE_KEY);

    }

    // Estoy del lado del servidor
    else {
      // Seteo la imágen en el lado del servidor para enviarla luego al cliente
      this.selectAnImageForTheBackground();
      this.transferState.set(IMAGE_KEY, this.selectedImage);
    }

  }

  private selectAnImageForTheBackground() {

    if (this.providedImg)
    {
      this.selectedImage = this.utilitiesSrv.selectImage( this.bckColour, this.providedImg )
    }

    else
    {

      if (this.bckColour === 'dog') {

        const dog = this.findADog();
        this.selectedImage = this.utilitiesSrv.selectImage( this.bckColour, dog?.image?.url || undefined )
      }

      else { this.selectedImage = this.utilitiesSrv.selectImage( this.bckColour ) }

    }


  }

  private findADog(): Dog | undefined {

    const perros = Object.values(this.perrosService.dogListSignal());

    // Creas una versión del título que es todo en minúsculas y sin puntuación
    const fullTitleWithoutPunctuation = (this.mainTitle + ' ' + this.secondaryTitle).replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();

    // Buscas en la lista de perros para ver si alguno de ellos está incluido en el título
    return perros.find(dog => {
      // Creas una versión del nombre del perro que es todo en minúsculas y sin puntuación
      const dogNameWithoutPunctuation = dog.name.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();

      // Compruebas si el nombre del perro está incluido en el título
      return fullTitleWithoutPunctuation.includes(dogNameWithoutPunctuation)
    });

  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

}
