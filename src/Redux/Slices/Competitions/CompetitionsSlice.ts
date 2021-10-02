import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";
import { useSelector as useReduxSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import {
  CompetitionModel,
  CompetitionTraineeModel,
} from "../../../Competitions/ICompetitions";
import { SortedTrainees } from "../../../Trainees/SortedTrainees";
import { GlobalState } from "../../Store";
import {
  CompetitionEntry,
  CompetitionStore,
  NullableCompetitionEntry,
} from "./ICompetitionsSlice";

const initialState: CompetitionStore = { competitionEntries: [] };

const competitionsSlice = createSlice({
  name: "CompetitionsSlice",
  initialState: initialState,
  reducers: {
    setCompetitionStore: (
      state,
      action: {
        type: string;
        payload: { competitionStore: CompetitionStore };
      }
    ) => {
      return { ...state, ...action.payload.competitionStore };
    },
    setSortedTrainees: (
      state,
      action: {
        type: string;
        payload: {
          sortedTrainees: SortedTrainees;
          competitionEntryIndex: number;
        };
      }
    ) => {
      return produce(state, (draftState) => {
        draftState.competitionEntries[
          action.payload.competitionEntryIndex
        ].sortedTrainees = action.payload.sortedTrainees;
      });
    },
    removeCompetitionAttendance: (
      state,
      action: {
        type: string;
        payload: {
          attendingTraineeIndex: number;
          competitionEntryIndex: number;
        };
      }
    ) => {
      return produce(state, (draftState) => {
        draftState.competitionEntries[
          action.payload.competitionEntryIndex
        ].sortedTrainees.notAttendingTrainees.unshift(
          draftState.competitionEntries[action.payload.competitionEntryIndex]
            .sortedTrainees.attendingTrainees[
            action.payload.attendingTraineeIndex
          ]
        );

        draftState.competitionEntries[
          action.payload.competitionEntryIndex
        ].sortedTrainees.attendingTrainees.splice(
          action.payload.attendingTraineeIndex,
          1
        );
      });
    },
    addCompetitionAttendance: (
      state,
      action: {
        type: string;
        payload: {
          notAttendingTraineeIndex: number;
          competitionEntryIndex: number;
        };
      }
    ) => {
      return produce(state, (draftState) => {
        draftState.competitionEntries[
          action.payload.competitionEntryIndex
        ].sortedTrainees.attendingTrainees.push(
          draftState.competitionEntries[action.payload.competitionEntryIndex]
            .sortedTrainees.notAttendingTrainees[
            action.payload.notAttendingTraineeIndex
          ]
        );

        draftState.competitionEntries[
          action.payload.competitionEntryIndex
        ].sortedTrainees.notAttendingTrainees.splice(
          action.payload.notAttendingTraineeIndex,
          1
        );
      });
    },
    removeCompetitionEntry: (
      state,
      action: { type: string; payload: { competitionEntryIndex: number } }
    ) => {
      return produce(state, (draftState) => {
        draftState.competitionEntries.splice(
          action.payload.competitionEntryIndex,
          1
        );
      });
    },
    addCompetitionEntry: (
      state,
      action: {
        type: string;
        payload: { competitionEntry: CompetitionEntry };
      }
    ) => {
      return produce(state, (draftState) => {
        draftState.competitionEntries.unshift(action.payload.competitionEntry);
      });
    },
    updateCompetitionEntry: (
      state,
      action: {
        type: string;
        payload: {
          nullableCompetitionEntry: NullableCompetitionEntry;
          competitionEntryIndex: number;
        };
      }
    ) => {
      return produce(state, (draftState) => {
        draftState.competitionEntries[action.payload.competitionEntryIndex] = {
          ...draftState.competitionEntries[
            action.payload.competitionEntryIndex
          ],
          ...action.payload.nullableCompetitionEntry,
        };
      });
    },
  },
});

export const useCompetitionsSelector = (
  state: GlobalState
): CompetitionStore => {
  return state.competitionsSlice;
};
export const competitionsActions = competitionsSlice.actions;

export default competitionsSlice.reducer;
