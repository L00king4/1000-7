import axios from "axios";
import { createStore } from "redux";
import api from "../../ApiEndpoints";
import { CompetitionModel } from "../ICompetitions";

export class AllCompetitionsActions {
  static ADD_ONE = "ADD_ONE";
  static SET_MANY = "SET_MANY";
  static ADD_MANY = "ADD_MANY";
  static REMOVE_ONE = "REMOVE_ONE";
}

const reducer = (
  state: CompetitionModel[] = [],
  action: { type: string; one: CompetitionModel; many: CompetitionModel[] }
) => {
  switch (action.type) {
    case "ADD_ONE":
      return [...state, action.one];
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
