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
  console.log("FETCHING");
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
  console.log(globalStore.getState());
  dispatch(
    competitionsActions.setCompetitions({
      manyCompetitionStores: manyCompetitionStores,
    })
  );
  console.log(globalStore.getState());
};

export const setSortedTrainees = (
  dispatch: Dispatch<any>,
  oneCompetitionStore: CompetitionStore,
  manySortedTrainees: SortedTrainees<CompetitionTraineeModel>
) => {
  dispatch(
    competitionsActions.setSortedTrainees({
      oneCompetitionStore: oneCompetitionStore,
      manySortedTrainees: manySortedTrainees,
    })
  );
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
  //   console.log(globalStore.getState());
  dispatch(
    competitionsActions.setSortedTrainees({
      manySortedTrainees: data,
      oneCompetitionStore: oneCompetitionStore,
    })
  );
  //   console.log(globalStore.getState());
};
