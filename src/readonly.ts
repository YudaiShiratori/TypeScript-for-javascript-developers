export {};

class VisaCard {
  //readonly 読み取り専用
  constructor(public readonly owner: string) {}

  // readonly owner: string;

  // constructor(owner: string) {
  //   this.owner = owner;
  // }
}

let myVisaCard = new VisaCard('yudqi');
console.log(myVisaCard);
// myVisaCard.owner = 'aa';
