import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";
import { useDispatch, useSelector as useReduxSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { NullableTraineeModel, TraineeModel } from "../../Trainees/ITrainees";
import { GlobalState } from "../Store";

export interface TraineesStore {
  trainees: TraineeModel[];
  editingTrainees: TraineeModel[];
}

const initialState: TraineesStore = { trainees: [], editingTrainees: [] };

const traineesSlice = createSlice({
  name: "TraineesSlice",
  initialState: initialState,
  reducers: {
    setTraineesStore: (
      state,
      action: { type: string; payload: TraineesStore }
    ) => {
      return { ...action.payload };
    },
    addTrainee: (
      state,
      action: { type: string; payload: { trainee: TraineeModel } }
    ) => {
      return produce(state, (draftState) => {
        draftState.trainees.unshift(action.payload.trainee);
        draftState.editingTrainees.unshift(action.payload.trainee);
      });
    },
    removeTrainee: (
      state,
      action: { type: string; payload: { traineeIndex: number } }
    ) => {
      return produce(state, (draftState) => {
        draftState.trainees.splice(action.payload.traineeIndex, 1);
        draftState.editingTrainees.splice(action.payload.traineeIndex, 1);
      });
    },
    editEditingTrainee: (
      state,
      action: {
        type: string;
        payload: { trainee: NullableTraineeModel; traineeIndex: number };
      }
    ) => {
      return produce(state, (draftState) => {
        draftState.editingTrainees.splice(action.payload.traineeIndex, 1, {
          ...state.editingTrainees[action.payload.traineeIndex],
          ...action.payload.trainee,
        });
      });
    },
    saveEditingTrainee: (
      state,
      action: { type: string; payload: { traineeIndex: number } }
    ) => {
      return produce(state, (draftState) => {
        draftState.trainees.splice(
          action.payload.traineeIndex,
          1,
          draftState.editingTrainees[action.payload.traineeIndex]
        );
      });
    },
    saveAllEditingTrainees: (state) => {
      return produce(state, (draftState) => {
        draftState.trainees = draftState.editingTrainees;
      });
      // return {...state, editingTrainees: state.editingTrainees, trainees: state.editingTrainees}
    },
    resetUpdatingTrainee: (
      state,
      action: { type: string; payload: { traineeIndex: number } }
    ) => {
      // return produce(state, (draftState) => {
      //   draftState.editingTrainees.splice(
      //     action.payload.traineeIndex,
      //     1,
      //     draftState.trainees[action.payload.traineeIndex]
      //   );
      // });
      state.editingTrainees[action.payload.traineeIndex] =
        state.trainees[action.payload.traineeIndex];
      return state;
    },
    resetAllUpdatingTrainees: (state) => {
      return produce(state, (draftState) => {
        draftState.editingTrainees = draftState.trainees;
      });
    },
  },
});

export const useTraineesSelector: TypedUseSelectorHook<GlobalState> =
  useReduxSelector;
export const traineesActions = traineesSlice.actions;
export default traineesSlice.reducer;
