import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactFormRequest } from '../interfaces/contact-form.interface';
import { Observable, of } from 'rxjs';

import { APP_BASE_HREF, isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: string) { }

  sendMail(data: ContactFormRequest): Observable<any> {

    if (isPlatformBrowser(this.platformId)) {
      return this.http.post(`${window.location.origin}/api/contact-form`, data)
    }
    else
    return of({message: 'Email not sent'})

  }
}
