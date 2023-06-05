import { Component } from '@angular/core';
import { Faqs } from 'src/app/interfaces/accordion.interface';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.scss']
})
export class SaludComponent {

  faqsDogs: Faqs[] = [
    {question: '¿Con qué frecuencia debo llevar a mi perro al veterinario?', answer: 'Los cachorros deben ser revisados cada 3-4 semanas hasta que tengan al menos 16 semanas de edad. Los perros adultos deben tener un chequeo anual, y los perros mayores de 7 años deben ser revisados dos veces al año.'},
    {question: '¿Cómo sé si mi perro tiene sobrepeso?', answer: 'Un perro con sobrepeso puede tener dificultades para moverse, mostrar falta de energía y tener un abdomen distendido. Si no puedes sentir las costillas de tu perro al tocarlo, podría tener sobrepeso. Consulta a tu veterinario para obtener una evaluación precisa.'},
    {question: '¿Qué debo hacer si mi perro tiene pulgas?', answer: 'Existen varios tratamientos disponibles para las pulgas, incluyendo medicamentos orales, champús y collares antipulgas. Consulta a tu veterinario para determinar el mejor tratamiento para tu perro.'},
    {question: '¿Cómo puedo saber si mi perro está enfermo?', answer: 'Algunos signos comunes de enfermedad en los perros incluyen cambios en el apetito o el comportamiento, tos, estornudos, vómitos, diarrea, letargo y pérdida de peso. Si notas alguno de estos síntomas, debes llevar a tu perro al veterinario.'},
    {question: '¿Qué debo hacer si mi perro come algo tóxico?', answer: 'Si sospechas que tu perro ha ingerido algo tóxico, debes contactar a tu veterinario inmediatamente. No intentes inducir el vómito a menos que tu veterinario te lo indique.'},
    {question: '¿Cómo puedo prevenir la enfermedad dental en mi perro?', answer: 'La mejor manera de prevenir la enfermedad dental en los perros es a través de una higiene dental regular, que incluye cepillar los dientes de tu perro y proporcionarle juguetes para masticar que ayuden a limpiar sus dientes.'},
    {question: '¿Cómo puedo saber si mi perro tiene parásitos?', answer: 'Algunos signos comunes de parásitos en los perros incluyen pérdida de peso, cambios en el apetito, vómitos, diarrea y picazón en el área anal. Si sospechas que tu perro tiene parásitos, debes llevarlo al veterinario para un diagnóstico y tratamiento.'},
    {question: '¿Cómo puedo prevenir las garrapatas en mi perro?', answer: 'Puedes prevenir las garrapatas en tu perro utilizando productos preventivos de garrapatas, revisando a tu perro regularmente para detectar garrapatas, y manteniendo a tu perro fuera de áreas con alta infestación de garrapatas.'},
    {question: '¿Cómo puedo saber si mi perro tiene artritis?', answer: 'Los signos comunes de artritis enlos perros incluyen cojera, dificultad para moverse, irritabilidad, cambios en el apetito y letargo. Si sospechas que tu perro tiene artritis, debes llevarlo al veterinario para un diagnóstico y tratamiento.'},
    {question: '¿Cómo puedo prevenir las enfermedades del corazón en mi perro?', answer: 'La mejor manera de prevenir las enfermedades del corazón en los perros es a través de una dieta saludable, ejercicio regular, chequeos veterinarios regulares y evitar la exposición al humo de segunda mano.'},
  ]

  faqsCats: Faqs[] = [
    {question: '¿Con qué frecuencia debo llevar a mi gato al veterinario?', answer: 'Los gatitos deben ser revisados cada 3-4 semanas hasta que tengan al menos 16 semanas de edad. Los gatos adultos deben tener un chequeo anual, y los gatos mayores de 7 años deben ser revisados dos veces al año.'},
    {question: '¿Cómo sé si mi gato tiene sobrepeso?', answer: 'Un gato con sobrepeso puede tener dificultades para moverse, mostrar falta de energía y tener un abdomen distendido. Si no puedes sentir las costillas de tu gato al tocarlo, podría tener sobrepeso. Consulta a tu veterinario para obtener una evaluación precisa.'},
    {question: '¿Qué debo hacer si mi gato tiene pulgas?', answer: 'Existen varios tratamientos disponibles para las pulgas, incluyendo medicamentos orales, sprays y collares antipulgas. Consulta a tu veterinario para determinar el mejor tratamiento para tu gato.'},
    {question: '¿Cómo puedo saber si mi gato está enfermo?', answer: 'Algunos signos comunes de enfermedad en los gatos incluyen cambios en el apetito o el comportamiento, tos, estornudos, vómitos, diarrea, letargo y pérdida de peso. Si notas alguno de estos síntomas, debes llevar a tu gato al veterinario.'},
    {question: '¿Qué debo hacer si mi gato come algo tóxico?', answer: 'Si sospechas que tu gato ha ingerido algo tóxico, debes contactar a tu veterinario inmediatamente. No intentes inducir el vómito a menos que tu veterinario te lo indique.'},
    {question: '¿Cómo puedo prevenir la enfermedad dental en mi gato?', answer: 'La mejor manera de prevenir la enfermedad dental en los gatos es a través de una higiene dental regular, que incluye cepillar los dientes de tu gato y proporcionarle juguetes para masticar que ayuden a limpiar sus dientes.'},
    {question: '¿Cómo puedo saber si mi gato tiene parásitos?', answer: 'Algunos signos comunes de parásitos en los gatos incluyen pérdida de peso, cambios en el apetito, vómitos, diarrea y picazón en el área anal. Si sospechas que tu gato tiene parásitos, debes llevarlo al veterinario para un diagnóstico y tratamiento.'},
    {question: '¿Cómo puedo prevenir las garrapatas en mi gato?', answer: 'Puedes prevenir las garrapatas en tu gato utilizando productos preventivosde garrapatas, revisando a tu gato regularmente para detectar garrapatas, y manteniendo a tu gato fuera de áreas con alta infestación de garrapatas.'},
    {question: '¿Cómo puedo saber si mi gato tiene artritis?', answer: 'Los signos comunes de artritis en los gatos incluyen cambios en el comportamiento, dificultad para saltar o moverse, irritabilidad y cambios en el aseo personal. Si sospechas que tu gato tiene artritis, debes llevarlo al veterinario para un diagnóstico y tratamiento.'},
    {question: '¿Cómo puedo prevenir las enfermedades del corazón en mi gato?', answer: 'La mejor manera de prevenir las enfermedades del corazón en los gatos es a través de una dieta saludable, ejercicio regular, chequeos veterinarios regulares y evitar la exposición al humo de segunda mano.'},
  ]

  constructor(private metaSrv: MetaService, private navigationService: NavigationService) {
    this.navigationService.navigationBg.set('health');
    this._setMetaTags();
  }

  private _setMetaTags() {
    this.metaSrv.setMetaTags(
      'Consejos para Mantener a tus Mascotas Saludables - Esfera mascota',
      'En nuestra sección de salud, encuentra todo lo que necesitas para cuidar la salud de tu perro o gato. Aprende a entender las necesidades de tu mascota.'
    );
  }

}
