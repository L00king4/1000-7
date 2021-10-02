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
  const isPayed =
    trainingInfo.toPay <= trainingEntryKVP.trainingEntry?.payedAmount;
  const payedAmount = trainingEntryKVP.trainingEntry?.payedAmount ?? 0;
  return (
    <td
      className={
        "TMonthEntry " +
        (selected ? "TMonthSelected " : "") +
        (trainingEntryKVP.trainingEntry?.hasAttended ? "TMonthAttended " : "") +
        (isPayed ? "TMonthPayed " : "")
      }
      onClick={onClickHandler}
    >
      {!isPayed &&
        trainingEntryKVP.trainingEntry?.hasAttended &&
        "To pay:" + (trainingInfo.toPay - payedAmount)}
      {isPayed && trainingEntryKVP.trainingEntry?.hasAttended && (
        <div>&#x2714;</div>
      )}
    </td>
  );
};
