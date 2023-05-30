import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from '../interfaces/dog.interface';

@Injectable({
  providedIn: 'root'
})
export class PerrosService {

  private apiUrl = 'https://api.thedogapi.com/v1/';
  private headers = new HttpHeaders({
    'Content-type': 'application/json',
    'x-api-key': 'live_IMSkHCnLKaMGNb3cwXwplyqpgA2TRFnQmcpJXrDhVjY6bxImsfHKXRkwskW7AQU6'
  })

  constructor(private http: HttpClient) { }

  getDogBreeds(page = 0): Observable<Dog[]> {
    return this.http.get<Dog[]>(`${this.apiUrl}breeds?limit=8&page=${page}`, { headers: this.headers })
  }

  searchByName(breed: string) {
    return this.http.get<Dog[]>(`${this.apiUrl}breeds/search?q=${breed}`, { headers: this.headers })
  }
}
