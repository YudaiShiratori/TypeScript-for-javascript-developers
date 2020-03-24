export {};
//抽象クラス　必ずoverlideする　親では中身を書かない

abstract class Animal {
  abstract cry(): string;
}
class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

//抽象クラスは必ず子クラスに必要
// class Tigar extends Animal {}
