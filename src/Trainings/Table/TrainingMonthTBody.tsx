import {
  SelectedTrainingEntry,
  TrainingMonth,
  TrainingsStore,
} from "../../Redux/Slices/Trainings/ITrainingsSlice";
import { TrainingMonthTBodyTD } from "./TrainingMonthTBodyTD";
import { TrainingMonthTBodyTR } from "./TrainingMonthTBodyTR";

export const TrainingMonthTBody = ({
  trainingsStore,
}: {
  trainingsStore: TrainingsStore;
}) => {
  return (
    <tbody>
      {trainingsStore.trainingMonth.trainingTrainees.map(
        (trainingTrainee, trainingTraineeIndex) => {
          const index = trainingsStore.selectedTrainees.findIndex(
            (x) => x.trainingTraineeID === trainingTrainee.trainee.id
          );
          return (
            <TrainingMonthTBodyTR
              key={
                "TRAININGMONTH TRAININGTRAINEE " + trainingTrainee.trainee.id
              }
              trainingInfos={trainingsStore.trainingMonth.trainingInfos}
              trainingTraineeKVP={{
                index: trainingTraineeIndex,
                trainingTrainee: trainingTrainee,
              }}
              selectedTraineeEntries={
                trainingsStore.selectedTrainees[index]?.selectedTrainingEntries
              }
            />
          );
        }
      )}
    </tbody>
  );
};
