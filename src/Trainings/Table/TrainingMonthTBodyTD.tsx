import React from "react";
import { useDispatch } from "react-redux";
import { toggleSelectTrainingEntry } from "../../Redux/Services/TrainingsService";
import {
  TrainingEntryKVP,
  TrainingInfo,
  TrainingTraineeKVP,
} from "../../Redux/Slices/Trainings/ITrainingsSlice";

export const TrainingMonthTBodyTD = ({
  trainingTraineeKVP,
  trainingInfo,
  trainingEntryKVP,
  selected,
}: {
  trainingTraineeKVP: TrainingTraineeKVP;
  trainingInfo: TrainingInfo;
  trainingEntryKVP: TrainingEntryKVP;
  selected: boolean;
}) => {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    toggleSelectTrainingEntry(
      dispatch,
      trainingInfo.id,
      trainingTraineeKVP.trainingTrainee.trainee.id
    );
  };
  return (
    <td
      className={
        "trainingMonthEntry " +
        (selected ? "Selected " : "") +
        (trainingEntryKVP.trainingEntry?.hasAttended ? "Attended " : "")
      }
      onClick={onClickHandler}
    ></td>
  );
};
