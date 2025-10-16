export interface Patient {
  id: number;
  name: string;
  age: number;
  email: string;
  phone: string;
  username: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export interface NewPatientForm {
  name: string;
  age: string;
  email: string;
  phone: string;
  address: string;
}
