import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, catchError, debounceTime, of, takeUntil } from 'rxjs';
import { Dog } from 'src/app/interfaces/dog.interface';
import { PerrosService } from 'src/app/services/perros.service';

@Component({
  selector: 'dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent implements OnInit, OnDestroy {
  private originalDogList: {[key: number]: Dog} = {};
  dogList: {[key: number]: Dog} = this.perrosService.dogListSignal()

  searchDogForm: FormGroup = this.formBuilder.group({ searchTerm: '' })

  errorMessage = '';

  sliceInit = 0;
  sliceEnd = 3;
  currentPage = 0;
  totalPages = 0;

  get slicedDogList() {

    this.totalPages = Math.ceil(Object.keys(this.dogList).length / 3)

    const keys = Object.keys(this.dogList);
    const slicedObject: {[key: number]: Dog} = {};
    const startIndex = this.sliceInit || 0;
    const endIndex = this.sliceEnd || 4;


    for (let i = startIndex; i < endIndex; i++) {
      const key = keys[i];
      slicedObject[+key] = this.dogList[+key];
    }

    return slicedObject;
  }

  private _destroy$ = new Subject<void>();

  constructor(private perrosService: PerrosService, private formBuilder: FormBuilder) {
    this.onSearchTermChange()
  }


  ngOnInit(): void {
    this.originalDogList = {...this.dogList};  // Hacer una copia de la lista original de perros
    this.totalPages = Math.ceil(Object.keys(this.dogList).length / 3)
  }

  private onSearchTermChange() {
    this.searchDogForm.get('searchTerm')?.valueChanges

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
          this.dogList = this.perrosService.dogListSignal()
        }
        else
        {
          this.currentPage = 0;
          this.sliceInit = 0;
          this.sliceEnd = 3;
          this.searchDogsByBreedName(term.toLowerCase())
        }
      })

  }

  private searchDogsByBreedName(searchTerm: string) {
    this.errorMessage = '';
    const dogArray = Object.values(this.originalDogList);  // Usar la lista original de perros para la búsqueda
    const filteredDogs = this.filterBySearchTerm(dogArray, searchTerm)
    this.dogList = filteredDogs.reduce((obj: {[key: number]: Dog} , dog) => (obj[dog.id] = dog, obj), {});
    this.errorMessage = !filteredDogs.length ? 'Sin resultados' : '';
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

  private filterBySearchTerm(dogList: Dog[], searchTerm: string): Dog[] {
    return dogList.filter(dog => {
      return  dog.name.toLowerCase().includes(searchTerm) ||
              dog.searchTerms.some(st => st.toLowerCase().includes(searchTerm)) ||
              dog.temperament.some(t => t.toLowerCase().includes(searchTerm)) ||
              dog.categoria_de_tamanio.toLowerCase().includes(searchTerm) ||
              dog.origin.toLowerCase().includes(searchTerm)
    });
  }


  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.unsubscribe();
  }
}
