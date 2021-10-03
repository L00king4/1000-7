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
  const selectedTrainees = trainingsStore.selected.selectedTrainees;
  return (
    <tbody>
      {trainingsStore.trainingMonth.trainingTrainees.map(
        (trainingTrainee, trainingTraineeIndex) => {
          const index = selectedTrainees.findIndex(
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
                selectedTrainees[index]?.selectedTrainingEntries
              }
            />
          );
        }
      )}
    </tbody>
  );
};
