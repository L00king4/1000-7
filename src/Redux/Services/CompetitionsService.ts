import produce from "@reduxjs/toolkit/node_modules/immer";
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
  const competitionStoreIndex = competitionStores.findIndex(
    (x) => x.competition === oneCompetitionStore.competition
  );
  if (competitionStoreIndex !== -1) {
    dispatch(
      competitionsActions.setSortedTrainees({
        manySortedTrainees: data,
        oneCompetitionStoreIndex: competitionStoreIndex,
      })
    );
  }
};

export const removeCompetitionAttendance = (
  dispatch: Dispatch<any>,
  oneAttendingTrainee: CompetitionTraineeModel,
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
        (x) => x === oneAttendingTrainee
      );
    if (attIndex !== -1) {
      dispatch(
        competitionsActions.removeCompetitionAttendance({
          oneCompetitionStoreIndex: competitionStoreIndex,
          oneAttendingTraineeIndex: attIndex,
        })
      );
    }
  }
};

export const addCompetitionAttendance = (
  dispatch: Dispatch<any>,
  oneNotAttendingTrainee: CompetitionTraineeModel,
  oneCompetitionStore: CompetitionStore
) => {
  const comeptitionStores = getCompetitionStores();
  const competitionStoreIndex = comeptitionStores.findIndex(
    (x) => x === oneCompetitionStore
  );
  if (competitionStoreIndex !== -1) {
    const notAttIndex = comeptitionStores[
      competitionStoreIndex
    ].sortedTrainees.notAttendingTrainees.findIndex(
      (x) => x === oneNotAttendingTrainee
    );
    if (notAttIndex !== -1) {
      dispatch(
        competitionsActions.addCompetitionAttendance({
          oneCompetitionStoreIndex: competitionStoreIndex,
          oneNotAttendingTraineeIndex: notAttIndex,
        })
      );
    }
  }
};

export const removeCompetition = (
  dispatch: Dispatch<any>,
  oneCompetitionStore: CompetitionStore
) => {
  const oneCompetitionStoreIndex =
    getOneCompetitionStoreIndex(oneCompetitionStore);
  if (oneCompetitionStoreIndex !== -1) {
    dispatch(
      competitionsActions.removeCompetition({
        oneCompetitionStoreIndex: oneCompetitionStoreIndex,
      })
    );
  }
};

export const addCompetition = (
  dispatch: Dispatch<any>,
  oneCompetitionStore: CompetitionStore
) => {
  dispatch(
    competitionsActions.addCompetition({
      oneCompetitionStore: oneCompetitionStore,
    })
  );
};

export const updateCompetition = (
  dispatch: Dispatch<any>,
  oneCompetitionStore: CompetitionStore
) => {
  const oneCompetitionStoreIndex =
    getOneCompetitionStoreIndex(oneCompetitionStore);
  if (oneCompetitionStoreIndex !== -1) {
    dispatch(
      competitionsActions.updateCompetition({
        oneCompetitionStore: oneCompetitionStore,
        oneCompetitionStoreIndex: oneCompetitionStoreIndex,
      })
    );
  }
};

export const addCompetitionPayment = (
  dispatch: Dispatch<any>,
  oneCompetitionStore: CompetitionStore,
  trainee: CompetitionTraineeModel,
  amount: number
) => {
  const oneCompetitionStoreIndex =
    getOneCompetitionStoreIndex(oneCompetitionStore);
  if (oneCompetitionStoreIndex !== -1) {
    const attIndex = getCompetitionStores()[
      oneCompetitionStoreIndex
    ].sortedTrainees.attendingTrainees.findIndex((x) => x === trainee);
    if (attIndex !== -1) {
      const foundTrainee =
        oneCompetitionStore.sortedTrainees.attendingTrainees[attIndex];
      const updatedTrainee: CompetitionTraineeModel = {
        ...foundTrainee,
        amountPayed: foundTrainee.amountPayed + amount,
      };
      const updatedSortedTrainees: SortedTrainees<CompetitionTraineeModel> = {
        ...oneCompetitionStore.sortedTrainees,
        attendingTrainees: produce(
          oneCompetitionStore.sortedTrainees.attendingTrainees,
          (draftState) => {
            draftState.splice(attIndex, 1, updatedTrainee);
          }
        ),
      };
      dispatch(
        competitionsActions.updateCompetition({
          oneCompetitionStore: {
            ...oneCompetitionStore,
            sortedTrainees: updatedSortedTrainees,
          },
          oneCompetitionStoreIndex,
        })
      );
    }
  }
};

const getCompetitionStores = () => {
  return globalStore.getState().competitionsSlice;
};

const getOneCompetitionStoreIndex = (competitionStore: CompetitionStore) => {
  return globalStore
    .getState()
    .competitionsSlice.findIndex((x) => x === competitionStore);
};

const getOneCompetitionStore = (competitionStore: CompetitionStore) => {
  return globalStore
    .getState()
    .competitionsSlice.find((x) => x === competitionStore);
};
