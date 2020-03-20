export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};

bmi(1.45, 55);
bmi(1.76, 59, true);

// bmi (m , kg , console.log?)
// あってもなくてもいい引数＝optional=?
