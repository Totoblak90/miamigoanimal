import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, catchError, debounceTime, of, switchMap, take, takeUntil } from 'rxjs';
import { Dog } from 'src/app/interfaces/dog.interface';
import { MetaService } from 'src/app/services/meta.service';
import { PerrosService } from 'src/app/services/perros.service';

@Component({
  selector: 'dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent implements OnInit, OnDestroy {

  dogList: {[key: number]: Dog} = this.perrosService.dogListSignal()

  searchDogForm: FormGroup = this.formBuilder.group({ searchTerm: '' })

  searching = false;
  errorMessage = '';

  sliceInit = 0;
  sliceEnd = 4;
  currentPage = 0;
  totalPages = 0;

  get slicedDogList() {

    this.totalPages = Math.ceil(Object.keys(this.dogList).length / 4)

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

  constructor(private perrosService: PerrosService, private formBuilder: FormBuilder, private meta: MetaService) {
    this.onSearchTermChange()
  }


  ngOnInit(): void {
    this.totalPages = Math.ceil(Object.keys(this.dogList).length / 4)
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
          this.searchDogsByBreedName(term.toLowerCase())
        }
      })

  }

  private searchDogsByBreedName(searchTerm: string) {

    this.searching = true;
    this.errorMessage = '';
    const dogArray = Object.values(this.dogList);
    const filteredDogs = this.filterBySearchTerm(dogArray, searchTerm)
    this.dogList = filteredDogs.reduce((obj: {[key: number]: Dog} , dog) => (obj[dog.id] = dog, obj), {});
    this.searching = false;
    this.errorMessage = !filteredDogs.length ? 'Sin resultados' : '';

  }

  prevPage() {
    if (this.currentPage === 0) return;
    this.currentPage--;
    this.sliceInit -= 4;
    this.sliceEnd -= 4;
    this.searching = false;
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.sliceInit += 4;
      this.sliceEnd += 4;
      this.searching = false;
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
