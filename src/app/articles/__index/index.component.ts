import { Component, Input } from '@angular/core';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {


  @Input() titleList: HTMLTitleElement[] = []

  scrollTo(element: HTMLTitleElement) {
    element.scrollIntoView({behavior: "smooth"});
  }

}
