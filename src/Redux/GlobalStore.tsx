import { createStore } from "redux";
import {
  CompetitionTraineeModel,
  CompetitionModel,
} from "../Competitions/ICompetitions";
import { SortedTrainees } from "../Trainees/SortedTrainees";

class ActionNames {
  static ADD_ONE = "ADD_ONE";
  static ADD_MANY = "ADD_MANY";
  static SET_MANY = "SET_MANY";
  static REMOVE_ONE = "REMOVE_ONE";
  static SWITCH_ONE = "SWITCH_ONE";
  static UPDATE_ONE = "UPDATE_ONE";
}

export class GlobalStoreActions {
  static delimiter = ".";
  static selfPrefix = "SELF";
  static CompetitionStore = class CompetitionStore {
    static prefix = "COMPETITIONSTORE";
    private static fullPrefix =
      CompetitionStore.prefix +
      GlobalStoreActions.delimiter +
      GlobalStoreActions.selfPrefix +
      GlobalStoreActions.delimiter;
    static ADD_ONE = CompetitionStore.fullPrefix + ActionNames.ADD_ONE;
    static SET_MANY = CompetitionStore.fullPrefix + ActionNames.SET_MANY;
    static ADD_MANY = CompetitionStore.fullPrefix + ActionNames.ADD_MANY;
    static REMOVE_ONE = CompetitionStore.fullPrefix + ActionNames.REMOVE_ONE;
    static UPDATE_ONE = CompetitionStore.fullPrefix + ActionNames.UPDATE_ONE;

    static SortedTrainees = class CompetitionStoreSortedTrainees {
      static prefix = "COMPETITIONSTORESORTEDTRAINEES";
      private static fullPrefix =
        CompetitionStore.prefix +
        GlobalStoreActions.delimiter +
        CompetitionStoreSortedTrainees.prefix +
        GlobalStoreActions.delimiter;
      static SWITCH =
        CompetitionStoreSortedTrainees.fullPrefix + ActionNames.SWITCH_ONE;
      static SET_MANY =
        CompetitionStoreSortedTrainees.fullPrefix + ActionNames.SET_MANY;
      static UPDATE_ONE =
        CompetitionStoreSortedTrainees.fullPrefix + ActionNames.UPDATE_ONE;
    };
  };
}

export interface CompetitionStore {
  competition: CompetitionModel;
  sortedTrainees: SortedTrainees<CompetitionTraineeModel>;
}

export interface GlobalStore {
  competitionStores: CompetitionStore[];
  // PayedEvents: ...
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
  const [group, object] = action.type.split(".");
  switch (group) {
    case GlobalStoreActions.CompetitionStore.prefix:
      switch (object) {
        case GlobalStoreActions.selfPrefix:
          switch (action.type) {
            case GlobalStoreActions.CompetitionStore.UPDATE_ONE:
              const updateCompetitionStoreIndex =
                state.competitionStores.findIndex(
                  (x) =>
                    x.competition === action.oneCompetitionStore.competition
                );
              state.competitionStores[updateCompetitionStoreIndex] =
                action.oneCompetitionStore;
              return state;
            case GlobalStoreActions.CompetitionStore.ADD_ONE:
              return {
                ...state,
                competitionStores: [
                  ...state.competitionStores,
                  action.oneCompetitionStore,
                ],
              };
            case GlobalStoreActions.CompetitionStore.SET_MANY:
              return {
                ...state,
                competitionStores: action.manyCompetitionStores,
              };
            case GlobalStoreActions.CompetitionStore.ADD_MANY:
              return {
                ...state,
                competitionStores: [
                  ...state.competitionStores,
                  ...action.manyCompetitionStores,
                ],
              };
            case GlobalStoreActions.CompetitionStore.REMOVE_ONE:
              const index = state.competitionStores.findIndex(
                (x) => x.competition === action.oneCompetitionStore.competition
              );
              state.competitionStores.splice(index, 1);
              return state;
            default:
              return state;
          }
        case GlobalStoreActions.CompetitionStore.SortedTrainees.prefix:
          switch (action.type) {
            case GlobalStoreActions.CompetitionStore.SortedTrainees.UPDATE_ONE:
              const updateCompetitionStoreIndex =
                state.competitionStores.indexOf(action.oneCompetitionStore);
              state.competitionStores[
                updateCompetitionStoreIndex
              ].sortedTrainees?.updateTrainee(action.oneCompetitionTrainee);
              return state;
            case GlobalStoreActions.CompetitionStore.SortedTrainees.SWITCH:
              console.log("SWITCH");
              const switchCompetitionStore = state.competitionStores.find(
                (x) => x === action.oneCompetitionStore
              );
              console.log("--------------");
              console.log(switchCompetitionStore?.sortedTrainees);
              switchCompetitionStore?.sortedTrainees?.switchTrainee(
                action.oneCompetitionTrainee
              );
              console.log(switchCompetitionStore?.sortedTrainees);
              console.log("--------------");
              return state;
            default:
              console.log("HIT COMPET.SORTTRAIN DEFAULT!");
              return state;
          }
        default:
          return state;
      }
    default:
      console.log("ROOT DEFAULT");
      return state;
  }
};
export const globalStore = createStore(reducer);
