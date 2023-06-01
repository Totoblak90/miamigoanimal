import { Component, Inject, Input, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() mainTitle: string = '';
  @Input() secondaryTitle = '';
  @Input() cta?: string = '';
  @Input() bckColour?: 'default' | 'dog' | 'cat' | 'health' | 'train' | 'food' | 'yo' = 'default';

  selectedImage: string = '';

  get backgroundImage() {
    return this.selectedImage;
  }

  get backgroundColour(): string {

    const cssClass = {
      default: 'bg-default',
      dog: 'bg-dog',
      cat: 'bg-cat',
      health: 'bg-health',
      train: 'bg-train',
      food: 'bg-food',
      yo: 'bg-yo'
    }

    return cssClass[this.bckColour || 'default']

  }

  constructor(private utilitiesSrv: UtilitiesService) {}

  ngOnInit() {
    this.selectedImage =  this.bckColour === 'cat' ? this.utilitiesSrv.selectImage( this.bckColour ) :
                          this.bckColour === 'dog' ? this.utilitiesSrv.selectImage( this.bckColour ) :
                          ''
  }
}
