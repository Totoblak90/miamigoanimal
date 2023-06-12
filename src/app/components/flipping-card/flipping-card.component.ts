import { isPlatformBrowser } from '@angular/common';
import { OnInit, AfterViewInit, Component, ElementRef, Input, ViewChild, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'flipping-card',
  templateUrl: './flipping-card.component.html',
  styleUrls: ['./flipping-card.component.scss']
})
export class FlippingCardComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer') scrollContainer: ElementRef | undefined;
  scrollInterval: any;
  scrollDirection = 1;

  @Input() cardTitle = '';
  @Input() topics: string[] = [];
  @Input() type: 'cat' | 'dog' | 'extra' = 'extra';
  @Input() providedImg: string = '';

  selectedImage: string = '';

  // Navegación
  @Input() defaultRedirect = true;
  @Input() href: string | string[] = '';
  @Input() queryParams: any = {};

  get redirection() {
    if (this.defaultRedirect) {
      return '/post/' + this.href
    }
    else {

      if (!Array.isArray(this.href)) { return this.href[0] === '/' ? this.href : '/' + this.href; }
      else return this.href;

    }
  }

  constructor(private utilitiesSrv: UtilitiesService, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (this.providedImg) { this.selectedImage = this.utilitiesSrv.selectImage( this.type, this.providedImg, false ) }

    else
    {
      this.selectedImage =  this.type === 'cat' ? this.utilitiesSrv.selectImage( this.type ) :
                            this.type === 'dog' ? this.utilitiesSrv.selectImage( this.type ) :
                            ''
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {this.startScrolling();}
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
    }, 100);
  }

  stopScrolling() {
    clearInterval(this.scrollInterval);
  }

  ngOnDestroy(): void {
    clearInterval(this.scrollInterval);
  }

}
