import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, EventEmitter, Inject, Output, PLATFORM_ID, ViewChild, AfterViewInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AlimentacionService } from 'src/app/services/alimentacion.service';

@Component({
  selector: 'popup-disclaimer',
  templateUrl: './popup-disclaimer.component.html',
  styleUrls: ['./popup-disclaimer.component.scss']
})
export class PopupDisclaimerComponent implements AfterViewInit {
  @ViewChild('popupDisclaimer') popupDisclaimer: ElementRef<HTMLDivElement> | undefined;
  @Output() disclaimerAccepted: EventEmitter<boolean> = new EventEmitter()

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
  ) {}


  ngAfterViewInit(): void {
    this.openPopup();
  }

  private openPopup() {
    if (isPlatformBrowser(this.platformId))
    {

      const popup = this.popupDisclaimer?.nativeElement as HTMLDivElement;

      if (popup)
      {
        const content = popup.querySelector('.popup__content') as HTMLDivElement;

        // POPUP
        popup.style.opacity = '1';
        popup.style.visibility = 'visible';

        // CONTENT
        content.style.opacity = '1';
        content.style.visibility = 'visible';
        content.style.transform = `translate(-50%, -50%) scale(0.9)`;

        this.document.body.style.overflow = 'hidden';
      }

    }
  }

  closePopup() {
    if (isPlatformBrowser(this.platformId))
    {

      const popup = this.popupDisclaimer?.nativeElement as HTMLDivElement;

      if (popup)
      {
        const content = popup.querySelector('.popup__content') as HTMLDivElement;

        // POPUP
        popup.style.opacity = '0';
        popup.style.visibility = 'hidden';
        popup.style.display = 'none';

        // CONTENT
        content.style.opacity = '0';
        content.style.visibility = 'hidden';
        content.style.display = 'none';

        this.document.body.style.overflow = 'auto';
      }

      this.disclaimerAccepted.emit(true);

    }
  }



}
