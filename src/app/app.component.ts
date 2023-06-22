import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Cookies } from './interfaces/cookies.interface';


// Creo el tipado
export type googleScript = {
  url: string,
  async: boolean,
  innerHtml: string,
  crossOrigin: string,
  id: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showPopupDisclaimer = false;

  cookiesObj: Cookies | null = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
    ) {}

  ngOnInit(): void { this.toggleDisclaimer(); }

  acceptedAllCookies() {
    // El usuario aceptó todas las cookies, se agregan todos los scripts
    if (isPlatformBrowser(this.platformId))
    {

      localStorage.setItem('disclaimer', JSON.stringify({
        acceptedGoogleAds: true,
        acceptedGoogleAnalytics: true,
        date: new Date()
      }));

      this.toggleDisclaimer();
    }
  }

  toggleDisclaimer() {

    if (isPlatformServer(this.platformId)) { return; }

    const routesToHideDisclaimer = ['cookies', 'politicas', 'terminos', 'gestionar-cookies'];
    const isHiddenRoute = routesToHideDisclaimer.some(route => window.location.href.includes(route));

    if (isHiddenRoute) { return; }

    // Busco en el localstorage lo que el usuario aceptó
    const cookiesString = localStorage.getItem('disclaimer');

    // Si el usuario ya aceptó las cookies se le agregan los scripts
    if (cookiesString)
    {

      this.cookiesObj = JSON.parse(cookiesString) as Cookies;

      if (!this.cookiesObj) {
        this.showPopupDisclaimer = true;
        return;
      }


      // Si no se guardó bien el objeto se le vuelve a mostrar al usuario el popup
      const acceptedDate = new Date(this.cookiesObj.date)
      if (!acceptedDate) {
        this.showPopupDisclaimer = true;
        return;
      }

      // Si la fecha actual es mayor a la fecha límite muestro el popup
      let limitAfterAccepted;

      if (!this.cookiesObj.acceptedGoogleAds || !this.cookiesObj.acceptedGoogleAnalytics)
        limitAfterAccepted = new Date(acceptedDate.setDate(acceptedDate.getDate() + 1));

      else
        limitAfterAccepted = new Date(acceptedDate.setMonth(acceptedDate.getMonth() + 6));

      const currentDate = new Date();

      this.showPopupDisclaimer =  currentDate >= limitAfterAccepted;

      // Acá el usuario ya tiene las cookies aceptadas entonces agrego los scripts
      if (!this.showPopupDisclaimer) { this.createScripts(); }

    }

    // Si el usuario no aceptó las cookies se le muestra el popup
    else { this.showPopupDisclaimer = true; }

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

    this.showPopupDisclaimer = false;

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

    // DEJO TODO ESTO PARA DESPUÉS POR SI ANALYTICS NO LO CONFIGURA SOLO
    // // Eventos para vista de página
    // // @ts-ignore
    // gtag('event', 'page_view', {
    //   'page_path': this.router.url,
    //   'page_title': this.titleSrv.getTitle(),
    //   'page_location': window.location.href
    // })


    // // Eventos para botones
    // // @ts-ignore
    // Array.from(this.document.getElementsByTagName('button')).forEach((button, index) => {
    //   button.addEventListener('click', function(ev) {
    //     // Usa el texto del botón como etiqueta del evento
    //     const eventLabel = this.innerText || `button_${index}`;
    //     console.log(`button event label: ${eventLabel}`)
    //     // @ts-ignore
    //     gtag('event', 'click', {
    //       'event_category': 'button',
    //       'event_label': eventLabel
    //     });
    //   });
    // });

    // // Eventos para formularios
    // // @ts-ignore
    // Array.from(this.document.getElementsByTagName('form')).forEach((form, index) => {
    //   form.addEventListener('submit', function(ev) {
    //     // Usa el índice del formulario como etiqueta del evento
    //     const eventLabel = `form_${index}`;
    //     // @ts-ignore
    //     gtag('event', 'submit', {
    //       'event_category': 'form',
    //       'event_label': eventLabel
    //     });
    //   });
    // });

    // // Eventos para enlaces
    // // @ts-ignore
    // Array.from(this.document.getElementsByTagName('a')).forEach((form, index) => {
    //   form.addEventListener('click', function(ev) {
    //     // Usa el índice del enlace como etiqueta del evento
    //     const eventLabel = `anchor_${index}`;
    //     // @ts-ignore
    //     gtag('event', 'submit', {
    //       'event_category': 'form',
    //       'event_label': eventLabel
    //     });
    //   });
    // });
  }

}
