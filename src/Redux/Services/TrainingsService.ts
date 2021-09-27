import axios from "axios";
import { Moment } from "moment";
import { Dispatch } from "react";
import api from "../../ApiEndpoints";
import { TrainingMonth } from "../Slices/Trainings/ITrainingsSlice";
import { trainingsActions } from "../Slices/Trainings/TrainingsSlice";

export const fetchTrainingMonth = async (
  dispatch: Dispatch<any>,
  date: Moment
) => {
  const { data } = await axios.get<TrainingMonth>(
    api.Trainings.Events.GetMonth(date)
  );
  console.log(data);
  dispatch(
    trainingsActions.setTrainingsStore({
      trainingMonth: { ...data, settings: { showedDate: date } },
    })
  );
};
