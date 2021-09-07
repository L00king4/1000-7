import axios from "axios";
import { createStore } from "redux";
import api from "../../ApiEndpoints";
import { CompetitionModel } from "../ICompetitions";

let fetchedCompetitions: CompetitionModel[] = [];
const reducer = (
  state: CompetitionModel[] = fetchedCompetitions,
  action: { type: string; one: CompetitionModel; many: CompetitionModel[] }
) => {
  switch (action.type) {
    case "ADD_ONE":
      return [...state, action.one];
    case "SET_MANY":
      return action.many;
    case "ADD_MANY":
      return [...state, ...action.many];
    default:
      return state;
  }
};
export const competitionsStore = createStore(reducer);
