import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  private dogImages = [
    'http://34.36.69.199/hero-dog.webp',
    'http://34.36.69.199/perro-1.webp',
    'http://34.36.69.199/perro-2.webp',
    'http://34.36.69.199/perro-3.webp',
    'http://34.36.69.199/perro-4.webp',
    'http://34.36.69.199/perro-5.webp',
    'http://34.36.69.199/perro-6.webp',
    'http://34.36.69.199/perro-7.webp',
    'http://34.36.69.199/perro-8.webp',
    'http://34.36.69.199/perro-9.webp',
  ];

  private catImages = [
    'http://34.36.69.199/destacados-gatos.webp',
    'http://34.36.69.199/clipped-section-cat.webp',
    'http://34.36.69.199/gato-en-sillon.webp',
    'http://34.36.69.199/gato-negro-en-taza.webp',
    'http://34.36.69.199/hero-cat.webp',
    'http://34.36.69.199/varios-gato-3.webp',
    'http://34.36.69.199/varios-gato-4.webp',
    'http://34.36.69.199/varios-gato-5.webp',
  ];

  private extraImage = 'http://34.36.69.199/destacados-extra.webp';

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
