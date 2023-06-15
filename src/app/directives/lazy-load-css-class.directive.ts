import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, Input, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[LazyLoadCssClass]'
})
export class LazyLoadCssClassDirective {

  @Input('lazyLoadClass') className: string = '';

  constructor(private el: ElementRef,  @Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngAfterViewInit() {

    if (isPlatformBrowser(this.platformId)) { this.manageObserver() }

  }

  private manageObserver() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.loadClass();
          observer.disconnect();
        }
      });
    }, {
      rootMargin: '300px 0px'
    });

    observer.observe(this.el.nativeElement);
  }

  private loadClass() {
    this.el.nativeElement.classList.add(this.className);
  }

}
