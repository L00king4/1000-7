import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTrainingMonth } from "../../Redux/Services/TrainingsService";
import { TrainingMonthTBody } from "./TrainingMonthTBody";
import { TrainingMonthTHead } from "./TrainingMonthTHead";
import "../../css/Trainings/TrainingMonth.css";
import moment from "moment";
import { getTrainingsSlice } from "../../Redux/Slices/Trainings/TrainingsSlice";
import { useGlobalSelector } from "../../Redux/Store";

export const TrainingMonth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTrainingMonth(dispatch, moment("2021-03-13"));
  }, []);
  const trainingStore = useGlobalSelector(getTrainingsSlice);
  return (
    <table className="TMonth">
      <TrainingMonthTHead
        trainingInfos={trainingStore.trainingMonth.trainingInfos}
      />
      <TrainingMonthTBody trainingsStore={trainingStore} />
    </table>
  );
};
