import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  private dogImages = [
    'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/destacados-perros.webp?raw=true',
    'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/clipped-section-dog.webp?raw=true',
    'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/hero-dog.webp?raw=true',
    'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/perro-en-taza.webp?raw=true',
    'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/destacados-extra.webp?raw=true'
  ];

  private catImages = [
    'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/destacados-gatos.webp?raw=true',
    'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/clipped-section-cat.webp?raw=true',
    'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/gato-en-sillon.webp?raw=true',
    'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/gato-negro-en-taza.webp?raw=true',
    'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/hero-cat.webp?raw=true',
    'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/varios-gato-1.webp?raw=true',
    'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/varios-gato-3.webp?raw=true',
    'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/varios-gato-4.webp?raw=true',
    'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/varios-gato-5.webp?raw=true',
    'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/destacados-extra.webp?raw=true'
  ];

  private extraImage = 'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/destacados-extra.webp?raw=true';

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
