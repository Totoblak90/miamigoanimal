import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  @ViewChild('carousel') carousel?: ElementRef;

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
