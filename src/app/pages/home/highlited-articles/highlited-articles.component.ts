import { Component } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'highlited-articles',
  templateUrl: './highlited-articles.component.html',
  styleUrls: ['./highlited-articles.component.scss']
})
export class HighlitedArticlesComponent {

  highlitedArticles = this.articlesService.articlesDB()

  get arrangedArticles() {
    console.log(this.highlitedArticles)
    return this.highlitedArticles
          .filter(article =>  article.destacado)
          .sort((a, b) => new Date(a.creation) > new Date(b.creation) ? 1 : -1)
          .slice(0, 6)
  }

  constructor(private articlesService: ArticlesService) {}

}
