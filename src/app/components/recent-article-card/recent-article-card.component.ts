import { Component, Input, OnInit } from '@angular/core';
import { PerrosService } from 'src/app/services/perros.service';
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
  @Input() url: string = '';

  selectedImage: string = '';

  constructor(private utilitiesSrv: UtilitiesService, private perrosService: PerrosService) {}

  ngOnInit() {

    if (this.type === 'dog') {  this.selectedImage = this.perrosService.setDogBreedImage(this.title, this.type) }
    else if (this.type === 'cat') { this.selectedImage = this.setCatBreedImage() }
    else { this.selectedImage =  this.utilitiesSrv.selectImage( this.type ) }

  }

  private setCatBreedImage() {
    return this.utilitiesSrv.selectImage( this.type )
  }

}
