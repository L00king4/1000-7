import { TraineeModel } from "../Trainees/ITrainees";

export interface CompetitionModel {
  id: number;
  toPay: number;
  name: string;
}

export interface CompetitionTraineeModel extends TraineeModel {
  amountPayed: number | null;
}

export interface SortedTrainees {
  attendingTrainees: CompetitionTraineeModel[];
  notAttendingTrainees: CompetitionTraineeModel[];
}

export interface CompetitionAttendanceModel {
  eventID: number;
  traineeID: number;
}

export interface CompetitionPayment {
  amount: number;
  traineeID: number;
}
// export interface TraineesChecklist {
//   id: number;
//   enabled: boolean;
//   attendingTrainees: Trainee[] | null;
//   filteredTrainees?: Trainee[] | null;
// }
