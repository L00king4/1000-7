import moment from "moment";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../css/Trainings/TrainingMonthNavigation.css";
import { fetchTrainingMonth } from "../Redux/Services/TrainingsService";
import { getTrainingsMonthSettings } from "../Redux/Slices/Trainings/TrainingsSlice";
import { useGlobalSelector } from "../Redux/Store";

export const TrainingMonthNavigation = () => {
  const dispatch = useDispatch();
  const currentMonth = useGlobalSelector(getTrainingsMonthSettings).showedDate;
  const [gotoDate, setGotoDate] = useState<moment.Moment>(moment());
  const onNextClickHandler = () => {
    fetchTrainingMonth(dispatch, currentMonth.add(1, "M"));
  };
  const onPreviousClickHandler = () => {
    fetchTrainingMonth(dispatch, currentMonth.subtract(1, "M"));
  };
  const onGotoClickHandler = () => {
    fetchTrainingMonth(dispatch, gotoDate);
  };
  const onGotoInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setGotoDate(moment(e.target.value));
  };
  return (
    <div className="TMonthNav">
      <button className="TMonthNavButton" onClick={onPreviousClickHandler}>
        {"< PREVIOUS"}
      </button>
      <button className="TMonthNavButton" onClick={onNextClickHandler}>
        {"NEXT >"}
      </button>
      <div>
        <button className="TMonthNavButton" onClick={onGotoClickHandler}>
          GOTO
        </button>
        <input
          type="month"
          defaultValue={gotoDate.format("yyyy-MM")}
          onChange={onGotoInputChangeHandler}
        />
      </div>
    </div>
  );
};
