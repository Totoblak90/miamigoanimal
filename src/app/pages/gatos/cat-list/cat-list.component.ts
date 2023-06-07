import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, catchError, debounceTime, of, switchMap, take, takeUntil } from 'rxjs';
import { Cat } from 'src/app/interfaces/cat.interface';
import { GatosService } from 'src/app/services/gatos.service';

@Component({
  selector: 'cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent {

  catList: Cat[] = [];

  searchCatForm: FormGroup = this.formBuilder.group({ searchTerm: '' })

  searching = true;
  errorMessage = '';

  currentPage = 0;

  private _destroy$ = new Subject<void>();

  constructor(private gatosService: GatosService, private formBuilder: FormBuilder) {
    this.onSearchTermChange()
  }


  ngOnInit(): void {
    this.searchCats()
  }

  getCatTemperaments(cat: Cat) {
    return cat.temperament!.split(',').sort().map((t) => t.trim())
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
                        if (!term) return this.searchCats(this.currentPage);
                        this.searchCatsByBreedName(term.toLowerCase())
                      })
  }

  private searchCats(page = 0, load = true) {
    if (load) this.searching = true;
    this.gatosService.getCatBreeds(page)
          .pipe(
            take(1),
            switchMap((cl) => {
              this.catList = cl;
              this.errorMessage = !cl.length ? 'Sin resultados' : '';
              this.searching = false;
              return of(cl)
            })
          )
          .subscribe()
  }

  private searchCatsByBreedName(breedName: string) {
    this.searching = true;
    this.errorMessage = ''
    this.gatosService.searchByName(breedName)
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
              this.catList = []
            }
            else
            {
              this.errorMessage = '';
              this.catList = dl
            }
          },
        }
      )
  }

  prevPage() {
    if (this.currentPage === 0) return;
    this.currentPage--;
    this.searchCats(this.currentPage);
  }

  nextPage() {
    this.currentPage++;
    this.searchCats(this.currentPage);
  }


  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.unsubscribe();
  }
}
