import {
  TrainingInfo,
  TrainingMonth,
  TrainingTrainee,
} from "../../Redux/Slices/Trainings/ITrainingsSlice";
import { TrainingMonthTBodyTD } from "./TrainingMonthTBodyTD";
import { TrainingMonthTBodyTDTrainee } from "./TrainingMonthTBodyTDTrainee";

export const TrainingMonthTBodyTR = ({
  trainingTrainee,
  trainingInfos,
}: {
  trainingTrainee: TrainingTrainee;
  trainingInfos: TrainingInfo[];
}) => {
  const { trainee, trainingEntries, trainingPayedSpans } = trainingTrainee;
  return (
    <tr>
      <TrainingMonthTBodyTDTrainee>
        {trainee.fullname}
      </TrainingMonthTBodyTDTrainee>
      {trainingInfos.map((trainingEntry) => {
        const trainingEntriesIndex = trainingEntries.findIndex(
          (x) => x.eventID === trainingEntry.id
        );
        return (
          <TrainingMonthTBodyTD
            key={
              "TRAININGMONTH TRAININGTRAINEE " +
              trainingTrainee.trainee.id +
              " TRAININGENTRY " +
              trainingEntry.id
            }
          >
            {trainingEntries[trainingEntriesIndex]?.hasAttended ? "+ " : "- "}
            {trainingEntries[trainingEntriesIndex]?.payedAmount}
            {}
          </TrainingMonthTBodyTD>
        );
      })}
    </tr>
  );
};
