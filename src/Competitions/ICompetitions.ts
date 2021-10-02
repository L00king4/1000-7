import { Moment } from "moment";
import { EventModel } from "../Interfaces/IEvent";
import { CompetitionEntry } from "../Redux/Slices/Competitions/ICompetitionsSlice";
import { TraineeModel } from "../Trainees/ITrainees";
import { SortedTrainees } from "../Trainees/SortedTrainees";

export interface CompetitionModel extends EventModel {
  date: Moment;
}

export interface CompetitionTraineeModel extends TraineeModel {
  amountPayed: number;
}

export type CompetitionTraineeType = keyof SortedTrainees;
export interface CompetitionTraineeModelKVP {
  index: number;
  trainee: CompetitionTraineeModel;
}

export interface TypedCompetitionTraineeModelKVP {
  index: number;
  trainee: CompetitionTraineeModel;
  type: CompetitionTraineeType;
}

export interface CompetitionAttendanceModel {
  eventID: number;
  traineeID: number;
}

export interface CompetitionPayment {
  amount: number;
  traineeID: number;
}

export interface CompetitionEntryKVP {
  index: number;
  competitionEntry: CompetitionEntry;
}

export interface CompetitionModelKVP {
  index: number;
  competition: CompetitionModel;
}
export interface CompetitionTraineeIndexedType {
  index: number;
  type: CompetitionTraineeType;
}

export interface NullableSortedTrainees {
  attendingTrainees?: CompetitionTraineeModel[];
  notAttendingTrainees?: CompetitionTraineeModel[];
}

export type NoIDCompetitionModel = Omit<CompetitionModel, "id">;
