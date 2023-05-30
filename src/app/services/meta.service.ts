import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  private renderer: Renderer2 = this.rendererFactory.createRenderer(null, null);

  constructor(private title: Title, private meta: Meta, private rendererFactory: RendererFactory2,  @Inject(DOCUMENT) private document: Document) {}

  setMetaTags(title: string, description: string, author = 'Tobias Blaksley', follow = true, keywords = 'Mi amigo animal, Perros, Gatos', canonical= '') {
    if (!title) { title = 'Mi amigo animal - Consejos y Guías Detalladas para tus Mascotas'}
    if (!description) { description = `Ya sea que seas un nuevo dueño de mascota o un experto, aquí encontrarás todo lo que necesitas saber sobre el perros y gatos. Descubre nuestros recursos y únete a nuestra comunidad de amantes de las mascotas.` }

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description })
    this.meta.updateTag({ name: 'author', content: author || 'Tobias Blaksley' })
    this.meta.updateTag({ name: 'keywords', content: keywords })

    if (follow) { this.meta.updateTag({ name: 'robots', content: 'index, follow' }) }
    else { this.meta.updateTag({ name: 'robots', content: 'nofollow' }) }

    this.removeCanonical('rel=\'canonical\'');
    this.addCanonical({ rel: 'canonical', href: canonical || window.location.href });

  }

  addCanonical(tag: any) {
    const link = this.renderer.createElement('link');
    Object.keys(tag).forEach(key => { this.renderer.setAttribute(link, key, tag[key]); });
    this.renderer.appendChild(this.document.head, link);
  }

  removeCanonical(attrs: any) {
    const linkElements = this.document.head.getElementsByTagName('link');
    for (let i = 0; i < linkElements.length; i++)
    {

      let match = true;

      Object.keys(attrs).forEach(key => { if (linkElements[i].getAttribute(key) !== attrs[key]) { match = false; } });

      if (match) { this.renderer.removeChild(this.document.head, linkElements[i]); }

    }
  }

}
