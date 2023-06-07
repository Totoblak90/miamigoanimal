import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Dog } from '../interfaces/dog.interface';
import { DOG_LIST } from '../db/perros.db';

@Injectable({
  providedIn: 'root',
})
export class PerrosService {

  dogListSignal = signal(DOG_LIST)

  private apiUrl = 'https://api.thedogapi.com/v1/';
  private headers = new HttpHeaders({
    'Content-type': 'application/json',
    'x-api-key':
      'live_IMSkHCnLKaMGNb3cwXwplyqpgA2TRFnQmcpJXrDhVjY6bxImsfHKXRkwskW7AQU6',
  });

  constructor(private http: HttpClient) {}

  getDogBreeds(page = 0): Observable<Dog[]> {
    this.http.get<Dog[]>(`${this.apiUrl}breeds`).subscribe(console.log);
    // Voy por el artículo 30
    return this.http.get<Dog[]>(`${this.apiUrl}breeds?limit=4&page=${page}`, {
      headers: this.headers,
    });
  }

  searchByName(breed: string) {
    return this.http
      .get<Dog[]>(`${this.apiUrl}breeds/search?q=${breed}&limit=4`, {
        headers: this.headers,
      })
      .pipe(
        switchMap(async (dogs: Dog[]) => {
          try {
            const imagePromises = dogs.map((dog) =>
              this.http
                .get<any[]>(`${this.apiUrl}images/search?breed_id=${dog.id}`, {
                  headers: this.headers,
                })
                .toPromise()
            );

            const images = await Promise.all(imagePromises);

            dogs.forEach((dog, index) => {
              dog.image = images[index]![0]?.url; // Asume que la respuesta es un array y toma la primera imagen
            });

            return dogs;
          } catch (error) {
            return dogs;
          }
        })
      );
  }

  async searchForImages(dogId: number) {
    try
    {
      const dogPromise = await this.http.get<any[]>(`${this.apiUrl}images/search?breed_id=${139}`, { headers: this.headers }).toPromise();
      return dogPromise;
    }
    catch (error)
    {
      console.log(error)
      return null;
    }
  }

}
