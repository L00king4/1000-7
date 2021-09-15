import { configureStore } from "@reduxjs/toolkit";
import competitionsSlice from "./Slices/CompetitionsSlice";
import TraineesSlice from "./Slices/TraineesSlice";

console.log(competitionsSlice);
const globalStore = configureStore({
  reducer: {
    competitionsSlice: competitionsSlice,
    traineesSlice: TraineesSlice,
  },
});

export type GlobalState = ReturnType<typeof globalStore.getState>;
export default globalStore;
