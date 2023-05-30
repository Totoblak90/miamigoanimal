import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'calculadora-de-raciones',
  templateUrl: './calculadora-de-raciones.component.html',
  styleUrls: ['./calculadora-de-raciones.component.scss']
})
export class CalculadoraDeRacionesComponent {
  rationsForm: FormGroup = this.fb.group({
    animalType: ['dog', Validators.required],
    weight: ['', [Validators.required, Validators.min(0)]],
    size: ['small', Validators.required]
  });
  rations: number = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  calculateRations() {
    const animalType = this.rationsForm.get('animalType')?.value;
    const weight = this.rationsForm.get('weight')?.value;
    const size = this.rationsForm?.get('size')?.value;

    if (animalType === 'dog') {
      // Aquí puedes ajustar la fórmula según tus necesidades
      this.rations = weight * 30 + 70;
    } else if (animalType === 'cat') {
      // Aquí puedes ajustar la fórmula según tus necesidades
      this.rations = weight * 20 + 70;
    }

    // Ajustar las raciones según el tamaño del animal
    if (size === 'small') {
      this.rations *= 1;
    } else if (size === 'medium') {
      this.rations *= 1.5;
    } else if (size === 'large') {
      this.rations *= 2;
    }
  }
}
