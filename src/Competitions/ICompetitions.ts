import { Moment } from "moment";
import { EventModel } from "../Interfaces/IEvent";
import { TraineeModel } from "../Trainees/ITrainees";

export interface CompetitionModel extends EventModel {
  date: Moment;
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
