import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, Inject, Input, OnDestroy, PLATFORM_ID } from '@angular/core';
import { LazyLoadingService } from '../services/lazy-loading.service';

@Directive({
  selector: '[LazyLoadBgImage]'
})
export class LazyLoadBgImageDirective implements AfterViewInit, OnDestroy {

  @Input('lazyLoad') backgroundImage: string = '';
  @Input('onlyUrl') onlyUrl: boolean = false;

  private intersectionHandler: () => void;

  constructor(
    private el: ElementRef,
    private lazyLoadingService: LazyLoadingService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.intersectionHandler = () => this.loadImage();
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.el.nativeElement.addEventListener('intersecting', this.intersectionHandler);
      this.lazyLoadingService.observe(this.el.nativeElement);
    }
  }

  ngOnDestroy() {
    this.el.nativeElement.removeEventListener('intersecting', this.intersectionHandler);
  }

  private loadImage() {
    if (this.onlyUrl) {
      this.el.nativeElement.style.backgroundImage = `url(${this.backgroundImage})`;
    } else {
      this.el.nativeElement.style.backgroundImage = this.backgroundImage;
    }
  }

}
