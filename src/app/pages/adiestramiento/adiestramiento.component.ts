import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-adiestramiento',
  templateUrl: './adiestramiento.component.html',
  styleUrls: ['./adiestramiento.component.scss']
})
export class AdiestramientoComponent {

  constructor(private navigationService: NavigationService) {
    this.navigationService.navigationBg.set('train');
  }

}
