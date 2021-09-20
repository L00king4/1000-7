export enum SortingMethodEnum {
  "default" = 0,
  "asc" = 1,
  "desc" = -1,
}

export type SortingMethod = keyof typeof SortingMethodEnum;

export const getNextSortingMethod = (
  currentSortingMethod: SortingMethod
): SortingMethod => {
  switch (currentSortingMethod) {
    case "default":
      return "asc";
    case "asc":
      return "desc";
    case "desc":
      return "default";
  }
};
