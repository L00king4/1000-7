import { createSlice, current } from "@reduxjs/toolkit";
import { produce } from "immer";
import {
  NullableTrainingEntry,
  NullableTrainingsStore,
  TrainingEntry,
  TrainingsStore,
} from "./ITrainingsSlice";

const initialState: TrainingsStore = {
  trainingMonth: {
    trainingInfos: [],
    trainingTrainees: [],
    settings: undefined,
  },
  selectedTrainees: [],
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
    updateTrainingEntry: (
      state,
      action: {
        type: string;
        payload: { traineeID: number; training: NullableTrainingEntry };
      }
    ) => {
      return produce(state, (draftState) => {
        const oldTrainingEntry =
          draftState.trainingMonth.trainingTrainees[action.payload.traineeID]
            .trainingEntries[action.payload.training.eventID];
        draftState.trainingMonth.trainingTrainees[
          action.payload.traineeID
        ].trainingEntries[action.payload.training.eventID] = {
          ...oldTrainingEntry,
          ...action.payload.training,
        };
      });
    },
    unselectAllEntries: (state) => {
      return { ...state, selectedTrainees: [] };
    },
    selectEntry: (
      state,
      action: {
        type: string;
        payload: { trainingTraineeIndex: number; trainingEntryID: number };
      }
    ) => {
      return produce(state, (draftState) => {
        draftState.selectedTrainees[
          action.payload.trainingTraineeIndex
        ].selectedTrainingEntries.push({
          trainingEntryID: action.payload.trainingEntryID,
        });
      });
    },
    unselectEntry: (
      state,
      action: {
        type: string;
        payload: { trainingTraineeIndex: number; trainingEntryIndex: number };
      }
    ) => {
      return produce(state, (draftState) => {
        draftState.selectedTrainees[
          action.payload.trainingTraineeIndex
        ].selectedTrainingEntries.splice(action.payload.trainingEntryIndex, 1);
      });
    },
    selectEntryOnEmptyTrainee: (
      state,
      action: {
        type: string;
        payload: { trainingTraineeID: number; trainingEntryID: number };
      }
    ) => {
      return produce(state, (draftState) => {
        draftState.selectedTrainees.push({
          trainingTraineeID: action.payload.trainingTraineeID,
          selectedTrainingEntries: [
            { trainingEntryID: action.payload.trainingEntryID },
          ],
        });
      });
    },
  },
});

export const trainingsActions = trainingsSlice.actions;
export default trainingsSlice.reducer;
