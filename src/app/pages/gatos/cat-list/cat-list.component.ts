import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, catchError, debounceTime, of, takeUntil } from 'rxjs';
import { Cat } from 'src/app/interfaces/cat.interface';
import { GatosService } from 'src/app/services/gatos.service';

@Component({
  selector: 'cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent {
  private originalCatList: {[key: string]: Cat} = {};
  catList: {[key: string]: Cat} = this.gatosService.catListSignal();

  searchCatForm: FormGroup = this.formBuilder.group({ searchTerm: '' })

  errorMessage = '';

  sliceInit = 0;
  sliceEnd = 3;
  currentPage = 0;
  totalPages = 0;

  get slicedCatList() {

    this.totalPages = Math.ceil(Object.keys(this.catList).length / 3)

    const keys = Object.keys(this.catList);
    const slicedObject: {[key: string]: Cat} = {};
    const startIndex = this.sliceInit || 0;
    const endIndex = this.sliceEnd || 4;


    for (let i = startIndex; i < endIndex; i++) {
      const key = keys[i];
      slicedObject[key] = this.catList[key];
    }

    return slicedObject;
  }

  private _destroy$ = new Subject<void>();

  constructor(private gatosService: GatosService, private formBuilder: FormBuilder) {
    this.onSearchTermChange()
  }


  ngOnInit(): void {
    this.originalCatList = {...this.catList};  // Hacer una copia de la lista original de perros
    this.totalPages = Math.ceil(Object.keys(this.catList).length / 3)
  }

  private onSearchTermChange() {
    this.searchCatForm.get('searchTerm')?.valueChanges

      .pipe(
        takeUntil(this._destroy$),
        debounceTime(400),
        catchError(err => {
          this.errorMessage = 'Error desconocido';
          return of([])
        })
      )

      .subscribe((term: string) => {
        this.errorMessage = '';
        if (!term) {
          this.catList = this.gatosService.catListSignal();
        }
        else
        {
          this.currentPage = 0;
          this.sliceInit = 0;
          this.sliceEnd = 3;
          this.searchCatsByBreedName(term.toLowerCase())
        }
      })

  }

  private searchCatsByBreedName(searchTerm: string) {
    this.errorMessage = '';
    const catArray = Object.values(this.originalCatList);  // Usar la lista original de perros para la búsqueda
    const filteredCats = this.filterBySearchTerm(catArray, searchTerm)
    this.catList = filteredCats.reduce((obj: {[key: string]: Cat} , cat) => (obj[cat.id] = cat, obj), {});
    this.errorMessage = !filteredCats.length ? 'Sin resultados' : '';
  }

  private filterBySearchTerm(catList: Cat[], searchTerm: string): Cat[] {
    return catList.filter(cat => {
      return  cat.name.toLowerCase().includes(searchTerm) ||
              cat.searchTerms.some(st => st.toLowerCase().includes(searchTerm)) ||
              cat.temperament.some(t => t.toLowerCase().includes(searchTerm)) ||
              cat.categoria_de_tamanio.toLowerCase().includes(searchTerm) ||
              cat.origin.toLowerCase().includes(searchTerm)
    });
  }

  prevPage() {
    if (this.currentPage === 0) return;
    this.currentPage--;
    this.sliceInit -= 3;
    this.sliceEnd -= 3;
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.sliceInit += 3;
      this.sliceEnd += 3;
    }
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.unsubscribe();
  }
}
