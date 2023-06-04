import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  private dogImages = [
    'https://34.36.144.117/hero-dog.webp',
    'https://34.36.144.117/perro-1.webp',
    'https://34.36.144.117/perro-2.webp',
    'https://34.36.144.117/perro-3.webp',
    'https://34.36.144.117/perro-4.webp',
    'https://34.36.144.117/perro-5.webp',
    'https://34.36.144.117/perro-6.webp',
    'https://34.36.144.117/perro-7.webp',
    'https://34.36.144.117/perro-8.webp',
    'https://34.36.144.117/perro-9.webp',
  ];

  private catImages = [
    'https://34.36.144.117/destacados-gatos.webp',
    'https://34.36.144.117/clipped-section-cat.webp',
    'https://34.36.144.117/gato-en-sillon.webp',
    'https://34.36.144.117/gato-negro-en-taza.webp',
    'https://34.36.144.117/hero-cat.webp',
    'https://34.36.144.117/varios-gato-3.webp',
    'https://34.36.144.117/varios-gato-4.webp',
    'https://34.36.144.117/varios-gato-5.webp',
  ];

  private extraImage = 'https://34.36.144.117/destacados-extra.webp';

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
