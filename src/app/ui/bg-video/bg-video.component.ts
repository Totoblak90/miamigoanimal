import { Component, Input } from '@angular/core';

@Component({
  selector: 'bg-video',
  templateUrl: './bg-video.component.html',
  styleUrls: ['./bg-video.component.scss']
})
export class BgVideoComponent {
  @Input() videoSrc: string = '';
}
