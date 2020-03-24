export {};

class MyNumberCard {
  constructor(private _owner: string, private _secretNumber: number) {}
  // getで参照できるように
  get owner() {
    return this._owner;
  }
  // setで値の変更できるように
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }
  // secretNumberの変更確認用
  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('yudai', 12344);
// card.owner = 'joun';
console.log(card.owner);

// 参照できない
// card._secretNumber;
console.log(card.debugPrint());

console.log(card.secretNumber);
