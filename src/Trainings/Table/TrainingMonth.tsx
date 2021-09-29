import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTrainingMonth } from "../../Redux/Services/TrainingsService";
import { useTrainingsSelector } from "../../Redux/Store";
import { TrainingMonthTBody } from "./TrainingMonthTBody";
import { TrainingMonthTHead } from "./TrainingMonthTHead";
import "../../css/Trainings/TrainingMonth.css";
import moment from "moment";

export const TrainingMonth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTrainingMonth(dispatch, moment("2021-03-13"));
  }, []);
  const trainingStore = useTrainingsSelector((state) => state.trainingsSlice);
  return (
    <table className="trainingMonth">
      <TrainingMonthTHead
        trainingInfos={trainingStore.trainingMonth.trainingInfos}
      />
      <TrainingMonthTBody trainingsStore={trainingStore} />
    </table>
  );
};
