export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const Sasaki: Pitcher1 = {
  throwingSpeed: 154
};

const Othiai: Batter1 = {
  battingAverage: 0.367
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: 0.367;
// };

//上を簡単にするのがintersection
type TwoWayPlayer = Pitcher1 & Batter1;

const Otani: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
};
