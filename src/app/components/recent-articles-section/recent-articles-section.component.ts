import { Component, Input } from '@angular/core';

@Component({
  selector: 'recent-articles-section',
  templateUrl: './recent-articles-section.component.html',
  styleUrls: ['./recent-articles-section.component.scss']
})
export class RecentArticlesSectionComponent {

  @Input() filters: ('Gatos' | 'Perros' | 'Salud' | 'Adiestramiento' | 'Alimentacion')[] = ['Gatos', 'Perros', 'Salud', 'Adiestramiento', 'Alimentacion'];

  constructor() { }

}
