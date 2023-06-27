import { Component, Input } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { RecentArticleCardComponent } from '../recent-article-card/recent-article-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'recent-articles-list',
  templateUrl: './recent-articles-list.component.html',
  styleUrls: ['./recent-articles-list.component.scss'],
  standalone: true,
  imports: [RecentArticleCardComponent, CommonModule]
})
export class LastArticlesComponent {
  @Input() filters: ('Gatos' | 'Perros' | 'Salud' | 'Adiestramiento' | 'Alimentacion')[] = [];

  allArticles = this.articlesService.articlesDB();

  get arrangedArticles() {
    return this.allArticles
          .filter(article =>  {

            // Solo incluir el artículo si todas las categorías de filtro están presentes
            for (let i = 0; i < this.filters.length; i++) {
              if (article.categories.includes(this.filters[i])) {
                return true; // Incluir este artículo
              }

              if (article.sections.includes(this.filters[i])) {
                return true; // Incluir este artículo
              }
            }

            return false // No incluir este artículo
          })
          .sort((a, b) => new Date(a.creation) > new Date(b.creation) ? -1 : 1)
          .slice(0, 6)
  }

  constructor(private articlesService: ArticlesService) {}

}
