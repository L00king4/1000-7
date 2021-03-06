import { Moment } from "moment";

const urlPrefix = "https://127.0.0.1:44360/api/";

export class api {
  static Competitions = class {
    static Events = class {
      static Add = urlPrefix + "competitions/add";
      static GetAll = urlPrefix + "competitions/all";
      static GetByID = (id: number) =>
        urlPrefix + `competitions/${id.toString()}`;
      static GetSortedTrainees = (id: number) =>
        urlPrefix + `competitions/${id.toString()}/trainees`;
      static Remove = (id: number) =>
        urlPrefix + `competitions/remove/${id.toString()}`;
    };
    static Attendances = class {
      static Add = urlPrefix + "competitionattendances/add";
      static Remove = urlPrefix + "competitionattendances/remove";
    };
    static Payments = class {
      static Add = urlPrefix + "competitionpayments/add";
      static GetByEventID = (id: number) =>
        urlPrefix + `competitionpayments/byevent/${id.toString()}`;
    };
  };
  static Trainees = class {
    static GetAll = urlPrefix + "trainees/all";
    static Add = urlPrefix + "trainees/add";
    static Update = urlPrefix + "trainees/update";
    static UpdateRange = urlPrefix + "trainees/updaterange";
    static Remove = (id: number) => urlPrefix + `trainees/remove/${id}`;
  };
  static Trainings = class {
    static Events = class {
      static GetMonth = (date: Moment) =>
        urlPrefix + `trainings/getmonth/${date.format("YYYY-MM")}`;
    };
    static Attendances = class {
      static AddUniqueRange = urlPrefix + "trainingattendances/addrange/unique";
    };
    static Payments = class {
      static AddRange = urlPrefix + "trainingpayments/addrange";
    };
  };
}

export default api;
