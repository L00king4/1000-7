import { Moment } from "moment";
import { SortingMethod } from "../../../Addons/Functional/Sorting";
import { Optional } from "../../../Addons/Types/Optionals";

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
  Both,
}

export enum BeltColor {
  Unknown,
  White,
  GreyWhite,
  Grey,
  GreyBlack,
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

export interface Trainees {
  trainees: TraineeModel[];
  editingTrainees: TraineeModel[];
}
export type NullableTrainees = Optional<Trainees>;

export type SortableProp = keyof TraineeModel;

export type SortingTarget = keyof Trainees | "both";

export interface SortingSettings {
  sortableProp: SortableProp;
  sortingMethod: SortingMethod;
  sortingTarget: SortingTarget;
}

export interface FilteringSettings {}

export interface Settings {
  sorting: SortingSettings;
  filtering: FilteringSettings;
}

export type NullableSettings = Optional<Settings>;

export interface TraineesShowedBooleans {
  showAddTrainee: boolean;
  showUpdateTrainee: boolean;
  showUpdateAllTrainees: boolean;
}

export type NullableTraineesShowedBooleans = Optional<TraineesShowedBooleans>;

export interface TraineesStore extends Trainees {
  settings: Settings;
  showedBooleans: TraineesShowedBooleans;
}

export interface NullableTraineesStore extends NullableTrainees {
  settings?: NullableSettings;
  showedBooleans?: NullableTraineesShowedBooleans;
}

export interface Trainee2EditingTraineeKVP {
  index: number;
  trainee: TraineeModel;
  editingTrainee: TraineeModel;
}
