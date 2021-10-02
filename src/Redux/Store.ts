import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import competitionsSlice from "./Slices/Competitions/CompetitionsSlice";
import traineesSlice from "./Slices/Trainees/TraineesSlice";
import { TrainingsStore } from "./Slices/Trainings/ITrainingsSlice";
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
export const useGlobalSelector: TypedUseSelectorHook<GlobalState> =
  useReduxSelector;
export type CustomDispatch = typeof globalStore.dispatch;

export default globalStore;
