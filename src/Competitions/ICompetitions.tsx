import { TraineeModel } from "../Trainees/ITrainees";

export interface CompetitionModel {
  id: number;
  toPay: number;
  name: string;
}

export interface CompetitionModelProp {
  competition: CompetitionModel;
}

export interface SortedTrainees {
  attendingTrainees: TraineeModel[];
  notAttendingTrainees: TraineeModel[];
}

export interface SortedTraineesProp {
  sortedTrainees: SortedTrainees;
}

export interface CompetitionAttendanceModel {
  eventID: number;
  traineeID: number;
}

export interface CompetitionAttendanceModelProp {
  competitionAttendance: CompetitionAttendanceModel;
}

// export interface TraineesChecklist {
//   id: number;
//   enabled: boolean;
//   attendingTrainees: Trainee[] | null;
//   filteredTrainees?: Trainee[] | null;
// }
