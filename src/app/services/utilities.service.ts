import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  private imageSets = {
    dog: {
      color: 'linear-gradient(to right bottom, rgba(210, 180, 140, 0.8), rgba(139, 69, 19, 0.8))',
      images: {
        default: [
          'https://esferamascota.b-cdn.net/hero-dog.webp',
          'https://esferamascota.b-cdn.net/perro-1.webp',
          'https://esferamascota.b-cdn.net/perro-2.webp',
          'https://esferamascota.b-cdn.net/perro-3.webp',
          'https://esferamascota.b-cdn.net/perro-4.webp',
          'https://esferamascota.b-cdn.net/perro-5.webp',
          'https://esferamascota.b-cdn.net/perro-6.webp',
          'https://esferamascota.b-cdn.net/perro-7.webp',
          'https://esferamascota.b-cdn.net/perro-8.webp',
          'https://esferamascota.b-cdn.net/perro-9.webp',
          'https://esferamascota.b-cdn.net/perro-10.webp',
          'https://esferamascota.b-cdn.net/perro-11.webp',
        ],
        tablet: [
          'https://esferamascota.b-cdn.net/hero-dog-tablet.webp',
          'https://esferamascota.b-cdn.net/perro-1-tablet.webp',
          'https://esferamascota.b-cdn.net/perro-2-tablet.webp',
          'https://esferamascota.b-cdn.net/perro-3-tablet.webp',
          'https://esferamascota.b-cdn.net/perro-4-tablet.webp',
          'https://esferamascota.b-cdn.net/perro-5-tablet.webp',
          'https://esferamascota.b-cdn.net/perro-6-tablet.webp',
          'https://esferamascota.b-cdn.net/perro-7-tablet.webp',
          'https://esferamascota.b-cdn.net/perro-8-tablet.webp',
          'https://esferamascota.b-cdn.net/perro-9-tablet.webp',
          'https://esferamascota.b-cdn.net/perro-10-tablet.webp',
          'https://esferamascota.b-cdn.net/perro-11-tablet.webp',
        ],
        mobile: [
          'https://esferamascota.b-cdn.net/hero-dog-mobile.webp',
          'https://esferamascota.b-cdn.net/perro-1-mobile.webp',
          'https://esferamascota.b-cdn.net/perro-2-mobile.webp',
          'https://esferamascota.b-cdn.net/perro-3-mobile.webp',
          'https://esferamascota.b-cdn.net/perro-4-mobile.webp',
          'https://esferamascota.b-cdn.net/perro-5-mobile.webp',
          'https://esferamascota.b-cdn.net/perro-6-mobile.webp',
          'https://esferamascota.b-cdn.net/perro-7-mobile.webp',
          'https://esferamascota.b-cdn.net/perro-8-mobile.webp',
          'https://esferamascota.b-cdn.net/perro-9-mobile.webp',
          'https://esferamascota.b-cdn.net/perro-10-mobile.webp',
          'https://esferamascota.b-cdn.net/perro-11-mobile.webp',
        ]
      }
    },
    cat: {
      color: `linear-gradient(to right bottom, rgba(211, 211, 211, 0.8), rgba(105, 105, 105, 0.8))`,
      images: {
        default: [
          'https://esferamascota.b-cdn.net/destacados-gatos.webp',
          'https://esferamascota.b-cdn.net/clipped-section-cat.webp',
          'https://esferamascota.b-cdn.net/gato-en-sillon.webp',
          'https://esferamascota.b-cdn.net/gato-negro-en-taza.webp',
          'https://esferamascota.b-cdn.net/hero-cat.webp',
          'https://esferamascota.b-cdn.net/gatos-1.webp',
          'https://esferamascota.b-cdn.net/gatos-2.webp',
          'https://esferamascota.b-cdn.net/gatos-3.webp',
          'https://esferamascota.b-cdn.net/gatos-4.webp',
          'https://esferamascota.b-cdn.net/gatos-5.webp',
          'https://esferamascota.b-cdn.net/gatos-6.webp',
          'https://esferamascota.b-cdn.net/gatos-7.webp',
        ],
        tablet: [
          'https://esferamascota.b-cdn.net/destacados-gatos-tablet.webp',
          'https://esferamascota.b-cdn.net/clipped-section-cat-tablet.webp',
          'https://esferamascota.b-cdn.net/gato-en-sillon-tablet.webp',
          'https://esferamascota.b-cdn.net/gato-negro-en-taza-tablet.webp',
          'https://esferamascota.b-cdn.net/hero-cat-tablet.webp',
          'https://esferamascota.b-cdn.net/gatos-1-tablet.webp',
          'https://esferamascota.b-cdn.net/gatos-2-tablet.webp',
          'https://esferamascota.b-cdn.net/gatos-3-tablet.webp',
          'https://esferamascota.b-cdn.net/gatos-4-tablet.webp',
          'https://esferamascota.b-cdn.net/gatos-5-tablet.webp',
          'https://esferamascota.b-cdn.net/gatos-6-tablet.webp',
          'https://esferamascota.b-cdn.net/gatos-7-tablet.webp',
        ],
        mobile: [
          'https://esferamascota.b-cdn.net/destacados-gatos-mobile.webp',
          'https://esferamascota.b-cdn.net/clipped-section-cat-mobile.webp',
          'https://esferamascota.b-cdn.net/gato-en-sillon-mobile.webp',
          'https://esferamascota.b-cdn.net/gato-negro-en-taza-mobile.webp',
          'https://esferamascota.b-cdn.net/hero-cat-mobile.webp',
          'https://esferamascota.b-cdn.net/gatos-1-mobile.webp',
          'https://esferamascota.b-cdn.net/gatos-2-mobile.webp',
          'https://esferamascota.b-cdn.net/gatos-3-mobile.webp',
          'https://esferamascota.b-cdn.net/gatos-4-mobile.webp',
          'https://esferamascota.b-cdn.net/gatos-5-mobile.webp',
          'https://esferamascota.b-cdn.net/gatos-6-mobile.webp',
          'https://esferamascota.b-cdn.net/gatos-7-mobile.webp',
        ]
      }
    },
    train: {
      color: `linear-gradient( to right bottom, rgba(173, 216, 230, 0.8), rgba(0, 0, 205, 0.8))`,
      images: {
        default: ['https://esferamascota.b-cdn.net/health-hero.webp'],
        tablet: ['https://esferamascota.b-cdn.net/health-hero-tablet.webp'],
        mobile: ['https://esferamascota.b-cdn.net/health-hero-mobile.webp']
      }
    },
    health: {
      color: `linear-gradient( to right bottom, rgba(255, 127, 127, 0.8), rgba(178, 34, 34, 0.8))`,
      images: {
        default: ['https://esferamascota.b-cdn.net/health-hero.webp'],
        tablet: ['https://esferamascota.b-cdn.net/health-hero-tablet.webp'],
        mobile: ['https://esferamascota.b-cdn.net/health-hero-mobile.webp']
      }
    },
    food: {
      color: `linear-gradient( to right bottom, rgba(165, 214, 167, 0.8), rgba(102, 187, 106, 0.8))`,
      images: {
        default: ['https://esferamascota.b-cdn.net/alimentacion-hero.webp'],
        tablet: ['https://esferamascota.b-cdn.net/alimentacion-hero-tablet.webp'],
        mobile: ['https://esferamascota.b-cdn.net/alimentacion-hero-mobile.webp']
      }
    },
    yo: {
      color: `linear-gradient(to right bottom, rgba(85, 197, 122, 0.8), rgba(126, 213, 111, 0.8))`,
      images: {
        default: ['https://esferamascota.b-cdn.net/yo-2.webp'],
        tablet: ['https://esferamascota.b-cdn.net/yo-2.webp'],
        mobile: ['https://esferamascota.b-cdn.net/yo-2.webp']
      }
    },
    extra: {
      color: `linear-gradient(to right bottom, rgba(85, 197, 122, 0.8), rgba(126, 213, 111, 0.8))`,
      images: {
        default: ['https://esferamascota.b-cdn.net/destacados-extra.webp'],
        tablet: ['https://esferamascota.b-cdn.net/destacados-extra-tablet.webp'],
        mobile: ['https://esferamascota.b-cdn.net/destacados-extra-mobile.webp']
      }
    },
    default: {
      color: `linear-gradient(to right bottom, rgba(85, 197, 122, 0.8), rgba(126, 213, 111, 0.8))`,
      images: {
        default: ['https://esferamascota.b-cdn.net/hero-both.webp'],
        tablet: ['https://esferamascota.b-cdn.net/hero-both-tablet.webp'],
        mobile: ['https://esferamascota.b-cdn.net/hero-both-mobile.webp']
      }
    }

  };

  constructor(@Inject(PLATFORM_ID) private platformID: Object) { }

  selectImage(
    type: 'default' | 'dog' | 'cat' | 'health' | 'train' | 'food' | 'yo' | 'extra' | undefined,
    img?: string,
    onlyImage?: boolean
  ): string {
    if (!isPlatformBrowser(this.platformID)) {
      return '';
    }

    type = type || 'default';

    const imageSet = this.imageSets[type];

    if (!imageSet) {
      return '';
    }

    let images: string[];

    if (window.innerWidth <= 600) {
      images = imageSet.images.mobile;
    } else if (window.innerWidth <= 1200) {
      images = imageSet.images.tablet;
    } else {
      images = imageSet.images.default;
    }

    const selectedImage = images[Math.floor(Math.random() * images.length)];

    if (onlyImage) {
      return img || selectedImage;
    } else {
      return `${imageSet.color}, url(${img || selectedImage})`;
    }
  }

}
