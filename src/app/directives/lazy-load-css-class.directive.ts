import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, Inject, Input, OnDestroy, PLATFORM_ID } from '@angular/core';
import { LazyLoadingService } from '../services/lazy-loading.service';

@Directive({
  selector: '[LazyLoadCssClass]'
})
export class LazyLoadCssClassDirective implements AfterViewInit, OnDestroy {

  @Input('lazyLoadClass') className: string = '';

  private intersectionHandler: () => void;

  constructor(
    private el: ElementRef,
    private lazyLoadingService: LazyLoadingService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.intersectionHandler = () => this.loadClass();
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

  private loadClass() {
    this.el.nativeElement.classList.add(this.className);
  }

}
