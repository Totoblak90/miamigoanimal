import { Component, Input } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss']
})
export class SocialIconsComponent {

  @Input() share = true;
  @Input() title = '';
  @Input() description = '';

  currentUrl = 'www.miamigoanimal.com' + this.router.url;

  get showAltColor() {
    return this.navigationSrv.navigationBg() == 'extra' || this.navigationSrv.navigationBg() == 'food'
  }

  constructor(
    private router: Router,
    private meta: Meta,
    private titleSrv: Title,
    private navigationSrv: NavigationService
  ) {

    const descriptionTagContent = this.meta.getTag('name=description')?.content;
    const titleTagContent = this.titleSrv.getTitle();

    this.title = titleTagContent || this.title;
    this.description = descriptionTagContent || this.description;

  }

}
