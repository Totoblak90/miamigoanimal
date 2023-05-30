export class Dog {
  weight?:             Measurement;
  height?:             Measurement;
  id?:                 number;
  name?:               string;
  bred_for?:           string;
  breed_group?:        string;
  life_span?:          string;
  temperament?:        string;
  origin?:             string;
  reference_image_id?: string;
  image?:              Image;

  constructor(data: any) {
    Object.assign(this, data);
  }

  static create(data: any): Dog {
    return new Dog(data);
  }
}

export class Measurement {
  imperial?: string;
  metric?:   string;
}

export class Image {
  id?:     string;
  width?:  number;
  height?: number;
  url?:    string;
}
