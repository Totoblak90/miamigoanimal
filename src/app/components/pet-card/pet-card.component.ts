import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Dog } from 'src/app/interfaces/dog.interface';

@Component({
  selector: 'pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent implements AfterViewInit {
  @Input() pet: Dog | undefined;
  @ViewChild('scrollContainer') scrollContainer: ElementRef | undefined;
  scrollInterval: any;
  scrollDirection = 1; // 1 for down, -1 for up

  get backgroundImage() {
    return `linear-gradient(to right bottom, rgba(41, 152, 255, 0.5), rgba(86, 67, 250, 0.5)), url(${this.pet?.image?.url || 'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/destacados-extra.webp?raw=true'})`;
  }

  get temperList() {
    return [...new Set(this.pet?.temperament?.split(',').sort().map((t) => t.trim()))];
  }

  ngAfterViewInit() {
    this.startScrolling();
  }

  startScrolling() {
    this.scrollInterval = setInterval(() => {
      if (this.scrollContainer) {
        const container = this.scrollContainer.nativeElement;
        if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
          this.scrollDirection = -3; // change direction to up
        } else if (container.scrollTop === 0) {
          this.scrollDirection = 3; // change direction to down
        }
        container.scrollTop += this.scrollDirection;
      }
    }, 50);
  }

  stopScrolling() {
    clearInterval(this.scrollInterval);
  }
}
