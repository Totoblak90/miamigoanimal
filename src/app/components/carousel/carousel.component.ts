import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ViewChild, ElementRef, Input, HostListener, Inject, OnChanges, SimpleChanges, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CarouselComponent implements OnChanges {

  @ViewChild('carousel') carousel?: ElementRef;

  @Input() images: { url: string, altText: string}[] = [];
  activeIndex = 0;
  windowSize?: number;

  private _imagesPerView = this.calculateImagesPerView();

  get imagesPerView(): number {
    return this._imagesPerView;
  }

  get slideIndicators(): number[] {

    if (isPlatformBrowser(this.platformId)) {
      let imagesPerGroup = 1;
      if (this.windowSize || 0 > 900) {
        imagesPerGroup = 3;
      } else if (this.windowSize || 0 > 600) {
        imagesPerGroup = 2;
      }

      return Array(Math.ceil(this.images.length / imagesPerGroup)).fill(0);
    }

    return [];
  }

  get shouldHideControls(): boolean {
    return this.images.length <= this.imagesPerView;
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.windowSize = window.innerWidth;
    }
  }

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

      if (width <= 900) {
        return 1;
      } else if (width <= 1200) {
        return 2;
      } else {
        return 3;
      }

    }

    return 1
  }

  onScroll(event: any) {
    const indicatorIndex = Math.round((event.target.scrollLeft / event.target.scrollWidth) * this.slideIndicators.length);
    this.activeIndex = indicatorIndex;
  }

  goToSlide(index: number, ev: Event) {
    ev.stopPropagation();
    const scrollPosition = this.carousel?.nativeElement.clientWidth * index;
    this.carousel?.nativeElement.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._imagesPerView = this.calculateImagesPerView();
    this.windowSize = window.innerWidth;
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
