import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";
import { useSelector as useReduxSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { TraineeModel } from "../../Trainees/ITrainees";
import { GlobalState } from "../Store";

export interface TraineesStore {
  trainees: TraineeModel[];
}

const initialState: TraineesStore = { trainees: [] };

const traineesSlice = createSlice({
  name: "TraineesSlice",
  initialState: initialState,
  reducers: {
    setTraineesStore: (
      state,
      action: { type: string; payload: { trainees: TraineeModel[] } }
    ) => {
      return { trainees: action.payload.trainees };
    },
    addTrainee: (
      state,
      action: { type: string; payload: { trainee: TraineeModel } }
    ) => {
      return produce(state, (draftState) => {
        draftState.trainees.unshift(action.payload.trainee);
      });
    },
  },
});

export const getTraineeSelector = (state: GlobalState) => {
  return state.traineesSlice;
};

export const useTraineesSelector: TypedUseSelectorHook<GlobalState> =
  useReduxSelector;
export const traineesActions = traineesSlice.actions;

export default traineesSlice.reducer;
