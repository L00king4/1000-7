import axios from "axios";
import { Dispatch } from "react";
import api from "../../ApiEndpoints";
import { traineesActions } from "../Slices/Trainees/TraineesSlice";

export const fetchTrainees = async (dispatch: Dispatch<any>, month: number) => {
  const { data } = await axios.get(api.Trainings.Events.GetMonth(month));
  dispatch(
    traineesActions.setTraineesStore({ trainees: data, editingTrainees: data })
  );
};
