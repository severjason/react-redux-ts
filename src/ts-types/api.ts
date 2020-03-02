export interface Pet {
  id: string;
  type: 'dog' | 'cat' | 'dragon',
  weight: number;
  age: number;
  name: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
}
