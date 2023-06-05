import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'esferamascota';

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.toggleDisclaimer();
  }

  private toggleDisclaimer() {
    if (isPlatformBrowser(this.platformId))
    {

      const termsAccepted = localStorage.getItem('disclaimer');
      let shouldShowPopup = true;

      if (termsAccepted)
      {

        const expirationDate = new Date(JSON.parse(termsAccepted).date);

        if (expirationDate)
        {
          const expirationMonth = expirationDate.getMonth();
          const actualMonth = new Date().getMonth();
          shouldShowPopup = expirationMonth !== actualMonth;
        }

      }

      if (shouldShowPopup) { this.showPopup(); }

    }

  }

  private showPopup(): void {
    const link = this.renderer.createElement('a');
    this.renderer.setAttribute(link, 'href', '#popup-disclaimer');
    link.click();
  }

}
