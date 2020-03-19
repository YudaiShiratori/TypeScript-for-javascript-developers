export {};

//(string | number) だと順番まで指定できない
// タプル型は型推論で表示されない
let profile: [string, number] = ['Has', 43];
profile = ['ss', 23];
