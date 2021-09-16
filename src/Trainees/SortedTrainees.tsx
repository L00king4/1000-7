export interface SortedTrainees<SpecificTraineeModel> {
  attendingTrainees: SpecificTraineeModel[];
  notAttendingTrainees: SpecificTraineeModel[];
}

export function getEmptySortedTrainees<
  SpecificTraineeModel
>(): SortedTrainees<SpecificTraineeModel> {
  return { attendingTrainees: [], notAttendingTrainees: [] };
}
