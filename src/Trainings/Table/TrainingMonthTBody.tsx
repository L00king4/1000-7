import {
  TrainingMonth,
  TrainingsStore,
} from "../../Redux/Slices/Trainings/ITrainingsSlice";
import { TrainingMonthTBodyTD } from "./TrainingMonthTBodyTD";
import { TrainingMonthTBodyTR } from "./TrainingMonthTBodyTR";

export const TrainingMonthTBody = ({
  trainingMonth,
}: {
  trainingMonth: TrainingMonth;
}) => {
  return (
    <tbody>
      {trainingMonth.trainingTrainees.map((trainingTrainee) => (
        <TrainingMonthTBodyTR
          key={"TRAININGMONTH TRAININGTRAINEE " + trainingTrainee.trainee.id}
          trainingTrainee={trainingTrainee}
          trainingInfos={trainingMonth.trainingInfos}
        />
      ))}
    </tbody>
  );
};
