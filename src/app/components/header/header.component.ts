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
  @Input() bckColour?: 'default' | 'dog' | 'cat' | 'health' | 'train' | 'food' | 'yo' = 'default';

  get backgroundColour(): string {

    const cssClass = {
      default: 'bg-default',
      dog: 'bg-dog',
      cat: 'bg-cat',
      health: 'bg-health',
      train: 'bg-train',
      food: 'bg-food',
      yo: 'bg-yo'
    }

    return cssClass[this.bckColour || 'default']

  }
}
