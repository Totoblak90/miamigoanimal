import { Component, Input } from '@angular/core';
import { DirectivesModule } from 'src/app/directives/directives.module';

@Component({
  selector: 'bg-video',
  templateUrl: './bg-video.component.html',
  styleUrls: ['./bg-video.component.scss'],
  standalone: true,
  imports: [DirectivesModule]
})
export class BgVideoComponent {
  @Input() videoSrc: string = '';
}
