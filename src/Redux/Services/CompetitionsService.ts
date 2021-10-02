import axios from "axios";
import { Dispatch } from "react";
import api from "../../ApiEndpoints";
import {
  CompetitionEntryKVP,
  CompetitionModel,
  CompetitionModelKVP,
  CompetitionTraineeModel,
  CompetitionTraineeModelKVP,
  NoIDCompetitionModel,
  TypedCompetitionTraineeModelKVP,
} from "../../Competitions/ICompetitions";
import {
  getEmptySortedTrainees,
  SortedTrainees,
} from "../../Trainees/SortedTrainees";
import { competitionsActions } from "../Slices/Competitions/CompetitionsSlice";
import {
  CompetitionEntry,
  CompetitionStore,
} from "../Slices/Competitions/ICompetitionsSlice";

export const fetchCompetitions = async (dispatch: Dispatch<any>) => {
  console.log("AAAA");
  const { data } = await axios.get<CompetitionModel[]>(
    api.Competitions.Events.GetAll
  );
  console.log("AAAA");
  let competitionEntries: CompetitionEntry[] = [];
  data.forEach((competition) =>
    competitionEntries.push({
      competition: competition,
      sortedTrainees: getEmptySortedTrainees(),
    })
  );
  dispatch(
    competitionsActions.setCompetitionStore({
      competitionStore: { competitionEntries: competitionEntries },
    })
  );
};

export const setSortedTrainees = (
  dispatch: Dispatch<any>,
  competitionEntry: CompetitionStore,
  manySortedTrainees: SortedTrainees
) => {
  throw new ReferenceError("NOT IMPLEMENTED");
  // dispatch(
  //   competitionsActions.setSortedTrainees({
  //     competitionEntryIndex: -1,
  //     manySortedTrainees: manySortedTrainees,
  //   })
  // );
};

export const fetchSortedTrainees = async (
  dispatch: Dispatch<any>,
  eventID: number,
  competitionEntryIndex: number
) => {
  const { data } = await axios.get<SortedTrainees>(
    api.Competitions.Events.GetSortedTrainees(eventID)
  );
  if (competitionEntryIndex !== -1) {
    dispatch(
      competitionsActions.setSortedTrainees({
        sortedTrainees: data,
        competitionEntryIndex: competitionEntryIndex,
      })
    );
  }
};

export const removeCompetitionAttendance = (
  dispatch: Dispatch<any>,
  traineeKVP: CompetitionTraineeModelKVP,
  competitionModelKVP: CompetitionModelKVP
) => {
  axios
    .post(api.Competitions.Attendances.Remove, {
      eventID: competitionModelKVP.competition.id,
      traineeID: traineeKVP.trainee.id,
    })
    .then((res) => {
      if (res.data !== -1) {
        dispatch(
          competitionsActions.removeCompetitionAttendance({
            competitionEntryIndex: competitionModelKVP.index,
            attendingTraineeIndex: traineeKVP.index,
          })
        );
      }
    });
};

export const addCompetitionAttendance = (
  dispatch: Dispatch<any>,
  traineeKVP: CompetitionTraineeModelKVP,
  competitionModelKVP: CompetitionModelKVP
) => {
  axios
    .post(api.Competitions.Attendances.Add, {
      eventID: competitionModelKVP.competition.id,
      traineeID: traineeKVP.trainee.id,
    })
    .then((res) => {
      if (res.data !== -1) {
        dispatch(
          competitionsActions.addCompetitionAttendance({
            competitionEntryIndex: competitionModelKVP.index,
            notAttendingTraineeIndex: traineeKVP.index,
          })
        );
      }
    });
};

export const removeCompetition = (
  dispatch: Dispatch<any>,
  competitionModelKVP: CompetitionModelKVP
) => {
  axios
    .get(api.Competitions.Events.Remove(competitionModelKVP.competition.id))
    .then((res) => {
      if (res.data > 0) {
        dispatch(
          competitionsActions.removeCompetitionEntry({
            competitionEntryIndex: competitionModelKVP.index,
          })
        );
      }
    });
};

export const addCompetitionEntry = (
  dispatch: Dispatch<any>,
  noidCompetition: NoIDCompetitionModel
) => {
  axios
    .post<number>(api.Competitions.Events.Add, noidCompetition)
    .then((res) => {
      if (res.data !== -1) {
        dispatch(
          competitionsActions.addCompetitionEntry({
            competitionEntry: {
              competition: {
                ...noidCompetition,
                id: res.data,
              },
              sortedTrainees: getEmptySortedTrainees(),
            },
          })
        );
      }
    });
};

export const updateCompetition = (
  dispatch: Dispatch<any>,
  competitionEntry: CompetitionEntry,
  competitionEntryIndex: number
) => {
  // dispatch(
  //   competitionsActions.updateCompetition({
  //     competitionEntry: competitionEntry,
  //     competitionEntryIndex: competitionEntryIndex,
  //   })
  // );
};

export const addCompetitionPayment = (
  dispatch: Dispatch<any>,
  competitionEntryKVP: CompetitionEntryKVP,
  traineeTypeKVP: TypedCompetitionTraineeModelKVP,
  amount: number
) => {
  competitionEntryKVP.competitionEntry.sortedTrainees[traineeTypeKVP.type][
    traineeTypeKVP.index
  ].amountPayed += amount;
  axios
    .post(api.Competitions.Payments.Add, {
      eventID: competitionEntryKVP.competitionEntry.competition.id,
      traineeID: traineeTypeKVP.trainee.id,
      amount: amount,
    })
    .then((res) => {
      if (res.data !== -1) {
        dispatch(
          competitionsActions.updateCompetitionEntry({
            nullableCompetitionEntry: {
              sortedTrainees: {
                ...competitionEntryKVP.competitionEntry.sortedTrainees,
              },
            },
            competitionEntryIndex: competitionEntryKVP.index,
          })
        );
      }
    });
};
