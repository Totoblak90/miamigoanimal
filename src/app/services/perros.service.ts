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

  dogListSignal = signal(DOG_LIST);

  constructor(private http: HttpClient, private utilitiesService: UtilitiesService) {}


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

  setDogBreedImage(title: string, providedImg?: string, onlyImage = false) {
    const perrosList = Object.values(this.dogListSignal());

    // Elimina los signos de puntuación del título
    const titleWithoutPunctuation = title.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();

    for (let i = 0; i < perrosList.length; i++)
    {
      // Elimina los signos de puntuación del título
      const nameWithoutPunctuation = perrosList[i].name.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();

      if ( titleWithoutPunctuation.includes(nameWithoutPunctuation) )
      {
        return this.utilitiesService.selectImage( 'dog', perrosList[i].image.url, onlyImage )
      }
    }

    return this.utilitiesService.selectImage( 'dog', providedImg, onlyImage )
  }

}
