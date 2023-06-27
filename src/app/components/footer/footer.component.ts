import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class FooterComponent {
  logoUrl = 'https://esferamascota.b-cdn.net/logo.webp'
}
