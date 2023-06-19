import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, PLATFORM_ID, ViewChild } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit, OnDestroy {
  @ViewChild('naviToggle') naviToggle: ElementRef<HTMLInputElement> | undefined;

  private naviToggleListener: () => void;

  get navigationBgGradient() {

    const cssClass = {
      'navigation__background--extra': this.navigationService.navigationBg() === 'extra',
      'navigation__background--dog': this.navigationService.navigationBg() === 'dog',
      'navigation__background--cat': this.navigationService.navigationBg() === 'cat',
      'navigation__background--health': this.navigationService.navigationBg() === 'health',
      'navigation__background--food': this.navigationService.navigationBg() === 'food',
      'navigation__background--train': this.navigationService.navigationBg() === 'train',
    }

    return cssClass;

  }

  constructor(
    private navigationService: NavigationService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,

  ) {

    this.naviToggleListener = () => {}

  }


  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId))
    {

      this.naviToggleListener = () => {
        if (this.naviToggle === undefined) return;

        if (this.naviToggle.nativeElement.checked) {
          this.document.body.style.overflow = 'hidden';
        } else {
          this.document.body.style.overflow = 'auto';
        }
      };

      if (this.naviToggle)
        this.naviToggle.nativeElement.addEventListener('change', this.naviToggleListener);

    }

  }

  ngOnDestroy(): void {
    if (this.naviToggle)
      this.naviToggle.nativeElement.removeEventListener('change', this.naviToggleListener);
  }

}
