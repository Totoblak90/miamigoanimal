import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  private dogImages = [
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
  ];

  private catImages = [
    'https://esferamascota.b-cdn.net/destacados-gatos.webp',
    'https://esferamascota.b-cdn.net/clipped-section-cat.webp',
    'https://esferamascota.b-cdn.net/gato-en-sillon.webp',
    'https://esferamascota.b-cdn.net/gato-negro-en-taza.webp',
    'https://esferamascota.b-cdn.net/hero-cat.webp',
    'https://esferamascota.b-cdn.net/varios-gato-3.webp',
    'https://esferamascota.b-cdn.net/varios-gato-4.webp',
    'https://esferamascota.b-cdn.net/varios-gato-5.webp',
  ];

  constructor() { }

  selectImage(
    type: 'default' | 'dog' | 'cat' | 'health' | 'train' | 'food' | 'yo' | 'extra' | undefined,
    img?: string,
    onlyImage?: boolean
  ): string {
    let images: string[];
    let color: string;

    switch (type) {
      case 'dog':
        images = this.dogImages;
        color = 'linear-gradient(to right bottom, rgba(210, 180, 140, 0.8), rgba(139, 69, 19, 0.8))';
        break;
      case 'cat':
        images = this.catImages;
        color = 'linear-gradient(to right bottom, rgba(211, 211, 211, 0.8), rgba(105, 105, 105, 0.8))';
        break;
      case 'train':
        return `linear-gradient( to right bottom, rgba(173, 216, 230, 0.8), rgba(0, 0, 205, 0.8)), url(https://esferamascota.b-cdn.net/training-1.webp)`
      case 'health':
        return `linear-gradient( to right bottom, rgba(255, 127, 127, 0.8), rgba(178, 34, 34, 0.8)), url(https://esferamascota.b-cdn.net/health-hero.webp)`
      case 'food':
        return `linear-gradient( to right bottom, rgba(165, 214, 167, 0.8), rgba(102, 187, 106, 0.8)), url(https://esferamascota.b-cdn.net/alimentacion-hero.webp)`
      case 'extra':
        return `linear-gradient(to right bottom, rgba(85, 197, 122, 0.8), rgba(126, 213, 111, 0.8)), url(https://esferamascota.b-cdn.net/destacados-extra.webp)`;
      case 'yo':
        return `linear-gradient(to right bottom, rgba(85, 197, 122, 0.8), rgba(126, 213, 111, 0.8)), url(https://esferamascota.b-cdn.net/yo-2.webp)`;
      case 'default':
        return `linear-gradient(to right bottom, rgba(85, 197, 122, 0.8), rgba(126, 213, 111, 0.8)), url(https://esferamascota.b-cdn.net/hero-both.webp)`;
      case undefined:
        return `linear-gradient(to right bottom, rgba(85, 197, 122, 0.8), rgba(126, 213, 111, 0.8)), url(https://esferamascota.b-cdn.net/destacados-extra.webp)`;
      default:
        return `linear-gradient(to right bottom, rgba(85, 197, 122, 0.8), rgba(126, 213, 111, 0.8)), url(https://esferamascota.b-cdn.net/hero-both.webp)`;
    }

    const selectedImage = images[Math.floor(Math.random() * images.length)];

    if (onlyImage) return img || selectedImage;
    else return `${color}, url(${img || selectedImage})`;
  }
}
