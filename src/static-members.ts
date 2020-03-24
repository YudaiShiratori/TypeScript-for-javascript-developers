export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'yudai';
  static lastName: string = 'shiratori';

  static work() {
    return `hey, guys! This is ${this.firstName} Are you interestd in TypeScript?`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

// class名から
console.log(Me.isProgrammer);
console.log(Me.work());

//staticだとインスタンス化がいらない
//インスタンスの影響を受けない
