import { AddTrainingModal } from "./AddTrainingModal";
import { TrainingMonth } from "./Table/TrainingMonth";
import { TrainingMonthActionBar } from "./TrainingMonthActionBar";
import { TrainingMonthNavigation } from "./TrainingMonthNavigation";

export const Trainings = () => {
  return (
    <div>
      <TrainingMonthNavigation />
      <AddTrainingModal />
      <TrainingMonth />
      <TrainingMonthActionBar />
    </div>
  );
};
