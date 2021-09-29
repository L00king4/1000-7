import { useDispatch } from "react-redux";
import {
  addAttendances,
  unselectAllEntries,
} from "../Redux/Services/TrainingsService";
import { TrainingMonth } from "./Table/TrainingMonth";

export const Trainings = () => {
  const dispatch = useDispatch();
  const unselectHandler = () => {
    unselectAllEntries(dispatch);
  };
  const addAttendancesHandler = () => {
    addAttendances(dispatch);
  };
  return (
    <div>
      <button onClick={unselectHandler}>Unselect All</button>
      <button onClick={addAttendancesHandler}>Add Attendances</button>
      <TrainingMonth />
      <button>NEXT</button>
      <button>PREVIOS</button>
      <button>
        GOTO <input type="month" name="" id="" />
      </button>
    </div>
  );
};
