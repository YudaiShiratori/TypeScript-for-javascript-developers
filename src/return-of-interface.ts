export {};

class Mahoutsukai {}
class Souryo {}

//クラスの多重継承できないが、interfaceの多重継承はできる
// class Taro extends Mahoutsukai, Souryo {}

//interfaceは抽象クラスみたいなもん
interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('inonazun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
