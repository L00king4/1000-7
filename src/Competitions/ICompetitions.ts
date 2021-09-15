import { TraineeModel } from "../Trainees/ITrainees";

export interface CompetitionModel {
  id: number;
  toPay: number;
  name: string;
  description: string;
  date: string;
}

export interface CompetitionTraineeModel extends TraineeModel {
  amountPayed: number;
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
