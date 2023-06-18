import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'popup-disclaimer',
  templateUrl: './popup-disclaimer.component.html',
  styleUrls: ['./popup-disclaimer.component.scss']
})
export class PopupDisclaimerComponent {
  @ViewChild('popupDisclaimer') popupDisclaimer: ElementRef<HTMLDivElement> | undefined;
  @Output() disclaimerAccepted: EventEmitter<boolean> = new EventEmitter()
  @Output() navigatedToManageCookies: EventEmitter<boolean> = new EventEmitter()

}
