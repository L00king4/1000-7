import produce from "@reduxjs/toolkit/node_modules/immer";
import axios from "axios";
import { Dispatch } from "react";
import api from "../../ApiEndpoints";
import globalStore from "../Store";
import { traineesActions } from "../Slices/TraineesSlice";
import { TraineeModel } from "../../Trainees/ITrainees";

export const fetchTrainees = async (dispatch: Dispatch<any>) => {
  const { data } = await axios.get<TraineeModel[]>(api.Trainees.GetAll);
  console.log(data);
  dispatch(
    traineesActions.setTraineesStore({ trainees: data, editingTrainees: data })
  );
};

export const addTrainee = (dispatch: Dispatch<any>, trainee: TraineeModel) => {
  dispatch(traineesActions.addTrainee({ trainee: trainee }));
};

export const editEditingTrainee = (
  dispatch: Dispatch<any>,
  trainee: TraineeModel,
  traineeIndex: number
) => {
  dispatch(
    traineesActions.editEditingTrainee({
      trainee: { ...trainee },
      traineeIndex: traineeIndex,
    })
  );
};

export const saveEditingTrainee = (
  dispatch: Dispatch<any>,
  traineeIndex: number
) => {
  dispatch(traineesActions.saveEditingTrainee({ traineeIndex: traineeIndex }));
  console.log(getTraineesStore());
};

export const getTraineesStore = () => {
  return globalStore.getState().traineesSlice;
};

const getTraineeIndex = (trainee: TraineeModel) => {
  return globalStore
    .getState()
    .traineesSlice.trainees.findIndex((x) => x === trainee);
};
