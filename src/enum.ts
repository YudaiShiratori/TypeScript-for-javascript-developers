export {};

enum Months {
  // January,
  // 先頭をずらす
  January = 1,
  Febuary,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

//0
console.log(Months.January);
//1
console.log(Months.December);

// //js
// const MouthJS = {
//   January: 0,
//   Febuary: 1
// }

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFFF',
  GREEN = '#008000'
}

let green = COLORS.GREEN;
console.log({ green });
