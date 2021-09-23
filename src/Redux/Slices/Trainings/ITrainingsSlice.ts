import { EventModel } from "../../../Interfaces/IEvent";
import { TraineeModel } from "../../../Trainees/ITrainees";

export interface Training extends EventModel {}
export interface TrainingInfo extends Training {}
export interface TrainingTrainee {
  id: number;
  fullname: number;
}
export interface TrainingEntries {
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

export interface TrainingTrainees {
  trainee: TrainingTrainee;
  trainingEntries: TrainingEntries;
  trainingPayedSpans: TrainingPayedSpans;
}

export interface TrainingInfo extends Training {}

export interface TrainingsStore {
  trainingInfos: Training[];
  trainingTrainees: TrainingTrainees[];
}
export interface NullableTrainingsStore {
  trainingInfos?: Training[];
  trainingTrainees?: TrainingTrainees[];
}
