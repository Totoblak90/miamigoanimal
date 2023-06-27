import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'popup-disclaimer',
  templateUrl: './popup-disclaimer.component.html',
  styleUrls: ['./popup-disclaimer.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class PopupDisclaimerComponent {
  @ViewChild('popupDisclaimer') popupDisclaimer: ElementRef<HTMLDivElement> | undefined;
  @Output() disclaimerAccepted: EventEmitter<boolean> = new EventEmitter()
  @Output() navigatedToManageCookies: EventEmitter<boolean> = new EventEmitter()

}
