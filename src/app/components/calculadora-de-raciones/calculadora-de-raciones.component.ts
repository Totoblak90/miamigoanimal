import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlimentacionService } from 'src/app/services/alimentacion.service';

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
  rations = this.alimentacionService.foodRations;

  get buttonDisabled() {
    return this.rationsForm.invalid || this.rationsForm.get('weight')?.value <= 0;
   }


  constructor(private fb: FormBuilder, private alimentacionService: AlimentacionService) { }

  calculateRations() {
    const animalType = this.rationsForm.get('animalType')?.value;
    const weight = this.rationsForm.get('weight')?.value;
    const size = this.rationsForm?.get('size')?.value;

    if (animalType === 'dog') {
      // Aquí puedes ajustar la fórmula según tus necesidades
      this.rations.set(weight * 30 + 70);
    } else if (animalType === 'cat') {
      // Aquí puedes ajustar la fórmula según tus necesidades
      this.rations.set(weight * 20 + 70);
    }

    // Ajustar las raciones según el tamaño del animal
    if (size === 'medium') {
      this.rations.set(this.rations() * 1.5)
    } else if (size === 'large') {
      this.rations.set(this.rations() * 2);
    }

  }

}
