import React from "react";
import { useDispatch } from "react-redux";
import {
  addDefaultTrainingEntry,
  toggleSelectTrainingEntry,
} from "../../Redux/Services/TrainingsService";
import {
  TrainingEntryKVP,
  TrainingInfo,
  TrainingTraineeKVP,
} from "../../Redux/Slices/Trainings/ITrainingsSlice";

export const TrainingMonthTBodyTD = ({
  trainingTraineeKVP,
  trainingInfo,
  trainingEntryKVP,
}: {
  trainingTraineeKVP: TrainingTraineeKVP;
  trainingInfo: TrainingInfo;
  trainingEntryKVP: TrainingEntryKVP;
}) => {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    toggleSelectTrainingEntry(
      dispatch,
      trainingInfo.id,
      trainingTraineeKVP.index
    );
  };
  return (
    <td
      className={
        trainingEntryKVP.trainingEntry?.selected
          ? "trainingMonthEntrySelected"
          : "trainingMonthEntry"
      }
      onClick={onClickHandler}
    ></td>
  );
};
