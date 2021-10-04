import { SortedTrainees } from "../../Redux/Slices/Competitions/ICompetitionsSlice";

export function getEmptySortedTrainees(): SortedTrainees {
  return { attendingTrainees: [], notAttendingTrainees: [] };
}
