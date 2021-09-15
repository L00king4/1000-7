export interface TraineeModel {
  id: number;
  fullname: string;
  birthday: string;
  ageGroup: AgeGroup;
  beltColor: BeltColor;
}

export enum AgeGroup {
  None,
  Young,
  Elder,
  Both,
}

export enum BeltColor {
  White,
  GrayWhite,
  Gray,
  GrayBlack,
  YellowWhite,
  Yellow,
  YellowBlack,
  OrangeWhite,
  Orange,
  OrangeBlack,
  GreenWhite,
  Green,
  GreenBlack,
  Blue,
  Purple,
  Brown,
  Black,
  RedBlack,
  RedWhite,
  Red,
}
