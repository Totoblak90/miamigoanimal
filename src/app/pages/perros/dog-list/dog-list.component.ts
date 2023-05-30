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



  dogList: Dog[] = [];

  searchDogForm: FormGroup = this.formBuilder.group({ searchTerm: '' })

  searching = true;
  errorMessage = '';

  currentPage = 0;

  private _destroy$ = new Subject<void>();

  constructor(private perrosService: PerrosService, private formBuilder: FormBuilder, private meta: MetaService) {
    this.onSearchTermChange()
  }


  ngOnInit(): void {
    this.searchDogs()
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
                        if (!term) return this.searchDogs(this.currentPage);
                        this.searchDogsByBreedName(term.toLowerCase())
                      })
  }

  private searchDogs(page = 0, load = true) {
    if (load) this.searching = true;
    this.perrosService.getDogBreeds(page)
          .pipe(take(1))
          .subscribe({
            next: (dl) => {
              this.dogList = dl;
              this.errorMessage = '';
              this.searching = false;
            },
          })
  }

  private searchDogsByBreedName(breedName: string) {
    this.searching = true;
    this.errorMessage = ''
    this.perrosService.searchByName(breedName)
      .pipe(
        take(1),
        catchError(err => {
          this.errorMessage = 'Error desconocido';
          return of([])
        })
      )
      .subscribe(
        {
          next: dl => {
            this.searching = false;
            if (!dl.length)
            {
              this.errorMessage = 'Sin resultados'
              this.dogList = []
            }
            else
            {
              this.errorMessage = '';
              this.dogList = dl
            }
          },
        }
      )
  }

  prevPage() {
    if (this.currentPage === 0) return;
    this.currentPage--;
    this.searchDogs(this.currentPage);
  }

  nextPage() {
    this.currentPage++;
    this.searchDogs(this.currentPage);
  }


  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.unsubscribe();
  }
}
