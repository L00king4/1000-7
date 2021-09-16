/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTrainees } from "../../Redux/Services/TraineesService";
import "../../css/trainees/Trainees.css";
import { AddTrainee } from "../AddTrainee";
import { EditTraineesTable } from "./Edit/EditTraineesTable";
import { ViewTraineesTable } from "./View/VIewTraineesTable";

export const TraineesTable = () => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);

  const editTraineesHandler = () => {
    setEditMode(!editMode);
  };
  useEffect(() => {
    fetchTrainees(dispatch);
  }, []);
  return (
    <div>
      <div css={css``}>
        <button
          onClick={editTraineesHandler}
          css={css`
            float: inline-end;
          `}
        >
          {editMode ? "Exit Editing Mode" : "Enter Editing Mode"}
        </button>
        {editMode && <button>Save changes</button>}
        <AddTrainee />
      </div>
      {editMode ? <EditTraineesTable /> : <ViewTraineesTable />}
    </div>
  );
};
