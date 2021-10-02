import { CompetitionTraineeModel } from "../Competitions/ICompetitions";

export interface SortedTrainees {
  attendingTrainees: CompetitionTraineeModel[];
  notAttendingTrainees: CompetitionTraineeModel[];
}

export function getEmptySortedTrainees<SpecificTraineeModel>(): SortedTrainees {
  return { attendingTrainees: [], notAttendingTrainees: [] };
}
