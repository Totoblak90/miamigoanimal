import { Component, Input } from '@angular/core';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {


  @Input() titleList: HTMLHeadingElement[] = []

  scrollTo(element: HTMLHeadingElement) {
    element.scrollIntoView({behavior: "smooth"});
  }

}
