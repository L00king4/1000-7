import { TrainingInfo } from "../../Redux/Slices/Trainings/ITrainingsSlice";
import { TrainingMonthTHeadTH } from "./TrainingMonthTHeadTH";

export const TrainingMonthTHead = ({
  trainingInfos,
}: {
  trainingInfos: TrainingInfo[];
}) => {
  return (
    <thead>
      <tr>
        <TrainingMonthTHeadTH>Trainee\Day</TrainingMonthTHeadTH>
        {trainingInfos.map((trainingInfo) => (
          <TrainingMonthTHeadTH
            key={"TRAININGINFO " + trainingInfo.id.toString()}
          >
            {trainingInfo.id}|{trainingInfo.name}
          </TrainingMonthTHeadTH>
        ))}
      </tr>
    </thead>
  );
};
