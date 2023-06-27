import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'go-up',
  templateUrl: './go-up.component.html',
  styleUrls: ['./go-up.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class GoUpComponent {

  get show() {
    if (isPlatformBrowser(this.platformId))
    {
      return window.scrollY > 20;
    }
    return false;
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  goUp() {
    if (isPlatformBrowser(this.platformId))
    {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

}
