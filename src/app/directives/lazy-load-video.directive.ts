import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, Input, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[LazyLoadVideo]'
})
export class LazyLoadVideoDirective {

  @Input('lazyLoadVideoSrc') videoSrc: string = '';

  constructor(private el: ElementRef<HTMLVideoElement>,  @Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngAfterViewInit() {

    if (isPlatformBrowser(this.platformId)) { this.manageObserver() }

  }

  private manageObserver() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.loadVideoSrc();
          observer.disconnect();
        }
      });
    }, {
      rootMargin: '300px 0px'
    });

    observer.observe(this.el.nativeElement);
  }

  private loadVideoSrc() {
    this.el.nativeElement.src = this.videoSrc;
  }

}
