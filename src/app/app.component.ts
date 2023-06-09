import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Creo el tipado
type googleScript = {
  url: string,
  async: boolean,
  innerHtml: string,
  crossOrigin: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showPopupDisclaimer = false;

  title = 'esferamascota';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    ) {}

  ngOnInit(): void { this.toggleDisclaimer(); }

  toggleDisclaimer() {

    if (!isPlatformBrowser(this.platformId)) { return; }

    const excludedRoutes = ['cookies', 'politicas', 'terminos'];
    const currentUrl = window.location.href;

    // Si la ruta actual está excluida no se muestra el popup
    if (excludedRoutes.some(route => currentUrl.includes(route))) { return; }

    // Si no se aceptaron las cookies se le muestra al usuario el popup
    const termsAccepted = localStorage.getItem('disclaimer');
    if (!termsAccepted) {
      this.showPopupDisclaimer = true;
      return;
    }

    // Si no se guardó bien el objeto se le vuelve a mostrar al usuario el popup
    const acceptedDate = new Date(JSON.parse(termsAccepted).date);
    if (!acceptedDate) {
      this.showPopupDisclaimer = true;
      return;
    }

    // Si pasaron 6 meses de la aceptación se le vuelve a mostrar al usuario el popup
    const sixMonthsFromAccepted = new Date(acceptedDate.setMonth(acceptedDate.getMonth() + 6));
    const currentDate = new Date();
    this.showPopupDisclaimer = currentDate >= sixMonthsFromAccepted;

    // Acá el usuario ya tiene las cookies aceptadas entonces agrego los scripts
    if (!this.showPopupDisclaimer) { this.createScripts(); }
  }

  saveLocalhost() {
    if (isPlatformBrowser(this.platformId))
    {

      localStorage.setItem('disclaimer', JSON.stringify({
        accepted: true,
        date: new Date()
      }));

      // El usuario aceptó las cookies, se agregan los scripts
      this.createScripts();
    }
  }



  createScripts() {
    if (isPlatformBrowser(this.platformId))
    {
      // Agregar Google Analytics y Google Ads scripts
      const scriptGoogleTagManager: googleScript = {
        url: 'https://www.googletagmanager.com/gtag/js?id=G-H7X6015BYD',
        async: true,
        innerHtml: '',
        crossOrigin: '',
      }

      const scriptGooglesyndication: googleScript = {
        url: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5105612698885287',
        async: true,
        innerHtml: '',
        crossOrigin: 'anonymous',
      }

      const scriptAnalytics: googleScript = {
        url: '',
        async: true,
        innerHtml: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-H7X6015BYD');
        `,
        crossOrigin: '',
      }

      this.apendScripts(scriptGoogleTagManager);
      this.apendScripts(scriptGooglesyndication);
      this.apendScripts(scriptAnalytics);
    }
  }

  private apendScripts(scriptObj: googleScript) {
    const script = document.createElement('script');

    script.src = scriptObj.url;
    script.async = scriptObj.async;
    script.innerHTML = scriptObj.innerHtml;

    if (scriptObj.crossOrigin) { script.crossOrigin = scriptObj.crossOrigin; }

    this.document.head.appendChild(script);
  }


}
