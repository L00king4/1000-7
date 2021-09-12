import { GlobalStoreActions, reducerProps } from "../GlobalStore";

export const CompetitionStoreSelfSwitch = ({ action, state }: reducerProps) => {
  switch (action.type) {
    case GlobalStoreActions.CompetitionStore.UPDATE_ONE:
      const updateCompetitionStoreIndex = state.competitionStores.findIndex(
        (x) => x.competition === action.oneCompetitionStore.competition
      );
      console.log(
        "CHANGE",
        state.competitionStores[updateCompetitionStoreIndex]
      );
      console.log("CHANGE ON", action.oneCompetitionStore);
      state.competitionStores[updateCompetitionStoreIndex] =
        action.oneCompetitionStore;
      console.log(
        "[STATE] AFTER CHANGE",
        state.competitionStores[updateCompetitionStoreIndex]
      );
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
};
