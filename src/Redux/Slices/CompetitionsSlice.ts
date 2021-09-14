import { createSlice } from "@reduxjs/toolkit";
import { useSelector as useReduxSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import {
  CompetitionModel,
  CompetitionTraineeModel,
} from "../../Competitions/ICompetitions";
import { SortedTrainees } from "../../Trainees/SortedTrainees";
import globalStore, { GlobalState } from "../Store";

interface CompetitionAction {
  type: string;
  payload: {
    oneCompetitionStore: CompetitionStore;
    manyCompetitionStores: CompetitionStore[];
    oneCompetitionTrainee: CompetitionTraineeModel;
  };
}

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
          oneCompetitionStore: CompetitionStore;
        };
      }
    ) => {
      return state;
      // const competitionStores = getCompetitionStores();
      // const index = competitionStores.findIndex(
      //   (x) => x.competition === action.payload.oneCompetitionStore.competition
      // );
      // if (index !== -1) {
      //   return [
      //     ...state.slice(0, index),
      //     {
      //       competition: state[index].competition,
      //       sortedTrainees: action.payload.manySortedTrainees,
      //     },
      //     ...state.slice(index + 1),
      //   ];
      // }
      // return state;
    },
  },
});

export const getCompetitionSelector = (state: GlobalState) => {
  return state.competitionsSlice;
};

export const useCompetitionsSelector: TypedUseSelectorHook<GlobalState> =
  useReduxSelector;
export const competitionsActions = competitionsSlice.actions;

export default competitionsSlice.reducer;

// case GlobalStoreActions.CompetitionStore.UPDATE_ONE:
//           const updateCompetitionStoreIndex = state.competitionStores.findIndex(
//             (x) => x.competition === action.oneCompetitionStore.competition
//           );
//           console.log(
//             "CHANGE",
//             state.competitionStores[updateCompetitionStoreIndex]
//           );
//           console.log("CHANGE ON", action.oneCompetitionStore);
//           state.competitionStores[updateCompetitionStoreIndex] =
//             action.oneCompetitionStore;
//           console.log(
//             "[STATE] AFTER CHANGE",
//             state.competitionStores[updateCompetitionStoreIndex]
//           );
//           return state;

//         case GlobalStoreActions.CompetitionStore.ADD_ONE:
//           return {
//             ...state,
//             competitionStores: [
//               ...state.competitionStores,
//               action.oneCompetitionStore,
//             ],
//           };

//         case GlobalStoreActions.CompetitionStore.SET_MANY:
//           return {
//             ...state,
//             competitionStores: action.manyCompetitionStores,
//           };

//         case GlobalStoreActions.CompetitionStore.ADD_MANY:
//           return {
//             ...state,
//             competitionStores: [
//               ...state.competitionStores,
//               ...action.manyCompetitionStores,
//             ],
//           };

//         case GlobalStoreActions.CompetitionStore.REMOVE_ONE:
//           const index = state.competitionStores.findIndex(
//             (x) => x.competition === action.oneCompetitionStore.competition
//           );
//           state.competitionStores.splice(index, 1);
//           return state;

//         default:
//           return state;
//       }
