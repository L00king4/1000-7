export interface TraineeModel {
  id: number;
  fullname: string;
  age: number;
  beltColor: number;
}

export interface TraineeModels {
  trainees: TraineeModel[];
}
