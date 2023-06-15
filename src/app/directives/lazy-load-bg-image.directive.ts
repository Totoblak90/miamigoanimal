import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, Input, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[LazyLoadBgImage]'
})
export class LazyLoadBgImageDirective {

  @Input('lazyLoad') backgroundImage: string = '';
  @Input('onlyUrl') onlyUrl: boolean = false;

  constructor(private el: ElementRef,  @Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngAfterViewInit() {

    if (isPlatformBrowser(this.platformId)) { this.manageObserver() }

  }

  private manageObserver() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.loadImage();
          observer.disconnect();
        }
      });
    }, {
      rootMargin: '300px 0px'
    });

    observer.observe(this.el.nativeElement);
  }

  private loadImage() {
    if (this.onlyUrl) { this.el.nativeElement.style.backgroundImage = `url(${this.backgroundImage})`; }

    else { this.el.nativeElement.style.backgroundImage = this.backgroundImage; }
  }

}
