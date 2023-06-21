import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UtilitiesService } from './utilities.service';
import { PerrosService } from './perros.service';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  private renderer: Renderer2 = this.rendererFactory.createRenderer(null, null);

  constructor(
    private title: Title,
    private meta: Meta,
    private rendererFactory: RendererFactory2,
    private router: Router,
    private utilitiesService: UtilitiesService,
    private perrosService: PerrosService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  setMetaTags( title = '', description = '', canonical = '', follow = true, author = 'Tobias Blaksley', keywords = '')
  {

    if (!title) { title = 'Esfera mascota - Consejos y Guías Detalladas para tus Mascotas'}
    if (!description) { description = `Ya sea que seas un nuevo dueño de mascota o un experto, aquí encontrarás todo lo que necesitas saber sobre el perros y gatos. Descubre nuestros recursos y únete a nuestra comunidad de amantes de las mascotas.` }
    if (!canonical) { canonical = 'https://esferamascota.com' + this.router.url }

    this.addBasicTags(title, description, author, follow, keywords);
    this.addTwitterTags(title, description);
    this.addFacebookTags(title, description, canonical);

    this.removeCanonical({rel: 'canonical'});
    this.addCanonical({ rel: 'canonical', href: canonical })

  }

  private addBasicTags(title: string, description: string, author: string, follow: boolean, keywords?: string) {

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description })
    this.meta.updateTag({ name: 'author', content: author || 'Tobias Blaksley' })

    if (keywords) this.meta.updateTag({ name: 'keywords', content: keywords})

    if (follow) { this.meta.updateTag({ name: 'robots', content: 'index, follow' }) }
    else { this.meta.updateTag({ name: 'robots', content: 'noindex, follow' }) }

  }

  private addTwitterTags(title: string, description: string) {
    const selectedImage = this.selectImage(title);
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' })
    this.meta.updateTag({ name: 'twitter:site', content: '@EsferaMascota' })
    this.meta.updateTag({ name: 'twitter:title', content: title })
    this.meta.updateTag({ name: 'twitter:description', content: description })
    this.meta.updateTag({ name: 'twitter:image', content: selectedImage || this.utilitiesService.selectImage('default') })
  }

  private addFacebookTags(title: string, description: string, canonical: string) {
    const selectedImage = this.selectImage(title);
    this.meta.updateTag({ property: 'og:type', content: 'website' })
    this.meta.updateTag({ property: 'og:url', content: canonical })
    this.meta.updateTag({ property: 'og:title', content: title })
    this.meta.updateTag({ property: 'og:description', content: description })
    this.meta.updateTag({ property: 'og:image', content: selectedImage || this.utilitiesService.selectImage('default') })
  }

  private selectImage(title: string) {
    const dogImage = this.setDogBreedImage(title);

    if (dogImage) { return dogImage }
    else {

      if (title.toLocaleLowerCase().includes('perro') || title.toLocaleLowerCase().includes('perros'))
        { return this.utilitiesService.selectImage('dog', '', true) }

      else if (title.toLocaleLowerCase().includes('gato') || title.toLocaleLowerCase().includes('gatos'))
        { return this.utilitiesService.selectImage('cat', '', true) }

      else { return this.utilitiesService.selectImage('default', '', true) }

    }

  }

  private setDogBreedImage(title: string) {
    const perrosList = Object.values(this.perrosService.dogListSignal());

    // Elimina los signos de puntuación del título
    const titleWithoutPunctuation = title.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();

    for (let i = 0; i < perrosList.length; i++)
    {
      // Elimina los signos de puntuación del título
      const nameWithoutPunctuation = perrosList[i].name.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();

      if ( titleWithoutPunctuation.includes(nameWithoutPunctuation) )
      {
        return perrosList[i].image.url
      }
    }

    return ''
  }

  private addCanonical(tag: any) {
    if (isPlatformBrowser(this.platformId))
    {

      const link = this.renderer.createElement('link');
      Object.keys(tag).forEach(key => { this.renderer.setAttribute(link, key, tag[key]); });
      this.renderer.appendChild(this.document.head, link);

    }
  }

  private removeCanonical(attrs: {rel: 'canonical'}) {
    if (isPlatformBrowser(this.platformId))
    {
      const linkElements = this.document.head.getElementsByTagName('link');
      for (let i = 0; i < linkElements.length; i++)
      {

        let match = true;

        Object.keys(attrs).forEach(key => { if (linkElements[i].getAttribute(key) !== attrs.rel) { match = false; } });

        if (match) { this.renderer.removeChild(this.document.head, linkElements[i]); }

      }
    }
  }

}
