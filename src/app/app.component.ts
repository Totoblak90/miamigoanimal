import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

// Creo el tipado
type googleScript = {
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

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
    ) {}

  ngOnInit(): void { this.toggleDisclaimer(); }

  toggleDisclaimer() {

    if (!isPlatformBrowser(this.platformId)) { return; }

    const excludedRoutes = ['cookies', 'politicas', 'terminos', 'sobre-mi'];
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
        async: false,
        innerHtml: '',
        crossOrigin: '',
        id: 'google-tag-manager'
      }

      const scriptGooglesyndication: googleScript = {
        url: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5105612698885287',
        async: false,
        innerHtml: '',
        crossOrigin: 'anonymous',
        id: 'google-adsense'
      }

      this.apendScripts(scriptGoogleTagManager);
      this.apendScripts(scriptGooglesyndication);
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

    script.onload = () => { if (script.id === 'google-tag-manager') { this.configureGtag(); } }

    this.document.head.appendChild(script);

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
