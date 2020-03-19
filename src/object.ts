export {};

let profile1: object = { name: 'dcd' };
//non error
profile1 = { birthYear: 1976 };

let profile2: {
  name: string;
} = { name: 'cdc' };
// error 型指定してから
// profile = { birthYear: 1976 };
