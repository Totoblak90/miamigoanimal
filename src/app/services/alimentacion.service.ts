import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlimentacionService {
  foodRations = signal(0);

  constructor() { }
}
