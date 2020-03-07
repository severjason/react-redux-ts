import { Pet, Service } from './ts-types/api';

export const getPetsAPIRequest = (page?: number): Pet[] => ([
  {
    id: '1',
    type: 'cat',
    age: 2,
    name: 'Regular cat',
    weight: 4,
  },
  {
    id: '2',
    type: 'dog',
    age: 5,
    name: 'Evil dog',
    weight: 20,
  },
  {
    id: '3',
    type: 'dragon',
    age: 10000000,
    name: 'Balthromaw',
    weight: 1000,
  }
]);

export const getServicesAPIRequest = (): Service[] => ([
  {
    id: '4',
    name: 'Cat wash',
    description: 'Express cat wash',
    price: 20,
  },
  {
    id: '5',
    name: 'Soul bonding',
    description: 'Dragon soul bonding',
    price: 155,
  }
]);
