import { Component, Input } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'highlited-articles-section',
  templateUrl: './highlited-articles-section.component.html',
  styleUrls: ['./highlited-articles-section.component.scss']
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
