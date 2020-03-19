export {};

type Mojiretu = string;

const foostring: string = 'hola';
const fooMojiretu: Mojiretu = 'Hola';

const example1 = {
  name: 'hum',
  age: 43
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'hh',
  age: 11
};

type Profile2 = typeof example1;
