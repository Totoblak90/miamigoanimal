import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  get navigationBgGradient() {

    const cssClass = {
      'navigation__background--extra': this.navigationService.navigationBg() === 'extra',
      'navigation__background--dog': this.navigationService.navigationBg() === 'dog',
      'navigation__background--cat': this.navigationService.navigationBg() === 'cat',
      'navigation__background--health': this.navigationService.navigationBg() === 'health',
      'navigation__background--food': this.navigationService.navigationBg() === 'food',
      'navigation__background--train': this.navigationService.navigationBg() === 'train',
    }

    return cssClass;

  }

  constructor(private navigationService: NavigationService) {}

}
