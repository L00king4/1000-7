import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { setTraineesShowedBooleans } from "../../../Redux/Services/TraineesService";
import { ViewTraineesTable } from "./VIewTraineesTable";

export const ViewTrainees = () => {
  const dispatch = useDispatch();

  const onEditModeChangeHandler = () => {
    setTraineesShowedBooleans(dispatch, { showUpdateAllTrainees: true });
  };
  return (
    <Fragment>
      <div className="TraineesActions">
        <button onClick={onEditModeChangeHandler}>Enter Editing Mode</button>
      </div>

      <ViewTraineesTable />
    </Fragment>
  );
};
