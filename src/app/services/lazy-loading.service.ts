import { isPlatformBrowser } from '@angular/common';
import { ElementRef, Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyLoadingService {

  private observer: IntersectionObserver | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            target.dispatchEvent(new CustomEvent('intersecting'));
            this.observer!.unobserve(target);
          }
        });
      }, {
        rootMargin: '250px 0px'
      });

    }
  }

  observe(target: Element) { this.observer ? this.observer.observe(target) : null; }
}
