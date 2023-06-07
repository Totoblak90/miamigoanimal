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

  selectedImage: string = '';

  constructor(private utilitiesSrv: UtilitiesService, private perrosService: PerrosService) {}

  ngOnInit() {
    if (this.type === 'dog') {  return this.setDogBreedImage() }
    else if (this.type === 'cat') { return this.setCatBreedImage() }
    else { return this.selectedImage =  this.utilitiesSrv.selectImage( this.type ) }

  }

  private setDogBreedImage() {
    const perrosList = Object.values(this.perrosService.dogListSignal());

    // Elimina los signos de puntuación del título
    const titleWithoutPunctuation = this.title.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();

    for (let i = 0; i < perrosList.length; i++)
    {
      if ( titleWithoutPunctuation.includes(perrosList[i].name.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase()) )
      {
        this.selectedImage = this.utilitiesSrv.selectImage( this.type, perrosList[i].image.url )
        break
      }
    }

    if (!this.selectedImage) { this.selectedImage = this.utilitiesSrv.selectImage( this.type ) }
  }

  private setCatBreedImage() {
    return this.selectedImage =  this.utilitiesSrv.selectImage( this.type )
  }

}
