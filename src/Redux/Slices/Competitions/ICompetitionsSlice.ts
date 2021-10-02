import { CompetitionModel } from "../../../Competitions/ICompetitions";
import { SortedTrainees } from "../../../Trainees/SortedTrainees";

export interface CompetitionStore {
  competitionEntries: CompetitionEntry[];
}

export interface CompetitionEntry {
  competition: CompetitionModel;
  sortedTrainees: SortedTrainees;
}

export interface NullableCompetitionEntry {
  competition?: CompetitionModel;
  sortedTrainees?: SortedTrainees;
}
