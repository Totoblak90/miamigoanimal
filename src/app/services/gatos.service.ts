import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.http.get<Cat[]>(`${this.apiUrl}breeds?limit=8&page=${page}`, { headers: this.headers })
  }

  searchByName(breed: string) {
    return this.http.get<Cat[]>(`${this.apiUrl}breeds/search?q=${breed}`, { headers: this.headers })
  }

}
