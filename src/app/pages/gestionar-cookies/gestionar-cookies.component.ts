import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { googleScript } from 'src/app/app.component';
import { Cookies } from 'src/app/interfaces/cookies.interface';

@Component({
  selector: 'app-gestionar-cookies',
  templateUrl: './gestionar-cookies.component.html',
  styleUrls: ['./gestionar-cookies.component.scss']
})
export class GestionarCookiesComponent {

  cookiesForm = this.fb.group({
    google_analytics: [true],
    google_ads: [true]
  });

  private cookiesObj: Cookies | null = null;

  constructor(
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {}

  setSelectedCookies() {

    if (isPlatformBrowser(this.platformId))
    {
      const acceptedGoogleAds = this.cookiesForm.get('google_analytics')?.value || false;
      const acceptedGoogleAnalytics = this.cookiesForm.get('google_ads')?.value || false;

      this.cookiesObj = {
        acceptedGoogleAds,
        acceptedGoogleAnalytics,
        date: new Date()
      }

      localStorage.setItem('disclaimer', JSON.stringify(this.cookiesObj));

      // Si el usuario no aceptó ninguna cookie se lo redirige al home
      // Si el usuario aceptó alguna cookie se agregan los scripts
      if (!this.cookiesObj?.acceptedGoogleAds && !this.cookiesObj?.acceptedGoogleAnalytics) this.router.navigate(['/']);
      else this.createScripts();

    }

  }

  createScripts() {
    if (isPlatformBrowser(this.platformId))
    {
      // Si se aceptaron las cookies de google adsense se agrega el script
      if (this.cookiesObj?.acceptedGoogleAds)
      {

        const scriptGooglesyndication: googleScript = {
          url: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5105612698885287',
          async: false,
          innerHtml: '',
          crossOrigin: 'anonymous',
          id: 'google-adsense-tag'
        }

        this.apendScripts(scriptGooglesyndication);

      }

      // Si se aceptaron las cookies de google analytics se agrega el script
      if (this.cookiesObj?.acceptedGoogleAnalytics)
      {

        const scriptGoogleTagManager: googleScript = {
          url: 'https://www.googletagmanager.com/gtag/js?id=G-H7X6015BYD',
          async: false,
          innerHtml: '',
          crossOrigin: '',
          id: 'google-tag-manager'
        }

        this.apendScripts(scriptGoogleTagManager);

      }

    }
  }

  private apendScripts(scriptObj: googleScript) {
    const script = document.createElement('script');

    script.src = scriptObj.url;
    script.type = 'text/javascript';
    script.async = scriptObj.async;
    script.innerHTML = scriptObj.innerHtml;
    script.id = scriptObj.id;

    if (scriptObj.crossOrigin) { script.crossOrigin = scriptObj.crossOrigin; }

    // Una vez que el script de google analytics se cargue se configura
    script.onload = () => { if (script.id === 'google-tag-manager') { this.configureGtag(); } }

    this.document.head.appendChild(script);

    this.router.navigate(['/']);
  }

  private configureGtag() {
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    // @ts-ignore
    function gtag(){dataLayer.push(arguments);}
    // @ts-ignore
    gtag('js', new Date());
    // @ts-ignore
    gtag('config', 'G-H7X6015BYD');

  }

}
