import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  private renderer: Renderer2 = this.rendererFactory.createRenderer(null, null);

  constructor(
    private title: Title, private meta: Meta,
    private rendererFactory: RendererFactory2,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  setMetaTags( title = '', description = '', canonical = '', follow = true, author = 'Tobias Blaksley', )
  {

    if (!title) { title = 'Mi amigo animal - Consejos y Guías Detalladas para tus Mascotas'}
    if (!description) { description = `Ya sea que seas un nuevo dueño de mascota o un experto, aquí encontrarás todo lo que necesitas saber sobre el perros y gatos. Descubre nuestros recursos y únete a nuestra comunidad de amantes de las mascotas.` }
    if (!canonical) { canonical = 'https://miamigoanimal.com' + this.router.url }

    this.addBasicTags(title, description, author, follow);
    this.addTwitterTags(title, description);
    this.addFacebookTags(title, description, canonical);

    this.removeCanonical('rel=\'canonical\'');
    if (isPlatformBrowser(this.platformId)) { this.addCanonical({ rel: 'canonical', href: canonical }) }

  }

  private addBasicTags(title: string, description: string, author: string, follow: boolean) {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description })
    this.meta.updateTag({ name: 'author', content: author || 'Tobias Blaksley' })

    if (follow) { this.meta.updateTag({ name: 'robots', content: 'index, follow' }) }
    else { this.meta.updateTag({ name: 'robots', content: 'nofollow' }) }
  }

  private addTwitterTags(title: string, description: string) {
    this.meta.addTag({ name: 'twitter:card', content: 'summary' })
    this.meta.addTag({ name: 'twitter:site', content: '@tobiblaksley' })
    this.meta.addTag({ name: 'twitter:title', content: title })
    this.meta.addTag({ name: 'twitter:description', content: description })
    this.meta.addTag({ name: 'twitter:image', content: 'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/destacados-extra.webp?raw=true' })
  }

  private addFacebookTags(title: string, description: string, canonical: string) {
        this.meta.addTag({ property: 'og:type', content: 'website' })
        this.meta.addTag({ property: 'og:url', content: canonical })
        this.meta.addTag({ property: 'og:title', content: title })
        this.meta.addTag({ property: 'og:description', content: description })
        this.meta.addTag({ property: 'og:image', content: 'https://github.com/Totoblak90/miamigoanimal-images1/blob/master/destacados-extra.webp?raw=true'})
  }

  private addCanonical(tag: any) {
    if (isPlatformBrowser(this.platformId))
    {
      const link = this.renderer.createElement('link');
      Object.keys(tag).forEach(key => { this.renderer.setAttribute(link, key, tag[key]); });
      this.renderer.appendChild(this.document.head, link);

    }
  }

  private removeCanonical(attrs: any) {
    if (isPlatformBrowser(this.platformId))
    {
      const linkElements = this.document.head.getElementsByTagName('link');
      for (let i = 0; i < linkElements.length; i++)
      {

        let match = true;

        Object.keys(attrs).forEach(key => { if (linkElements[i].getAttribute(key) !== attrs[key]) { match = false; } });

        if (match) { this.renderer.removeChild(this.document.head, linkElements[i]); }

      }
    }
  }

}
