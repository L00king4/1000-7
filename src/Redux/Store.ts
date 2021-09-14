import { configureStore } from "@reduxjs/toolkit";
import competitionsSlice from "./Slices/CompetitionsSlice";

console.log(competitionsSlice);
const globalStore = configureStore({
  reducer: {
    competitionsSlice: competitionsSlice,
  },
});

export type GlobalState = ReturnType<typeof globalStore.getState>;
export default globalStore;
