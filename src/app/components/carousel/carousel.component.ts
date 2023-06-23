import { isPlatformBrowser } from '@angular/common';
import { Component, ViewChild, ElementRef, Input, HostListener, Inject, OnChanges, SimpleChanges, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnChanges {

  @ViewChild('carousel') carousel?: ElementRef;

  @Input() images: { url: string, altText: string}[] = [];
  activeIndex = 0; // índice activo para los indicadores

  private _imagesPerView = this.calculateImagesPerView();

  get imagesPerView(): number {
    return this._imagesPerView;
  }

  get slideIndicators(): number[] {
    return Array(Math.ceil(this.images.length / this.imagesPerView)).fill(0);
  }

  get shouldHideControls(): boolean {
    return this.images.length <= this.imagesPerView;
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['images'] && changes['images'].currentValue !== changes['images'].previousValue && this.carousel) {
      setTimeout(() => {
        this.carousel!.nativeElement.scrollTo({ left: 0, behavior: 'smooth' });
        this.activeIndex = 0;
      }, 0);
    }
  }

  calculateImagesPerView() {
    if (isPlatformBrowser(this.platformId))
    {

      const width = window.innerWidth;

      if (width <= 900) { // Si el ancho es <= 600px, mostrar 1 imagen a la vez
        return 1;
      } else if (width <= 1200) { // Si el ancho es <= 900px, mostrar 2 imágenes a la vez
        return 2;
      } else { // Si el ancho es > 900px, mostrar 3 imágenes a la vez
        return 3;
      }

    }

    return 1
  }

  onScroll(event: any) {
    const percentage = Math.round(
      (event.target.scrollLeft / event.target.scrollWidth) * (this.images.length / this.imagesPerView)
    );
    this.activeIndex = percentage; // Actualiza el índice activo cuando se desplaza
  }

  goToSlide(index: number, ev: Event) {
    ev.stopPropagation();
    const scrollPosition = this.carousel?.nativeElement.clientWidth * index * this.imagesPerView;
    this.carousel?.nativeElement.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._imagesPerView = this.calculateImagesPerView();
  }

  prev() {
    this.carousel?.nativeElement.scrollBy({
      left: -this.carousel.nativeElement.clientWidth,
      behavior: 'smooth'
    });
  }

  next() {
    this.carousel?.nativeElement.scrollBy({
      left: this.carousel.nativeElement.clientWidth,
      behavior: 'smooth'
    });
  }

}
