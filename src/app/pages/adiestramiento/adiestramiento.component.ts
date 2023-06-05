import { Component } from '@angular/core';
import { Faqs } from 'src/app/interfaces/accordion.interface';
import { MetaService } from 'src/app/services/meta.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-adiestramiento',
  templateUrl: './adiestramiento.component.html',
  styleUrls: ['./adiestramiento.component.scss']
})
export class AdiestramientoComponent {

  faqsDogs: Faqs[] = [
    {question: '¿Cuál es la mejor edad para comenzar a entrenar a mi perro?', answer: 'El entrenamiento puede comenzar tan pronto como tu cachorro haya recibido sus vacunas, generalmente alrededor de las 8 semanas de edad. Sin embargo, nunca es demasiado tarde para entrenar a un perro mayor.'},
    {question: '¿Por qué mi perro no responde al entrenamiento?', answer: 'Podría haber varias razones para esto. Tu perro puede no entender lo que le estás pidiendo, el método de entrenamiento puede no ser adecuado, o podría estar distraído. Es importante ser paciente y constante, y considerar la posibilidad de buscar el consejo de un entrenador de perros profesional.'},
    {question: '¿Cuánto debería durar cada sesión de entrenamiento?', answer: 'Las sesiones de entrenamiento deben ser cortas pero frecuentes. Los cachorros tienen períodos de atención cortos, por lo que las sesiones de entrenamiento solo deben durar de 5 a 10 minutos. Los perros adultos pueden ser capaces de concentrarse durante un poco más de tiempo.'},
    {question: '¿Debo usar golosinas durante el entrenamiento?', answer: 'Las golosinas pueden ser un gran motivador para los perros. Sin embargo, es importante asegurarse de que las golosinas no constituyan más del 10% de la ingesta calórica diaria de tu perro para evitar el aumento de peso.'},
    {question: 'Mi perro tiene miedo de ciertos objetos o situaciones. ¿Cómo puedo ayudarlo a superar su miedo?', answer: 'La desensibilización gradual puede ayudar a tu perro a superar su miedo. Esto implica introducirlo lentamente al objeto o situación que le asusta, asegurándote de que se sienta seguro y cómodo.'},
  ]

  faqsCats: Faqs[] = [
    {question: '¿Se pueden entrenar los gatos como los perros?', answer: 'Si bien los gatos pueden ser entrenados, su motivación y estilo de aprendizaje son diferentes a los de los perros. Los gatos son más independientes y pueden requerir diferentes técnicas de entrenamiento.'},
    {question: '¿Por qué mi gato araña los muebles y cómo puedo evitarlo?', answer: 'Arañar es un comportamiento natural para los gatos. Proporcionar un poste para rascar y recompensar a tu gato por usarlo puede ayudar a proteger tus muebles.'},
    {question: '¿Cómo puedo entrenar a mi gato para que use la caja de arena?', answer: 'La mayoría de los gatos usan naturalmente una caja de arena. Si tu gato tiene problemas, asegúrate de que la caja esté limpia, sea fácilmente accesible y esté en un lugar tranquilo. Si los problemas persisten, consulta a un veterinario para descartar cualquier problema médico.'},
    {question: '¿Puedo entrenar a mi gato para que camine con correa?', answer: 'Sí, algunos gatos pueden ser entrenados para caminar con correa. Comienza acostumbrando a tu gato a llevar un arnés en el interior, luego introdúcelo gradualmente al exterior.'},
    {question: 'Mi gato es agresivo con las visitas. ¿Qué puedo hacer?', answer: 'La agresión puede ser un signo de miedo o estrés. Intenta identificar qué está causando la agresión de tu gato y considera buscar el consejo de unLo siento, parece que hubo un problema con la traducción. Permíteme intentarlo de nuevo.'}
  ]

  constructor(private meta: MetaService, private navigationService: NavigationService) {
    this.navigationService.navigationBg.set('train');
    this._setMetaTags()
  }

  private _setMetaTags() {
    this.meta.setMetaTags(
      'Entrena a tu Mascota con Amor y Respeto - Esfera mascota',
      'Descubre técnicas efectivas de adiestramiento para mascotas. Mejora la conducta de tu perro o gato y fortalece tu vínculo con ellos. ¡Empieza hoy!',
    );
  }

}
