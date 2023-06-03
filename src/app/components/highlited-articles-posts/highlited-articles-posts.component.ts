import { Component, Input } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'highlited-articles-for-posts',
  templateUrl: './highlited-articles-posts.component.html',
  styleUrls: ['./highlited-articles-posts.component.scss']
})
export class HighlitedArticlesPostsComponent {

  @Input() filters: ('Gatos' | 'Perros' | 'Salud' | 'Adiestramiento' | 'Alimentacion')[] = []

  highlitedArticles = this.articlesService.articlesDB()

  get type() {
    return this.filters.includes('Gatos') ? 'cat' : 'dog'
  }


  get arrangedArticles() {
    return this.highlitedArticles
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

            return article.destacado
          })
          .sort((a, b) => a.creation > b.creation ? 1 : -1)
          .slice(0, 6)
  }

  constructor(private articlesService: ArticlesService) { }

}
