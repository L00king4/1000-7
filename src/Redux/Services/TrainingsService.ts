import axios from "axios";
import { Dispatch } from "react";
import api from "../../ApiEndpoints";
import { TrainingMonth } from "../Slices/Trainings/ITrainingsSlice";
import { trainingsActions } from "../Slices/Trainings/TrainingsSlice";

export const fetchTrainingMonth = async (
  dispatch: Dispatch<any>,
  date: Date
) => {
  const { data } = await axios.get<TrainingMonth>(
    api.Trainings.Events.GetMonth(date)
  );
  dispatch(trainingsActions.setTrainingsStore({ trainingMonth: data }));
};
