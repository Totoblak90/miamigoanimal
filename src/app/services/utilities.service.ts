import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  private dogImages = [
    'https://miamigoanimal.b-cdn.net/hero-dog.webp',
    'https://miamigoanimal.b-cdn.net/perro-1.webp',
    'https://miamigoanimal.b-cdn.net/perro-2.webp',
    'https://miamigoanimal.b-cdn.net/perro-3.webp',
    'https://miamigoanimal.b-cdn.net/perro-4.webp',
    'https://miamigoanimal.b-cdn.net/perro-5.webp',
    'https://miamigoanimal.b-cdn.net/perro-6.webp',
    'https://miamigoanimal.b-cdn.net/perro-7.webp',
    'https://miamigoanimal.b-cdn.net/perro-8.webp',
    'https://miamigoanimal.b-cdn.net/perro-9.webp',
  ];

  private catImages = [
    'https://miamigoanimal.b-cdn.net/destacados-gatos.webp',
    'https://miamigoanimal.b-cdn.net/clipped-section-cat.webp',
    'https://miamigoanimal.b-cdn.net/gato-en-sillon.webp',
    'https://miamigoanimal.b-cdn.net/gato-negro-en-taza.webp',
    'https://miamigoanimal.b-cdn.net/hero-cat.webp',
    'https://miamigoanimal.b-cdn.net/varios-gato-3.webp',
    'https://miamigoanimal.b-cdn.net/varios-gato-4.webp',
    'https://miamigoanimal.b-cdn.net/varios-gato-5.webp',
  ];

  private extraImage = 'https://miamigoanimal.b-cdn.net/destacados-extra.webp';

  constructor() { }

  selectImage(type: 'dog' | 'cat' | 'extra', img?: string): string {
    let images: string[];
    let color: string;

    switch (type) {
      case 'dog':
        images = this.dogImages;
        color = 'linear-gradient(to right bottom, rgba(210, 180, 140, 0.5), rgba(139, 69, 19, 0.5))';
        break;
      case 'cat':
        images = this.catImages;
        color = 'linear-gradient(to right bottom, rgba(211, 211, 211, 0.7), rgba(105, 105, 105, 0.7))';
        break;
      default:
        return `linear-gradient(to right bottom, rgba(85, 197, 122, 0.5), rgba(126, 213, 111, 0.5)), url(${this.extraImage})`;
    }

    const selectedImage = images[Math.floor(Math.random() * images.length)];
    return `${color}, url(${img || selectedImage})`;
  }
}
