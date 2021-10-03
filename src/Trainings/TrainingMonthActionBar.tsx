import { useDispatch } from "react-redux";
import {
  addAttendances,
  addPayments,
  unselectAllEntries,
} from "../Redux/Services/TrainingsService";
import "../css/Trainings/TrainingMonthActionBar.css";
import { useGlobalSelector } from "../Redux/Store";
import { getTrainingsSlice } from "../Redux/Slices/Trainings/TrainingsSlice";
import { Fragment } from "react";

export const TrainingMonthActionBar = () => {
  const dispatch = useDispatch();
  const testingAmount = 20;
  const selectedCount = useGlobalSelector(getTrainingsSlice).selected.count;
  const unselectHandler = () => {
    unselectAllEntries(dispatch);
  };
  const addAttendancesHandler = () => {
    addAttendances(dispatch);
  };
  const addPaymentsHandler = () => {
    addPayments(dispatch, testingAmount);
  };
  return (
    <div
      className={
        "TMonthActionBar " +
        (selectedCount > 0
          ? "TMonthActionBarEnabled "
          : "TMonthActionBarDisabled ")
      }
    >
      <div className="TMonthActionSelectedCount">
        Selected {selectedCount} entries
      </div>
      <div className="TMonthAction" onClick={unselectHandler}>
        Unselect All
      </div>
      <div className="TMonthAction" onClick={addAttendancesHandler}>
        Add Attendances
      </div>
      <div className="TMonthAction" onClick={addPaymentsHandler}>
        Pay Selected ({testingAmount})
      </div>
    </div>
  );
};
