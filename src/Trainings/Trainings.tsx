import { useDispatch } from "react-redux";
import {
  addAttendances,
  addPayments,
  unselectAllEntries,
} from "../Redux/Services/TrainingsService";
import { TrainingMonth } from "./Table/TrainingMonth";

export const Trainings = () => {
  const dispatch = useDispatch();
  const testingAmount = 20;
  const unselectHandler = () => {
    unselectAllEntries(dispatch);
  };
  const addAttendancesHandler = () => {
    addAttendances(dispatch);
  };
  const addPaymentsHandler = () => {
    addPayments(dispatch, testingAmount);
  };
  return (
    <div>
      <button onClick={unselectHandler}>Unselect All</button>
      <button onClick={addAttendancesHandler}>Add Attendances</button>
      <button onClick={addPaymentsHandler}>
        Pay Selected ({testingAmount})
      </button>
      <TrainingMonth />
      <button>NEXT</button>
      <button>PREVIOS</button>
      <button>
        GOTO <input type="month" name="" id="" />
      </button>
    </div>
  );
};
