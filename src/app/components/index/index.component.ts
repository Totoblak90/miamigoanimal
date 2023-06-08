import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  titleList: HTMLHeadingElement[] = [];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.titleList = Array.from(this.document.getElementsByTagName('h2'));
    }
  }

  scrollTo(element: HTMLHeadingElement) {
    element.scrollIntoView({ behavior: 'auto' })
  }
}
