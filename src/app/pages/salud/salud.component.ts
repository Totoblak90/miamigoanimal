import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.scss']
})
export class SaludComponent {

  constructor(private navigationService: NavigationService) {
    this.navigationService.navigationBg.set('health')
  }

}
