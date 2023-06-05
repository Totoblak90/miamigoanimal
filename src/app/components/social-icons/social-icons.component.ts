import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss']
})
export class SocialIconsComponent {

  @ViewChild('closeButton') closeButton: ElementRef<HTMLSpanElement> | undefined;

  @Input() collapsed = false;
  @Input() title = '';
  @Input() description = '';

  uncollapse = false;

  currentUrl = 'www.esferamascota.com' + this.router.url;

  fadeOutIcons = false;

  get showAltColor() {
    return this.navigationSrv.navigationBg() === 'extra' || this.navigationSrv.navigationBg() === 'food' || this.navigationSrv.navigationBg() === 'dog'
  }

  constructor(
    private router: Router,
    private meta: Meta,
    private titleSrv: Title,
    private navigationSrv: NavigationService,
    private renderer: Renderer2
  ) {

    const descriptionTagContent = this.meta.getTag('name=description')?.content ||
                                  `Para todos los amantes de las mascotas, descubre todo sobre perros y gatos. Explora nuestros recursos y únete a nuestra comunidad.`;

                                  const titleTagContent = this.titleSrv.getTitle();

    this.title = titleTagContent || this.title;
    this.description = descriptionTagContent || this.description;

  }

  toggleCollapse(event: Event, socialNetwork: 'twitter' | 'lkd' | 'fb' | 'youtube') {
    event.preventDefault();
    event.stopPropagation();

    let url = '';

    switch (socialNetwork) {
      case 'twitter':
        url = `https://twitter.com/share?url=${this.currentUrl}&text=${this.description}&via=tobiblaksley`;
        break;
      case 'lkd':
        url = `https://www.linkedin.com/shareArticle?mini=true&url=${this.currentUrl}&title=${this.title}&summary=${this.description}&source='Esfera mascota'`;
        break;
      case 'fb':
        url = `https://www.facebook.com/sharer/sharer.php?u=${this.currentUrl}`;
        break;
      case 'youtube':
        url = `https://www.youtube.com/@ExpertoAnimal`;
    }

    const a = this.renderer.createElement('a');
    a.href = `${url}`;
    a.target = '_blank';
    a.click();

    setTimeout(() => { this.closeShareBox(this.closeButton?.nativeElement) }, 50);
  }

  closeShareBox(el?: HTMLSpanElement) {
    if (!el) {
      this.fadeOutIcons = false;
      this.uncollapse = false;
      return;
    }

    this.fadeOutIcons = true;
    el.onanimationend = () => {
      this.fadeOutIcons = false;
      this.uncollapse = false;
    }
  }

}
