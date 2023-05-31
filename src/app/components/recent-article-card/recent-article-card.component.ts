import { Component, Input, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'recent-article-card',
  templateUrl: './recent-article-card.component.html',
  styleUrls: ['./recent-article-card.component.scss']
})
export class RecentArticleCardComponent implements OnInit {

  @Input() type: 'cat' | 'dog' | 'extra' = 'extra';
  @Input() title: string = '';
  @Input() description: string = '';

  selectedImage: string = '';

  constructor(private utilitiesSrv: UtilitiesService) {}

  ngOnInit() {
    this.selectedImage =  this.type === 'cat' ? this.utilitiesSrv.selectImage( this.type ) :
                          this.type === 'dog' ? this.utilitiesSrv.selectImage( this.type ) :
                          ''
  }

}
