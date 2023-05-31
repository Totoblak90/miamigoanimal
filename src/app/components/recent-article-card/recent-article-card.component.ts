import { Component, Input } from '@angular/core';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'recent-article-card',
  templateUrl: './recent-article-card.component.html',
  styleUrls: ['./recent-article-card.component.scss']
})
export class RecentArticleCardComponent {

  @Input() type: 'cat' | 'dog' | 'extra' = 'extra';
  @Input() title: string = '';
  @Input() description: string = '';

  constructor(private utilitiesSrv: UtilitiesService) {}

  get cardPicture() {
    return this.utilitiesSrv.selectImage(this.type);
  }

}
