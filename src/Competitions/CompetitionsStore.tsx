import { createStore } from "redux";
import { CompetitionModel } from "./ICompetitions";

const reducer = (
  state: CompetitionModel[] = [],
  action: { type: string; one: CompetitionModel; many: CompetitionModel[] }
) => {
  switch (action.type) {
    case "ADD_ONE":
      return [...state, action.one];
    case "ADD_MANY":
      return action.many;
    default:
      return state;
  }
};
export const competitionsStore = createStore(reducer);
