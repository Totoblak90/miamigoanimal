import { Injectable, signal } from '@angular/core';
import { Cat } from '../interfaces/cat.interface';
import { CAT_LIST } from '../db/gatos.db';
import { UtilitiesService } from './utilities.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GatosService {

  catListSignal = signal(CAT_LIST);

  constructor(private utilitiesService: UtilitiesService, private http: HttpClient) {}

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
      const filteredBySearchTerm = gatosList[i].searchTerms.some((term) => term.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().includes(titleWithoutPunctuation))

      if ( titleWithoutPunctuation.includes(nameWithoutPunctuation) || filteredBySearchTerm )
      {
        return this.utilitiesService.selectImage( 'cat', gatosList[i].image, onlyImage )
      }
    }

    return this.utilitiesService.selectImage( 'cat', providedImg, onlyImage )
  }

}
