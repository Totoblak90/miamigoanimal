import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { Cat } from 'src/app/interfaces/cat.interface';
import { Dog } from 'src/app/interfaces/dog.interface';
import { UtilitiesService } from 'src/app/services/utilities.service';

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

  selectedImage: string = '';

  @ViewChild('scrollContainer') scrollContainer: ElementRef | undefined;
  scrollInterval: any;
  scrollDirection = 1; // 1 for down, -1 for up

  get backgroundImage() {
    return this.selectedImage;
  }

  get temperList() {
    return (this.dog?.temperament || this.cat?.temperament || '')?.split(',').sort().map((t) => t.trim());
  }

  constructor(private utilitiesSrv: UtilitiesService) {}

  ngOnInit() {
    this.selectedImage = this.utilitiesSrv.selectImage(
      this.dog ? 'dog' : this.cat ? 'cat' : 'extra',
      this.dog?.image?.url as string || this.dog?.image as string || this.cat?.image || '',
    );
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
