import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, debounceTime, takeUntil } from 'rxjs';
import { Dog } from 'src/app/interfaces/dog.interface';
import { ArticlesService } from 'src/app/services/articles.service';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { PerrosService } from 'src/app/services/perros.service';

@Component({
  selector: 'aaa-article-search',
  templateUrl: './aaa-article-search.component.html',
  styleUrls: ['./aaa-article-search.component.scss']
})
export class AaaArticleSearchComponent implements OnInit, OnDestroy {

  searchForm: FormGroup = this.fb.group({
    searchTerm: [''],
    searchType: ['razas']
  })

  allArticles = this.articlesService.articlesDB();
  breedArticles = Object.values(this.perrosService.dogListSignal()).map(breed => ({...breed, type: 'dog'})).sort((a, b) => a.name > b.name ? 1 : -1);

  pageSize = 12; // Número de artículos por página
  currentPage = 0; // Página actual
  pagedArticles: any[] = []; // Artículos de la página actual

  private _destroy$ = new Subject<boolean>();


  get arrangedArticles() {

    let searchResults = [];

    if (this.searchForm.get('searchType')?.value === 'articulos')
    {

      searchResults = [...this.allArticles];

      // Filtrar los artículos si hay un término de búsqueda
      if (this.searchForm.get('searchTerm')?.value) {
        searchResults = searchResults.filter(article => this.articlesService.filterArticleList(article, this.searchForm.get('searchTerm')?.value));
      }

      const highlightedArticles = searchResults.filter(article => article.destacado).sort((a, b) => new Date(a.creation) > new Date(b.creation) ? 1 : -1);
      const notHighlitedArticles = searchResults.filter(article => !article.destacado).sort((a, b) => new Date(a.creation) > new Date(b.creation) ? 1 : -1);
      const sortedArticles = [...highlightedArticles, ...notHighlitedArticles]

      return sortedArticles.map(article => {
        const articleType = article.categories.includes('Perros') ? 'dog' : 'cat';
        let selectedImage: string | undefined;
        if (articleType === 'dog') selectedImage = this.perrosService.setDogBreedImage(article.recent_card_title, articleType, true)

        return {
          title: article['card-heading'],
          topic: article.sections,
          type: article.categories.includes('Gatos') ? 'cat' : 'dog',
          href: '/' + article.url,
          queryParams: {},
          img: selectedImage || '',
          defaultRedirect: true
        }
      })

    }
    else
    {

      searchResults = [...this.breedArticles]

      // Filtrar los artículos si hay un término de búsqueda
      if (this.searchForm.get('searchTerm')?.value) {
        searchResults = this.perrosService
                  .filterBySearchTerm((searchResults as Dog[]), this.searchForm.get('searchTerm')?.value)
                  .map(breed => ({...breed, type: 'dog'}))
      }


      return searchResults.map(breed => {
        return {
          title: breed.name,
          topic: breed.temperament,
          type: breed.type as 'cat' | 'dog',
          href: ['/perros', breed.id],
          queryParams: { raza: breed.name.split(' ').join('-').toLocaleLowerCase() },
          img: breed.image.url || '',
          defaultRedirect: false
        }
      })

    }

  }

  get placeholder() {
    return this.searchForm.get('searchType')?.value === 'articulos' ? 'Buscar artículos' : 'Buscar razas';
  }

  constructor(
    private meta: MetaService,
    private navigationService: NavigationService,
    private articlesService: ArticlesService,
    private perrosService: PerrosService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    const preselectedSearchType = this.activatedRoute.snapshot.queryParams['type'];
    if (preselectedSearchType === 'articulos' || preselectedSearchType === 'razas')
       { this.searchForm.get('searchType')?.setValue(preselectedSearchType); }

    this._setMetaTags();
    this.navigationService.navigationBg.set('extra');
    this.subscribeToSearchTermChange();
    this.subscribeToSearchTypeChange();
  }

  ngOnInit() {
    this.updatePage();
  }

  private _setMetaTags() {
    this.meta.setMetaTags(
      '¡Buscá entre todos nuestros artículos sobre mascotas!',
      'Explora nuestros artículos y encuentra todo lo que necesitas saber sobre tus mascotas. ¡La información que buscas, al alcance de tu mano!',
      'https://esferamascota.com/post/search-post',
      false,
    )
  }

  private subscribeToSearchTypeChange() {
    this.searchForm.get('searchType')?.valueChanges
    .pipe(takeUntil(this._destroy$))
    .subscribe((searchType: string) => {
      this.currentPage = 0; // Volver a la primera página cuando se cambia el tipo de búsqueda
      this.updatePage();
    })
  }

  private subscribeToSearchTermChange() {
    this.searchForm.get('searchTerm')?.valueChanges
    .pipe(takeUntil(this._destroy$), debounceTime(400))
    .subscribe((searchTerm: string) => {
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

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

}
