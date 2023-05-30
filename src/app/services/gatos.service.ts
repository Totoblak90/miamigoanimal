import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { Cat } from '../interfaces/cat.interface';

@Injectable({
  providedIn: 'root'
})
export class GatosService {

  private apiUrl = 'https://api.thecatapi.com/v1/';
  private headers = new HttpHeaders({
    'Content-type': 'application/json',
    'x-api-key': 'live_IMSkHCnLKaMGNb3cwXwplyqpgA2TRFnQmcpJXrDhVjY6bxImsfHKXRkwskW7AQU6'
  })

  constructor(private http: HttpClient) { }

  getCatBreeds(page = 0): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${this.apiUrl}breeds?limit=4&page=${page}`, { headers: this.headers })
      .pipe( switchMap(async (cats: Cat[]) => await this.searchForImages(cats)) );
  }

  searchByName(breed: string) {
    return this.http.get<Cat[]>(`${this.apiUrl}breeds/search?q=${breed}&limit=4`, { headers: this.headers })
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

      return cats;
    }
    catch (error)
    {
      return cats;
    }
  }

}
