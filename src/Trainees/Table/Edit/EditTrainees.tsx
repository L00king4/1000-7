import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { DoubleTapButton } from "../../../Addons/Components/DoubleTapButton";
import {
  resetAllUpdatingTrainees,
  saveAllEditingTrainees,
  setTraineesShowedBooleans,
} from "../../../Redux/Services/TraineesService";
import { EditTraineesTable } from "./EditTraineesTable";

export const EditTrainees = () => {
  const dispatch = useDispatch();
  const onEditModeChangeHandler = () => {
    setTraineesShowedBooleans(dispatch, { showUpdateAllTrainees: false });
  };
  const onSaveAllClickHandler = () => {
    saveAllEditingTrainees(dispatch);
  };
  const onResetAllClickHandler = () => {
    resetAllUpdatingTrainees(dispatch);
  };
  return (
    <Fragment>
      <div className="TraineesTableActions">
        <button onClick={onEditModeChangeHandler}>Exit Editing Mode</button>
        <DoubleTapButton
          buttonText={"Save changes"}
          onApproveClickHandler={onSaveAllClickHandler}
        />
        <DoubleTapButton
          buttonText={"Reset all"}
          onApproveClickHandler={onResetAllClickHandler}
        />
      </div>
      <EditTraineesTable />
    </Fragment>
  );
};
