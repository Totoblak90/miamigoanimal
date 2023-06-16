import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { AlimentacionService } from 'src/app/services/alimentacion.service';

@Component({
  selector: 'popup-food-rations',
  templateUrl: './popup-food-rations.component.html',
  styleUrls: ['./popup-food-rations.component.scss']
})
export class PopupFoodRationsComponent implements AfterViewInit {

  @ViewChild('popupFoodRations') popupFoodRations: ElementRef | undefined;
  rations = this.alimentacionService.foodRations;

  constructor(
    private alimentacionService: AlimentacionService,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngAfterViewInit(): void {
    this.openPopup()
  }

  private openPopup() {
    if (isPlatformBrowser(this.platformId))
    {

      const popup = this.popupFoodRations?.nativeElement as HTMLDivElement;

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

      const popup = this.popupFoodRations?.nativeElement as HTMLDivElement;

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
        this.alimentacionService.foodRations.set(0);
      }
    }

  }
}
