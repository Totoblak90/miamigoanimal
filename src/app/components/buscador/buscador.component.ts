import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SearchResult } from 'src/app/interfaces/buscador.interface';
import { Cat } from 'src/app/interfaces/cat.interface';
import { Dog } from 'src/app/interfaces/dog.interface';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ArticlesService } from 'src/app/services/articles.service';
import { GatosService } from 'src/app/services/gatos.service';
import { PerrosService } from 'src/app/services/perros.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, PipesModule]
})
export class BuscadorComponent implements OnDestroy {

  searchArticlesForm: FormGroup = this.fb.group({
    'searchTerm-global': [''],
    searchType: ['razas']
  })

  searchResults: SearchResult[] = [];

  collapsed = true;

  private _destroy$ = new Subject<boolean>();

  constructor(
    private fb: FormBuilder,
    private elementRef: ElementRef,
    private articlesService: ArticlesService,
    private perrosService: PerrosService,
    private gatosService: GatosService,
    private utilitiesService: UtilitiesService,
    private router: Router
  ) {
    this.subscribeToSearchTermChange();
    this.subscribeToFiltersChange();
  }

  // Search

  private subscribeToFiltersChange() {
    this.searchArticlesForm.get('searchType')?.valueChanges
    .pipe(takeUntil(this._destroy$))
    .subscribe((filter: 'articulos' | 'razas') => {
      const searchTerm = this.searchArticlesForm.get('searchTerm-global')!.value;

      if (searchTerm) {

        if (filter == 'razas') { this.searchByBreed(searchTerm) }
        else { this.searchByPost(searchTerm) }

      }
    })
  }

  private subscribeToSearchTermChange() {
    this.searchArticlesForm.get('searchTerm-global')?.valueChanges
    .pipe(takeUntil(this._destroy$))
    .subscribe((searchTerm: string) => {
      if (searchTerm) {

        if (this.searchArticlesForm.get('searchType')!.value === 'articulos')
        { this.searchByPost(searchTerm) }

        else { this.searchByBreed(searchTerm) }

      } else {
        this.searchResults = [];
      }
    })
  }

  searchByPost(searchTerm: string) {

    const articles = this.articlesService.articlesDB();
    const filteredArticles =  articles.filter(article => this.articlesService.filterArticleList(article, searchTerm))

    const highlightedArticles = filteredArticles.filter(article => article.destacado).sort((a, b) => new Date(a.creation) > new Date(b.creation) ? 1 : -1);
    const notHighlitedArticles = filteredArticles.filter(article => !article.destacado).sort((a, b) => new Date(a.creation) > new Date(b.creation) ? 1 : -1);

    this.searchResults = [...highlightedArticles, ...notHighlitedArticles].map(article =>
      {
        const articleType = article.categories.includes('Perros') ? 'dog' : 'cat';

        let selectedImage: string | undefined;

        if (articleType === 'dog') selectedImage = this.perrosService.setDogBreedImage(article.recent_card_title)

        return {
          title: article.recent_card_title,
          url: ['/post', article.url],
          img: selectedImage || this.utilitiesService.selectImage(articleType, undefined, true)
        }
      }
    )

  }

  searchByBreed(searchTerm: string) {
    // @ts-ignore
    const breedsArticleList: (Cat | Dog)[] = Object.values(this.perrosService.dogListSignal()).concat(Object.values(this.gatosService.catListSignal()))

    const filteredPerrosAritcleList = this.perrosService.filterBySearchTerm(breedsArticleList.filter(breed => typeof breed.id === 'number') as Dog[], searchTerm)
    const filteredGatosArticleList = this.gatosService.filterBySearchTerm(breedsArticleList.filter(breed => typeof breed.id === 'string') as Cat[], searchTerm)

    this.searchResults =
      filteredPerrosAritcleList.map(dog => ({
        title: dog.name,
        url:[ '/perros', dog.id.toString()],
        queryParams: { raza: dog.name.split(' ').join('-').toLocaleLowerCase() },
        img: dog.image.url
      }))
      .concat(
        filteredGatosArticleList.map(cat => ({
          title: cat.name,
          url:[ '/gatos', cat.id],
          queryParams: { raza: cat.name.split(' ').join('-').toLocaleLowerCase() },
          img: cat.image
        }))
      )
      .sort((a, b) => a.title > b.title ? 1 : -1)
  }

  onKeyUpEnter() {
    if (this.searchResults.length) {
      if (this.searchArticlesForm.get('searchType')!.value === 'articulos')
      {
        this.router.navigate( this.searchResults[0].url as string[] );
        this.collapsed = true;
      }

      else
      {
        this.router.navigate(
          this.searchResults[0].url as string[],
          {
            queryParams:
              { raza: this.searchResults[0].title.split(' ').join('-').toLocaleLowerCase() }
          }
        )

        this.collapsed = true;
      }
    }
  }

  resetSearch() { setTimeout(() => { this.searchArticlesForm.get('searchTerm-global')?.setValue(''); }, 100) }

  // Form effects
  uncollapse(event: Event) {
    event.stopPropagation();
    this.searchArticlesForm.get('searchTerm-global')?.setValue('');
    this.collapsed = false;
  }

  collapse(event: Event) {
    event.stopPropagation();
    this.searchArticlesForm.get('searchTerm-global')?.setValue('');
    this.collapsed = true;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.collapsed)
    {
      // El clic se ha realizado fuera del componente
      if(!this.elementRef.nativeElement.contains(event.target)) { this.collapsed = true;}
    }
  }

  ngOnDestroy(): void {
    this._destroy$.next(true)
    this._destroy$.unsubscribe()
  }

}
