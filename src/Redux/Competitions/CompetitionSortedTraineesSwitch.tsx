import { GlobalStoreActions, reducerProps } from "../GlobalStore";

export const CompetitionStoredTraineesSwitch = ({
  action,
  state,
}: reducerProps) => {
  switch (action.type) {
    case GlobalStoreActions.CompetitionStore.SortedTrainees.UPDATE_ONE:
      const updateCompetitionStoreIndex = state.competitionStores.indexOf(
        action.oneCompetitionStore
      );
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
};
