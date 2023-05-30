export interface Dog {
  weight:             Measurement;
  height:             Measurement;
  id:                 number;
  name:               string;
  bred_for:           string;
  breed_group:        string;
  life_span:          string;
  temperament:        string;
  origin:             string;
  reference_image_id: string;
  image:              Image;
}

export interface Measurement {
  imperial: string;
  metric:   string;
}

export interface Image {
  id:     string;
  width:  number;
  height: number;
  url:    string;
}
