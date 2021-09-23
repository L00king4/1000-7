import axios from "axios";
import { Dispatch } from "react";
import api from "../../ApiEndpoints";
import { traineesActions } from "../Slices/Trainees/TraineesSlice";
import { trainingsActions } from "../Slices/Trainings/TrainingsSlice";

export const fetchTrainingMonth = async (
  dispatch: Dispatch<any>,
  date: Date
) => {
  const { data } = await axios.get(api.Trainings.Events.GetMonth(date));
  console.log("DATA", data);
  dispatch(trainingsActions.setTrainingsStore({ ...data }));
};
