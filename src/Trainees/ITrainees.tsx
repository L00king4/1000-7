export interface TraineeModel {
  id: number;
  fullname: string;
  birthday: string | undefined;
  ageGroup: AgeGroup;
  beltColor: BeltColor;
}

export interface NullableTraineeModel {
  id?: number;
  fullname?: string;
  birthday?: string | undefined;
  ageGroup?: AgeGroup;
  beltColor?: BeltColor;
}

export enum AgeGroup {
  None,
  Young,
  Elder,
  Both,
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

export const getAgeGroupKVPs = () => {
  const arrayObjects = [];

  for (const [propertyKey, propertyValue] of Object.entries(AgeGroup)) {
    if (!Number.isNaN(Number(propertyKey))) {
      continue;
    }
    arrayObjects.push({ value: propertyValue, name: propertyKey });
  }

  return arrayObjects;
};

export const getBeltColorKVPs = () => {
  const arrayObjects = [];

  for (const [propertyKey, propertyValue] of Object.entries(BeltColor)) {
    if (!Number.isNaN(Number(propertyKey))) {
      continue;
    }
    arrayObjects.push({ value: propertyValue, name: propertyKey });
  }

  return arrayObjects;
};
