import axios from "axios";
import { Moment } from "moment";
import { Dispatch } from "react";
import api from "../../ApiEndpoints";
import { AttendanceModel } from "../../Interfaces/IAttendance";
import {
  TrainingEntry,
  TrainingMonth,
} from "../Slices/Trainings/ITrainingsSlice";
import { trainingsActions } from "../Slices/Trainings/TrainingsSlice";
import globalStore from "../Store";

const defaultTrainingEntry: Omit<TrainingEntry, "eventID"> = {
  payedAmount: 0,
  hasAttended: false,
  selected: false,
};

export const fetchTrainingMonth = async (
  dispatch: Dispatch<any>,
  date: Moment
) => {
  const { data } = await axios.get<TrainingMonth>(
    api.Trainings.Events.GetMonth(date)
  );

  dispatch(
    trainingsActions.setTrainingsStore({
      trainingMonth: { ...data, settings: { showedDate: date } },
    })
  );
};
export const toggleSelectTrainingEntry = (
  dispatch: Dispatch<any>,
  trainingInfoID: number,
  trainingTraineeID: number
) => {
  const selectedTrainees = getTrainingStore().selectedTrainees;
  const selectedTraineeIndex = selectedTrainees.findIndex(
    (selectedTrainee) => selectedTrainee.trainingTraineeID === trainingTraineeID
  );
  if (selectedTraineeIndex !== -1) {
    const selectedTrainingEntryIndex = selectedTrainees[
      selectedTraineeIndex
    ].selectedTrainingEntries.findIndex(
      (trainingEntry) => trainingEntry.trainingEntryID === trainingInfoID
    );
    if (selectedTrainingEntryIndex !== -1) {
      dispatch(
        trainingsActions.unselectEntry({
          trainingEntryIndex: selectedTrainingEntryIndex,
          trainingTraineeIndex: selectedTraineeIndex,
        })
      );
    } else {
      dispatch(
        trainingsActions.selectEntry({
          trainingEntryID: trainingInfoID,
          trainingTraineeIndex: selectedTraineeIndex,
        })
      );
    }
  } else {
    dispatch(
      trainingsActions.selectEntryOnEmptyTrainee({
        trainingEntryID: trainingInfoID,
        trainingTraineeID: trainingTraineeID,
      })
    );
  }
};
export const addDefaultTrainingEntry = (
  dispatch: Dispatch<any>,
  trainingTraineeIndex: number,
  trainingInfoID: number,
  selected?: boolean
) => {
  // dispatch(
  //   trainingsActions.addTrainingEntry({
  //     trainingTraineeIndex: trainingTraineeIndex,
  //     trainingEntry: {
  //       ...defaultTrainingEntry,
  //       eventID: trainingInfoID,
  //       selected: selected ?? false,
  //     },
  //   })
  // );
};
export const addOnEmptyDefaultTrainingEntry = (
  dispatch: Dispatch<any>,
  trainingTraineeIndex: number,
  trainingEntryIndex: number,
  trainingInfoID: number,
  selected?: boolean
) => {
  // if (trainingEntryIndex === -1) {
  //   addDefaultTrainingEntry(
  //     dispatch,
  //     trainingTraineeIndex,
  //     trainingInfoID,
  //     selected
  //   );
  // }
};
export const unselectAllEntries = (dispatch: Dispatch<any>) => {
  dispatch(trainingsActions.unselectAllEntries());
};
export const addAttendances = (dispatch: Dispatch<any>) => {
  const attendances: AttendanceModel[] = [];
  getTrainingStore().selectedTrainees.forEach((trainee) => {
    trainee.selectedTrainingEntries.forEach((entry) => {
      attendances.push({
        TraineeID: trainee.trainingTraineeID,
        EventID: entry.trainingEntryID,
      });
    });
  });
  console.log(attendances);
  dispatch(trainingsActions.addAttendances({ attendances: attendances }));
  // axios.post(api.Trainings.Attendances.AddRange, attendances).then((res) => {
  //   if (res.data > 0) {
  //     dispatch(trainingsActions.addAttendances({ attendances: attendances }));
  //   }
  // });
};
const getTrainingStore = () => {
  return globalStore.getState().trainingsSlice;
};
