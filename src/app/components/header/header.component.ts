import { CommonModule } from '@angular/common';
import { Component, Inject, Input, OnDestroy, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Dog } from 'src/app/interfaces/dog.interface';
import { PerrosService } from 'src/app/services/perros.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { BuscadorComponent } from '../buscador/buscador.component';
import { SocialIconsComponent } from '../social-icons/social-icons.component';
import { GatosService } from 'src/app/services/gatos.service';
import { Cat } from 'src/app/interfaces/cat.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [BuscadorComponent, CommonModule, SocialIconsComponent]
})
export class HeaderComponent implements OnChanges, OnDestroy {

  @ViewChild('headerContainerRef') headerContainerRef: ElementRef<HTMLElement> | undefined;

  @Input() mainTitle: string = '';
  @Input() secondaryTitle = '';
  @Input() cta?: string = '';
  @Input() bckColour?: 'default' | 'dog' | 'cat' | 'health' | 'train' | 'food' | 'yo' = 'default';
  @Input() providedImg: string = '';

  selectedImage: string = '';

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
    private perrosService: PerrosService,
    private gatosService: GatosService
  ) {}

  ngOnChanges(simpleChange: SimpleChanges) {
    this.selectAnImageForTheBackground()
  }

  private selectAnImageForTheBackground() {

    if (this.providedImg)
    {
      this.selectedImage = this.utilitiesSrv.selectImage( this.bckColour, this.providedImg )
    }

    else
    {

      if (this.bckColour === 'dog') {

        const dog = this.findADogByBreedName();
        this.selectedImage = this.utilitiesSrv.selectImage( this.bckColour, dog?.image?.url || undefined )

      }

      else if (this.bckColour === 'cat') {

        const cat = this.findACatByBreedName();
        this.selectedImage = this.utilitiesSrv.selectImage( this.bckColour, cat?.image || undefined )
      }

      else { this.selectedImage = this.utilitiesSrv.selectImage( this.bckColour ) }

    }


  }

  private findADogByBreedName(): Dog | undefined {

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

  private findACatByBreedName(): Cat | undefined {

    const gatos = Object.values(this.gatosService.catListSignal());

    // Creas una versión del título que es todo en minúsculas y sin puntuación
    const fullTitleWithoutPunctuation = (this.mainTitle + ' ' + this.secondaryTitle).replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();

    // Buscas en la lista de perros para ver si alguno de ellos está incluido en el título
    return gatos.find(dog => {
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
