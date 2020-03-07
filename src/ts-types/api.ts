export type Pet = {
  id: string;
  type: 'dog' | 'cat' | 'dragon',
  weight: number;
  age: number;
  name: string;
}

export type Service = {
  id: string;
  name: string;
  description: string;
  price: number;
}
