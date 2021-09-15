import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";
import { useSelector as useReduxSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import {
  CompetitionModel,
  CompetitionTraineeModel,
} from "../../Competitions/ICompetitions";
import { SortedTrainees } from "../../Trainees/SortedTrainees";
import { GlobalState } from "../Store";

export interface CompetitionStore {
  competition: CompetitionModel;
  sortedTrainees: SortedTrainees<CompetitionTraineeModel>;
}

const initialState: CompetitionStore[] = [];

const competitionsSlice = createSlice({
  name: "CompetitionsSlice",
  initialState: initialState,
  reducers: {
    setCompetitions: (
      state,
      action: {
        type: string;
        payload: { manyCompetitionStores: CompetitionStore[] };
      }
    ) => {
      return [...action.payload.manyCompetitionStores];
    },
    setSortedTrainees: (
      state,
      action: {
        type: string;
        payload: {
          manySortedTrainees: SortedTrainees<CompetitionTraineeModel>;
          oneCompetitionStoreIndex: number;
        };
      }
    ) => {
      return produce(state, (draftState) => {
        draftState[action.payload.oneCompetitionStoreIndex].sortedTrainees =
          action.payload.manySortedTrainees;
      });
    },
    removeCompetitionAttendance: (
      state,
      action: {
        type: string;
        payload: {
          oneAttendingTraineeIndex: number;
          oneCompetitionStoreIndex: number;
        };
      }
    ) => {
      return produce(state, (draftState) => {
        draftState[
          action.payload.oneCompetitionStoreIndex
        ].sortedTrainees.notAttendingTrainees.unshift(
          draftState[action.payload.oneCompetitionStoreIndex].sortedTrainees
            .attendingTrainees[action.payload.oneAttendingTraineeIndex]
        );

        draftState[
          action.payload.oneCompetitionStoreIndex
        ].sortedTrainees.attendingTrainees.splice(
          action.payload.oneAttendingTraineeIndex,
          1
        );
      });
    },
    addCompetitionAttendance: (
      state,
      action: {
        type: string;
        payload: {
          oneNotAttendingTraineeIndex: number;
          oneCompetitionStoreIndex: number;
        };
      }
    ) => {
      return produce(state, (draftState) => {
        draftState[
          action.payload.oneCompetitionStoreIndex
        ].sortedTrainees.attendingTrainees.push(
          draftState[action.payload.oneCompetitionStoreIndex].sortedTrainees
            .notAttendingTrainees[action.payload.oneNotAttendingTraineeIndex]
        );

        draftState[
          action.payload.oneCompetitionStoreIndex
        ].sortedTrainees.notAttendingTrainees.splice(
          action.payload.oneNotAttendingTraineeIndex,
          1
        );
      });
    },
    removeCompetition: (
      state,
      action: { type: string; payload: { oneCompetitionStoreIndex: number } }
    ) => {
      return produce(state, (draftState) => {
        draftState.splice(action.payload.oneCompetitionStoreIndex, 1);
      });
    },
    addCompetition: (
      state,
      action: {
        type: string;
        payload: { oneCompetitionStore: CompetitionStore };
      }
    ) => {
      return produce(state, (draftState) => {
        draftState.unshift(action.payload.oneCompetitionStore);
      });
    },
    updateCompetition: (
      state,
      action: {
        type: string;
        payload: {
          oneCompetitionStore: CompetitionStore;
          oneCompetitionStoreIndex: number;
        };
      }
    ) => {
      return produce(state, (draftState) => {
        draftState.splice(
          action.payload.oneCompetitionStoreIndex,
          1,
          action.payload.oneCompetitionStore
        );
      });
    },
  },
});

export const useCompetitionsSelector: TypedUseSelectorHook<GlobalState> =
  useReduxSelector;
export const competitionsActions = competitionsSlice.actions;

export default competitionsSlice.reducer;
