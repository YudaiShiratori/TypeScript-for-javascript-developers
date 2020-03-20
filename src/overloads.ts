export {};

// function double(value: number): number;
// function double(value: string): string;

//overload 同じ名前でも使える
function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
  // else {
  //   throw "error"
  // }
}

// function double(value: number): number {
//   return value * 2;
// }
console.log(double(100));

// function double(value: string): string {
//   return value + value;
// }
console.log(double('GO'));

// console.log(double(true));
