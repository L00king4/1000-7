import axios from "axios";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Competition } from "./Competition";
import {
  CompetitionModel,
  CompetitionTraineeModel,
  SortedTrainees,
} from "./ICompetitions";

export const CompetitionStore = ({
  competition,
}: {
  competition: CompetitionModel;
}) => {
  const reducer = (
    state: SortedTrainees = {
      attendingTrainees: [],
      notAttendingTrainees: [],
    },
    action: { type: string; one: CompetitionTraineeModel; many: SortedTrainees }
  ) => {
    switch (action.type) {
      case "SWITCH":
        const attIndex = state.attendingTrainees.indexOf(action.one);
        const notAttIndex = state.notAttendingTrainees.indexOf(action.one);
        if (attIndex !== -1) {
          return {
            attendingTrainees: [
              ...state.attendingTrainees.slice(0, attIndex),
              ...state.attendingTrainees.slice(attIndex + 1),
            ],
            notAttendingTrainees: [
              state.attendingTrainees[attIndex],
              ...state.notAttendingTrainees,
            ],
          };
        } else if (notAttIndex !== -1) {
          return {
            attendingTrainees: [
              ...state.attendingTrainees,
              state.notAttendingTrainees[notAttIndex],
            ],
            notAttendingTrainees: [
              ...state.notAttendingTrainees.slice(0, notAttIndex),
              ...state.notAttendingTrainees.slice(notAttIndex + 1),
            ],
          };
        }
        return state;
      case "UPDATE_ALL":
        return action.many;
      case "UPDATE_ONE":
        console.log("UPDATE_ONE");
        const elementID = state.attendingTrainees.findIndex(
          (x) => x.id === action.one.id
        );
        console.log(elementID);
        if (elementID !== -1) {
          return {
            notAttendingTrainees: state.notAttendingTrainees,
            attendingTrainees: [
              ...state.attendingTrainees.slice(0, elementID),
              action.one,
              ...state.attendingTrainees.slice(elementID + 1),
            ],
          };
        }
        return state;
      default:
        return state;
    }
  };
  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <Competition
        key={competition.id.toString() + " " + competition.name}
        competition={competition}
      />
    </Provider>
  );
};
