import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'miamigoanimal';

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.toggleDisclaimer();
  }

  private toggleDisclaimer() {
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

  private showPopup(): void {
    const link = this.renderer.createElement('a');
    this.renderer.setAttribute(link, 'href', '#popup-disclaimer');
    link.click();
  }

}
