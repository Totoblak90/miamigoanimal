import { Component, Input } from '@angular/core';

@Component({
  selector: 'iframe-card',
  templateUrl: './iframe-card.component.html',
  styleUrls: ['./iframe-card.component.scss']
})
export class IframeCardComponent {

  @Input() videoId: string = '';
  @Input() videoDescription = ''
  videoError: boolean = false;

  get videoUrl() {
    return `https://www.youtube.com/embed/${this.videoId}?autoplay=1&mute=1`;
  }

  handleError() {
    this.videoError = true;
  }
}
