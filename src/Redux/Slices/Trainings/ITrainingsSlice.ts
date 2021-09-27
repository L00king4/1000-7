import { Moment } from "moment";
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
  eventID: number;
  payedAmount: number;
  hasAttended: boolean;
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
}
export interface NullableTrainingsStore {
  trainingMonth?: TrainingMonth;
}
