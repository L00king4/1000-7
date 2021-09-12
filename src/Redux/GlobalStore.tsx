import { type } from "os";
import { createStore } from "redux";
import {
  CompetitionTraineeModel,
  CompetitionModel,
} from "../Competitions/ICompetitions";
import { SortedTrainees } from "../Trainees/SortedTrainees";
import { CompetitionStoredTraineesSwitch } from "./Competitions/CompetitionSortedTraineesSwitch";
import { CompetitionStoreSelfSwitch } from "./Competitions/CompetitionStoreSelfSwitch";

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

export interface reducerProps {
  state: GlobalStore;
  action: {
    type: string;
    oneCompetitionStore: CompetitionStore;
    manyCompetitionStores: CompetitionStore[];
    oneCompetitionTrainee: CompetitionTraineeModel;
  };
}

// state: GlobalStore = { competitionStores: [] },
//   action: {
//     type: string;
//     oneCompetitionStore: CompetitionStore;
//     manyCompetitionStores: CompetitionStore[];
//     oneCompetitionTrainee: CompetitionTraineeModel;
//   }

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
          return CompetitionStoreSelfSwitch({ action, state });
        case GlobalStoreActions.CompetitionStore.SortedTrainees.prefix:
          return CompetitionStoredTraineesSwitch({ action, state });
        default:
          return state;
      }
    default:
      console.log("ROOT DEFAULT");
      return state;
  }
};
export const globalStore = createStore(reducer);
