export const Date2Datetime = (date: string | undefined) => {
  return date ? date + "T00:00:00" : undefined;
};

export const Datetime2Date = (datetime: string | undefined) => {
  return datetime?.split("T")[0];
};
