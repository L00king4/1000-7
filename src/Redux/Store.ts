import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import competitionsSlice from "./Slices/Competitions/CompetitionsSlice";
import traineesSlice from "./Slices/Trainees/TraineesSlice";
import trainingsSlice from "./Slices/Trainings/TrainingsSlice";

const globalStore = configureStore({
  reducer: {
    competitionsSlice: competitionsSlice,
    traineesSlice: traineesSlice,
    trainingsSlice: trainingsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type GlobalState = ReturnType<typeof globalStore.getState>;
export const useTrainingsSelector: TypedUseSelectorHook<GlobalState> =
  useReduxSelector;
export default globalStore;
