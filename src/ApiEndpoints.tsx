import { idText } from "typescript";

const urlPrefix = "https://localhost:44360/api/";

// COMPETITIONS
export const GetAllCompetitions = urlPrefix + "competitions/all";
export const GetCompetitionByID = (id: number) =>
  urlPrefix + "competitions/" + id.toString();
export const GetSortedTrainees = (id: number) =>
  urlPrefix + "competitions/" + id.toString() + "/trainees";
export const AddCompetitionAttendance =
  urlPrefix + "competitionattendances/add";
// TRAINEES
export const GetAllTrainees = urlPrefix + "trainees/all";
