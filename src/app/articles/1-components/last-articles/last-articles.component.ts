import { Component, Input } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'last-articles-for-posts',
  templateUrl: './last-articles.component.html',
  styleUrls: ['./last-articles.component.scss']
})
export class LastArticlesComponent {
  @Input() filters: ('Gatos' | 'Perros' | 'Salud' | 'Adiestramiento' | 'Alimentacion')[] = [];
  @Input() type: 'cat' | 'dog' = 'dog';

  allArticles = this.articlesService.articlesDB();

  get arrangedArticles() {
    return this.allArticles
          .map(article => {
            article.creation = new Date(article.creation)
            return article;
          })
          .filter(article =>  {

            // Solo incluir el artículo si todas las categorías de filtro están presentes
            for (let i = 0; i < this.filters.length; i++) {
              if (!article.categories.includes(this.filters[i])) {
                return false; // No incluir este artículo
              }
            }

            return article
          })
          .sort((a, b) => a.creation > b.creation ? 1 : -1)
          .slice(0, 4)
  }

  constructor(private articlesService: ArticlesService) {}

}
