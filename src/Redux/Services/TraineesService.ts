import axios from "axios";
import { Dispatch } from "react";
import api from "../../ApiEndpoints";
import globalStore from "../Store";
import { traineesActions } from "../Slices/Trainees/TraineesSlice";
import { NullableTraineeModel, TraineeModel } from "../../Trainees/ITrainees";
import {
  FilteringSettings,
  SortableProp,
  SortingSettings,
} from "../Slices/Trainees/ITraineesSlice";
import { getNextSortingMethod } from "../../Addons/Functional/Sorting";

export const fetchTrainees = async (dispatch: Dispatch<any>) => {
  const { data } = await axios.get<TraineeModel[]>(api.Trainees.GetAll);
  dispatch(
    traineesActions.setTraineesStore({ trainees: data, editingTrainees: data })
  );
};

export const addTrainee = (dispatch: Dispatch<any>, trainee: TraineeModel) => {
  dispatch(traineesActions.addTrainee({ trainee: trainee }));
};

export const removeTrainee = (
  dispatch: Dispatch<any>,
  traineeID: number,
  traineeIndex: number
) => {
  axios.get(api.Trainees.Remove(traineeID)).then(() => {
    dispatch(traineesActions.removeTrainee({ traineeIndex: traineeIndex }));
  });
};

export const editEditingTrainee = (
  dispatch: Dispatch<any>,
  trainee: NullableTraineeModel,
  traineeIndex: number
) => {
  // Object.entries(trainee).forEach(([key, value]) => {
  //   console.log(key, value);
  // });
  dispatch(
    traineesActions.editEditingTrainee({
      trainee: { ...trainee },
      traineeIndex: traineeIndex,
    })
  );
};

export const saveEditingTrainee = (
  dispatch: Dispatch<any>,
  trainee: TraineeModel,
  traineeIndex: number
) => {
  axios.post(api.Trainees.Update, trainee).then((res) => {
    if (res.data !== -1) {
      dispatch(
        traineesActions.saveEditingTrainee({ traineeIndex: traineeIndex })
      );
    }
  });
};

export const saveAllEditingTrainees = (dispatch: Dispatch<any>) => {
  dispatch(traineesActions.saveAllEditingTrainees());
};

export const resetUpdatingTrainee = (
  dispatch: Dispatch<any>,
  traineeIndex: number
) => {
  dispatch(traineesActions.resetUpdatingTrainee({ traineeIndex }));
};

export const resetAllUpdatingTrainees = (dispatch: Dispatch<any>) => {
  dispatch(traineesActions.resetAllUpdatingTrainees());
};

export const sortTrainees = (
  dispatch: Dispatch<any>,
  sortingSettings: SortingSettings
) => {
  const isSameSortableProp =
    getTraineesStore().settings.sorting.sortableProp ===
    sortingSettings.sortableProp;

  dispatch(
    traineesActions.setTraineesStore({
      settings: {
        sorting: {
          sortableProp: sortingSettings.sortableProp,
          sortingMethod: isSameSortableProp
            ? getNextSortingMethod(sortingSettings.sortingMethod)
            : "asc",
          sortingTarget: sortingSettings.sortingTarget,
        },
      },
    })
  );
};

export const filterTrainees = (
  dispatch: Dispatch<any>,
  filtering: FilteringSettings
) => {
  dispatch(
    traineesActions.setTraineesStore({ settings: { filtering: filtering } })
  );
};

// HELPING METHODS
export const getTraineesStore = () => {
  return globalStore.getState().traineesSlice;
};

const getTraineeIndex = (trainee: TraineeModel) => {
  return globalStore
    .getState()
    .traineesSlice.trainees.findIndex((x) => x === trainee);
};

export const getEditingTraineeByIndex = (traineeIndex: number) => {
  return getTraineesStore().editingTrainees[traineeIndex];
};
