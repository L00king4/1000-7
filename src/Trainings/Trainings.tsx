import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "../Addons/Components/Modal";
import {
  addAttendances,
  addPayments,
  unselectAllEntries,
} from "../Redux/Services/TrainingsService";
import { getTrainingShowedBooleans } from "../Redux/Slices/Trainings/TrainingsSlice";
import { useGlobalSelector } from "../Redux/Store";
import { AddTrainingMenu } from "./AddTrainingMenu";
import { AddTrainingMenuModal } from "./AddTrainingMenuModal";
import { TrainingMonth } from "./Table/TrainingMonth";
import { TrainingMonthActionBar } from "./TrainingMonthActionBar";
import { TrainingMonthNavigation } from "./TrainingMonthNavigation";

export const Trainings = () => {
  return (
    <div>
      <TrainingMonthNavigation />
      <AddTrainingMenuModal />
      <TrainingMonth />
      <TrainingMonthActionBar />
    </div>
  );
};
