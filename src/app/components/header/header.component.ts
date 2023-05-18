import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() mainTitle: string = '';
  @Input() secondaryTitle = '';
  @Input() cta?: string = '';

}
