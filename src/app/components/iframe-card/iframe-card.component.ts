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
  videoLoaded: boolean = false;

  get videoUrl() {
    return `https://www.youtube.com/embed/${this.videoId}?autoplay=1`;
  }

  get thumbnailUrl() {
    return `https://img.youtube.com/vi/${this.videoId}/0.jpg`;
  }

  handleError() {
    this.videoError = true;
  }

  loadVideo() {
    this.videoLoaded = true;
  }

}
