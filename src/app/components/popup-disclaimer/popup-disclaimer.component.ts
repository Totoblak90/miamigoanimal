import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlimentacionService } from 'src/app/services/alimentacion.service';

@Component({
  selector: 'popup',
  templateUrl: './popup-disclaimer.component.html',
  styleUrls: ['./popup-disclaimer.component.scss']
})
export class PopupDisclaimerComponent {
  @ViewChild('popupDisclaimer') popupDisclaimer: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('popupFoodRations') popupFoodRations: ElementRef<HTMLDivElement> | undefined;

  showPopup = true;

  foodRations = this.alimentacionService.foodRations();

  constructor(
    private router: Router,
    private alimentacionService: AlimentacionService
  ) {}

  saveLocalhost() {
    localStorage.setItem('disclaimer', JSON.stringify({
      accepted: true,
      date: new Date()
    }))

    this.popupDisclaimer?.nativeElement.remove()
    this.router.navigate(['/']);
  }

}
