export const birthday2Age = (birthday: string | null): number | null => {
  if (birthday) {
    let timeDiff = Date.now() - new Date(birthday).getTime();
    if (timeDiff < 0) {
      return null;
    }
    let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);

    return age;
  }

  return null;
};

export const birthday2AgeString = (birthday: string | null): string => {
  if (birthday) {
    let timeDiff = Math.abs(Date.now() - new Date(birthday).getTime());
    let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);

    return age.toString();
  }
  return "";
};
