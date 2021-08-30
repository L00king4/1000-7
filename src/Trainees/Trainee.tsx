import { TraineeModelProp } from "./ITrainees";

export const Trainee = ({ trainee }: TraineeModelProp) => (
  <div>{trainee.fullname}</div>
);
