import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticlesService } from 'src/app/services/articles.service';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-aaa-all',
  templateUrl: './aaa-all.component.html',
  styleUrls: ['./aaa-all.component.scss']
})
export class AaaAllComponent {

  searchArticlesForm: FormGroup = this.fb.group({
    searchTerm: ['']
  })

  allArticles = this.articlesService.articlesDB();

  pageSize = 25; // Número de artículos por página
  currentPage = 0; // Página actual
  pagedArticles: any[] = []; // Artículos de la página actual


  get arrangedArticles() {
    let articles = this.allArticles;

    // Filtrar los artículos si hay un término de búsqueda
    if (this.searchArticlesForm.get('searchTerm')?.value) {
      articles = articles.filter(article => this.articlesService.filterArticleList(article, this.searchArticlesForm.get('searchTerm')?.value));
    }

    const highlightedArticles = articles.filter(article => article.destacado).sort((a, b) => new Date(a.creation) > new Date(b.creation) ? 1 : -1);
    const notHighlitedArticles = articles.filter(article => !article.destacado).sort((a, b) => new Date(a.creation) > new Date(b.creation) ? 1 : -1);

    return [...highlightedArticles, ...notHighlitedArticles]
  }

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService,
    private articlesService: ArticlesService,
    private fb: FormBuilder,
  ) {
    this._setMetaTags();
    this.navigationService.navigationBg.set('extra');
    this.subscribeToSearchTermChange();
  }

  ngOnInit() {
    this.updatePage();
  }

  private _setMetaTags() {
    this.meta.setMetaTags(
      '¡Buscá entre todos nuestros artículos sobre mascotas!',
      'Explora nuestros artículos y encuentra todo lo que necesitas saber sobre tus mascotas. ¡La información que buscas, al alcance de tu mano!',
    )
  }

  private subscribeToSearchTermChange() {
    this.searchArticlesForm.get('searchTerm')?.valueChanges.subscribe((searchTerm: string) => {
      this.currentPage = 0; // Volver a la primera página cuando se cambia el término de búsqueda
      this.updatePage();
    })
  }

  private updatePage() {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.pagedArticles = this.arrangedArticles.slice(start, end);
  }

  nextPage() {
    if ((this.currentPage + 1) * this.pageSize < this.arrangedArticles.length) {
      this.currentPage++;
      this.updatePage();
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePage();
    }
  }

}
