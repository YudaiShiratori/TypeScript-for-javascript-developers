export {};

class Person {
  //TypeScriptの初期化処理の短縮
  constructor(public name: string, protected age: number) {}

  // name: string;
  // protected age: number;
  // constructor(name: string, age: number) {
  //   this.name = name;
  //   this.age = age;
  // }
}

const me = new Person('Yudai', 23);
console.log(me);
