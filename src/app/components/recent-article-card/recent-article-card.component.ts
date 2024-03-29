import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, TransferState, makeStateKey } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { GatosService } from 'src/app/services/gatos.service';
import { PerrosService } from 'src/app/services/perros.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'recent-article-card',
  templateUrl: './recent-article-card.component.html',
  styleUrls: ['./recent-article-card.component.scss'],
  standalone: true,
  imports: [CommonModule, DirectivesModule, RouterModule]
})
export class RecentArticleCardComponent implements OnInit {

  @Input() type: 'cat' | 'dog' | 'extra' = 'extra';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() url: string = '';

  selectedImage: string = '';

  get hideCard() {
   return this.router.url.includes(this.url)
  }

  constructor(
    private utilitiesSrv: UtilitiesService,
    private perrosService: PerrosService,
    private gatosService: GatosService,
    private transferState: TransferState,
    private router: Router
  ) {}

  ngOnInit() {
    this.setBackgroundImage();
  }

  private setBackgroundImage() {

    // Primero seteo la imágen para que, con ese valor, pueda generar una clave única
    this.setSelectedImage();
    const IMAGE_KEY = makeStateKey<string>( 'recent-article-card-bg-image-' + (this.selectedImage || Math.random().toString()) );

    // Estoy del lado del cliente
    if (this.transferState.hasKey(IMAGE_KEY))
    {

      this.selectedImage = this.transferState.get(IMAGE_KEY, this.utilitiesSrv.selectImage( this.type ));
      this.transferState.remove(IMAGE_KEY);

    }

    // Estoy del lado del servidor
    else {
      this.transferState.set(IMAGE_KEY, this.selectedImage);
    }

  }

  private setSelectedImage() {

    if (this.type === 'dog') {  this.selectedImage = this.perrosService.setDogBreedImage(this.title) }
    else if (this.type === 'cat') { this.selectedImage = this.gatosService.setCatBreedImage(this.title) }
    else { this.selectedImage =  this.utilitiesSrv.selectImage( this.type ) }

  }

}
