import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'simple-box',
  templateUrl: './simple-box.component.html',
  styleUrls: ['./simple-box.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class SimpleBoxComponent {
  @Input() link?: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';
}
