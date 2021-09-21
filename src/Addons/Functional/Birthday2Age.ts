export const birthday2Age = (
  birthday: string | undefined
): number | undefined => {
  if (birthday) {
    let timeDiff = Date.now() - new Date(birthday).getTime();
    if (timeDiff < 0) {
      return undefined;
    }
    let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);

    return age;
  }

  return undefined;
};

export const birthday2AgeString = (birthday: string | undefined): string => {
  if (birthday) {
    let timeDiff = Math.abs(Date.now() - new Date(birthday).getTime());
    let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);

    return age.toString();
  }
  return "";
};
