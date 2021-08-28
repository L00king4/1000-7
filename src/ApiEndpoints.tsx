const urlPrefix = "https://localhost:44360/api/";

// COMPETITIONS
export const GetAllCompetitions = urlPrefix + "competitions/all";
export const GetCompetitionByID = (id: number) =>
  "competitions/" + id.toString();
export const GetCompetitionAttendancesByEventID = (eventid: number) =>
  "competitionattendances/" + eventid.toString();

// TRAINEES
export const GetAllTrainees = urlPrefix + "trainees/all";
