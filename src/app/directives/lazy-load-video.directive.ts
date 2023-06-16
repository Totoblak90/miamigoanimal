import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, Inject, Input, OnDestroy, PLATFORM_ID } from '@angular/core';
import { LazyLoadingService } from '../services/lazy-loading.service';

@Directive({
  selector: '[LazyLoadVideo]'
})
export class LazyLoadVideoDirective implements AfterViewInit, OnDestroy {

  @Input('lazyLoadVideoSrc') videoSrc: string = '';

  private intersectionHandler: () => void;

  constructor(
    private el: ElementRef<HTMLVideoElement>,
    private lazyLoadingService: LazyLoadingService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.intersectionHandler = () => this.loadVideoSrc();
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

  private loadVideoSrc() {
    this.el.nativeElement.src = this.videoSrc;
  }

}
