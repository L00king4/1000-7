import axios from "axios";
import { Dispatch } from "react";
import api from "../../ApiEndpoints";
import {
  CompetitionModel,
  CompetitionTraineeModel,
} from "../../Competitions/ICompetitions";
import {
  getEmptySortedTrainees,
  SortedTrainees,
} from "../../Trainees/SortedTrainees";
import {
  competitionsActions,
  CompetitionStore,
} from "../Slices/CompetitionsSlice";
import globalStore from "../Store";

export const fetchCompetitions = async (dispatch: Dispatch<any>) => {
  const { data } = await axios.get<CompetitionModel[]>(
    api.Competitions.Events.GetAll
  );
  let manyCompetitionStores: CompetitionStore[] = [];
  data.forEach((competition) =>
    manyCompetitionStores.push({
      competition: competition,
      sortedTrainees: getEmptySortedTrainees(),
    })
  );
  dispatch(
    competitionsActions.setCompetitions({
      manyCompetitionStores: manyCompetitionStores,
    })
  );
};

export const setSortedTrainees = (
  dispatch: Dispatch<any>,
  oneCompetitionStore: CompetitionStore,
  manySortedTrainees: SortedTrainees<CompetitionTraineeModel>
) => {
  throw new ReferenceError("NOT IMPLEMENTED");
  // dispatch(
  //   competitionsActions.setSortedTrainees({
  //     oneCompetitionStoreIndex: -1,
  //     manySortedTrainees: manySortedTrainees,
  //   })
  // );
};

export const fetchSortedTrainees = async (
  dispatch: Dispatch<any>,
  oneCompetitionStore: CompetitionStore
) => {
  const { data } = await axios.get<SortedTrainees<CompetitionTraineeModel>>(
    api.Competitions.Events.GetSortedTrainees(
      oneCompetitionStore.competition.id
    )
  );
  const competitionStores = getCompetitionStores();
  const oneCompetitionStoreIndex = competitionStores.findIndex(
    (x) => x.competition === oneCompetitionStore.competition
  );
  if (oneCompetitionStoreIndex !== -1) {
    dispatch(
      competitionsActions.setSortedTrainees({
        manySortedTrainees: data,
        oneCompetitionStoreIndex: oneCompetitionStoreIndex,
      })
    );
  }
};

export const removeAttendingSortedTrainee = (
  dispatch: Dispatch<any>,
  oneSortedTrainee: CompetitionTraineeModel,
  oneCompetitionStore: CompetitionStore
) => {
  const comeptitionStores = getCompetitionStores();
  const competitionStoreIndex = comeptitionStores.findIndex(
    (x) => x === oneCompetitionStore
  );
  const competitionStore = comeptitionStores[competitionStoreIndex];
  if (competitionStore) {
    const attIndex =
      competitionStore.sortedTrainees.attendingTrainees.findIndex(
        (x) => x === oneSortedTrainee
      );
    if (attIndex !== -1) {
      dispatch(
        competitionsActions.addAttendingSortedTrainee({
          oneCompetitionStoreIndex: competitionStoreIndex,
          oneSortedTraineeIndex: attIndex,
        })
      );
    }
  }
};

export const addAttendingSortedTrainee = (
  dispatch: Dispatch<any>,
  oneSortedTrainee: CompetitionTraineeModel,
  oneCompetitionStore: CompetitionStore
) => {
  const comeptitionStores = getCompetitionStores();
  const competitionStoreIndex = comeptitionStores.findIndex(
    (x) => x === oneCompetitionStore
  );
  const competitionStore = comeptitionStores[competitionStoreIndex];
  if (competitionStore) {
    const notAttIndex =
      competitionStore.sortedTrainees.notAttendingTrainees.findIndex(
        (x) => x === oneSortedTrainee
      );
    if (notAttIndex !== -1) {
      dispatch(
        competitionsActions.removeAttendingSortedTrainee({
          oneCompetitionStoreIndex: competitionStoreIndex,
          oneSortedTraineeIndex: notAttIndex,
        })
      );
    }
  }
};

const getCompetitionStores = () => {
  return globalStore.getState().competitionsSlice;
};
