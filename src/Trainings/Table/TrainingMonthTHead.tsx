import moment from "moment";
import { useState } from "react";
import {
  dateFormat,
  myMoment as myMymonetFunc,
} from "../../Addons/Functional/DateConverter";
import { TrainingInfo } from "../../Redux/Slices/Trainings/ITrainingsSlice";
import { useTrainingsSelector } from "../../Redux/Store";
import { TrainingMonthTHeadTH } from "./TrainingMonthTHeadTH";
import { TrainingMonthTopLeftTH } from "./TrainingMonthTopLeftTH";

export const TrainingMonthTHead = ({
  trainingInfos,
}: {
  trainingInfos: TrainingInfo[];
}) => {
  const settings = useTrainingsSelector(
    (state) => state.trainingsSlice.trainingMonth.settings
  );
  const headEntryFormating = (date: Date) => {
    const myMoment = myMymonetFunc(date);
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
      </tr>
    </thead>
  );
};
