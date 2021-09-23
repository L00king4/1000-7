import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";
import { NullableTrainingsStore, TrainingsStore } from "./ITrainingsSlice";

const initialState: TrainingsStore = {
  trainingInfos: [],
  trainingTrainees: [],
};

const trainingsSlice = createSlice({
  name: "TrainingsSlice",
  initialState: initialState,
  reducers: {
    setTrainingsStore: (
      state,
      action: { type: string; payload: NullableTrainingsStore }
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const trainingsActions = trainingsSlice.actions;
export default trainingsSlice.reducer;
