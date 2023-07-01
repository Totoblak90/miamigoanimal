import { Injectable, signal } from '@angular/core';
import { Cat } from '../interfaces/cat.interface';
import { CAT_LIST } from '../db/gatos.db';
import { UtilitiesService } from './utilities.service';

@Injectable({
  providedIn: 'root'
})
export class GatosService {

  catListSignal = signal(CAT_LIST);

  constructor(private utilitiesService: UtilitiesService) {}

  filterBySearchTerm(gatosArticleList: Cat[], searchTerm: string) {
    const searchTermWithoutPunctuation = searchTerm.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();

    return gatosArticleList.filter((cat) =>
      cat.name.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(searchTermWithoutPunctuation) ||
      cat.searchTerms.some((term) => term.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(searchTermWithoutPunctuation)) ||
      cat.origin.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(searchTermWithoutPunctuation) ||
      cat.perks.some((term) => term.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(searchTermWithoutPunctuation)) ||
      cat.temperament.some((term) => term.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(searchTermWithoutPunctuation))
    );
  }

  setCatBreedImage(title: string, providedImg?: string, onlyImage = false) {
    const gatosList = Object.values(this.catListSignal());

    // Elimina los signos de puntuación del título
    const titleWithoutPunctuation = title.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();

    for (let i = 0; i < gatosList.length; i++)
    {
      // Elimina los signos de puntuación del título
      const nameWithoutPunctuation = gatosList[i].name.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();

      if ( titleWithoutPunctuation.includes(nameWithoutPunctuation) )
      {
        return this.utilitiesService.selectImage( 'cat', gatosList[i].image, onlyImage )
      }
    }

    return this.utilitiesService.selectImage( 'cat', providedImg, onlyImage )
  }



  // catListSignal = signal(CAT_LIST);

  // private apiUrl = 'https://api.thecatapi.com/v1/';
  // private headers = new HttpHeaders({
  //   'Content-type': 'application/json',
  //   'x-api-key': 'live_IMSkHCnLKaMGNb3cwXwplyqpgA2TRFnQmcpJXrDhVjY6bxImsfHKXRkwskW7AQU6'
  // })

  // constructor(private http: HttpClient, private perrosService: PerrosService) {
  // }

  // getCatBreeds(page = 0): Observable<Cat[]> {
  //   return this.http.get<Cat[]>(`${this.apiUrl}breeds?limit=3&page=${page}`, { headers: this.headers })
  //     .pipe( switchMap(async (cats: Cat[]) => await this.searchForImages(cats)) );
  // }

  // searchByName(breed: string) {
  //   return this.http.get<Cat[]>(`${this.apiUrl}breeds/search?q=${breed}&limit=3`, { headers: this.headers })
  //     .pipe( switchMap(async (cats: Cat[]) => await this.searchForImages(cats)) );
  // }

  // private async searchForImages(cats: Cat[]) {
  //   try
  //   {
  //     const imagePromises = cats.map(cat =>
  //       this.http.get<any[]>(`${this.apiUrl}images/search?breed_id=${cat.id}`, { headers: this.headers }).toPromise()
  //     );

  //     const images = await Promise.all(imagePromises);

  //     cats.forEach((cat, index) => {
  //       cat.image = images[index]![0]?.url; // Asume que la respuesta es un array y toma la primera imagen
  //     });

  //     console.log(cats)
  //     return cats;
  //   }
  //   catch (error)
  //   {
  //     return cats;
  //   }
  // }

}
