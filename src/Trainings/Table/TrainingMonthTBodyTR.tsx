import React from "react";
import {
  TrainingInfo,
  TrainingMonth,
  TrainingTrainee,
} from "../../Redux/Slices/Trainings/ITrainingsSlice";
import { TrainingMonthTBodyTD } from "./TrainingMonthTBodyTD";

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
      <TrainingMonthTBodyTD>{trainee.fullname}</TrainingMonthTBodyTD>
      {trainingInfos.map((trainingEntry) => {
        const trainingEntriesIndex = trainingEntries.findIndex(
          (x) => x.eventID === trainingEntry.id
        );
        return (
          <TrainingMonthTBodyTD
            key={"TRAININGMONTH TRAININGENTRY " + trainingEntry.id}
          >
            {trainingEntries[trainingEntriesIndex]?.hasAttended ? "+ " : "- "}
            {trainingEntries[trainingEntriesIndex]?.payedAmount}
          </TrainingMonthTBodyTD>
        );
      })}
    </tr>
  );
};
