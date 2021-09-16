export const Date2Datetime = (date: string | null) => {
  return date ? date + "T00:00:00" : null;
};

export const Datetime2Date = (datetime: string | null) => {
  return datetime?.split("T")[0];
};
