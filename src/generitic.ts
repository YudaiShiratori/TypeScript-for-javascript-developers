export {}

// const echo = (arg: nunber): number => {
//     return arg;
// }

// const echo = (arg: string): string => {
//     return arg;
// }

// 型が違うだけなので、共通化したい\
// genercs 抽象の型を使う

const echo = <T>(arg: T):T => {
    return arg;
}

console.log(echo<number>(100));
console.log(echo<string>("Hola"))

class Mirror<T>{
    constructor(public value: T) {}

    echo(): T{
        return this.value;
    }
}

console.log(new Mirror<number>(123).echo())