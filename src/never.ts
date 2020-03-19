export {};

function error(message: string): never {
  throw new Error(message);
}
// never 例外

try {
  error('test');
} catch (error) {
  console.log(error);
}

//void返り値ある、neverはない
let foo: void = undefined;
let bar: never = error('errorのみnever使える');
