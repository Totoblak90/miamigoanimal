import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { FlippingCardComponent } from '../flipping-card/flipping-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'highlited-articles-section',
  templateUrl: './highlited-articles-section.component.html',
  styleUrls: ['./highlited-articles-section.component.scss'],
  standalone: true,
  imports: [CommonModule, FlippingCardComponent, RouterModule]
})
export class HighlitedArticlesSectionComponent {

  @Input() spacing: 'normal' | 'large' = 'normal'
  @Input() showAll = false;
  @Input() filters: ('Gatos' | 'Perros' | 'Salud' | 'Adiestramiento' | 'Alimentacion')[] = []

  highlitedArticles = this.articlesService.articlesDB()

  get arrangedArticles() {
    return this.highlitedArticles
          .filter(article =>  article.destacado)
          .filter(article => article.categories.join(' ').toLowerCase().includes(this.filters.join(' ').toLowerCase()))
          .sort((a, b) => new Date(a.creation) > new Date(b.creation) ? 1 : -1)
          .slice(0, 6)
  }

  constructor(private articlesService: ArticlesService) {}

}
