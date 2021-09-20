/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchTrainees,
  getTraineesStore,
  resetAllUpdatingTrainees,
  saveAllEditingTrainees,
} from "../../Redux/Services/TraineesService";
import "../../css/trainees/Trainees.css";
import { AddTrainee } from "../AddTrainee";
import { EditTraineesTable } from "./Edit/EditTraineesTable";
import { ViewTraineesTable } from "./View/VIewTraineesTable";
import axios from "axios";
import api from "../../ApiEndpoints";
import { DoubleTapButton } from "../../Addons/Components/DoubleTapButton";

export const TraineesTable = () => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);

  const onEditModeChangeHandler = () => {
    setEditMode(!editMode);
  };
  const onSaveAllClickHandler = () => {
    axios
      .post(api.Trainees.UpdateRange, getTraineesStore().editingTrainees)
      .then((res) => {
        if (res.data !== -1) {
          saveAllEditingTrainees(dispatch);
        }
      });
  };
  const onResetAllClickHandler = () => {
    resetAllUpdatingTrainees(dispatch);
  };
  useEffect(() => {
    fetchTrainees(dispatch);
  }, []);
  //test
  return (
    <div>
      <div>
        <button
          onClick={onEditModeChangeHandler}
          css={css`
            display: inline-block;
          `}
        >
          {editMode ? "Exit Editing Mode" : "Enter Editing Mode"}
        </button>
        {editMode && (
          <Fragment>
            <DoubleTapButton
              buttonText={"Save changes"}
              onApproveClickHandler={onSaveAllClickHandler}
            />
            <DoubleTapButton
              buttonText={"Reset all"}
              onApproveClickHandler={onResetAllClickHandler}
            />
          </Fragment>
        )}
        <AddTrainee />
      </div>
      {editMode ? <EditTraineesTable /> : <ViewTraineesTable />}
    </div>
  );
};
