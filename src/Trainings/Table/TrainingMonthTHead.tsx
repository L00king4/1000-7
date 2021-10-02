import moment from "moment";
import { useState } from "react";
import { TrainingInfo } from "../../Redux/Slices/Trainings/ITrainingsSlice";
import {
  getTrainingsMonthSettings,
  getTrainingsSlice,
} from "../../Redux/Slices/Trainings/TrainingsSlice";
import { useGlobalSelector } from "../../Redux/Store";
import { TrainingMonthTHeadAddTrainingTH } from "./TrainingMonthTHeadAddTraining";
import { TrainingMonthTHeadTH } from "./TrainingMonthTHeadTH";
import { TrainingMonthTopLeftTH } from "./TrainingMonthTopLeftTH";

export const TrainingMonthTHead = ({
  trainingInfos,
}: {
  trainingInfos: TrainingInfo[];
}) => {
  const settings = useGlobalSelector(getTrainingsMonthSettings);
  const headEntryFormating = (date: Date) => {
    const myMoment = moment(date);
    return myMoment
      ? myMoment.format("DD. ddd ") + myMoment.format("HH:mm")
      : undefined;
  };
  return (
    <thead>
      <tr>
        <TrainingMonthTopLeftTH>
          {settings?.showedDate.format("MMMM YYYY")}
        </TrainingMonthTopLeftTH>
        {trainingInfos.map((trainingInfo) => {
          return (
            <TrainingMonthTHeadTH
              key={"TRAININGINFO " + trainingInfo.id.toString()}
            >
              {/* {trainingInfo.id}|{trainingInfo.name} */}
              {headEntryFormating(trainingInfo.date)}
            </TrainingMonthTHeadTH>
          );
        })}
        <TrainingMonthTHeadAddTrainingTH>Add</TrainingMonthTHeadAddTrainingTH>
      </tr>
    </thead>
  );
};
