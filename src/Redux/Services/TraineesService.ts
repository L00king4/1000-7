import produce from "@reduxjs/toolkit/node_modules/immer";
import axios from "axios";
import { Dispatch } from "react";
import api from "../../ApiEndpoints";
import globalStore from "../Store";
import { traineesActions, TraineesStore } from "../Slices/TraineesSlice";
import { TraineeModel } from "../../Trainees/ITrainees";

export const fetchTrainees = async (dispatch: Dispatch<any>) => {
  const { data } = await axios.get<TraineeModel[]>(api.Trainees.GetAll);
  console.log(data);
  dispatch(traineesActions.setTraineesStore({ trainees: data.reverse() }));
};

export const addTrainee = (
  dispatch: Dispatch<any>,
  trainee: TraineeModel
) => {};

const getTraineesStore = () => {
  return globalStore.getState().traineesSlice;
};

const getTraineeIndex = (trainee: TraineeModel) => {
  return globalStore
    .getState()
    .traineesSlice.trainees.findIndex((x) => x === trainee);
};
