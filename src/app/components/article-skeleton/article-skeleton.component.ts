import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SocialIconsComponent } from '../social-icons/social-icons.component';
import { LastArticlesComponent } from '../recent-articles-list/recent-articles-list.component';
import { HighlitedArticlesPostsComponent } from '../highlited-articles-posts/highlited-articles-posts.component';

@Component({
  selector: 'article-skeleton',
  templateUrl: './article-skeleton.component.html',
  styleUrls: ['./article-skeleton.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SocialIconsComponent,
    LastArticlesComponent,
    HighlitedArticlesPostsComponent
  ],

})
export class ArticleSkeletonComponent {

  @Input() filters: ('Gatos' | 'Perros' | 'Salud' | 'Adiestramiento' | 'Alimentacion')[] = [];

}
