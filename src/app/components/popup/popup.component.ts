import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  @ViewChild('popupDisclaimer') popupDisclaimer: ElementRef<HTMLDivElement> | undefined;

  showPopup = true;

  constructor(private router: Router) {}

  saveLocalhost() {
    localStorage.setItem('disclaimer', JSON.stringify({
      accepted: true,
      date: new Date()
    }))

    this.popupDisclaimer?.nativeElement.remove()
    this.router.navigate(['/']);
  }

}
