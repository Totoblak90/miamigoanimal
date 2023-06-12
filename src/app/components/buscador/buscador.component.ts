import { Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { SearchResult } from 'src/app/interfaces/buscador.interface';
import { ArticlesService } from 'src/app/services/articles.service';
import { PerrosService } from 'src/app/services/perros.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnDestroy {
  @ViewChild('searchInputRef') searchInputRef: ElementRef<HTMLElement> | undefined;
  @ViewChild('searchResultsRef') searchResultsRef: ElementRef<HTMLElement> | undefined;
  @ViewChild('searchForm') searchForm: ElementRef<HTMLElement> | undefined;
  @ViewChild('searchRadioGroup') searchRadioGroup: ElementRef<HTMLElement> | undefined;

  searchArticlesForm: FormGroup = this.fb.group({
    searchTerm: [''],
    searchType: ['razas']
  })

  searchResults: SearchResult[] = [];

  private _destroy$ = new Subject<boolean>();

  constructor(
    private fb: FormBuilder,
    private elementRef: ElementRef,
    private articlesService: ArticlesService,
    private perrosService: PerrosService,
    private utilitiesService: UtilitiesService
  ) {
    this.subscribeToSearchTermChange();
    this.subscribeToFiltersChange();
  }

  // Search

  private subscribeToFiltersChange() {
    this.searchArticlesForm.get('searchType')?.valueChanges
    .pipe(takeUntil(this._destroy$))
    .subscribe((filter: 'articulos' | 'razas') => {
      const searchTerm = this.searchArticlesForm.get('searchTerm')!.value;

      if (searchTerm) {

        if (filter == 'razas') { this.searchByBreed(searchTerm) }
        else { this.searchByPost(searchTerm) }

      }
    })
  }

  private subscribeToSearchTermChange() {
    this.searchArticlesForm.get('searchTerm')?.valueChanges
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

        if (articleType === 'dog') selectedImage = this.perrosService.setDogBreedImage(article.title, articleType, true)

        return {
          title: article.title,
          url: ['/post', article.url],
          img: selectedImage || this.utilitiesService.selectImage(articleType, undefined, true)
        }
      }
    )

  }

  searchByBreed(searchTerm: string) {
    const perrosActiclesList = Object.values(this.perrosService.dogListSignal())
    const filteredPerrosAritcleList = this.perrosService.filterBySearchTerm(perrosActiclesList, searchTerm)

    this.searchResults = filteredPerrosAritcleList.map(dog => ({
        title: dog.name,
        url:[ '/perros', dog.id.toString()],
        queryParams: { raza: dog.name.split(' ').join('-').toLocaleLowerCase() },
        img: dog.image.url
      }))
  }

  resetSearch() { setTimeout(() => { this.searchArticlesForm.get('searchTerm')?.setValue(''); }, 100) }

  // Form effects

  uncollapseForm() {
    if ( this.searchInputRef && this.searchResultsRef && this.searchForm && this.searchRadioGroup )
    {

      this.searchForm.nativeElement.style.transition = 'all 0.2s'
      this.searchForm.nativeElement.style.width = '80vw';
      this.searchForm.nativeElement.style.backgroundColor = '#fff';
      this.searchForm.nativeElement.style.zIndex = '10000';

      this.searchInputRef.nativeElement.style.backgroundColor = '#fff';
      this.searchInputRef.nativeElement.style.zIndex = '10000';

      this.searchRadioGroup.nativeElement.style.position = 'relative';
      this.searchRadioGroup.nativeElement.style.display = 'flex';
      this.searchRadioGroup.nativeElement.style.justifyItems = 'space-around';
      this.searchRadioGroup.nativeElement.style.alignItems = 'center';
      this.searchRadioGroup.nativeElement.style.zIndex = '1000';
      this.searchRadioGroup.nativeElement.style.paddingLeft = '1rem';

      this.searchResultsRef.nativeElement.style.transition = 'all 0.2s';
      this.searchResultsRef.nativeElement.style.transform = 'translateY(45px)';
      this.searchResultsRef.nativeElement.style.zIndex = '1000';
      this.searchResultsRef.nativeElement.style.opacity = '1';

    }

  }

  collapseForm() {

    if ( this.searchForm && this.searchRadioGroup && this.searchInputRef && this.searchResultsRef )
    {

      this.searchForm.nativeElement.style.transition = 'all 0.2s';
      this.searchForm.nativeElement.style.width = '100%';
      this.searchForm.nativeElement.style.backgroundColor = 'transparent';
      this.searchForm.nativeElement.style.zIndex = '1000';

      this.searchRadioGroup.nativeElement.style.transition = 'all 0.2s';
      this.searchRadioGroup.nativeElement.style.position = 'relative';
      this.searchRadioGroup.nativeElement.style.paddingLeft = '0';
      this.searchRadioGroup.nativeElement.style.display = 'none';

      this.searchResultsRef.nativeElement.style.transition = 'all 0.2s';
      this.searchResultsRef.nativeElement.style.transform = 'translateY(0)';
      this.searchResultsRef.nativeElement.style.opacity = '0';
      this.searchResultsRef.nativeElement.style.zIndex = '-1';

      this.searchInputRef.nativeElement.style.transition = 'all 0.2s'
      this.searchInputRef.nativeElement.style.width = '100%';
      this.searchInputRef.nativeElement.style.backgroundColor = '#eee';

    }

  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if(!this.elementRef.nativeElement.contains(event.target)) {
      // El clic se ha realizado fuera del componente, puedes llamar a tu función aquí
      this.collapseForm();
    }
  }

  // On destroy

  ngOnDestroy(): void {
    this._destroy$.next(true)
    this._destroy$.unsubscribe()
  }

}
