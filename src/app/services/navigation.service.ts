import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  navigationBg: WritableSignal<'extra' | 'health' | 'dog' | 'cat' | 'food' | 'train'> = signal('extra');

}
