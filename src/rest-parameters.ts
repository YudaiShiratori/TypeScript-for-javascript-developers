export {};

const reducer = (accumulator: number, currentValue: number) => {
  return accumulator + currentValue;
};

// expected output: 15
// 引数いくらでも
const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

sum(1, 2, 3, 4, 5);

const array1 = [1, 2, 3, 4];
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
