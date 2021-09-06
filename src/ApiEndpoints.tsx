const urlPrefix = "https://localhost:44360/api/";

export class api {
  static Competitions = class {
    static Events = class {
      static Add = urlPrefix + "competitions/add";
      static GetAll = urlPrefix + "competitions/all";
      static GetByID = (id: number) =>
        urlPrefix + `competitions/${id.toString()}`;
      static GetSortedTrainees = (id: number) =>
        urlPrefix + `competitions/${id.toString()}/trainees`;
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
  };
}

export default api;
