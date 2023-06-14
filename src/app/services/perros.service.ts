import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Dog } from '../interfaces/dog.interface';
import { DOG_LIST } from '../db/perros.db';
import { UtilitiesService } from './utilities.service';

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

  constructor(private http: HttpClient, private utilitiesService: UtilitiesService) {}

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

  filterBySearchTerm(perrosActiclesList: Dog[], searchTerm: string) {
    const searchTermWithoutPunctuation = searchTerm.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();

    return perrosActiclesList.filter((dog) =>
      dog.name.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(searchTermWithoutPunctuation) ||
      dog.searchTerms.some((term) => term.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(searchTermWithoutPunctuation)) ||
      dog.origin.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(searchTermWithoutPunctuation) ||
      dog.perks.some((term) => term.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(searchTermWithoutPunctuation)) ||
      dog.bred_for.some((term) => term.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(searchTermWithoutPunctuation)) ||
      dog.breed_group.some((term) => term.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(searchTermWithoutPunctuation)) ||
      dog.temperament.some((term) => term.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(searchTermWithoutPunctuation))
    );
  }

  setDogBreedImage(title: string, type: 'cat' | 'dog', onlyImage = false) {
    const perrosList = Object.values(this.dogListSignal());

    // Elimina los signos de puntuación del título
    const titleWithoutPunctuation = title.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();

    for (let i = 0; i < perrosList.length; i++)
    {
      // Elimina los signos de puntuación del título
      const nameWithoutPunctuation = perrosList[i].name.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();

      if ( titleWithoutPunctuation.includes(nameWithoutPunctuation) )
      {
        return this.utilitiesService.selectImage( type, perrosList[i].image.url, onlyImage )
      }
    }

    return this.utilitiesService.selectImage( type, undefined, onlyImage )
  }

}
