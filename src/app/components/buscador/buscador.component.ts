import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Article } from 'src/app/interfaces/articles.interface';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent {
  searchArticlesForm: FormGroup = this.fb.group({
    searchTerm: ['']
  })

  searchResults: Article[] = [];

  constructor(private fb: FormBuilder, private articlesService: ArticlesService) {
    this.subscribeToSearchTermChange()

  }

  private subscribeToSearchTermChange() {
    this.searchArticlesForm.get('searchTerm')?.valueChanges.subscribe((searchTerm: string) => {
      if (searchTerm) {
        const articles = this.articlesService.articlesDB();
        const filteredArticles =  articles.filter(article => this.articlesService.filterArticleList(article, searchTerm))

        const highlightedArticles = filteredArticles.filter(article => article.destacado).sort((a, b) => new Date(a.creation) > new Date(b.creation) ? 1 : -1);
        const notHighlitedArticles = filteredArticles.filter(article => !article.destacado).sort((a, b) => new Date(a.creation) > new Date(b.creation) ? 1 : -1);

        this.searchResults = [...highlightedArticles, ...notHighlitedArticles]
      } else {
        this.searchResults = [];
      }
    })
  }

  resetSearch() {
    setTimeout(() => {
      this.searchArticlesForm.get('searchTerm')?.setValue('');
    }, 100)
  }

}
