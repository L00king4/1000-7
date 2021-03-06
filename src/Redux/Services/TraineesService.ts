import axios from "axios";
import { Dispatch } from "react";
import api from "../../ApiEndpoints";
import globalStore from "../Store";
import { traineesActions } from "../Slices/Trainees/TraineesSlice";
import {
  FilteringSettings,
  NullableTraineesShowedBooleans,
  SortingSettings,
  NullableTraineeModel,
  TraineeModel,
} from "../Slices/Trainees/ITraineesSlice";
import { getNextSortingMethod } from "../../Addons/Functional/Sorting";
import moment from "moment";
import { datetimeFormat } from "../../Addons/Functional/DateFormats";

export const fetchTrainees = async (dispatch: Dispatch<any>) => {
  const { data } = await axios.get<TraineeModel[]>(api.Trainees.GetAll);
  const convertedTrainees = data.map((trainee) => {
    return { ...trainee, birthday: moment(trainee.birthday) };
  });
  console.log(convertedTrainees);
  dispatch(
    traineesActions.setTraineesStore({
      trainees: convertedTrainees,
      editingTrainees: convertedTrainees,
    })
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
  const { trainees, editingTrainees } = getTraineesStore();
  const updatedTrainees = editingTrainees
    .filter((x) => !trainees.includes(x))
    .map((x) => {
      return { ...x, birthday: x.birthday.format(datetimeFormat) };
    });
  console.log(updatedTrainees);
  axios.post(api.Trainees.UpdateRange, updatedTrainees).then((res) => {
    if (res.data !== -1) {
      dispatch(traineesActions.saveAllEditingTrainees());
    }
  });
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

export const setTraineesShowedBooleans = (
  dispatch: Dispatch<any>,
  booleans: NullableTraineesShowedBooleans
) => {
  dispatch(
    traineesActions.setTraineesStore({ showedBooleans: { ...booleans } })
  );
};

// HELPING METHODS
export const getTraineesStore = () => {
  return globalStore.getState().traineesSlice;
};

export const getEditingTraineeByIndex = (traineeIndex: number) => {
  return getTraineesStore().editingTrainees[traineeIndex];
};
