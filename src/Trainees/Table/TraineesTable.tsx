/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchTrainees,
  getTraineesStore,
  saveEditingTrainees,
} from "../../Redux/Services/TraineesService";
import "../../css/trainees/Trainees.css";
import { AddTrainee } from "../AddTrainee";
import { EditTraineesTable } from "./Edit/EditTraineesTable";
import { ViewTraineesTable } from "./View/VIewTraineesTable";
import axios from "axios";
import api from "../../ApiEndpoints";

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
          saveEditingTrainees(dispatch);
        }
      });
  };
  useEffect(() => {
    fetchTrainees(dispatch);
  }, []);
  //test
  return (
    <div>
      <div css={css``}>
        <button
          onClick={onEditModeChangeHandler}
          css={css`
            float: inline-end;
          `}
        >
          {editMode ? "Exit Editing Mode" : "Enter Editing Mode"}
        </button>
        {editMode && (
          <button onClick={onSaveAllClickHandler}>Save changes</button>
        )}
        <AddTrainee />
      </div>
      {editMode ? <EditTraineesTable /> : <ViewTraineesTable />}
    </div>
  );
};
