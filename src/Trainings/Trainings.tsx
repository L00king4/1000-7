import { Fragment } from "react";
import { useDispatch } from "react-redux";
import {
  addAttendances,
  addPayments,
  unselectAllEntries,
} from "../Redux/Services/TrainingsService";
import { TrainingMonth } from "./Table/TrainingMonth";
import { TrainingMonthActionBar } from "./TrainingMonthActionBar";
import { TrainingMonthNavigation } from "./TrainingMonthNavigation";

export const Trainings = () => {
  return (
    <div>
      <TrainingMonthNavigation />
      <TrainingMonth />
      <TrainingMonthActionBar />
    </div>
  );
};
