import moment, { Moment } from "moment";

export const birthday2Age = (birthday: Moment): number | undefined => {
  const years = moment().diff(birthday, "years");
  return isNaN(years) ? undefined : years;
};
