import { TrainingInfo } from "../../Redux/Slices/Trainings/ITrainingsSlice";
import { TrainingMonthTHeadTH } from "./TrainingMonthTHeadTH";

export const TrainingMonthTHead = ({
  trainingInfos,
}: {
  trainingInfos: TrainingInfo[];
}) => {
  const naming = (date: string) => {
    const [day, time] = date.split("T");
    return [day.split("-")[2] + ". Fri", " 18:30"];
  };
  return (
    <thead>
      <tr>
        <TrainingMonthTHeadTH>Trainee\Day</TrainingMonthTHeadTH>
        {trainingInfos.map((trainingInfo) => (
          <TrainingMonthTHeadTH
            key={"TRAININGINFO " + trainingInfo.id.toString()}
          >
            {/* {trainingInfo.id}|{trainingInfo.name} */}
            {naming(trainingInfo.date)[0]}
            <hr />
            {naming(trainingInfo.date)[1]}
          </TrainingMonthTHeadTH>
        ))}
      </tr>
    </thead>
  );
};
