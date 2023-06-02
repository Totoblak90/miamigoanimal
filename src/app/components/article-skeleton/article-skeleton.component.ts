import { Component, Input } from '@angular/core';

@Component({
  selector: 'article-skeleton',
  templateUrl: './article-skeleton.component.html',
  styleUrls: ['./article-skeleton.component.scss']
})
export class ArticleSkeletonComponent {

  @Input() filters: ('Gatos' | 'Perros' | 'Salud' | 'Adiestramiento' | 'Alimentacion')[] = [];

}
