import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss']
})
export class SocialIconsComponent {

  currentUrl = 'www.miamigoanimal.com/' + this.router.url;
  @Input() title = '';
  @Input() description = '';

  constructor(private router: Router) {}

}
