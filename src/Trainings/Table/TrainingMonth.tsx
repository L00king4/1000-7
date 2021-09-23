import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTrainingMonth } from "../../Redux/Services/TrainingsService";
import { useTrainingsSelector } from "../../Redux/Store";
import { TrainingMonthTBody } from "./TrainingMonthTBody";
import { TrainingMonthTHead } from "./TrainingMonthTHead";

export const TrainingMonth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTrainingMonth(dispatch, new Date("2021-03-13"));
  }, []);
  const trainingMonth = useTrainingsSelector((state) => state.trainingsSlice);
  console.log("State", trainingMonth);
  return (
    <table>
      <TrainingMonthTHead trainingInfos={trainingMonth.trainingInfos} />
      <TrainingMonthTBody />
    </table>
  );
};
