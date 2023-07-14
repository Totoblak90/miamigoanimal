import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class IndexComponent implements OnInit {
  @Input() collapsed = true;
  @Input() filters: string[] = []

  titleList: HTMLHeadingElement[] = [];


  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.titleList = Array.from(this.document.getElementsByTagName('h2'));
    }
  }

  scrollTo(element: HTMLHeadingElement) {
    if (isPlatformBrowser(this.platformId) && element) {
      window.scrollTo({
        top: element.offsetTop - 20,
        behavior: 'smooth',
      })
    }
  }
}
