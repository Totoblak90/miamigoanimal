import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { Cat } from 'src/app/interfaces/cat.interface';
import { Dog } from 'src/app/interfaces/dog.interface';

@Component({
  selector: 'pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent implements AfterViewInit, OnDestroy {
  @Input() set pet(p: Cat | Dog) {
    if (p && 'id' in p && typeof p.id === 'string') {
      this.dog = undefined;
      this.cat = Cat.create(p);
    } else if (p && 'id' in p && typeof p.id === 'number') {
      this.cat = undefined;
      this.dog = Dog.create(p);
    } else {
      this.cat = undefined;
      this.dog = undefined;
    }

  }

  dog: Dog | undefined;
  cat: Cat | undefined;

  catImage: string = '';
  dogImage: string = '';

  @ViewChild('scrollContainer') scrollContainer: ElementRef | undefined;
  scrollInterval: any;
  scrollDirection = 1; // 1 for down, -1 for up

  get backgroundImage() {
    if (this.dog)
    {
      if (!this.dogImage)
      {
        const dogImages = [
          'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/destacados-perros.webp?raw=true',
          'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/clipped-section-dog.webp?raw=true',
          'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/hero-dog.webp?raw=true',
          'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/perro-en-taza.webp?raw=true',
        ]
        this.dogImage = dogImages[Math.floor(Math.random() * dogImages.length)];
      }
      return `linear-gradient(to right bottom, rgba(41, 152, 255, 0.5), rgba(86, 67, 250, 0.5)), url(${this.dog.image?.url || this.dog.image || this.dogImage})`;
    }
    else if (this.cat)
    {
      if (!this.catImage)
      {
        const catImages = [
          'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/destacados-gatos.webp?raw=true',
          'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/clipped-section-cat.webp?raw=true',
          'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/gato-en-sillon.webp?raw=true',
          'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/gato-negro-en-taza.webp?raw=true',
          'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/hero-cat.webp?raw=true',
          'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/varios-gato-1.webp?raw=true',
          'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/varios-gato-3.webp?raw=true',
          'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/varios-gato-4.webp?raw=true',
          'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/varios-gato-5.webp?raw=true',
        ]
        this.catImage = catImages[Math.floor(Math.random() * catImages.length)];
      }

      return `linear-gradient(to right bottom, rgba(255, 185, 0, 0.5), rgba(255, 119, 48, 0.5)), url(${this.cat.image  || this.catImage})`;
    }
    else
    {
      return `linear-gradient(to right bottom, rgba(85, 197, 122, 0.5), rgba(126, 213, 111, 0.5)), url(https://github.com/Totoblak90/miamigoanimal-images1/blob/master/destacados-extra.webp?raw=true)`;
    }
  }

  get temperList() {

    return [
      ...new Set(
        (this.dog?.temperament || this.cat?.temperament || '')?.split(',').sort().map((t) => t.trim())
      )
    ];
  }

  ngAfterViewInit() {
    this.startScrolling();
  }

  startScrolling() {
    this.scrollInterval = setInterval(() => {
      if (this.scrollContainer) {
        const container = this.scrollContainer.nativeElement;
        if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
          this.scrollDirection = -1; // change direction to up
        } else if (container.scrollTop === 0) {
          this.scrollDirection = 1; // change direction to down
        }
        container.scrollTop += this.scrollDirection;
      }
    }, 50);
  }

  stopScrolling() {
    clearInterval(this.scrollInterval);
  }

  ngOnDestroy(): void {
    clearInterval(this.scrollInterval);
  }
}
