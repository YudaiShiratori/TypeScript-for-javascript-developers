export {};

//同じ名前をどう共存するか→namesspaces

namespace Japanse {
  //export でこのclassの外からのアクセスを許可

  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanse.Tokyo.Person('yudai');
console.log(me);

const omae = new Japanse.Osaka.Person('yudai');
console.log(omae);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);
