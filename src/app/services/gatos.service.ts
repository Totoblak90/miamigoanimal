import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, map, switchMap, tap } from 'rxjs';
import { Cat } from '../interfaces/cat.interface';
import { PerrosService } from './perros.service';
import { Dog } from '../interfaces/dog.interface';
import { CAT_LIST } from '../db/gatos.db';

@Injectable({
  providedIn: 'root'
})
export class GatosService {

  catListSignal = signal(CAT_LIST);

  private apiUrl = 'https://api.thecatapi.com/v1/';
  private headers = new HttpHeaders({
    'Content-type': 'application/json',
    'x-api-key': 'live_IMSkHCnLKaMGNb3cwXwplyqpgA2TRFnQmcpJXrDhVjY6bxImsfHKXRkwskW7AQU6'
  })

  constructor(private http: HttpClient, private perrosService: PerrosService) {
  }

  getCatBreeds(page = 0): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${this.apiUrl}breeds?limit=3&page=${page}`, { headers: this.headers })
      .pipe( switchMap(async (cats: Cat[]) => await this.searchForImages(cats)) );
  }

  searchByName(breed: string) {
    return this.http.get<Cat[]>(`${this.apiUrl}breeds/search?q=${breed}&limit=3`, { headers: this.headers })
      .pipe( switchMap(async (cats: Cat[]) => await this.searchForImages(cats)) );
  }

  private async searchForImages(cats: Cat[]) {
    try
    {
      const imagePromises = cats.map(cat =>
        this.http.get<any[]>(`${this.apiUrl}images/search?breed_id=${cat.id}`, { headers: this.headers }).toPromise()
      );

      const images = await Promise.all(imagePromises);

      cats.forEach((cat, index) => {
        cat.image = images[index]![0]?.url; // Asume que la respuesta es un array y toma la primera imagen
      });

      console.log(cats)
      return cats;
    }
    catch (error)
    {
      return cats;
    }
  }

}
