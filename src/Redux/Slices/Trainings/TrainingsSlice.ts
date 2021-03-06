import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";
import moment from "moment";
import { AttendanceModel } from "../../../Interfaces/IAttendance";
import { PaymentModel } from "../../../Interfaces/IPayment";
import { GlobalState } from "../../Store";
import {
  NullableTrainingEntry,
  NullableTrainingsShowedBooleans,
  NullableTrainingsStore,
  TrainingMonthInfo,
  TrainingsShowedBooleans,
  TrainingsStore,
} from "./ITrainingsSlice";

const initialState: TrainingsStore = {
  trainingMonth: {
    trainingInfos: [],
    trainingTrainees: [],
    info: { showedDate: moment() },
  },
  selected: {
    count: 0,
    selectedTrainees: [],
  },
  showedBooleans: {
    showAddTraining: false,
  },
};

const trainingsSlice = createSlice({
  name: "TrainingsSlice",
  initialState: initialState,
  reducers: {
    setTrainingsStore: (
      state,
      action: { type: string; payload: NullableTrainingsStore }
    ) => {
      return {
        ...state,
        ...action.payload,
        showedBooleans: {
          ...state.showedBooleans,
          ...action.payload.showedBooleans,
        },
      };
    },
    updateTrainingEntry: (
      state,
      action: {
        type: string;
        payload: { traineeID: number; training: NullableTrainingEntry };
      }
    ) => {
      return produce(state, (draftState) => {
        const oldTrainingEntry =
          draftState.trainingMonth.trainingTrainees[action.payload.traineeID]
            .trainingEntries[action.payload.training.eventID];
        draftState.trainingMonth.trainingTrainees[
          action.payload.traineeID
        ].trainingEntries[action.payload.training.eventID] = {
          ...oldTrainingEntry,
          ...action.payload.training,
        };
      });
    },
    unselectAllEntries: (state) => {
      return { ...state, selected: { count: 0, selectedTrainees: [] } };
    },
    selectEntry: (
      state,
      action: {
        type: string;
        payload: { trainingTraineeIndex: number; trainingEntryID: number };
      }
    ) => {
      return produce(state, (draftState) => {
        draftState.selected.selectedTrainees[
          action.payload.trainingTraineeIndex
        ].selectedTrainingEntries.push({
          trainingEntryID: action.payload.trainingEntryID,
        });
        draftState.selected.count++;
      });
    },
    unselectEntry: (
      state,
      action: {
        type: string;
        payload: { trainingTraineeIndex: number; trainingEntryIndex: number };
      }
    ) => {
      return produce(state, (draftState) => {
        draftState.selected.selectedTrainees[
          action.payload.trainingTraineeIndex
        ].selectedTrainingEntries.splice(action.payload.trainingEntryIndex, 1);
        draftState.selected.count--;
      });
    },
    selectEntryOnEmptyTrainee: (
      state,
      action: {
        type: string;
        payload: { trainingTraineeID: number; trainingEntryID: number };
      }
    ) => {
      return produce(state, (draftState) => {
        draftState.selected.selectedTrainees.push({
          trainingTraineeID: action.payload.trainingTraineeID,
          selectedTrainingEntries: [
            { trainingEntryID: action.payload.trainingEntryID },
          ],
        });
        draftState.selected.count++;
      });
    },
    addAttendances: (
      state,
      action: { type: string; payload: { attendances: AttendanceModel[] } }
    ) => {
      return produce(state, (draftState) => {
        action.payload.attendances.forEach((attendance) => {
          const traineeIndex =
            draftState.trainingMonth.trainingTrainees.findIndex(
              (trainee) => trainee.trainee.id === attendance.traineeID
            );
          const entryIndex = draftState.trainingMonth.trainingTrainees[
            traineeIndex
          ].trainingEntries.findIndex(
            (entry) => entry.eventID === attendance.eventID
          );
          if (entryIndex === -1) {
            draftState.trainingMonth.trainingTrainees[
              traineeIndex
            ].trainingEntries.push({
              eventID: attendance.eventID,
              payedAmount: 0,
              hasAttended: true,
              selected: false,
            });
          } else {
            draftState.trainingMonth.trainingTrainees[
              traineeIndex
            ].trainingEntries[entryIndex].hasAttended = true;
          }
        });
      });
    },
    addPayments: (
      state,
      action: { type: string; payload: { payments: PaymentModel[] } }
    ) => {
      return produce(state, (draftState) => {
        action.payload.payments.forEach((payment) => {
          const traineeIndex =
            draftState.trainingMonth.trainingTrainees.findIndex(
              (trainee) => trainee.trainee.id === payment.traineeID
            );
          const entryIndex = draftState.trainingMonth.trainingTrainees[
            traineeIndex
          ].trainingEntries.findIndex(
            (entry) => entry.eventID === payment.eventID
          );
          if (entryIndex === -1) {
            draftState.trainingMonth.trainingTrainees[
              traineeIndex
            ].trainingEntries.push({
              eventID: payment.eventID,
              payedAmount: payment.amount,
              hasAttended: false,
              selected: false,
            });
          } else {
            draftState.trainingMonth.trainingTrainees[
              traineeIndex
            ].trainingEntries[entryIndex].payedAmount += payment.amount;
          }
        });
      });
    },
    // setShowedBooleans: (
    //   state,
    //   action: {
    //     type: string;
    //     payload: { booleans: NullableTrainingsShowedBooleans };
    //   }
    // ) => {
    //   return {
    //     ...state,
    //     showedBooleans: { ...state.showedBooleans, ...action.payload.booleans },
    //   };
    // },
  },
});

export const trainingsActions = trainingsSlice.actions;
export default trainingsSlice.reducer;
export const getTrainingsSlice = (state: GlobalState): TrainingsStore => {
  return state.trainingsSlice;
};
export const getTrainingsMonthSettings = (
  state: GlobalState
): TrainingMonthInfo => {
  return state.trainingsSlice.trainingMonth.info;
};
export const getTrainingShowedBooleans = (
  state: GlobalState
): TrainingsShowedBooleans | undefined => {
  return state.trainingsSlice.showedBooleans;
};
