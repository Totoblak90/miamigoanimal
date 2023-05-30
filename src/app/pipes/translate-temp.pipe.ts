import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateTemp',
})
export class TranslateTempPipe implements PipeTransform {
  transform(temperament: string): string {

    const temperamentTranslations: { [key: string]: string } = {
      Stubborn: 'Terco',
      Curious: 'Curioso',
      Playful: 'Juguetón',
      Adventurous: 'Aventurero',
      Active: 'Activo',
      'Fun-loving': 'Amante de la diversión',
      Aloof: 'Distante',
      Clownish: 'Payaso',
      Dignified: 'Digno',
      Independent: 'Independiente',
      Happy: 'Feliz',
      Wild: 'Salvaje',
      Hardworking: 'Trabajador',
      Dutiful: 'Cumplidor',
      Outgoing: 'Extrovertido',
      Friendly: 'Amigable',
      Alert: 'Alerta',
      Confident: 'Confiado',
      Intelligent: 'Inteligente',
      Courageous: 'Corajudo',
      Loyal: 'Leal',
      Brave: 'Valiente',
      Docile: 'Dócil',
      Responsive: 'Atento',
      Composed: 'Compuesto',
      Receptive: 'Receptivo',
      Faithful: 'Fiel',
      Loving: 'Amoroso',
      Protective: 'Protector',
      Trainable: 'Entrenable',
      Responsible: 'Responsable',
      Energetic: 'Energético',
      Gentle: 'Suave',
      Dominant: 'Dominante',
      'Strong Willed': 'Voluntarioso',
      Affectionate: 'Cariñoso',
      Obedient: 'Obediente',
      Assertive: 'Asertivo',
      Devoted: 'Devoto',
      Reserved: 'Reservado',
    };

    return temperamentTranslations[temperament] || temperament;
  }
}
