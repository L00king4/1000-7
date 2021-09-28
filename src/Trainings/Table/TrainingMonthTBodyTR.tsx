import {
  SelectedTrainingEntry,
  TrainingInfo,
  TrainingMonth,
  TrainingTrainee,
  TrainingTraineeKVP,
} from "../../Redux/Slices/Trainings/ITrainingsSlice";
import { TrainingMonthTBodyTD } from "./TrainingMonthTBodyTD";
import { TrainingMonthTBodyTDTrainee } from "./TrainingMonthTBodyTDTrainee";

export const TrainingMonthTBodyTR = ({
  trainingTraineeKVP,
  trainingInfos,
  selectedTraineeEntries,
}: {
  trainingTraineeKVP: TrainingTraineeKVP;
  trainingInfos: TrainingInfo[];
  selectedTraineeEntries: SelectedTrainingEntry[];
}) => {
  const { trainee, trainingEntries, trainingPayedSpans } =
    trainingTraineeKVP.trainingTrainee;
  return (
    <tr>
      <TrainingMonthTBodyTDTrainee>
        {trainee.fullname}
      </TrainingMonthTBodyTDTrainee>
      {trainingInfos.map((trainingInfo) => {
        const trainingEntryIndex = trainingEntries.findIndex(
          (x) => x.eventID === trainingInfo.id
        );
        return (
          <TrainingMonthTBodyTD
            key={
              "TRAININGMONTH TRAININGTRAINEE " +
              trainingTraineeKVP.trainingTrainee.trainee.id +
              " TRAININGINFO " +
              trainingInfo.id
            }
            trainingEntryKVP={{
              index: trainingEntryIndex,
              trainingEntry: trainingEntries[trainingEntryIndex],
            }}
            trainingInfo={trainingInfo}
            trainingTraineeKVP={trainingTraineeKVP}
            selected={selectedTraineeEntries}
          />
        );
      })}
    </tr>
  );
};
