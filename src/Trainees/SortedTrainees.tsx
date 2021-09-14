export interface SortedTrainees<SpecificTraineeModel> {
  attendingTrainees: SpecificTraineeModel[];
  notAttendingTrainees: SpecificTraineeModel[];
}
export function switchTrainee<SpecificTraineeModel>(
  trainee: SpecificTraineeModel,
  sortedTrainees: SortedTrainees<SpecificTraineeModel>
): SortedTrainees<SpecificTraineeModel> {
  const attIndex = sortedTrainees.attendingTrainees.indexOf(trainee);
  const notAttIndex = sortedTrainees.notAttendingTrainees.indexOf(trainee);
  if (attIndex !== -1) {
    return {
      attendingTrainees: [
        ...sortedTrainees.attendingTrainees.slice(0, attIndex),
        ...sortedTrainees.attendingTrainees.slice(attIndex + 1),
      ],
      notAttendingTrainees: [
        sortedTrainees.attendingTrainees[attIndex],
        ...sortedTrainees.notAttendingTrainees,
      ],
    };
  } else if (notAttIndex !== -1) {
    return {
      attendingTrainees: [
        ...sortedTrainees.attendingTrainees,
        sortedTrainees.notAttendingTrainees[notAttIndex],
      ],
      notAttendingTrainees: [
        ...sortedTrainees.notAttendingTrainees.slice(0, notAttIndex),
        ...sortedTrainees.notAttendingTrainees.slice(notAttIndex + 1),
      ],
    };
  }
  return sortedTrainees;
}

export function updateTrainee<SpecificTraineeModel>(
  trainee: SpecificTraineeModel,
  sortedTrainees: SortedTrainees<SpecificTraineeModel>
): SortedTrainees<SpecificTraineeModel> {
  // TODO: IMPLEMENT THIS SHIT!
  console.log("NOT IMPLEMENTED UPDATE TRAINEES");
  return sortedTrainees;
}

export function getEmptySortedTrainees<
  SpecificTraineeModel
>(): SortedTrainees<SpecificTraineeModel> {
  return { attendingTrainees: [], notAttendingTrainees: [] };
}
