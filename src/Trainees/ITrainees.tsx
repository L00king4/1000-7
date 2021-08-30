export interface TraineeModel {
  id: number;
  fullname: string;
  age: number;
  beltColor: number;
}

export interface TraineeModelProp {
  trainee: TraineeModel;
}

export interface TraineeModels {
  trainees: TraineeModel[];
}
