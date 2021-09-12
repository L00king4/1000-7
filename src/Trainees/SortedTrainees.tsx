import { AxiosResponse } from "axios";
import { TraineeModel } from "./ITrainees";

export class SortedTrainees<SpecificTraineeModel extends TraineeModel> {
  attendingTrainees: SpecificTraineeModel[];
  notAttendingTrainees: SpecificTraineeModel[];
  switchTrainee = (trainee: SpecificTraineeModel) => {
    const attIndex = this.attendingTrainees.indexOf(trainee);
    const notAttIndex = this.notAttendingTrainees.indexOf(trainee);
    if (attIndex !== -1) {
      this.attendingTrainees = [
        ...this.attendingTrainees.slice(0, attIndex),
        ...this.attendingTrainees.slice(attIndex + 1),
      ];
      this.notAttendingTrainees = [
        this.attendingTrainees[attIndex],
        ...this.notAttendingTrainees,
      ];
    } else if (notAttIndex !== -1) {
      this.attendingTrainees = [
        ...this.attendingTrainees,
        this.notAttendingTrainees[notAttIndex],
      ];
      this.notAttendingTrainees = [
        ...this.notAttendingTrainees.slice(0, notAttIndex),
        ...this.notAttendingTrainees.slice(notAttIndex + 1),
      ];
    }
    return this;
  };

  updateTrainee = (trainee: SpecificTraineeModel) => {};

  constructor(a: AxiosResponse | undefined) {
    if (a !== undefined) {
      this.attendingTrainees = a.data.attendingTrainees;
      this.notAttendingTrainees = a.data.notAttendingTrainees;
    } else {
      this.attendingTrainees = [];
      this.notAttendingTrainees = [];
    }
  }
}
