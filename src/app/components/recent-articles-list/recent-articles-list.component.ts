import { Component, Input } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'recent-articles-list',
  templateUrl: './recent-articles-list.component.html',
  styleUrls: ['./recent-articles-list.component.scss']
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
