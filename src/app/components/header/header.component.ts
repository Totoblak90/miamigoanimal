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
  @Input() bckColour?: 'default' | 'dog' | 'cat' = 'default';

  get backgroundColour(): string {

    const cssClass = {
      default: 'bg-default',
      dog: 'bg-dog',
      cat: 'bg-cat',
    }

    return cssClass[this.bckColour || 'default']

  }
}
