import { Moment } from "moment";
import { BooleanLiteral } from "typescript";
import { EventModel } from "../../../Interfaces/IEvent";
import { TrainingMonth } from "../../../Trainings/Table/TrainingMonth";

export interface Training extends EventModel {
  date: Date;
}
export interface TrainingInfo extends Training {}
export interface TrainingTraineeModel {
  id: number;
  fullname: number;
}
export interface TrainingEntry {
  selected: boolean;
  eventID: number;
  payedAmount: number;
  hasAttended: boolean;
}
export interface NullableTrainingEntry {
  selected?: boolean;
  eventID: number;
  payedAmount?: number;
  hasAttended?: boolean;
}
export interface TrainingPayedSpans {
  payedAt: Date;
  spanPayedStart: Date;
  spanPayedEnd: Date;
  amount: number;
}

export interface TrainingTrainee {
  trainee: TrainingTraineeModel;
  trainingEntries: TrainingEntry[];
  trainingPayedSpans: TrainingPayedSpans;
}

export interface TrainingMonthSettings {
  showedDate: Moment;
}

export interface SelectedTrainingEntry {
  trainingEntryID: number;
}

export interface SelectedTrainee {
  trainingTraineeID: number;
  selectedTrainingEntries: SelectedTrainingEntry[];
}

export interface TrainingInfo extends Training {}

export interface TrainingMonth {
  trainingInfos: Training[];
  trainingTrainees: TrainingTrainee[];
  settings?: TrainingMonthSettings;
}

export interface NullableTrainingMonth {
  trainingInfos?: Training[];
  trainingTrainees?: TrainingTrainee[];
}

export interface TrainingsStore {
  trainingMonth: TrainingMonth;
  selectedTrainees: SelectedTrainee[];
}
export interface NullableTrainingsStore {
  trainingMonth?: TrainingMonth;
  selectedTrainees?: SelectedTrainee[];
}

export interface TrainingTraineeKVP {
  index: number;
  trainingTrainee: TrainingTrainee;
}

export interface TrainingEntryKVP {
  index: number;
  trainingEntry: TrainingEntry;
}
