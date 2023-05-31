import { Component, Input } from '@angular/core';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'flipping-card',
  templateUrl: './flipping-card.component.html',
  styleUrls: ['./flipping-card.component.scss']
})
export class FlippingCardComponent {
  @Input() cardTitle = '';
  @Input() topics: string[] = [];
  @Input() type: 'cat' | 'dog' | 'extra' = 'extra';
  @Input() href = '';

  selectedImage: string = '';

  constructor(private utilitiesSrv: UtilitiesService) {}

  ngOnInit() {
    this.selectedImage =  this.type === 'cat' ? this.utilitiesSrv.selectImage( this.type ) :
                          this.type === 'dog' ? this.utilitiesSrv.selectImage( this.type ) :
                          ''
  }
}
