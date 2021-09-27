import { Moment } from "moment";

export interface TraineeModel {
  id: number;
  fullname: string;
  birthday: Moment;
  ageGroup: AgeGroup;
  beltColor: BeltColor;
}

export interface NullableTraineeModel {
  id?: number;
  fullname?: string;
  birthday?: Moment;
  ageGroup?: AgeGroup;
  beltColor?: BeltColor;
}

export enum AgeGroup {
  None,
  Young,
  Elder,
  All,
}

export enum BeltColor {
  Unknown,
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
