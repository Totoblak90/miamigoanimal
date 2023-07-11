import { RouterModule } from "@angular/router";
import { ArticleSkeletonComponent } from "../components/article-skeleton/article-skeleton.component";
import { HeaderComponent } from "../components/header/header.component";
import { IframeCardComponent } from "../components/iframe-card/iframe-card.component";
import { IndexComponent } from "../components/index/index.component";

export const ARTICLES_IMPORTS =   [IndexComponent, ArticleSkeletonComponent, HeaderComponent, IframeCardComponent, RouterModule]
