export interface Article {
    url: string;
    categories: ('Gatos' | 'Perros' | 'Salud' | 'Adiestramiento' | 'Alimentacion')[],
    'card-heading': string,
    sections: string[],
    destacado: boolean,
    creation: string | Date,
    title: string,
}
