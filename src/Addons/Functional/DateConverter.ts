import moment from "moment";

export const datetimeFormat = "YYYY-MM-DDTHH:mm:ss";
export const yearMonthFormat = "YYYY-MM";
export const dateFormat = "YYYY-MM-DD";

export const myMoment = (date: moment.MomentInput) => {
  return moment(date);
};
