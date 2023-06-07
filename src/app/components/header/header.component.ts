import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() mainTitle: string = '';
  @Input() secondaryTitle = '';
  @Input() cta?: string = '';
  @Input() bckColour?: 'default' | 'dog' | 'cat' | 'health' | 'train' | 'food' | 'yo' = 'default';
  @Input() providedImg: string = '';

  selectedImage: string = '';

  get backgroundImage() {
    return this.selectedImage;
  }

  get backgroundColour(): string {

    const cssClass = {
      default: 'bg-default',
      dog: 'bg-dog',
      cat: 'bg-cat',
      health: 'bg-health',
      train: 'bg-train',
      food: 'bg-food',
      yo: 'bg-yo'
    }

    return cssClass[this.bckColour || 'default']

  }

  get showSocialIcons() {

    return  !this.router.url.includes('post') ||
            !this.router.url.includes('cookies') ||
            !this.router.url.includes('politicas') ||
            !this.router.url.includes('terminos')

  }

  constructor(
    private utilitiesSrv: UtilitiesService,
    private router: Router,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit() {

    if (this.providedImg)
    {
      const type = this.bckColour === 'cat' ? 'cat' : this.bckColour === 'dog' ? 'dog' : 'extra';
      this.selectedImage = this.utilitiesSrv.selectImage( type, this.providedImg )
     }

    else
    {
      this.selectedImage =  this.bckColour === 'cat' ? this.utilitiesSrv.selectImage( this.bckColour ) :
      this.bckColour === 'dog' ? this.utilitiesSrv.selectImage( this.bckColour ) :
      ''
    }


    if (isPlatformBrowser(this.platformId)) { this.preloadImage(); }
  }

  private preloadImage() {

    const images: {[key in 'default' | 'dog' | 'cat' | 'health' | 'train' | 'food' | 'yo']: string} =
    {
      cat: this.selectedImage.split('url(')[1]?.slice(0, this.selectedImage.split('url(')[1]?.length - 1),
      dog: this.selectedImage.split('url(')[1]?.slice(0, this.selectedImage.split('url(')[1]?.length - 1),
      default: 'https://esferamascota.b-cdn.net/hero-both.webp',
      health: 'https://esferamascota.b-cdn.net/health-hero.webp',
      train: 'https://esferamascota.b-cdn.net/training-1.webp',
      food: 'https://esferamascota.b-cdn.net/alimentacion-hero.webp',
      yo: 'https://esferamascota.b-cdn.net/yo-2.webp'
    };

    if (this.bckColour && this.bckColour in images) { this.createHref(images[this.bckColour]!); }

  }


  private createHref(url: string) {
      const linkElement = this.renderer.createElement('link');
      this.renderer.setAttribute(linkElement, 'rel', 'preload');
      this.renderer.setAttribute(linkElement, 'as', 'image');
      this.renderer.setAttribute(linkElement, 'href', url);
      this.renderer.appendChild(this.document.head, linkElement);
  }

}
