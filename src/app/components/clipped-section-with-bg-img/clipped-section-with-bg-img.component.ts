import { Component, Input } from '@angular/core';

@Component({
  selector: 'clipped-section-with-bg-img',
  templateUrl: './clipped-section-with-bg-img.component.html',
  styleUrls: ['./clipped-section-with-bg-img.component.scss']
})
export class ClippedSectionWithBgImgComponent {
  @Input() selectedBg: 'default' | 'cat' | 'dog' | 'health' | 'food' | 'train' = 'default'
  @Input() skewSide: 'up' | 'down' | 'none' = 'none'

  get selectedClasses(): {[key: string]: boolean} {
    const cssClasses: {[key: string]: boolean} = {}

    cssClasses[`skew-${this.skewSide}`] = true

    return cssClasses
  }

}
