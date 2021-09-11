import { stat } from "fs";
import { createStore } from "redux";
import { Competition } from "../Competitions/Competition";
import {
  CompetitionModel,
  SortedTrainees,
  CompetitionTraineeModel,
} from "../Competitions/ICompetitions";

const delimiter = ".";
const competitionStorePrefix = "COMPETITIONSTORE" + delimiter;
const competitionStoreSortedTraineesPrefix =
  "COMPETITIONSTORESORTEDTRAINEES" + delimiter;

export class GlobalStoreActions {
  static CompetitionStore = class {
    static prefix = competitionStorePrefix;
    static ADD_ONE = this.prefix + "ADD_ONE";
    static SET_MANY = this.prefix + "SET_MANY";
    static ADD_MANY = this.prefix + "ADD_MANY";
    static REMOVE_ONE = this.prefix + "REMOVE_ONE";
    static SortedTrainees = class {
      static prefix = competitionStoreSortedTraineesPrefix;
      static SWITCH = this.prefix + "SWITCH_ONE";
      static SET_MANY = this.prefix + "SET_MANY";
      static UPDATE_ONE = this.prefix + "UPDATE_ONE";
    };
  };
}

interface GlobalStore {
  competitionStores: CompetitionStore[];
  // PayedEvents: ...
}

interface CompetitionStore {
  competition: CompetitionModel;
  sortedTrainees: SortedTrainees;
}

const reducer = (
  state: GlobalStore = { competitionStores: [] },
  action: {
    type: string;
    oneCompetitionStore: CompetitionStore;
    manyCompetitionStores: CompetitionStore[];
    oneCompetitionTrainee: CompetitionTraineeModel;
  }
) => {
  const [prefix, type] = action.type.split(".");
  switch (prefix) {
    case GlobalStoreActions.CompetitionStore.prefix:
      switch (type) {
        case GlobalStoreActions.CompetitionStore.ADD_ONE:
          return {
            ...state,
            CompetitionStores: [
              ...state.competitionStores,
              action.oneCompetitionStore,
            ],
          };
        case GlobalStoreActions.CompetitionStore.SET_MANY:
          return {
            ...state,
            CompetitionStore: action.manyCompetitionStores,
          };
        case GlobalStoreActions.CompetitionStore.ADD_MANY:
          return {
            ...state,
            Competitions: [
              ...state.competitionStores,
              ...action.manyCompetitionStores,
            ],
          };
        case GlobalStoreActions.CompetitionStore.REMOVE_ONE:
          console.log(state);
          const index = state.competitionStores.findIndex(
            (x) => x.competition === action.oneCompetitionStore.competition
          );
          console.log(state.competitionStores.splice(index, 1));
          return state.competitionStores.splice(index, 1);
        default:
          return state;
      }
    case GlobalStoreActions.CompetitionStore.SortedTrainees.prefix:
      switch (type) {
        case GlobalStoreActions.CompetitionStore.SortedTrainees.SWITCH:
          const competitionStoreIndex = state.competitionStores.findIndex(
            (x) => x === action.oneCompetitionStore
          );
          const attIndex = state.competitionStores[
            competitionStoreIndex
          ].sortedTrainees.attendingTrainees.indexOf(
            action.oneCompetitionTrainee
          );
          const notAttIndex = state.competitionStores[
            competitionStoreIndex
          ].sortedTrainees.notAttendingTrainees.indexOf(
            action.oneCompetitionTrainee
          );
          if (attIndex !== -1) {
            return {
              ...state,
              competitionStores: [
                ...state.competitionStores.slice(0, competitionStoreIndex),
                {
                  competition: action.oneCompetitionStore.competition,
                  sortedTrainees: {
                    notAttendingTrainees: [
                      ...action.oneCompetitionStore.sortedTrainees
                        .notAttendingTrainees,
                      action.oneCompetitionTrainee,
                    ],
                    attendingTrainees: [
                      ...action.oneCompetitionStore.sortedTrainees.attendingTrainees.slice(
                        0,
                        attIndex
                      ),
                      ...action.oneCompetitionStore.sortedTrainees.attendingTrainees.slice(
                        attIndex + 1
                      ),
                    ],
                  },
                },
                ...state.competitionStores.slice(competitionStoreIndex + 1),
              ],
            };
          } else if (notAttIndex !== -1) {
            return {
              ...state,
              competitionStores: [
                ...state.competitionStores.slice(0, competitionStoreIndex),
                {
                  competition: action.oneCompetitionStore.competition,
                  sortedTrainees: {
                    notAttendingTrainees: [
                      ...action.oneCompetitionStore.sortedTrainees.notAttendingTrainees.slice(
                        0,
                        notAttIndex
                      ),
                      ...action.oneCompetitionStore.sortedTrainees.notAttendingTrainees.slice(
                        notAttIndex + 1
                      ),
                    ],
                    attendingTrainees: [
                      ...action.oneCompetitionStore.sortedTrainees
                        .attendingTrainees,
                      action.oneCompetitionTrainee,
                    ],
                  },
                },
                ...state.competitionStores.slice(competitionStoreIndex + 1),
              ],
            };
          }
          return state;
        default:
          break;
      }
    case "SET_MANY":
      return action.many;
    case "ADD_MANY":
      return [...state, ...action.many];
    case "REMOVE_ONE":
      console.log(state);
      const index = state.indexOf(action.one);
      console.log(state.splice(index, 1));
      return state.splice(index, 1);
    default:
      return state;
  }
};
export const competitionsStore = createStore(reducer);
