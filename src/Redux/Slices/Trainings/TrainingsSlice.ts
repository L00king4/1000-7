import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";
import { NullableTrainingsStore, TrainingsStore } from "./ITrainingsSlice";

const initialState: TrainingsStore = {};

const trainingsSlice = createSlice({
  name: "TrainingsSlice",
  initialState: initialState,
  reducers: {
    setTrainingsStore: async (
      state,
      action: { type: string; payload: NullableTrainingsStore }
    ) => {
      return { ...action.payload };
    },
  },
});

export const trainingsActions = trainingsSlice.actions;
export default trainingsSlice.reducer;
