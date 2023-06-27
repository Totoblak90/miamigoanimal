import { Component, Input } from '@angular/core';
import { LastArticlesComponent } from '../recent-articles-list/recent-articles-list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'recent-articles-section',
  templateUrl: './recent-articles-section.component.html',
  styleUrls: ['./recent-articles-section.component.scss'],
  standalone: true,
  imports: [LastArticlesComponent, RouterModule, CommonModule]
})
export class RecentArticlesSectionComponent {

  @Input() filters: ('Gatos' | 'Perros' | 'Salud' | 'Adiestramiento' | 'Alimentacion')[] = ['Gatos', 'Perros', 'Salud', 'Adiestramiento', 'Alimentacion'];

  constructor() { }

}
